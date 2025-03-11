// import { Link } from "react-router-dom"
// import { Mail } from "lucide-react"
// import { Button } from "./ui/button.jsx"

// export function SignUp() {
//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
//       <div className="max-w-md w-full space-y-8">
//         {/* Heading */}
//         <h2 className="mt-6 text-center text-3xl font-bold text-gray-900">Create your account</h2>

//         {/* Sign Up Options */}
//         <div className="mt-8 space-y-6">
//           {/* Google Sign Up */}
//           <Button
//             type="button"
//             variant="outline"
//             className="w-full"
//             onClick={() => {
//               // Add Google sign up logic here
//             }}
//           >
//             <img
//               src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg"
//               alt="Google"
//               className="w-5 h-5 mr-2"
//             />
//             Continue with Google
//           </Button>

//           {/* Divider */}
//           <div className="relative">
//             <div className="absolute inset-0 flex items-center">
//               <div className="w-full border-t border-gray-300" />
//             </div>
//             <div className="relative flex justify-center text-sm">
//               <span className="px-2 bg-gray-50 text-gray-500">OR</span>
//             </div>
//           </div>

//           {/* Email Sign Up */}
//           <Button
//             type="button"
//             variant="outline"
//             className="w-full"
//             onClick={() => {
//               // Navigate to email signup form
//               window.location.href = "/signup/email"
//             }}
//           >
//             <Mail className="w-5 h-5 mr-2" />
//             Sign up with email
//           </Button>

//           {/* Sign In Link */}
//           <div className="text-center">
//             <p className="text-sm text-gray-600">
//               Already have an account?{" "}
//               <Link to="/signin" className="text-teal-600 hover:text-teal-500">
//                 Sign in
//               </Link>
//             </p>
//           </div>
//         </div>

//         {/* Terms and Privacy */}
//         <p className="mt-4 text-center text-sm text-gray-600">
//           By signing up you agree to the{" "}
//           <Link to="/terms" className="text-gray-600 hover:text-gray-500">
//             Terms of Use
//           </Link>
//           ,{" "}
//           <Link to="/privacy" className="text-gray-600 hover:text-gray-500">
//             Privacy Policy
//           </Link>{" "}
//           and{" "}
//           <Link to="/cookies" className="text-gray-600 hover:text-gray-500">
//             Cookie Policy
//           </Link>
//         </p>
//       </div>
//     </div>
//   )
// }

import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Mail } from "lucide-react";
import { signUp } from "../api.js";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";

export function SignUp() {
  const [user, setUser] = useState({ name: "", email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    const data = await signUp(user);

    if (data.error) {
      setError(data.error);
    } else {
      navigate("/signin");
    }
    
    setLoading(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <h2 className="mt-6 text-center text-3xl font-bold text-gray-900">
          Create your account
        </h2>

        {error && <p className="text-red-500 text-center">{error}</p>}

        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <Label htmlFor="name">Name</Label>
            <Input type="text" name="name" required value={user.name} onChange={handleChange} />
          </div>

          <div>
            <Label htmlFor="email">Email</Label>
            <Input type="email" name="email" required value={user.email} onChange={handleChange} />
          </div>

          <div>
            <Label htmlFor="password">Password</Label>
            <Input type="password" name="password" required value={user.password} onChange={handleChange} />
          </div>

          <Button type="submit" className="w-full bg-teal-600 hover:bg-teal-700 text-white">
            {loading ? "Signing up..." : "Sign up"}
          </Button>
        </form>

        <p className="text-center text-sm text-gray-600">
          Already have an account?{" "}
          <Link to="/signin" className="text-teal-600 hover:text-teal-500">
            Sign in
          </Link>
        </p>
      </div>
    </div>
  );
}
