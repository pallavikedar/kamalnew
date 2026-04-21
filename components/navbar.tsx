// "use client"

// import { useState, useEffect } from "react"
// import Link from "next/link"
// import { motion, AnimatePresence } from "framer-motion"
// import { Menu, X, ChevronDown } from "lucide-react"
// import { Button } from "@/components/ui/button"
// import { cn } from "@/lib/utils"
// import Image from "next/image"
// import logo from "@/public/kamal-logo_1.png"
// import { useRouter } from "next/navigation"
// export default function Navbar() {
//   const router = useRouter();

//   const [isScrolled, setIsScrolled] = useState(false)
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

//   useEffect(() => {
//     const handleScroll = () => {
//       if (window.scrollY > 10) {
//         setIsScrolled(true)
//       } else {
//         setIsScrolled(false)
//       }
//     }

//     window.addEventListener("scroll", handleScroll)
//     return () => window.removeEventListener("scroll", handleScroll)
//   }, [])

//   const navLinks = [
//     { name: "ABOUT US", href: "#about" },
//     { name: "CONTACT US", href: "#contact" },
//     { name: "EVENTS", href: "#event" },
//     { name: "GALLARY", href: "#gallary" },
//     { name: "FACILITY", href: "#facility"},
   
//   ]
//   const handleClick = () => {
//     router.push('#contact');
//   }

//   return (
//     <header
//       className={cn(
//         "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
//         isScrolled ? "bg-white text-black shadow-md py-2" : "bg-transparent text-white py-4",
//       )}
//     >
//       <div className="container mx-auto px-4">
//         <div className="flex items-center justify-between">
//           {/* Logo */}
//           <Link href="/" className="relative z-50">
//             <div className="flex items-center">
//               <div className="w-30 h-30 relative mr-2">
//                 {/* <div className="absolute inset-0 border-2 border-white rounded-full flex items-center justify-center"> */}
                 
//                  <Image className=" bg-white" src={logo} alt="Kamal Celebrations" width={70} height={70} />
//                 {/* </div> */}
//               </div>
//               <h1
//                 className={cn(
//                   "font-cormorant text-xl md:text-lg sm:text-lg font-light transition-colors duration-300",
//                   isScrolled ? "text-[#0F1922]" : "text-white",
//                 )}
//               >
//                KAMAL CELEBRATIONS
//               </h1>
//             </div>
//           </Link>

//           {/* Desktop Navigation */}
//           <nav className="hidden lg:flex items-center space-x-8">
//             {navLinks.map((link) => (
//               <div key={link.name} className="relative group">
//                 <Link
//                   href={link.href}
//                   className={cn(
//                     "font-montserrat text-sm tracking-wider hover:text-[#C1A35F] transition-colors flex items-center",
//                     isScrolled ? "text-gray-800" : "text-white",
//                   )}
//                 >
//                   {link.name}
//                   {link.hasDropdown && <ChevronDown className="ml-1 h-4 w-4" />}
//                 </Link>
//               </div>
//             ))}
//           </nav>
          


//           {/* Login/Join */}
//           <div className="hidden lg:flex items-center">
           
//             <Button onClick={handleClick} className="bg-[#C1A35F] hover:bg-[#B39355] text-white rounded-none font-montserrat text-sm tracking-wider">
//               BOOK A VENUE
//             </Button>
//           </div>

//           {/* Mobile Menu Button */}
//           <button
//             className="lg:hidden relative z-50"
//             onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
//             aria-label="Toggle menu"
//           >
//             {isMobileMenuOpen ? (
//               <X className={cn("h-6 w-6", isScrolled ? "text-gray-800" : "text-white")} />
//             ) : (
//               <Menu className={cn("h-6 w-6", isScrolled ? "text-gray-800" : "text-white")} />
//             )}
//           </button>

//           {/* Mobile Menu */}
//           <AnimatePresence>
//             {isMobileMenuOpen && (
//               <motion.div
//                 initial={{ opacity: 0, x: "100%" }}
//                 animate={{ opacity: 1, x: 0 }}
//                 exit={{ opacity: 0, x: "100%" }}
//                 transition={{ duration: 0.3 }}
//                 className="fixed inset-0 bg-[#0F1922] z-40 lg:hidden"
//               >
//                 <div className="flex flex-col items-center justify-center h-full">
//                   <nav className="flex flex-col items-center space-y-6">
//                     {navLinks.map((link) => (
//                       <Link
//                         key={link.name}
//                         href={link.href}
//                         className="font-montserrat text-lg text-white hover:text-[#C1A35F] transition-colors"
//                         onClick={() => setIsMobileMenuOpen(false)}
//                       >
//                         {link.name}
//                       </Link>
//                     ))}
                  
//                     <Button
//                       className="mt-6 bg-[#C1A35F] hover:bg-[#B39355] text-white rounded-none"
//                       onClick={() => setIsMobileMenuOpen(false)}
//                     >
//                       BOOK A VENUE
//                     </Button>
//                   </nav>
//                 </div>
//               </motion.div>
//             )}
//           </AnimatePresence>
//         </div>
//       </div>
//     </header>
//   )
// }




"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X, Facebook, Instagram, Youtube } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import Image from "next/image"
import logo from "@/public/kamal-logo_1.png"
import { useRouter } from "next/navigation"

export default function Navbar() {
  const router = useRouter()
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
 const [stopAnim, setStopAnim] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setStopAnim(true) // stop animation on scroll
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Facilities", href: "#facility" },
    { name: "Gallery", href: "#gallery" },
    { name: "Contact Us", href: "#contact" },
  ]

  return (
    <div className="fixed top-0 left-0 right-0 z-50">

      {/* 🔴 Top Red Bar */}
      <div className="w-full bg-red-600 text-white text-xs md:text-sm py-2 px-4">
        <div className="container mx-auto flex items-center justify-around">

          {/* Left Side */}
          <div className="flex items-center gap-4">
            <span>📧 kamalcelebrationsgroup@gmail.com</span>
            <span className="hidden sm:inline">|</span>
            <span>📞 +91-8806081348, +91-9820296914</span>
          </div>

          {/* Right Side Icons */}
          <div className="flex items-center gap-2">
            
            <div className="bg-white text-red-600 p-1 rounded">
              
              <a href="https://www.instagram.com/kamalcelebrations/" className="text-gray-400 hover:text-[#C1A35F] transition-colors">
                <Instagram size={14} />
              </a>
            </div>
            
          </div>
        </div>
      </div>

      {/* 🔶 Main Navbar */}
      <header
        className={cn(
          "transition-all duration-300 relative ",
          isScrolled
            ? "bg-white shadow-md py-4"
            : "bg-white py-4"
        )}
      >
        <div className="container mx-auto px-[150px] flex items-center justify-around ">

          {/* Logo */}
         <Link href="/" className="flex items-center gap-2 absolute  left-[5%]">
      <div className="relative overflow-hidden">

        {/* 🔥 Continuous Sweep */}
        {/* {!stopAnim && (
          <span
            className="absolute top-0 left-[-100%] w-full h-full z-0"
            style={{
              background:
                "linear-gradient(120deg, transparent 0%, white 50%, transparent 100%)",
              animation: "sweepLoop 1.5s linear infinite",
            }}
          />
        )} */}

        {/* Logo */}
        <Image
          src={logo}
          alt="Logo"
          width={110}
          height={110}
          className="relative z-10"
        />

        {/* Inline Keyframes */}
        <style jsx>{`
          @keyframes sweepLoop {
            0% {
              transform: translateX(0%);
            }
            100% {
              transform: translateX(200%);
            }
          }
        `}</style>
      </div>
    </Link>
          {/* Desktop Menu */}
          <nav className="hidden lg:flex gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={cn(
                  "text-sm tracking-wider hover:text-[#C1A35F] transition",
                  isScrolled ? "text-black" : "text-black",
                )}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:block ">
            <Button
  onClick={() => window.location.href = "tel:8806081348"}
  className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-none"
>
  Book Now →
</Button>
          </div>

          {/* Mobile Toggle */}
          <button
            className="lg:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className={isScrolled ? "text-black" : "text-black"} />
            ) : (
              <Menu className={isScrolled ? "text-black" : "text-black"} />
            )}
          </button>
        </div>

        {/* 📱 Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-black text-white flex flex-col items-center py-10 gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}

            <Button
              onClick={() => {
                setIsMobileMenuOpen(false)
                router.push("#contact")
              }}
              className="bg-red-600 hover:bg-red-700"
            >
              Book Now
            </Button>
          </div>
        )}
      </header>
    </div>
  )
}