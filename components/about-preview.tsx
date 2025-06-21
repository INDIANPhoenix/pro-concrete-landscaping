import { Button } from "@/components/ui/button"
import { CheckCircle } from "lucide-react"
import Image from "next/image"

export function AboutPreview() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/placeholder.svg?height=500&width=600"
                alt="Professional concrete and landscaping team at work"
                width={600}
                height={500}
                className="object-cover w-full h-full"
              />
            </div>
          </div>

          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl font-bold text-gray-900">Professional Concrete & Landscaping Company</h2>
              <p className="text-xl text-green-600 font-semibold">
                Take Your Outdoor Vision To Something Truly Extraordinary
              </p>
              <p className="text-gray-600 leading-relaxed">
                Pro Concrete & Landscaping is a professional outdoor transformation company specializing in concrete
                work and landscaping services. Our skilled contractors work on unique and customized projects where
                quality craftsmanship meets innovative design.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0" />
                <span className="text-gray-700">Licensed and insured professionals</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0" />
                <span className="text-gray-700">Comprehensive concrete and landscaping services</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0" />
                <span className="text-gray-700">Quality materials and expert workmanship</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0" />
                <span className="text-gray-700">Free quotes and competitive pricing</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white">
                Learn More About Us
              </Button>
              <Button size="lg" variant="outline" className="border-green-600 text-green-600 hover:bg-green-50">
                View Our Portfolio
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
