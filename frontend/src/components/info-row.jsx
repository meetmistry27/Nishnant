import { Pencil } from "lucide-react"

export function InfoRow({ label, value, editable = true }) {
  return (
    <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
      <div className="flex-1">
        <p className="text-sm text-gray-500">{label}</p>
        <p className="text-base font-medium text-gray-900">{value}</p>
      </div>
      {editable && (
        <button className="p-2 hover:bg-gray-200 rounded-full transition-colors">
          <Pencil className="w-4 h-4 text-gray-500" />
        </button>
      )}
    </div>
  )
}

