"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

interface VenueCardProps {
  venue: {
    id: number
    name: string
    description: string
    capacity: string
    image: string
  }
}

export default function VenueCard({ venue }: VenueCardProps) {
  return (
    <motion.div
      className="group bg-white overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
      }}
      whileHover={{ y: -5 }}
    >
      <div className="relative h-64 overflow-hidden">
        <Image
          src={venue.image || "/placeholder.svg"}
          alt={venue.name}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />
      </div>
      <div className="p-6 border-t border-gray-100">
        <h3 className="font-cormorant text-xl mb-2 font-light">{venue.name}</h3>
        <p className="font-cormorant text-gray-600 mb-3">{venue.description}</p>
        <p className="font-montserrat text-sm text-[#C1A35F] mb-4">{venue.capacity}</p>
        <Button
          variant="outline"
          className="rounded-none border-[#C1A35F] text-[#C1A35F] hover:bg-[#C1A35F] hover:text-white transition-colors group font-montserrat text-sm tracking-wider"
        >
          EXPLORE VENUE
          <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
        </Button>
      </div>
    </motion.div>
  )
}

