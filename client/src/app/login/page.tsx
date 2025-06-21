import NavBar from "@/components/NavBar"
import Link from "next/link"

export default function LoginPage() {
  return (
    <div className="h-screen bg-white text-black flex flex-col">
      <NavBar />

      <div className="flex-1 flex">
        {/* Left Side - Information */}
        <div className="w-1/2 border-r border-black flex items-center justify-center p-12 relative">
        
          <div className="max-w-md space-y-8 relative z-10">
            <div className="space-y-4">
              <h2 className="text-5xl font-bold tracking-tight">
                Play. <br />
                Analyze. <br />
                Improve.
              </h2>
              <div className="w-16 h-1 bg-black"></div>
            </div>

            <div className="space-y-6">
              <div className="space-y-3">
                <h3 className="text-xl font-bold">Real Poker</h3>
                <p className="font-light leading-relaxed">
                  Compete against players of all skill levels in cash games and tournaments with various stakes and
                  formats.
                </p>
              </div>

              <div className="space-y-3">
                <h3 className="text-xl font-bold">Complete Data</h3>
                <p className="font-light leading-relaxed">
                  Access comprehensive hand histories and gameplay statistics to analyze patterns and improve your
                  strategy.
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
              <h1 className="text-4xl font-bold tracking-tight">Sign In</h1>
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

              <div className="space-y-4">
                <button
                  type="submit"
                  className="w-full h-12 bg-black text-white hover:bg-gray-900 font-medium transition-colors duration-200"
                >
                  Sign In
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
                  <div className="w-full border-t border-black"></div>
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
