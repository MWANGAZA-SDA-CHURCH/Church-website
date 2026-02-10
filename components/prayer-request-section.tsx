"use client"

import { useState } from "react"
import { Button } from "./ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"
import { HandHeart, Plus } from "lucide-react"
import { PrayerRequestForm } from "./prayer-request-form"

export function PrayerRequestSection() {
  const [isFormOpen, setIsFormOpen] = useState(false)

  return (
    <section id="prayer-requests" className="py-20 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-teal-50 mb-6">
            <HandHeart className="h-8 w-8 text-teal-600" />
          </div>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-gray-900 mb-4">Prayer Requests</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Share your prayer requests with our church community. We believe in the power of prayer.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Prayer Request Card 1 */}
          <Card className="h-full flex flex-col border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="h-2 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-t-lg" />
            <CardHeader>
              <CardTitle className="text-xl text-teal-800">Prayer for Healing</CardTitle>
            </CardHeader>
            <CardContent className="flex-1">
              <p className="text-gray-600 mb-4">
                "Please pray for my mother who is recovering from surgery. We believe in God's healing power."
              </p>
              <div className="text-sm text-gray-500">
                <p>Submitted by: <span className="font-medium text-gray-700">Anonymous</span></p>
                <p>2 days ago</p>
              </div>
            </CardContent>
          </Card>

          {/* Prayer Request Card 2 */}
          <Card className="h-full flex flex-col border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="h-2 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-t-lg" />
            <CardHeader>
              <CardTitle className="text-xl text-teal-800">Family Guidance</CardTitle>
            </CardHeader>
            <CardContent className="flex-1">
              <p className="text-gray-600 mb-4">
                "Our family is facing important decisions. We ask for wisdom and guidance from above."
              </p>
              <div className="text-sm text-gray-500">
                <p>Submitted by: <span className="font-medium text-gray-700">Sarah M.</span></p>
                <p>1 week ago</p>
              </div>
            </CardContent>
          </Card>

          {/* Add Prayer Request Card */}
          <Card className="h-full flex flex-col border-2 border-dashed border-gray-300 hover:border-teal-400 transition-colors duration-300">
            <CardContent className="flex-1 flex flex-col items-center justify-center p-8 text-center">
              <div className="w-16 h-16 rounded-full bg-teal-50 flex items-center justify-center mb-4">
                <Plus className="h-8 w-8 text-teal-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Share Your Prayer Request</h3>
              <p className="text-gray-500 mb-6">Let us pray with you during your time of need.</p>
              <Button 
                onClick={() => setIsFormOpen(true)}
                variant="outline" 
                className="border-teal-500 text-teal-600 hover:bg-teal-50 hover:border-teal-600 hover:text-teal-700"
              >
                Submit Request
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Prayer Request Form Modal */}
        {isFormOpen && <PrayerRequestForm onClose={() => setIsFormOpen(false)} />}
      </div>
    </section>
  )
}
