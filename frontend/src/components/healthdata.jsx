import { ArrowLeft, Bell } from "lucide-react"
import { Button } from "./ui/button.jsx"
import { ProgressBar } from "./progress-bar.jsx"
import { SectionHeader } from "./seaction-header.jsx"
import { InfoRow } from "./info-row.jsx"
import { Link } from "react-router-dom"

export function HealthData() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header
      <header className="fixed top-0 left-0 right-0 bg-white border-b z-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <Link to="/profile"> 
              <button className="p-2 hover:bg-gray-100 rounded-full">
                <ArrowLeft className="h-6 w-6" />
              </button>
              </Link> 
              <span className="ml-2 text-lg font-medium">My Dashboard</span>
            </div>
            <div className="flex items-center space-x-4">
              <button className="p-2 relative">
                <Bell className="h-6 w-6 text-gray-600" />
              </button>
              <Button className="bg-red-500 hover:bg-red-600">
                Upgrade
              </Button>
            </div>
          </div>
        </div>
      </header> */}

      {/* Main Content */}
      <main className="max-w-3xl mx-auto px-4 pt-24 pb-12">
        <div className="space-y-6">
          {/* Title and Progress */}
          <div className="space-y-4">
            <h1 className="text-2xl font-bold text-gray-900">Health Profile</h1>
            <p className="text-gray-600">
              Complete your health profile to get valuable insights into your health.
            </p>
            <div className="flex items-center justify-between">
              <ProgressBar progress={60} />
              <span className="ml-4 text-orange-500 font-medium">60% completed</span>
            </div>
          </div>

          {/* General Information */}
          <div className="bg-white rounded-lg border">
            <h2 className="px-4 pt-4 text-xl font-semibold text-gray-900">
              General Information
            </h2>
            <div className="p-4 grid md:grid-cols-2 gap-4">
              <div className="space-y-4">
                <InfoRow label="Age" value="20 years" />
                <InfoRow label="Height" value="6' 1"/>
                <InfoRow label="Weight" value="165.347 lbs" />
              </div>
              <div className="space-y-4 md:col-span-2">
                <InfoRow label="Ethnicity" value="South Asian" />
                <InfoRow label="Sex assigned at birth" value="Male" />
              </div>
            </div>
          </div>

          {/* Health Sections */}
          <div className="space-y-2">
            <div className="bg-white rounded-lg border">
              <SectionHeader 
                title="Main Health Information" 
                progress={100}
                onClick={() => {/* Handle navigation */}}
              />
            </div>
            <div className="bg-white rounded-lg border">
              <SectionHeader 
                title="Lab Test Interpretation" 
                progress={0}
                onClick={() => {/* Handle navigation */}}
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

