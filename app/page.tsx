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
import EnquiryForm from "@/components/enquiryform"

import RoyalDivider from "../components/royaldivider"

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


  const images = [
    "/26928.jpg.jpeg",
    "/26913.jpg.jpeg",
    "/26918.jpg.jpeg",
    "/26923.jpg.jpeg",
  ];

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
      image: f4,
    },
  ]

  return (
    <main className="overflow-hidden">
      {/* Hero Section */}
      <FloatingButtons />
      <section className="relative h-screen">
        <div className="absolute inset-0 bg-[#c6b04917] z-10"></div>
        <div className="absolute inset-0 z-0 animate-zoom">
          <Image src={main} alt="Luxury Banquet Hall" fill priority className="object-cover" />
        </div>
        <motion.div
          className="relative z-20 flex flex-col items-center justify-center h-full text-center text-white px-4 top-[10%]"
          initial={false}
          animate={isLoaded ? "visible" : "hidden"}
          variants={fadeIn}
        >
          <motion.h1
            className="font-cormorant text-4xl md:text-6xl lg:text-7xl font-medium tracking-tight mb-4"
            variants={slideUp}
          >
            CELEBRATE WITH <br></br> ELEGENCE
          </motion.h1>
          <motion.p className="font-cormorant text-xl md:text-2xl max-w-3xl mb-8 font-light" variants={slideUp}>
            Experience the perfect blend of luxury and sophistication for your special occasions
          </motion.p>
          <motion.div variants={slideUp}>
            <Button
              size="lg"
              className="bg-[#ce1211] hover:bg-[#ce1211] text-white rounded-none px-8 py-6 text-lg font-montserrat"
              onClick={() => window.location.href = "tel:8806081348"}
            >
              BOOK A VENUE
            </Button>
          </motion.div>
        </motion.div>


      </section>

      {/* Booking Section */}
      {/* <section className="py-12 bg-[#F5F5F5]">
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
</section> */}

      {/* <EnquiryForm /> */}

      {/* Venues Section */}
      <section id="services" className="py-20 bg-[#faebd7]">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={false}
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <h2 className="font-cormorant text-3xl md:text-3xl font-bold ">OUR EXQUISITE VENUES</h2>

            <p className="font-cormorant text-xl text-gray-600 max-w-3xl mx-auto">
              Discover our collection of meticulously designed spaces for your special occasions
            </p>
            <RoyalDivider />
          </motion.div>

          {/* Display First 3 Venues */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            initial={false}
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
              initial={false}
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
                className="inline-flex items-center font-montserrat text-[#ce1211] hover:text-[#ce1211] transition-colors uppercase tracking-wider text-sm"
              >
                Explore More Venues <ChevronRight className="ml-1 h-4 w-4" />
              </button>
            ) : (
              <button
                onClick={() => setShowAllVenues(false)}
                className="inline-flex items-center font-montserrat text-[#ce1211] hover:text-[#ce1211] transition-colors uppercase tracking-wider text-sm"
              >
                Show Less <ChevronRight className="ml-1 h-4 w-4" />
              </button>
            )}
          </div>
        </div>
      </section>
      <section id="about" className="bg-[#f6f3ee] ">
        <div className="container mx-auto px-4">
          <div className="bg-white  overflow-hidden  border border-[#e8e3d9]">

            {/* HERO */}
            <div className="relative h-[450px]">
              <Image src="/entry1.jpeg" alt="Kamal" fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

              <motion.div
                className="absolute bottom-12 left-12 max-w-2xl"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h1 className="font-cormorant text-5xl md:text-6xl text-white font-dark leading-tight">
                  Kamal <span className="text-[#deb309]">Celebrations</span>
                </h1>
                <div className="w-24 h-[2px] bg-[#deb309] my-6" />
                <p className="text-white/90 text-lg">
                  A premium destination for luxurious weddings, grand events & unforgettable memories.
                </p>
              </motion.div>
            </div>

            {/* ABOUT */}
            <div className="grid lg:grid-cols-2 py-[7px]">
              <motion.div
                className="p-14"
                initial={{ opacity: 0, x: -60 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true }}
              >
                <span className="text-[#C1A35F] uppercase tracking-widest text-xs font-semibold">
                  About Us
                </span>

                <h2 className="font-cormorant text-4xl md:text-5xl font-light text-gray-800 my-6">
                  Our <span className="text-[#C1A35F]">Legacy</span>
                </h2>

                <p className="text-gray-600 text-lg leading-relaxed mb-6">
                  Established in 2024, Kamal Celebrations is Nagpur’s premier banquet destination, designed to host elegant weddings, receptions, corporate gatherings, and social events.
                </p>

                <p className="text-gray-600 text-lg leading-relaxed mb-8">
                  With 4 luxurious halls accommodating 100 to 1000 guests, we deliver a seamless blend of sophistication, comfort, and world-class service.
                </p>

                <div className="grid grid-cols-2 gap-4">
                  {[
                    "4 Premium Halls",
                    "100–1000 Capacity",
                    "Luxury Interiors",
                    "Prime Location",
                  ].map((item, i) => (
                    <div key={i} className="bg-[#f6f3ee] p-4 rounded-xl flex items-center gap-3">
                      <div className="w-2 h-2 bg-[#C1A35F] rounded-full" />
                      <p className="text-sm text-gray-700">{item}</p>
                    </div>
                  ))}
                </div>

                <Button className="mt-8 bg-[#C1A35F] hover:bg-[#b39355] text-white px-8 py-5 rounded-xl">
                  Explore Venue
                </Button>
              </motion.div>

              <div className="grid grid-cols-2 gap-2 h-[520px]">
                <div className="relative col-span-2">
                  <Image src="/entrance.jpeg" alt="" fill className="object-cover" />
                </div>
                <div className="relative">
                  <Image src="/entrance2.jpeg" alt="" fill className="object-cover" />
                </div>
                <div className="relative">
                  <Image src="/entrabnce1.jpeg" alt="" fill className="object-cover" />
                </div>
              </div>
            </div>

            {/* FACILITIES */}
            <div id="facility"  className="bg-[#ede0ab] p-16 border-t border-[#e8e3d9]">
              <div className="text-center mb-14">
                <h2 className="font-cormorant text-4xl font-bold">
                  Facilities & Amenities
                </h2>
                {/* <div className="w-20 h-[2px] bg-[#C1A35F] mx-auto mt-4" /> */}
                <RoyalDivider />
              </div>

              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="relative h-[420px] rounded-2xl overflow-hidden shadow-lg">
                  <Image src="/g11.jpeg" alt="" fill className="object-cover" />
                </div>

                <div className="space-y-6">
                  {[
                    "Premium sound & lighting",
                    "Elegant decor setup",
                    "24/7 power backup",
                    "Luxury bridal suites",
                    "Valet parking",
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-4 bg-[#9d8e60] p-4 rounded-xl shadow-sm">
                      <span className="text-[#ffeebc]">✓</span>
                      <p className="text-[#fffcf3]">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* LOCATION */}
          <div className="p-12"> <motion.h2 className="font-cormorant text-4xl text-gray-800 mb-12 text-center font-bold" initial={false} whileInView="visible" viewport={{ once: true }} variants={fadeIn} > How to <span className="text-[#dc2626]">Reach Us</span> </motion.h2> <motion.div className="grid md:grid-cols-3 gap-8" initial={false} whileInView="visible" viewport={{ once: true }} variants={staggerChildren} > {[ { icon: <FaMapMarkerAlt className="text-3xl" />, title: "Location", details: "Besa-Pipla, Nagpur", extra: "Near Pipla Square, Opposite City Mall" }, { icon: <FaPlane className="text-3xl" />, title: "Airport", details: "7 km from Nagpur International Airport", extra: "~15 minutes drive" }, { icon: <FaTrain className="text-3xl" />, title: "Railway Station", details: "11 km from Nagpur Station", extra: "~25 minutes drive" } ].map((item, index) => ( <motion.div key={index} className="bg-white p-8 rounded-lg shadow-sm border border-[#e8e3d9] text-center hover:shadow-md transition-all" variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} > <div className="text-[#dc2626] mb-4">{item.icon}</div> <h3 className="font-montserrat text-lg font-bold uppercase tracking-wider mb-3">{item.title}</h3> <p className="font-cormorant text-black-600 mb-2">{item.details}</p> <p className="font-cormorant text-sm text-[#dc2626]">{item.extra}</p> </motion.div> ))} </motion.div> </div>

          </div>
        </div>
      </section>

      <section className="py-24 bg-[#F8F6F2]">
        <div className="container mx-auto px-4">
          <motion.div
            className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {/* Image Grid */}
            <div className="grid grid-cols-2 gap-4 h-[520px]">
              <div className="relative rounded-2xl overflow-hidden col-span-2">
                <Image
                  src={images[0]}
                  alt="Main Dining"
                  fill
                  className="object-cover hover:scale-105 transition duration-700"
                />
              </div>

              <div className="relative rounded-2xl overflow-hidden">
                <Image
                  src={images[1]}
                  alt="Dish 1"
                  fill
                  className="object-cover hover:scale-105 transition duration-700"
                />
              </div>

              <div className="relative rounded-2xl overflow-hidden">
                <Image
                  src={images[2]}
                  alt="Dish 2"
                  fill
                  className="object-cover hover:scale-105 transition duration-700"
                />
              </div>
            </div>

            {/* Content */}
            <div className="space-y-6">
              <span className="text-[#dc2626] uppercase tracking-widest text-xs font-semibold">
                Luxury Dining
              </span>

              <h2 className="font-cormorant text-4xl md:text-5xl font-dark leading-tight">
                Exceptional Culinary Experience
              </h2>

              <p className="text-gray-600 text-lg leading-relaxed max-w-xl">
                Our master chefs curate unforgettable dining journeys with
                handcrafted menus, blending global flavors with premium
                ingredients to delight every guest.
              </p>

              {/* Features */}
              <div className="grid grid-cols-2 gap-4 pt-4">
                {[
                  "Customized menus",
                  "Global cuisine",
                  "Diet-friendly options",
                  "Premium beverages",
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition"
                  >
                    <div className="w-3 h-3 bg-[#dc2626] rounded-full"></div>
                    <p className="text-sm font-medium">{item}</p>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <Button className="mt-6 bg-[#dc2626] hover:bg-[#B39355] text-white px-8 py-6 text-sm tracking-wider uppercase rounded-xl shadow-lg hover:shadow-xl transition">
                Explore Dining
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      {/* <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={false}
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <h2 className="font-cormorant text-3xl md:text-4xl mb-4 font-bold">What Our Guests Say</h2>
            <p className="font-cormorant text-xl text-gray-600 max-w-3xl mx-auto">
              Hear from those who have celebrated their special moments with us
            </p>
          </motion.div>

          <TestimonialSlider />
        </div>
      </section> */}

      {/* Gallery Section */}
      <section className="py-20 bg-[#F5F5F5]" id="gallery">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={false}
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
                initial={false}
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
            <div  className="text-center mt-8">
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
     <section id="contact" className="relative py-28 text-white overflow-hidden">

  {/* Background Image */}
  <div className="absolute inset-0">
    <img
      src="/g21.jpeg" // 👉 put your event/wedding image here
      alt="Event Background"
      className="w-full h-full object-cover"
    />
    
    {/* Dark Overlay */}
    <div className="absolute inset-0 bg-black/60"></div>

    {/* Red Gradient Accent */}
    <div className="absolute inset-0 bg-gradient-to-r from-[#0F1922]/80 via-transparent to-[#dc2626]/30"></div>
  </div>

  {/* Content */}
  <div className="relative container mx-auto px-6 text-center">
    <motion.div
      className="max-w-3xl mx-auto"
      initial={false}
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeIn}
    >

      {/* Label */}
      <p className="text-sm uppercase tracking-widest text-[#dc2626] mb-4 font-semibold">
        Start Your Journey
      </p>

      {/* Heading */}
      <h2 className="text-3xl md:text-5xl font-light leading-tight mb-6">
        Begin Planning Your <span className="font-medium">Perfect Event</span>
      </h2>

      {/* Subtext */}
      <p className="text-gray-300 text-lg mb-10 leading-relaxed">
        Our dedicated event specialists are ready to turn your vision into a beautifully
        crafted and unforgettable experience.
      </p>

      {/* CTA Button */}
      <button className="bg-[#dc2626] hover:bg-red-700 px-10 py-4 text-sm uppercase tracking-wider transition-all duration-300 shadow-lg hover:shadow-xl" onClick={() => window.location.href = "tel:8806081348"}>
        Contact Us
      </button>

    </motion.div>
  </div>
</section>
    </main>
  )
}

