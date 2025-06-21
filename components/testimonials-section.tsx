import { Card, CardContent } from "@/components/ui/card"
import { Star, Quote } from "lucide-react"

const testimonials = [
  {
    name: "Sarah Mitchell",
    location: "Subiaco, Perth",
    rating: 5,
    text: "Pro Concrete & Landscaping transformed our backyard completely. The concrete work is flawless and the landscaping is absolutely beautiful. Highly recommend!",
    service: "Complete Backyard Renovation",
  },
  {
    name: "David Thompson",
    location: "Fremantle, Perth",
    rating: 5,
    text: "Excellent work on our driveway and front garden. Professional team, on time, and the quality exceeded our expectations. Will definitely use them again.",
    service: "Concrete Driveway & Front Landscaping",
  },
  {
    name: "Lisa Chen",
    location: "Cottesloe, Perth",
    rating: 5,
    text: "The artificial grass installation was perfect. No more mowing and it looks amazing year-round. Great value for money and fantastic service.",
    service: "Artificial Grass Installation",
  },
  {
    name: "Mark Williams",
    location: "Nedlands, Perth",
    rating: 5,
    text: "Outstanding concrete patio work. The exposed concrete finish is exactly what we wanted. Professional, clean, and completed on schedule.",
    service: "Exposed Concrete Patio",
  },
]

export function TestimonialsSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">What Our Customers Say</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it - hear from our satisfied customers across Perth
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-0 shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Quote className="h-8 w-8 text-green-600 mr-3" />
                  <div className="flex">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>
                <p className="text-gray-700 mb-6 leading-relaxed italic">"{testimonial.text}"</p>
                <div className="border-t pt-4">
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="font-semibold text-gray-900">{testimonial.name}</p>
                      <p className="text-sm text-gray-600">{testimonial.location}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-green-600 font-medium">{testimonial.service}</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
