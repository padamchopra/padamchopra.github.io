import Head from "next/head"
import Link from "next/link"
import { useRouter } from "next/router"
import type { ReactNode } from "react"
import Appearance from "@/components/Appearance"
import { nav, site } from "@/data/site"

export default function Layout({
  title,
  description,
  children,
}: {
  title?: string
  description?: string
  children: ReactNode
}) {
  const { pathname } = useRouter()
  const home = pathname === "/"
  const pageTitle = title ? `${title} — ${site.name}` : site.name

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={description || site.description} />
      </Head>
      <div className="v-root v-paper">
        <a className="skip-link" href="#content">
          Skip to content
        </a>
        <div className="v-shell">
          <aside className="v-side">
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
          <main id="content" className="v-main">
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
