"use client"

import { useState } from "react"
import { Client, Databases } from "appwrite"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { format } from "date-fns"
import { CalendarIcon } from "lucide-react"

// Initialize Appwrite Client
const client = new Client()
  .setEndpoint("https://cloud.appwrite.io/v1") // Replace with your Appwrite endpoint
  .setProject("67eba0ea003447baa895") // Replace with your Appwrite project ID

const databases = new Databases(client)

export default function EnquiryForm() {
  const [name, setName] = useState("")
  const [mobile, setMobile] = useState("")
  const [email, setEmail] = useState("")
  const [eventType, setEventType] = useState("Wedding")
  const [date, setDate] = useState<Date | undefined>(undefined)
  const [guests, setGuests] = useState("50-100")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [errors, setErrors] = useState({
    name: "",
    mobile: "",
    email: "",
    eventType: "",
    date: "",
    guests: "",
  })

  const validateForm = () => {
    const validationErrors: any = {}

    if (!name.trim()) validationErrors.name = "Name is required."
    if (!mobile.trim()) validationErrors.mobile = "Mobile number is required."
    if (!email.trim()) validationErrors.email = "Email is required."
    if (!eventType.trim()) validationErrors.eventType = "Event type is required."
    if (!date) validationErrors.date = "Date is required."
    if (!guests.trim()) validationErrors.guests = "Guests field is required."

    setErrors(validationErrors)
    return Object.keys(validationErrors).length === 0
  }

  const handleSubmit = async () => {
    if (!validateForm()) return
  
    setIsSubmitting(true)
  
    try {
      const response = await databases.createDocument(
        "67eba14a001a48a2f1f9", // Replace with your actual Database ID
        "67eba170001858b0ae40", // Replace with your actual Collection ID
        "unique()", // Generates a unique ID
        {
          name,
          mobile,
          email,
          eventType,
          date: date ? format(date, "yyyy-MM-dd") : null, // Store as ISO Date
          guests,
        }
      )
  
      console.log("Enquiry submitted successfully:", response)
      alert("Enquiry sent successfully!")
  
      // Reset Form
      setName("")
      setMobile("")
      setEmail("")
      setEventType("Wedding")
      setDate(undefined)
      setGuests("50-100")
      setErrors({})
    } catch (error) {
      console.error("Error sending enquiry:", error)
      alert(`Failed to send enquiry: ${JSON.stringify(error)}`)
    } finally {
      setIsSubmitting(false)
    }
  }
  
    return (
    <section className="py-12 bg-[#F5F5F5]" >
      <div className="container mx-auto px-4" >
        <div
          className="w-6xl mx-auto bg-white shadow-lg p-6 md:p-10 -mt-20 relative z-30 
          shadow-[0_0_10px_-5px_rgba(255, 166, 0, 0.223),0_0_10px_-5px_rgba(255,0,0,0.3),0_0_10px_-5px_rgba(128,0,128,0.3),0_0_10px_-5px_rgba(0,0,255,0.3)]
          hover:shadow-[0_0_10px_-5px_rgba(255,165,0,0.4),0_0_10px_-5px_rgba(255,0,0,0.4),0_0_10px_-5px_rgba(128,0,128,0.4),0_0_10px_-5px_rgba(0,0,255,0.4)]
          transition-all duration-500"
          
        >
          <h2 className="font-cormorant text-2xl md:text-3xl text-center mb-8 font-light">
            Find Your Perfect Venue
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Name Field */}
            <div className="space-y-2">
              <label className="font-montserrat text-sm font-medium uppercase tracking-wider">
                Name
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full p-3 border border-gray-300 font-montserrat"
                placeholder="Your Name"
              />
              {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
            </div>

            {/* Mobile Field */}
            <div className="space-y-2">
              <label className="font-montserrat text-sm font-medium uppercase tracking-wider">
                Mobile Number
              </label>
              <input
                type="number"
                value={mobile}
                onChange={(e) => setMobile(e.target.value)}
                className="w-full p-3 border border-gray-300 font-montserrat"
                placeholder="Mobile Number"
              />
              {errors.mobile && <p className="text-red-500 text-sm">{errors.mobile}</p>}
            </div>

            {/* Email Field */}
            <div className="space-y-2">
              <label className="font-montserrat text-sm font-medium uppercase tracking-wider">
                Email
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-3 border border-gray-300 font-montserrat"
                placeholder="Email"
              />
              {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
            </div>

            {/* Event Type Field */}
            <div className="space-y-2">
              <label className="font-montserrat text-sm font-medium uppercase tracking-wider">
                Event Type
              </label>
              <select
                value={eventType}
                onChange={(e) => setEventType(e.target.value)}
                className="w-full p-3 border border-gray-300 font-montserrat"
              >
                <option>Wedding</option>
                <option>Corporate Event</option>
                <option>Birthday</option>
                <option>Anniversary</option>
              </select>
              {errors.eventType && <p className="text-red-500 text-sm">{errors.eventType}</p>}
            </div>

            {/* Date Field */}
            <div className="space-y-2">
              <label className="font-montserrat text-sm font-medium uppercase tracking-wider">
                Date
              </label>
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
                  <Calendar
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
              {errors.date && <p className="text-red-500 text-sm">{errors.date}</p>}
            </div>

            {/* Guests Field */}
            <div className="space-y-2">
              <label className="font-montserrat text-sm font-medium uppercase tracking-wider">
                Guests
              </label>
              <select
                value={guests}
                onChange={(e) => setGuests(e.target.value)}
                className="w-full p-3 border border-gray-300 font-montserrat"
              >
                <option>50-100</option>
                <option>100-200</option>
                <option>200-300</option>
                <option>300-500</option>
                <option>500+</option>
              </select>
              {errors.guests && <p className="text-red-500 text-sm">{errors.guests}</p>}
            </div>
          </div>

          <div className="mt-8 text-center">
            <Button
              onClick={handleSubmit}
              disabled={isSubmitting}
              className="bg-[#C1A35F] hover:bg-[#B39355] text-white rounded-none px-8 py-6 font-montserrat"
            >
              {isSubmitting ? "Sending..." : "SEND ENQUIRY"}
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}