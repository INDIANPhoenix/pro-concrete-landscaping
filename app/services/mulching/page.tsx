import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Leaf, ArrowRight, Phone, Star } from "lucide-react"
import Image from "next/image"

export default function MulchingPage() {
  const features = [
    "Organic mulch application",
    "Decorative bark mulching",
    "Weed suppression benefits",
    "Moisture retention improvement",
    "Soil health enhancement",
    "Professional installation",
  ]

  const testimonials = [
    {
      name: "Jennifer Smith",
      rating: 5,
      text: "Fantastic mulching service! Our garden beds look amazing and the plants are thriving with the new mulch.",
      image: "/placeholder-user.jpg",
    },
    {
      name: "Mark Wilson",
      rating: 5,
      text: "Professional mulching work that has transformed our landscape. Great quality mulch and expert application.",
      image: "/placeholder-user.jpg",
    },
    {
      name: "Lisa Chen",
      rating: 5,
      text: "Excellent service and attention to detail. The mulching has really improved our garden's health and appearance.",
      image: "/placeholder-user.jpg",
    },
  ]

  const faqs = [
    {
      question: "What Types Of Mulch Do You Use?",
      answer:
        "We use various types including organic bark mulch, wood chips, and decorative mulches, selected based on your garden's specific needs and aesthetic preferences.",
    },
    {
      question: "How Often Should Mulch Be Replaced?",
      answer:
        "Most mulch should be refreshed annually, though some premium mulches can last 18-24 months depending on weather conditions and mulch type.",
    },
    {
      question: "What Are The Benefits Of Professional Mulching?",
      answer:
        "Professional mulching provides weed suppression, moisture retention, soil temperature regulation, and enhanced garden appearance with proper application techniques.",
    },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center">
        <div className="absolute inset-0">
          <Image src="/placeholder.jpg" alt="Professional Mulching Services" fill className="object-cover" priority />
          <div className="absolute inset-0 bg-black/40" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <Badge className="mb-4 bg-yellow-600/20 text-yellow-300 border-yellow-400">
                <Leaf className="w-4 h-4 mr-2" />
                Professional Mulching Services
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">Your Mulching Experts in Perth</h1>
              <p className="text-xl mb-8 text-gray-200 leading-relaxed">
                Professional mulching services to protect and nourish your garden beds while enhancing the overall
                landscape appearance and promoting healthy plant growth.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-yellow-600 hover:bg-yellow-700 transition-all duration-300 hover:scale-105"
                >
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
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all duration-300"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Email Address"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all duration-300"
                  />
                </div>
                <div>
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all duration-300"
                  />
                </div>
                <div>
                  <textarea
                    placeholder="Tell us about your mulching project..."
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all duration-300"
                  />
                </div>
                <Button
                  className="w-full bg-yellow-600 hover:bg-yellow-700 transition-all duration-300 hover:scale-105"
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
                alt="Professional Mulching Process"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
            <div>
              <p className="text-yellow-600 font-medium mb-2">Premium Mulching Solutions</p>
              <h2 className="text-4xl font-bold mb-6 text-gray-900">Your Trusted Perth Mulching Specialists</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Transform your garden beds with our professional mulching services. We use premium quality mulch
                materials and expert application techniques to enhance your landscape's health and appearance.
              </p>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Our mulching services provide numerous benefits including weed suppression, moisture retention, soil
                temperature regulation, and enhanced aesthetic appeal for your outdoor spaces.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-yellow-600 hover:bg-yellow-700 transition-all duration-300 hover:scale-105">
                  Request A Quote
                </Button>
                <Button
                  variant="outline"
                  className="border-yellow-600 text-yellow-600 hover:bg-yellow-50 transition-all duration-300 hover:scale-105"
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
            <Button className="bg-yellow-600 hover:bg-yellow-700 transition-all duration-300 hover:scale-105">
              View Google Reviews
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-yellow-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-yellow-600 font-medium mb-2">Complete Mulching Solutions</p>
              <h2 className="text-4xl font-bold mb-6 text-gray-900">Our Comprehensive Mulching Service</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                We provide complete mulching solutions from material selection through to professional application. Our
                experienced team ensures quality results that enhance your garden's health and appearance.
              </p>
              <div className="grid grid-cols-1 gap-4 mb-8">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-yellow-600 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-yellow-600 hover:bg-yellow-700 transition-all duration-300 hover:scale-105">
                  Request A Quote
                </Button>
                <Button
                  variant="outline"
                  className="border-yellow-600 text-yellow-600 hover:bg-yellow-50 transition-all duration-300 hover:scale-105"
                >
                  Explore Services
                </Button>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/placeholder.jpg"
                alt="Mulching Services"
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
          <h2 className="text-4xl font-bold mb-4">Begin Your Mulching Project Today!</h2>
          <p className="text-xl mb-8 text-gray-300">
            Ready for professional mulching services? Get started with a free consultation.
          </p>
          <div className="max-w-md mx-auto">
            <div className="flex gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg text-gray-900"
              />
              <Button className="bg-yellow-600 hover:bg-yellow-700 px-8 transition-all duration-300 hover:scale-105">
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
            <h2 className="text-4xl font-bold mb-4 text-gray-900">Mulching FAQs</h2>
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
      <section className="py-20 bg-yellow-100">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6 text-gray-900">Download Mulching Information Pack</h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Get our comprehensive guide with mulching tips, material selection advice, and maintenance information.
                Download your free copy today!
              </p>
              <Button
                className="bg-yellow-600 hover:bg-yellow-700 transition-all duration-300 hover:scale-105"
                size="lg"
              >
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
