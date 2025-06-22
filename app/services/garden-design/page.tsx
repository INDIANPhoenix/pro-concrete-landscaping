import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Palette, ArrowRight, Phone, Star } from "lucide-react"
import Image from "next/image"

export default function GardenDesignPage() {
  const features = [
    "3D design concepts and visualization",
    "Native and exotic plant selection",
    "Color scheme coordination",
    "Seasonal planning and maintenance",
    "Sustainable design practices",
    "Custom landscape solutions",
  ]

  const testimonials = [
    {
      name: "Sophie Williams",
      rating: 5,
      text: "Amazing garden design service! They transformed our vision into reality with beautiful plant selections and layout.",
      image: "/placeholder-user.jpg",
    },
    {
      name: "Daniel Brown",
      rating: 5,
      text: "Professional design process from concept to completion. Our new garden is exactly what we dreamed of.",
      image: "/placeholder-user.jpg",
    },
    {
      name: "Catherine Davis",
      rating: 5,
      text: "Excellent attention to detail and creativity. The garden design has completely transformed our outdoor space.",
      image: "/placeholder-user.jpg",
    },
  ]

  const faqs = [
    {
      question: "What Does The Garden Design Process Include?",
      answer:
        "Our process includes site analysis, concept development, 3D visualization, plant selection, material specification, and detailed installation plans.",
    },
    {
      question: "Do You Provide Ongoing Maintenance Plans?",
      answer:
        "Yes! We provide comprehensive maintenance plans to keep your garden looking its best throughout all seasons with regular care schedules.",
    },
    {
      question: "How Long Does A Garden Design Project Take?",
      answer:
        "Design phase typically takes 2-4 weeks, with installation varying from 1-4 weeks depending on project complexity and size.",
    },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center">
        <div className="absolute inset-0">
          <Image src="/placeholder.jpg" alt="Professional Garden Design" fill className="object-cover" priority />
          <div className="absolute inset-0 bg-black/40" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <Badge className="mb-4 bg-pink-600/20 text-pink-300 border-pink-400">
                <Palette className="w-4 h-4 mr-2" />
                Garden Design Specialists
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">Your Garden Design Experts in Perth</h1>
              <p className="text-xl mb-8 text-gray-200 leading-relaxed">
                Comprehensive garden design services from concept to completion, creating outdoor spaces that are both
                beautiful and functional for your lifestyle and environment.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-pink-600 hover:bg-pink-700 transition-all duration-300 hover:scale-105">
                  <Phone className="w-5 h-5 mr-2" />
                  Call Now: 0470 432 212
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-gray-900 transition-all duration-300 hover:scale-105"
                >
                  View Portfolio
                </Button>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white rounded-lg p-8 shadow-2xl">
              <h3 className="text-2xl font-bold mb-6 text-gray-900">Get Your Free Quote</h3>
              <form className="space-y-4">
                <div>
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all duration-300"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Email Address"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all duration-300"
                  />
                </div>
                <div>
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all duration-300"
                  />
                </div>
                <div>
                  <textarea
                    placeholder="Tell us about your garden design project..."
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all duration-300"
                  />
                </div>
                <Button
                  className="w-full bg-pink-600 hover:bg-pink-700 transition-all duration-300 hover:scale-105"
                  size="lg"
                >
                  Get Free Quote
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <Image
                src="/placeholder.jpg"
                alt="Garden Design Process"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
            <div>
              <p className="text-pink-600 font-medium mb-2">Creative Garden Solutions</p>
              <h2 className="text-4xl font-bold mb-6 text-gray-900">Your Trusted Perth Garden Design Specialists</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Transform your outdoor space with our expert garden design services. We create beautiful, sustainable
                gardens that reflect your personal style while working harmoniously with Perth's unique climate and
                conditions.
              </p>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Our comprehensive design process includes site analysis, concept development, 3D visualization, and
                detailed installation plans to ensure your garden exceeds expectations and provides years of enjoyment.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-pink-600 hover:bg-pink-700 transition-all duration-300 hover:scale-105">
                  Request A Quote
                </Button>
                <Button
                  variant="outline"
                  className="border-pink-600 text-pink-600 hover:bg-pink-50 transition-all duration-300 hover:scale-105"
                >
                  View Portfolio
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">Here's What Our Happy Customers Say</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className="bg-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <Image
                      src="/placeholder-user.jpg"
                      alt={testimonial.name}
                      width={50}
                      height={50}
                      className="rounded-full mr-4"
                    />
                    <div>
                      <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                      <div className="flex">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-600 italic">"{testimonial.text}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-8">
            <Button className="bg-pink-600 hover:bg-pink-700 transition-all duration-300 hover:scale-105">
              View Google Reviews
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-pink-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-pink-600 font-medium mb-2">Complete Garden Design Solutions</p>
              <h2 className="text-4xl font-bold mb-6 text-gray-900">Our Comprehensive Garden Design Service</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                We provide complete garden design solutions from initial consultation through to installation and
                ongoing maintenance. Our creative team ensures beautiful results that enhance your outdoor living
                experience.
              </p>
              <div className="grid grid-cols-1 gap-4 mb-8">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-pink-600 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-pink-600 hover:bg-pink-700 transition-all duration-300 hover:scale-105">
                  Request A Quote
                </Button>
                <Button
                  variant="outline"
                  className="border-pink-600 text-pink-600 hover:bg-pink-50 transition-all duration-300 hover:scale-105"
                >
                  Explore Services
                </Button>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/placeholder.jpg"
                alt="Garden Design Services"
                width={600}
                height={500}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Begin Your Garden Design Project Today!</h2>
          <p className="text-xl mb-8 text-gray-300">
            Ready for professional garden design services? Get started with a free consultation.
          </p>
          <div className="max-w-md mx-auto">
            <div className="flex gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg text-gray-900"
              />
              <Button className="bg-pink-600 hover:bg-pink-700 px-8 transition-all duration-300 hover:scale-105">
                Get Started
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">Garden Design FAQs</h2>
          </div>
          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <Card key={index} className="border border-gray-200 hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-gray-900 mb-2">{faq.question}</h3>
                  <p className="text-gray-600">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Download Section */}
      <section className="py-20 bg-pink-100">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6 text-gray-900">Download Garden Design Information Pack</h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Get our comprehensive guide with garden design tips, plant selection advice, and inspiration. Download
                your free copy today!
              </p>
              <Button className="bg-pink-600 hover:bg-pink-700 transition-all duration-300 hover:scale-105" size="lg">
                <ArrowRight className="w-5 h-5 mr-2" />
                Free Download
              </Button>
            </div>
            <div className="relative">
              <Image
                src="/placeholder.jpg"
                alt="Information Pack"
                width={400}
                height={300}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
