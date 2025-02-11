import React from "react"
import { Link } from "react-router-dom"

export function HealthProfile() {
  const percentage = 60

  return (
    <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
      <div className="flex justify-between items-center">
        <Link to="/health-data">
        <div>
          <h2 className="text-2xl font-semibold text-teal-600">Meet's</h2>
          <p className="text-gray-500">Health Profile</p>
        </div>
        </Link>
        <div className="relative w-16 h-16">
          <svg className="transform -rotate-90 w-16 h-16">
            <circle
              className="text-gray-200"
              strokeWidth="5"
              stroke="currentColor"
              fill="transparent"
              r="30"
              cx="32"
              cy="32"
            />
            <circle
              className="text-orange-400"
              strokeWidth="5"
              strokeDasharray={188.5}
              strokeDashoffset={188.5 - (188.5 * percentage) / 100}
              strokeLinecap="round"
              stroke="currentColor"
              fill="transparent"
              r="30"
              cx="32"
              cy="32"
            />
          </svg>
          <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-sm font-medium">
            {percentage}%
          </span>
        </div>
      </div>
    </div>
  )
}

