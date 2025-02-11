import { Link } from "react-router-dom"
import { Mail, Lock } from "lucide-react"
import { Button } from "./ui/button.jsx"
import { Input } from "./ui/input.jsx"
import { Label } from "./ui/label.jsx"

export function SignIn() {
  const handleSubmit = (e) => {
    e.preventDefault()
    // Add your sign in logic here
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">

        {/* Heading */}
        <h2 className="mt-6 text-center text-3xl font-bold text-gray-900">Welcome back!</h2>

        {/* Form */}
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="space-y-4">
            <div>
              <Label htmlFor="email" className="sr-only">
                Email
              </Label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Mail className="h-5 w-5 text-gray-400" />
                </div>
                <Input id="email" name="email" type="email" required className="pl-10" placeholder="Enter your email" />
              </div>
            </div>

            <div>
              <Label htmlFor="password" className="sr-only">
                Password
              </Label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Lock className="h-5 w-5 text-gray-400" />
                </div>
                <Input
                  id="password"
                  name="password"
                  type="password"
                  required
                  className="pl-10"
                  placeholder="Enter your password"
                />
              </div>
            </div>
          </div>

          <div className="flex items-center justify-end">
            <Link to="/forgot-password" className="text-sm text-teal-600 hover:text-teal-500">
              Forgot password?
            </Link>
          </div>

          <Button type="submit" className="w-full bg-teal-600 hover:bg-teal-700 text-white">
            Sign in
          </Button>

          <div className="text-center">
            <p className="text-sm text-gray-600">
              Don't have an account?{" "}
              <Link to="/signup" className="text-teal-600 hover:text-teal-500">
                Sign up
              </Link>
            </p>
          </div>

          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300" />
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-gray-50 text-gray-500">OR</span>
            </div>
          </div>

          <Button
            type="button"
            variant="outline"
            className="w-full"
            onClick={() => {
              // Add Google sign in logic here
            }}
          >
            <img
              src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg"
              alt="Google"
              className="w-5 h-5 mr-2"
            />
            Continue with Google
          </Button>
        </form>

        {/* Terms and Privacy */}
        <p className="mt-4 text-center text-sm text-gray-600">
          By signing in you agree to the{" "}
          <Link to="/terms" className="text-gray-600 hover:text-gray-500">
            Terms of Use
          </Link>
          ,{" "}
          <Link to="/privacy" className="text-gray-600 hover:text-gray-500">
            Privacy Policy
          </Link>{" "}
          and{" "}
          <Link to="/cookies" className="text-gray-600 hover:text-gray-500">
            Cookie Policy
          </Link>
        </p>
      </div>
    </div>
  )
}

