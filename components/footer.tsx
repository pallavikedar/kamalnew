import Link from "next/link"
import { Instagram, Mail, Phone, MapPin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-[#0F1922] text-white pt-20 pb-10">
      <div className="container mx-auto px-6">

        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

          {/* Brand */}
          <div>
            <h2 className="text-2xl font-semibold tracking-wide mb-4">
              KAMAL CELEBRATIONS
            </h2>
            <div className="w-12 h-[2px] bg-[#dc2626] mb-4"></div>

            <p className="text-gray-400 text-sm leading-relaxed">
              Creating unforgettable celebrations with elegance, luxury, and timeless memories for over two decades.
            </p>

            <div className="flex gap-4 mt-6">
              <a
                href="https://www.instagram.com/kamalcelebrations/"
                target="_blank"
                className="p-2 border border-gray-600 rounded-full hover:bg-[#dc2626] hover:border-[#dc2626] transition duration-300"
              >
                <Instagram size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm uppercase tracking-widest mb-6 text-gray-300">
              Quick Links
            </h3>

            <ul className="space-y-3 text-gray-400 text-sm">
              {["About Us", "Events", "Gallery", "Facility", "Contact"].map((item, i) => (
                <li key={i}>
                  <Link
                    href="#"
                    className="relative hover:text-[#dc2626] transition duration-300 
                    after:block after:w-0 after:h-[1px] after:bg-[#dc2626] 
                    after:transition-all after:duration-300 hover:after:w-full"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm uppercase tracking-widest mb-6 text-gray-300">
              Contact
            </h3>

            <ul className="space-y-5 text-gray-400 text-sm">

              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-[#dc2626] mt-1" />
                <span>
                  Plot no 4, Rajeshwar Nagar,  
                  Besa-Pipla Road, Nagpur - 440034
                </span>
              </li>

              <li className="flex items-center gap-3">
                <Phone size={18} className="text-[#dc2626]" />
                <span>8806081348 / 9820296914</span>
              </li>

              <li className="flex items-center gap-3">
                <Mail size={18} className="text-[#dc2626]" />
                <span>kamalcelebrationsgroup@gmail.com</span>
              </li>

            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-sm uppercase tracking-widest mb-6 text-gray-300">
              Stay Updated
            </h3>

            <p className="text-gray-400 text-sm mb-4">
              Subscribe to get updates on events and offers.
            </p>

            <div className="flex items-center bg-[#1A2733] rounded-md overflow-hidden">
              <input
                type="email"
                placeholder="Your email"
                className="bg-transparent px-4 py-3 text-sm w-full outline-none text-white"
              />
              <button className="bg-[#dc2626] px-4 py-3 text-white text-sm font-medium hover:bg-red-700 transition">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-[#2A3540] pt-6 flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm">
          <p>
            © {new Date().getFullYear()} Kamal Celebrations. All rights reserved.
          </p>

          <div className="flex gap-6 mt-4 md:mt-0">
            <Link href="#" className="hover:text-[#dc2626] transition">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-[#dc2626] transition">
              Terms & Conditions
            </Link>
          </div>
        </div>

      </div>
    </footer>
  )
}