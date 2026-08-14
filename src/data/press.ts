export type PressItem = {
  source: string
  title: string
  href: string
  year: string
  kind: "article" | "award" | "video"
}

export const press: PressItem[] = [
  {
    source: "YourStory",
    title: "Students build an app for the deaf, blind, and mute",
    href: "https://yourstory.com/2019/01/students-app-deaf-blind-mute-communicate",
    year: "2019",
    kind: "article",
  },
  {
    source: "Microsoft",
    title: "AI solutions dominate Imagine Cup India finals",
    href: "https://news.microsoft.com/en-in/ai-solutions-dominate-the-16th-edition-of-microsoft-imagine-cup-india-finals/",
    year: "2018",
    kind: "article",
  },
  {
    source: "Algorand",
    title: "DeltaHacks recap — Paysy",
    href: "https://medium.com/algorand/building-on-algorand-deltahack-hackathon-recap-and-code-7849e21e3bb2",
    year: "2020",
    kind: "article",
  },
  {
    source: "Digit",
    title: "Imagine Cup coverage",
    href: "https://www.youtube.com/watch?v=rXUREJo5OXo",
    year: "2018",
    kind: "video",
  },
  {
    source: "IELTS India",
    title: "Band 8.5",
    href: "https://www.youtube.com/watch?v=Ujp-Q4G3Uq0",
    year: "2018",
    kind: "video",
  },
  {
    source: "Microsoft Imagine Cup",
    title: "World finalist — Practikality",
    href: "https://www.youtube.com/watch?v=WNtP97quERA",
    year: "2018",
    kind: "award",
  },
  {
    source: "Google Code-in",
    title: "Grand prize winner",
    href: "https://developers.google.com/open-source/gci",
    year: "2018",
    kind: "award",
  },
  {
    source: "DECA",
    title: "Global entrepreneurship challenge winner",
    href: "https://www.deca.org/",
    year: "2016",
    kind: "award",
  },
]
