// import React, { useState } from "react"
// import { ArrowLeft, Send } from "lucide-react"
// import { Button } from "../components/ui/button.jsx"

// function Chat({ type = "general" }) {
//   const [messages, setMessages] = useState([])
//   const [input, setInput] = useState("")

//   const handleSend = (e) => {
//     e.preventDefault()
//     if (!input.trim()) return

//     setMessages([...messages, { text: input, sender: "user" }])
//     setInput("")

//     // Simulate AI response
//     setTimeout(() => {
//       setMessages((prev) => [
//         ...prev,
//         {
//           text: `This is a sample response from the ${type} AI Doctor.`,
//           sender: "ai",
//         },
//       ])
//     }, 1000)
//   }

//   return (
//     <div className="min-h-screen bg-gray-50 flex flex-col">
//       {/* Header */}
//       <header className="bg-white border-b p-4 fixed top-0 left-0 right-0 z-50">
//         <div className="max-w-3xl mx-auto flex items-center">
//           <button onClick={() => window.history.back()} className="p-2 hover:bg-gray-100 rounded-full">
//             <ArrowLeft className="h-6 w-6" />
//           </button>
//           <h1 className="ml-4 text-xl font-semibold">{type === "personal" ? "Personal" : "General"} AI Doctor</h1>
//         </div>
//       </header>

//       {/* Chat Messages */}
//       <div className="flex-1 overflow-y-auto pt-20 pb-24 px-4">
//         <div className="max-w-3xl mx-auto space-y-4">
//           {messages.map((message, index) => (
//             <div key={index} className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}>
//               <div
//                 className={`max-w-[80%] rounded-lg p-4 ${
//                   message.sender === "user" ? "bg-teal-600 text-white" : "bg-white border border-gray-200"
//                 }`}
//               >
//                 {message.text}
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Input Form */}
//       <form onSubmit={handleSend} className="fixed bottom-0 left-0 right-0 bg-white border-t p-4">
//         <div className="max-w-3xl mx-auto flex gap-4">
//           <input
//             type="text"
//             value={input}
//             onChange={(e) => setInput(e.target.value)}
//             placeholder="Type your message..."
//             className="flex-1 rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:border-teal-500"
//           />
//           <Button type="submit" className="bg-teal-600 hover:bg-teal-700">
//             <Send className="h-5 w-5" />
//           </Button>
//         </div>
//       </form>
//     </div>
//   )
// }

// export default Chat

import React, { useState } from "react"
import { ArrowLeft, Send } from "lucide-react"
import { Button } from "../components/ui/button.jsx"

function Chat({ type = "general" }) {
  const [messages, setMessages] = useState([])
  const [input, setInput] = useState("")
  const [loading, setLoading] = useState(false)

  const handleSend = async (e) => {
    e.preventDefault()
    if (!input.trim()) return

    setMessages([...messages, { text: input, sender: "user" }])
    setInput("")
    setLoading(true)

    try {
      const response = await fetch("http://127.0.0.1:5000/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: input }),
      })

      const data = await response.json()

      setMessages((prev) => [
        ...prev,
        { text: `Predicted Disease: ${data.disease}`, sender: "ai" },
        { text: `Description: ${data.description}`, sender: "ai" },
        { text: `Precautions: ${data.precautions.join(", ")}`, sender: "ai" }
      ])
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        { text: "Sorry, something went wrong. Please try again.", sender: "ai" },
      ])
    }

    setLoading(false)
  }

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Header */}
      <header className="bg-white border-b p-4 fixed top-0 left-0 right-0 z-50">
        <div className="max-w-3xl mx-auto flex items-center">
          <button onClick={() => window.history.back()} className="p-2 hover:bg-gray-100 rounded-full">
            <ArrowLeft className="h-6 w-6" />
          </button>
          <h1 className="ml-4 text-xl font-semibold">AI Health Assistant</h1>
        </div>
      </header>

      {/* Chat Messages */}
      <div className="flex-1 overflow-y-auto pt-20 pb-24 px-4">
        <div className="max-w-3xl mx-auto space-y-4">
          {messages.map((message, index) => (
            <div key={index} className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}>
              <div
                className={`max-w-[80%] rounded-lg p-4 ${
                  message.sender === "user" ? "bg-teal-600 text-white" : "bg-white border border-gray-200"
                }`}
              >
                {message.text}
              </div>
            </div>
          ))}
          {loading && (
            <div className="flex justify-start">
              <div className="max-w-[80%] rounded-lg p-4 bg-white border border-gray-200">
                Typing...
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Input Form */}
      <form onSubmit={handleSend} className="fixed bottom-0 left-0 right-0 bg-white border-t p-4">
        <div className="max-w-3xl mx-auto flex gap-4">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Enter symptoms (comma separated)..."
            className="flex-1 rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:border-teal-500"
          />
          <Button type="submit" className="bg-teal-600 hover:bg-teal-700" disabled={loading}>
            <Send className="h-5 w-5" />
          </Button>
        </div>
      </form>
    </div>
  )
}

export default Chat
