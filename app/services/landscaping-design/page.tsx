import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Trees, CheckCircle } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const features = [
  "Custom landscape design plans",
  "3D visualization and renderings",
  "Plant selection and placement",
  "Hardscape integration",
  "Irrigation system planning",
  "Lighting design consultation",
  "Maintenance planning",
  "Budget optimization",
]

const projects = [
  {
    title: "Modern Family Garden",
    location: "Subiaco, Perth",
    description: "Complete landscape transformation with native plants and contemporary design elements.",
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    title: "Luxury Pool Landscape",
    location: "Cottesloe, Perth",
    description: "Sophisticated poolside landscaping with tropical plants and decorative features.",
    image: "/placeholder.svg?height=300&width=400",
  },
]

export default function LandscapingDesignPage() {
  return (
    <div className="min-h-screen">
      <Header />

      {/* Breadcrumb */}
      <div className="bg-gray-50 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-2 text-sm">
            <Link href="/" className="text-green-600 hover:text-green-700">
              Home
            </Link>
            <span className="text-gray-400">/</span>
            <Link href="/services" className="text-green-600 hover:text-green-700">
              Services
            </Link>
            <span className="text-gray-400">/</span>
            <span className="text-gray-600">Landscaping Design</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-600 to-green-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center">
                  <Trees className="h-8 w-8 text-white" />
                </div>
                <h1 className="text-5xl font-bold">Landscaping Design</h1>
              </div>
              <p className="text-xl text-green-100 mb-8 leading-relaxed">
                Transform your outdoor space with our professional landscaping design services. We create beautiful,
                functional landscapes tailored to your lifestyle and Perth's unique climate.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-white text-green-600 hover:bg-gray-100">
                  Get Free Design Quote
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                  View Portfolio
                </Button>
              </div>
            </div>
            <div className="aspect-[4/3] rounded-2xl overflow-hidden">
              <Image
                src="/placeholder.svg?height=400&width=500"
                alt="Professional Landscaping Design"
                width={500}
                height={400}
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What's Included in Our Design Service</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our comprehensive landscaping design service covers every aspect of your outdoor transformation
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center space-x-3 p-4 bg-gray-50 rounded-lg">
                <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                <span className="text-gray-700 font-medium">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Recent Landscaping Design Projects</h2>
            <p className="text-xl text-gray-600">See how we've transformed outdoor spaces across Perth</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {projects.map((project, index) => (
              <Card key={index} className="border-0 shadow-lg overflow-hidden">
                <div className="aspect-[4/3] overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    width={400}
                    height={300}
                    className="object-cover w-full h-full hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{project.title}</h3>
                  <p className="text-green-600 font-medium mb-3">{project.location}</p>
                  <p className="text-gray-600 leading-relaxed">{project.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-green-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Design Your Dream Landscape?</h2>
          <p className="text-xl text-green-100 mb-8">
            Contact us today for a free consultation and let's bring your landscaping vision to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-green-600 hover:bg-gray-100 px-8">
              Get Free Quote
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              Call 0470 432 212
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
