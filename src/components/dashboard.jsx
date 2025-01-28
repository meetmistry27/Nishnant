import React from "react"
import { Clock } from "lucide-react"

export function DashboardCard({ title, description, icon: Icon, comingSoon, className }) {
  return (
    <div className={`bg-white rounded-lg shadow-sm p-6 flex justify-between items-start ${className}`}>
      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
        {comingSoon ? (
          <div className="flex items-center text-gray-500">
            <Clock className="h-4 w-4 mr-2" />
            <span>Coming soon</span>
          </div>
        ) : (
          <p className="text-gray-500">{description}</p>
        )}
      </div>
      <div className="flex-shrink-0 ml-4">{Icon && <Icon className="h-12 w-12" />}</div>
    </div>
  )
}

