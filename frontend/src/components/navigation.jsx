import React from "react"
import { Button } from "./ui/button"
import { Link } from "react-router-dom";

export function Navigation() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <a href="/" className="text-2xl font-bold text-gray-900">
              Nishnant
            </a>
            <div className="hidden md:flex ml-10 space-x-8">
              <button className="text-gray-700 group inline-flex items-center">
                Solutions
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="ml-1 h-4 w-4"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
              <a href="/pricing" className="text-gray-700">
                Pricing
              </a>
              <button className="text-gray-700 group inline-flex items-center">
                Resources
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="ml-1 h-4 w-4"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
              <a href="/labs" className="text-red-500">
                For Labs
              </a>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <Link to="/signup">
            <Button variant="ghost">Sign in</Button>
            </Link>
            <Button className="bg-red-500 hover:bg-red-600 text-white">Get Started for Free!</Button>
          </div>
        </div>
      </div>
    </nav>
  )
}

