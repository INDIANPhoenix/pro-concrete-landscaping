import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Route, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function PavingPathwaysPage() {
  const features = [
    "Various paving material options",
    "Custom pathway designs",
    "Proper drainage solutions",
    "Slip-resistant surfaces",
    "Durable construction methods",
    "Professional edge finishing",
  ]

  const process = [
    { step: 1, title: "Design Planning", description: "Plan pathway routes and material selection" },
    { step: 2, title: "Site Preparation", description: "Excavate and prepare base materials" },
    { step: 3, title: "Base Installation", description: "Install proper foundation and drainage" },
    { step: 4, title: "Paving Work", description: "Lay pavers with precision alignment" },
    { step: 5, title: "Finishing", description: "Joint filling, sealing, and cleanup" },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-slate-50 via-gray-50 to-zinc-50 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23374151' fillOpacity='0.1'%3E%3Cpath d='M30 30c0-8.3-6.7-15-15-15s-15 6.7-15 15 6.7 15 15 15 15-6.7 15-15zm15 0c0-8.3-6.7-15-15-15s-15 6.7-15 15 6.7 15 15 15 15-6.7 15-15z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          />
        </div>
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-slate-100 text-slate-800 hover:bg-slate-200">
              <Route className="w-4 h-4 mr-2" />
              Paving & Pathways
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">Beautiful Paving & Pathways</h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Create stunning walkways and outdoor spaces with professional paving. Quality materials, expert
              installation, and designs that last.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-slate-600 hover:bg-slate-700">
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
            <h2 className="text-3xl font-bold text-center mb-12">Paving Services</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((feature, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="w-6 h-6 text-slate-600 mt-1 flex-shrink-0" />
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
      <section className="py-16 bg-gradient-to-br from-slate-50 to-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Installation Process</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
              {process.map((item, index) => (
                <Card key={index} className="text-center hover:shadow-lg transition-all hover:-translate-y-1">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-slate-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-lg font-bold">
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
      <section className="py-16 bg-gradient-to-r from-slate-600 to-gray-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready for Beautiful Pathways?</h2>
          <p className="text-xl mb-8 opacity-90">Transform your outdoor space with professional paving</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary">
              <Link href="/quote">Request Quote</Link>
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-slate-600">
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
