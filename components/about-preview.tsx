import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"

export function AboutPreview() {
  return (
    <section className="relative py-20 min-h-[600px] flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-jvPgp39z8SCiRtSCylsjDRbaX5D36i.png"
          alt="Lush green landscaping background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/20"></div>
      </div>

      {/* Content Container */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex justify-end">
          <div className="bg-gray-800/90 backdrop-blur-sm rounded-2xl p-8 max-w-lg w-full">
            {/* Subtitle */}
            <p className="text-green-400 italic text-lg mb-4 font-light">Landscaping Architects in Perth, WA</p>

            {/* Main Heading */}
            <h2 className="text-white text-3xl lg:text-4xl font-bold mb-6 leading-tight">
              Residential Landscaping Without Compromise
            </h2>

            {/* Description Paragraphs */}
            <div className="space-y-4 mb-6">
              <p className="text-gray-200 leading-relaxed">
                We are passionate about our work, which we believe speaks for itself. We create impressive residential
                landscapes around Perth that are a joy to spend time in. Our focus is on luxury. We deliver a fully
                personalised landscaping service, working with you and refining your vision every step of the way. Your
                landscaping design and construction is based on who you are. Your tastes and preferences are at the
                heart of everything we do.
              </p>

              <p className="text-gray-200 leading-relaxed">
                After you approve your final garden design, receive your quote and are happy to proceed, we will agree a
                start date with you. Our contractors will then get to work. Our company takes care of all the details
                for you, so you can relax and look forward to a sophisticated back and/or front yard that will be
                perfectly tailored to your requirements.
              </p>
            </div>

            {/* Contact Info */}
            <p className="text-gray-200 mb-6">
              <span className="text-green-400">Contact</span> Pro Concrete & Landscaping on{" "}
              <span className="text-green-400 font-semibold">0470 432 212</span> today to discuss your upcoming
              landscaping project in Perth or request a quote below now.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white font-semibold px-8" asChild>
                <Link href="/quote">REQUEST A QUOTE</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-gray-400 text-white hover:bg-white/10 font-semibold px-8"
                asChild
              >
                <Link href="/portfolio">📁 VIEW PORTFOLIO</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
