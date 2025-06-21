import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Waves, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function PoolSurroundsPage() {
  const features = [
    "Non-slip surface materials",
    "Custom pool area design",
    "Drainage and water management",
    "Heat-resistant materials",
    "Easy maintenance surfaces",
    "Safety compliance standards",
  ]

  const process = [
    { step: 1, title: "Pool Assessment", description: "Measure pool area and assess requirements" },
    { step: 2, title: "Material Selection", description: "Choose appropriate non-slip materials" },
    { step: 3, title: "Site Preparation", description: "Prepare base and drainage systems" },
    { step: 4, title: "Installation", description: "Install pool surround materials" },
    { step: 5, title: "Sealing & Finishing", description: "Apply protective sealers and final touches" },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-blue-50 via-sky-50 to-cyan-50 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%230ea5e9' fillOpacity='0.1'%3E%3Cpath d='M30 30c0-8.3-6.7-15-15-15s-15 6.7-15 15 6.7 15 15 15 15-6.7 15-15zm15 0c0-8.3-6.7-15-15-15s-15 6.7-15 15 6.7 15 15 15 15-6.7 15-15z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          />
        </div>
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-sky-100 text-sky-800 hover:bg-sky-200">
              <Waves className="w-4 h-4 mr-2" />
              Pool Surrounds
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">Safe Pool Surrounds</h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Create safe, beautiful pool areas with professional pool surrounds. Non-slip surfaces, proper drainage,
              and stylish finishes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-sky-600 hover:bg-sky-700">
                <Link href="/quote" className="flex items-center">
                  Get Free Quote <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline">
                <Link href="/portfolio">View Our Work</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Pool Surround Features</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((feature, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="w-6 h-6 text-sky-600 mt-1 flex-shrink-0" />
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
      <section className="py-16 bg-gradient-to-br from-sky-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Installation Process</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
              {process.map((item, index) => (
                <Card key={index} className="text-center hover:shadow-lg transition-all hover:-translate-y-1">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-sky-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-lg font-bold">
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
      <section className="py-16 bg-gradient-to-r from-sky-600 to-blue-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Need Pool Surround Installation?</h2>
          <p className="text-xl mb-8 opacity-90">Safe, stylish pool areas with professional installation</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary">
              <Link href="/quote">Request Quote</Link>
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-sky-600">
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
