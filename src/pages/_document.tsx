import { Head, Html, Main, NextScript } from "next/document"

const themeScript = `(function(){try{var t=localStorage.getItem("padam-theme");document.documentElement.classList.toggle("dark",t==="dark");}catch(e){}})();`

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta
          name="description"
          content="Padam Chopra makes software for phones, the web, and the gaps in between. Currently Jupiter, based in Dubai."
        />
        <link rel="icon" href="/favicon.png" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@PadamChopra_" />
        <meta name="twitter:creator" content="@PadamChopra_" />
        <meta name="twitter:title" content="Padam Chopra" />
        <meta
          name="twitter:description"
          content="Padam Chopra makes software for phones, the web, and the gaps in between. Currently Jupiter, based in Dubai."
        />
        <meta property="og:title" content="Padam Chopra" />
        <meta
          property="og:description"
          content="Padam Chopra makes software for phones, the web, and the gaps in between. Currently Jupiter, based in Dubai."
        />
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
