// import React from "react"
// import { Button } from "./ui/button"
// import { Link } from "react-router-dom";

// export function Navigation() {
//   return (
//     <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6">
//         <div className="flex justify-between items-center py-4">
//           <div className="flex items-center">
//             <a href="/" className="text-2xl font-bold text-gray-900">
//               Nishnant
//             </a>
//             <div className="hidden md:flex ml-10 space-x-8">
//               <button className="text-gray-700 group inline-flex items-center">
//                 Solutions
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   className="ml-1 h-4 w-4"
//                   viewBox="0 0 20 20"
//                   fill="currentColor"
//                 >
//                   <path
//                     fillRule="evenodd"
//                     d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
//                     clipRule="evenodd"
//                   />
//                 </svg>
//               </button>
//               <a href="/pricing" className="text-gray-700">
//                 Pricing
//               </a>
//               <button className="text-gray-700 group inline-flex items-center">
//                 Resources
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   className="ml-1 h-4 w-4"
//                   viewBox="0 0 20 20"
//                   fill="currentColor"
//                 >
//                   <path
//                     fillRule="evenodd"
//                     d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
//                     clipRule="evenodd"
//                   />
//                 </svg>
//               </button>
//               <a href="/labs" className="text-red-500">
//                 For Labs
//               </a>
//             </div>
//           </div>
//           <div className="flex items-center space-x-4">
//             <Link to="/signup">
//             <Button variant="ghost">Sign in</Button>
//             </Link>
//             <Button className="bg-red-500 hover:bg-red-600 text-white">Get Started for Free!</Button>
//           </div>
//         </div>
//       </div>
//     </nav>
//   )
// }

import { useState, useEffect } from "react"
import { Link, useLocation } from "react-router-dom"
import { Button } from "./ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar"
import { Bell, ChevronDown, Heart, Menu, MessageSquare, FileText, User, LogOut, Settings, X } from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu"
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "./ui/sheet"

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const location = useLocation()

  // Check if user is logged in
  useEffect(() => {
    // This is where you would check for a token in localStorage or context
    // For now, I'll simulate login status based on URL path
    const authPaths = ["/dashboard", "/chat", "/health-data", "/profile", "/profile/options"]
    const isAuthenticated = authPaths.some((path) => location.pathname.startsWith(path))
    setIsLoggedIn(isAuthenticated)
  }, [location])

  // Add shadow on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Navigation links based on auth state
  const publicNavLinks = [
    {
      name: "Solutions",
      dropdown: true,
      items: [
        { name: "For Patients", description: "Access quality healthcare from home", href: "/solutions/patients" },
        { name: "For Doctors", description: "Expand your practice online", href: "/solutions/doctors" },
        { name: "For Labs", description: "Connect with patients directly", href: "/solutions/labs" },
      ],
    },
    { name: "Pricing", href: "/pricing" },
    {
      name: "Resources",
      dropdown: true,
      items: [
        { name: "Blog", href: "/blog" },
        { name: "Help Center", href: "/help" },
        { name: "About Us", href: "/about" },
      ],
    },
    { name: "For Labs", href: "/labs", highlight: true },
  ]

  const authNavLinks = [
    { name: "Dashboard", href: "/profile", icon: <FileText size={16} /> },
    { name: "Chat with AI", href: "/profile/options", icon: <MessageSquare size={16} /> },
    { name: "Health Profile", href: "/health-data", icon: <User size={16} /> },
  ]

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 bg-white border-b transition-shadow ${isScrolled ? "shadow-md" : ""}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center py-4">
          {/* Logo and Brand */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <Heart className="h-6 w-6 text-teal-600 mr-2" />
              <span className="text-xl font-bold text-gray-900">Nishnant</span>
            </Link>

            {/* Desktop Navigation - Public or Auth based */}
            {isLoggedIn ? (
              <div className="hidden md:flex ml-10 space-x-8">
                {authNavLinks.map((link, i) => (
                  <Link
                    key={i}
                    to={link.href}
                    className={`flex items-center text-gray-700 hover:text-teal-600 ${location.pathname === link.href ? "text-teal-600 font-medium" : ""}`}
                  >
                    {link.icon && <span className="mr-1.5">{link.icon}</span>}
                    {link.name}
                  </Link>
                ))}
              </div>
            ) : (
              <div className="hidden md:flex ml-10 space-x-8">
                {publicNavLinks.map((link, i) =>
                  link.dropdown ? (
                    <DropdownMenu key={i}>
                      <DropdownMenuTrigger className="text-gray-700 hover:text-teal-600 group inline-flex items-center">
                        {link.name}
                        <ChevronDown className="ml-1 h-4 w-4 transition group-data-[state=open]:rotate-180" />
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="start" className="w-56">
                        {link.items.map((item, j) => (
                          <DropdownMenuItem key={j} asChild>
                            <Link to={item.href} className="cursor-pointer">
                              <div>
                                <p className="font-medium">{item.name}</p>
                                {item.description && <p className="text-xs text-gray-500">{item.description}</p>}
                              </div>
                            </Link>
                          </DropdownMenuItem>
                        ))}
                      </DropdownMenuContent>
                    </DropdownMenu>
                  ) : (
                    <Link
                      key={i}
                      to={link.href}
                      className={link.highlight ? "text-teal-600 font-medium" : "text-gray-700 hover:text-teal-600"}
                    >
                      {link.name}
                    </Link>
                  ),
                )}
              </div>
            )}
          </div>

          {/* Right Side - Auth buttons or User menu */}
          <div className="flex items-center space-x-4">
            {isLoggedIn ? (
              <>
                {/* Notifications */}
                <Button variant="ghost" size="icon" className="relative hidden md:flex">
                  <Bell className="h-5 w-5 text-gray-600" />
                  <span className="absolute top-0 right-0 h-2 w-2 bg-red-500 rounded-full"></span>
                </Button>

                {/* User menu */}
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" className="rounded-full p-0 h-auto" aria-label="User menu">
                      <Avatar className="h-8 w-8 border border-gray-200 cursor-pointer">
                        <AvatarImage src="/placeholder.svg?height=32&width=32" />
                        <AvatarFallback className="bg-teal-100 text-teal-800">JD</AvatarFallback>
                      </Avatar>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" className="w-56">
                    <DropdownMenuLabel>
                      <div className="flex flex-col space-y-1">
                        <p className="text-sm font-medium">John Doe</p>
                        <p className="text-xs text-gray-500">john.doe@example.com</p>
                      </div>
                    </DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem asChild>
                      <Link to="/dashboard" className="cursor-pointer">
                        <FileText className="mr-2 h-4 w-4" />
                        <span>Dashboard</span>
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link to="/health-profile" className="cursor-pointer">
                        <User className="mr-2 h-4 w-4" />
                        <span>Health Profile</span>
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link to="/settings" className="cursor-pointer">
                        <Settings className="mr-2 h-4 w-4" />
                        <span>Settings</span>
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem asChild>
                      <Link
                        to="/"
                        className="cursor-pointer text-red-500 focus:text-red-500"
                        onClick={() => setIsLoggedIn(false)}
                      >
                        <LogOut className="mr-2 h-4 w-4" />
                        <span>Log out</span>
                      </Link>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>

                {/* Mobile menu button - when logged in */}
                <div className="md:hidden">
                  <Sheet>
                    <SheetTrigger asChild>
                      <Button variant="ghost" size="icon">
                        <Menu className="h-6 w-6" />
                      </Button>
                    </SheetTrigger>
                    <SheetContent side="right" className="w-[300px] sm:w-[350px]">
                      <div className="flex flex-col h-full">
                        <div className="flex items-center justify-between mb-6">
                          <div className="flex items-center">
                            <Avatar className="h-10 w-10 mr-3">
                              <AvatarImage src="/placeholder.svg?height=40&width=40" />
                              <AvatarFallback className="bg-teal-100 text-teal-800">JD</AvatarFallback>
                            </Avatar>
                            <div>
                              <h2 className="font-semibold">John Doe</h2>
                              <p className="text-sm text-gray-500">john.doe@example.com</p>
                            </div>
                          </div>
                          <SheetClose asChild>
                            <Button variant="ghost" size="icon">
                              <X className="h-5 w-5" />
                            </Button>
                          </SheetClose>
                        </div>

                        <div className="space-y-1 mb-6">
                          {authNavLinks.map((link, i) => (
                            <SheetClose key={i} asChild>
                              <Link
                                to={link.href}
                                className={`flex items-center px-4 py-3 text-base rounded-md hover:bg-gray-100 ${
                                  location.pathname === link.href
                                    ? "bg-gray-100 text-teal-600 font-medium"
                                    : "text-gray-700"
                                }`}
                              >
                                {link.icon && <span className="mr-3">{link.icon}</span>}
                                {link.name}
                              </Link>
                            </SheetClose>
                          ))}
                        </div>

                        <div className="border-t pt-4 mt-auto">
                          <SheetClose asChild>
                            <Link
                              to="/settings"
                              className="flex items-center px-4 py-3 text-base rounded-md hover:bg-gray-100 text-gray-700"
                            >
                              <Settings className="mr-3 h-5 w-5" />
                              Settings
                            </Link>
                          </SheetClose>
                          <SheetClose asChild>
                            <Link
                              to="/"
                              className="flex items-center px-4 py-3 text-base rounded-md hover:bg-gray-100 text-red-500"
                              onClick={() => setIsLoggedIn(false)}
                            >
                              <LogOut className="mr-3 h-5 w-5" />
                              Log out
                            </Link>
                          </SheetClose>
                        </div>
                      </div>
                    </SheetContent>
                  </Sheet>
                </div>
              </>
            ) : (
              <>
                {/* Public authentication buttons */}
                <div className="hidden md:block">
                  <Link to="/signin">
                    <Button variant="ghost">Sign in</Button>
                  </Link>
                </div>
                <Link to="/signup">
                  <Button className="bg-teal-600 hover:bg-teal-700 text-white">Get Started for Free</Button>
                </Link>

                {/* Mobile menu button - when logged out */}
                <div className="md:hidden">
                  <Sheet>
                    <SheetTrigger asChild>
                      <Button variant="ghost" size="icon">
                        <Menu className="h-6 w-6" />
                      </Button>
                    </SheetTrigger>
                    <SheetContent side="right" className="w-[300px] sm:w-[350px]">
                      <div className="flex flex-col h-full">
                        <div className="flex justify-between items-center mb-6">
                          <div className="flex items-center">
                            <Heart className="h-6 w-6 text-teal-600 mr-2" />
                            <span className="text-xl font-bold">Nishnant</span>
                          </div>
                          <SheetClose asChild>
                            <Button variant="ghost" size="icon">
                              <X className="h-5 w-5" />
                            </Button>
                          </SheetClose>
                        </div>

                        <div className="space-y-1 mb-6">
                          {publicNavLinks.map((link, i) =>
                            link.dropdown ? (
                              <div key={i} className="py-2">
                                <p className="px-4 text-sm font-medium text-gray-500 mb-1">{link.name}</p>
                                {link.items.map((item, j) => (
                                  <SheetClose key={j} asChild>
                                    <Link
                                      to={item.href}
                                      className="flex flex-col px-4 py-3 text-base hover:bg-gray-100 text-gray-700"
                                    >
                                      <span className="font-medium">{item.name}</span>
                                      {item.description && (
                                        <span className="text-xs text-gray-500">{item.description}</span>
                                      )}
                                    </Link>
                                  </SheetClose>
                                ))}
                              </div>
                            ) : (
                              <SheetClose key={i} asChild>
                                <Link
                                  to={link.href}
                                  className={`flex items-center px-4 py-3 text-base hover:bg-gray-100 ${
                                    link.highlight ? "text-teal-600 font-medium" : "text-gray-700"
                                  }`}
                                >
                                  {link.name}
                                </Link>
                              </SheetClose>
                            ),
                          )}
                        </div>

                        <div className="border-t pt-4 mt-auto">
                          <SheetClose asChild>
                            <Link
                              to="/login"
                              className="flex items-center justify-center px-4 py-3 text-base font-medium rounded-md hover:bg-gray-100 text-gray-700 mb-3"
                            >
                              Sign in
                            </Link>
                          </SheetClose>
                          <SheetClose asChild>
                            <Link
                              to="/signup"
                              className="flex items-center justify-center px-4 py-3 text-base font-medium rounded-md bg-teal-600 hover:bg-teal-700 text-white"
                            >
                              Get Started for Free
                            </Link>
                          </SheetClose>
                        </div>
                      </div>
                    </SheetContent>
                  </Sheet>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  )
}
