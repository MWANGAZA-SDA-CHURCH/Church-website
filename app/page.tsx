import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import { Calendar, Users, BookOpen, Heart, ArrowRight, Clock } from "lucide-react"
import { HeroCarousel } from "@/components/hero-carousel"
import { EventsPreview } from "@/components/events-preview"
import { PastorMessage } from "@/components/pastor-message"
import { GivingSection } from "@/components/giving-section"
import { MemberSearchFloating } from "@/components/member-search-floating"
import { AnnouncementsSection } from "@/components/announcements-section"

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1">
        <HeroCarousel />

        <PastorMessage />

        {/* Normal Sabbath Program & Service Times */}
        <section id="sabbath-program" className="py-20 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-teal-600 rounded-2xl flex items-center justify-center text-white shadow-lg shadow-teal-600/40">
                  <Clock className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.28em] text-teal-700 mb-1">
                    Sabbath Schedule
                  </p>
                  <h2 className="font-serif text-3xl md:text-4xl font-bold text-gray-900">
                    Normal Sabbath Program
                  </h2>
                  <p className="text-gray-600 max-w-xl mt-2">
                    A full-day worship experience from morning devotion to afternoon fellowship.
                  </p>
                </div>
              </div>
              <div className="bg-white rounded-2xl border border-teal-100 px-5 py-4 text-sm text-gray-800 shadow-sm max-w-xs">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-teal-700 mb-1">
                  Mid-week Vespers
                </p>
                <p className="font-semibold text-gray-900">Wednesday &amp; Friday</p>
                <p className="text-sm text-gray-600">6:30 PM – 7:30 PM</p>
              </div>
            </div>

            {/* At a glance summary */}
            <Card className="mb-10 border-teal-100 bg-white/70 backdrop-blur">
              <CardContent className="p-6 md:p-7">
                <div className="grid sm:grid-cols-3 gap-6 text-sm">
                  <div>
                    <p className="text-xs uppercase tracking-wide text-gray-500 mb-1">Morning</p>
                    <p className="font-semibold text-gray-900">Devotion &amp; Sabbath School</p>
                    <p className="text-xs text-gray-600 mt-1">8:00 AM – 10:45 AM</p>
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-wide text-gray-500 mb-1">Midday</p>
                    <p className="font-semibold text-gray-900">Divine Service</p>
                    <p className="text-xs text-gray-600 mt-1">10:45 AM – 1:00 PM</p>
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-wide text-gray-500 mb-1">Afternoon</p>
                    <p className="font-semibold text-gray-900">AY / Bible Study &amp; Departments</p>
                    <p className="text-xs text-gray-600 mt-1">From 2:00 PM</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Detailed timeline */}
            <div className="grid lg:grid-cols-2 gap-10">
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex flex-col items-center">
                    <div className="w-3 h-3 rounded-full bg-teal-600 mt-1" />
                    <div className="w-px flex-1 bg-gradient-to-b from-teal-600/70 to-transparent" />
                  </div>
                  <Card className="flex-1 border-teal-100">
                    <CardContent className="p-6 space-y-3">
                      <div className="flex items-center justify-between gap-4">
                        <h3 className="font-semibold text-lg text-gray-900">Morning Devotion</h3>
                        <p className="text-xs font-medium text-teal-700 bg-teal-50 px-3 py-1 rounded-full">
                          8:00 – 8:20 AM
                        </p>
                      </div>
                      <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                        <li>Song Service – Choristers (8:00 – 8:10 AM)</li>
                        <li>Devotion (8:10 – 8:20 AM)</li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>

                <div className="flex gap-4">
                  <div className="flex flex-col items-center">
                    <div className="w-3 h-3 rounded-full bg-teal-600 mt-1" />
                    <div className="w-px flex-1 bg-gradient-to-b from-teal-600/70 to-transparent" />
                  </div>
                  <Card className="flex-1 border-teal-100">
                    <CardContent className="p-6 space-y-3">
                      <div className="flex items-center justify-between gap-4">
                        <h3 className="font-semibold text-lg text-gray-900">Sabbath School</h3>
                        <p className="text-xs font-medium text-teal-700 bg-teal-50 px-3 py-1 rounded-full">
                          8:20 – 10:45 AM
                        </p>
                      </div>
                      <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                        <li>Opening Prayer, Welcome, Mission Story</li>
                        <li>Special Item / Report</li>
                        <li>Lesson Discussion (in classes) – 9:00 – 9:55 AM</li>
                        <li>Lesson Introduction &amp; Congregational Singing – 9:55 – 10:00 AM</li>
                        <li>Song Service – Choristers – 10:00 – 10:30 AM</li>
                        <li>Announcements &amp; Promotions – 10:30 – 10:45 AM</li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </div>

              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex flex-col items-center">
                    <div className="w-3 h-3 rounded-full bg-teal-600 mt-1" />
                    <div className="w-px flex-1 bg-gradient-to-b from-teal-600/70 to-transparent" />
                  </div>
                  <Card className="flex-1 border-teal-100">
                    <CardContent className="p-6 space-y-3">
                      <div className="flex items-center justify-between gap-4">
                        <h3 className="font-semibold text-lg text-gray-900">Divine Service</h3>
                        <p className="text-xs font-medium text-teal-700 bg-teal-50 px-3 py-1 rounded-full">
                          10:45 AM – 1:00 PM
                        </p>
                      </div>
                      <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                        <li>Doxology &amp; Invocation</li>
                        <li>Welcome &amp; Introduction</li>
                        <li>Scripture Reading &amp; Hymn of Praise</li>
                        <li>Pastoral Prayer</li>
                        <li>Tithes &amp; Offering</li>
                        <li>Special Item &amp; Children’s Sermon</li>
                        <li>Sermon</li>
                        <li>Closing Hymn &amp; Benediction</li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>

                <div className="flex gap-4">
                  <div className="flex flex-col items-center">
                    <div className="w-3 h-3 rounded-full bg-teal-600 mt-1" />
                    <div className="w-px flex-1 bg-gradient-to-b from-teal-600/70 to-transparent" />
                  </div>
                  <Card className="flex-1 border-teal-100">
                    <CardContent className="p-6 space-y-3">
                      <div className="flex items-center justify-between gap-4">
                        <h3 className="font-semibold text-lg text-gray-900">Afternoon Program</h3>
                        <p className="text-xs font-medium text-teal-700 bg-teal-50 px-3 py-1 rounded-full">
                          From 2:00 PM
                        </p>
                      </div>
                      <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                        <li>Song Service – 2:00 – 2:30 PM</li>
                        <li>Bible Study – 2:30 – 4:00 PM</li>
                          <li>Departmental Programs – 4:30 – 5:30 PM</li>
                        
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>

        <EventsPreview />

        {/* Connect With Us – Features Grid */}
        <section id="connect" className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-gray-900 mb-4">Connect With Us</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto text-pretty">
                Discover the many ways you can be part of our church family
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 gradient-teal rounded-full flex items-center justify-center text-white mx-auto mb-4">
                    <Calendar className="h-6 w-6" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">Events</h3>
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                    Stay updated with our church activities and special programs
                  </p>
                  <Link href="/events">
                    <Button variant="ghost" size="sm" className="text-teal-600 hover:text-teal-700">
                      View All <ArrowRight className="ml-1 h-4 w-4" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 gradient-teal rounded-full flex items-center justify-center text-white mx-auto mb-4">
                    <Users className="h-6 w-6" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">Ministries</h3>
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                    Get involved in ministries that match your passions and gifts
                  </p>
                  <Link href="/ministries">
                    <Button variant="ghost" size="sm" className="text-teal-600 hover:text-teal-700">
                      Explore <ArrowRight className="ml-1 h-4 w-4" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 gradient-teal rounded-full flex items-center justify-center text-white mx-auto mb-4">
                    <BookOpen className="h-6 w-6" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">Sermons</h3>
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                    Watch or listen to inspiring messages from our pastors
                  </p>
                  <Link href="/sermons">
                    <Button variant="ghost" size="sm" className="text-teal-600 hover:text-teal-700">
                      Listen <ArrowRight className="ml-1 h-4 w-4" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 gradient-teal rounded-full flex items-center justify-center text-white mx-auto mb-4">
                    <Heart className="h-6 w-6" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">Membership</h3>
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                    Search for members or manage your church transfer
                  </p>
                  <Link href="/members/search">
                    <Button variant="ghost" size="sm" className="text-teal-600 hover:text-teal-700">
                      Search <ArrowRight className="ml-1 h-4 w-4" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Announcements Section */}
        <AnnouncementsSection />

        <GivingSection />

        {/* New Visitor CTA Section */}
        <section id="new-here" className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-gray-900 mb-4">New to Mwangaza SDA?</h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed text-pretty">
              We would love to meet you! Join us for worship this Sabbath or reach out to learn more about our church
              family.
            </p>
            <Link href="/contact">
              <Button size="lg" className="gradient-teal text-white">
                Get in Touch
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
      <MemberSearchFloating />
    </div>
  )
}
