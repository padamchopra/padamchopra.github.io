export type PlaceGroup = {
  country: string
  cities: string[]
}

export const places: PlaceGroup[] = [
  { country: "Thailand", cities: ["Bangkok", "Phuket"] },
  { country: "Switzerland", cities: [] },
  { country: "UAE", cities: ["Dubai", "Abu Dhabi"] },
  {
    country: "United States",
    cities: [
      "San Francisco",
      "San Diego",
      "Los Angeles",
      "Seattle",
      "Boston",
      "Las Vegas",
    ],
  },
  { country: "Hong Kong", cities: [] },
  {
    country: "Canada",
    cities: [
      "Kitchener",
      "Waterloo",
      "Toronto",
      "Banff",
      "Calgary",
      "Prince Edward County",
      "Montreal",
      "Ottawa",
    ],
  },
  {
    country: "India",
    cities: ["Delhi", "Bangalore", "Goa", "Amritsar", "Shimla"],
  },
  {
    country: "United Kingdom",
    cities: ["London", "Manchester", "Bath", "York", "Whitby"],
  },
  { country: "Japan", cities: ["Tokyo", "Kyoto", "Osaka"] },
  { country: "Turkey", cities: ["Istanbul", "Cappadocia"] },
  { country: "Singapore", cities: [] },
  { country: "Malaysia", cities: ["Kuala Lumpur"] },
  {
    country: "Mexico",
    cities: ["Mexico City", "Playa del Carmen", "Cozumel"],
  },
]
