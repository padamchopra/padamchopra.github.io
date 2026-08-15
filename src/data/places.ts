export type PlaceCity = {
  name: string
  lat: number
  lng: number
}

export type PlaceGroup = {
  country: string
  lat: number
  lng: number
  cities: PlaceCity[]
}

export const places: PlaceGroup[] = [
  {
    country: "Thailand",
    lat: 10.8,
    lng: 99.4,
    cities: [
      { name: "Bangkok", lat: 13.7563, lng: 100.5018 },
      { name: "Phuket", lat: 7.8804, lng: 98.3923 },
    ],
  },
  { country: "Switzerland", lat: 46.8182, lng: 8.2275, cities: [] },
  {
    country: "UAE",
    lat: 24.83,
    lng: 54.82,
    cities: [
      { name: "Dubai", lat: 25.2048, lng: 55.2708 },
      { name: "Abu Dhabi", lat: 24.4539, lng: 54.3773 },
    ],
  },
  {
    country: "United States",
    lat: 38.5,
    lng: -105,
    cities: [
      { name: "San Francisco", lat: 37.7749, lng: -122.4194 },
      { name: "San Diego", lat: 32.7157, lng: -117.1611 },
      { name: "Los Angeles", lat: 34.0522, lng: -118.2437 },
      { name: "Seattle", lat: 47.6062, lng: -122.3321 },
      { name: "Boston", lat: 42.3601, lng: -71.0589 },
      { name: "Las Vegas", lat: 36.1699, lng: -115.1398 },
    ],
  },
  { country: "Hong Kong", lat: 22.3193, lng: 114.1694, cities: [] },
  {
    country: "Canada",
    lat: 45.4,
    lng: -89,
    cities: [
      { name: "Kitchener", lat: 43.4516, lng: -80.4925 },
      { name: "Waterloo", lat: 43.4943, lng: -80.5304 },
      { name: "Toronto", lat: 43.6532, lng: -79.3832 },
      { name: "Banff", lat: 51.1784, lng: -115.5708 },
      { name: "Calgary", lat: 51.0447, lng: -114.0719 },
      { name: "Prince Edward County", lat: 44.0, lng: -77.25 },
      { name: "Montreal", lat: 45.5017, lng: -73.5673 },
      { name: "Ottawa", lat: 45.4215, lng: -75.6972 },
    ],
  },
  {
    country: "India",
    lat: 22.5,
    lng: 77.2,
    cities: [
      { name: "Delhi", lat: 28.6139, lng: 77.209 },
      { name: "Bangalore", lat: 12.9716, lng: 77.5946 },
      { name: "Goa", lat: 15.2993, lng: 74.124 },
      { name: "Amritsar", lat: 31.634, lng: 74.8723 },
      { name: "Shimla", lat: 31.1048, lng: 77.1734 },
    ],
  },
  {
    country: "United Kingdom",
    lat: 52.8,
    lng: -1.5,
    cities: [
      { name: "London", lat: 51.5074, lng: -0.1278 },
      { name: "Manchester", lat: 53.4808, lng: -2.2426 },
      { name: "Bath", lat: 51.3811, lng: -2.359 },
      { name: "York", lat: 53.96, lng: -1.0873 },
      { name: "Whitby", lat: 54.4858, lng: -0.6206 },
    ],
  },
  {
    country: "Japan",
    lat: 35.1,
    lng: 136.9,
    cities: [
      { name: "Tokyo", lat: 35.6762, lng: 139.6503 },
      { name: "Kyoto", lat: 35.0116, lng: 135.7681 },
      { name: "Osaka", lat: 34.6937, lng: 135.5023 },
    ],
  },
  {
    country: "Turkey",
    lat: 39.8,
    lng: 31.9,
    cities: [
      { name: "Istanbul", lat: 41.0082, lng: 28.9784 },
      { name: "Cappadocia", lat: 38.6431, lng: 34.8289 },
    ],
  },
  { country: "Singapore", lat: 1.3521, lng: 103.8198, cities: [] },
  {
    country: "Malaysia",
    lat: 3.139,
    lng: 101.6869,
    cities: [{ name: "Kuala Lumpur", lat: 3.139, lng: 101.6869 }],
  },
  {
    country: "Mexico",
    lat: 20.3,
    lng: -93.5,
    cities: [
      { name: "Mexico City", lat: 19.4326, lng: -99.1332 },
      { name: "Playa del Carmen", lat: 20.6296, lng: -87.0739 },
      { name: "Cozumel", lat: 20.507, lng: -86.944 },
    ],
  },
]
