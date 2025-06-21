import React from 'react'
import { Download, ArrowRight } from "lucide-react"
import Link from "next/link"

const MainContent = () => {
  return (
    <main className="container mx-auto px-16">
        <div className="grid grid-cols-12 h-[calc(100vh-120px)]">
          <div className="col-span-12 lg:col-span-7 flex flex-col justify-between py-16">
            
            <h1 className="text-9xl font-bold tracking-tight">
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
              <Link href={'/login'} className="flex items-center border-2 border-black rounded-md bg-black text-white hover:bg-gray-900 px-8 py-2 text-md font-semibold">
                Play Now
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>

              <Link
                href={'/data'}
                className="flex items-center border-2 border-black rounded-md text-black hover:bg-black hover:text-white px-8 py-2 text-md font-semibold"
              >
                <Download className="w-5 h-5 mr-2" />
                Get Data
              </Link>
            </div>
          </div>

          <div className="col-span-12 lg:col-span-5 flex items-center justify-end py-20">
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
  )
}

export default MainContent