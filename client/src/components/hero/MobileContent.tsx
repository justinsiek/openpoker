import React from 'react'
import { Download, ArrowRight } from "lucide-react"
import Link from "next/link"

const MobileContent = () => {
  return (
    <main className="px-10">
        <div className="grid grid-cols-12">
          <div className="col-span-12 flex flex-col space-y-16 py-8">
            
            <h1 className="text-8xl font-bold tracking-tight">
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

            <div className="flex items-center space-x-2">
              <Link href={'/login'} className="flex items-center justify-center border-2 border-black rounded-md bg-black text-white hover:bg-gray-900 py-2 w-full text-md font-semibold">
                Play Now
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>

              <Link
                href={'/data'}
                className="flex items-center justify-center border-2 border-black rounded-md text-black hover:bg-black hover:text-white w-full py-2 text-md font-semibold"
              >
                <Download className="w-4 h-4 mr-2" />
                Get Data
              </Link>
            </div>
          </div>
        </div>
        <div className='w-full flex flex-col items-center justify-center space-y-8 my-8'>
          <div>
            <div className="text-8xl font-bold tracking-tight">1.2M</div>
            <div className="text-xl font-light">Hands Recorded</div>
          </div>

          <div>
            <div className="text-8xl font-bold tracking-tight">8.9M</div>
            <div className="text-xl font-light">Actions Tracked</div>
          </div>

          <div>
            <div className="text-8xl font-bold tracking-tight">24K</div>
            <div className="text-xl font-light">Downloads</div>
          </div>
        </div>
      </main>
  )
}

export default MobileContent