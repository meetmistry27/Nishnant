import React from "react"
import { Button } from "./ui/button.jsx"
import "./hero.css"

export function Hero() {
  return (
    <div className="hero">
      <div className="hero-container">
        <div className="hero-grid">
          <div className="hero-content">
            <h1 className="hero-title">
              Your Personal
              <br />
              Health Assistant
            </h1>
            <h2 className="hero-subtitle">Powered by AI</h2>
            <p className="hero-description">
              Prevent potential health issues and effectively manage your health. Gain insights with our AI Doctor and
              validate them with top US and European doctors.
            </p>
            <div>
              <Button className="hero-button">Try Nishnant for Free</Button>
            </div>
          </div>
          <div className="hero-image-container">
            <div className="hero-image-background"></div>
          </div>
        </div>
      </div>
    </div>
  )
}

