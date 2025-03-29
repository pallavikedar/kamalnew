"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import Image from "next/image"
import logo from "@/public/kamal-logo_1.png"

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

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

  const navLinks = [
    { name: "ABOUT US", href: "#" },
    { name: "CONTACT US", href: "#" },
    { name: "EVENTS", href: "#" },
    { name: "GALLARY", href: "#" },
    { name: "FACILITY", href: "#"},
   
  ]

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled ? "bg-white text-black shadow-md py-2" : "bg-transparent text-white py-4",
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="relative z-50">
            <div className="flex items-center">
              <div className="w-30 h-30 relative mr-2">
                {/* <div className="absolute inset-0 border-2 border-white rounded-full flex items-center justify-center"> */}
                 
                 <Image className=" bg-white" src={logo} alt="Kamal Celebrations" width={70} height={70} />
                {/* </div> */}
              </div>
              <h1
                className={cn(
                  "font-cormorant text-xl md:text-lg sm:text-lg font-light transition-colors duration-300",
                  isScrolled ? "text-[#0F1922]" : "text-white",
                )}
              >
               KAMAL CELEBRATIONS
              </h1>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <div key={link.name} className="relative group">
                <Link
                  href={link.href}
                  className={cn(
                    "font-montserrat text-sm tracking-wider hover:text-[#C1A35F] transition-colors flex items-center",
                    isScrolled ? "text-gray-800" : "text-white",
                  )}
                >
                  {link.name}
                  {link.hasDropdown && <ChevronDown className="ml-1 h-4 w-4" />}
                </Link>
              </div>
            ))}
          </nav>

          {/* Login/Join */}
          <div className="hidden lg:flex items-center">
           
            <Button className="bg-[#C1A35F] hover:bg-[#B39355] text-white rounded-none font-montserrat text-sm tracking-wider">
              BOOK A VENUE
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden relative z-50"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className={cn("h-6 w-6", isScrolled ? "text-gray-800" : "text-white")} />
            ) : (
              <Menu className={cn("h-6 w-6", isScrolled ? "text-gray-800" : "text-white")} />
            )}
          </button>

          {/* Mobile Menu */}
          <AnimatePresence>
            {isMobileMenuOpen && (
              <motion.div
                initial={{ opacity: 0, x: "100%" }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: "100%" }}
                transition={{ duration: 0.3 }}
                className="fixed inset-0 bg-[#0F1922] z-40 lg:hidden"
              >
                <div className="flex flex-col items-center justify-center h-full">
                  <nav className="flex flex-col items-center space-y-6">
                    {navLinks.map((link) => (
                      <Link
                        key={link.name}
                        href={link.href}
                        className="font-montserrat text-lg text-white hover:text-[#C1A35F] transition-colors"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {link.name}
                      </Link>
                    ))}
                  
                    <Button
                      className="mt-6 bg-[#C1A35F] hover:bg-[#B39355] text-white rounded-none"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      BOOK A VENUE
                    </Button>
                  </nav>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </header>
  )
}

