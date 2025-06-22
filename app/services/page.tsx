import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import {
  Hammer,
  Trees,
  Layers,
  Mountain,
  Fence,
  Leaf,
  Mail,
  CheckCircle,
  Footprints,
  Palette,
  Droplets,
  Lightbulb,
  Home,
  Waves,
  Car,
  Wrench,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const services = [
  {
    icon: Trees,
    title: "Landscaping",
    description:
      "Complete landscape design and installation services to transform your outdoor space into a beautiful and functional area that reflects your style.",
    features: ["Garden Design", "Plant Installation", "Irrigation Systems", "Outdoor Lighting", "Pathway Installation"],
    image: "/placeholder.svg?height=300&width=400",
    bgClass: "bg-gradient-to-br from-green-50 to-emerald-100",
    href: "/services/landscaping",
  },
  {
    icon: Hammer,
    title: "Concreting",
    description:
      "Professional concrete work including driveways, patios, foundations, and structural elements with quality finishes that stand the test of time.",
    features: ["Driveways", "Patios & Outdoor Areas", "Foundations", "Concrete Slabs", "Decorative Concrete"],
    image: "/placeholder.svg?height=300&width=400",
    bgClass: "bg-gradient-to-br from-gray-50 to-slate-100",
    href: "/services/concreting",
  },
  {
    icon: Layers,
    title: "Artificial Grass",
    description:
      "High-quality artificial grass installation for low-maintenance beautiful lawns that look natural year-round and save water.",
    features: [
      "Premium Synthetic Turf",
      "Professional Installation",
      "Drainage Systems",
      "Pet-Friendly Options",
      "Maintenance-Free",
    ],
    image: "/placeholder.svg?height=300&width=400",
    bgClass: "bg-gradient-to-br from-lime-50 to-green-100",
    href: "/services/artificial-grass",
  },
  {
    icon: Mountain,
    title: "Exposed Concrete",
    description:
      "Decorative exposed concrete finishes for modern and stylish surfaces that combine durability with aesthetic appeal for contemporary homes.",
    features: [
      "Aggregate Exposure",
      "Polished Finishes",
      "Colored Concrete",
      "Textured Surfaces",
      "Sealing & Protection",
    ],
    image: "/placeholder.svg?height=300&width=400",
    bgClass: "bg-gradient-to-br from-stone-50 to-gray-100",
    href: "/services/exposed-concrete",
  },
  {
    icon: Fence,
    title: "Retaining Walls",
    description:
      "Structural retaining walls for slope management, erosion control, and landscape definition with various material options and engineering support.",
    features: [
      "Concrete Block Walls",
      "Natural Stone Walls",
      "Timber Retaining",
      "Drainage Solutions",
      "Engineering Support",
    ],
    image: "/placeholder.svg?height=300&width=400",
    bgClass: "bg-gradient-to-br from-amber-50 to-orange-100",
    href: "/services/retaining-walls",
  },
  {
    icon: Leaf,
    title: "Mulching",
    description:
      "Professional mulching services to protect and nourish your garden beds while enhancing the overall landscape appearance and plant health.",
    features: ["Organic Mulch", "Decorative Bark", "Weed Suppression", "Moisture Retention", "Soil Health Improvement"],
    image: "/placeholder.svg?height=300&width=400",
    bgClass: "bg-gradient-to-br from-yellow-50 to-amber-100",
    href: "/services/mulching",
  },
  {
    icon: Mail,
    title: "Letterbox Installation",
    description:
      "Custom letterbox installation with concrete foundations and professional mounting for durability, style, and enhanced curb appeal.",
    features: [
      "Concrete Foundations",
      "Various Styles",
      "Professional Mounting",
      "Durable Materials",
      "Custom Solutions",
    ],
    image: "/placeholder.svg?height=300&width=400",
    bgClass: "bg-gradient-to-br from-blue-50 to-cyan-100",
    href: "/services/letterbox-installation",
  },
  {
    icon: Footprints,
    title: "Paving & Pathways",
    description:
      "Beautiful and functional paving solutions including walkways, garden paths, and decorative paved areas using premium materials.",
    features: ["Natural Stone Paving", "Brick Pathways", "Decorative Pavers", "Permeable Paving", "Custom Patterns"],
    image: "/placeholder.svg?height=300&width=400",
    bgClass: "bg-gradient-to-br from-purple-50 to-violet-100",
    href: "/services/paving-pathways",
  },
  {
    icon: Palette,
    title: "Garden Design",
    description:
      "Comprehensive garden design services from concept to completion, creating outdoor spaces that are both beautiful and functional.",
    features: ["3D Design Concepts", "Plant Selection", "Color Schemes", "Seasonal Planning", "Maintenance Plans"],
    image: "/placeholder.svg?height=300&width=400",
    bgClass: "bg-gradient-to-br from-pink-50 to-rose-100",
    href: "/services/garden-design",
  },
  {
    icon: Droplets,
    title: "Irrigation Systems",
    description:
      "Efficient irrigation systems designed to keep your landscape healthy while conserving water and reducing maintenance requirements.",
    features: ["Drip Irrigation", "Sprinkler Systems", "Smart Controllers", "Water Conservation", "System Maintenance"],
    image: "/placeholder.svg?height=300&width=400",
    bgClass: "bg-gradient-to-br from-teal-50 to-cyan-100",
    href: "/services/irrigation-systems",
  },
  {
    icon: Lightbulb,
    title: "Outdoor Lighting",
    description:
      "Professional outdoor lighting installation to enhance safety, security, and ambiance while highlighting your landscape's best features.",
    features: ["LED Lighting", "Pathway Illumination", "Feature Lighting", "Security Lighting", "Smart Controls"],
    image: "/placeholder.svg?height=300&width=400",
    bgClass: "bg-gradient-to-br from-indigo-50 to-blue-100",
    href: "/services/outdoor-lighting",
  },
  {
    icon: Home,
    title: "Decking",
    description:
      "Custom decking solutions using premium materials to create beautiful outdoor living spaces perfect for entertaining and relaxation.",
    features: [
      "Timber Decking",
      "Composite Materials",
      "Multi-Level Designs",
      "Balustrades & Rails",
      "Weather Protection",
    ],
    image: "/placeholder.svg?height=300&width=400",
    bgClass: "bg-gradient-to-br from-orange-50 to-red-100",
    href: "/services/decking",
  },
  {
    icon: Waves,
    title: "Pool Surrounds",
    description:
      "Stunning pool surrounds and outdoor entertainment areas that combine safety, style, and functionality for the ultimate backyard experience.",
    features: ["Non-Slip Surfaces", "Decorative Concrete", "Natural Stone", "Pool Coping", "Entertainment Areas"],
    image: "/placeholder.svg?height=300&width=400",
    bgClass: "bg-gradient-to-br from-sky-50 to-blue-100",
    href: "/services/pool-surrounds",
  },
  {
    icon: Car,
    title: "Driveway Construction",
    description:
      "Professional driveway construction and renovation services using quality materials and techniques for long-lasting, attractive results.",
    features: ["Concrete Driveways", "Asphalt Surfaces", "Decorative Options", "Proper Drainage", "Reinforcement"],
    image: "/placeholder.svg?height=300&width=400",
    bgClass: "bg-gradient-to-br from-neutral-50 to-stone-100",
    href: "/services/driveway-construction",
  },
  {
    icon: Wrench,
    title: "Garden Maintenance",
    description:
      "Comprehensive garden maintenance services to keep your outdoor spaces looking their best throughout the year with regular care.",
    features: ["Regular Pruning", "Lawn Care", "Fertilization", "Pest Control", "Seasonal Cleanup"],
    image: "/placeholder.svg?height=300&width=400",
    bgClass: "bg-gradient-to-br from-emerald-50 to-teal-100",
    href: "/services/garden-maintenance",
  },
  {
    icon: Trees,
    title: "Pergolas & Gazebos",
    description:
      "Custom-built pergolas and gazebos to create shaded outdoor living spaces that add value and functionality to your property.",
    features: ["Custom Designs", "Quality Timber", "Weather Resistant", "Integrated Seating", "Climbing Plant Support"],
    image: "/placeholder.svg?height=300&width=400",
    bgClass: "bg-gradient-to-br from-violet-50 to-purple-100",
    href: "/services/pergolas-gazebos",
  },
]

export default function ServicesPage() {
  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section with Enhanced Effects */}
      <section className="relative bg-gradient-to-br from-green-600 via-green-700 to-emerald-800 text-white py-24 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                'url(\'data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fillRule="evenodd"%3E%3Cg fill="%23ffffff" fillOpacity="0.1"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\')',
            }}
          ></div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-white/10 rounded-full animate-bounce animation-delay-100"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-white/10 rounded-full animate-bounce animation-delay-300"></div>
        <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-white/10 rounded-full animate-bounce animation-delay-500"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-6xl md:text-7xl font-bold mb-6 animate-fade-in-up">Our Professional Services</h1>
          <p className="text-xl md:text-2xl text-green-100 max-w-4xl mx-auto animate-fade-in-up animation-delay-200">
            Comprehensive concrete and landscaping solutions to transform your outdoor spaces into stunning, functional
            environments
          </p>
          <div className="mt-8 animate-fade-in-up animation-delay-400">
            <Button
              size="lg"
              className="bg-white text-green-700 hover:bg-green-50 px-8 py-4 text-lg font-semibold shadow-xl hover-lift"
              asChild
            >
              <Link href="/quote">Get Free Consultation</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Services Grid with Alternating Full-Width Backgrounds */}
      <section className="py-0">
        <div className="space-y-0">
          {services.map((service, index) => (
            <div
              key={index}
              className={`${service.bgClass} py-16 ${index === 0 ? "rounded-t-3xl" : ""} ${
                index === services.length - 1 ? "rounded-b-3xl" : ""
              } relative overflow-hidden w-full`}
            >
              {/* Background Pattern for each section */}
              <div
                className="absolute inset-0 opacity-5"
                style={{
                  backgroundImage:
                    "url('data:image/svg+xml,%3Csvg%20width%3D%2240%22%20height%3D%2240%22%20viewBox%3D%220%200%2040%2040%22%20xmlns%3D%22http://www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22000000%22%20fill-opacity%3D%220.05%22%3E%3Cpath%20d%3D%22M20%2020c0-5.5-4.5-10-10-10s-10%204.5-10%2010%204.5%2010%2010%2010%2010-4.5%2010-10zm10%200c0-5.5-4.5-10-10-10s-10%204.5-10%2010%204.5%2010%2010%2010%2010-4.5%2010-10z%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')",
                }}
              />

              <div className="relative max-w-6xl mx-auto px-4">
                <div
                  className={`grid lg:grid-cols-2 gap-12 items-center ${
                    index % 2 === 1 ? "lg:grid-flow-col-dense" : ""
                  }`}
                >
                  <div className={`space-y-6 relative z-20 ${index % 2 === 1 ? "lg:col-start-2" : ""}`}>
                    <div className="flex items-center space-x-4">
                      <div className="w-20 h-20 bg-white/80 backdrop-blur-sm rounded-2xl flex items-center justify-center shadow-lg hover-lift">
                        <service.icon className="h-10 w-10 text-green-600" />
                      </div>
                      <div>
                        <span className="text-sm font-medium text-green-600 uppercase tracking-wider">
                          Service {String(index + 1).padStart(2, "0")}
                        </span>
                        <h2 className="text-4xl font-bold text-gray-900">{service.title}</h2>
                      </div>
                    </div>

                    <p className="text-lg text-gray-700 leading-relaxed">{service.description}</p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {service.features.map((feature, featureIndex) => (
                        <div
                          key={featureIndex}
                          className="flex items-center space-x-3 bg-white/60 backdrop-blur-sm rounded-lg p-3 hover-lift"
                        >
                          <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                          <span className="text-gray-800 font-medium">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 pt-4 relative z-30">
                      <Button
                        className="bg-green-600 hover:bg-green-700 text-white shadow-lg hover-lift btn-animate"
                        asChild
                      >
                        <Link href={service.href}>Get Quote for {service.title}</Link>
                      </Button>
                      <Button
                        variant="outline"
                        className="border-green-600 text-green-600 hover:bg-green-50 shadow-lg hover-lift"
                        asChild
                      >
                        <Link href={service.href}>Learn More</Link>
                      </Button>
                    </div>
                  </div>

                  <div className={`relative z-10 ${index % 2 === 1 ? "lg:col-start-1" : ""}`}>
                    <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl hover-lift card-hover">
                      <Image
                        src={service.image || "/placeholder.svg"}
                        alt={service.title}
                        width={500}
                        height={375}
                        className="object-cover w-full h-full"
                      />
                      {/* Image Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Enhanced CTA Section */}
      <section className="relative py-24 bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white overflow-hidden">
        {/* Simple background pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 to-blue-500/10"></div>
        </div>

        {/* Remove all floating elements and complex patterns */}

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-5xl md:text-6xl font-bold mb-8">Ready to Start Your Project?</h2>
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto">
            Contact us today for a free consultation and personalized quote for your concrete and landscaping needs.
            Let's transform your outdoor space together!
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button
              size="lg"
              className="bg-green-600 hover:bg-green-700 text-white px-12 py-4 text-lg font-semibold shadow-2xl"
              asChild
            >
              <Link href="/quote">Get Free Quote</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-gray-900 px-12 py-4 text-lg font-semibold shadow-2xl"
              asChild
            >
              <Link href="tel:0470432212">Call Now: 0470 432 212</Link>
            </Button>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-green-400">500+</div>
              <div className="text-gray-300">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-400">15+</div>
              <div className="text-gray-300">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-400">100%</div>
              <div className="text-gray-300">Customer Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
