//import { Navigation } from "./components/navigation.jsx"
import { CookieConsent } from "./components/cookie-consent.jsx"
import "./globals.css"

export const metadata = {
  title: "Docus - Your Personal Health Assistant",
  description: "Prevent potential health issues and effectively manage your health with AI-powered insights.",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main>{children}</main>
        <CookieConsent />
      </body>
    </html>
  )
}

