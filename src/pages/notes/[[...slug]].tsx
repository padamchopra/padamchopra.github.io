import Link from "next/link"
import Appearance from "@/components/Appearance"
import Layout from "@/components/Layout"
import NotesSplit from "@/components/NotesSplit"

type NoteListItem = {
  slug: string
  title: string
  date: string
}

type NoteBody = {
  slug: string
  title: string
  date: string
  html: string
}

export default function NotesPage({
  notes,
  current,
}: {
  notes: NoteListItem[]
  current: NoteBody | null
}) {
  return (
    <Layout
      title={current ? current.title : "Notes"}
      description="Stray writing from Padam Chopra."
      fill
    >
      <NotesSplit
        hasReader={Boolean(current)}
        list={
          <>
            <header className="v-notes-pane-head">
              <h2>Notes</h2>
              <div className="v-notes-tools">
                <Appearance />
              </div>
            </header>
            {notes.length === 0 ? (
              <p className="v-empty">Nothing here yet.</p>
            ) : (
              <ol className="v-notes-list">
                {notes.map((note) => {
                  const on = current?.slug === note.slug
                  return (
                    <li key={note.slug}>
                      <Link
                        href={`/notes/${note.slug}`}
                        scroll={false}
                        className={on ? "is-current" : undefined}
                        aria-current={on ? "page" : undefined}
                      >
                        {note.title}
                      </Link>
                      {note.date ? <span className="v-when">{note.date}</span> : null}
                    </li>
                  )
                })}
              </ol>
            )}
          </>
        }
        reader={
          current ? (
            <article>
              <p className="v-notes-back">
                <Link href="/notes">All notes</Link>
              </p>
              <header className="v-note-head">
                <h1>{current.title}</h1>
                {current.date ? <p className="dek">{current.date}</p> : null}
              </header>
              <div
                className="v-note"
                dangerouslySetInnerHTML={{ __html: current.html }}
              />
            </article>
          ) : null
        }
      />
    </Layout>
  )
}

export async function getStaticPaths() {
  const { getNotes } = await import("@/lib/notes")
  return {
    paths: [
      { params: { slug: [] } },
      ...getNotes().map((note) => ({ params: { slug: [note.slug] } })),
    ],
    fallback: false,
  }
}

export async function getStaticProps({ params }: { params: { slug?: string[] } }) {
  const { formatNoteDate, getNote, getNotes } = await import("@/lib/notes")
  const slug = params.slug?.[0]
  const currentNote = slug ? getNote(slug) : undefined
  if (slug && !currentNote) {
    return { notFound: true }
  }
  return {
    props: {
      notes: getNotes().map((note) => ({
        slug: note.slug,
        title: note.title,
        date: formatNoteDate(note.date),
      })),
      current: currentNote
        ? {
            slug: currentNote.slug,
            title: currentNote.title,
            date: formatNoteDate(currentNote.date),
            html: currentNote.html,
          }
        : null,
    },
  }
}
