"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, Phone, Mail, ChevronDown, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet"

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    checkMobile()
    window.addEventListener("resize", checkMobile)

    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  const navigation = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    {
      name: "Services",
      href: "/services",
      hasDropdown: true,
      services: [
        { name: "Landscaping", href: "/services/landscaping" },
        { name: "Concreting", href: "/services/concreting" },
        { name: "Artificial Grass", href: "/services/artificial-grass" },
        { name: "Exposed Concrete", href: "/services/exposed-concrete" },
        { name: "Retaining Walls", href: "/services/retaining-walls" },
        { name: "Mulching", href: "/services/mulching" },
        { name: "Letterbox Installation", href: "/services/letterbox-installation" },
        { name: "Paving & Pathways", href: "/services/paving-pathways" },
        { name: "Garden Design", href: "/services/garden-design" },
        { name: "Irrigation Systems", href: "/services/irrigation-systems" },
        { name: "Outdoor Lighting", href: "/services/outdoor-lighting" },
        { name: "Decking", href: "/services/decking" },
        { name: "Pool Surrounds", href: "/services/pool-surrounds" },
        { name: "Driveway Construction", href: "/services/driveway-construction" },
        { name: "Garden Maintenance", href: "/services/garden-maintenance" },
        { name: "Pergolas & Gazebos", href: "/services/pergolas-gazebos" },
      ],
    },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Contact", href: "/contact" },
  ]

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      {/* Top contact bar */}
      <div className="bg-green-700 text-white py-2 px-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center text-sm">
          <div className="flex items-center gap-2 sm:gap-4">
            <a
              href="tel:0470432212"
              className="flex items-center gap-1 sm:gap-2 hover:text-green-200 transition-colors touch-manipulation"
              aria-label="Call us at 0470 432 212"
            >
              <Phone className="h-3 w-3 sm:h-4 sm:w-4" />
              <span className="text-xs sm:text-sm">0470432212</span>
            </a>
            <a
              href="mailto:proconcretelandscaping@gmail.com"
              className="hidden sm:flex items-center gap-2 hover:text-green-200 transition-colors touch-manipulation"
              aria-label="Email us"
            >
              <Mail className="h-4 w-4" />
              <span>proconcretelandscaping@gmail.com</span>
            </a>
          </div>
          <div className="hidden md:block">
            <span>Turning Dirt Into Dreams</span>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center space-x-2 touch-manipulation"
            aria-label="Pro Concrete & Landscaping Home"
          >
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full overflow-hidden">
              <img src="/logo.png" alt="Pro Concrete & Landscaping Logo" className="w-full h-full object-cover" />
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-green-800 text-sm sm:text-lg leading-tight">PRO CONCRETE</span>
              <span className="font-bold text-green-600 text-xs sm:text-sm leading-tight">& LANDSCAPING</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navigation.map((item) => (
              <div key={item.name}>
                {item.hasDropdown ? (
                  <div className="relative group">
                    <button
                      className="flex items-center text-gray-700 hover:text-green-600 font-medium transition-colors duration-300 touch-manipulation min-h-[44px]"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      {item.name}
                      <ChevronDown className="ml-1 h-4 w-4 transition-transform duration-300 group-hover:rotate-180" />
                    </button>
                    <div className="absolute top-full left-0 w-56 bg-white border border-gray-200 rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 z-50">
                      <div className="py-2" role="menu">
                        {item.services?.map((service) => (
                          <Link
                            key={service.name}
                            href={service.href}
                            className="block px-4 py-3 text-sm text-gray-700 hover:bg-green-50 hover:text-green-600 transition-colors duration-200 touch-manipulation"
                            role="menuitem"
                          >
                            {service.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : (
                  <Link
                    href={item.href}
                    className="text-gray-700 hover:text-green-600 font-medium transition-colors duration-300 touch-manipulation min-h-[44px] flex items-center"
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button className="bg-green-600 hover:bg-green-700 text-white touch-manipulation" asChild>
              <Link href="/quote">Get Free Quote</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="md:hidden touch-manipulation min-h-[44px] min-w-[44px]"
                aria-label="Open navigation menu"
              >
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[350px]">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-lg font-semibold">Navigation</h2>
                <SheetClose asChild>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="touch-manipulation min-h-[44px] min-w-[44px]"
                    aria-label="Close navigation menu"
                  >
                    <X className="h-6 w-6" />
                  </Button>
                </SheetClose>
              </div>

              <div className="flex flex-col space-y-4">
                {navigation.map((item) => (
                  <div key={item.name}>
                    <Link
                      href={item.href}
                      className="text-lg font-medium text-gray-700 hover:text-green-600 block py-2 touch-manipulation"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                    </Link>
                    {item.hasDropdown && (
                      <div className="ml-4 mt-2 space-y-2">
                        {item.services?.map((service) => (
                          <Link
                            key={service.name}
                            href={service.href}
                            className="text-sm text-gray-600 hover:text-green-600 block py-2 touch-manipulation"
                            onClick={() => setIsOpen(false)}
                          >
                            {service.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
                <Button className="bg-green-600 hover:bg-green-700 text-white mt-6 touch-manipulation" asChild>
                  <Link href="/quote" onClick={() => setIsOpen(false)}>
                    Get Free Quote
                  </Link>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
