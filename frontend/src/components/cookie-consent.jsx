"use client"

import { useState } from "react"
import { Button } from "./ui/button.jsx"

export function CookieConsent() {
  const [isVisible, setIsVisible] = useState(true)

  if (!isVisible) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t p-4 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        <p className="text-gray-600">
          This site uses{" "}
          <a href="/cookies" className="text-teal-600 underline">
            cookies
          </a>{" "}
          to enhance the quality of its services.
        </p>
        <Button onClick={() => setIsVisible(false)} className="bg-teal-600 hover:bg-teal-700 text-white ml-4">
          Accept
        </Button>
      </div>
    </div>
  )
}

