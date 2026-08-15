export default function RedirectPage() {
  return null
}

export async function getStaticProps() {
  return { redirect: { destination: "/watched", permanent: false } }
}
