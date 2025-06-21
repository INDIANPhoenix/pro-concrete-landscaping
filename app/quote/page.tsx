"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Progress } from "@/components/ui/progress"
import { ArrowLeft, ArrowRight, CheckCircle } from "lucide-react"
import { useRouter } from "next/navigation"

interface QuoteData {
  projectType: string[]
  propertyType: string
  projectSize: string
  timeline: string
  budget: string
  personalInfo: {
    firstName: string
    lastName: string
    email: string
    phone: string
    address: string
  }
  projectDetails: string
  additionalServices: string[]
}

export default function QuotePage() {
  const router = useRouter()
  const [currentStep, setCurrentStep] = useState(1)
  const [quoteData, setQuoteData] = useState<QuoteData>({
    projectType: [],
    propertyType: "",
    projectSize: "",
    timeline: "",
    budget: "",
    personalInfo: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      address: "",
    },
    projectDetails: "",
    additionalServices: [],
  })

  const totalSteps = 6
  const progress = (currentStep / totalSteps) * 100

  const handleNext = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1)
    }
  }

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }

  const handleSubmit = async () => {
    // Here you would typically send the data to your backend
    console.log("Quote data:", quoteData)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000))

    // Redirect to thank you page
    router.push("/quote/thank-you")
  }

  const handleProjectTypeChange = (service: string, checked: boolean) => {
    if (checked) {
      setQuoteData((prev) => ({
        ...prev,
        projectType: [...prev.projectType, service],
      }))
    } else {
      setQuoteData((prev) => ({
        ...prev,
        projectType: prev.projectType.filter((s) => s !== service),
      }))
    }
  }

  const handleAdditionalServiceChange = (service: string, checked: boolean) => {
    if (checked) {
      setQuoteData((prev) => ({
        ...prev,
        additionalServices: [...prev.additionalServices, service],
      }))
    } else {
      setQuoteData((prev) => ({
        ...prev,
        additionalServices: prev.additionalServices.filter((s) => s !== service),
      }))
    }
  }

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-6">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">What services do you need?</h2>
              <p className="text-gray-600">Select all that apply to your project</p>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                "Landscaping",
                "Concreting",
                "Artificial Grass",
                "Exposed Concrete",
                "Retaining Walls",
                "Mulching",
                "Letterbox Installation",
              ].map((service) => (
                <div key={service} className="flex items-center space-x-2 p-4 border rounded-lg hover:bg-gray-50">
                  <Checkbox
                    id={service}
                    checked={quoteData.projectType.includes(service)}
                    onCheckedChange={(checked) => handleProjectTypeChange(service, checked as boolean)}
                  />
                  <Label htmlFor={service} className="text-lg cursor-pointer flex-1">
                    {service}
                  </Label>
                </div>
              ))}
            </div>
          </div>
        )

      case 2:
        return (
          <div className="space-y-6">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">What type of property is this?</h2>
              <p className="text-gray-600">This helps us understand the scope of your project</p>
            </div>
            <RadioGroup
              value={quoteData.propertyType}
              onValueChange={(value) => setQuoteData((prev) => ({ ...prev, propertyType: value }))}
              className="space-y-4"
            >
              {[
                { value: "residential-house", label: "Residential House" },
                { value: "apartment", label: "Apartment/Unit" },
                { value: "commercial", label: "Commercial Property" },
                { value: "industrial", label: "Industrial Property" },
              ].map((option) => (
                <div key={option.value} className="flex items-center space-x-2 p-4 border rounded-lg hover:bg-gray-50">
                  <RadioGroupItem value={option.value} id={option.value} />
                  <Label htmlFor={option.value} className="text-lg cursor-pointer flex-1">
                    {option.label}
                  </Label>
                </div>
              ))}
            </RadioGroup>
          </div>
        )

      case 3:
        return (
          <div className="space-y-6">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">What's the size of your project?</h2>
              <p className="text-gray-600">This helps us provide accurate pricing</p>
            </div>
            <RadioGroup
              value={quoteData.projectSize}
              onValueChange={(value) => setQuoteData((prev) => ({ ...prev, projectSize: value }))}
              className="space-y-4"
            >
              {[
                { value: "small", label: "Small (Under 50m²)" },
                { value: "medium", label: "Medium (50-150m²)" },
                { value: "large", label: "Large (150-300m²)" },
                { value: "extra-large", label: "Extra Large (300m²+)" },
              ].map((option) => (
                <div key={option.value} className="flex items-center space-x-2 p-4 border rounded-lg hover:bg-gray-50">
                  <RadioGroupItem value={option.value} id={option.value} />
                  <Label htmlFor={option.value} className="text-lg cursor-pointer flex-1">
                    {option.label}
                  </Label>
                </div>
              ))}
            </RadioGroup>
          </div>
        )

      case 4:
        return (
          <div className="space-y-6">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">When would you like to start?</h2>
              <p className="text-gray-600">This helps us schedule your project</p>
            </div>
            <RadioGroup
              value={quoteData.timeline}
              onValueChange={(value) => setQuoteData((prev) => ({ ...prev, timeline: value }))}
              className="space-y-4"
            >
              {[
                { value: "asap", label: "As soon as possible" },
                { value: "1-2-weeks", label: "Within 1-2 weeks" },
                { value: "1-month", label: "Within 1 month" },
                { value: "2-3-months", label: "Within 2-3 months" },
                { value: "flexible", label: "I'm flexible" },
              ].map((option) => (
                <div key={option.value} className="flex items-center space-x-2 p-4 border rounded-lg hover:bg-gray-50">
                  <RadioGroupItem value={option.value} id={option.value} />
                  <Label htmlFor={option.value} className="text-lg cursor-pointer flex-1">
                    {option.label}
                  </Label>
                </div>
              ))}
            </RadioGroup>
          </div>
        )

      case 5:
        return (
          <div className="space-y-6">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">What's your budget range?</h2>
              <p className="text-gray-600">This helps us tailor our recommendations</p>
            </div>
            <RadioGroup
              value={quoteData.budget}
              onValueChange={(value) => setQuoteData((prev) => ({ ...prev, budget: value }))}
              className="space-y-4"
            >
              {[
                { value: "under-5k", label: "Under $5,000" },
                { value: "5k-15k", label: "$5,000 - $15,000" },
                { value: "15k-30k", label: "$15,000 - $30,000" },
                { value: "30k-50k", label: "$30,000 - $50,000" },
                { value: "over-50k", label: "Over $50,000" },
              ].map((option) => (
                <div key={option.value} className="flex items-center space-x-2 p-4 border rounded-lg hover:bg-gray-50">
                  <RadioGroupItem value={option.value} id={option.value} />
                  <Label htmlFor={option.value} className="text-lg cursor-pointer flex-1">
                    {option.label}
                  </Label>
                </div>
              ))}
            </RadioGroup>
          </div>
        )

      case 6:
        return (
          <div className="space-y-6">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Your Contact Information</h2>
              <p className="text-gray-600">We'll use this to send you a personalized quote</p>
            </div>
            <div className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <Input
                  placeholder="First Name"
                  value={quoteData.personalInfo.firstName}
                  onChange={(e) =>
                    setQuoteData((prev) => ({
                      ...prev,
                      personalInfo: { ...prev.personalInfo, firstName: e.target.value },
                    }))
                  }
                />
                <Input
                  placeholder="Last Name"
                  value={quoteData.personalInfo.lastName}
                  onChange={(e) =>
                    setQuoteData((prev) => ({
                      ...prev,
                      personalInfo: { ...prev.personalInfo, lastName: e.target.value },
                    }))
                  }
                />
              </div>
              <Input
                placeholder="Email Address"
                type="email"
                value={quoteData.personalInfo.email}
                onChange={(e) =>
                  setQuoteData((prev) => ({
                    ...prev,
                    personalInfo: { ...prev.personalInfo, email: e.target.value },
                  }))
                }
              />
              <Input
                placeholder="Phone Number"
                type="tel"
                value={quoteData.personalInfo.phone}
                onChange={(e) =>
                  setQuoteData((prev) => ({
                    ...prev,
                    personalInfo: { ...prev.personalInfo, phone: e.target.value },
                  }))
                }
              />
              <Input
                placeholder="Property Address"
                value={quoteData.personalInfo.address}
                onChange={(e) =>
                  setQuoteData((prev) => ({
                    ...prev,
                    personalInfo: { ...prev.personalInfo, address: e.target.value },
                  }))
                }
              />
              <Textarea
                placeholder="Tell us more about your project..."
                rows={4}
                value={quoteData.projectDetails}
                onChange={(e) => setQuoteData((prev) => ({ ...prev, projectDetails: e.target.value }))}
              />
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

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-medium text-gray-600">
              Step {currentStep} of {totalSteps}
            </span>
            <span className="text-sm font-medium text-gray-600">{Math.round(progress)}% Complete</span>
          </div>
          <Progress value={progress} className="h-2" />
        </div>

        <Card className="shadow-xl">
          <CardContent className="p-8">
            {renderStep()}

            <div className="flex justify-between mt-8">
              <Button
                variant="outline"
                onClick={handlePrevious}
                disabled={currentStep === 1}
                className="flex items-center"
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                Previous
              </Button>

              {currentStep < totalSteps ? (
                <Button
                  onClick={handleNext}
                  className="bg-green-600 hover:bg-green-700 text-white flex items-center"
                  disabled={
                    (currentStep === 1 && quoteData.projectType.length === 0) ||
                    (currentStep === 2 && !quoteData.propertyType) ||
                    (currentStep === 3 && !quoteData.projectSize) ||
                    (currentStep === 4 && !quoteData.timeline) ||
                    (currentStep === 5 && !quoteData.budget)
                  }
                >
                  Next
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              ) : (
                <Button
                  onClick={handleSubmit}
                  className="bg-green-600 hover:bg-green-700 text-white flex items-center"
                  disabled={
                    !quoteData.personalInfo.firstName ||
                    !quoteData.personalInfo.lastName ||
                    !quoteData.personalInfo.email ||
                    !quoteData.personalInfo.phone
                  }
                >
                  <CheckCircle className="mr-2 h-4 w-4" />
                  Submit Quote Request
                </Button>
              )}
            </div>
          </CardContent>
        </Card>
      </div>

      <Footer />
    </div>
  )
}
