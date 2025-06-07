import { Download, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function Component() {
  return (
    <div className="min-h-screen bg-white text-black lg:overflow-hidden">
      <header className="border-b border-black px-16">
        <div className="mx-auto px-6 py-6">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold tracking-tight">OpenPoker</div>
            <nav className="hidden md:flex items-center space-x-12">
              <Link href="/" className="text-black hover:opacity-60 transition-opacity font-medium">
                Play
              </Link>
              <Link href="#" className="text-black hover:opacity-60 transition-opacity font-medium">
                Data
              </Link>
              <Link href="#" className="text-black hover:opacity-60 transition-opacity font-medium">
                About
              </Link>
            </nav>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-20">
        <div className="grid grid-cols-12 h-[calc(100vh-120px)]">
          <div className="col-span-12 lg:col-span-7 flex flex-col justify-between py-12">
            
            <h1 className="text-7xl lg:text-8xl font-bold tracking-tight">
              Every
              <br />
              Hand
              <br />
              <span className="text-white bg-black px-4">Open.</span>
            </h1>


            <div className="w-24 h-px bg-black" />
            
            <p className="text-xl leading-relaxed font-light max-w-lg">
              Poker where every action is tracked, recorded, and freely downloadable by anyone.
            </p>

            <div className="flex items-center space-x-6">
              <button className="flex items-center border-2 border-black rounded-md bg-black text-white hover:bg-gray-900 px-8 py-2 text-md font-semibold">
                Play Now
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>

              <button
                className="flex items-center border-2 border-black rounded-md text-black hover:bg-black hover:text-white px-8 py-2 text-md font-semibold"
              >
                <Download className="w-5 h-5 mr-2" />
                Get Data
              </button>
            </div>
            
          </div>

          <div className="col-span-12 lg:col-span-5 flex items-center justify-end py-12">
            <div className="flex flex-col justify-between h-full">
              <div className="text-right space-y-2">
                <div className="text-6xl font-bold tracking-tight">1.2M</div>
                <div className="text-md font-light">Hands Recorded</div>
              </div>

              <div className="text-right space-y-2">
                <div className="text-6xl font-bold tracking-tight">8.9M</div>
                <div className="text-md font-light">Actions Tracked</div>
              </div>

              <div className="text-right space-y-2">
                <div className="text-6xl font-bold tracking-tight">24K</div>
                <div className="text-md font-light">Downloads</div>
              </div>
            </div>
          </div>
        </div>

      </main>
    </div>
  )
}
