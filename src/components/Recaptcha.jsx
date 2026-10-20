import { useEffect, useRef } from "react"

let scriptPromise = null

// Loads Google's reCAPTCHA v2 script once, on first use.
function loadRecaptcha() {
  if (window.grecaptcha?.render) return Promise.resolve(window.grecaptcha)
  if (!scriptPromise) {
    scriptPromise = new Promise((resolve, reject) => {
      window.__onRecaptchaLoad = () => resolve(window.grecaptcha)
      const s = document.createElement("script")
      s.src = "https://www.google.com/recaptcha/api.js?onload=__onRecaptchaLoad&render=explicit"
      s.async = true
      s.onerror = () => {
        scriptPromise = null
        reject(new Error("reCAPTCHA failed to load"))
      }
      document.head.appendChild(s)
    })
  }
  return scriptPromise
}

// "I'm not a robot" checkbox. Calls onToken with the token, or "" when it expires.
// Bump resetSignal to clear it after a submission (tokens are single-use).
export default function Recaptcha({ siteKey, onToken, onError, resetSignal }) {
  const el = useRef(null)
  const widget = useRef(null)
  const onTokenRef = useRef(onToken)
  const onErrorRef = useRef(onError)

  useEffect(() => {
    onTokenRef.current = onToken
    onErrorRef.current = onError
  })

  useEffect(() => {
    let cancelled = false
    loadRecaptcha()
      .then((g) => {
        if (cancelled || !el.current || widget.current !== null) return
        widget.current = g.render(el.current, {
          sitekey: siteKey,
          theme: document.documentElement.dataset.theme === "light" ? "light" : "dark",
          size: window.innerWidth < 480 ? "compact" : "normal",
          callback: (token) => onTokenRef.current(token),
          "expired-callback": () => onTokenRef.current(""),
          "error-callback": () => onTokenRef.current(""),
        })
      })
      .catch(() => onErrorRef.current?.())
    return () => {
      cancelled = true
    }
  }, [siteKey])

  useEffect(() => {
    if (resetSignal && widget.current !== null) window.grecaptcha.reset(widget.current)
  }, [resetSignal])

  return <div className="recaptcha" ref={el} />
}
