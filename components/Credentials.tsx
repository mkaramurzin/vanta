export default function Credentials() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why Professionals Choose Tima Tiles
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            With over 15 years of experience and hundreds of successful projects, we're the trusted choice for quality tile work.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">500+</div>
            <div className="text-gray-600 font-medium">Projects Completed</div>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">15+</div>
            <div className="text-gray-600 font-medium">Years Experience</div>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">4.9</div>
            <div className="text-gray-600 font-medium">Average Rating</div>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">100%</div>
            <div className="text-gray-600 font-medium">Satisfaction Rate</div>
          </div>
        </div>

        {/* Credentials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Licensed & Bonded */}
          <div className="bg-white rounded-lg p-8 shadow-md hover:shadow-lg transition-shadow text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Licensed & Bonded</h3>
            <p className="text-gray-600">
              Fully licensed, bonded, and insured for your complete protection. All work meets local building codes and industry standards.
            </p>
          </div>

          {/* Certified Professionals */}
          <div className="bg-white rounded-lg p-8 shadow-md hover:shadow-lg transition-shadow text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Certified Professionals</h3>
            <p className="text-gray-600">
              Our team holds certifications from leading tile manufacturers and continues professional education to stay current with best practices.
            </p>
          </div>

          {/* Warranty Guarantee */}
          <div className="bg-white rounded-lg p-8 shadow-md hover:shadow-lg transition-shadow text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Lifetime Warranty</h3>
            <p className="text-gray-600">
              We stand behind our work with comprehensive warranties. Your satisfaction and peace of mind are our top priorities.
            </p>
          </div>
        </div>

        {/* Certifications */}
        <div className="mt-16 text-center">
          <h3 className="text-lg font-semibold text-gray-900 mb-6">Certified & Trusted By</h3>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            <div className="bg-gray-200 px-6 py-3 rounded-lg font-semibold text-gray-700">
              Better Business Bureau A+
            </div>
            <div className="bg-gray-200 px-6 py-3 rounded-lg font-semibold text-gray-700">
              NTCA Certified
            </div>
            <div className="bg-gray-200 px-6 py-3 rounded-lg font-semibold text-gray-700">
              State Licensed
            </div>
            <div className="bg-gray-200 px-6 py-3 rounded-lg font-semibold text-gray-700">
              Angie's List Super Service
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 