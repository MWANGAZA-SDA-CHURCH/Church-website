"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { 
  CreditCard, 
  Smartphone, 
  Building2, 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  Send, 
  ArrowRight,
  Shield,
  CheckCircle,
  Copy,
  QrCode
} from "lucide-react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"


export default function GivingPage() {
  const [selectedMethod, setSelectedMethod] = useState("mpesa")
  const [amount, setAmount] = useState("")
  const [copied, setCopied] = useState(false)

  const tithesPaybill = "951701"
const developmentPaybill = "951727"
const developmentAccount = "GROUP NO. / VISITOR"
  const churchAccount = "0123456789"
  const bankName = "I&M Bank"
  const bankBranch = "Nairobi Branch"

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gradient-to-br from-teal-50 via-emerald-50/30 to-cyan-50 relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-30">
            <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-teal-200/40 to-transparent rounded-full blur-3xl"></div>
            <div className="absolute top-1/4 right-0 w-80 h-80 bg-gradient-to-bl from-emerald-200/40 to-transparent rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-1/3 w-72 h-72 bg-gradient-to-tr from-cyan-200/40 to-transparent rounded-full blur-3xl"></div>
            <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-gradient-to-tl from-teal-300/30 to-transparent rounded-full blur-3xl"></div>
          </div>
          <div 
            className="absolute inset-0 opacity-40"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2314b8a6' fill-opacity='0.03'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
            }}
          ></div>
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden z-10">
          {/* Hero Background */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-r from-teal-600/20 to-transparent"></div>
            <div className="absolute bottom-0 right-0 w-1/2 h-full bg-gradient-to-l from-teal-500/20 to-transparent"></div>
            <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-teal-400/20 rounded-full blur-3xl"></div>
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-teal-300/20 rounded-full blur-3xl"></div>
          </div>
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-teal-500 to-teal-700 shadow-2xl shadow-teal-600/50 mb-8 relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
                <Shield className="h-12 w-12 text-white relative z-10 group-hover:scale-110 transition-transform duration-300" />
              </div>
              <h1 className="font-serif text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Secure Giving
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 font-medium mb-8 max-w-4xl mx-auto">
                Your generosity enables our mission to spread hope and transform lives
              </p>
            </div>
          </div>
        </section>

        {/* Payment Details */}
        <section className="py-16 relative z-10">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* M-PESA Payment Card */}
              <Card className="max-w-4xl mx-auto border-0 shadow-2xl bg-gradient-to-br from-green-50 to-emerald-50/30">
                <CardContent className="p-6">
                  <div className="text-center mb-6">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-green-500 to-emerald-600 shadow-2xl shadow-green-500/30 mb-6 relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent"></div>
                      <Smartphone className="h-10 w-10 text-white relative z-10" />
                    </div>
                    <h2 className="font-serif text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                      M-PESA Payment
                    </h2>
                    <p className="text-gray-600 mb-6">
                      Quick, secure, and convenient mobile money transfer
                    </p>
                  </div>

                  <div className="space-y-4">
                    {/* Tithes & Offerings and Church Development */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {/* Tithes & Offerings */}
                      <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 border border-green-200">
                        <div className="flex flex-col items-center">
                          <label className="text-sm font-medium text-gray-700 mb-2">Tithes & Offerings</label>
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => copyToClipboard(tithesPaybill)}
                            className="border-green-300 text-green-700 hover:bg-green-50 mb-3"
                          >
                            {copied ? <CheckCircle className="h-4 w-4 mr-1" /> : <Copy className="h-4 w-4 mr-1" />}
                            {copied ? "Copied!" : "Copy"}
                          </Button>
                          <div className="flex items-center gap-3 p-3 bg-green-100 rounded-lg w-full">
                            <QrCode className="h-8 w-8 text-green-600" />
                            <div>
                              <p className="font-mono text-xl font-bold text-green-700">{tithesPaybill}</p>
                              <p className="text-sm text-green-600">Scan to pay</p>
                            </div>
                          </div>
                          <div className="mt-3 p-3 bg-green-50 rounded-lg border border-green-200 w-full">
                            <p className="text-xs text-green-700 font-medium">Account No: GROUP NO. / VISITOR</p>
                            <p className="text-xs text-green-600">For: TITH/COMB/UPKEEP/CAMP/ETC</p>
                          </div>
                        </div>
                      </div>

                      {/* Church Development */}
                      <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 border border-blue-200">
                        <div className="flex flex-col items-center">
                          <label className="text-sm font-medium text-gray-700 mb-2">Church Development</label>
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => copyToClipboard(developmentPaybill)}
                            className="border-blue-300 text-blue-700 hover:bg-blue-50 mb-3"
                          >
                            {copied ? <CheckCircle className="h-4 w-4 mr-1" /> : <Copy className="h-4 w-4 mr-1" />}
                            {copied ? "Copied!" : "Copy"}
                          </Button>
                          <div className="flex items-center gap-3 p-3 bg-blue-100 rounded-lg w-full">
                            <QrCode className="h-8 w-8 text-blue-600" />
                            <div>
                              <p className="font-mono text-xl font-bold text-blue-700">{developmentPaybill}</p>
                              <p className="text-sm text-blue-600">Scan to pay</p>
                            </div>
                          </div>
                          <div className="mt-3 p-3 bg-blue-50 rounded-lg border border-blue-200 w-full">
                            <p className="text-xs text-blue-700 font-medium">Account No: GROUP NO. / VISITOR</p>
                            <p className="text-xs text-blue-600">For: Church Development</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="p-3 bg-green-50 rounded-lg border border-green-200">
                      <p className="text-xs text-green-700 font-medium">Business Name</p>
                      <p className="font-semibold text-gray-900">Mwangaza SDA Church</p>
                    </div>
                  </div>

                  <div className="bg-blue-50 rounded-xl p-4 border border-blue-200 mt-4">
                    <h3 className="font-semibold text-blue-800 mb-3 flex items-center gap-2">
                      <Smartphone className="h-5 w-5" />
                      How to Pay via M-PESA
                    </h3>
                    <ol className="space-y-2 text-sm text-blue-700">
                      <li className="flex items-start gap-3">
                        <span className="w-6 h-6 rounded-full bg-blue-200 text-blue-700 text-sm font-bold flex items-center justify-center flex-shrink-0 mt-0.5">1</span>
                        <span>Go to M-PESA menu on your phone</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="w-6 h-6 rounded-full bg-blue-200 text-blue-700 text-sm font-bold flex items-center justify-center flex-shrink-0 mt-0.5">2</span>
                        <span>Select "Lipa na M-PESA"</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="w-6 h-6 rounded-full bg-blue-200 text-blue-700 text-sm font-bold flex items-center justify-center flex-shrink-0 mt-0.5">3</span>
                        <span>Choose "Pay Bill"</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="w-6 h-6 rounded-full bg-blue-200 text-blue-700 text-sm font-bold flex items-center justify-center flex-shrink-0 mt-0.5">4</span>
                        <span>Enter our Paybill: <span className="font-mono font-bold">{tithesPaybill}</span></span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="w-6 h-6 rounded-full bg-blue-200 text-blue-700 text-sm font-bold flex items-center justify-center flex-shrink-0 mt-0.5">5</span>
                        <span>Enter amount and confirm</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="w-6 h-6 rounded-full bg-blue-200 text-blue-700 text-sm font-bold flex items-center justify-center flex-shrink-0 mt-0.5">6</span>
                        <span>Enter your M-PESA PIN to complete</span>
                      </li>
                    </ol>
                  </div>

                  <div className="mt-4 p-4 bg-yellow-50 rounded-xl border border-yellow-200">
                    <h3 className="font-semibold text-yellow-800 mb-3 flex items-center gap-2">
                      <Smartphone className="h-5 w-5" />
                      Important Payment Notice
                    </h3>
                    <p className="text-sm text-yellow-700 leading-relaxed">
                      Please complete your M-PESA payment manually using steps above. Our system currently doesn't support automatic STK push payments. Copy the paybill number and follow the M-PESA menu instructions to complete your donation.
                    </p>
                  </div>
                </CardContent>
              </Card>

            {/* Support & Contact Form */}
            <div className="mt-12">
              <Card className="max-w-4xl mx-auto border-0 shadow-2xl bg-gradient-to-br from-teal-50 to-blue-50/30">
                <CardContent className="p-8">
                  <div className="text-center mb-8">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-teal-500 to-teal-700 shadow-2xl shadow-teal-600/30 mb-6 relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent"></div>
                      <Mail className="h-10 w-10 text-white relative z-10" />
                    </div>
                    <h2 className="font-serif text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                      Need Support or Have Questions?
                    </h2>
                    <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
                      We're here to help! Whether you need assistance with giving, have prayer requests, or want to share ideas for our church community.
                    </p>
                  </div>

                  <form className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                        <input
                          type="text"
                          placeholder="John Doe"
                          className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent bg-white"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                        <input
                          type="email"
                          placeholder="john@example.com"
                          className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent bg-white"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                      <input
                        type="tel"
                        placeholder="+254 700 000 000"
                        className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent bg-white"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Subject</label>
                      <select className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent bg-white">
                        <option value="">Select a topic</option>
                        <option value="giving">Giving Support</option>
                        <option value="prayer">Prayer Request</option>
                        <option value="volunteer">Volunteer Interest</option>
                        <option value="feedback">General Feedback</option>
                        <option value="suggestion">Church Suggestion</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                      <textarea
                        rows={5}
                        placeholder="Share your thoughts, prayer requests, or ways you'd like to support our church..."
                        className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent bg-white resize-none"
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <Button
                        type="submit"
                        className="w-full bg-gradient-to-r from-teal-600 to-teal-700 text-white hover:from-teal-700 hover:to-teal-800 transition-all duration-300 font-semibold py-3"
                      >
                        <Send className="h-4 w-4 mr-2" />
                        Send Message
                      </Button>
                      <Button
                        type="button"
                        variant="outline"
                        className="w-full border-teal-200 text-teal-700 hover:bg-teal-50 transition-all duration-300 font-semibold py-3"
                      >
                        <Phone className="h-4 w-4 mr-2" />
                        Call Us Instead
                      </Button>
                    </div>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        </main>
      <Footer />
    </>
  )
}
