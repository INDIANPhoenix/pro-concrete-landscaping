import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Hammer, Trees, Layers, Mountain, Fence, Leaf, Mail } from "lucide-react"

const services = [
  {
    icon: Trees,
    title: "Landscaping",
    description: "Complete landscape design and installation services to transform your outdoor space.",
  },
  {
    icon: Hammer,
    title: "Concreting",
    description: "Professional concrete work including driveways, patios, and structural elements.",
  },
  {
    icon: Layers,
    title: "Artificial Grass",
    description: "High-quality artificial grass installation for low-maintenance beautiful lawns.",
  },
  {
    icon: Mountain,
    title: "Exposed Concrete",
    description: "Decorative exposed concrete finishes for modern and stylish surfaces.",
  },
  {
    icon: Fence,
    title: "Retaining Walls",
    description: "Structural retaining walls for slope management and landscape definition.",
  },
  {
    icon: Leaf,
    title: "Mulching",
    description: "Professional mulching services to protect and nourish your garden beds.",
  },
  {
    icon: Mail,
    title: "Letterbox Installation",
    description: "Custom letterbox installation and concrete foundation work.",
  },
]

export function ServicesPreview() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Professional Services</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From concrete foundations to beautiful landscapes, we provide comprehensive outdoor transformation services
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow border-0 shadow-md">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                    <service.icon className="h-6 w-6 text-green-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">{service.title}</h3>
                </div>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white">
            View All Services
          </Button>
        </div>
      </div>
    </section>
  )
}
