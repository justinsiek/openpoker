import Link from "next/link"
import NavBar from "@/components/NavBar"

export default function SignupPage() {
  return (
    <div className="h-screen bg-white text-black flex flex-col">
      <NavBar />
      <div className="flex-1 flex">
        {/* Left Side - Information */}
        <div className="w-1/2 border-r border-black flex items-center justify-center p-12 relative">

          <div className="max-w-md space-y-8 relative z-10">
            <div className="space-y-4">
              <h2 className="text-5xl font-bold tracking-tight">
                Data-Driven <br />
                Poker
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
                <h3 className="text-xl font-bold">Join the Community</h3>
                <p className="font-light leading-relaxed">
                  Connect with data scientists, poker enthusiasts, and developers using OpenPoker data to advance poker
                  strategy.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Signup Form */}
        <div className="w-1/2 flex items-center justify-center p-12 bg-white relative">

          <div className="w-full max-w-sm space-y-6 relative z-10">
            <div className="space-y-3">
              <h1 className="text-4xl font-bold tracking-tight">Join Us</h1>
              <div className="w-12 h-1 bg-black"></div>
            </div>

            <form className="space-y-6">
              <div className="space-y-4">
                <div className="space-y-2">
                  <label htmlFor="email" className="block text-base font-medium">
                    Username
                  </label>
                  <input
                    id="username"
                    type="text"
                    placeholder="pokerpro"
                    className="h-12 w-full border-2 border-black focus:outline-none focus:ring-0 focus:border-black bg-white px-3"
                    required
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
                    className="h-12 w-full border-2 border-black focus:outline-none focus:ring-0 focus:border-black bg-white px-3"
                    required
                  />
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex items-start space-x-2">
                  <div className="flex items-center h-5">
                    <input
                      id="terms"
                      type="checkbox"
                      className="w-4 h-4 border-2 border-black focus:ring-0 focus:outline-none checked:bg-black"
                      required
                    />
                  </div>
                  <label htmlFor="terms" className="text-xs font-light leading-relaxed">
                    I agree to the{" "}
                    <Link href="#" className="underline hover:opacity-60 transition-opacity">
                      Terms
                    </Link>{" "}
                    and{" "}
                    <Link href="#" className="underline hover:opacity-60 transition-opacity">
                      Privacy Policy
                    </Link>
                  </label>
                </div>

                <button
                  type="submit"
                  className="w-full h-12 bg-black text-white hover:bg-gray-900 font-medium transition-colors duration-200"
                >
                  Create Account
                </button>
              </div>
            </form>

            <div className="text-center space-y-3">
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-black"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="bg-white px-3 text-black font-light">or</span>
                </div>
              </div>

              <p className="text-sm font-light">
                Already have an account?{" "}
                <Link href="/login" className="font-medium underline hover:opacity-60 transition-opacity">
                  Sign in
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
