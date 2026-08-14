import { useEffect, useState } from "react"

const STORAGE_KEY = "padam-theme"

export default function Appearance() {
  const [dark, setDark] = useState(false)
  const [ready, setReady] = useState(false)

  useEffect(() => {
    setDark(document.documentElement.classList.contains("dark"))
    setReady(true)
  }, [])

  const choose = (next: boolean) => {
    setDark(next)
    window.localStorage.setItem(STORAGE_KEY, next ? "dark" : "light")
    document.documentElement.classList.toggle("dark", next)
  }

  return (
    <div className="v-theme" role="group" aria-label="Theme">
      <button
        type="button"
        aria-label="Light theme"
        aria-pressed={ready && !dark}
        onClick={() => choose(false)}
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
          <circle cx="12" cy="12" r="4" />
          <path
            d="M12 3v1.6M12 19.4V21M3 12h1.6M19.4 12H21M5.6 5.6l1.1 1.1M17.3 17.3l1.1 1.1M18.4 5.6l-1.1 1.1M6.7 17.3l-1.1 1.1"
            strokeLinecap="round"
          />
        </svg>
      </button>
      <button
        type="button"
        aria-label="Dark theme"
        aria-pressed={ready && dark}
        onClick={() => choose(true)}
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
          <path d="M15.5 3.5a8.2 8.2 0 1 0 5 13.3A7.2 7.2 0 0 1 15.5 3.5Z" strokeLinejoin="round" />
        </svg>
      </button>
    </div>
  )
}
