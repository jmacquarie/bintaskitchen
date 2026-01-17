import Link from 'next/link'
import { Mail, Phone, MapPin, Instagram } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-saddle-brown text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* About */}
          <div>
            <h3 className="font-serif text-xl font-bold mb-4">Binta&apos;s Kitchen</h3>
            <p className="text-earth-100 mb-4">
              Bringing the authentic flavors of Burkina Faso to Australia. 
              Experience West African hospitality and cuisine at your next event.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-serif text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-earth-100 hover:text-gold transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/menu" className="text-earth-100 hover:text-gold transition-colors">
                  Menu
                </Link>
              </li>
              <li>
                <Link href="/catering" className="text-earth-100 hover:text-gold transition-colors">
                  Catering
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-earth-100 hover:text-gold transition-colors">
                  About
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-serif text-xl font-bold mb-4">Contact Us</h3>
            <ul className="space-y-3 text-earth-100">
              <li className="flex items-center gap-2">
                <Phone className="w-5 h-5 text-gold" />
                <span>+61 400 123 456</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-5 h-5 text-gold" />
                <span>bintawestafricakitcken@gmail.com</span>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="w-5 h-5 text-gold" />
                <span>Melbourne, Australia</span>
              </li>
              <li className="flex items-center gap-2">
                <Instagram className="w-5 h-5 text-gold" />
                <a
                  href="https://instagram.com/bintawestafricankitchen"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gold transition-colors"
                >
                  @bintawestafricankitchen
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-earth-600 mt-8 pt-8 text-center text-earth-100">
          <p>&copy; {new Date().getFullYear()} Binta&apos;s Kitchen. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
