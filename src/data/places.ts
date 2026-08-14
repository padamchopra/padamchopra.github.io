export type Place = {
  city: string
  country: string
  period: string
  note?: string
}

export const places: Place[] = [
  { city: "Dubai", country: "UAE", period: "2024–", note: "Home base now." },
  { city: "Waterloo", country: "Canada", period: "2019–24", note: "Computer Science at Waterloo." },
  { city: "Toronto", country: "Canada", period: "2021–22", note: "Ritual and 1Password terms." },
  { city: "Seattle", country: "USA", period: "2018", note: "Imagine Cup world finals." },
  { city: "Mountain View", country: "USA", period: "2018", note: "Google Code-in at the Googleplex." },
  { city: "New Delhi", country: "India", period: "–2019", note: "Grew up here." },
]
