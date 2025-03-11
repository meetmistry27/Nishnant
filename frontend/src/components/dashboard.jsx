// import React from "react"
// import { DashboardNav } from "./dashboardnav.jsx"
// import { HealthProfile } from "./healthprofile.jsx"
// import { DashboardCard } from "./dashboardcard.jsx"
// import { Link } from "react-router-dom";

// // Custom icons for the dashboard cards
// function AiDoctorIcon() {
//   return (
//     <div className="text-teal-600">
//       <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
//         <circle cx="24" cy="24" r="24" fill="currentColor" fillOpacity="0.1" />
//         <path
//           d="M32 22a8 8 0 01-8 8v4c6.627 0 12-5.373 12-12h-4zm-8 8a8 8 0 01-8-8h-4c0 6.627 5.373 12 12 12v-4zm-8-8a8 8 0 018-8v-4c-6.627 0-12 5.373-12 12h4zm8-8a8 8 0 018 8h4c0-6.627-5.373-12-12-12v4z"
//           fill="currentColor"
//         />
//       </svg>
//     </div>
//   )
// }

// function LabTestIcon() {
//   return (
//     <div className="text-purple-600">
//       <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
//         <rect width="48" height="48" rx="24" fill="currentColor" fillOpacity="0.1" />
//         <path d="M28 16H20v4h8v-4zM20 32h8v-8H20v8zm-2 2v-12h12v12H18zm2-14v-6h8v6H20z" fill="currentColor" />
//       </svg>
//     </div>
//   )
// }

// function CheckupIcon() {
//   return (
//     <div className="text-blue-600">
//       <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
//         <rect width="48" height="48" rx="24" fill="currentColor" fillOpacity="0.1" />
//         <path d="M32 16H16v16h16V16zm-2 14H18V18h12v12z" fill="currentColor" />
//         <path d="M22 22h4v4h-4v-4z" fill="currentColor" />
//       </svg>
//     </div>
//   )
// }

// function ReportsIcon() {
//   return (
//     <div className="text-green-600">
//       <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
//         <rect width="48" height="48" rx="24" fill="currentColor" fillOpacity="0.1" />
//         <path d="M32 16H16v16h16V16zm-2 14H18V18h12v12z" fill="currentColor" />
//         <path d="M20 28h8v-2h-8v2zm0-4h8v-2h-8v2zm0-4h8v-2h-8v2z" fill="currentColor" />
//       </svg>
//     </div>
//   )
// }

// function DoctorConsultIcon() {
//   return (
//     <div className="text-teal-600">
//       <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
//         <circle cx="24" cy="24" r="24" fill="currentColor" fillOpacity="0.1" />
//         <path
//           d="M24 28c5.523 0 10-4.477 10-10S29.523 8 24 8s-10 4.477-10 10 4.477 10 10 10zm0 2c-6.627 0-12-5.373-12-12s5.373-12 12-12 12 5.373 12 12-5.373 12-12 12z"
//           fill="currentColor"
//         />
//         <path d="M24 20a2 2 0 100-4 2 2 0 000 4z" fill="currentColor" />
//       </svg>
//     </div>
//   )
// }

// export function Dashboard() {
//   return (
//     <div className="min-h-screen bg-gray-50">
//       <DashboardNav />
//       <main className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
//         <HealthProfile />

//         <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
//         <Link to="/profile/options">  
//           <DashboardCard
//             title="Chat with AI Doctor"
//             description="Get instant health advice"
//             icon={AiDoctorIcon}
//             className="bg-teal-50/50"
//           />
//           </Link>
//           <DashboardCard
//             title="Lab Tests & Screenings"
//             description="View and schedule tests"
//             icon={LabTestIcon}
//             className="bg-purple-50/50"
//           />
//           <DashboardCard title="Checkup Plan" comingSoon={true} icon={CheckupIcon} className="bg-blue-50/50" />
//           <DashboardCard title="Health Reports" comingSoon={true} icon={ReportsIcon} className="bg-green-50/50" />
//         </div>

//         <DashboardCard
//           title="Consult Top Doctors"
//           description="Online Consultation with top Doctors from the US and Europe."
//           icon={DoctorConsultIcon}
//           className="bg-teal-50/50"
//         />
//       </main>
//     </div>
//   )
// }

import React from "react"
import { Link } from "react-router-dom"
import {
  Bell,
  Calendar,
  ChevronRight,
  FileText,
  FlaskRoundIcon as Flask,
  Heart,
  MessageSquare,
  Plus,
  Search,
  User,
  Users,
} from "lucide-react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar"
import { Button } from "./ui/button"
import { Badge } from "./ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs"
import { Progress } from "./ui/progress"

// Health stats component
function HealthStats() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
      {/* {[
        { label: "Heart Rate", value: "72", unit: "bpm", icon: Heart, color: "text-red-500", bg: "bg-red-50" },
        { label: "Weight", value: "165", unit: "lbs", icon: User, color: "text-blue-500", bg: "bg-blue-50" },
        { label: "Sleep", value: "7.2", unit: "hrs", icon: Calendar, color: "text-indigo-500", bg: "bg-indigo-50" },
        { label: "Steps", value: "8,432", unit: "today", icon: Search, color: "text-green-500", bg: "bg-green-50" },
      ].map((stat, index) => (
        <Card key={index} className="border-0 shadow-sm">
          <CardContent className="p-4 flex items-center space-x-4">
            <div className={`${stat.bg} p-3 rounded-full ${stat.color}`}>
              <stat.icon size={20} />
            </div>
            <div>
              <p className="text-sm text-gray-500">{stat.label}</p>
              <div className="flex items-baseline">
                <h3 className="text-2xl font-bold">{stat.value}</h3>
                <span className="ml-1 text-xs text-gray-500">{stat.unit}</span>
              </div>
            </div>
          </CardContent>
        </Card>
      ))} */}
    </div>
  )
}

// Enhanced dashboard card component
function EnhancedDashboardCard({ title, description, icon: Icon, className, comingSoon, to, badge }) {
  const CardWrapper = to ? Link : React.Fragment
  const wrapperProps = to ? { to, className: "block" } : {}

  return (
    <CardWrapper {...wrapperProps}>
      <Card
        className={`border-0 shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden ${comingSoon ? "opacity-70" : ""}`}
      >
        {/* <div
          className={`absolute top-0 left-0 w-2 h-full ${className.includes("teal") ? "bg-teal-500" : className.includes("purple") ? "bg-purple-500" : className.includes("blue") ? "bg-blue-500" : "bg-green-500"}`}
        ></div> */}
        <CardHeader className={`pb-2 ${className}`}>
          <div className="flex justify-between items-start">
            <Icon />
            {badge && (
              <Badge variant="outline" className="bg-white">
                {badge}
              </Badge>
            )}
            {comingSoon && (
              <Badge variant="outline" className="bg-white text-gray-500">
                Coming Soon
              </Badge>
            )}
          </div>
        </CardHeader>
        <CardContent className="pb-4">
          <CardTitle className="text-xl mb-1">{title}</CardTitle>
          {description && <CardDescription>{description}</CardDescription>}
        </CardContent>
        {!comingSoon && (
          <CardFooter className="pt-0 pb-4">
            <Button
              variant="ghost"
              size="sm"
              className="p-0 h-auto text-sm font-medium hover:bg-transparent hover:underline"
            >
              Learn more <ChevronRight size={16} className="ml-1" />
            </Button>
          </CardFooter>
        )}
      </Card>
    </CardWrapper>
  )
}

// Enhanced profile summary component
function ProfileSummary() {
  return (
    <Card className="border-0 shadow-sm mb-8 overflow-hidden">
      <div className="bg-gradient-to-r from-teal-500 to-teal-600 h-24 relative">
        <div className="absolute -bottom-12 left-6">
          <Avatar className="h-24 w-24 border-4 border-white shadow-md">
            <AvatarImage src="/placeholder.svg?height=96&width=96" />
            <AvatarFallback className="bg-teal-700 text-white text-xl">JD</AvatarFallback>
          </Avatar>
        </div>
      </div>
      <CardContent className="pt-16 pb-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="text-2xl font-bold">John Doe</h2>
            <p className="text-gray-500">32 years • Male • 165 lbs • 5'11"</p>
          </div>
          <div className="mt-4 md:mt-0 flex flex-col md:items-end">
            <div className="flex items-center mb-2">
              <span className="text-sm font-medium text-gray-700 mr-2">Profile completion</span>
              <span className="text-sm font-medium text-teal-600">75%</span>
            </div>
            <div className="w-full md:w-48">
              <Progress
                value={75}
                className="h-2 bg-gray-100"
                indicatorClassName="bg-gradient-to-r from-teal-400 to-teal-600"
              />
            </div>
          </div>
        </div>
      </CardContent>
      <CardFooter className="bg-gray-50 border-t py-3 px-6">
        <Button variant="outline" size="sm" className="mr-2">
          <User size={16} className="mr-1" /> View Profile
        </Button>
        <Button size="sm" className="bg-teal-600 hover:bg-teal-700 text-white">
          <Plus size={16} className="mr-1" /> Complete Profile
        </Button>
      </CardFooter>
    </Card>
  )
}

// Custom icons with enhanced design
function AiDoctorIcon() {
  return (
    <div className="text-teal-600 bg-teal-50 p-3 rounded-full">
      <MessageSquare size={24} />
    </div>
  )
}

function LabTestIcon() {
  return (
    <div className="text-purple-600 bg-purple-50 p-3 rounded-full">
      <Flask size={24} />
    </div>
  )
}

function CheckupIcon() {
  return (
    <div className="text-blue-600 bg-blue-50 p-3 rounded-full">
      <Calendar size={24} />
    </div>
  )
}

function ReportsIcon() {
  return (
    <div className="text-green-600 bg-green-50 p-3 rounded-full">
      <FileText size={24} />
    </div>
  )
}

function DoctorConsultIcon() {
  return (
    <div className="text-teal-600 bg-teal-50 p-3 rounded-full">
      <Users size={24} />
    </div>
  )
}

export function Dashboard() {
  return (
    // <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
    //   {/* Enhanced Navigation */}
    //   <header className="bg-white border-b sticky top-0 z-50">
    //     <div className="max-w-7xl mx-auto px-4 sm:px-6">
    //       <div className="flex items-center justify-between h-16">
    //         <div className="flex items-center">
    //           <Link to="/" className="flex items-center">
    //             <Heart className="h-8 w-8 text-teal-600" />
    //             <span className="ml-2 text-xl font-bold text-gray-900">Nishnant</span>
    //           </Link>
    //         </div>
    //         <div className="flex items-center space-x-4">
    //           <Button variant="ghost" size="icon" className="relative">
    //             <Bell className="h-5 w-5 text-gray-600" />
    //             <span className="absolute top-0 right-0 h-2 w-2 bg-red-500 rounded-full"></span>
    //           </Button>
    //           <Avatar className="h-8 w-8 border border-gray-200">
    //             <AvatarImage src="/placeholder.svg?height=32&width=32" />
    //             <AvatarFallback className="bg-teal-100 text-teal-800">JD</AvatarFallback>
    //           </Avatar>
    //         </div>
    //       </div>
    //     </div>
      // </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Welcome back, John</h1>
          <p className="text-gray-600">Here's an overview of your health dashboard</p>
        </div>

        {/* Profile Summary */}
        <ProfileSummary />

        {/* Health Stats */}
        <HealthStats />

        {/* Main Tabs */}
        <Tabs defaultValue="services" className="mb-8">
          <TabsList className="mb-6">
            <TabsTrigger value="services">Health Services</TabsTrigger>
            <TabsTrigger value="insights">Insights</TabsTrigger>
            <TabsTrigger value="history">History</TabsTrigger>
          </TabsList>

          <TabsContent value="services" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <EnhancedDashboardCard
                title="Chat with AI Doctor"
                description="Get instant health advice and personalized recommendations"
                icon={AiDoctorIcon}
                className="bg-teal-50"
                to="/profile/options"
                badge="Popular"
              />
              <EnhancedDashboardCard
                title="Lab Tests & Screenings"
                description="View results and schedule new tests with our partners"
                icon={LabTestIcon}
                className="bg-purple-50"
              />
              <EnhancedDashboardCard
                title="Checkup Plan"
                description="Personalized preventive care schedule based on your profile"
                comingSoon={true}
                icon={CheckupIcon}
                className="bg-blue-50"
              />
              <EnhancedDashboardCard
                title="Health Reports"
                description="Comprehensive analysis of your health data and trends"
                comingSoon={true}
                icon={ReportsIcon}
                className="bg-green-50"
              />
            </div>

            <EnhancedDashboardCard
              title="Consult Top Doctors"
              description="Online consultation with top specialists from the US and Europe"
              icon={DoctorConsultIcon}
              className="bg-teal-50"
              badge="New"
            />
          </TabsContent>

          <TabsContent value="insights">
            <Card className="border-0 shadow-sm p-6">
              <div className="text-center py-8">
                <FileText className="h-12 w-12 text-gray-300 mx-auto mb-4" />
                <h3 className="text-lg font-medium text-gray-900 mb-2">No insights yet</h3>
                <p className="text-gray-500 max-w-md mx-auto mb-4">
                  Complete your health profile and use our services to get personalized health insights.
                </p>
                <Button className="bg-teal-600 hover:bg-teal-700 text-white">Complete Profile</Button>
              </div>
            </Card>
          </TabsContent>

          <TabsContent value="history">
            <Card className="border-0 shadow-sm p-6">
              <div className="text-center py-8">
                <Calendar className="h-12 w-12 text-gray-300 mx-auto mb-4" />
                <h3 className="text-lg font-medium text-gray-900 mb-2">No history yet</h3>
                <p className="text-gray-500 max-w-md mx-auto mb-4">
                  Your activity and consultation history will appear here once you start using our services.
                </p>
                <Button className="bg-teal-600 hover:bg-teal-700 text-white">Explore Services</Button>
              </div>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Quick Actions */}
        <div className="bg-white rounded-lg border-0 shadow-sm p-6 mb-8">
          <h2 className="text-lg font-medium text-gray-900 mb-4">Quick Actions</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { label: "Book Appointment", icon: Calendar, color: "text-blue-600", bg: "bg-blue-50" },
              { label: "Upload Lab Results", icon: FileText, color: "text-purple-600", bg: "bg-purple-50" },
              { label: "Track Symptoms", icon: Search, color: "text-amber-600", bg: "bg-amber-50" },
              { label: "Medication Reminder", icon: Bell, color: "text-red-600", bg: "bg-red-50" },
            ].map((action, index) => (
              <Button
                key={index}
                variant="outline"
                className="h-auto py-4 border-dashed flex flex-col items-center justify-center gap-2"
              >
                <div className={`${action.bg} p-2 rounded-full ${action.color}`}>
                  <action.icon size={18} />
                </div>
                <span className="text-sm font-medium">{action.label}</span>
              </Button>
            ))}
          </div>
        </div>
      </main>

    //   {/* Footer */}
    //   <footer className="bg-white border-t py-6">
    //     <div className="max-w-7xl mx-auto px-4 sm:px-6">
    //       <div className="flex flex-col md:flex-row justify-between items-center">
    //         <div className="flex items-center mb-4 md:mb-0">
    //           <Heart className="h-6 w-6 text-teal-600" />
    //           <span className="ml-2 text-lg font-bold text-gray-900">Nishnant</span>
    //         </div>
    //         <div className="text-sm text-gray-500">© {new Date().getFullYear()} Nishnant Health. All rights reserved.</div>
    //       </div>
    //     </div>
    //   </footer>
    // </div>
  )
}

