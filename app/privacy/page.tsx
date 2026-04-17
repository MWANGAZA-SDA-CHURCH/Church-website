import { Metadata } from "next"
import { Card, CardContent } from "@/components/ui/card"
import { Shield, Cookie, Users, Lock, Phone, Mail, MapPin, Eye, AlertCircle, HelpCircle, FileText, Database, UserCheck, Globe } from "lucide-react"

export const metadata: Metadata = {
  title: "Privacy Policy | Seventh Day Adventist Church Mwangaza",
  description: "Privacy policy for Seventh Day Adventist Church Mwangaza, compliant with Kenyan Data Protection Act, 2019.",
}

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-teal-50/20 to-cyan-50/30">
      {/* Decorative Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-teal-200/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-200/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-teal-100/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Enhanced Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-teal-500 via-cyan-500 to-teal-600 shadow-2xl shadow-teal-500/30 mb-8 relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent"></div>
            <Shield className="h-10 w-10 text-white relative z-10 group-hover:scale-110 transition-transform duration-300" />
          </div>
          <h1 className="font-serif text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 via-teal-800 to-gray-900 bg-clip-text text-transparent mb-6">
            Privacy Policy
          </h1>
          <p className="text-xl text-gray-600 font-medium mb-6">
            Seventh Day Adventist Church Mwangaza
          </p>
          <div className="inline-flex items-center justify-center gap-3 px-6 py-3 bg-gradient-to-r from-teal-50 to-cyan-50 border border-teal-200 rounded-full shadow-sm">
            <FileText className="h-5 w-5 text-teal-600" />
            <span className="text-sm font-semibold text-teal-700">Last updated: April 17, 2026</span>
          </div>
        </div>

        {/* Introduction */}
        <Card className="mb-12 border-0 shadow-xl bg-gradient-to-br from-white to-teal-50/30 backdrop-blur-sm relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-teal-100/50 to-transparent rounded-full blur-2xl"></div>
          <CardContent className="p-8 relative">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-teal-500 to-cyan-500 flex items-center justify-center shadow-lg">
                <UserCheck className="h-6 w-6 text-white" />
              </div>
              <div className="flex-1">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Your Privacy Matters to Us</h2>
                <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                  Seventh Day Adventist Church Mwangaza ("the Church", "we", or "us") is a Christian, nonprofit organization committed to excellence, integrity, and your privacy. This Policy is provided to inform you of the ways the Church collects, uses, discloses and otherwise processes or handles your personal information. By providing your information, you agree to your personal information being processed in accordance with this Privacy Policy, as amended from time to time.
                </p>
                <div className="bg-gradient-to-r from-teal-50 to-cyan-50 border-l-4 border-teal-500 p-4 rounded-lg">
                  <p className="text-gray-700 leading-relaxed font-medium">
                    This privacy policy is compliant with the Kenyan Data Protection Act, 2019, and we are registered as a Data Controller with the Office of the Data Protection Commissioner (ODPC) of Kenya.
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Policy Sections */}
        <div className="space-y-8">
          {/* Information Collection and Use */}
          <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm hover:shadow-xl transition-all duration-300 group">
            <CardContent className="p-8">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-gradient-to-br from-teal-500 to-cyan-500 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <Eye className="h-7 w-7 text-white" />
                </div>
                <div className="flex-1">
                  <h2 className="font-serif text-2xl font-bold text-gray-900 mb-6">Information Collection and Use</h2>
                  
                  <div className="space-y-6">
                    <div className="bg-gradient-to-r from-teal-50 to-cyan-50 p-6 rounded-xl border border-teal-100">
                      <h3 className="font-semibold text-lg text-teal-800 mb-3">Automatic Data Collection</h3>
                      <p className="text-gray-700 leading-relaxed">
                        The Church collects some information that cannot be traced back to a specific individual (when that person is not signed in with an account). For example, our web servers automatically record the IP address (the general location where the user is logged) of each visitor to our website and tracks how many people visit the Website. This information is used to administer and specialize the Website more effectively and gain general information about the backgrounds and sources of visitors.
                      </p>
                    </div>

                    <div className="bg-gradient-to-r from-cyan-50 to-teal-50 p-6 rounded-xl border border-cyan-100">
                      <h3 className="font-semibold text-lg text-cyan-800 mb-3">Contact Information Collection</h3>
                      <p className="text-gray-700 leading-relaxed">
                        This policy also applies to information we collect when you contact us by telephone, mail, email, mobile application, text, social media, or advertising on third party websites that redirect you to our website.
                      </p>
                    </div>

                    <div className="bg-gradient-to-r from-teal-50 to-cyan-50 p-6 rounded-xl border border-teal-100">
                      <h3 className="font-semibold text-lg text-teal-800 mb-3">Personal Information</h3>
                      <p className="text-gray-700 leading-relaxed mb-4">
                        The Church may also ask you to provide personal information that identifies you. We require this information when you create an account, submit an inquiry to us, become a member, make a donation, or engage with us for promotional purposes.
                      </p>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {[
                          "Name and postal address",
                          "Phone number and email address",
                          "Date of birth and marital status",
                          "Demographic information",
                          "Payment information",
                          "Church membership details"
                        ].map((item, index) => (
                          <div key={index} className="flex items-center gap-2 text-sm text-gray-700">
                            <div className="w-2 h-2 bg-teal-500 rounded-full"></div>
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="bg-gradient-to-r from-cyan-50 to-teal-50 p-6 rounded-xl border border-cyan-100">
                      <h3 className="font-semibold text-lg text-cyan-800 mb-3">How We Use Your Information</h3>
                      <p className="text-gray-700 leading-relaxed">
                        We use your personal information for processing your donations and purchases as well as informing you about upcoming church events such as conferences, outreach updates, or opportunities for you to serve, etc. We may otherwise use your personal information where permissible by law, for example to respond to an emergency, or in the course of an investigation into illegal behavior.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* SMS Subscriptions */}
          <Card className="border-teal-100">
            <CardContent className="p-6">
              <h2 className="font-serif text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <Phone className="h-6 w-6 text-teal-600" />
                SMS Subscriptions
              </h2>
              
              <p className="text-gray-700 mb-4">
                Users may opt-in to "Mwangaza SDA Church Updates" by texting "MWANGAZA" to our designated number. By providing your phone number and opting in, you are consenting to receive automated texts to that number. After signing up, you will receive a text message on your mobile number. Message frequency may vary.
              </p>
              
              <p className="text-gray-700 mb-4">
                You can cancel this service at any time. To discontinue receiving SMS messages from "Mwangaza SDA Church Updates", text STOP to our designated number. After you send the message STOP, you will receive a reply message to confirm that you have been unsubscribed. After this, you will no longer receive messages from us.
              </p>
              
              <p className="text-gray-700 mb-4">
                If at any time you forget what keywords are supported, just text HELP to our designated number. After you send the message HELP, you will receive a response with instructions on how to use our service, including how to unsubscribe. For additional help, contact us at info@sdachurchmwangaza.org.
              </p>
              
              <div className="bg-teal-50 p-4 rounded-lg">
                <p className="text-sm text-gray-700">
                  <strong>Compatible carriers include:</strong> Safaricom, Airtel Kenya, Telkom Kenya, and other major Kenyan mobile network operators. As always, message and data rates may apply for any messages sent to you from us and to us from you. If you have any questions about your text plan or data plan, it is best to contact your wireless provider.
                </p>
              </div>
              
              <p className="text-gray-700 mt-4">
                For support, please email us at info@sdachurchmwangaza.org or call us at +254 714 664 702. "Mwangaza SDA Church Updates" respects your right to privacy.
              </p>
            </CardContent>
          </Card>

          {/* Cookies and Similar Technologies */}
          <Card className="border-teal-100">
            <CardContent className="p-6">
              <h2 className="font-serif text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <Cookie className="h-6 w-6 text-teal-600" />
                Cookies and Similar Technologies
              </h2>
              
              <p className="text-gray-700 mb-4">
                Cookies are small pieces of text used to store information on devices that visit websites. Other technologies, including data we store on your web browser or device, identifiers associated with your device, pixel technology and other software (Google Analytics and Google AdWords), are used for similar purposes. In this policy, we refer to all of these technologies as "cookies."
              </p>
              
              <p className="text-gray-700 mb-4">
                Mwangaza SDA Church uses cookies in various ways, as follows:
              </p>
              
              <ul className="list-disc list-inside space-y-2 text-sm text-gray-700 mb-4">
                <li>Authenticating and identifying you on our websites so we can provide you with services you requested, including location services.</li>
                <li>Keeping track of information you have provided to us. For example, your favorites, donation history, etc.</li>
                <li>Measuring your use of the websites so that we can tailor your experience to your interests, and improve our service on Website, apps or social media platforms.</li>
                <li>To help us keep your account, data and website safe and secure.</li>
              </ul>
              
              <p className="text-gray-700">
                Some browsers have "do not track" features that allow you to tell a website not to track you. These functions are not uniform. Note that if you disable cookies certain features on our sites may not work. If you block or reject cookies, not all of the tracking described here will stop.
              </p>
            </CardContent>
          </Card>

          {/* Third Party Service Providers */}
          <Card className="border-teal-100">
            <CardContent className="p-6">
              <h2 className="font-serif text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <Users className="h-6 w-6 text-teal-600" />
                Third Party Service Providers
              </h2>
              
              <p className="text-gray-700 mb-4">
                There are times when the Church uses trusted third-party service providers to help us collect and process information. These third-party processors may have access to, store, or process Personal Data as part of providing those services for us. We limit the information provided to these service providers to that which is reasonably necessary for them to perform their functions. Our contracts with them require them to maintain confidentiality of such information and conform to our privacy standards. Some of these third parties may be located outside of Kenya, and as a result, that country's courts, governments or law enforcement agencies could obtain disclosure of your information in accordance with that country's laws.
              </p>
              
              <p className="text-gray-700">
                All third-party service providers are vetted to ensure compliance with Kenyan data protection laws and the Data Protection Act, 2019.
              </p>
            </CardContent>
          </Card>

          {/* Information Sharing and Disclosure */}
          <Card className="border-teal-100">
            <CardContent className="p-6">
              <h2 className="font-serif text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <Lock className="h-6 w-6 text-teal-600" />
                Information Sharing and Disclosure
              </h2>
              
              <p className="text-gray-700">
                We will not rent, sell, lease, or share personal information with other organizations, except for service providers referred to in the preceding section or except in response to subpoenas, court orders, legal processes, or to establish and/or exercise legal rights.
              </p>
            </CardContent>
          </Card>

          {/* Safeguards and Retention */}
          <Card className="border-teal-100">
            <CardContent className="p-6">
              <h2 className="font-serif text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <Shield className="h-6 w-6 text-teal-600" />
                Safeguards and Retention
              </h2>
              
              <p className="text-gray-700 mb-4">
                We take all reasonable steps to protect the security and confidentiality of your personal information. We protect personal information within our custody or control with appropriate organizational, technological and physical safeguards.
              </p>
              
              <p className="text-gray-700 mb-4">
                We store personal information in electronic and physical files that are secure, and our security measures include secure on- and off-site storage, restricted access to records and data processing equipment, password protocols, and encryption and security software. We conduct audits and monitor compliance with our privacy practices. If you live outside of Kenya, please be aware that you are sending information (including Personal Data) to Kenya where our servers are located. We will protect it with the same protocols listed above.
              </p>
              
              <p className="text-gray-700">
                We only retain personal information for as long as is necessary for purpose for which it was collected. Legal requirements, however, may require us to retain some or all of the personal information we hold for a period of time that is longer than that which we might otherwise hold.
              </p>
            </CardContent>
          </Card>

          {/* Third Party Links */}
          <Card className="border-teal-100">
            <CardContent className="p-6">
              <h2 className="font-serif text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <AlertCircle className="h-6 w-6 text-teal-600" />
                Third Party Links
              </h2>
              
              <p className="text-gray-700">
                The Website may contain links to other websites operated by third parties. Please note that this Privacy Policy applies only to the personal information that we collect or receive from third parties with your consent, and we cannot be responsible for personal information that third parties may collect, store and use, including through their websites. You should always read the privacy policy of each website you visit carefully.
              </p>
            </CardContent>
          </Card>

          {/* Children's Policy */}
          <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm hover:shadow-xl transition-all duration-300 group">
            <CardContent className="p-8">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-gradient-to-br from-teal-500 to-cyan-500 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <Users className="h-7 w-7 text-white" />
                </div>
                <div className="flex-1">
                  <h2 className="font-serif text-2xl font-bold text-gray-900 mb-6">Children's Policy</h2>
                  
                  <div className="space-y-6">
                    <div className="bg-gradient-to-r from-teal-50 to-cyan-50 p-6 rounded-xl border border-teal-100">
                      <h3 className="font-semibold text-lg text-teal-800 mb-3">Protection Under Children Act, 2022</h3>
                      <p className="text-gray-700 leading-relaxed mb-4">
                        The Children Act, 2022 (No. 29 of 2022) is the current governing legislation in Kenya, replacing the 2001 Act to align with the 2010 Constitution. It emphasizes the "best interests of the child," protecting rights to education, health, and protection from abuse, exploitation, child marriage, and forced cultural rites.
                      </p>
                      <div className="bg-white/70 p-4 rounded-lg border border-teal-200">
                        <p className="text-sm text-gray-700 font-medium">
                          In accordance with this Act, we do not knowingly collect children's personal information. Users under the age of 18 must ask parent or guardian permission to use this Website, request information from the Church, or purchase any resources on this Website.
                        </p>
                      </div>
                    </div>

                    <div className="bg-gradient-to-r from-cyan-50 to-teal-50 p-6 rounded-xl border border-cyan-100">
                      <h3 className="font-semibold text-lg text-cyan-800 mb-3">Our Commitment</h3>
                      <p className="text-gray-700 leading-relaxed mb-4">
                        We take special care to protect the privacy and safety of minors in accordance with the Children Act, 2022. Our commitment includes:
                      </p>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {[
                          "No intentional collection of children's data",
                          "Parental consent requirements",
                          "Age-appropriate content and services",
                          "Protection from exploitation and abuse",
                          "Safe online environment",
                          "Compliance with constitutional rights"
                        ].map((item, index) => (
                          <div key={index} className="flex items-center gap-2 text-sm text-gray-700">
                            <div className="w-2 h-2 bg-cyan-500 rounded-full"></div>
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="bg-gradient-to-r from-teal-50 to-cyan-50 p-6 rounded-xl border border-teal-100">
                      <h3 className="font-semibold text-lg text-teal-800 mb-3">Reporting Concerns</h3>
                      <p className="text-gray-700 leading-relaxed">
                        If you become aware that a child has submitted personal data without proper parental consent, or if you have concerns about child safety on our platform, please contact us immediately at <span className="font-semibold text-teal-700">info@sdachurchmwangaza.org</span> so we may take prompt remedial action in accordance with the Children Act, 2022.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Your Rights Under Data Protection Act */}
          <Card className="border-teal-100">
            <CardContent className="p-6">
              <h2 className="font-serif text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <FileText className="h-6 w-6 text-teal-600" />
                Your Rights Under the Data Protection Act, 2019
              </h2>
              
              <p className="text-gray-700 mb-4">
                As a data subject under Kenyan law, you have the following rights:
              </p>
              
              <ul className="list-disc list-inside space-y-2 text-sm text-gray-700 mb-4">
                <li><strong>Right of access:</strong> To obtain confirmation of whether we process your personal data and to receive a copy thereof (Section 26(a));</li>
                <li><strong>Right to rectification:</strong> To require correction of inaccurate or incomplete data (Section 26(d));</li>
                <li><strong>Right to erasure:</strong> To request deletion of your data, subject to lawful retention obligations (Section 26(e));</li>
                <li><strong>Right to restrict processing:</strong> To request limitation of processing in certain circumstances (Section 26(f));</li>
                <li><strong>Right to data portability:</strong> To receive your data in a structured, commonly used format (Section 26(g));</li>
                <li><strong>Right to object:</strong> To object to processing based on legitimate interests (Section 26(h));</li>
                <li><strong>Right to withdraw consent:</strong> Where processing is based on consent, you may withdraw it at any time without affecting the lawfulness of prior processing.</li>
              </ul>
              
              <p className="text-gray-700">
                You also have the right to lodge a complaint with the Office of the Data Protection Commissioner (ODPC) at odpc.go.ke if you believe your rights have been infringed.
              </p>
            </CardContent>
          </Card>

          {/* How to Access and Update Your Personal Information */}
          <Card className="border-teal-100">
            <CardContent className="p-6">
              <h2 className="font-serif text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <HelpCircle className="h-6 w-6 text-teal-600" />
                How to Access and Update Your Personal Information
              </h2>
              
              <p className="text-gray-700 mb-4">
                The Church strives to keep all personal information complete, up-to-date and accurate. You or a person authorized on your behalf has the right to request changes or corrections to inaccurate or incomplete information. If you have any questions, please reach out to us via one of the avenues listed below.
              </p>
              
              <div className="bg-teal-50 p-4 rounded-lg space-y-2">
                <div className="flex items-center gap-2 text-sm text-gray-700">
                  <MapPin className="h-4 w-4 text-teal-600" />
                  <span><strong>Seventh Day Adventist Church Mwangaza</strong></span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-700">
                  <MapPin className="h-4 w-4 text-teal-600" />
                  <span>Spine Road, Kayole/Komarocks Phase 3 Opposite Equity Bank, Nairobi, Kenya</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-700">
                  <Phone className="h-4 w-4 text-teal-600" />
                  <span>+254 714 664 702</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-700">
                  <Mail className="h-4 w-4 text-teal-600" />
                  <span>info@sdachurchmwangaza.org</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Opting Out */}
          <Card className="border-teal-100">
            <CardContent className="p-6">
              <h2 className="font-serif text-2xl font-bold text-gray-900 mb-4">Opting Out</h2>
              
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-lg text-gray-900 mb-2">Mail Communications</h3>
                  <p className="text-sm text-gray-700">
                    If you supply us with your postal address, you may receive periodic mailings from us, with information about donations you have placed, new resources, conferences, or upcoming events. If you do not wish to receive mailings, please let us know by reaching out through the contact information provided above.
                  </p>
                </div>
                
                <div>
                  <h3 className="font-semibold text-lg text-gray-900 mb-2">Phone Communications</h3>
                  <p className="text-sm text-gray-700">
                    If you give us your telephone number, we may reach out to you with information regarding donations that you have placed, inquiries you have requested, prayer needs, or updates to your account information, etc. If you do not wish to receive phone calls from us, please let us know by reaching out through the contact information provided above. (Please note, opting out of SMS/MMS is covered in this policy under SMS Subscriptions).
                  </p>
                </div>
                
                <div>
                  <h3 className="font-semibold text-lg text-gray-900 mb-2">Email Communications</h3>
                  <p className="text-sm text-gray-700">
                    If you do not wish to receive emails from us, you may unsubscribe by clicking the unsubscribe link at the bottom of any email you receive from the Church.
                  </p>
                </div>
                
                <div>
                  <p className="text-sm text-gray-700">
                    Even if you have opted out of receiving promotional communications from us, please be aware that we may still contact you for other purposes. For example, we may contact you to provide communications you have consented to receive, regarding the products you have requested or services we provide to you, or if you contact us with an inquiry.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Data Protection Officer Contact */}
          <Card className="border-teal-100 bg-teal-50/30">
            <CardContent className="p-6">
              <h2 className="font-serif text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <Shield className="h-6 w-6 text-teal-600" />
                Data Protection Officer Contact
              </h2>
              
              <p className="text-gray-700 mb-4">
                If you have any questions or concerns about our data handling practices, you can email our Data Protection Officer at info@sdachurchmwangaza.org or reach our Privacy Officer by postal mail at:
              </p>
              
              <div className="bg-white p-4 rounded-lg space-y-2">
                <p className="text-sm text-gray-700"><strong>Seventh Day Adventist Church Mwangaza</strong></p>
                <p className="text-sm text-gray-700">Attention: Data Protection Officer</p>
                <p className="text-sm text-gray-700">Spine Road, Kayole/Komarocks Phase 3</p>
                <p className="text-sm text-gray-700">Opposite Equity Bank, Nairobi, Kenya</p>
                <p className="text-sm text-gray-700">Email: info@sdachurchmwangaza.org</p>
                <p className="text-sm text-gray-700">Phone: +254 714 664 702</p>
              </div>
              
              <p className="text-gray-700 mt-4">
                Should you feel that we could not adequately address your concern, you may also make a complaint to the Office of the Data Protection Commissioner (ODPC) Kenya:
              </p>
              
              <div className="bg-white p-4 rounded-lg space-y-2 mt-2">
                <p className="text-sm text-gray-700"><strong>Office of the Data Protection Commissioner</strong></p>
                <p className="text-sm text-gray-700">Website: www.odpc.go.ke</p>
                <p className="text-sm text-gray-700">Email: complaints@odpc.go.ke</p>
                <p className="text-sm text-gray-700">Phone: +254 719 739 000</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
