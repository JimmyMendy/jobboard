"use client"

import { useState } from 'react'
import Link from 'next/link'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className='bg-white shadow'>
        <nav className='container mx-auto px-4 py-4 flex justify-between items-center'>
          {/* Logo / Brand */}
          <h1 className='text-2xl font-bold text-gray-800'>JobBoard</h1>

          {/* Desktop links */}
          <div className='hidden md:flex space-x-6'>
            <Link
              href='/jobs'
              className='text-gray-600 hover:text-blue-600 transition'
            >
              Jobs
            </Link>
            <Link
              href='/about'
              className='text-gray-600 hover:text-blue-600 transition'
            >
              About
            </Link>
          </div>

          {/* Call-to-Action button */}
          <Link
            href='/post-job'
            className='hidden md:inline-block bg-blue-600 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-700 transition'
          >
            Post a Job
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className='md:hidden text-gray-800 focus:outline-none'
            aria-label='Toggle Navigation'
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-6 w-6'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
              strokeWidth={2}
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M4 6h16M4 12h16m-7 6h7'
              />
            </svg>
          </button>
        </nav>

        {/* Mobile Dropdown */}
        {isOpen && (
          <div className='md:hidden bg-white shadow-lg'>
            <Link
              href='/jobs'
              className='block px-4 py-2 text-gray-600 hover:bg-gray-100'
            >
              Jobs
            </Link>
            <Link
              href='/about'
              className='block px-4 py-2 text-gray-600 hover:bg-gray-100'
            >
              About
            </Link>
            <Link
              href='/post-job'
              className='block px-4 py-2 text-blue-600 font-semibold hover:bg-gray-100'
            >
              Pots a Job
            </Link>
          </div>
        )}
      </header>
  )
}