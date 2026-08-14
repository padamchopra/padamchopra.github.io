import type { ReactNode } from "react"
import { logoFor } from "@/data/logos"

type IcoLinkProps = {
  href: string
  children: ReactNode
  size?: "inline" | "row"
  icon?: string
}

export default function IcoLink({ href, children, size = "inline", icon }: IcoLinkProps) {
  const src = logoFor(href, icon)
  const px = size === "row" ? 24 : 16

  return (
    <a
      className={size === "row" ? "v-ico is-row" : "v-ico"}
      href={href}
      target="_blank"
      rel="noreferrer"
    >
      {src ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={src} alt="" width={px} height={px} />
      ) : null}
      <span>{children}</span>
    </a>
  )
}
