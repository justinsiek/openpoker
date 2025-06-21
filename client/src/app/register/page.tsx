import Link from "next/link"

export default function SignupPage() {
  return (
    <div className="h-screen bg-white text-black flex flex-col">
      <header className="border-b border-black">
        <div className="container mx-auto px-6 py-6">
          <div className="flex items-center justify-between">
            <Link href="/" className="text-2xl font-bold tracking-tight hover:opacity-60 transition-opacity">
              OpenPoker
            </Link>
            <nav className="hidden md:flex items-center space-x-12">
              <Link href="#" className="text-black hover:opacity-60 transition-opacity font-medium">
                Play
              </Link>
              <Link href="#" className="text-black hover:opacity-60 transition-opacity font-medium">
                Data
              </Link>
              <Link href="#" className="text-black hover:opacity-60 transition-opacity font-medium">
                API
              </Link>
            </nav>
          </div>
        </div>
      </header>

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
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.03),transparent_70%)]"></div>

          <div className="w-full max-w-sm space-y-6 relative z-10">
            <div className="space-y-3">
              <h1 className="text-4xl font-bold tracking-tight">Join Us</h1>
              <div className="w-12 h-1 bg-black"></div>
            </div>

            <form className="space-y-5">
              <div className="space-y-3">
                <div className="space-y-1">
                  <label htmlFor="username" className="block text-sm font-medium">
                    Username
                  </label>
                  <input
                    id="username"
                    type="text"
                    placeholder="pokerpro"
                    className="h-10 w-full text-sm border-2 border-black focus:outline-none focus:ring-0 focus:border-black bg-white px-3"
                    required
                  />
                  <p className="text-xs font-light mt-1">Only you will see this. Others will see your UserID.</p>
                </div>

                <div className="space-y-1">
                  <label htmlFor="email" className="block text-sm font-medium">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    placeholder="your@email.com"
                    className="h-10 w-full text-sm border-2 border-black focus:outline-none focus:ring-0 focus:border-black bg-white px-3"
                    required
                  />
                </div>

                <div className="space-y-1">
                  <label htmlFor="password" className="block text-sm font-medium">
                    Password
                  </label>
                  <input
                    id="password"
                    type="password"
                    placeholder="••••••••"
                    className="h-10 w-full text-sm border-2 border-black focus:outline-none focus:ring-0 focus:border-black bg-white px-3"
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
                  className="w-full h-10 bg-black text-white hover:bg-gray-900 text-sm font-medium transition-colors duration-200"
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

              <p className="text-xs font-light">
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
