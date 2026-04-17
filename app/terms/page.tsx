import { Metadata } from "next"
import { Card, CardContent } from "@/components/ui/card"
import { Calendar, FileText, Shield, Users, CreditCard, Lock, HelpCircle, AlertTriangle, Scale, Globe, UserCheck, Database } from "lucide-react"

export const metadata: Metadata = {
  title: "Terms and Conditions | Seventh Day Adventist Church Mwangaza",
  description: "Website terms and conditions of use for Seventh Day Adventist Church Mwangaza, compliant with Kenyan data protection laws.",
}

export default function TermsPage() {
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
            <FileText className="h-10 w-10 text-white relative z-10 group-hover:scale-110 transition-transform duration-300" />
          </div>
          <h1 className="font-serif text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 via-teal-800 to-gray-900 bg-clip-text text-transparent mb-6">
            Website Terms and Conditions
          </h1>
          <p className="text-xl text-gray-600 font-medium mb-6">
            Seventh Day Adventist Church Mwangaza
          </p>
          <div className="inline-flex items-center justify-center gap-3 px-6 py-3 bg-gradient-to-r from-teal-50 to-cyan-50 border border-teal-200 rounded-full shadow-sm">
            <Calendar className="h-5 w-5 text-teal-600" />
            <span className="text-sm font-semibold text-teal-700">Effective Date: 10 April 2026</span>
          </div>
        </div>

        {/* Introduction */}
        <Card className="mb-12 border-0 shadow-xl bg-gradient-to-br from-white to-teal-50/30 backdrop-blur-sm relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-teal-100/50 to-transparent rounded-full blur-2xl"></div>
          <CardContent className="p-8 relative">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-teal-500 to-cyan-500 flex items-center justify-center shadow-lg">
                <Globe className="h-6 w-6 text-white" />
              </div>
              <div className="flex-1">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Welcome to Our Digital Community</h2>
                <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                  Welcome to the official website of Seventh Day Adventist Church Mwangaza (hereinafter referred to as "the Church," "we," "us," or "our"). By accessing or using this website, including its membership portal and online giving features, you agree to be bound by these Terms and Conditions ("Terms"). If you do not agree with any part of these Terms, please do not use this website.
                </p>
                <div className="bg-gradient-to-r from-teal-50 to-cyan-50 border-l-4 border-teal-500 p-4 rounded-lg">
                  <p className="text-gray-700 leading-relaxed font-medium">
                    These Terms are governed by the laws of Kenya, including but not limited to the Data Protection Act, 2019 (Cap. 411C), the Computer Misuse and Cybercrimes Act, 2018, the Kenya Information and Communications Act (Cap. 411A), the National Payment System Act, 2011, the Consumer Protection Act, 2012, and the Societies Act (Cap. 108).
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Terms Sections */}
        <div className="space-y-10">
          {/* 1. Definitions */}
          <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm hover:shadow-xl transition-all duration-300 group">
            <CardContent className="p-8">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-gradient-to-br from-teal-500 to-cyan-500 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <Database className="h-7 w-7 text-white" />
                </div>
                <div className="flex-1">
                  <h2 className="font-serif text-2xl font-bold text-gray-900 mb-4">1. Definitions</h2>
                  <p className="text-gray-700 mb-6 text-lg">For the purposes of these Terms, the following definitions apply:</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {[
                      { term: '"Website"', definition: "means the Church's official website and all sub-pages therein." },
                      { term: '"User"', definition: "means any person who accesses or uses the Website, whether or not registered as a church member." },
                      { term: '"Member"', definition: "means a registered member of the Church who has been assigned a membership number and has access to the membership portal." },
                      { term: '"Personal Data"', definition: "has the meaning ascribed to it under the Data Protection Act, 2019, namely any information relating to an identified or identifiable natural person." },
                      { term: '"Online Giving"', definition: "refers to the feature on the Website that allows users to make tithe and offering contributions electronically." },
                      { term: '"Sensitive Personal Data"', definition: "includes religious beliefs, financial information, and any other data classified as sensitive under Section 2 of the Data Protection Act, 2019." }
                    ].map((item, index) => (
                      <div key={index} className="bg-gradient-to-r from-teal-50 to-cyan-50 p-4 rounded-lg border border-teal-100">
                        <p className="font-semibold text-teal-800 mb-1">{item.term}</p>
                        <p className="text-sm text-gray-700">{item.definition}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* 2. Acceptance of Terms */}
          <Card className="border-teal-100">
            <CardContent className="p-6">
              <h2 className="font-serif text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <span className="w-8 h-8 bg-teal-100 rounded-full flex items-center justify-center text-sm font-semibold text-teal-700">2</span>
                Acceptance of Terms
              </h2>
              <p className="text-gray-700 mb-4">By accessing and using this Website, you confirm that you:</p>
              <ul className="list-disc list-inside space-y-2 text-sm text-gray-700 mb-4">
                <li>Are at least 18 years of age, or are accessing the Website under the supervision of a parent or legal guardian who agrees to these Terms on your behalf;</li>
                <li>Have read, understood, and agree to be bound by these Terms and our Privacy Policy;</li>
                <li>Agree to use the Website only for lawful purposes and in accordance with applicable Kenyan law.</li>
              </ul>
              <p className="text-gray-700">
                The Church reserves the right to amend these Terms at any time. Amendments will be effective upon posting on the Website. Continued use of the Website after such posting constitutes your acceptance of the revised Terms.
              </p>
            </CardContent>
          </Card>

          {/* 3. Website Content and Intellectual Property */}
          <Card className="border-teal-100">
            <CardContent className="p-6">
              <h2 className="font-serif text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <span className="w-8 h-8 bg-teal-100 rounded-full flex items-center justify-center text-sm font-semibold text-teal-700">3</span>
                Website Content and Intellectual Property
              </h2>
              <p className="text-gray-700 mb-4">
                All content on this Website, including but not limited to sermons, devotionals, images, videos, logos, graphics, and text, is the property of Seventh Day Adventist Church Mwangaza or its licensors and is protected under Kenyan and international copyright law. You may not reproduce, distribute, or commercially exploit any content without the express written permission of the Church.
              </p>
              <p className="text-gray-700">
                You are permitted to access and view content for personal, non-commercial, and religious purposes only.
              </p>
            </CardContent>
          </Card>

          {/* 4. Membership Portal */}
          <Card className="border-teal-100">
            <CardContent className="p-6">
              <h2 className="font-serif text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <Users className="h-6 w-6 text-teal-600" />
                Membership Portal
              </h2>
              
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-lg text-gray-900 mb-2">4.1 Access to Membership Information</h3>
                  <p className="text-sm text-gray-700">
                    Registered members may access a secure portal to view their assigned membership number and registered name (collectively, "Membership Data"). Access to this portal is strictly restricted to the individual member to whom the data belongs.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-lg text-gray-900 mb-2">4.2 Account Security</h3>
                  <p className="text-sm text-gray-700">
                    Members are responsible for maintaining the confidentiality of their login credentials. You must not share your credentials with any third party. You agree to notify the Church immediately if you suspect any unauthorised access to your account. The Church shall not be liable for any loss or damage arising from your failure to maintain account security.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-lg text-gray-900 mb-2">4.3 Accuracy of Data</h3>
                  <p className="text-sm text-gray-700">
                    The Church strives to maintain accurate membership records. If you identify any inaccuracy in your Membership Data, you have the right, under Section 26(d) of the Data Protection Act, 2019, to request correction. Please contact the Church Administration to exercise this right.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-lg text-gray-900 mb-2">4.4 Prohibited Uses of Membership Data</h3>
                  <p className="text-sm text-gray-700 mb-2">You must not use the membership portal or any data accessed therein to:</p>
                  <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                    <li>Harvest, compile, or aggregate information about other members;</li>
                    <li>Impersonate another member or any other person;</li>
                    <li>Engage in any activity that constitutes unauthorized access to computer systems, as prohibited by the Computer Misuse and Cybercrimes Act, 2018.</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* 5. Data Protection and Privacy */}
          <Card className="border-teal-100">
            <CardContent className="p-6">
              <h2 className="font-serif text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <Shield className="h-6 w-6 text-teal-600" />
                Data Protection and Privacy
              </h2>
              
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-lg text-gray-900 mb-2">5.1 Data Controller</h3>
                  <p className="text-sm text-gray-700">
                    Seventh Day Adventist Church Mwangaza is registered as a Data Controller with the Office of the Data Protection Commissioner (ODPC) of Kenya, in compliance with the Data Protection Act, 2019.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-lg text-gray-900 mb-2">5.2 Personal Data We Collect</h3>
                  <p className="text-sm text-gray-700 mb-2">We collect and process the following categories of personal data:</p>
                  <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                    <li><strong>Identity data:</strong> Full name, membership number, date of birth, gender, and national ID/passport number;</li>
                    <li><strong>Contact data:</strong> Phone number, email address, and physical address;</li>
                    <li><strong>Financial data:</strong> Payment information, tithe and offering records, and transaction history (where applicable);</li>
                    <li><strong>Sensitive personal data:</strong> Religious denomination and church membership status, processed only with your explicit consent as required under Section 46 of the Data Protection Act, 2019;</li>
                    <li><strong>Technical data:</strong> IP address, browser type, and website usage data collected via cookies.</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold text-lg text-gray-900 mb-2">5.3 Lawful Basis for Processing</h3>
                  <p className="text-sm text-gray-700 mb-2">We process your personal data on the following lawful bases under Section 30 of the Data Protection Act, 2019:</p>
                  <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                    <li><strong>Consent:</strong> Where you have given explicit consent, particularly for processing sensitive personal data and for marketing communications;</li>
                    <li><strong>Contractual necessity:</strong> To manage your church membership and provide services you have requested;</li>
                    <li><strong>Legitimate interests:</strong> For the operation and security of the Website and the protection of the Church's interests;</li>
                    <li><strong>Legal obligation:</strong> Where required to comply with applicable Kenyan law.</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold text-lg text-gray-900 mb-2">5.4 Your Rights Under the Data Protection Act, 2019</h3>
                  <p className="text-sm text-gray-700 mb-2">As a data subject, you have the following rights:</p>
                  <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                    <li><strong>Right of access:</strong> To obtain confirmation of whether we process your personal data and to receive a copy thereof (Section 26(a));</li>
                    <li><strong>Right to rectification:</strong> To require correction of inaccurate or incomplete data (Section 26(d));</li>
                    <li><strong>Right to erasure:</strong> To request deletion of your data, subject to lawful retention obligations (Section 26(e));</li>
                    <li><strong>Right to restrict processing:</strong> To request limitation of processing in certain circumstances (Section 26(f));</li>
                    <li><strong>Right to data portability:</strong> To receive your data in a structured, commonly used format (Section 26(g));</li>
                    <li><strong>Right to object:</strong> To object to processing based on legitimate interests (Section 26(h));</li>
                    <li><strong>Right to withdraw consent:</strong> Where processing is based on consent, you may withdraw it at any time without affecting the lawfulness of prior processing.</li>
                  </ul>
                  <p className="text-sm text-gray-700 mt-2">
                    You also have the right to lodge a complaint with the Office of the Data Protection Commissioner (ODPC) at odpc.go.ke if you believe your rights have been infringed.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* 6. Online Giving */}
          <Card className="border-teal-100">
            <CardContent className="p-6">
              <h2 className="font-serif text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <CreditCard className="h-6 w-6 text-teal-600" />
                Online Giving — Tithes and Offerings
              </h2>
              
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-lg text-gray-900 mb-2">6.1 Nature of Contributions</h3>
                  <p className="text-sm text-gray-700">
                    All tithes and offerings made through this Website are voluntary contributions to Seventh Day Adventist Church Mwangaza, a duly registered religious organisation under the Societies Act (Cap. 108). Contributions are made as gifts and are non-refundable, except as provided under clause 6.5 below. No goods or services are provided in exchange for contributions.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-lg text-gray-900 mb-2">6.2 Payment Processing</h3>
                  <p className="text-sm text-gray-700">
                    Online giving is facilitated through licensed payment service providers regulated by the Central Bank of Kenya (CBK) under the National Payment System Act, 2011. By using the online giving feature, you agree to the payment provider's terms and conditions in addition to these Terms.
                  </p>
                  <p className="text-sm text-gray-700">
                    The Church does not store your full payment card details on its servers. All payment data is handled by the payment processor in accordance with applicable security standards.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-lg text-gray-900 mb-2">6.3 Tax Exemption Status</h3>
                  <p className="text-sm text-gray-700">
                    Seventh Day Adventist Church Mwangaza holds tax-exempt status as a religious organisation under the Income Tax Act (Cap. 470). Contributions made to the Church are not tax-deductible from the personal income of the donor under current Kenyan tax law, unless the Church is also registered as an approved charitable institution by the Kenya Revenue Authority (KRA). Donors are advised to consult a qualified tax advisor for guidance specific to their circumstances.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-lg text-gray-900 mb-2">6.4 Financial Records and Accountability</h3>
                  <p className="text-sm text-gray-700">
                    The Church is committed to transparency and accountability in the handling of all contributions. Financial records are maintained in accordance with the requirements of the Public Benefit Organisations Act, 2013, and are subject to annual audit. Members may request a summary of their personal giving records from the Finance Office.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-lg text-gray-900 mb-2">6.5 Erroneous Transactions</h3>
                  <p className="text-sm text-gray-700">
                    If you make an unintended or erroneous payment, you must notify the Church in writing within fourteen (14) days of the transaction. The Church will review the request and, at its sole discretion, may process a refund. Requests made after 14 days may not be honoured. Refunds, where approved, will be processed to the original payment method within 7–14 business days.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* 7. Cybersecurity and Prohibited Conduct */}
          <Card className="border-teal-100">
            <CardContent className="p-6">
              <h2 className="font-serif text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <Lock className="h-6 w-6 text-teal-600" />
                Cybersecurity and Prohibited Conduct
              </h2>
              <p className="text-sm text-gray-700 mb-4">
                In accordance with the Computer Misuse and Cybercrimes Act, 2018 (the "CMCA"), you must not:
              </p>
              <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                <li>Attempt to gain unauthorised access to any part of the Website or its underlying systems (Section 3, CMCA);</li>
                <li>Intercept or interfere with electronic communications transmitted via the Website (Section 7, CMCA);</li>
                <li>Introduce malicious code, malware, or viruses into the Website's systems (Section 6, CMCA);</li>
                <li>Use the Website to publish, transmit, or distribute false, misleading, or defamatory information (Section 22–23, CMCA);</li>
                <li>Use the Website for cyberbullying, harassment, or any form of digital abuse (Section 27, CMCA);</li>
                <li>Engage in any form of identity fraud or impersonation (Section 26, CMCA).</li>
              </ul>
              <p className="text-sm text-gray-700 mt-4">
                Any suspected cybersecurity incidents should be reported to the Church Administrator and, where appropriate, to the National Computer and Cybercrimes Coordination Committee (NC4) or Kenya Police Service.
              </p>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <Card className="border-teal-100 bg-teal-50/30">
            <CardContent className="p-6">
              <h2 className="font-serif text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <HelpCircle className="h-6 w-6 text-teal-600" />
                Contact Information
              </h2>
              <p className="text-sm text-gray-700 mb-4">
                For any questions, concerns, or requests relating to these Terms or the processing of your personal data, please contact us at:
              </p>
              <div className="space-y-2 text-sm text-gray-700">
                <p><strong>Seventh Day Adventist Church Mwangaza</strong></p>
                <p>Attention: Data Protection Officer / Church Administrator</p>
                <p>Address: Spine Road, Kayole/Komarocks Phase 3 Opposite Equity Bank, Nairobi, Kenya</p>
                <p>Email: info@sdachurchmwangaza.org</p>
                <p>Phone: +254 714 664 702</p>
              </div>
              <p className="text-xs text-gray-500 mt-4">
                These Terms and Conditions were last reviewed and approved on 10 April 2026.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
