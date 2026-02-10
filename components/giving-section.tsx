import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, Users, Globe, Heart, Handshake } from "lucide-react"
import Link from "next/link"

export function GivingSection() {
  return (
    <section id="giving" className="py-20 bg-gradient-to-b from-white via-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-gray-900 mb-4">Partner With Us</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Join our mission to build a thriving faith community. Every contribution, whether through giving,
            volunteering, or prayer, strengthens our ability to serve and inspire.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Giving Cards */}
          <div className="space-y-4">
            <h3 className="font-serif text-2xl font-bold text-gray-900 mb-6">Ways to Give</h3>

            <Card className="bg-white border border-gray-200 hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-cyan-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Heart className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg text-gray-900 mb-1">Tithe</h4>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Return God's portion faithfully and support local ministry
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white border border-gray-200 hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-teal-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Users className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg text-gray-900 mb-1">Offering</h4>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Support community outreach and ministry programs
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white border border-gray-200 hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Globe className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg text-gray-900 mb-1">Mission</h4>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Advance global evangelism and church growth initiatives
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Partnership Card */}
          <div className="bg-gradient-to-br from-teal-50 via-cyan-50 to-blue-50 border border-teal-200 rounded-xl p-8 flex flex-col justify-between">
            <div>
              <div className="w-14 h-14 bg-gradient-to-br from-teal-600 to-cyan-600 rounded-xl flex items-center justify-center mb-4">
                <Handshake className="h-7 w-7 text-white" />
              </div>
              <h3 className="font-serif text-2xl font-bold text-gray-900 mb-3">Make an Impact</h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                Your support transforms lives and strengthens our church family. Whether through regular contributions
                or one-time gifts, your partnership matters.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3 text-gray-700">
                  <span className="text-teal-600 font-bold mt-1">✓</span>
                  <span>Secure online giving platform</span>
                </li>
                <li className="flex items-start gap-3 text-gray-700">
                  <span className="text-teal-600 font-bold mt-1">✓</span>
                  <span>Mobile-friendly and convenient</span>
                </li>
                <li className="flex items-start gap-3 text-gray-700">
                  <span className="text-teal-600 font-bold mt-1">✓</span>
                  <span>100% of funds support ministry</span>
                </li>
              </ul>
            </div>
            <Link href="/contact">
              <Button className="w-full bg-gradient-to-r from-teal-600 to-cyan-600 hover:from-teal-700 hover:to-cyan-700 text-white font-medium">
                Get Involved Today
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>

        {/* Contact Methods */}
        <div className="bg-white border border-gray-200 rounded-xl p-8">
          <h3 className="font-serif text-2xl font-bold text-gray-900 mb-8 text-center">Contact Information</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <p className="text-sm text-gray-600 mb-2">Email</p>
              <p className="font-semibold text-gray-900">giving@mwangazasda.org</p>
            </div>
            <div className="text-center">
              <p className="text-sm text-gray-600 mb-2">Phone</p>
              <p className="font-semibold text-gray-900">+254 (0)7xx xxx xxx</p>
            </div>
            <div className="text-center">
              <p className="text-sm text-gray-600 mb-2">Office Hours</p>
              <p className="font-semibold text-gray-900">Weekdays 9AM - 5PM</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
