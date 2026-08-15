import Layout from "@/components/Layout"
import { places } from "@/data/places"

export default function PlacesPage() {
  return (
    <Layout title="Places" description="Cities Padam Chopra has been to.">
      <section className="v-block">
        <h2>Places</h2>
        <p className="dek">Where I’ve been.</p>
        <ul className="v-recs">
          {places.map((place) => (
            <li key={place.country}>
              <span>{place.country}</span>
              {place.cities.length > 0 ? (
                <span className="v-role">{place.cities.join(", ")}</span>
              ) : null}
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  )
}
