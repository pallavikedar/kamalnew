"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { format } from "date-fns"
import { CalendarIcon, ChevronRight, Search } from "lucide-react"
import Link from "next/link"
import VenueCard from "@/components/venue-card"
import TestimonialSlider from "@/components/testimonial-slider"
import main from '../public/building1.jpeg'
import fg from '../public/fg.jpeg'
import f1 from '../public/f1.jpeg'
import f2 from '../public/f2.jpeg'
import f3 from '../public/f3.jpeg'
import f4 from '../public/f4.jpeg'
import stage from '../public/stage.jpeg'
import { FaMapMarkerAlt, FaHotel, FaTrain, FaPlane } from "react-icons/fa";
import main2 from '../public/entry1.jpeg'
import entrance from '../public/entrance2.jpeg'
import { ChevronDown, ChevronUp } from "lucide-react";
import g1 from '../public/gallary1.jpeg'
import g2 from '../public/gallary2.jpeg'
import g3 from '../public/g3.jpeg'
import g4 from '../public/g4.jpeg'
import g5 from '../public/g5.jpeg'
import g6 from '../public/g6.jpeg'
import g7 from '../public/g7.jpeg'
import g8 from '../public/g8.jpeg'
import g9 from '../public/g9.jpeg'
import g10 from '../public/g10.jpeg'
import g11 from '../public/g11.jpeg'
import g12 from '../public/g12.jpeg'
import g13 from '../public/g13.jpeg'
import g14 from '../public/g14.jpeg'
import FloatingButtons from "@/components/social"



export default function Home() {
  const [showAllVenues, setShowAllVenues] = useState(false);
  const [date, setDate] = useState<Date | undefined>(undefined)
  const [isLoaded, setIsLoaded] = useState(false)
  const [visibleImages, setVisibleImages] = useState(8); // Show first 8 images initially
const initialImageCount = 8;

const galleryImages = [
  { id: 1, src: g1 },
  { id: 2, src: g2 },
  { id: 3, src: g3 },
  { id: 4, src: g4 },
  { id: 5, src: g5 },
  { id: 6, src: g6 },
  { id: 7, src: g7 },
  { id: 8, src: g8 },
  { id: 9, src: g9 },
  { id: 10, src: g10 },
  { id: 11, src: g11 },
  { id: 12, src: g12 },
  { id: 13, src: g13 },
  
  
];

const galleryItem = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1 } },
  }

  const slideUp = {
    hidden: { y: 100, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.8, delay: 0.3 } },
  }

  const staggerChildren = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const venues = [
    {
      id: 1,
      name: "Tulip",
      description: "Our signature venue with crystal chandeliers and marble floors",
      capacity: "Up to 500 guests",
      image: fg,
    },
    {
      id: 2,
      name: "Marigold",
      description: "Our signature venue with crystal chandeliers and marble floors",
      capacity: "Up to 300 guests",
      image: f1,
    },
    {
      id: 3,
      name: "Rose",
      description: "A classic venue with ornate architecture and timeless elegance",
      capacity: "Up to 250 guests",
      image: f2,
    },
    {
      id: 4,
      name: "Orchid",
      description: "A classic venue with ornate architecture and timeless elegance",
      capacity: "Up to 250 guests",
      image: f3,
    },
    {
      id: 5,
      name: "Lily",
      description: "A classic venue with Roof top ",
      capacity: "Up to 250 guests",
      image:f4,
    },
  ]

  return (
    <main className="overflow-hidden">
      {/* Hero Section */}
      <FloatingButtons/>
      <section className="relative h-screen">
        <div className="absolute inset-0 bg-black/30 z-10"></div>
        <div className="absolute inset-0 z-0 animate-zoom">
    <Image src={main} alt="Luxury Banquet Hall" fill priority className="object-cover" />
  </div>
        <motion.div
          className="relative z-20 flex flex-col items-center justify-center h-full text-center text-white px-4"
          initial="hidden"
          animate={isLoaded ? "visible" : "hidden"}
          variants={fadeIn}
        >
          <motion.h1
            className="font-cormorant text-4xl md:text-6xl lg:text-7xl font-medium tracking-tight mb-4"
            variants={slideUp}
          >
            Celebrate with Elegance
          </motion.h1>
          <motion.p className="font-cormorant text-xl md:text-2xl max-w-3xl mb-8 font-light" variants={slideUp}>
            Experience the perfect blend of luxury and sophistication for your special occasions
          </motion.p>
          <motion.div variants={slideUp}>
            <Button
              size="lg"
              className="bg-[#C1A35F] hover:bg-[#B39355] text-white rounded-none px-8 py-6 text-lg font-montserrat"
            >
              BOOK A VENUE
            </Button>
          </motion.div>
        </motion.div>

      
      </section>

     {/* Booking Section */}
<section className="py-12 bg-[#F5F5F5]">
  <div className="container mx-auto px-4">
    <div className="w-6xl mx-auto bg-white shadow-lg p-6 md:p-10 -mt-20 relative z-30 
      shadow-[0_0_10px_-5px_rgba(255, 166, 0, 0.223),0_0_10px_-5px_rgba(255,0,0,0.3),0_0_10px_-5px_rgba(128,0,128,0.3),0_0_10px_-5px_rgba(0,0,255,0.3)]
      hover:shadow-[0_0_10px_-5px_rgba(255,165,0,0.4),0_0_10px_-5px_rgba(255,0,0,0.4),0_0_10px_-5px_rgba(128,0,128,0.4),0_0_10px_-5px_rgba(0,0,255,0.4)]
      transition-all duration-500">
      
      <h2 className="font-cormorant text-2xl md:text-3xl text-center mb-8 font-light">Find Your Perfect Venue</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="space-y-2">
          <label className="font-montserrat text-sm font-medium uppercase tracking-wider">Name</label>
          <input
            type="text"
            className="w-full p-3 border border-gray-300 font-montserrat"
            placeholder="Your Name"/>
        </div>
        <div className="space-y-2">
          <label className="font-montserrat text-sm font-medium uppercase tracking-wider">Mobile Number</label>
          <input
            type="number"
            className="w-full p-3 border border-gray-300 font-montserrat"
            placeholder="Mobile Number"/>
        </div>
        <div className="space-y-2">
          <label className="font-montserrat text-sm font-medium uppercase tracking-wider">Email</label>
          <input
            type="email"
            className="w-full p-3 border border-gray-300 font-montserrat"
            placeholder="Email"/>
        </div>
        <div className="space-y-2">
          <label className="font-montserrat text-sm font-medium uppercase tracking-wider">Event Type</label>
          <select className="w-full p-3 border border-gray-300 font-montserrat">
            <option>Wedding</option>
            <option>Corporate Event</option>
            <option>Birthday</option>
            <option>Anniversary</option>
          </select>
        </div>
        <div className="space-y-2">
          <label className="font-montserrat text-sm font-medium uppercase tracking-wider">Date</label>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                className="w-full justify-start text-left font-normal border border-gray-300 rounded-none h-[46px]"
              >
                <CalendarIcon className="mr-2 h-4 w-4" />
                {date ? format(date, "PPP") : <span>Select date</span>}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0">
              <Calendar mode="single" selected={date} onSelect={setDate} initialFocus />
            </PopoverContent>
          </Popover>
        </div>
        <div className="space-y-2">
          <label className="font-montserrat text-sm font-medium uppercase tracking-wider">Guests</label>
          <select className="w-full p-3 border border-gray-300 font-montserrat">
            <option>50-100</option>
            <option>100-200</option>
            <option>200-300</option>
            <option>300-500</option>
            <option>500+</option>
          </select>
        </div>
      </div>
      <div className="mt-8 text-center">
        <Button className="bg-[#C1A35F] hover:bg-[#B39355] text-white rounded-none px-8 py-6 font-montserrat">
          SEND ENQUIRY
        </Button>
      </div>
    </div>
  </div>
</section>



    {/* Venues Section */}
<section className="py-20">
  <div className="container mx-auto px-4">
    <motion.div
      className="text-center mb-16"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeIn}
    >
      <h2 className="font-cormorant text-3xl md:text-4xl mb-4 font-light">Our Exquisite Venues</h2>
      <p className="font-cormorant text-xl text-gray-600 max-w-3xl mx-auto">
        Discover our collection of meticulously designed spaces for your special occasions
      </p>
    </motion.div>

    {/* Display First 3 Venues */}
    <motion.div
      className="grid grid-cols-1 md:grid-cols-3 gap-8"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={staggerChildren}
    >
      {venues.slice(0, 3).map((venue) => (
        <VenueCard key={venue.id} venue={venue} />
      ))}
    </motion.div>

    {/* Display Remaining Venues if showAllVenues is true */}
    {showAllVenues && (
      <motion.div
        className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerChildren}
      >
        {venues.slice(3).map((venue) => (
          <VenueCard key={venue.id} venue={venue} />
        ))}
      </motion.div>
    )}

    {/* Explore More / Show Less Button */}
    <div className="text-center mt-12">
      {!showAllVenues ? (
        <button
          onClick={() => setShowAllVenues(true)}
          className="inline-flex items-center font-montserrat text-[#C1A35F] hover:text-[#B39355] transition-colors uppercase tracking-wider text-sm"
        >
          Explore More Venues <ChevronRight className="ml-1 h-4 w-4" />
        </button>
      ) : (
        <button
          onClick={() => setShowAllVenues(false)}
          className="inline-flex items-center font-montserrat text-[#C1A35F] hover:text-[#B39355] transition-colors uppercase tracking-wider text-sm"
        >
          Show Less <ChevronRight className="ml-1 h-4 w-4" />
        </button>
      )}
    </div>
  </div>
</section>
<div className="relative  bg-[#f8f5f0]">
  {/* Gold decorative elements */}
  {/* <div className="absolute top-0 left-0 w-full h-1 bg-[#C1A35F]"></div>
  <div className="absolute bottom-0 right-0 w-32 h-32 border-r-2 border-b-2 border-[#C1A35F]"></div> */}

  <div className="w-full mx-auto bg-white  overflow-hidden">
    {/* Hero Section */}
    <div className="relative h-96  overflow-hidden">
      <Image
        src={main2}
        alt="Kamal Celebrations"
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-black/30"></div>
      <motion.div 
        className="absolute bottom-0 left-0 p-10"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h1 className="font-cormorant text-4xl md:text-5xl text-white mb-4 font-light">
          Introducing <span className="text-[#C1A35F]">Kamal Celebrations</span>
        </h1>
        <div className="w-20 h-px bg-[#C1A35F] mb-4"></div>
        <p className="font-cormorant text-xl text-white/90 max-w-2xl">
          Nagpur's premier destination for sophisticated celebrations
        </p>
      </motion.div>
    </div>

    {/* About Section */}
    <div className="grid md:grid-cols-2 gap-0 mt-12">
      <motion.div 
        className="p-12 flex flex-col justify-center"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="font-cormorant text-3xl text-gray-800 mb-6 font-light">
          Our <span className="text-[#C1A35F]">Legacy</span>
        </h2>
        <div className="w-16 h-px bg-[#C1A35F] mb-6"></div>
        <p className="font-cormorant text-lg text-gray-600 leading-relaxed mb-6">
          Established in 2024, Kamal Celebrations is a premier banquet hall
          located in Besa-Pipla Road, Nagpur. We host events such as
          weddings, pre & post-wedding functions, birthday parties,
          conferences, and more.
        </p>
        <p className="font-cormorant text-lg text-gray-600 leading-relaxed">
          Our four halls can accommodate anywhere from 100 to 1000 guests, 
          ensuring an elegant setting for your special occasions.
        </p>
      </motion.div>
      <div className="relative h-96 md:h-auto">
        <Image
          src={entrance}
          alt="Luxury Interior"
          fill
          className="object-cover"
        />
      </div>
    </div>

    {/* Facilities Section */}
    <div className="bg-[#faf9f7] p-12 border-t border-[#e8e3d9]">
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="font-cormorant text-3xl text-gray-800 mb-4 font-light">
          <span className="text-[#C1A35F]">Facilities</span> & Capacity
        </h2>
        <div className="flex justify-center">
          <div className="w-16 h-px bg-[#C1A35F]"></div>
        </div>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="relative h-96">
          <Image
            src={stage}
            alt="Grand Hall"
            fill
            className="object-cover rounded-lg shadow-lg"
          />
        </div>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="font-cormorant text-lg text-gray-600 leading-relaxed mb-6">
            Our indoor banquet halls are perfect for both intimate and grand
            celebrations. With luxurious executive rooms, modern amenities,
            and a dedicated team, we ensure a seamless experience.
          </p>
          <ul className="space-y-3">
            {[
              "Top-notch sound/music services",
              "Elegant furnishings & decor",
              "24/7 power backup",
              "Luxury bridal suites",
              "Valet parking services"
            ].map((item, index) => (
              <li key={index} className="flex items-center font-cormorant text-gray-600">
                <span className="text-[#C1A35F] mr-2">✓</span> {item}
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </div>

    {/* Location Section */}
    <div className="p-12">
      <motion.h2 
        className="font-cormorant text-3xl text-gray-800 mb-12 text-center font-light"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
      >
        How to <span className="text-[#C1A35F]">Reach Us</span>
      </motion.h2>
      
      <motion.div 
        className="grid md:grid-cols-3 gap-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerChildren}
      >
        {[
          { 
            icon: <FaMapMarkerAlt className="text-3xl" />, 
            title: "Location", 
            details: "Besa-Pipla, Nagpur",
            extra: "Near Pipla Square, Opposite City Mall"
          },
          { 
            icon: <FaPlane className="text-3xl" />, 
            title: "Airport", 
            details: "7 km from Nagpur International Airport",
            extra: "~15 minutes drive"
          },
          { 
            icon: <FaTrain className="text-3xl" />, 
            title: "Railway Station", 
            details: "11 km from Nagpur Station",
            extra: "~25 minutes drive"
          }
        ].map((item, index) => (
          <motion.div
            key={index}
            className="bg-white p-8 rounded-lg shadow-sm border border-[#e8e3d9] text-center hover:shadow-md transition-all"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 }
            }}
          >
            <div className="text-[#C1A35F] mb-4">{item.icon}</div>
            <h3 className="font-montserrat text-lg font-medium uppercase tracking-wider mb-3">{item.title}</h3>
            <p className="font-cormorant text-gray-600 mb-2">{item.details}</p>
            <p className="font-cormorant text-sm text-[#C1A35F]">{item.extra}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  </div>
</div>

      {/* Features Section */}
      <section className="py-20 bg-[#F5F5F5]">
        <div className="container mx-auto px-4">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <div className="relative h-[500px]">
              <Image src={stage } alt="Luxury Dining Experience" fill className="object-cover" />
            </div>
            <div className="space-y-6">
              <h2 className="font-cormorant text-3xl md:text-4xl font-light">Exceptional Culinary Experience</h2>
              <p className="font-cormorant text-xl text-gray-600">
                Our master chefs create bespoke menus tailored to your preferences, using the finest ingredients to
                craft memorable dining experiences for your guests.
              </p>
              <ul className="space-y-4 font-montserrat text-sm">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-[#C1A35F] mr-3"></div>
                  Customized menu planning
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-[#C1A35F] mr-3"></div>
                  International cuisine options
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-[#C1A35F] mr-3"></div>
                  Dietary accommodations
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-[#C1A35F] mr-3"></div>
                  Premium beverage packages
                </li>
              </ul>
              <Button className="bg-[#C1A35F] hover:bg-[#B39355] text-white rounded-none mt-4 font-montserrat uppercase tracking-wider text-sm">
                EXPLORE DINING
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
      

      {/* Testimonials */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <h2 className="font-cormorant text-3xl md:text-4xl mb-4 font-light">What Our Guests Say</h2>
            <p className="font-cormorant text-xl text-gray-600 max-w-3xl mx-auto">
              Hear from those who have celebrated their special moments with us
            </p>
          </motion.div>

          <TestimonialSlider />
        </div>
      </section>

      {/* Gallery Section */}
<section className="py-20 bg-[#F5F5F5]">
  <div className="container mx-auto px-4">
    <motion.div
      className="text-center mb-16"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeIn}
    >
      <h2 className="font-cormorant text-3xl md:text-4xl mb-4 font-light">Explore Our Gallery</h2>
      <p className="font-cormorant text-xl text-gray-600 max-w-3xl mx-auto">
        Immerse yourself in the beauty of our venues and events
      </p>
    </motion.div>

    {/* Gallery Images */}
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {galleryImages.slice(0, visibleImages).map((image) => (
        <motion.div
          key={image.id}
          className="relative h-64 md:h-80 overflow-hidden group"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={galleryItem}
        >
          <Image
            src={image.src}
            alt={`Gallery image ${image.id}`}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"></div>
        </motion.div>
      ))}
    </div>

    {/* Show More/Less Button */}
    {galleryImages.length > initialImageCount && (
      <div className="text-center mt-8">
        <button
          onClick={() => setVisibleImages(prev => prev === initialImageCount ? galleryImages.length : initialImageCount)}
          className="font-montserrat text-[#C1A35F] hover:text-[#B39355] transition-colors uppercase tracking-wider text-sm flex items-center justify-center mx-auto"
        >
          {visibleImages === initialImageCount ? (
            <>
              Show More <ChevronDown className="ml-2 h-4 w-4" />
            </>
          ) : (
            <>
              Show Less <ChevronUp className="ml-2 h-4 w-4" />
            </>
          )}
        </button>
      </div>
    )}
  </div>
</section>

      {/* CTA Section */}
      <section className="py-20 bg-[#0F1922] text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            className="max-w-3xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <h2 className="font-cormorant text-3xl md:text-4xl mb-6 font-light">Begin Planning Your Perfect Event</h2>
            <p className="font-cormorant text-xl mb-8">
              Our dedicated event specialists are ready to help you create unforgettable memories
            </p>
            <Button
              size="lg"
              className="bg-[#C1A35F] hover:bg-[#B39355] text-white rounded-none px-8 py-6 text-lg font-montserrat uppercase tracking-wider"
            >
              CONTACT US
            </Button>
          </motion.div>
        </div>
      </section>
    </main>
  )
}

