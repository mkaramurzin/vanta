import Link from 'next/link'

interface ServiceCardProps {
  title: string
  description: string
  href: string
  icon: React.ReactNode
  features?: string[]
}

export default function ServiceCard({ title, description, href, icon, features }: ServiceCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 border border-gray-100 h-full flex flex-col">
      <div className="flex items-center justify-center w-16 h-16 bg-blue-100 rounded-xl mb-6">
        {icon}
      </div>
      <h3 className="text-2xl font-semibold text-gray-900 mb-4">{title}</h3>
      <p className="text-gray-600 mb-6 flex-grow leading-relaxed">{description}</p>
      
      {features && (
        <div className="mb-6">
          <ul className="grid grid-cols-2 gap-2 text-sm">
            {features.map((feature, index) => (
              <li key={index} className="flex items-center text-gray-700">
                <svg className="w-4 h-4 text-blue-600 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                {feature}
              </li>
            ))}
          </ul>
        </div>
      )}
      
      <Link 
        href={href}
        className="inline-flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors group"
      >
        Learn More
        <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </Link>
    </div>
  )
} 