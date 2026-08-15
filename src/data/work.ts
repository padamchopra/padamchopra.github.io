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
    role: "Software engineer",
    years: "Dec 2024 – Present",
    summary:
      "Native Android for Jupiter Mobile, and the backends around it. I built the first transfer API; other teams and outside consumers use it too. I’ve also been putting AI into how we ship Android: skills and a harness in the app, and a review plugin the rest of the team now uses.",
  },
  {
    company: "Airchat",
    href: "https://www.air.chat",
    role: "Android developer",
    years: "Sep 2023 – Dec 2024",
    summary:
      "First Android engineer. I built the app from the ground up in Kotlin — architecture, UI, the thing that shipped.",
  },
  {
    company: "theScore",
    href: "https://www.thescore.com",
    role: "Mobile developer",
    years: "May 2023 – Aug 2023",
    location: "Toronto",
    summary:
      "A summer on the Android sports app. I was a co-op, and I worked like a teammate: same tickets, same reviews, shipping with everyone else.",
  },
  {
    company: "1Password",
    href: "https://1password.com",
    role: "Android developer",
    years: "May 2022 – Aug 2022",
    location: "Canada",
    summary:
      "Android autofill: Kotlin flows and coroutines for state, a refactor of how requests get handled, and a test suite that scores those requests against a set of rules.",
  },
  {
    company: "Ritual",
    href: "https://ritual.co",
    role: "Software engineer",
    years: "Sep 2021 – Mar 2022",
    location: "Toronto",
    summary:
      "Brought Jetpack Compose in so UI could ship faster and stay consistent. Built a rewards feature in Compose and coroutines, and kept chipping at modularisation. Stayed on part-time after the co-op.",
  },
  {
    company: "Ceridian",
    href: "https://www.dayforce.com",
    role: "NLP developer",
    years: "Jan 2021 – Apr 2021",
    location: "Toronto",
    summary:
      "Stood up a Java NLP microservice other Dayforce products could call. Improved named-entity recognition for non-English names and client-specific terms — misspellings, things that only sound alike. Wired up CI/CD for that service.",
  },
  {
    company: "Ceridian",
    href: "https://www.dayforce.com",
    role: "Android developer",
    years: "May 2020 – Aug 2020",
    location: "Toronto",
    summary:
      "Paginated suggestions so text fields were faster and lighter on the network. Accessibility work, shortcuts to a user’s favourite widgets, and a login revamp while we were putting a shared pattern library together.",
  },
]
