"use client"

import { useState } from "react"
import { HelpCircle, Users, Heart, MessageCircle, Send, ArrowRight, X } from "lucide-react"
import { cn } from "@/lib/utils"

export function HelpFloating() {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedService, setSelectedService] = useState<string | null>(null)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    currentChurch: '',
    message: '',
    requestType: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    // Handle form submission
    setFormData({
      name: '',
      email: '',
      phone: '',
      currentChurch: '',
      message: '',
      requestType: ''
    })
    setSelectedService(null)
    setIsOpen(false)
  }

  const services = [
    {
      id: 'transfer',
      title: 'Membership Transfer',
      description: 'Transfer your membership to Mwangaza SDA Church',
      icon: Users,
      color: 'from-blue-500 to-blue-600'
    },
    {
      id: 'prayer',
      title: 'Prayer Request',
      description: 'Share your prayer requests with our team',
      icon: Heart,
      color: 'from-pink-500 to-pink-600'
    },
    {
      id: 'counseling',
      title: 'Counseling Support',
      description: 'Get confidential counseling and guidance',
      icon: MessageCircle,
      color: 'from-purple-500 to-purple-600'
    }
  ]

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-20 right-6 z-50 w-16 h-16 rounded-full bg-gradient-to-r from-[#0d9488] to-[#06b6d4] hover:from-[#014d4e] hover:to-[#0d9488] text-white shadow-lg hover:shadow-xl transition-all duration-200 flex items-center justify-center group"
        aria-label="Get help"
        title="Get Help & Support"
      >
        <HelpCircle className="h-7 w-7 group-hover:scale-110 transition-transform" />
      </button>

      {/* Slide-out Panel */}
      <div className={cn(
        "fixed inset-y-0 right-0 z-50 w-full max-w-2xl bg-white shadow-2xl transform transition-transform duration-300 ease-in-out",
        isOpen ? "translate-x-0" : "translate-x-full"
      )}>
        {/* Overlay */}
        {isOpen && (
          <div 
            className="fixed inset-0 bg-black/50 z-40"
            onClick={() => setIsOpen(false)}
          />
        )}

        {/* Panel Content */}
        <div className="relative h-full flex flex-col bg-white">
          {/* Header */}
          <div className="bg-gradient-to-r from-[#0d9488] to-[#06b6d4] text-white p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center">
                  <HelpCircle className="h-6 w-6" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold">How Can We Help?</h2>
                  <p className="text-white/80">Choose a service to get started</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="w-10 h-10 rounded-lg bg-white/20 hover:bg-white/30 flex items-center justify-center transition-colors"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
          </div>

          {/* Content */}
          <div className="flex-1 overflow-y-auto">
            {!selectedService ? (
              <div className="p-6">
                {/* Service Options */}
                <div className="space-y-4">
                  {services.map((service) => {
                    const Icon = service.icon
                    return (
                      <div
                        key={service.id}
                        onClick={() => setSelectedService(service.id)}
                        className="group cursor-pointer bg-white border border-gray-200 rounded-xl p-6 hover:border-[#0d9488] hover:shadow-lg transition-all duration-300"
                      >
                        <div className="flex items-center gap-4">
                          <div className={cn(
                            "w-12 h-12 rounded-xl bg-gradient-to-br flex items-center justify-center text-white group-hover:scale-105 transition-transform",
                            service.color
                          )}>
                            <Icon className="h-6 w-6" />
                          </div>
                          <div className="flex-1">
                            <h3 className="text-lg font-semibold text-gray-900 mb-1">{service.title}</h3>
                            <p className="text-gray-600 text-sm">{service.description}</p>
                          </div>
                          <ArrowRight className="h-5 w-5 text-gray-400 group-hover:text-[#0d9488] transition-colors" />
                        </div>
                      </div>
                    )
                  })}
                </div>

                {/* Contact Information */}
                <div className="mt-8 bg-gray-50 rounded-xl p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-lg bg-gray-200 flex items-center justify-center">
                      <HelpCircle className="h-5 w-5 text-gray-600" />
                    </div>
                    <h3 className="font-semibold text-gray-900">Need Immediate Assistance?</h3>
                  </div>
                  <p className="text-gray-600 text-sm">
                    Call us at <span className="font-semibold text-gray-900">+254 700 000 000</span> or email <span className="font-semibold text-gray-900">info@mwangazasda.org</span>
                  </p>
                </div>
              </div>
            ) : (
              <div className="p-6">
                {/* Back Button */}
                <button
                  onClick={() => setSelectedService(null)}
                  className="mb-6 flex items-center text-gray-600 hover:text-gray-900 transition-colors"
                >
                  <ArrowRight className="h-4 w-4 mr-2 rotate-180" />
                  <span className="font-medium">Back to Services</span>
                </button>

                {/* Service Forms */}
                {selectedService === 'transfer' && (
                  <div className="space-y-6">
                    <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white p-6 rounded-xl">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center">
                          <Users className="h-6 w-6" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold">Membership Transfer</h3>
                          <p className="text-white/80">Fill out the form below to get started</p>
                        </div>
                      </div>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-2">Full Name *</label>
                          <input
                            type="text"
                            value={formData.name}
                            onChange={(e) => setFormData({...formData, name: e.target.value})}
                            placeholder="Enter your full name"
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            required
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-2">Email Address *</label>
                          <input
                            type="email"
                            value={formData.email}
                            onChange={(e) => setFormData({...formData, email: e.target.value})}
                            placeholder="your.email@example.com"
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            required
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-2">Phone Number *</label>
                          <input
                            type="tel"
                            value={formData.phone}
                            onChange={(e) => setFormData({...formData, phone: e.target.value})}
                            placeholder="+254 700 000 000"
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            required
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-2">Current Church *</label>
                          <input
                            type="text"
                            value={formData.currentChurch}
                            onChange={(e) => setFormData({...formData, currentChurch: e.target.value})}
                            placeholder="Name of your current church"
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            required
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">Additional Information</label>
                        <textarea
                          value={formData.message}
                          onChange={(e) => setFormData({...formData, message: e.target.value})}
                          placeholder="Any additional information about your transfer request..."
                          rows={4}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                        />
                      </div>

                      <button
                        type="submit"
                        className="w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold py-4 rounded-lg hover:from-blue-600 hover:to-blue-700 transition-all duration-300 flex items-center justify-center gap-2"
                      >
                        <Send className="h-5 w-5" />
                        <span>Submit Transfer Request</span>
                      </button>
                    </form>
                  </div>
                )}

                {selectedService === 'prayer' && (
                  <div className="space-y-6">
                    <div className="bg-gradient-to-r from-pink-500 to-pink-600 text-white p-6 rounded-xl">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center">
                          <Heart className="h-6 w-6" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold">Prayer Request</h3>
                          <p className="text-white/80">Share your prayer requests with our team</p>
                        </div>
                      </div>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-2">Your Name *</label>
                          <input
                            type="text"
                            value={formData.name}
                            onChange={(e) => setFormData({...formData, name: e.target.value})}
                            placeholder="Enter your name"
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                            required
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-2">Email Address</label>
                          <input
                            type="email"
                            value={formData.email}
                            onChange={(e) => setFormData({...formData, email: e.target.value})}
                            placeholder="your.email@example.com (optional)"
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">Prayer Category</label>
                        <select
                          value={formData.requestType}
                          onChange={(e) => setFormData({...formData, requestType: e.target.value})}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                        >
                          <option value="">Select a category</option>
                          <option value="health">Health & Healing</option>
                          <option value="family">Family & Relationships</option>
                          <option value="work">Work & Career</option>
                          <option value="spiritual">Spiritual Growth</option>
                          <option value="financial">Financial Needs</option>
                          <option value="other">Other</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">Prayer Request *</label>
                        <textarea
                          value={formData.message}
                          onChange={(e) => setFormData({...formData, message: e.target.value})}
                          placeholder="Share your prayer request..."
                          rows={4}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent resize-none"
                          required
                        />
                      </div>

                      <button
                        type="submit"
                        className="w-full bg-gradient-to-r from-pink-500 to-pink-600 text-white font-semibold py-4 rounded-lg hover:from-pink-600 hover:to-pink-700 transition-all duration-300 flex items-center justify-center gap-2"
                      >
                        <Heart className="h-5 w-5" />
                        <span>Submit Prayer Request</span>
                      </button>
                    </form>
                  </div>
                )}

                {selectedService === 'counseling' && (
                  <div className="space-y-6">
                    <div className="bg-gradient-to-r from-purple-500 to-purple-600 text-white p-6 rounded-xl">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center">
                          <MessageCircle className="h-6 w-6" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold">Counseling Support</h3>
                          <p className="text-white/80">Request confidential counseling support</p>
                        </div>
                      </div>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-2">Your Name *</label>
                          <input
                            type="text"
                            value={formData.name}
                            onChange={(e) => setFormData({...formData, name: e.target.value})}
                            placeholder="Enter your name"
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                            required
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-2">Phone Number *</label>
                          <input
                            type="tel"
                            value={formData.phone}
                            onChange={(e) => setFormData({...formData, phone: e.target.value})}
                            placeholder="+254 700 000 000"
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                            required
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">Email Address</label>
                        <input
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData({...formData, email: e.target.value})}
                          placeholder="your.email@example.com (optional)"
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">Counseling Type</label>
                        <select
                          value={formData.requestType}
                          onChange={(e) => setFormData({...formData, requestType: e.target.value})}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                        >
                          <option value="">Select counseling type</option>
                          <option value="spiritual">Spiritual Guidance</option>
                          <option value="marital">Marital Counseling</option>
                          <option value="youth">Youth Counseling</option>
                          <option value="grief">Grief & Loss</option>
                          <option value="family">Family Issues</option>
                          <option value="other">Other</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">How can we help you? *</label>
                        <textarea
                          value={formData.message}
                          onChange={(e) => setFormData({...formData, message: e.target.value})}
                          placeholder="Please share what you'd like to discuss in counseling..."
                          rows={4}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent resize-none"
                          required
                        />
                      </div>

                      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                        <div className="flex items-start gap-3">
                          <div className="w-6 h-6 rounded-lg bg-blue-500 flex items-center justify-center text-white flex-shrink-0 mt-0.5">
                            <Heart className="h-3 w-3" />
                          </div>
                          <div>
                            <p className="text-sm font-semibold text-blue-800 mb-1">Confidentiality Assured</p>
                            <p className="text-xs text-blue-700 leading-relaxed">
                              All counseling sessions are strictly confidential. Our pastoral team is committed to providing a safe and supportive environment.
                            </p>
                          </div>
                        </div>
                      </div>

                      <button
                        type="submit"
                        className="w-full bg-gradient-to-r from-purple-500 to-purple-600 text-white font-semibold py-4 rounded-lg hover:from-purple-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center gap-2"
                      >
                        <MessageCircle className="h-5 w-5" />
                        <span>Request Counseling</span>
                      </button>
                    </form>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  )
}
