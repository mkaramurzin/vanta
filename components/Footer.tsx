import Link from 'next/link'
import Image from 'next/image'
import { brand } from '@/lib/brand'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center mb-4">
              <Image 
                src="/images/vanta-logo.png" 
                alt={brand.companyName}
                width={48}
                height={48}
                className="w-12 h-12 mr-3"
              />
              <h3 className="text-2xl font-bold text-sky-400">{brand.companyName}</h3>
            </div>
            <p className="text-gray-300 mb-4">
              Professional tile installation, repair, and flooring services. 
              {brand.tagline}.
            </p>
            <p className="text-gray-300">
              <strong>Phone:</strong> {brand.phone}<br />
              <strong>Email:</strong> {brand.email}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="/" className="text-gray-300 hover:text-sky-400 transition-colors">Home</Link></li>
              <li><Link href="/about" className="text-gray-300 hover:text-sky-400 transition-colors">About</Link></li>
              <li><Link href="/services" className="text-gray-300 hover:text-sky-400 transition-colors">Services</Link></li>
              <li><Link href="/contact" className="text-gray-300 hover:text-sky-400 transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li><Link href="/services/tile-installation" className="text-gray-300 hover:text-sky-400 transition-colors">Tile Installation</Link></li>
              <li><Link href="/services/tile-repair" className="text-gray-300 hover:text-sky-400 transition-colors">Tile Repair</Link></li>
              <li><Link href="/services/home-remodel" className="text-gray-300 hover:text-sky-400 transition-colors">Home Remodel</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>&copy; 2024 {brand.companyName}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
} 