import Link from "next/link"
import type { ReactNode } from "react"
import { logoFor } from "@/data/logos"

type IcoLinkProps = {
  href: string
  children: ReactNode
  size?: "inline" | "row"
  icon?: string
  scroll?: boolean
  className?: string
}

export default function IcoLink({
  href,
  children,
  size = "inline",
  icon,
  scroll,
  className,
}: IcoLinkProps) {
  const src = logoFor(href, icon)
  const px = size === "row" ? 24 : 16
  const classes = [size === "row" ? "v-ico is-row" : "v-ico", className]
    .filter(Boolean)
    .join(" ")
  const inner = (
    <>
      {src ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={src} alt="" width={px} height={px} />
      ) : null}
      <span>{children}</span>
    </>
  )

  if (href.startsWith("/")) {
    return (
      <Link href={href} className={classes} scroll={scroll}>
        {inner}
      </Link>
    )
  }

  return (
    <a className={classes} href={href} target="_blank" rel="noreferrer">
      {inner}
    </a>
  )
}
