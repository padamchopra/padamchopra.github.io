import Layout, { PageHead } from "@/components/Layout"

export default function NotePage({
  title,
  date,
  html,
}: {
  title: string
  date: string
  html: string
}) {
  return (
    <Layout title={title}>
      <PageHead title={title} dek={date || undefined} />
      <div className="prose" dangerouslySetInnerHTML={{ __html: html }} />
    </Layout>
  )
}

export async function getStaticPaths() {
  const { getNotes } = await import("@/lib/notes")
  return {
    paths: getNotes().map((note) => ({ params: { slug: note.slug } })),
    fallback: false,
  }
}

export async function getStaticProps({ params }: { params: { slug: string } }) {
  const { formatNoteDate, getNote } = await import("@/lib/notes")
  const note = getNote(params.slug)
  if (!note) {
    return { notFound: true }
  }
  return {
    props: {
      title: note.title,
      date: formatNoteDate(note.date),
      html: note.html,
    },
  }
}
