import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold text-blue-400 mb-4">Tima Tiles</h3>
            <p className="text-gray-300 mb-4">
              Professional tile installation, repair, and home remodeling services. 
              Quality craftsmanship you can trust.
            </p>
            <p className="text-gray-300">
              <strong>Phone:</strong> (555) 123-4567<br />
              <strong>Email:</strong> info@timatiles.com
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="/" className="text-gray-300 hover:text-blue-400 transition-colors">Home</Link></li>
              <li><Link href="/about" className="text-gray-300 hover:text-blue-400 transition-colors">About</Link></li>
              <li><Link href="/services" className="text-gray-300 hover:text-blue-400 transition-colors">Services</Link></li>
              <li><Link href="/contact" className="text-gray-300 hover:text-blue-400 transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li><Link href="/services/tile-installation" className="text-gray-300 hover:text-blue-400 transition-colors">Tile Installation</Link></li>
              <li><Link href="/services/tile-repair" className="text-gray-300 hover:text-blue-400 transition-colors">Tile Repair</Link></li>
              <li><Link href="/services/home-remodel" className="text-gray-300 hover:text-blue-400 transition-colors">Home Remodel</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>&copy; 2024 Tima Tiles. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
} 