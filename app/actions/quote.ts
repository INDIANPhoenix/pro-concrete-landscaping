"use server"

import { sendQuoteEmail } from "@/lib/email"

export async function submitQuoteForm(data: {
  services: string[]
  propertyType: string
  projectSize: string
  timeline: string
  budget: string
  name: string
  email: string
  phone: string
  address: string
  details: string
}) {
  // Basic validation
  if (!data.name || !data.email || !data.phone || data.services.length === 0) {
    return {
      success: false,
      error: "Please fill in all required fields",
    }
  }

  // Email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(data.email)) {
    return {
      success: false,
      error: "Please enter a valid email address",
    }
  }

  try {
    const result = await sendQuoteEmail(data)

    if (result.success) {
      return {
        success: true,
        message:
          "Quote request submitted successfully! We'll prepare your personalized quote and send it within 24 hours.",
      }
    } else {
      return {
        success: false,
        error: "Failed to submit quote request. Please try again or call us directly.",
      }
    }
  } catch (error) {
    console.error("Quote form error:", error)
    return {
      success: false,
      error: "Something went wrong. Please try again later.",
    }
  }
}
