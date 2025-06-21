import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Leaf, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function LandscapingPage() {
  const features = [
    "Complete garden transformations",
    "Native plant selection",
    "Sustainable design practices",
    "Professional maintenance plans",
    "Water-efficient solutions",
    "Custom outdoor living spaces",
  ]

  const process = [
    { step: 1, title: "Initial Consultation", description: "We discuss your vision and assess your space" },
    { step: 2, title: "Design & Planning", description: "Create detailed plans and 3D visualizations" },
    { step: 3, title: "Material Selection", description: "Choose plants, materials, and features" },
    { step: 4, title: "Installation", description: "Professional installation by our expert team" },
    { step: 5, title: "Final Walkthrough", description: "Ensure everything meets your expectations" },
  ]

  return (
    <div className="min-h-screen w-full">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 overflow-hidden w-full">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23059669' fillOpacity='0.1'%3E%3Cpath d='M30 30c0-8.3-6.7-15-15-15s-15 6.7-15 15 6.7 15 15 15 15-6.7 15-15zm15 0c0-8.3-6.7-15-15-15s-15 6.7-15 15 6.7 15 15 15 15-6.7 15-15z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-green-100 text-green-800 hover:bg-green-200">
              <Leaf className="w-4 h-4 mr-2" />
              Professional Landscaping
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">Transform Your Outdoor Space</h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Create stunning landscapes that enhance your property value and provide years of enjoyment. Our expert
              team designs and installs beautiful, sustainable outdoor environments.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-20">
              <Button size="lg" className="bg-green-600 hover:bg-green-700 relative z-30" asChild>
                <Link href="/quote" className="flex items-center">
                  Get Free Quote <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="relative z-30" asChild>
                <Link href="/portfolio">View Our Work</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white w-full">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">What's Included</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((feature, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-gray-100 w-full">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Our Process</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
              {process.map((item, index) => (
                <Card key={index} className="text-center hover:shadow-lg transition-all hover:-translate-y-1">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-lg font-bold">
                      {item.step}
                    </div>
                    <h3 className="font-semibold mb-2">{item.title}</h3>
                    <p className="text-sm text-gray-600">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-green-600 to-emerald-700 text-white w-full">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Landscape?</h2>
          <p className="text-xl mb-8 opacity-90">Get a free consultation and quote today</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-20">
            <Button size="lg" variant="secondary" className="relative z-30" asChild>
              <Link href="/quote">Request Quote</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-green-600 relative z-30"
              asChild
            >
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
