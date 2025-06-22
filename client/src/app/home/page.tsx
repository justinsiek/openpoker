'use client'
import React from 'react'
import { useRouter } from 'next/navigation'

const Home = () => {
  const router = useRouter()
  const handleLogout = () => {
    fetch('http://localhost:8080/api/logout', {
      method: 'POST',
      credentials: 'include',
    })
    .then(response => response.json())
    .then(data => {
      console.log(data)
      router.push('/login')
    })
    .catch(error => {
      console.error('Error:', error)
    })
  }
  return (
    <div className='flex justify-center items-center h-screen'>
      <button onClick={handleLogout} className='bg-black text-white px-4 py-2 rounded-md  cursor-pointer'>Logout</button>
    </div>
  )
}

export default Home