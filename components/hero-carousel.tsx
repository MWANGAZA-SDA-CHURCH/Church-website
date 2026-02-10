"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { ChevronLeft, ChevronRight } from "lucide-react"

const slides = [
  {
    title: "Welcome to Mwangaza SDA Church",
    subtitle: "A Community of Faith, Hope, and Love",
    description: "Join us in spreading light and hope through worship, fellowship, and service to our community.",
    cta: "Explore Events",
    ctaLink: "/events",
    image: "/adventurers.jpeg",
  },
  {
    title: "Growing in Faith Together",
    subtitle: "Building Spiritual Foundations",
    description: "Experience transformative worship and biblical teaching in a welcoming environment.",
    cta: "Learn More",
    ctaLink: "/about",
    image: "/aym.jpeg",
  },
  {
    title: "Join Us This Sabbath",
    subtitle: "Every Saturday at 9:30 AM",
    description: "All are welcome to join our church family for inspiring worship and meaningful fellowship.",
    cta: "Get Directions",
    ctaLink: "/contact",
    image: "/awwm.jpeg",
  },
]

export function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)

  useEffect(() => {
    const timer = setInterval(() => {
      handleNext()
    }, 7000)
    return () => clearInterval(timer)
  }, [currentSlide])

  const handleNext = () => {
    setIsTransitioning(true)
    setTimeout(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
      setIsTransitioning(false)
    }, 500)
  }

  const handlePrev = () => {
    setIsTransitioning(true)
    setTimeout(() => {
      setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
      setIsTransitioning(false)
    }, 500)
  }

  const goToSlide = (index: number) => {
    setIsTransitioning(true)
    setTimeout(() => {
      setCurrentSlide(index)
      setIsTransitioning(false)
    }, 500)
  }

  return (
    <section className="relative h-[80vh] min-h-[540px] max-h-[760px] overflow-hidden bg-gray-950">
      {/* Background Images */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
            index === currentSlide ? "opacity-100 scale-100" : "opacity-0 scale-105"
          }`}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-teal-900/85 via-teal-800/75 to-cyan-900/85 z-10" />
          <img
            src={slide.image || "/placeholder.svg"}
            alt={slide.title}
            className="w-full h-full object-cover scale-105"
          />
        </div>
      ))}

      {/* Content */}
      <div className="relative z-20 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`transition-all duration-700 ${
                index === currentSlide
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8 absolute pointer-events-none"
              }`}
            >
              <div className="max-w-3xl">
                <div className="mb-5 inline-flex items-center gap-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 px-3 py-1.5">
                  <span className="h-2 w-2 rounded-full bg-emerald-300 animate-pulse" />
                  <span className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-100">
                    Welcome to Mwangaza SDA
                  </span>
                </div>
                <div className="mb-4">
                  <span className="inline-block px-4 py-2 bg-black/30 backdrop-blur-sm border border-white/10 rounded-full text-white text-xs sm:text-sm font-medium">
                    {slide.subtitle}
                  </span>
                </div>
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-5 text-white leading-tight">
                  {slide.title}
                </h1>
                <p className="text-base md:text-xl text-white/85 mb-7 md:mb-8 leading-relaxed max-w-2xl">
                  {slide.description}
                </p>
                <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                  <Link
                    href={slide.ctaLink}
                    className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-white text-teal-900 font-semibold rounded-full shadow-lg shadow-black/20 hover:bg-teal-50 hover:text-teal-900 transition-all duration-300 hover:-translate-y-0.5"
                  >
                    {slide.cta}
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                  <Link
                    href="#sabbath-program"
                    className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full border border-white/40 text-white/90 hover:bg-white/10 backdrop-blur-sm text-sm font-medium transition-all"
                  >
                    View Sabbath program
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={handlePrev}
        className="absolute left-6 top-1/2 -translate-y-1/2 z-30 w-14 h-14 flex items-center justify-center bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 text-white rounded-full transition-all duration-300 hover:scale-110"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-7 w-7" />
      </button>
      <button
        onClick={handleNext}
        className="absolute right-6 top-1/2 -translate-y-1/2 z-30 w-14 h-14 flex items-center justify-center bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 text-white rounded-full transition-all duration-300 hover:scale-110"
        aria-label="Next slide"
      >
        <ChevronRight className="h-7 w-7" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className="group"
            aria-label={`Go to slide ${index + 1}`}
          >
            <div
              className={`h-1 rounded-full transition-all duration-300 ${
                index === currentSlide ? "bg-white w-12" : "bg-white/40 w-8 group-hover:bg-white/60 group-hover:w-10"
              }`}
            />
          </button>
        ))}
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white via-white/50 to-transparent z-10" />
    </section>
  )
}
