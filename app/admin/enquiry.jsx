"use client"

import { useEffect, useState } from "react"
import { Client, Databases, Account } from "appwrite"
import { useRouter } from "next/navigation"

const client = new Client()
  .setEndpoint("https://cloud.appwrite.io/v1") // Replace with your Appwrite endpoint
  .setProject("67eba0ea003447baa895") // Replace with your Appwrite project ID

const databases = new Databases(client)
const account = new Account(client)

export default function EnquiryPage() {
  const [enquiries, setEnquiries] = useState([])
  const router = useRouter()

  useEffect(() => {
    const fetchEnquiries = async () => {
      try {
        // Check if the user is logged in
        await account.get()

        // Fetch enquiries from Appwrite
        const response = await databases.listDocuments(
          "[67eba14a001a48a2f1f9]", // Replace with your database ID
          "[67eba170001858b0ae40]" // Replace with your collection ID
        )
        setEnquiries(response.documents)
      } catch (error) {
        console.error("Error fetching enquiries:", error)
        router.push("/admin/login") // Redirect to login if not authenticated
      }
    }
    fetchEnquiries()
  }, [router])

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Enquiries</h1>
      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr>
            <th className="border border-gray-300 p-2">Name</th>
            <th className="border border-gray-300 p-2">Email</th>
            <th className="border border-gray-300 p-2">Event Type</th>
            <th className="border border-gray-300 p-2">Date</th>
            <th className="border border-gray-300 p-2">Guests</th>
          </tr>
        </thead>
        <tbody>
          {enquiries.map((enquiry) => (
            <tr key={enquiry.$id}>
              <td className="border border-gray-300 p-2">{enquiry.name}</td>
              <td className="border border-gray-300 p-2">{enquiry.email}</td>
              <td className="border border-gray-300 p-2">{enquiry.eventType}</td>
              <td className="border border-gray-300 p-2">{enquiry.date}</td>
              <td className="border border-gray-300 p-2">{enquiry.guests}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}