import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, Award, Users, Clock, Shield } from "lucide-react"
import Image from "next/image"
import { serviceImages } from "@/public/images/services"

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-600 to-green-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-5xl font-bold mb-6">About Pro Concrete & Landscaping</h1>
              <p className="text-xl text-green-100 leading-relaxed">
                We are passionate professionals dedicated to turning your outdoor dreams into reality through expert
                concrete work and beautiful landscaping solutions.
              </p>
            </div>
            <div className="aspect-square rounded-2xl overflow-hidden">
              <Image
                src={serviceImages.landscaping.main}
                alt="Pro Concrete & Landscaping team"
                width={500}
                height={500}
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-gray-900">Our Story</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Pro Concrete & Landscaping was founded with a simple mission: to transform ordinary outdoor spaces into
                extraordinary living environments. Our journey began with a passion for quality craftsmanship and a
                commitment to exceeding customer expectations.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Today, we're proud to be one of Perth's most trusted concrete and landscaping specialists, known for our
                attention to detail, innovative solutions, and unwavering dedication to quality.
              </p>
            </div>
            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
              <Image
                src={serviceImages.concreting.main}
                alt="Our work in progress"
                width={500}
                height={400}
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These core values guide everything we do and ensure exceptional results for every project
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Award,
                title: "Quality Excellence",
                description: "We never compromise on quality and use only the finest materials and techniques.",
              },
              {
                icon: Users,
                title: "Customer Focus",
                description:
                  "Your satisfaction is our priority. We listen, understand, and deliver beyond expectations.",
              },
              {
                icon: Clock,
                title: "Reliability",
                description: "We respect your time and complete projects on schedule with professional efficiency.",
              },
              {
                icon: Shield,
                title: "Trust & Integrity",
                description: "Licensed, insured, and committed to honest, transparent business practices.",
              },
            ].map((value, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <value.icon className="h-8 w-8 text-green-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
              <Image
                src={serviceImages.gardenDesign.main}
                alt="Quality workmanship"
                width={500}
                height={400}
                className="object-cover w-full h-full"
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-gray-900">Why Choose Pro Concrete & Landscaping?</h2>
              <div className="space-y-4">
                {[
                  "Licensed and fully insured professionals",
                  "Comprehensive concrete and landscaping expertise",
                  "Quality materials and superior workmanship",
                  "Competitive pricing with transparent quotes",
                  "Satisfaction guarantee on all projects",
                  "Local Perth business with community focus",
                  "Free consultations and detailed project planning",
                  "Ongoing support and maintenance services",
                ].map((item, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
              <Button className="bg-green-600 hover:bg-green-700 text-white" size="lg">
                Get Your Free Quote
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
