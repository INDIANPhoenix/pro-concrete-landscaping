import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, GrapeIcon as Grass, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function ArtificialGrassPage() {
  const features = [
    "Premium quality synthetic turf",
    "Pet-friendly and safe materials",
    "Low maintenance solution",
    "Water conservation benefits",
    "All-weather durability",
    "Professional installation guarantee",
  ]

  const process = [
    { step: 1, title: "Site Survey", description: "Measure and assess your lawn area" },
    { step: 2, title: "Ground Prep", description: "Remove existing grass and prepare base" },
    { step: 3, title: "Base Installation", description: "Install proper drainage and base materials" },
    { step: 4, title: "Turf Installation", description: "Lay and secure artificial grass perfectly" },
    { step: 5, title: "Finishing Touches", description: "Infill, brushing, and final inspection" },
  ]

  return (
    <div className="min-h-screen w-full">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-green-100 via-lime-50 to-emerald-100 overflow-hidden w-full">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%2365a30d' fillOpacity='0.1'%3E%3Cpath d='M30 30c0-8.3-6.7-15-15-15s-15 6.7-15 15 6.7 15 15 15 15-6.7 15-15zm15 0c0-8.3-6.7-15-15-15s-15 6.7-15 15 6.7 15 15 15 15-6.7 15-15z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-lime-100 text-lime-800 hover:bg-lime-200">
              <Grass className="w-4 h-4 mr-2" />
              Artificial Grass Installation
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">Perfect Lawn All Year Round</h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Enjoy a lush, green lawn without the maintenance. Our premium artificial grass looks natural, feels great,
              and saves you time and water.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-20">
              <Button size="lg" className="bg-lime-600 hover:bg-lime-700 relative z-30" asChild>
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
            <h2 className="text-3xl font-bold text-center mb-12">Why Choose Artificial Grass?</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((feature, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="w-6 h-6 text-lime-600 mt-1 flex-shrink-0" />
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
      <section className="py-16 bg-gradient-to-br from-lime-50 to-green-50 w-full">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Installation Process</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
              {process.map((item, index) => (
                <Card key={index} className="text-center hover:shadow-lg transition-all hover:-translate-y-1">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-lime-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-lg font-bold">
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
      <section className="py-16 bg-gradient-to-r from-lime-600 to-green-700 text-white w-full">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready for a Perfect Lawn?</h2>
          <p className="text-xl mb-8 opacity-90">Transform your outdoor space with premium artificial grass</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-20">
            <Button size="lg" variant="secondary" className="relative z-30" asChild>
              <Link href="/quote">Request Quote</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-lime-600 relative z-30"
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
