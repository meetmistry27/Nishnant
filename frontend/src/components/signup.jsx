import { Link } from "react-router-dom"
import { Mail } from "lucide-react"
import { Button } from "./ui/button.jsx"

export function SignUp() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        {/* Heading */}
        <h2 className="mt-6 text-center text-3xl font-bold text-gray-900">Create your account</h2>

        {/* Sign Up Options */}
        <div className="mt-8 space-y-6">
          {/* Google Sign Up */}
          <Button
            type="button"
            variant="outline"
            className="w-full"
            onClick={() => {
              // Add Google sign up logic here
            }}
          >
            <img
              src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg"
              alt="Google"
              className="w-5 h-5 mr-2"
            />
            Continue with Google
          </Button>

          {/* Divider */}
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300" />
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-gray-50 text-gray-500">OR</span>
            </div>
          </div>

          {/* Email Sign Up */}
          <Button
            type="button"
            variant="outline"
            className="w-full"
            onClick={() => {
              // Navigate to email signup form
              window.location.href = "/signup/email"
            }}
          >
            <Mail className="w-5 h-5 mr-2" />
            Sign up with email
          </Button>

          {/* Sign In Link */}
          <div className="text-center">
            <p className="text-sm text-gray-600">
              Already have an account?{" "}
              <Link to="/signin" className="text-teal-600 hover:text-teal-500">
                Sign in
              </Link>
            </p>
          </div>
        </div>

        {/* Terms and Privacy */}
        <p className="mt-4 text-center text-sm text-gray-600">
          By signing up you agree to the{" "}
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

