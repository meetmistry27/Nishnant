import { ChevronRight } from "lucide-react"

export function SectionHeader({ title, progress = 0, onClick }) {
  return (
    <button
      onClick={onClick}
      className="w-full flex items-center justify-between p-4 hover:bg-gray-50 transition-colors"
    >
      <div className="flex items-center space-x-4">
        <div className="relative">
          <div className="w-8 h-8 rounded-full border-2 border-gray-200 flex items-center justify-center">
            <span className="text-sm font-medium text-gray-700">{progress}%</span>
          </div>
          {progress === 100 && (
            <div className="absolute -right-1 -top-1 w-4 h-4 bg-teal-500 rounded-full border-2 border-white" />
          )}
        </div>
        <span className="text-lg font-medium text-gray-900">{title}</span>
      </div>
      <ChevronRight className="w-5 h-5 text-gray-400" />
    </button>
  )
}

