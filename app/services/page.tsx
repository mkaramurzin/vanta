import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Professional Tile Services - Installation, Repair & Remodeling | Tima Tiles',
  description: 'Expert tile installation, repair, and bathroom remodeling services. Licensed professionals with 15+ years experience. Free estimates and lifetime warranty.',
}

export default function Services() {
  const services = [
    {
      title: "Custom Tile Installation",
      description: "Professional installation of all tile types including ceramic, porcelain, natural stone, and luxury tiles for any space in your home.",
      features: [
        "Kitchen backsplashes",
        "Bathroom floors & walls", 
        "Shower & tub surrounds",
        "Outdoor patios & pools",
        "Custom patterns & designs",
        "Waterproofing & preparation"
      ],
      href: "/services/tile-installation",
      image: "🏠",
      price: "Starting at $8/sq ft"
    },
    {
      title: "Tile Repair & Restoration", 
      description: "Expert repair services for damaged, cracked, or loose tiles. We specialize in seamless repairs that restore your surfaces to like-new condition.",
      features: [
        "Crack & chip repair",
        "Loose tile re-installation", 
        "Grout restoration & cleaning",
        "Color matching service",
        "Water damage restoration",
        "Emergency repairs available"
      ],
      href: "/services/tile-repair",
      image: "🔧",
      price: "Starting at $150"
    },
    {
      title: "Complete Bathroom Remodeling",
      description: "Full-service bathroom renovations from design to completion. We handle all aspects including tile work, plumbing coordination, and project management.",
      features: [
        "Design consultation",
        "Complete renovation",
        "Plumbing coordination", 
        "Electrical work",
        "Project management",
        "Turnkey solutions"
      ],
      href: "/services/home-remodel",
      image: "🛁",
      price: "Starting at $15,000"
    }
  ]

  const additionalServices = [
    {
      title: "Waterproofing & Sealing",
      description: "Professional moisture barriers and waterproof membranes to protect your investment.",
      icon: (
        <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z" />
        </svg>
      )
    },
    {
      title: "Heated Floor Installation", 
      description: "Radiant floor heating systems for ultimate comfort and luxury in your tiled spaces.",
      icon: (
        <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
        </svg>
      )
    },
    {
      title: "Design Consultation",
      description: "Expert guidance on tile selection, layout patterns, and design optimization for your space.",
      icon: (
        <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      )
    },
    {
      title: "Emergency Repair Service",
      description: "24/7 emergency response for water damage, broken tiles, and urgent repair needs.",
      icon: (
        <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    }
  ]

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Professional Tile Services</h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto mb-8">
              From custom installations to emergency repairs, we provide comprehensive tile solutions with exceptional craftsmanship
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/contact" 
                className="inline-flex items-center justify-center bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                Get Free Estimate
              </a>
              <a 
                href="tel:(555)123-4567" 
                className="inline-flex items-center justify-center border-2 border-white text-white hover:bg-white/10 px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                Call (555) 123-4567
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Our Core Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We specialize in three main areas of tile work, each delivered with the same commitment to quality and attention to detail.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-xl shadow-lg hover:shadow-xl transition-shadow overflow-hidden">
                <div className="p-8">
                  <div className="text-4xl mb-4">{service.image}</div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">What's Included:</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-600">
                          <svg className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="border-t pt-6">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-2xl font-bold text-blue-600">{service.price}</span>
                      <span className="text-sm text-gray-500">Free estimates</span>
                    </div>
                    <Link 
                      href={service.href}
                      className="block w-full bg-blue-600 hover:bg-blue-700 text-white text-center px-6 py-3 rounded-lg font-semibold transition-colors"
                    >
                      Learn More
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Additional Specialized Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Beyond our core offerings, we provide specialized services to ensure your tile project is completed to perfection.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {additionalServices.map((service, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  {service.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">How We Work</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our proven 6-step process ensures exceptional results every time, from initial consultation to final warranty.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { step: "01", title: "Free Consultation", desc: "We assess your space and provide expert recommendations" },
              { step: "02", title: "Detailed Estimate", desc: "Transparent pricing with no hidden costs or surprises" }, 
              { step: "03", title: "Material Selection", desc: "Help choosing the perfect tiles for your project" },
              { step: "04", title: "Professional Installation", desc: "Expert installation with attention to every detail" },
              { step: "05", title: "Quality Inspection", desc: "Thorough inspection to ensure our high standards" },
              { step: "06", title: "Warranty & Support", desc: "Comprehensive warranty and ongoing support" }
            ].map((item, index) => (
              <div key={index} className="relative">
                <div className="bg-gray-50 rounded-lg p-6 h-full">
                  <div className="absolute -top-3 -left-3 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm">
                    {item.step}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2 mt-4">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600">
              Get answers to the most common questions about our tile services.
            </p>
          </div>

          <div className="space-y-8">
            {[
              {
                q: "How long does a typical tile installation take?",
                a: "Most bathroom installations take 3-5 days, while kitchen backsplashes typically take 1-2 days. We'll provide a detailed timeline during your consultation."
              },
              {
                q: "Do you provide warranties on your work?",
                a: "Yes! We offer a comprehensive lifetime warranty on our craftsmanship and a manufacturer's warranty on all materials."
              },
              {
                q: "Can you match existing tiles for repairs?",
                a: "Absolutely. We specialize in color matching and have access to a wide network of suppliers to find the perfect match for your existing tiles."
              },
              {
                q: "Do you handle waterproofing?",
                a: "Yes, proper waterproofing is included in all our bathroom and wet area installations. We use the latest waterproof membranes and techniques."
              },
              {
                q: "What's included in your free estimate?",
                a: "Our free estimate includes site assessment, material recommendations, detailed pricing breakdown, and timeline. There's no obligation and no hidden costs."
              }
            ].map((faq, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{faq.q}</h3>
                <p className="text-gray-600 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Get your free consultation and detailed estimate today. No obligation, no pressure - just honest advice from tile experts.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/contact" 
              className="inline-flex items-center justify-center bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg text-lg font-semibold transition-colors"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
              Schedule Free Consultation
            </a>
            <a 
              href="tel:(555)123-4567" 
              className="inline-flex items-center justify-center border-2 border-white text-white hover:bg-white/10 px-8 py-4 rounded-lg text-lg font-semibold transition-colors"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Call Now: (555) 123-4567
            </a>
          </div>
        </div>
      </section>
    </div>
  )
} 