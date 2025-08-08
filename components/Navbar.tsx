'use client'

import Link from 'next/link'
import { useState } from 'react'
import Image from 'next/image'
import { brand } from '@/lib/brand'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="bg-white shadow-lg fixed w-full top-0 z-50 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <Image 
                src="/images/vanta-logo.png" 
                alt={brand.companyName}
                width={40}
                height={40}
                className="w-10 h-10"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-1">
              <Link href="/" className="text-gray-800 hover:text-sky-500 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                Home
              </Link>
              <Link href="/about" className="text-gray-800 hover:text-sky-500 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                About
              </Link>
              <Link href="/services" className="text-gray-800 hover:text-sky-500 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                Services
              </Link>
              <Link href="/contact" className="bg-sky-500 hover:bg-sky-600 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors ml-4">
                Contact
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="bg-white hover:bg-gray-50 inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-sky-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-sky-500 transition-colors"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link 
              href="/" 
              className="text-gray-800 hover:text-sky-500 hover:bg-gray-50 block px-3 py-2 rounded-md text-base font-medium transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link 
              href="/about" 
              className="text-gray-800 hover:text-sky-500 hover:bg-gray-50 block px-3 py-2 rounded-md text-base font-medium transition-colors"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
            <Link 
              href="/services" 
              className="text-gray-800 hover:text-sky-500 hover:bg-gray-50 block px-3 py-2 rounded-md text-base font-medium transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Services
            </Link>
            <Link 
              href="/contact" 
              className="bg-sky-500 hover:bg-sky-600 text-white block px-3 py-2 rounded-md text-base font-medium mx-3 mt-3 transition-colors text-center"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
} 