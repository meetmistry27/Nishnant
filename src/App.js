import React from "react"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Home from "./pages/home.js"
import Options from "./pages/options.js"
import { Dashboard } from "./components/dashboard.jsx"
import Chat from "./pages/chat.js"
import { Navigation } from "./components/navigation.jsx"

function App() {
  return (
    <Router>
      <Navigation/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path= "/profile" element={<Dashboard/>}/>
        <Route path="/profile/options" element={<Options />} />
        <Route path="/chat/personal" element={<Chat type="personal" />} />
        <Route path="/chat/general" element={<Chat type="general" />} />
      </Routes>
    </Router>
  )
}

export default App

