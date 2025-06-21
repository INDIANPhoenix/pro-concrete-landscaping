"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, Phone, Mail, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

export function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const navigation = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    {
      name: "Services",
      href: "/services",
      hasDropdown: true,
      services: [
        { name: "Landscaping Design", href: "/services/landscaping-design" },
        { name: "Concrete Driveways", href: "/services/concrete-driveways" },
        { name: "Artificial Grass", href: "/services/artificial-grass" },
        { name: "Exposed Concrete", href: "/services/exposed-concrete" },
        { name: "Retaining Walls", href: "/services/retaining-walls" },
        { name: "Garden Mulching", href: "/services/garden-mulching" },
        { name: "Letterbox Installation", href: "/services/letterbox-installation" },
        { name: "Pool Landscaping", href: "/services/pool-landscaping" },
        { name: "Concrete Patios", href: "/services/concrete-patios" },
        { name: "Decorative Concrete", href: "/services/decorative-concrete" },
        { name: "Garden Maintenance", href: "/services/garden-maintenance" },
        { name: "Concrete Foundations", href: "/services/concrete-foundations" },
        { name: "Turf Installation", href: "/services/turf-installation" },
        { name: "Irrigation Systems", href: "/services/irrigation-systems" },
        { name: "Concrete Repairs", href: "/services/concrete-repairs" },
        { name: "Outdoor Lighting", href: "/services/outdoor-lighting" },
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
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4" />
              <span>0470432212</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="h-4 w-4" />
              <span>proconcretelandscaping@gmail.com</span>
            </div>
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
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center">
              <div className="text-white font-bold text-lg">PC</div>
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-green-800 text-lg leading-tight">PRO CONCRETE</span>
              <span className="font-bold text-green-600 text-sm leading-tight">& LANDSCAPING</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navigation.map((item) => (
              <div key={item.name}>
                {item.hasDropdown ? (
                  <DropdownMenu>
                    <DropdownMenuTrigger className="flex items-center text-gray-700 hover:text-green-600 font-medium transition-colors">
                      {item.name}
                      <ChevronDown className="ml-1 h-4 w-4" />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="w-56">
                      {item.services?.map((service) => (
                        <DropdownMenuItem key={service.name} asChild>
                          <Link href={service.href} className="w-full">
                            {service.name}
                          </Link>
                        </DropdownMenuItem>
                      ))}
                    </DropdownMenuContent>
                  </DropdownMenu>
                ) : (
                  <Link href={item.href} className="text-gray-700 hover:text-green-600 font-medium transition-colors">
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button className="bg-green-600 hover:bg-green-700 text-white" asChild>
              <Link href="/quote">Get Free Quote</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px]">
              <div className="flex flex-col space-y-4 mt-8">
                {navigation.map((item) => (
                  <div key={item.name}>
                    <Link
                      href={item.href}
                      className="text-lg font-medium text-gray-700 hover:text-green-600 block"
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
                            className="text-sm text-gray-600 hover:text-green-600 block"
                            onClick={() => setIsOpen(false)}
                          >
                            {service.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
                <Button className="bg-green-600 hover:bg-green-700 text-white mt-4" asChild>
                  <Link href="/quote">Get Free Quote</Link>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
