import React from "react"
import { DashboardNav } from "./dashboardnav.jsx"
import { HealthProfile } from "./healthprofile.jsx"
import { DashboardCard } from "./dashboardcard.jsx"
import { Link } from "react-router-dom";

// Custom icons for the dashboard cards
function AiDoctorIcon() {
  return (
    <div className="text-teal-600">
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
        <circle cx="24" cy="24" r="24" fill="currentColor" fillOpacity="0.1" />
        <path
          d="M32 22a8 8 0 01-8 8v4c6.627 0 12-5.373 12-12h-4zm-8 8a8 8 0 01-8-8h-4c0 6.627 5.373 12 12 12v-4zm-8-8a8 8 0 018-8v-4c-6.627 0-12 5.373-12 12h4zm8-8a8 8 0 018 8h4c0-6.627-5.373-12-12-12v4z"
          fill="currentColor"
        />
      </svg>
    </div>
  )
}

function LabTestIcon() {
  return (
    <div className="text-purple-600">
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
        <rect width="48" height="48" rx="24" fill="currentColor" fillOpacity="0.1" />
        <path d="M28 16H20v4h8v-4zM20 32h8v-8H20v8zm-2 2v-12h12v12H18zm2-14v-6h8v6H20z" fill="currentColor" />
      </svg>
    </div>
  )
}

function CheckupIcon() {
  return (
    <div className="text-blue-600">
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
        <rect width="48" height="48" rx="24" fill="currentColor" fillOpacity="0.1" />
        <path d="M32 16H16v16h16V16zm-2 14H18V18h12v12z" fill="currentColor" />
        <path d="M22 22h4v4h-4v-4z" fill="currentColor" />
      </svg>
    </div>
  )
}

function ReportsIcon() {
  return (
    <div className="text-green-600">
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
        <rect width="48" height="48" rx="24" fill="currentColor" fillOpacity="0.1" />
        <path d="M32 16H16v16h16V16zm-2 14H18V18h12v12z" fill="currentColor" />
        <path d="M20 28h8v-2h-8v2zm0-4h8v-2h-8v2zm0-4h8v-2h-8v2z" fill="currentColor" />
      </svg>
    </div>
  )
}

function DoctorConsultIcon() {
  return (
    <div className="text-teal-600">
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
        <circle cx="24" cy="24" r="24" fill="currentColor" fillOpacity="0.1" />
        <path
          d="M24 28c5.523 0 10-4.477 10-10S29.523 8 24 8s-10 4.477-10 10 4.477 10 10 10zm0 2c-6.627 0-12-5.373-12-12s5.373-12 12-12 12 5.373 12 12-5.373 12-12 12z"
          fill="currentColor"
        />
        <path d="M24 20a2 2 0 100-4 2 2 0 000 4z" fill="currentColor" />
      </svg>
    </div>
  )
}

export function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-50">
      <DashboardNav />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
        <HealthProfile />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <Link to="/profile/options">  
          <DashboardCard
            title="Chat with AI Doctor"
            description="Get instant health advice"
            icon={AiDoctorIcon}
            className="bg-teal-50/50"
          />
          </Link>
          <DashboardCard
            title="Lab Tests & Screenings"
            description="View and schedule tests"
            icon={LabTestIcon}
            className="bg-purple-50/50"
          />
          <DashboardCard title="Checkup Plan" comingSoon={true} icon={CheckupIcon} className="bg-blue-50/50" />
          <DashboardCard title="Health Reports" comingSoon={true} icon={ReportsIcon} className="bg-green-50/50" />
        </div>

        <DashboardCard
          title="Consult Top Doctors"
          description="Online Consultation with top Doctors from the US and Europe."
          icon={DoctorConsultIcon}
          className="bg-teal-50/50"
        />
      </main>
    </div>
  )
}

