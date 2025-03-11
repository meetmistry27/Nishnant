// import { useState, useEffect } from "react"
// import { useNavigate } from "react-router-dom"
// import { Button } from "../components/ui/button"
// import { Input } from "../components/ui/input"
// import { Label } from "../components/ui/label"
// import { RadioGroup, RadioGroupItem } from "../components/ui/radio-group"
// import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../components/ui/select"
// // import { BodyDiagram } from "../health-profile/body-diagram"
// // import { ProgressBar } from "../health-profile/progress-bar"

// export function ProfileCompletionForm() {
//   const navigate = useNavigate()

//   const [formData, setFormData] = useState({
//     name: "",
//     email: "", // Assuming email is already collected during signup
//     age: "",
//     height: "",
//     weight: "",
//     ethnicity: "",
//     gender: "",
//   })

//   const [errors, setErrors] = useState({})
//   const [completion, setCompletion] = useState(0)

//   // Calculate form completion percentage
//   useEffect(() => {
//     const totalFields = 5 // Excluding email which is pre-filled
//     let filledFields = 0

//     if (formData.name) filledFields++
//     if (formData.age) filledFields++
//     if (formData.height) filledFields++
//     if (formData.weight) filledFields++
//     if (formData.ethnicity) filledFields++
//     if (formData.gender) filledFields++

//     setCompletion(Math.round((filledFields / totalFields) * 100))
//   }, [formData])

//   const ethnicityOptions = [
//     { value: "Asian", label: "Asian" },
//     { value: "African", label: "African" },
//     { value: "Caucasian", label: "Caucasian" },
//     { value: "Hispanic", label: "Hispanic" },
//     { value: "Other", label: "Other" },
//   ]

//   const genderOptions = [
//     { value: "Male", label: "Male" },
//     { value: "Female", label: "Female" },
//     { value: "Non-binary", label: "Non-binary" },
//     { value: "Other", label: "Other" },
//   ]

//   const validateForm = () => {
//     const newErrors = {}
//     if (!formData.name) newErrors.name = "Name is required"
//     if (!formData.age) newErrors.age = "Age is required"
//     else if (formData.age < 0) newErrors.age = "Age must be a positive number"
//     if (!formData.height) newErrors.height = "Height is required"
//     if (!formData.weight) newErrors.weight = "Weight is required"
//     else if (formData.weight <= 0) newErrors.weight = "Weight must be greater than 0"
//     if (!formData.ethnicity) newErrors.ethnicity = "Ethnicity is required"
//     if (!formData.gender) newErrors.gender = "Gender is required"

//     setErrors(newErrors)
//     return Object.keys(newErrors).length === 0
//   }

//   const handleSubmit = (e) => {
//     e.preventDefault()
//     if (validateForm()) {
//       // Save data and redirect
//       console.log("Form data:", formData)
//       navigate("/dashboard")
//     }
//   }

//   return (
//     <div className="min-h-screen bg-gray-50 py-12">
//       <div className="max-w-3xl mx-auto px-4 sm:px-6">
//         <div className="bg-white rounded-lg shadow p-6 space-y-6">
//           <div className="text-center">
//             <h1 className="text-2xl font-bold text-gray-900">Complete Your Profile</h1>
//             <p className="mt-2 text-gray-600">Please provide your basic health information to continue</p>

//             {/* <div className="mt-4">
//               <div className="flex items-center justify-between mb-2">
//                 <span className="text-sm text-gray-600">Profile completion</span>
//                 <span className="text-sm font-medium text-teal-600">{completion}%</span>
//               </div>
//               <ProgressBar progress={completion} />
//             </div> */}
//           </div>

//           <form onSubmit={handleSubmit} className="space-y-8">
//             <div className="grid md:grid-cols-2 gap-6">
//               {/* Left Column - Form Fields */}
//               <div className="space-y-6">
//                 {/* Name */}
//                 <div className="space-y-2">
//                   <Label htmlFor="name">
//                     Full Name <span className="text-red-500">*</span>
//                   </Label>
//                   <Input
//                     id="name"
//                     type="text"
//                     value={formData.name}
//                     onChange={(e) => setFormData({ ...formData, name: e.target.value })}
//                     className={errors.name ? "border-red-500" : ""}
//                     placeholder="Enter your full name"
//                   />
//                   {errors.name && <p className="text-sm text-red-500">{errors.name}</p>}
//                 </div>

//                 {/* Age */}
//                 <div className="space-y-2">
//                   <Label htmlFor="age">
//                     Age <span className="text-red-500">*</span>
//                   </Label>
//                   <Input
//                     id="age"
//                     type="number"
//                     min="0"
//                     max="120"
//                     value={formData.age}
//                     onChange={(e) => setFormData({ ...formData, age: e.target.value })}
//                     className={errors.age ? "border-red-500" : ""}
//                     placeholder="Enter your age"
//                   />
//                   {errors.age && <p className="text-sm text-red-500">{errors.age}</p>}
//                 </div>

//                 {/* Height */}
//                 <div className="space-y-2">
//                   <Label htmlFor="height">
//                     Height <span className="text-red-500">*</span>
//                   </Label>
//                   <Input
//                     id="height"
//                     type="text"
//                     value={formData.height}
//                     onChange={(e) => setFormData({ ...formData, height: e.target.value })}
//                     className={errors.height ? "border-red-500" : ""}
//                     placeholder="e.g. 6&apos;1&quot;"
//                   />
//                   {errors.height && <p className="text-sm text-red-500">{errors.height}</p>}
//                 </div>

//                 {/* Weight */}
//                 <div className="space-y-2">
//                   <Label htmlFor="weight">
//                     Weight (lbs) <span className="text-red-500">*</span>
//                   </Label>
//                   <Input
//                     id="weight"
//                     type="number"
//                     min="0"
//                     step="0.1"
//                     value={formData.weight}
//                     onChange={(e) => setFormData({ ...formData, weight: e.target.value })}
//                     className={errors.weight ? "border-red-500" : ""}
//                     placeholder="Enter your weight in pounds"
//                   />
//                   {errors.weight && <p className="text-sm text-red-500">{errors.weight}</p>}
//                 </div>

//                 {/* Ethnicity */}
//                 <div className="space-y-2">
//                   <Label htmlFor="ethnicity">
//                     Ethnicity <span className="text-red-500">*</span>
//                   </Label>
//                   <Select
//                     value={formData.ethnicity}
//                     onValueChange={(value) => setFormData({ ...formData, ethnicity: value })}
//                   >
//                     <SelectTrigger className={errors.ethnicity ? "border-red-500" : ""}>
//                       <SelectValue placeholder="Select ethnicity" />
//                     </SelectTrigger>
//                     <SelectContent>
//                       {ethnicityOptions.map((option) => (
//                         <SelectItem key={option.value} value={option.value}>
//                           {option.label}
//                         </SelectItem>
//                       ))}
//                     </SelectContent>
//                   </Select>
//                   {errors.ethnicity && <p className="text-sm text-red-500">{errors.ethnicity}</p>}
//                 </div>

//                 {/* Gender */}
//                 <div className="space-y-2">
//                   <Label>
//                     Gender <span className="text-red-500">*</span>
//                   </Label>
//                   <RadioGroup
//                     value={formData.gender}
//                     onValueChange={(value) => setFormData({ ...formData, gender: value })}
//                     className="grid grid-cols-2 gap-2"
//                   >
//                     {genderOptions.map((option) => (
//                       <div key={option.value} className="flex items-center space-x-2">
//                         <RadioGroupItem value={option.value} id={option.value} />
//                         <Label htmlFor={option.value}>{option.label}</Label>
//                       </div>
//                     ))}
//                   </RadioGroup>
//                   {errors.gender && <p className="text-sm text-red-500">{errors.gender}</p>}
//                 </div>
//               </div>

//               {/* Right Column - Body Diagram
//               <div className="hidden md:flex justify-center items-center">
//                 <BodyDiagram />
//               </div> */}
//             </div>

//             {/* Submit Button */}
//             <Button type="submit" className="w-full bg-teal-600 hover:bg-teal-700 text-white">
//               Save and Continue
//             </Button>
//           </form>
//         </div>
//       </div>
//     </div>
//   )
// }

'use client'

import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { Button } from "../components/ui/button"
import { Input } from "../components/ui/input"
import { Label } from "../components/ui/label"
import { RadioGroup, RadioGroupItem } from "../components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../components/ui/select"
import { Loader2, CheckCircle, AlertCircle, ArrowLeft } from 'lucide-react'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs"
import { Alert, AlertDescription, AlertTitle } from "../components/ui/alert"
import { Avatar, AvatarFallback, AvatarImage } from "../components/ui/avatar"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "../components/ui/tooltip"

// Progress bar component
function ProgressBar({ progress }) {
  return (
    <div className="w-full bg-gray-100 rounded-full h-2.5 overflow-hidden">
      <div
        className="bg-gradient-to-r from-teal-400 to-teal-600 h-2.5 rounded-full transition-all duration-500 ease-in-out"
        style={{ width: `${progress}%` }}
      />
    </div>
  )
}

export function ProfileCompletionForm() {
  const navigate = useNavigate()
  const [activeTab, setActiveTab] = useState("basic")
  const [formStatus, setFormStatus] = useState("idle") // idle, loading, success, error
  const [apiError, setApiError] = useState(null)

  const [formData, setFormData] = useState({
    name: "",
    email: "", // Assuming email is already collected during signup
    age: "",
    height: "",
    weight: "",
    ethnicity: "",
    gender: "",
  })

  const [errors, setErrors] = useState({})
  const [completion, setCompletion] = useState(0)
  const [touched, setTouched] = useState({})

  // Calculate form completion percentage
  useEffect(() => {
    const totalFields = 6 // All required fields
    let filledFields = 0

    if (formData.name) filledFields++
    if (formData.age) filledFields++
    if (formData.height) filledFields++
    if (formData.weight) filledFields++
    if (formData.ethnicity) filledFields++
    if (formData.gender) filledFields++

    setCompletion(Math.round((filledFields / totalFields) * 100))
  }, [formData])

  const ethnicityOptions = [
    { value: "Asian", label: "Asian" },
    { value: "African", label: "African" },
    { value: "Caucasian", label: "Caucasian" },
    { value: "Hispanic", label: "Hispanic" },
    { value: "Other", label: "Other" },
  ]

  const genderOptions = [
    { value: "Male", label: "Male" },
    { value: "Female", label: "Female" },
    { value: "Non-binary", label: "Non-binary" },
    { value: "Other", label: "Other" },
  ]

  const validateForm = () => {
    const newErrors = {}
    if (!formData.name) newErrors.name = "Name is required"
    if (!formData.age) newErrors.age = "Age is required"
    else if (formData.age < 0) newErrors.age = "Age must be a positive number"
    if (!formData.height) newErrors.height = "Height is required"
    if (!formData.weight) newErrors.weight = "Weight is required"
    else if (formData.weight <= 0) newErrors.weight = "Weight must be greater than 0"
    if (!formData.ethnicity) newErrors.ethnicity = "Ethnicity is required"
    if (!formData.gender) newErrors.gender = "Gender is required"

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleBlur = (field) => {
    setTouched({ ...touched, [field]: true })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    if (validateForm()) {
      try {
        setFormStatus("loading")
        
        // API call to save user data
        const response = await fetch('/api/user/profile', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        })
        
        if (!response.ok) {
          const errorData = await response.json()
          throw new Error(errorData.message || 'Failed to save profile data')
        }
        
        setFormStatus("success")
        
        // Redirect after a short delay to show success message
        setTimeout(() => {
          navigate("/dashboard")
        }, 1500)
      } catch (error) {
        console.error('Error saving profile:', error)
        setFormStatus("error")
        setApiError(error.message || 'An unexpected error occurred')
      }
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Back button */}
        <button 
          onClick={() => navigate(-1)}
          className="mb-6 flex items-center text-gray-600 hover:text-gray-900 transition-colors"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          <span>Back</span>
        </button>
        
        <Card className="border-0 shadow-lg overflow-hidden">
          <CardHeader className="bg-gradient-to-r from-teal-500 to-teal-600 text-white">
            <div className="flex items-center justify-between">
              <div>
                <CardTitle className="text-2xl font-bold">Complete Your Health Profile</CardTitle>
                <CardDescription className="text-teal-50 mt-1">
                  Your information helps us provide personalized health insights
                </CardDescription>
              </div>
              <Avatar className="h-16 w-16 border-2 border-white">
                <AvatarImage src="/placeholder.svg?height=64&width=64" />
                <AvatarFallback className="bg-teal-700 text-white">
                  {formData.name ? formData.name.charAt(0) : 'U'}
                </AvatarFallback>
              </Avatar>
            </div>
            
            <div className="mt-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-teal-50">Profile completion</span>
                <span className="text-sm font-medium text-white">{completion}%</span>
              </div>
              <ProgressBar progress={completion} />
            </div>
          </CardHeader>
          
          <Tabs defaultValue="basic" value={activeTab} onValueChange={setActiveTab} className="w-full">
            <div className="px-6 pt-6">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="basic">Basic Information</TabsTrigger>
                <TabsTrigger value="health">Health Details</TabsTrigger>
              </TabsList>
            </div>
            
            <form onSubmit={handleSubmit}>
              <CardContent className="p-6">
                {formStatus === "error" && (
                  <Alert variant="destructive" className="mb-6">
                    <AlertCircle className="h-4 w-4" />
                    <AlertTitle>Error</AlertTitle>
                    <AlertDescription>
                      {apiError || "There was an error saving your profile. Please try again."}
                    </AlertDescription>
                  </Alert>
                )}
                
                <TabsContent value="basic" className="mt-0">
                  <div className="grid md:grid-cols-2 gap-6">
                    {/* Left Column - Basic Form Fields */}
                    <div className="space-y-6">
                      {/* Name */}
                      <div className="space-y-2">
                        <Label htmlFor="name" className="text-gray-700">
                          Full Name <span className="text-red-500">*</span>
                        </Label>
                        <Input
                          id="name"
                          type="text"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          onBlur={() => handleBlur('name')}
                          className={errors.name && touched.name ? "border-red-500 focus-visible:ring-red-500" : ""}
                          placeholder="Enter your full name"
                        />
                        {errors.name && touched.name && (
                          <p className="text-sm text-red-500 flex items-center mt-1">
                            <AlertCircle className="h-3 w-3 mr-1" />
                            {errors.name}
                          </p>
                        )}
                      </div>

                      {/* Gender */}
                      <div className="space-y-2">
                        <Label className="text-gray-700">
                          Gender <span className="text-red-500">*</span>
                        </Label>
                        <RadioGroup
                          value={formData.gender}
                          onValueChange={(value) => setFormData({ ...formData, gender: value })}
                          className="grid grid-cols-2 gap-2"
                          onBlur={() => handleBlur('gender')}
                        >
                          {genderOptions.map((option) => (
                            <div key={option.value} className="flex items-center space-x-2">
                              <RadioGroupItem value={option.value} id={option.value} />
                              <Label htmlFor={option.value} className="text-gray-700">{option.label}</Label>
                            </div>
                          ))}
                        </RadioGroup>
                        {errors.gender && touched.gender && (
                          <p className="text-sm text-red-500 flex items-center mt-1">
                            <AlertCircle className="h-3 w-3 mr-1" />
                            {errors.gender}
                          </p>
                        )}
                      </div>

                      {/* Ethnicity */}
                      <div className="space-y-2">
                        <Label htmlFor="ethnicity" className="text-gray-700">
                          Ethnicity <span className="text-red-500">*</span>
                        </Label>
                        <Select
                          value={formData.ethnicity}
                          onValueChange={(value) => setFormData({ ...formData, ethnicity: value })}
                          onOpenChange={() => handleBlur('ethnicity')}
                        >
                          <SelectTrigger className={errors.ethnicity && touched.ethnicity ? "border-red-500" : ""}>
                            <SelectValue placeholder="Select ethnicity" />
                          </SelectTrigger>
                          <SelectContent>
                            {ethnicityOptions.map((option) => (
                              <SelectItem key={option.value} value={option.value}>
                                {option.label}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        {errors.ethnicity && touched.ethnicity && (
                          <p className="text-sm text-red-500 flex items-center mt-1">
                            <AlertCircle className="h-3 w-3 mr-1" />
                            {errors.ethnicity}
                          </p>
                        )}
                      </div>
                    </div>

                    {/* Right Column - Body Diagram
                    <div className="hidden md:flex justify-center items-center bg-gray-50 rounded-lg p-4">
                      <BodyDiagram />
                    </div> */}
                  </div>
                  
                  <div className="mt-6 flex justify-end">
                    <Button 
                      type="button" 
                      onClick={() => setActiveTab("health")}
                      className="bg-teal-600 hover:bg-teal-700 text-white"
                    >
                      Next: Health Details
                    </Button>
                  </div>
                </TabsContent>
                
                <TabsContent value="health" className="mt-0">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-6">
                      {/* Age */}
                      <div className="space-y-2">
                        <Label htmlFor="age" className="text-gray-700">
                          Age <span className="text-red-500">*</span>
                        </Label>
                        <div className="relative">
                          <Input
                            id="age"
                            type="number"
                            min="0"
                            max="120"
                            value={formData.age}
                            onChange={(e) => setFormData({ ...formData, age: e.target.value })}
                            onBlur={() => handleBlur('age')}
                            className={errors.age && touched.age ? "border-red-500 pr-12" : "pr-12"}
                            placeholder="Enter your age"
                          />
                          <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                            <span className="text-gray-500 text-sm">years</span>
                          </div>
                        </div>
                        {errors.age && touched.age && (
                          <p className="text-sm text-red-500 flex items-center mt-1">
                            <AlertCircle className="h-3 w-3 mr-1" />
                            {errors.age}
                          </p>
                        )}
                      </div>

                      {/* Height */}
                      <div className="space-y-2">
                        <Label htmlFor="height" className="text-gray-700">
                          Height <span className="text-red-500">*</span>
                        </Label>
                        <TooltipProvider>
                          <Tooltip>
                            <TooltipTrigger asChild>
                              <div className="relative">
                                <Input
                                  id="height"
                                  type="text"
                                  value={formData.height}
                                  onChange={(e) => setFormData({ ...formData, height: e.target.value })}
                                  onBlur={() => handleBlur('height')}
                                  className={errors.height && touched.height ? "border-red-500" : ""}
                                  placeholder="e.g. 6'1&quot;"
                                />
                              </div>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p>Format: feet'inches" (e.g. 5'10")</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                        {errors.height && touched.height && (
                          <p className="text-sm text-red-500 flex items-center mt-1">
                            <AlertCircle className="h-3 w-3 mr-1" />
                            {errors.height}
                          </p>
                        )}
                      </div>

                      {/* Weight */}
                      <div className="space-y-2">
                        <Label htmlFor="weight" className="text-gray-700">
                          Weight <span className="text-red-500">*</span>
                        </Label>
                        <div className="relative">
                          <Input
                            id="weight"
                            type="number"
                            min="0"
                            step="0.1"
                            value={formData.weight}
                            onChange={(e) => setFormData({ ...formData, weight: e.target.value })}
                            onBlur={() => handleBlur('weight')}
                            className={errors.weight && touched.weight ? "border-red-500 pr-12" : "pr-12"}
                            placeholder="Enter your weight"
                          />
                          <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                            <span className="text-gray-500 text-sm">lbs</span>
                          </div>
                        </div>
                        {errors.weight && touched.weight && (
                          <p className="text-sm text-red-500 flex items-center mt-1">
                            <AlertCircle className="h-3 w-3 mr-1" />
                            {errors.weight}
                          </p>
                        )}
                      </div>
                    </div>
                    
                    <div className="bg-gray-50 rounded-lg p-6 flex flex-col justify-center">
                      <h3 className="text-lg font-medium text-gray-900 mb-4">Health Information</h3>
                      <p className="text-gray-600 mb-4">
                        Your health information helps us provide personalized recommendations and insights.
                      </p>
                      <div className="bg-teal-50 border border-teal-200 rounded-lg p-4">
                        <h4 className="text-sm font-medium text-teal-800 mb-2">Why we need this information</h4>
                        <ul className="text-sm text-teal-700 space-y-1">
                          <li>• Personalize health recommendations</li>
                          <li>• Calculate health metrics accurately</li>
                          <li>• Provide relevant insights</li>
                          <li>• Track your progress over time</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-6 flex justify-between">
                    <Button 
                      type="button" 
                      variant="outline"
                      onClick={() => setActiveTab("basic")}
                    >
                      Back to Basic Info
                    </Button>
                    <Button 
                      type="submit" 
                      className="bg-teal-600 hover:bg-teal-700 text-white"
                      disabled={formStatus === "loading" || formStatus === "success"}
                    >
                      {formStatus === "loading" ? (
                        <>
                          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                          Saving...
                        </>
                      ) : formStatus === "success" ? (
                        <>
                          <CheckCircle className="mr-2 h-4 w-4" />
                          Saved!
                        </>
                      ) : (
                        "Save and Continue"
                      )}
                    </Button>
                  </div>
                </TabsContent>
              </CardContent>
            </form>
          </Tabs>
          
          <CardFooter className="bg-gray-50 border-t px-6 py-4">
            <p className="text-xs text-gray-500">
              Your information is securely stored and will only be used to provide you with personalized health insights.
              By submitting this form, you agree to our <a href="/terms" className="text-teal-600 hover:underline">Terms of Service</a> and <a href="/privacy" className="text-teal-600 hover:underline">Privacy Policy</a>.
            </p>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}
