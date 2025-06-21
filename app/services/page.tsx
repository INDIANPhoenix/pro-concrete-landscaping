import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

const services = [
  {
    title: "Landscaping",
    description: "Complete garden transformations with native plants and sustainable design practices.",
    image: "/placeholder.svg?height=300&width=400",
    href: "/services/landscaping",
    features: ["Garden Design", "Plant Selection", "Sustainable Practices"],
  },
  {
    title: "Concreting",
    description: "Professional concrete work for driveways, patios, and foundations with lasting quality.",
    image: "/placeholder.svg?height=300&width=400",
    href: "/services/concreting",
    features: ["Driveways", "Patios", "Foundations"],
  },
  {
    title: "Artificial Grass",
    description: "Premium synthetic turf installation for low-maintenance, year-round green lawns.",
    image: "/placeholder.svg?height=300&width=400",
    href: "/services/artificial-grass",
    features: ["Premium Turf", "Low Maintenance", "Pet Friendly"],
  },
  {
    title: "Exposed Concrete",
    description: "Decorative concrete finishes with natural stone appeal for modern outdoor spaces.",
    image: "/placeholder.svg?height=300&width=400",
    href: "/services/exposed-concrete",
    features: ["Decorative Finishes", "Custom Colors", "Slip Resistant"],
  },
  {
    title: "Retaining Walls",
    description: "Engineered retaining walls for structural support and enhanced landscape design.",
    image: "/placeholder.svg?height=300&width=400",
    href: "/services/retaining-walls",
    features: ["Structural Engineering", "Drainage Systems", "Various Materials"],
  },
  {
    title: "Mulching",
    description: "Premium organic mulch application for healthier gardens and reduced maintenance.",
    image: "/placeholder.svg?height=300&width=400",
    href: "/services/mulching",
    features: ["Organic Materials", "Weed Suppression", "Moisture Retention"],
  },
  {
    title: "Letterbox Installation",
    description: "Professional letterbox installation with secure foundations and postal compliance.",
    image: "/placeholder.svg?height=300&width=400",
    href: "/services/letterbox-installation",
    features: ["Various Styles", "Secure Installation", "Postal Compliant"],
  },
  {
    title: "Paving & Pathways",
    description: "Beautiful walkways and outdoor spaces with professional paving installation.",
    image: "/placeholder.svg?height=300&width=400",
    href: "/services/paving-pathways",
    features: ["Custom Designs", "Quality Materials", "Professional Installation"],
  },
  {
    title: "Garden Design",
    description: "Custom landscape design with 3D visualization and expert plant selection.",
    image: "/placeholder.svg?height=300&width=400",
    href: "/services/garden-design",
    features: ["3D Visualization", "Custom Plans", "Plant Selection"],
  },
  {
    title: "Irrigation Systems",
    description: "Smart irrigation solutions for efficient watering and water conservation.",
    image: "/placeholder.svg?height=300&width=400",
    href: "/services/irrigation-systems",
    features: ["Smart Controllers", "Water Efficient", "Automated Systems"],
  },
  {
    title: "Outdoor Lighting",
    description: "Professional landscape lighting for security, beauty, and functionality.",
    image: "/placeholder.svg?height=300&width=400",
    href: "/services/outdoor-lighting",
    features: ["LED Systems", "Smart Controls", "Security Lighting"],
  },
  {
    title: "Decking",
    description: "Quality outdoor decking construction with timber and composite options.",
    image: "/placeholder.svg?height=300&width=400",
    href: "/services/decking",
    features: ["Timber & Composite", "Custom Designs", "Weather Resistant"],
  },
  {
    title: "Pool Surrounds",
    description: "Safe, stylish pool areas with non-slip surfaces and proper drainage.",
    image: "/placeholder.svg?height=300&width=400",
    href: "/services/pool-surrounds",
    features: ["Non-slip Surfaces", "Safety Compliant", "Easy Maintenance"],
  },
  {
    title: "Driveway Construction",
    description: "Durable driveway construction with proper drainage and quality materials.",
    image: "/placeholder.svg?height=300&width=400",
    href: "/services/driveway-construction",
    features: ["Heavy Duty", "Proper Drainage", "Various Finishes"],
  },
  {
    title: "Garden Maintenance",
    description: "Regular garden care and maintenance to keep your landscape looking its best.",
    image: "/placeholder.svg?height=300&width=400",
    href: "/services/garden-maintenance",
    features: ["Regular Care", "Seasonal Services", "Plant Management"],
  },
  {
    title: "Pergolas & Gazebos",
    description: "Custom outdoor structures for beautiful and functional outdoor living spaces.",
    image: "/placeholder.svg?height=300&width=400",
    href: "/services/pergolas-gazebos",
    features: ["Custom Designs", "Quality Materials", "Professional Construction"],
  },
]

export default function ServicesPage() {
  return (
    <div className="container py-12">
      <h1 className="text-3xl font-bold mb-8">Our Services</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <Card
            key={index}
            className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-white relative z-10"
          >
            <div className="relative overflow-hidden rounded-t-lg">
              <img
                src={service.image || "/placeholder.svg"}
                alt={service.title}
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
            <CardContent className="p-6 relative z-20">
              <h3 className="text-xl font-bold mb-3 text-gray-900 group-hover:text-green-600 transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-4 leading-relaxed">{service.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {service.features.map((feature, featureIndex) => (
                  <Badge
                    key={featureIndex}
                    variant="secondary"
                    className="text-xs bg-green-50 text-green-700 hover:bg-green-100"
                  >
                    {feature}
                  </Badge>
                ))}
              </div>
              <Button className="w-full bg-green-600 hover:bg-green-700 text-white relative z-30" asChild>
                <Link href={service.href} className="flex items-center justify-center">
                  Learn More <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
