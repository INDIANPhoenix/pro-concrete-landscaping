import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Home, Phone } from "lucide-react"
import Image from "next/image"

export default function DeckingPage() {
  const features = [
    "Timber decking installation",
    "Composite material options",
    "Multi-level deck designs",
    "Balustrades and railings",
    "Weather protection treatments",
    "Custom design solutions",
  ]

  const testimonials = [
    {
      name: "Steven Parker",
      rating: 5,
      text: "Outstanding decking work! Our new deck is perfect for entertaining and has added so much value to our home.",
      image: "/placeholder-user.jpg",
    },
    {
      name: "Michelle Roberts",
      rating: 5,
      text: "Professional service and beautiful craftsmanship. The deck exceeded our expectations in every way.",
      image: "/placeholder-user.jpg",
    },
    {
      name: "Tony Martinez",
      rating: 5,
      text: "Excellent attention to detail and quality materials. Our deck looks amazing and is built to last.",
      image: "/placeholder-user.jpg",
    },
  ]

  const faqs = [
    {
      question: "What Types Of Decking Materials Do You Use?",
      answer:
        "We work with various materials including hardwood timber, treated pine, and composite decking materials, each offering different benefits and aesthetics.",
    },
    {
      question: "How Long Does A Decking Project Take To Complete?",
      answer:
        "Most residential decking projects take 3-7 days depending on size and complexity, including preparation, construction, and finishing work.",
    },
    {
      question: "Do You Provide Design Services For Decking Projects?",
      answer:
        "Yes! We provide complete design services including layout planning, material selection, and custom features to create your perfect outdoor living space.",
    },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center">
        <div className="absolute inset-0">
          <Image src="/placeholder.jpg" alt="Professional Decking Services" fill className="object-cover" priority />
          <div className="absolute inset-0 bg-black/40" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <Badge className="mb-4 bg-orange-600/20 text-orange-300 border-orange-400">
                <Home className="w-4 h-4 mr-2" />
                Decking Specialists
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                Your Decking Experts in Perth
              </h1>
              <p className="text-xl mb-8 text-gray-200 leading-relaxed">
                Custom decking solutions using premium materials to create beautiful outdoor living spaces perfect for
                entertaining and relaxation with professional craftsmanship.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-orange-600 hover:bg-orange-700 transition-all duration-300 hover:scale-105">
                  <Phone className="w-5 h-5 mr-2" />
                  Call Now: 0470 432 212
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-gray-900 transition-all duration-300 hover:scale-105"
                >
                  View Portfolio
                </Button>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white rounded-lg p-8 shadow-2xl">
              <h3 className="text-2xl font-bold mb-6 text-gray-900">Get Your Free Quote</h3>
              <form className="space-y-4">
                <div>
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Email Address"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300"
                  />
                </div>
                <div>
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300"
                  />
                </div>
                <div>
                  <textarea
                    placeholder="Tell us about your decking project..."
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300\"
