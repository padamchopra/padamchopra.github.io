export type Place = {
  city: string
  country: string
  year?: string
  note?: string
}

export const places: Place[] = [
  { city: "Dubai", country: "UAE", year: "2024" },
  { city: "Toronto", country: "Canada", year: "2021" },
  { city: "Waterloo", country: "Canada", year: "2019" },
  { city: "Seattle", country: "USA", year: "2018", note: "Imagine Cup world finals." },
  { city: "Mountain View", country: "USA", year: "2018", note: "Google Code-in at the Googleplex." },
]
