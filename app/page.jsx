import { Navigation } from "./components/navigation.jsx"
import { Hero } from "./components/hero.jsx"
import { CookieConsent } from "./components/cookie-consent.jsx"

export default function Home() {
  return (
    <main>
      <Navigation />
      <Hero />
      <CookieConsent />
    </main>
  )
}

