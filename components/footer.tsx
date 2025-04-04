import Link from "next/link"
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function Footer() {
  return (
    <footer className="bg-[#0F1922] text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-8 mb-12">
          {/* Column 1 - About */}
          <div>
            <h3 className="font-cormorant text-xl mb-6 font-light">KAMAL CELEBRATIONS</h3>
            <p className="font-cormorant text-gray-400 mb-6">
              Creating unforgettable celebrations with elegance and sophistication for over two decades.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-[#C1A35F] transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-[#C1A35F] transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-[#C1A35F] transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Column 2 - Quick Links */}
          <div>
            <h3 className="font-montserrat text-sm uppercase tracking-wider mb-6">Quick Links</h3>
            <ul className="space-y-3 font-cormorant text-gray-400">
              <li>
                <Link href="#" className="hover:text-[#C1A35F] transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-[#C1A35F] transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-[#C1A35F] transition-colors">
                  Events
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-[#C1A35F] transition-colors">
                  Gallery
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-[#C1A35F] transition-colors">
                  Facility
                </Link>
              </li>
              
            </ul>
          </div>

          {/* Column 3 - Contact */}
          <div>
            <h3 className="font-montserrat text-sm uppercase tracking-wider mb-6">Contact Us</h3>
            <ul className="space-y-4 font-cormorant text-gray-400">
              <li className="flex items-start">
                <MapPin size={18} className="mr-3 mt-1 text-[#C1A35F]" />
                <span>Plot no 4, Rajeshwar Nagar, Besa-Pipla road, Nagpur, 440034</span>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="mr-3 text-[#C1A35F]" />
                <span>9209841329/9860945554</span>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="mr-3 text-[#C1A35F]" />
                <span>kamalcelebrationsgroup@gmail.com</span>
              </li>
            </ul>
          </div>

        
        </div>

        <div className="border-t border-[#2A3540] pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="font-montserrat text-sm text-gray-500 mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} Kamal Celebrations. All rights reserved.
            </p>
            
          </div>
        </div>
      </div>
    </footer>
  )
}

