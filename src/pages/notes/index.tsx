import Link from "next/link"
import Layout from "@/components/Layout"

export default function NotesPage({
  notes,
}: {
  notes: { slug: string; title: string; date: string }[]
}) {
  return (
    <Layout title="Notes" description="Stray writing from Padam Chopra.">
      <section className="v-block">
        <h2>Notes</h2>
        {notes.length === 0 ? (
          <p className="v-empty">Nothing here yet.</p>
        ) : (
          <ol className="v-work">
            {notes.map((note) => (
              <li key={note.slug}>
                <Link className="v-link" href={`/notes/${note.slug}`}>
                  {note.title}
                </Link>
                <span className="v-when">{note.date}</span>
              </li>
            ))}
          </ol>
        )}
      </section>
    </Layout>
  )
}

export async function getStaticProps() {
  const { formatNoteDate, getNotes } = await import("@/lib/notes")
  return {
    props: {
      notes: getNotes().map(({ slug, title, date }) => ({
        slug,
        title,
        date: formatNoteDate(date),
      })),
    },
  }
}
