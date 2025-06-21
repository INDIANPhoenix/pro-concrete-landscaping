import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Phone, Mail, MapPin, Clock } from "lucide-react"

export function ContactSection() {
  return (
    <section className="py-20 bg-green-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Ready to Transform Your Outdoor Space?</h2>
          <p className="text-xl text-green-100 max-w-3xl mx-auto">
            Contact us today for a free consultation and quote. Let's turn your dirt into dreams!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="shadow-xl">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Get Your Free Quote</h3>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <Input placeholder="First Name" className="border-gray-300" />
                  <Input placeholder="Last Name" className="border-gray-300" />
                </div>
                <Input placeholder="Email Address" type="email" className="border-gray-300" />
                <Input placeholder="Phone Number" type="tel" className="border-gray-300" />
                <Input placeholder="Service Required" className="border-gray-300" />
                <Textarea placeholder="Tell us about your project..." rows={4} className="border-gray-300" />
                <Button className="w-full bg-green-600 hover:bg-green-700 text-white" size="lg">
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                    <Phone className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <p className="text-green-100">Phone</p>
                    <p className="text-white font-semibold text-lg">0470 432 212</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                    <Mail className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <p className="text-green-100">Email</p>
                    <p className="text-white font-semibold">proconcretelandscaping@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                    <MapPin className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <p className="text-green-100">Service Area</p>
                    <p className="text-white font-semibold">Perth & Surrounding Areas</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                    <Clock className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <p className="text-green-100">Business Hours</p>
                    <p className="text-white font-semibold">Mon-Fri: 7AM-6PM</p>
                    <p className="text-white font-semibold">Sat: 8AM-4PM</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8">
              <h4 className="text-xl font-bold text-white mb-4">Why Choose Us?</h4>
              <ul className="space-y-3 text-green-100">
                <li>• Free quotes and consultations</li>
                <li>• Licensed and insured</li>
                <li>• Quality materials and workmanship</li>
                <li>• Competitive pricing</li>
                <li>• Satisfaction guaranteed</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
