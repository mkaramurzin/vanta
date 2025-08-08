import type { Metadata } from 'next'
import ContactForm from '@/components/ContactForm'
import { brand } from '@/lib/brand'

export const metadata: Metadata = {
  title: `Contact Us - ${brand.cta.primary} | ${brand.companyName}`,
  description: `Contact ${brand.companyName} for your free consultation and estimate. Licensed tile professionals serving the region. Call ${brand.phone} or fill out our contact form.`,
}

export default function Contact() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-sky-500 to-sky-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">{brand.cta.primary}</h1>
            <p className="text-xl md:text-2xl text-sky-100 max-w-3xl mx-auto mb-8">
              Ready to transform your space? Contact us today for a free consultation and detailed estimate.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href={`tel:${brand.phone.replace(/[^\d]/g, '')}`}
                className="inline-flex items-center justify-center bg-white text-sky-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Call {brand.phone}
              </a>
              <span className="text-sky-100">or fill out the form below</span>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Request Your Free Estimate</h2>
              <p className="text-lg text-gray-600 mb-8">
                Fill out the form below and we'll get back to you within 2 hours during business hours. 
                All estimates are completely free with no obligation.
              </p>
              <ContactForm />
            </div>

            {/* Business Information */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Get In Touch</h2>
              
              {/* Contact Methods */}
              <div className="space-y-6 mb-10">
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-sky-100 rounded-lg flex items-center justify-center">
                      <svg className="w-6 h-6 text-sky-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-gray-900">Phone</h3>
                    <p className="text-gray-600 mt-1">
                      <a href={`tel:${brand.phone.replace(/[^\d]/g, '')}`} className="hover:text-sky-500 transition-colors">{brand.phone}</a>
                    </p>
                    <p className="text-sm text-gray-500">Available 24/7 for emergencies</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-sky-100 rounded-lg flex items-center justify-center">
                      <svg className="w-6 h-6 text-sky-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-gray-900">Email</h3>
                    <p className="text-gray-600 mt-1">
                      <a href={`mailto:${brand.email}`} className="hover:text-sky-500 transition-colors">{brand.email}</a>
                    </p>
                    <p className="text-sm text-gray-500">We respond within 2 hours</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-sky-100 rounded-lg flex items-center justify-center">
                      <svg className="w-6 h-6 text-sky-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-gray-900">Address</h3>
                    <p className="text-gray-600 mt-1">
                      {brand.address.street}<br />
                      {brand.address.city}, {brand.address.state} {brand.address.zip}
                    </p>
                    <p className="text-sm text-gray-500">Licensed in state #LIC123456</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-sky-100 rounded-lg flex items-center justify-center">
                      <svg className="w-6 h-6 text-sky-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-gray-900">Business Hours</h3>
                    <div className="text-gray-600 mt-1 space-y-1">
                      <p>Monday - Friday: 7:00 AM - 6:00 PM</p>
                      <p>Saturday: 8:00 AM - 4:00 PM</p>
                      <p>Sunday: Emergency calls only</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Why Choose Us */}
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Why Choose {brand.companyName}?</h3>
                <ul className="space-y-3">
                  <li className="flex items-center text-gray-600">
                    <svg className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {brand.business.licenses}
                  </li>
                  <li className="flex items-center text-gray-600">
                    <svg className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {brand.business.experience}
                  </li>
                  <li className="flex items-center text-gray-600">
                    <svg className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Lifetime warranty on craftsmanship
                  </li>
                  <li className="flex items-center text-gray-600">
                    <svg className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Free detailed estimates
                  </li>
                  <li className="flex items-center text-gray-600">
                    <svg className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {brand.business.projectsCompleted} satisfied customers
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Area */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Our Service Area</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We proudly serve homeowners throughout the greater metropolitan area and surrounding communities.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Primary Service Areas</h3>
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Metro Areas</h4>
                  <ul className="space-y-1 text-gray-600">
                    <li>• Downtown Metro</li>
                    <li>• North Hills</li>
                    <li>• Westside</li>
                    <li>• East Valley</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Suburbs</h4>
                  <ul className="space-y-1 text-gray-600">
                    <li>• Riverside</li>
                    <li>• Oak Grove</li>
                    <li>• Mountain View</li>
                    <li>• Lakewood</li>
                  </ul>
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                <strong>Service Radius:</strong> We typically serve within 50 miles of our headquarters, 
                but we often travel beyond for the right project.
              </p>
              <p className="text-sky-500 font-medium">
                Don't see your area listed? Give us a call - we might still be able to help!
              </p>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">Emergency Service Areas</h3>
              <p className="text-gray-600 mb-4">
                We provide 24/7 emergency repair services for water damage, broken tiles, 
                and urgent safety issues in our primary service areas.
              </p>
              <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                <h4 className="font-semibold text-red-800 mb-2">Emergency? Call Now!</h4>
                <p className="text-red-700 mb-3">
                  For urgent tile repairs, water damage, or safety hazards:
                </p>
                <a 
                  href={`tel:${brand.phone.replace(/[^\d]/g, '')}`}
                  className="inline-flex items-center bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg font-semibold transition-colors"
                >
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  Call {brand.phone}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Common Questions</h2>
            <p className="text-xl text-gray-600">
              Here are answers to the most frequently asked questions about our services and process.
            </p>
          </div>

          <div className="space-y-6">
            {[
              {
                q: "How quickly can you provide an estimate?",
                a: "We typically provide estimates within 24-48 hours of your initial contact. For urgent projects, we can often provide same-day estimates."
              },
              {
                q: "Do you charge for estimates?",
                a: "No, all estimates are completely free with no obligation. We believe in transparent pricing and want you to make an informed decision."
              },
              {
                q: "Are you licensed and insured?",
                a: "Yes, we are fully licensed, bonded, and insured. We carry comprehensive liability insurance and workers' compensation for your protection."
              },
              {
                q: "What's your typical project timeline?",
                a: "Most bathroom projects take 3-5 days, kitchen backsplashes 1-2 days. We'll provide a detailed timeline with your estimate and keep you updated throughout the project."
              },
              {
                q: "Do you clean up after the job?",
                a: "Absolutely! We protect your home during work and provide complete cleanup. We leave your space clean and ready to enjoy."
              }
            ].map((faq, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{faq.q}</h3>
                <p className="text-gray-600">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
} 