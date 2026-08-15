import Layout from "@/components/Layout"
import PlacesAtlas from "@/components/PlacesAtlas"

export default function PlacesPage() {
  return (
    <Layout title="Places" description="Cities Padam Chopra has been to.">
      <section className="v-block">
        <h2>Places</h2>
        <p className="dek">Where I’ve been. Pinch to zoom, drag to pan.</p>
        <PlacesAtlas />
      </section>
    </Layout>
  )
}
