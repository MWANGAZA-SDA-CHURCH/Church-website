import { Mail, Phone, MapPin, Clock, Send } from "lucide-react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

export const metadata = {
  title: "Contact Us | Mwangaza SDA Church",
  description: "Get in touch with Mwangaza SDA Church. We'd love to hear from you.",
}

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="pt-20 pb-12 bg-gradient-to-b from-primary/10 to-transparent">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="font-serif text-5xl md:text-6xl font-bold text-foreground mb-4 text-balance">
                Get In Touch
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
                Have questions? We'd love to hear from you. Reach out to us today.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Information & Form */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Contact Info */}
              <div className="lg:col-span-1">
                <h2 className="font-serif text-2xl font-bold text-foreground mb-8">Contact Information</h2>

                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="p-3 rounded-lg bg-primary/10 h-fit">
                      <MapPin className="h-6 w-6 text-primary flex-shrink-0" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Address</h3>
                      <p className="text-muted-foreground">P.O Box 7302-00300, Nairobi, Kenya, PWG6+M6W, Mwangaza Rd, Nairobi, Kenya</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="p-3 rounded-lg bg-primary/10 h-fit">
                      <Phone className="h-6 w-6 text-primary flex-shrink-0" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Phone</h3>
                      <p className="text-muted-foreground">+254 700 000 000</p>
                      <p className="text-muted-foreground">+254 140 353450</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="p-3 rounded-lg bg-primary/10 h-fit">
                      <Mail className="h-6 w-6 text-primary flex-shrink-0" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Email</h3>
                      <p className="text-muted-foreground">info@mwangazasda.org</p>
                      <p className="text-muted-foreground"></p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="p-3 rounded-lg bg-primary/10 h-fit">
                      <Clock className="h-6 w-6 text-primary flex-shrink-0" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Office Hours</h3>
                      <p className="text-muted-foreground">Monday - Friday: 8:00 AM - 5:00 PM</p>
                      <p className="text-muted-foreground">Saturday - Sunday: By appointment</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div className="lg:col-span-2">
                <div className="bg-white rounded-xl shadow-sm border border-border p-8">
                  <h2 className="font-serif text-2xl font-bold text-foreground mb-6">Send Us a Message</h2>

                  <form className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">First Name</label>
                        <input
                          type="text"
                          placeholder="John"
                          className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:border-primary bg-white text-foreground placeholder-muted-foreground"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">Last Name</label>
                        <input
                          type="text"
                          placeholder="Doe"
                          className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:border-primary bg-white text-foreground placeholder-muted-foreground"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">Email Address</label>
                      <input
                        type="email"
                        placeholder="john@example.com"
                        className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:border-primary bg-white text-foreground placeholder-muted-foreground"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">Phone Number</label>
                      <input
                        type="tel"
                        placeholder="+254 700 000 000"
                        className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:border-primary bg-white text-foreground placeholder-muted-foreground"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">Subject</label>
                      <input
                        type="text"
                        placeholder="How can we help?"
                        className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:border-primary bg-white text-foreground placeholder-muted-foreground"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">Message</label>
                      <textarea
                        rows={5}
                        placeholder="Tell us more about your inquiry..."
                        className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:border-primary bg-white text-foreground placeholder-muted-foreground resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full py-3 px-6 bg-primary text-white font-semibold rounded-lg hover:bg-primary/90 transition-colors flex items-center justify-center gap-2"
                    >
                      <Send className="h-5 w-5" />
                      Send Message
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="py-16 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-serif text-3xl font-bold text-foreground mb-8 text-center">Visit Us</h2>
            <p className="text-center text-muted-foreground mb-6">PWG6+M6W, Mwangaza Rd, Nairobi, Kenya</p>
            <div className="rounded-xl overflow-hidden shadow-lg h-96">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.819!2d36.826!3d-1.286!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMcKwMTcnMDkuNiJTIDM2wrA0OSczMy42IkU!5e0!3m2!1sen!2ske!4v1700000000000!5m2!1sen!2ske&q=PWG6%2BM6W+Mwangaza+Rd+Nairobi+Kenya"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Mwangaza SDA Church Location"
              />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
