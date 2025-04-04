"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { Client, Databases } from "appwrite"

// Initialize Appwrite Client
const client = new Client()
  .setEndpoint("https://cloud.appwrite.io/v1") // Replace with your Appwrite endpoint
  .setProject("67eba0ea003447baa895") // Replace with your Appwrite project ID

const databases = new Databases(client)

export default function AdminPanel() {
  const [enquiries, setEnquiries] = useState([]) // State to store enquiries
  const [loading, setLoading] = useState(true) // State to manage loading
  const router = useRouter()

  // Check if the user is logged in
  useEffect(() => {
    const isLoggedIn = localStorage.getItem("isLoggedIn")
    if (!isLoggedIn) {
      router.push("/admin/login") // Redirect to login page if not logged in
    }
  }, [router])

  // Remove localStorage item when the page is closed
  useEffect(() => {
    const handleBeforeUnload = () => {
      localStorage.removeItem("isLoggedIn")
    }

    // Add event listener for beforeunload
    window.addEventListener("beforeunload", handleBeforeUnload)

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload)
    }
  }, [])

  // Fetch enquiries from Appwrite database
  useEffect(() => {
    const fetchEnquiries = async () => {
      try {
        const response = await databases.listDocuments(
          "67eba14a001a48a2f1f9", // Replace with your database ID
          "67eba170001858b0ae40" // Replace with your collection ID
        )
        setEnquiries(response.documents) // Set the fetched documents
      } catch (error) {
        console.error("Error fetching enquiries:", error)
      } finally {
        setLoading(false) // Stop loading
      }
    }

    fetchEnquiries()
  }, [])

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <p className="text-lg font-medium">Loading enquiries...</p>
      </div>
    )
  }

  return (
    <div className="p-6">
      {/* Header Section */}
      <header className="mb-8">
        <h1 className="text-3xl font-bold text-center mb-4 mt-10">Admin Panel - Enquiries</h1>
        <p className="text-center text-gray-600">
          Below is the list of all enquiries submitted through the form.
        </p>
      </header>

      {/* Enquiries Table */}
      {enquiries.length === 0 ? (
        <div className="flex items-center justify-center h-64">
          <p className="text-lg font-medium text-gray-500">No enquiries found.</p>
        </div>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full border-collapse border border-gray-300">
            <thead className="bg-gray-100">
              <tr>
                <th className="border border-gray-300 p-3 text-left">Name</th>
                <th className="border border-gray-300 p-3 text-left">Mobile</th>
                <th className="border border-gray-300 p-3 text-left">Email</th>
                <th className="border border-gray-300 p-3 text-left">Event Type</th>
                <th className="border border-gray-300 p-3 text-left">Date</th>
                <th className="border border-gray-300 p-3 text-left">Guests</th>
              </tr>
            </thead>
            <tbody>
              {enquiries.map((enquiry, index) => (
                <tr
                  key={enquiry.$id}
                  className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}
                >
                  <td className="border border-gray-300 p-3">{enquiry.name}</td>
                  <td className="border border-gray-300 p-3">{enquiry.mobile}</td>
                  <td className="border border-gray-300 p-3">{enquiry.email}</td>
                  <td className="border border-gray-300 p-3">{enquiry.eventType}</td>
                  <td className="border border-gray-300 p-3">{enquiry.date}</td>
                  <td className="border border-gray-300 p-3">{enquiry.guests}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  )
}