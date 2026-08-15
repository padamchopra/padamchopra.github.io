import Layout from "@/components/Layout"
import { places } from "@/data/places"

export default function PlacesPage() {
  return (
    <Layout title="Places" description="Cities and countries Padam Chopra has visited.">
      <section className="v-block">
        <h2>Places</h2>
        <p className="dek">Where I’ve been.</p>
        {places.length === 0 ? (
          <p className="v-empty">Nothing here yet.</p>
        ) : (
          <ol className="v-articles">
            {places.map((place) => (
              <li className="v-article" key={`${place.city}-${place.year || place.country}`}>
                <div className="v-article-top">
                  <span>
                    {place.city}, {place.country}
                  </span>
                  {place.year ? <span className="v-when">{place.year}</span> : null}
                </div>
                {place.note ? <p>{place.note}</p> : null}
              </li>
            ))}
          </ol>
        )}
      </section>
    </Layout>
  )
}
