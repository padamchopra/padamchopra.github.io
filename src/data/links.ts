export type RecLink = {
  name: string
  href: string
  line: string
  year?: string
}

export type RecCollection = {
  id: string
  title: string
  dek?: string
  links: RecLink[]
}

export const collections: RecCollection[] = [
  {
    id: "press",
    title: "Me in press",
    dek: "A few things that got written down.",
    links: [
      {
        name: "Algorand",
        href: "https://medium.com/algorand/building-on-algorand-deltahack-hackathon-recap-and-code-7849e21e3bb2",
        line: "DeltaHacks recap — Paysy",
        year: "2020",
      },
      {
        name: "YourStory",
        href: "https://yourstory.com/2019/01/students-app-deaf-blind-mute-communicate",
        line: "Students build an app for the deaf, blind, and mute",
        year: "2019",
      },
      {
        name: "Microsoft",
        href: "https://news.microsoft.com/en-in/ai-solutions-dominate-the-16th-edition-of-microsoft-imagine-cup-india-finals/",
        line: "AI solutions dominate Imagine Cup India finals",
        year: "2018",
      },
      {
        name: "Digit",
        href: "https://www.youtube.com/watch?v=rXUREJo5OXo",
        line: "Imagine Cup coverage",
        year: "2018",
      },
      {
        name: "IELTS India",
        href: "https://www.youtube.com/watch?v=Ujp-Q4G3Uq0",
        line: "Band 8.5",
        year: "2018",
      },
      {
        name: "Imagine Cup",
        href: "https://www.youtube.com/watch?v=WNtP97quERA",
        line: "World finalist — Practikality",
        year: "2018",
      },
      {
        name: "Google Code-in",
        href: "https://developers.google.com/open-source/gci",
        line: "Grand prize winner",
        year: "2018",
      },
      {
        name: "DECA",
        href: "https://www.deca.org/",
        line: "Global entrepreneurship challenge winner",
        year: "2016",
      },
    ],
  },
]
