const localLogos: { match: (url: URL) => boolean; src: string }[] = [
  { match: (url) => url.hostname.endsWith("air.chat"), src: "/logos/airchat.png" },
  { match: (url) => url.hostname === "jup.ag" || url.hostname.endsWith(".jup.ag"), src: "/logos/jupiter.png" },
  { match: (url) => url.hostname.includes("1password.com"), src: "/logos/1password.png" },
  { match: (url) => url.hostname.includes("ritual.co"), src: "/logos/ritual.png" },
  {
    match: (url) => url.hostname.includes("dayforce.com") || url.hostname.includes("ceridian.com"),
    src: "/logos/ceridian.png",
  },
  { match: (url) => url.hostname.includes("uwaterloo.ca"), src: "/logos/waterloo.png" },
  { match: (url) => /github\.com\/padamchopra\/sideload/i.test(url.href), src: "/logos/sideload.png" },
  { match: (url) => /github\.com\/padamchopra\/mission-control/i.test(url.href), src: "/logos/mission-control.png" },
  { match: (url) => /github\.com\/padamchopra\/linear-cli/i.test(url.href), src: "/logos/linear.png" },
  { match: (url) => /github\.com\/padamchopra\/habitus/i.test(url.href), src: "/logos/habitus.png" },
]

export function logoFor(href: string, explicit?: string) {
  if (explicit) return explicit
  try {
    const url = new URL(href)
    const local = localLogos.find((item) => item.match(url))
    if (local) return local.src
    return `https://www.google.com/s2/favicons?domain=${url.hostname}&sz=128`
  } catch {
    return undefined
  }
}
