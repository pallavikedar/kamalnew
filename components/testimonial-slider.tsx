"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"

const testimonials = [
  {
    id: 1,
    name: "Priya & Rahul Sharma",
    event: "Wedding Reception",
    quote:
      "Our wedding day was absolutely perfect. The Grand Ballroom exceeded our expectations, and the staff's attention to detail made our special day truly unforgettable.",
  },
  {
    id: 2,
    name: "Vikram Mehta",
    event: "Corporate Gala",
    quote:
      "Royal Banquets provided the perfect setting for our annual corporate event. The sophisticated ambiance and impeccable service impressed all our guests and clients.",
  },
  {
    id: 3,
    name: "Ananya Patel",
    event: "25th Anniversary",
    quote:
      "We celebrated our 25th anniversary at the Heritage Hall, and it was magical. The venue's elegance and the culinary experience were simply outstanding.",
  },
]

export default function TestimonialSlider() {
  const [current, setCurrent] = useState(0)
  const [autoplay, setAutoplay] = useState(true)

  useEffect(() => {
    let interval: NodeJS.Timeout

    if (autoplay) {
      interval = setInterval(() => {
        setCurrent((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1))
      }, 5000)
    }

    return () => clearInterval(interval)
  }, [autoplay])

  const next = () => {
    setAutoplay(false)
    setCurrent((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1))
  }

  const prev = () => {
    setAutoplay(false)
    setCurrent((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1))
  }

  return (
    <div className="relative max-w-4xl mx-auto">
      <div className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-1/2 md:-translate-x-full z-10">
        <button
          onClick={prev}
          className="bg-white shadow-md rounded-full p-2 text-[#C1A35F] hover:text-[#B39355] transition-colors"
          aria-label="Previous testimonial"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>
      </div>

      <div className="overflow-hidden py-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="text-center px-6"
          >
            <Quote className="mx-auto h-12 w-12 text-[#C1A35F] mb-6" />
            <p className="font-cormorant text-xl md:text-2xl italic mb-8">"{testimonials[current].quote}"</p>
            <div className="font-montserrat">
              <p className="font-semibold text-lg">{testimonials[current].name}</p>
              <p className="text-[#C1A35F]">{testimonials[current].event}</p>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/2 md:translate-x-full z-10">
        <button
          onClick={next}
          className="bg-white shadow-md rounded-full p-2 text-[#C1A35F] hover:text-[#B39355] transition-colors"
          aria-label="Next testimonial"
        >
          <ChevronRight className="h-6 w-6" />
        </button>
      </div>

      <div className="flex justify-center space-x-2 mt-6">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setAutoplay(false)
              setCurrent(index)
            }}
            className={`w-2 h-2 rounded-full transition-colors ${index === current ? "bg-[#C1A35F]" : "bg-gray-300"}`}
            aria-label={`Go to testimonial ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}

