import React from "react"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import { Navigation } from "./components/navigation.jsx"
import { CookieConsent } from "./components/cookie-consent.jsx"
import Home from "./pages/home.js"
import { HealthProfile } from "./components/healthprofile.jsx"

function App() {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/profile' element={<HealthProfile/>} />
      </Routes>
      <CookieConsent />
    </Router>
  )
}

export default App

