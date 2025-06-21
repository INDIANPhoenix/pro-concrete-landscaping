import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Hammer, Trees, Layers, Mountain, Fence, Leaf, Mail, CheckCircle } from "lucide-react"
import Image from "next/image"

const services = [
  {
    icon: Trees,
    title: "Landscaping",
    description:
      "Complete landscape design and installation services to transform your outdoor space into a beautiful and functional area.",
    features: ["Garden Design", "Plant Installation", "Irrigation Systems", "Outdoor Lighting", "Pathway Installation"],
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    icon: Hammer,
    title: "Concreting",
    description:
      "Professional concrete work including driveways, patios, foundations, and structural elements with quality finishes.",
    features: ["Driveways", "Patios & Outdoor Areas", "Foundations", "Concrete Slabs", "Decorative Concrete"],
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    icon: Layers,
    title: "Artificial Grass",
    description:
      "High-quality artificial grass installation for low-maintenance beautiful lawns that look natural year-round.",
    features: [
      "Premium Synthetic Turf",
      "Professional Installation",
      "Drainage Systems",
      "Pet-Friendly Options",
      "Maintenance-Free",
    ],
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    icon: Mountain,
    title: "Exposed Concrete",
    description:
      "Decorative exposed concrete finishes for modern and stylish surfaces that combine durability with aesthetic appeal.",
    features: [
      "Aggregate Exposure",
      "Polished Finishes",
      "Colored Concrete",
      "Textured Surfaces",
      "Sealing & Protection",
    ],
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    icon: Fence,
    title: "Retaining Walls",
    description:
      "Structural retaining walls for slope management, erosion control, and landscape definition with various material options.",
    features: [
      "Concrete Block Walls",
      "Natural Stone Walls",
      "Timber Retaining",
      "Drainage Solutions",
      "Engineering Support",
    ],
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    icon: Leaf,
    title: "Mulching",
    description:
      "Professional mulching services to protect and nourish your garden beds while enhancing the overall landscape appearance.",
    features: ["Organic Mulch", "Decorative Bark", "Weed Suppression", "Moisture Retention", "Soil Health Improvement"],
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    icon: Mail,
    title: "Letterbox Installation",
    description:
      "Custom letterbox installation with concrete foundations and professional mounting for durability and style.",
    features: [
      "Concrete Foundations",
      "Various Styles",
      "Professional Mounting",
      "Durable Materials",
      "Custom Solutions",
    ],
    image: "/placeholder.svg?height=300&width=400",
  },
]

export default function ServicesPage() {
  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-600 to-green-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6">Our Professional Services</h1>
          <p className="text-xl text-green-100 max-w-3xl mx-auto">
            Comprehensive concrete and landscaping solutions to transform your outdoor spaces
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {services.map((service, index) => (
              <div
                key={index}
                className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? "lg:grid-flow-col-dense" : ""}`}
              >
                <div className={`space-y-6 ${index % 2 === 1 ? "lg:col-start-2" : ""}`}>
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 bg-green-100 rounded-xl flex items-center justify-center">
                      <service.icon className="h-8 w-8 text-green-600" />
                    </div>
                    <h2 className="text-3xl font-bold text-gray-900">{service.title}</h2>
                  </div>
                  <p className="text-lg text-gray-600 leading-relaxed">{service.description}</p>
                  <div className="space-y-3">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-3">
                        <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <Button className="bg-green-600 hover:bg-green-700 text-white">Get Quote for {service.title}</Button>
                </div>
                <div className={`${index % 2 === 1 ? "lg:col-start-1" : ""}`}>
                  <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
                    <Image
                      src={service.image || "/placeholder.svg"}
                      alt={service.title}
                      width={400}
                      height={300}
                      className="object-cover w-full h-full"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Ready to Start Your Project?</h2>
          <p className="text-xl text-gray-600 mb-8">
            Contact us today for a free consultation and personalized quote for your concrete and landscaping needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white px-8">
              Get Free Quote
            </Button>
            <Button size="lg" variant="outline" className="border-green-600 text-green-600 hover:bg-green-50">
              Call Now: 0470 432 212
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
