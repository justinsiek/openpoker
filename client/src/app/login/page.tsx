"use client"
import NavBar from "@/components/hero/NavBar"
import Link from "next/link"
import { useState } from "react"
import { useRouter } from "next/navigation"

export default function LoginPage() {
  const [formData, setFormData] = useState({
    username: "",
    password: ""
  })
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")
  const [success, setSuccess] = useState("")
  const router = useRouter()

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target
    setFormData(prev => ({
      ...prev,
      [id]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError("")
    setSuccess("")

    try {
      const response = await fetch('http://localhost:8080/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include', // Important for cookies
        body: JSON.stringify({
          username: formData.username,
          password: formData.password
        })
      })

      const data = await response.json()

      if (response.ok) {
        setSuccess("Login successful! Redirecting to home...")
        setTimeout(() => {
          router.push('/home')
        }, 2000)
      } else {
        setError(data.message || 'Login failed')
      }
    } catch (err) {
      setError('Network error. Please try again.')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="h-screen bg-white text-black flex flex-col">
      <NavBar />

      <div className="flex-1 flex">
        {/* Left Side - Information */}
        <div className="w-1/2 border-r border-black flex items-center justify-center p-12 relative">
          <div className="max-w-md space-y-8 relative z-10">
            <div className="space-y-4">
              <h2 className="text-6xl font-bold tracking-tight">
                Play. <br />
                Analyze. <br />
                Improve.
              </h2>
              <div className="w-16 h-1 bg-black"></div>
            </div>

            <div className="space-y-6">
              <div className="space-y-3">
                <h3 className="text-xl font-bold">Play Your Game</h3>
                <p className="font-light leading-relaxed">
                  Enjoy poker the way it's meant to be played, with clean interfaces and smooth gameplay across all
                  stakes and formats.
                </p>
              </div>
              <div className="space-y-3">
                <h3 className="text-xl font-bold">Access All Data</h3>
                <p className="font-light leading-relaxed">
                  Download complete hand histories, analyze player tendencies, and build your own tools with our
                  comprehensive API.
                </p>
              </div>
              <div className="space-y-3">
                <h3 className="text-xl font-bold">Player Privacy</h3>
                <p className="font-light leading-relaxed">
                  Your identity remains private with our UserID system, while still contributing to the largest open
                  poker database.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Login Form */}
        <div className="w-1/2 flex items-center justify-center p-12 bg-white relative">
          <div className="w-full max-w-sm space-y-8 relative z-10">
            <div className="space-y-3">
              <h1 className="text-5xl font-bold tracking-tight">Sign In</h1>
              <div className="w-12 h-1 bg-black"></div>
            </div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-4">
                <div className="space-y-2">
                  <label className="block text-base font-medium">
                    Username
                  </label>
                  <input
                    id="username"
                    type="text"
                    placeholder="pokerpro"
                    value={formData.username}
                    onChange={handleInputChange}
                    className="h-12 w-full border-2 border-black focus:outline-none focus:ring-0 focus:border-black bg-white px-3"
                    required
                    disabled={isLoading}
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="password" className="block text-base font-medium">
                    Password
                  </label>
                  <input
                    id="password"
                    type="password"
                    placeholder="••••••••"
                    value={formData.password}
                    onChange={handleInputChange}
                    className="h-12 w-full border-2 border-black focus:outline-none focus:ring-0 focus:border-black bg-white px-3"
                    required
                    disabled={isLoading}
                  />
                </div>
              </div>
              {error && (
                <div className="text-red-400 text-sm font-light">
                  {error}
                </div>
              )}
              {success && (
                <div className="text-green-400 text-sm font-light">
                  {success}
                </div>
              )}
              <div className="space-y-3">
                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full h-12 bg-black text-white hover:bg-gray-900 font-medium transition-colors duration-200 disabled:bg-gray-400 disabled:cursor-not-allowed"
                >
                  {isLoading ? "Signing In..." : "Sign In"}
                </button>

                <div className="text-center">
                  <Link href="#" className="text-sm font-light underline hover:opacity-60 transition-opacity">
                    Forgot password?
                  </Link>
                </div>
              </div>
            </form>

            <div className="text-center space-y-3">
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-black" />
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="bg-white px-3 text-black font-light">or</span>
                </div>
              </div>

              <p className="text-sm font-light">
                Don't have an account?{" "}
                <Link href="/register" className="font-medium underline hover:opacity-60 transition-opacity">
                  Sign up
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
