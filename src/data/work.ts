export type WorkItem = {
  company: string
  href: string
  role: string
  years: string
  location?: string
  summary: string
}

export const work: WorkItem[] = [
  {
    company: "Jupiter",
    href: "https://jup.ag",
    role: "Mobile engineer",
    years: "2024 – Present",
    location: "Dubai",
    summary:
      "Building Jupiter Mobile. Android and Flutter, close to the product, sweating the details that make a trading app feel fast.",
  },
  {
    company: "Airchat",
    href: "https://www.air.chat",
    role: "Android engineer",
    years: "2023–24",
    summary:
      "Worked on the Android app for Airchat, a social audio product.",
  },
  {
    company: "1Password",
    href: "https://1password.com",
    role: "SWE intern, Android",
    years: "2022",
    location: "Toronto",
    summary:
      "State management with Kotlin flows and coroutines, a refactor of autofill, and a test suite that scores autofill requests against a set of rules.",
  },
  {
    company: "Ritual",
    href: "https://ritual.co",
    role: "Mobile engineer",
    years: "2021–22",
    location: "Toronto",
    summary:
      "Led a Jetpack Compose adoption, shipped a rewards feature, and built a reusable Compose component library. Stayed on part-time after the internship.",
  },
  {
    company: "Ceridian Dayforce",
    href: "https://www.dayforce.com",
    role: "SWE & NLP intern",
    years: "2020–21",
    summary:
      "Android accessibility work, paginated suggestions, dynamic shortcuts; later an NLP term improving named-entity recognition for non-English names.",
  },
]
