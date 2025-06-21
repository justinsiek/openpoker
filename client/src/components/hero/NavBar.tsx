import React from 'react'
import Link from "next/link"

const NavBar = () => {  
  return (
    <header className="border-b border-black px-18">
        <div className="mx-auto py-5">
          <div className="flex items-center justify-between">
            <div className="text-xl font-semibold tracking-tight">openpoker</div>
            <nav className="hidden md:flex items-center space-x-12">
              <Link href="/login" className="text-black hover:opacity-60 transition-opacity font-medium">
                Play
              </Link>
              <Link href="/data" className="text-black hover:opacity-60 transition-opacity font-medium">
                Data
              </Link>
              <Link href="/about" className="text-black hover:opacity-60 transition-opacity font-medium">
                About
              </Link>
            </nav>
          </div>
        </div>
      </header>
  )
}

export default NavBar