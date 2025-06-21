import Link from "next/link"
import { Phone, Mail, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center">
                <div className="text-white font-bold">PC</div>
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-green-400 leading-tight">PRO CONCRETE</span>
                <span className="font-bold text-green-300 text-sm leading-tight">& LANDSCAPING</span>
              </div>
            </div>
            <p className="text-gray-400 text-sm">
              Turning dirt into dreams with professional concrete and landscaping services.
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-bold text-lg mb-4">Services</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link href="/services" className="hover:text-green-400">
                  Landscaping
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-green-400">
                  Concreting
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-green-400">
                  Artificial Grass
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-green-400">
                  Exposed Concrete
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-green-400">
                  Retaining Walls
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-green-400">
                  Mulching
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link href="/" className="hover:text-green-400">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-green-400">
                  About
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-green-400">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="hover:text-green-400">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-green-400">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-bold text-lg mb-4">Contact</h3>
            <div className="space-y-3 text-gray-400">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span>0470 432 212</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span className="text-sm">proconcretelandscaping@gmail.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4" />
                <span>Perth & Surrounding Areas</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Pro Concrete & Landscaping. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
