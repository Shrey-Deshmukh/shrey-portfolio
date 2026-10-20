import { useEffect, useState } from "react"
import StatusBar from "./components/StatusBar"
import Hero from "./components/Hero"
import About from "./components/About"
import Experience from "./components/Experience"
import Projects from "./components/Projects"
import Education from "./components/Education"
import Leadership from "./components/Leadership"
import Contact from "./components/Contact"
import Footer from "./components/Footer"

function initialTheme() {
  try {
    const saved = localStorage.getItem("theme")
    if (saved === "light" || saved === "dark") return saved
  } catch {
    // storage unavailable; fall back to system preference
  }
  return window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark"
}

export default function App() {
  const [theme, setTheme] = useState(initialTheme)

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    try {
      localStorage.setItem("theme", theme)
    } catch {
      // ignore
    }
  }, [theme])

  return (
    <div className="page">
      <a className="skip-link" href="#about">Skip to content</a>
      <StatusBar theme={theme} onToggleTheme={() => setTheme((t) => (t === "dark" ? "light" : "dark"))} />

      <main className="main">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Education />
        <Leadership />
        <Contact />
      </main>

      <Footer />
    </div>
  )
}
