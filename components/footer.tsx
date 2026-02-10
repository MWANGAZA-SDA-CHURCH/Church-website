import Link from "next/link"
import { Mail, Phone, MapPin } from "lucide-react"
import { HugeiconsIcon } from "@hugeicons/react"
import { FacebookIcon, YoutubeIcon, TiktokIcon, TwitterIcon, NewTwitterIcon } from "@hugeicons/core-free-icons"

export function Footer() {
  return (
    <footer className="bg-[#014d4e] text-white border-t border-[#0d9488]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <div className="mb-4">
              <img
                src="/WhiteLogo.png"
                alt="Mwangaza SDA Church"
                className="h-12 w-auto"
                style={{ objectFit: 'contain' }}
              />
            </div>
            <p className="text-sm opacity-90 leading-relaxed">
              Spreading light and hope through worship, fellowship, and service to our community.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-serif font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-sm opacity-80 hover:opacity-100 transition-opacity">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/ministries" className="text-sm opacity-80 hover:opacity-100 transition-opacity">
                  Departments
                </Link>
              </li>
              <li>
                <Link href="/resources" className="text-sm opacity-80 hover:opacity-100 transition-opacity">
                  Resources
                </Link>
              </li>
              <li>
                <Link href="/events" className="text-sm opacity-80 hover:opacity-100 transition-opacity">
                  Events
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-serif font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li className="flex items-start space-x-2 text-sm opacity-90">
                <MapPin className="h-4 w-4 mt-1 flex-shrink-0" />
                <span>Spine Road, Kayole/Komarocks Phase 3 Opposite Equity Bank, Nairobi, Kenya</span>
              </li>
              <li className="flex items-center space-x-2 text-sm opacity-90">
                <Phone className="h-4 w-4 flex-shrink-0" />
                <span>+254 714 664 702</span>
              </li>
              <li className="flex items-center space-x-2 text-sm opacity-90">
                <Mail className="h-4 w-4 flex-shrink-0" />
                <span>info@sdachurchmwangaza.org</span>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-white font-serif font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-3">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full flex items-center justify-center opacity-80 hover:opacity-100 transition-opacity hover:bg-blue-600"
                style={{ backgroundColor: "rgba(255, 255, 255, 0.1)" }}
                aria-label="Facebook"
              >
                <HugeiconsIcon icon={FacebookIcon} size={20} color="currentColor" strokeWidth={1.5} />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full flex items-center justify-center opacity-80 hover:opacity-100 transition-opacity hover:bg-red-600"
                style={{ backgroundColor: "rgba(255, 255, 255, 0.1)" }}
                aria-label="YouTube"
              >
                <HugeiconsIcon icon={YoutubeIcon} size={20} color="currentColor" strokeWidth={1.5} />
              </a>
              <a
                href="https://tiktok.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full flex items-center justify-center opacity-80 hover:opacity-100 transition-opacity hover:bg-black"
                style={{ backgroundColor: "rgba(255, 255, 255, 0.1)" }}
                aria-label="TikTok"
              >
                <HugeiconsIcon icon={TiktokIcon} size={20} color="currentColor" strokeWidth={1.5} />
              </a>
              <a
                href="https://x.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full flex items-center justify-center opacity-80 hover:opacity-100 transition-opacity hover:bg-black"
                style={{ backgroundColor: "rgba(255, 255, 255, 0.1)" }}
                aria-label="X (formerly Twitter)"
              >
                <HugeiconsIcon icon={NewTwitterIcon} size={20} color="currentColor" strokeWidth={1.5} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-[#0d9488]/30 mt-8 pt-8 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Mwangaza Seventh-day Adventist Church. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
