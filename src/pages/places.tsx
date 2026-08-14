import Layout from "@/components/Layout"
import { places } from "@/data/places"

export default function PlacesPage() {
  return (
    <Layout title="Places" description="Cities Padam Chopra has lived in or passed through long enough to count.">
      <section className="v-block">
        <h2>Places</h2>
        <ol className="v-work">
          {places.map((place) => (
            <li key={`${place.city}-${place.period}`}>
              <div className="v-pos">
                <span>{place.city}</span>
                {place.note ? <span className="v-role">{place.note}</span> : null}
              </div>
              <span className="v-when">{place.period}</span>
            </li>
          ))}
        </ol>
      </section>
    </Layout>
  )
}
