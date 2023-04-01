import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <title>
        Padam Chopra
      </title>
      <meta name="description" content="Hi, I'm Padam 👋🏼. Building digital experiences, specializing in Android, Flutter, and React." />
      <link rel="icon" href="/favicon.png" />
      {/* Insert all twitter meta tags for url preview of type summary */}
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:site" content="@PadamChopra_" />
      <meta name="twitter:creator" content="@PadamChopra_" />
      <meta name="twitter:title" content="Padam Chopra" />
      <meta name="twitter:description" content="Hi, I'm Padam 👋🏼. Building digital experiences, specializing in Android, Flutter, and React." />
      <Head />
      <body>
      {/* dark:bg-black dark:text-white */}
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
