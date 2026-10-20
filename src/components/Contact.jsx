/* global __RECAPTCHA_KEY__ */
import { useState } from "react"
import { motion, useReducedMotion } from "motion/react"
import Section from "./Section"
import Recaptcha from "./Recaptcha"
import { profile } from "../data/profile"

// Set from SITE_RECAPTCHA_KEY at build time; empty locally, where the check is skipped.
const RECAPTCHA_KEY = __RECAPTCHA_KEY__

const EMPTY = { name: "", email: "", message: "" }
const PACKET_MS = 700

// Submissions go to Netlify Forms; the matching static form lives in index.html.
async function sendMessage(fields, botField, captchaToken) {
  const res = await fetch("/", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      "form-name": "contact",
      "bot-field": botField,
      "g-recaptcha-response": captchaToken,
      ...fields,
    }).toString(),
  })
  if (!res.ok) throw new Error(`HTTP ${res.status}`)
}

export default function Contact() {
  const reduce = useReducedMotion()
  const [fields, setFields] = useState(EMPTY)
  const [botField, setBotField] = useState("")
  const [status, setStatus] = useState("idle") // idle | sending | sent | error
  const [replies, setReplies] = useState([])
  const [copied, setCopied] = useState(false)
  // The robot check (and Google's script) only loads once someone starts using the form.
  const [armed, setArmed] = useState(false)
  const [captchaToken, setCaptchaToken] = useState("")
  const [captchaReset, setCaptchaReset] = useState(0)
  const [captchaFailed, setCaptchaFailed] = useState(false)

  const sending = status === "sending"
  const needsCaptcha = Boolean(RECAPTCHA_KEY)
  const canSend = !sending && (!needsCaptcha || captchaToken !== "")
  const update = (key) => (e) => setFields((f) => ({ ...f, [key]: e.target.value }))
  const log = (line, tone) => setReplies((r) => [...r.slice(-2), { line, tone, id: Date.now() }])

  async function ping(e) {
    e.preventDefault()
    if (!canSend) return
    setStatus("sending")
    const started = performance.now()
    try {
      // Let the packet finish crossing even when the request is quick.
      await Promise.all([
        sendMessage(fields, botField, captchaToken),
        new Promise((r) => setTimeout(r, reduce ? 0 : PACKET_MS)),
      ])
      const ms = Math.round(performance.now() - started)
      log(`64 bytes from shrey: message delivered ✓ time=${ms}ms`, "ok")
      setFields(EMPTY)
      setStatus("sent")
    } catch {
      log(`ping: message not delivered, please email ${profile.email} instead`, "err")
      setStatus("error")
    }
    // reCAPTCHA tokens are single-use, so require a fresh check for the next message.
    setCaptchaToken("")
    setCaptchaReset((n) => n + 1)
  }

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(profile.email)
      setCopied(true)
      setTimeout(() => setCopied(false), 1800)
    } catch {
      window.location.href = `mailto:${profile.email}`
    }
  }

  return (
    <Section id="contact" index={6} command="ping shrey" title="Contact">
      <div className="card contact">
        <p className="contact-lead">
          Graduating in December 2026 and looking for full-time software engineering roles.{" "}
          {profile.contactForm
            ? "Send me a message below, or reach me directly by email or LinkedIn."
            : "The best way to reach me is email or LinkedIn."}
        </p>

        {profile.contactForm && (
        <form className="ping-form" name="contact" onSubmit={ping} onFocus={() => setArmed(true)}>
          <div className="ping-lane" aria-hidden="true">
            <span className="mono small">you</span>
            <div className="ping-track">
              {sending && !reduce && (
                <motion.span
                  className="ping-packet"
                  initial={{ left: "0%" }}
                  animate={{ left: "100%" }}
                  transition={{ duration: PACKET_MS / 1000, ease: "easeInOut" }}
                />
              )}
            </div>
            <span className="mono small">shrey</span>
          </div>

          <div className="terminal mono">
            <div><span className="accent">$</span> ping shrey --message</div>

            <label className="ping-field">
              <span className="ping-key">name:</span>
              <input
                name="name" required autoComplete="name" placeholder="Jane Doe"
                value={fields.name} onChange={update("name")} disabled={sending}
              />
            </label>
            <label className="ping-field">
              <span className="ping-key">email:</span>
              <input
                name="email" type="email" required autoComplete="email" placeholder="jane@company.com"
                value={fields.email} onChange={update("email")} disabled={sending}
              />
            </label>
            <label className="ping-field ping-field-message">
              <span className="ping-key">message:</span>
              <textarea
                name="message" required rows={4} placeholder="Hi Shrey, …"
                value={fields.message} onChange={update("message")} disabled={sending}
              />
            </label>

            {/* Honeypot: hidden from people, filled in by bots, rejected by Netlify. */}
            <label className="visually-hidden" aria-hidden="true">
              Don't fill this in
              <input name="bot-field" tabIndex={-1} autoComplete="off" value={botField} onChange={(e) => setBotField(e.target.value)} />
            </label>

            <div role="log" aria-live="polite">
              {replies.map((r) => (
                <div key={r.id} className={r.tone === "ok" ? "reply-ok" : "reply-err"}>{r.line}</div>
              ))}
            </div>
          </div>

          {needsCaptcha && armed && (
            <div className="captcha-row">
              <Recaptcha
                siteKey={RECAPTCHA_KEY}
                onToken={setCaptchaToken}
                onError={() => setCaptchaFailed(true)}
                resetSignal={captchaReset}
              />
              <p className={`mono small ${captchaFailed ? "reply-err" : "muted"}`}>
                {captchaFailed
                  ? `robot check couldn't load (an ad blocker?), please email ${profile.email} instead`
                  : captchaToken
                    ? "check passed ✓"
                    : "complete the check to send"}
              </p>
            </div>
          )}

          <button className="btn ping-submit" type="submit" disabled={!canSend}>
            {sending ? "pinging…" : "ping shrey ↗"}
          </button>
        </form>
        )}

        <div className={profile.contactForm ? "contact-direct" : undefined}>
          {profile.contactForm && <span className="mono muted small">or reach me directly:</span>}
          <div className="hero-actions">
            <a className={profile.contactForm ? "btn btn-secondary" : "btn"} href={`mailto:${profile.email}`}>
              {profile.email}
            </a>
            <button className="btn btn-secondary" type="button" onClick={copyEmail}>
              {copied ? "copied ✓" : "Copy Email"}
            </button>
            <a className="btn btn-secondary" href={profile.linkedin} target="_blank" rel="noreferrer">
              LinkedIn
            </a>
            <a className="btn btn-secondary" href={profile.github} target="_blank" rel="noreferrer">
              GitHub
            </a>
          </div>
        </div>
      </div>
    </Section>
  )
}
