import "@/styles/globals.css"
import "@/styles/variants.css"
import type { AppProps } from "next/app"
import { Source_Serif_4 } from "next/font/google"
import localFont from "next/font/local"

const switzer = localFont({
  src: "./fonts/switzer.ttf",
  variable: "--font-sans",
  display: "swap",
})

const sourceSerif = Source_Serif_4({
  subsets: ["latin"],
  weight: ["400", "600"],
  variable: "--font-serif",
  display: "swap",
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <style
        dangerouslySetInnerHTML={{
          __html: `:root{--font-sans:${switzer.style.fontFamily};--font-serif:${sourceSerif.style.fontFamily};}`,
        }}
      />
      <div className={`${switzer.variable} ${sourceSerif.variable} ${switzer.className}`}>
        <Component {...pageProps} />
      </div>
    </>
  )
}
