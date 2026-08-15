import IcoLink from "@/components/IcoLink"
import Layout from "@/components/Layout"
import { collections } from "@/data/links"

export default function LinksPage() {
  return (
    <Layout
      title="Links"
      description="Collections of links Padam Chopra keeps — including press."
    >
      {collections.map((collection) => (
        <section className="v-block" id={collection.id} key={collection.id}>
          <h2>{collection.title}</h2>
          {collection.dek ? <p className="dek">{collection.dek}</p> : null}
          <ul className="v-recs">
            {collection.links.map((link) => (
              <li key={link.href}>
                <IcoLink href={link.href} size="row">
                  {link.name}
                </IcoLink>
                <span className="v-role">
                  {link.year ? `${link.line} · ${link.year}` : link.line}
                </span>
              </li>
            ))}
          </ul>
        </section>
      ))}
    </Layout>
  )
}
