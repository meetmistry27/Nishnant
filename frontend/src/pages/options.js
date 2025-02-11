import React from "react"
import { Bell, Home, User } from "lucide-react"
import { Button } from "../components/ui/button"
import { Tabs, TabsList, TabsTrigger } from "../components/ui/tabs.jsx"

function Options() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white border-b z-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <Home className="h-6 w-6 text-teal-600" />
              <span className="ml-2 text-lg font-medium">My Dashboard</span>
            </div>
            <div className="flex items-center space-x-4">
              <button className="p-2 relative">
                <Bell className="h-6 w-6 text-gray-600" />
              </button>
              <Button className="bg-red-500 hover:bg-red-600">Upgrade</Button>
              <button className="p-2">
                <User className="h-6 w-6 text-gray-600" />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="pt-24 pb-12 px-4">
        <div className="max-w-3xl mx-auto text-center">
          {/* AI Doctor Icon */}
          <div className="w-24 h-24 bg-teal-50 rounded-full mx-auto mb-6 flex items-center justify-center">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-VeSGuymltsERRoEEU6pfd2Jl99PXQk.png"
              alt="AI Doctor"
              className="w-12 h-12"
            />
          </div>

          <h1 className="text-3xl font-bold text-gray-900 mb-4">Meet's AI Doctor</h1>
          <p className="text-gray-600 mb-8">Choose the AI Doctor type to start a conversation.</p>

          {/* Doctor Options */}
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {/* Personal AI Doctor */}
            <button
              onClick={() => (window.location.href = "/chat/personal")}
              className="p-6 bg-white rounded-lg shadow-sm border border-gray-200 hover:border-teal-500 transition-colors text-left"
            >
              <h2 className="text-xl font-semibold text-gray-900 mb-2">Personal AI Doctor</h2>
              <p className="text-gray-600">Has memory. Uses your health data for tailored insights.</p>
            </button>

            {/* General AI Doctor */}
            <button
              onClick={() => (window.location.href = "/chat/general")}
              className="p-6 bg-white rounded-lg shadow-sm border border-gray-200 hover:border-teal-500 transition-colors text-left"
            >
              <h2 className="text-xl font-semibold text-gray-900 mb-2">General AI Doctor</h2>
              <p className="text-gray-600">No memory. General advice, no previous data used.</p>
            </button>
          </div>

          {/* Chat Tabs */}
          <Tabs defaultValue="history" className="w-full">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-2">
              <TabsTrigger value="history">Chat History</TabsTrigger>
              <TabsTrigger value="last">Last Chat</TabsTrigger>
            </TabsList>
          </Tabs>
        </div>
      </main>
    </div>
  )
}

export default Options

