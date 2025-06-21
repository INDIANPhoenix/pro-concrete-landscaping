"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Star, Phone, ArrowRight, Play } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export function EnhancedHeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isVisible, setIsVisible] = useState(false)

  const slides = [
    {
      title: "Turning Dirt Into Dreams",
      subtitle: "Professional concrete and landscaping services",
      image: "/placeholder.svg?height=600&width=800",
    },
    {
      title: "Expert Concreting Solutions",
      subtitle: "Driveways, patios, and structural concrete work",
      image: "/placeholder.svg?height=600&width=800",
    },
    {
      title: "Beautiful Landscape Design",
      subtitle: "Transform your outdoor space into paradise",
      image: "/placeholder.svg?height=600&width=800",
    },
  ]

  useEffect(() => {
    setIsVisible(true)
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [slides.length])

  return (
    <section className="relative bg-gradient-to-br from-green-50 to-white py-20 overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-72 h-72 bg-green-300 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-green-400 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-green-200 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-4000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div
            className={`space-y-8 transition-all duration-1000 ${isVisible ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0"}`}
          >
            <div className="space-y-4">
              <div className="inline-flex items-center px-4 py-2 bg-green-100 rounded-full text-green-700 text-sm font-medium animate-bounce">
                <Star className="h-4 w-4 mr-2" />
                Perth's Trusted Concrete & Landscaping Experts
              </div>

              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                {slides[currentSlide].title.split(" ").map((word, index) => (
                  <span
                    key={index}
                    className={`inline-block transition-all duration-500 ${
                      word === "Dreams" ? "text-green-600 italic" : ""
                    }`}
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    {word}{" "}
                  </span>
                ))}
              </h1>

              <p className="text-xl text-gray-600 leading-relaxed animate-fade-in-up animation-delay-500">
                {slides[currentSlide].subtitle}
              </p>
            </div>

            <div className="space-y-4 animate-fade-in-up animation-delay-700">
              <div className="flex items-center space-x-2 text-gray-700">
                <div className="w-2 h-2 bg-green-600 rounded-full animate-pulse"></div>
                <span>Expert concreting and landscaping specialists</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-700">
                <div className="w-2 h-2 bg-green-600 rounded-full animate-pulse animation-delay-200"></div>
                <span>Quality workmanship with attention to detail</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-700">
                <div className="w-2 h-2 bg-green-600 rounded-full animate-pulse animation-delay-400"></div>
                <span>Comprehensive outdoor transformation services</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up animation-delay-1000">
              <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white px-8 group" asChild>
                <Link href="/quote">
                  Start Your Quote Quiz
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="border-green-600 text-green-600 hover:bg-green-50 group">
                <Play className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                View Our Work
              </Button>
            </div>

            <div className="flex items-center space-x-4 pt-4 animate-fade-in-up animation-delay-1200">
              <div className="flex items-center space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-5 w-5 fill-yellow-400 text-yellow-400 animate-pulse"
                    style={{ animationDelay: `${i * 0.1}s` }}
                  />
                ))}
              </div>
              <span className="text-gray-600">Trusted by 200+ satisfied customers</span>
            </div>

            <div className="flex items-center space-x-2 bg-green-100 p-4 rounded-lg animate-fade-in-up animation-delay-1400 hover:bg-green-200 transition-colors">
              <Phone className="h-5 w-5 text-green-600 animate-bounce" />
              <div>
                <p className="text-sm text-gray-600">Call us now for immediate service</p>
                <p className="font-bold text-green-700 text-lg">0470 432 212</p>
              </div>
            </div>
          </div>

          {/* Hero Image Carousel */}
          <div
            className={`relative transition-all duration-1000 ${isVisible ? "translate-x-0 opacity-100" : "translate-x-10 opacity-0"}`}
          >
            <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl relative">
              {slides.map((slide, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 transition-opacity duration-1000 ${
                    index === currentSlide ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <Image
                    src={slide.image || "/placeholder.svg"}
                    alt={slide.title}
                    width={600}
                    height={600}
                    className="object-cover w-full h-full"
                  />
                </div>
              ))}

              {/* Slide indicators */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                {slides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-3 h-3 rounded-full transition-all ${
                      index === currentSlide ? "bg-white" : "bg-white/50"
                    }`}
                  />
                ))}
              </div>
            </div>

            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg animate-bounce animation-delay-1600">
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600">7+</div>
                <div className="text-sm text-gray-600">Services Offered</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
