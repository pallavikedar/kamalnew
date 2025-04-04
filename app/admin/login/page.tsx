"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"

export default function AdminLogin() {
  // Static credentials
  const STATIC_EMAIL = "kamalcelebration@gmail.com"
  const STATIC_PASSWORD = "kamal@pass"

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [errorMessage, setErrorMessage] = useState("") // State for error messages
  const router = useRouter()

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    setErrorMessage("") // Clear previous error messages

    // Check static credentials
    if (email === STATIC_EMAIL && password === STATIC_PASSWORD) {
      // Store login state in localStorage
      localStorage.setItem("isLoggedIn", "true")

      // Redirect to the admin dashboard
      router.push("/admin")
    } else {
      // Show error message for invalid credentials
      setErrorMessage("Invalid email or password. Please try again.")
    }
  }

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <form onSubmit={handleLogin} className="bg-white p-6 rounded shadow-md w-96">
        <h1 className="text-2xl font-bold mb-4">Admin Login</h1>

        {/* Display Error Message */}
        {errorMessage && <p className="text-red-500 mb-4">{errorMessage}</p>}

        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
        >
          Login
        </button>
      </form>
    </div>
  )
}