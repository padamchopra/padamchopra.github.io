import Head from "next/head"
import Link from "next/link"
import { useRouter } from "next/router"
import { useEffect, useState, type ReactNode } from "react"
import Appearance from "@/components/Appearance"
import { nav, site } from "@/data/site"

export default function Layout({
  title,
  description,
  fill,
  children,
}: {
  title?: string
  description?: string
  fill?: boolean
  children: ReactNode
}) {
  const { pathname } = useRouter()
  const home = pathname === "/"
  const pageTitle = title ? `${title} — ${site.name}` : site.name
  const [menuOpen, setMenuOpen] = useState(false)
  const [compact, setCompact] = useState(false)

  useEffect(() => {
    const media = window.matchMedia("(max-width: 720px)")
    const sync = () => setCompact(media.matches)
    sync()
    media.addEventListener("change", sync)
    return () => media.removeEventListener("change", sync)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
  }, [pathname])

  useEffect(() => {
    if (!menuOpen) return
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false)
    }
    const previous = document.body.style.overflow
    document.body.style.overflow = "hidden"
    window.addEventListener("keydown", onKey)
    return () => {
      document.body.style.overflow = previous
      window.removeEventListener("keydown", onKey)
    }
  }, [menuOpen])

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={description || site.description} />
      </Head>
      <div
        className={["v-root v-paper", menuOpen ? "is-menu" : "", fill ? "is-fill" : ""]
          .filter(Boolean)
          .join(" ")}
      >
        <a className="skip-link" href="#content">
          Skip to content
        </a>
        <div className="v-menu-bar" aria-hidden={!compact}>
          <button
            type="button"
            className="v-menu-btn"
            aria-expanded={menuOpen}
            aria-controls="site-nav"
            tabIndex={compact ? undefined : -1}
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span className="sr-only">{menuOpen ? "Close menu" : "Open menu"}</span>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden="true">
              {menuOpen ? (
                <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
              ) : (
                <path d="M5 7h14M5 12h14M5 17h14" strokeLinecap="round" />
              )}
            </svg>
          </button>
        </div>
        {menuOpen ? (
          <button
            type="button"
            className="v-menu-back"
            aria-label="Close menu"
            onClick={() => setMenuOpen(false)}
          />
        ) : null}
        <aside
          id="site-nav"
          className="v-side"
          aria-hidden={compact && !menuOpen ? true : undefined}
          inert={compact && !menuOpen ? true : undefined}
        >
          <nav className="v-nav" aria-label="Sections">
            {nav.map((item) => {
              const current =
                pathname === item.href ||
                (item.href === "/notes" && pathname.startsWith("/notes"))
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={current ? "is-current" : undefined}
                  aria-current={current ? "page" : undefined}
                >
                  {item.label}
                </Link>
              )
            })}
          </nav>
          <div className="v-side-foot">
            {site.socials.map((item) => (
              <a
                key={item.label}
                className="v-link"
                href={item.href}
                target="_blank"
                rel="noreferrer"
              >
                {item.label}
              </a>
            ))}
          </div>
        </aside>
        <main id="content" className={fill ? "v-main is-fill" : "v-main"}>
          <div className="v-mast">
            <div className="v-title">
              {home ? (
                <figure className="v-portrait">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/padam_chopra_side.jpeg" alt="" />
                </figure>
              ) : null}
              {home ? (
                <h1 className="v-name">{site.name}</h1>
              ) : (
                <Link href="/" className="v-name">
                  {site.name}
                </Link>
              )}
              <Appearance />
            </div>
          </div>
          {children}
        </main>
      </div>
    </>
  )
}

export function PageHead({ title, dek }: { title: string; dek?: string }) {
  return (
    <header className="page-head">
      <h1>{title}</h1>
      {dek ? <p className="dek">{dek}</p> : null}
    </header>
  )
}
