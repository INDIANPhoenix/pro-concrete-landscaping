import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Leaf, ArrowRight, Phone, Star } from "lucide-react"
import Image from "next/image"

export default function LandscapingPage() {
  const features = [
    "Complete garden transformations",
    "Native plant selection",
    "Sustainable design practices",
    "Professional maintenance plans",
    "Water-efficient solutions",
    "Custom outdoor living spaces",
  ]

  const testimonials = [
    {
      name: "Sarah Johnson",
      rating: 5,
      text: "Pro Concrete & Landscaping transformed our backyard into a beautiful oasis. Their attention to detail and professional service exceeded our expectations.",
      image: "/placeholder-user.jpg",
    },
    {
      name: "Mike Chen",
      rating: 5,
      text: "Outstanding landscaping work! The team was professional, on time, and delivered exactly what we envisioned. Highly recommended!",
      image: "/placeholder-user.jpg",
    },
    {
      name: "Emma Wilson",
      rating: 5,
      text: "From design to completion, the entire process was seamless. Our new landscape has increased our property value significantly.",
      image: "/placeholder-user.jpg",
    },
  ]

  const faqs = [
    {
      question: "What Types Of Landscaping Services Does Pro Concrete & Landscaping Offer?",
      answer:
        "We offer comprehensive landscaping services including garden design, plant installation, lawn establishment, irrigation systems, outdoor lighting, retaining walls, and ongoing maintenance.",
    },
    {
      question: "How Does The Landscaping Design And Construction Process Work?",
      answer:
        "Our process begins with a consultation to understand your vision, followed by site analysis, design development, material selection, and professional installation with ongoing support.",
    },
    {
      question: "Can Pro Concrete & Landscaping Work Within My Budget For A Landscaping Project?",
      answer:
        "Yes! We work with various budgets and can recommend solutions that maximize value while achieving your landscaping goals. We provide detailed quotes upfront.",
    },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center">
        <div className="absolute inset-0">
          <Image src="/placeholder.jpg" alt="Professional Landscaping" fill className="object-cover" priority />
          <div className="absolute inset-0 bg-black/40" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <Badge className="mb-4 bg-green-600/20 text-green-300 border-green-400">
                <Leaf className="w-4 h-4 mr-2" />
                Professional Landscaping
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                Your Landscape Construction Experts in Perth
              </h1>
              <p className="text-xl mb-8 text-gray-200 leading-relaxed">
                Transform your outdoor space with our expert landscaping services. We specialize in creating beautiful,
                sustainable landscapes that enhance your property value and provide years of enjoyment.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-green-600 hover:bg-green-700">
                  <Phone className="w-5 h-5 mr-2" />
                  Call Now: (08) 1234 5678
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-gray-900"
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
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Email Address"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <textarea
                    placeholder="Tell us about your project..."
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  />
                </div>
                <Button className="w-full bg-green-600 hover:bg-green-700" size="lg">
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
                alt="Landscaping Process"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
            <div>
              <p className="text-green-600 font-medium mb-2">Innovative Landscape Design & Construction</p>
              <h2 className="text-4xl font-bold mb-6 text-gray-900">
                Your Trusty Perth Landscape Construction Company
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                With over 15 years of experience in landscaping and construction, we pride ourselves on delivering
                exceptional results that exceed our clients' expectations. Our team of skilled professionals combines
                creativity with technical expertise to transform outdoor spaces.
              </p>
              <p className="text-gray-600 mb-8 leading-relaxed">
                From initial design concepts to final installation, we handle every aspect of your landscaping project
                with attention to detail and commitment to quality. We use only the finest materials and latest
                techniques to ensure lasting results.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-green-600 hover:bg-green-700">Request A Quote</Button>
                <Button variant="outline">View Portfolio</Button>
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
              <Card key={index} className="bg-white shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <Image
                      src={testimonial.image || "/placeholder.svg"}
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
            <Button className="bg-green-600 hover:bg-green-700">View Google Reviews</Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-green-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-green-600 font-medium mb-2">Full Landscape Solutions</p>
              <h2 className="text-4xl font-bold mb-6 text-gray-900">
                Our Comprehensive Landscape Design & Build Service
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                We provide end-to-end landscaping solutions from initial concept through to completion and ongoing
                maintenance. Our comprehensive approach ensures seamless project delivery and exceptional results.
              </p>
              <div className="grid grid-cols-1 gap-4 mb-8">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-green-600 hover:bg-green-700">Request A Quote</Button>
                <Button variant="outline">Explore Services</Button>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/placeholder.jpg"
                alt="Landscape Design & Build"
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
          <h2 className="text-4xl font-bold mb-4">Begin Your Transformation Today!</h2>
          <p className="text-xl mb-8 text-gray-300">
            Ready to create your dream landscape? Get started with a free consultation.
          </p>
          <div className="max-w-md mx-auto">
            <div className="flex gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg text-gray-900"
              />
              <Button className="bg-green-600 hover:bg-green-700 px-8">Get Started</Button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">Landscaping Construction FAQs</h2>
          </div>
          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <Card key={index} className="border border-gray-200">
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
      <section className="py-20 bg-green-100">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6 text-gray-900">
                Download Pro Concrete Landscaping Information Pack
              </h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Get our comprehensive guide with landscaping tips, design ideas, and project inspiration. Download your
                free copy today!
              </p>
              <Button className="bg-green-600 hover:bg-green-700" size="lg">
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
