import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Footprints, ArrowRight, Phone, Star } from "lucide-react"
import Image from "next/image"

export default function PavingPathwaysPage() {
  const features = [
    "Natural stone paving installation",
    "Brick pathway construction",
    "Decorative paver options",
    "Permeable paving solutions",
    "Custom pattern designs",
    "Professional edge finishing",
  ]

  const testimonials = [
    {
      name: "Rachel Green",
      rating: 5,
      text: "Beautiful paving work! The pathways look stunning and have completely transformed our garden's accessibility.",
      image: "/placeholder-user.jpg",
    },
    {
      name: "Peter Johnson",
      rating: 5,
      text: "Excellent craftsmanship and attention to detail. The paved areas are both functional and aesthetically pleasing.",
      image: "/placeholder-user.jpg",
    },
    {
      name: "Amanda Lee",
      rating: 5,
      text: "Professional service from design to completion. Our new pathways have added so much value to our property.",
      image: "/placeholder-user.jpg",
    },
  ]

  const faqs = [
    {
      question: "What Types Of Paving Materials Do You Use?",
      answer:
        "We work with various materials including natural stone, concrete pavers, brick, and decorative options, selected based on your preferences and site requirements.",
    },
    {
      question: "How Long Do Paved Pathways Last?",
      answer:
        "With proper installation and materials, paved pathways can last 20-30 years or more with minimal maintenance required.",
    },
    {
      question: "Do You Provide Design Services For Paving Projects?",
      answer:
        "Yes! We provide complete design services including layout planning, material selection, and custom pattern creation to achieve your vision.",
    },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center">
        <div className="absolute inset-0">
          <Image src="/placeholder.jpg" alt="Professional Paving & Pathways" fill className="object-cover" priority />
          <div className="absolute inset-0 bg-black/40" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <Badge className="mb-4 bg-purple-600/20 text-purple-300 border-purple-400">
                <Footprints className="w-4 h-4 mr-2" />
                Paving & Pathway Specialists
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                Your Paving & Pathway Experts in Perth
              </h1>
              <p className="text-xl mb-8 text-gray-200 leading-relaxed">
                Beautiful and functional paving solutions including walkways, garden paths, and decorative paved areas
                using premium materials and expert craftsmanship.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-purple-600 hover:bg-purple-700 transition-all duration-300 hover:scale-105"
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
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Email Address"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                  />
                </div>
                <div>
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                  />
                </div>
                <div>
                  <textarea
                    placeholder="Tell us about your paving project..."
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                  />
                </div>
                <Button
                  className="w-full bg-purple-600 hover:bg-purple-700 transition-all duration-300 hover:scale-105"
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
                alt="Paving & Pathway Construction"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
            <div>
              <p className="text-purple-600 font-medium mb-2">Premium Paving Solutions</p>
              <h2 className="text-4xl font-bold mb-6 text-gray-900">Your Trusted Perth Paving & Pathway Specialists</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Transform your outdoor spaces with our expert paving and pathway services. We create beautiful,
                functional walkways and paved areas that enhance your property's accessibility and aesthetic appeal.
              </p>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Our skilled team uses premium materials and proven installation techniques to deliver paving solutions
                that provide long-lasting beauty and functionality for your outdoor spaces.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-purple-600 hover:bg-purple-700 transition-all duration-300 hover:scale-105">
                  Request A Quote
                </Button>
                <Button
                  variant="outline"
                  className="border-purple-600 text-purple-600 hover:bg-purple-50 transition-all duration-300 hover:scale-105"
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
            <Button className="bg-purple-600 hover:bg-purple-700 transition-all duration-300 hover:scale-105">
              View Google Reviews
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-purple-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-purple-600 font-medium mb-2">Complete Paving Solutions</p>
              <h2 className="text-4xl font-bold mb-6 text-gray-900">Our Comprehensive Paving & Pathway Service</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                We provide complete paving solutions from design through to completion. Our experienced team ensures
                quality results that enhance your property's functionality and visual appeal.
              </p>
              <div className="grid grid-cols-1 gap-4 mb-8">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-purple-600 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-purple-600 hover:bg-purple-700 transition-all duration-300 hover:scale-105">
                  Request A Quote
                </Button>
                <Button
                  variant="outline"
                  className="border-purple-600 text-purple-600 hover:bg-purple-50 transition-all duration-300 hover:scale-105"
                >
                  Explore Services
                </Button>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/placeholder.jpg"
                alt="Paving & Pathway Services"
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
          <h2 className="text-4xl font-bold mb-4">Begin Your Paving Project Today!</h2>
          <p className="text-xl mb-8 text-gray-300">
            Ready for professional paving and pathway installation? Get started with a free consultation.
          </p>
          <div className="max-w-md mx-auto">
            <div className="flex gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg text-gray-900"
              />
              <Button className="bg-purple-600 hover:bg-purple-700 px-8 transition-all duration-300 hover:scale-105">
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
            <h2 className="text-4xl font-bold mb-4 text-gray-900">Paving & Pathway FAQs</h2>
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
      <section className="py-20 bg-purple-100">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6 text-gray-900">Download Paving & Pathway Information Pack</h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Get our comprehensive guide with paving tips, material options, and design inspiration. Download your
                free copy today!
              </p>
              <Button
                className="bg-purple-600 hover:bg-purple-700 transition-all duration-300 hover:scale-105"
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
