export function PastorMessage() {
  return (
    <section id="pastor-message" className="py-20 bg-gradient-to-br from-slate-50 via-white to-teal-50/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-5 gap-12 items-center">
          {/* Image Column */}
          <div className="lg:col-span-2">
            <div className="relative max-w-xs mx-auto lg:mx-0">
              <div className="absolute -inset-4 bg-gradient-to-br from-teal-400/20 to-cyan-400/20 rounded-2xl blur-2xl" />
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <div className="aspect-[3/4]">
                  <img
                    src="/pastor.png"
                    alt="Pastor Richard Ogemba"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-6">
                  <h3 className="text-xl font-bold text-white">Pastor Richard Ogembo</h3>
                  <p className="text-white/90 text-sm mt-1">Lead Pastor</p>
                </div>
              </div>
            </div>
          </div>

          {/* Content Column */}
          <div className="lg:col-span-3">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-teal-100 text-teal-700 rounded-full text-sm font-semibold mb-6">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
              Message from Our Pastor
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Welcome to Our
              <br />
              Church Family
            </h2>

            <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
              <p>
                Welcome to Mwangaza SDA Church, where faith meets fellowship. I am blessed to serve as your pastor and
                walk alongside you in this journey of faith.
              </p>

              <div className="pl-6 border-l-4 border-teal-500 py-2">
                <p className="text-gray-800 font-medium">
                  As we gather each Sabbath, we are reminded of God's enduring love and grace. Our mission is to shine
                  the light of Christ in our community, nurturing spiritual growth through meaningful worship, biblical
                  teaching, and compassionate service.
                </p>
              </div>

              <p>
                Whether you're a long-time member or visiting for the first time, you are part of our family. Together,
                let us continue to grow in faith, hope, and love as we prepare for Christ's soon return.
              </p>

              <div className="pt-6 flex items-start gap-4">
                <img
                  src="/placeholder.svg?height=80&width=80"
                  alt="Signature"
                  className="w-20 h-20 rounded-lg border-2 border-teal-200"
                />
                <div>
                  <p className="font-bold text-gray-900 text-xl">Richard Ogembo</p>
                  <p className="text-gray-600"> Pastor, Mwangaza SDA Church</p>
                  <p className="text-sm text-teal-600 mt-1">"Let your light shine before others"</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
