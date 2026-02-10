import Link from "next/link"
import { Calendar, MapPin, Clock } from "lucide-react"

const upcomingEvents = [
  {
    title: "Youth Prayer Outreach",
    date: "March 15, 2026",
    time: "6:00 PM - 9:00 PM",
    location: "Kamiti Maximum Prison",
    category: "Youth Ministry",
    image: "/aymp.jpeg",
  },
  {
    title: "Community Outreach Program",
    date: "March 22, 2026",
    time: "10:00 AM - 2:00 PM",
    location: "Social Hall",
    category: "Outreach",
    image: "/publishing.jpg",
  },
  {
    title: "Discover Bible School Training",
    date: "March 29, 2026",
    time: "2:00 PM - 5:00 PM",
    location: "Old Sanctuary",
    category: "Training",
    image: "/vop.jpg",
  },
]

export function EventsPreview() {
  return (
    <section id="events" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-12 gap-4">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-3">Upcoming Events</h2>
            <p className="text-xl text-gray-600">Join us for these special programs and activities</p>
          </div>
          <Link
            href="/events"
            className="inline-flex items-center gap-2 px-6 py-3 border-2 border-teal-600 text-teal-600 font-semibold rounded-lg hover:bg-teal-600 hover:text-white transition-all duration-300"
          >
            View All Events
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {upcomingEvents.map((event, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="aspect-[16/10] overflow-hidden relative">
                <img
                  src={event.image || "/placeholder.svg"}
                  alt={event.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-teal-600 text-white text-xs font-bold rounded-full">
                    {event.category}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-4 text-gray-900 group-hover:text-teal-600 transition-colors">
                  {event.title}
                </h3>
                <div className="space-y-3 text-gray-600">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-teal-50 flex items-center justify-center flex-shrink-0">
                      <Calendar className="h-5 w-5 text-teal-600" />
                    </div>
                    <span className="font-medium">{event.date}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-teal-50 flex items-center justify-center flex-shrink-0">
                      <Clock className="h-5 w-5 text-teal-600" />
                    </div>
                    <span className="font-medium">{event.time}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-teal-50 flex items-center justify-center flex-shrink-0">
                      <MapPin className="h-5 w-5 text-teal-600" />
                    </div>
                    <span className="font-medium">{event.location}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
