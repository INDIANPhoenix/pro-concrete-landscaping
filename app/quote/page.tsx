"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { ArrowLeft, ArrowRight, CheckCircle } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { submitQuoteForm } from "@/app/actions/quote"

export default function QuotePage() {
  const [currentStep, setCurrentStep] = useState(1)
  const [formData, setFormData] = useState({
    services: [],
    propertyType: "",
    projectSize: "",
    timeline: "",
    budget: "",
    name: "",
    email: "",
    phone: "",
    address: "",
    details: "",
  })

  const totalSteps = 6
  const progress = (currentStep / totalSteps) * 100

  const services = [
    "Landscaping Design",
    "Concrete Driveways",
    "Artificial Grass",
    "Exposed Concrete",
    "Retaining Walls",
    "Garden Mulching",
    "Letterbox Installation",
    "Pool Landscaping",
    "Concrete Patios",
    "Decorative Concrete",
    "Garden Maintenance",
    "Concrete Foundations",
    "Turf Installation",
    "Irrigation Systems",
    "Concrete Repairs",
    "Outdoor Lighting",
  ]

  const handleServiceToggle = (service: string) => {
    setFormData((prev) => ({
      ...prev,
      services: prev.services.includes(service)
        ? prev.services.filter((s) => s !== service)
        : [...prev.services, service],
    }))
  }

  const handleNext = () => {
    if (currentStep < totalSteps) {
      setCurrentStep((prev) => prev + 1)
    }
  }

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep((prev) => prev - 1)
    }
  }

  const handleSubmit = async () => {
    const result = await submitQuoteForm(formData)

    if (result.success) {
      // Redirect to thank you page
      window.location.href = "/quote/thank-you"
    } else {
      // Show error message
      alert(result.error)
    }
  }

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">What services do you need?</h3>
              <p className="text-gray-600">Select all services that apply to your project</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {services.map((service) => (
                <button
                  key={service}
                  onClick={() => handleServiceToggle(service)}
                  className={`p-4 rounded-lg border-2 text-left transition-all duration-200 hover:scale-105 ${
                    formData.services.includes(service)
                      ? "border-green-600 bg-green-50 text-green-700"
                      : "border-gray-200 hover:border-green-300"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-medium">{service}</span>
                    {formData.services.includes(service) && <CheckCircle className="h-5 w-5 text-green-600" />}
                  </div>
                </button>
              ))}
            </div>
          </div>
        )

      case 2:
        return (
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">What type of property is this?</h3>
              <p className="text-gray-600">This helps us understand the scope of your project</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {["Residential Home", "Commercial Property", "Rental Property", "New Construction"].map((type) => (
                <button
                  key={type}
                  onClick={() => setFormData((prev) => ({ ...prev, propertyType: type }))}
                  className={`p-6 rounded-lg border-2 text-left transition-all duration-200 hover:scale-105 ${
                    formData.propertyType === type
                      ? "border-green-600 bg-green-50 text-green-700"
                      : "border-gray-200 hover:border-green-300"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-medium text-lg">{type}</span>
                    {formData.propertyType === type && <CheckCircle className="h-6 w-6 text-green-600" />}
                  </div>
                </button>
              ))}
            </div>
          </div>
        )

      case 3:
        return (
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">What's the size of your project?</h3>
              <p className="text-gray-600">This helps us provide an accurate estimate</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {["Small (Under 50m²)", "Medium (50-150m²)", "Large (150-300m²)", "Extra Large (300m²+)"].map((size) => (
                <button
                  key={size}
                  onClick={() => setFormData((prev) => ({ ...prev, projectSize: size }))}
                  className={`p-6 rounded-lg border-2 text-left transition-all duration-200 hover:scale-105 ${
                    formData.projectSize === size
                      ? "border-green-600 bg-green-50 text-green-700"
                      : "border-gray-200 hover:border-green-300"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-medium text-lg">{size}</span>
                    {formData.projectSize === size && <CheckCircle className="h-6 w-6 text-green-600" />}
                  </div>
                </button>
              ))}
            </div>
          </div>
        )

      case 4:
        return (
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">When would you like to start?</h3>
              <p className="text-gray-600">This helps us schedule your project</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {["ASAP", "Within 1 Month", "1-3 Months", "3+ Months"].map((timeline) => (
                <button
                  key={timeline}
                  onClick={() => setFormData((prev) => ({ ...prev, timeline }))}
                  className={`p-6 rounded-lg border-2 text-left transition-all duration-200 hover:scale-105 ${
                    formData.timeline === timeline
                      ? "border-green-600 bg-green-50 text-green-700"
                      : "border-gray-200 hover:border-green-300"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-medium text-lg">{timeline}</span>
                    {formData.timeline === timeline && <CheckCircle className="h-6 w-6 text-green-600" />}
                  </div>
                </button>
              ))}
            </div>
          </div>
        )

      case 5:
        return (
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">What's your budget range?</h3>
              <p className="text-gray-600">This helps us tailor our recommendations</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {["Under $5,000", "$5,000 - $15,000", "$15,000 - $30,000", "$30,000+"].map((budget) => (
                <button
                  key={budget}
                  onClick={() => setFormData((prev) => ({ ...prev, budget }))}
                  className={`p-6 rounded-lg border-2 text-left transition-all duration-200 hover:scale-105 ${
                    formData.budget === budget
                      ? "border-green-600 bg-green-50 text-green-700"
                      : "border-gray-200 hover:border-green-300"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-medium text-lg">{budget}</span>
                    {formData.budget === budget && <CheckCircle className="h-6 w-6 text-green-600" />}
                  </div>
                </button>
              ))}
            </div>
          </div>
        )

      case 6:
        return (
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Contact Information</h3>
              <p className="text-gray-600">We'll use this to send your personalized quote</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData((prev) => ({ ...prev, name: e.target.value }))}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                  placeholder="Enter your full name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData((prev) => ({ ...prev, email: e.target.value }))}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                  placeholder="Enter your email"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number *</label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData((prev) => ({ ...prev, phone: e.target.value }))}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                  placeholder="Enter your phone number"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Property Address</label>
                <input
                  type="text"
                  value={formData.address}
                  onChange={(e) => setFormData((prev) => ({ ...prev, address: e.target.value }))}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                  placeholder="Enter property address"
                />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">Project Details</label>
                <textarea
                  value={formData.details}
                  onChange={(e) => setFormData((prev) => ({ ...prev, details: e.target.value }))}
                  rows={4}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                  placeholder="Tell us more about your project..."
                />
              </div>
            </div>
          </div>
        )

      default:
        return null
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <div className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="shadow-xl">
            <CardHeader className="bg-green-600 text-white">
              <div className="flex items-center justify-between">
                <CardTitle className="text-2xl">Get Your Free Quote</CardTitle>
                <span className="text-green-100">
                  Step {currentStep} of {totalSteps}
                </span>
              </div>
              <Progress value={progress} className="mt-4 bg-green-500" />
            </CardHeader>

            <CardContent className="p-8">
              <div className="min-h-[400px]">{renderStep()}</div>

              <div className="flex justify-between mt-8 pt-6 border-t">
                <Button
                  onClick={handlePrevious}
                  disabled={currentStep === 1}
                  variant="outline"
                  className="flex items-center"
                >
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Previous
                </Button>

                {currentStep === totalSteps ? (
                  <Button
                    onClick={handleSubmit}
                    className="bg-green-600 hover:bg-green-700 flex items-center"
                    disabled={!formData.name || !formData.email || !formData.phone}
                  >
                    Submit Quote Request
                    <CheckCircle className="ml-2 h-4 w-4" />
                  </Button>
                ) : (
                  <Button onClick={handleNext} className="bg-green-600 hover:bg-green-700 flex items-center">
                    Next
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                )}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <Footer />
    </div>
  )
}
