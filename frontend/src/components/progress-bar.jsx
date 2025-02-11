export function ProgressBar({ progress }) {
    return (
      <div className="w-full bg-gray-200 rounded-full h-2">
        <div
          className="bg-orange-400 h-2 rounded-full transition-all duration-500 ease-in-out"
          style={{ width: `${progress}%` }}
        />
      </div>
    )
  }
  
  