'use client'

import { useState } from 'react'
import { brand } from '@/lib/brand'

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: '',
    timeline: '',
    budget: '',
    description: '',
    address: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission (replace with actual form handling)
    try {
      // Here you would typically send to your form handler (Formspree, API route, etc.)
      await new Promise(resolve => setTimeout(resolve, 1000))
      setIsSubmitted(true)
    } catch (error) {
      console.error('Form submission error:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSubmitted) {
    return (
      <div className="bg-green-50 border border-green-200 rounded-lg p-8 text-center">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-xl font-semibold text-green-800 mb-2">Thank You!</h3>
        <p className="text-green-700 mb-4">
          We've received your request and will get back to you within 2 hours during business hours.
        </p>
        <p className="text-sm text-green-600">
          For urgent matters, please call us at <a href={`tel:${brand.phone.replace(/[^\d]/g, '')}`} className="font-medium underline">{brand.phone}</a>
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Personal Information */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
            Full Name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-sky-500 transition-colors"
            placeholder="Your full name"
          />
        </div>
        
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
            Email Address *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-sky-500 transition-colors"
            placeholder="your.email@example.com"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
            Phone Number *
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            required
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-sky-500 transition-colors"
            placeholder="(555) 123-4567"
          />
        </div>
        
        <div>
          <label htmlFor="projectType" className="block text-sm font-medium text-gray-700 mb-2">
            Project Type *
          </label>
          <select
            id="projectType"
            name="projectType"
            required
            value={formData.projectType}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-sky-500 transition-colors"
          >
            <option value="">Select a service</option>
            <option value="bathroom-renovation">Bathroom Renovation</option>
            <option value="kitchen-backsplash">Kitchen Backsplash</option>
            <option value="floor-installation">Floor Installation</option>
            <option value="tile-repair">Tile Repair</option>
            <option value="shower-installation">Shower Installation</option>
            <option value="custom-work">Custom Work</option>
            <option value="other">Other</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="timeline" className="block text-sm font-medium text-gray-700 mb-2">
            Preferred Timeline
          </label>
          <select
            id="timeline"
            name="timeline"
            value={formData.timeline}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-sky-500 transition-colors"
          >
            <option value="">Select timeline</option>
            <option value="asap">As soon as possible</option>
            <option value="1-2-weeks">1-2 weeks</option>
            <option value="1-month">Within a month</option>
            <option value="2-3-months">2-3 months</option>
            <option value="planning">Just planning ahead</option>
          </select>
        </div>
        
        <div>
          <label htmlFor="budget" className="block text-sm font-medium text-gray-700 mb-2">
            Estimated Budget
          </label>
          <select
            id="budget"
            name="budget"
            value={formData.budget}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-sky-500 transition-colors"
          >
            <option value="">Select budget range</option>
            <option value="under-1000">Under $1,000</option>
            <option value="1000-3000">$1,000 - $3,000</option>
            <option value="3000-5000">$3,000 - $5,000</option>
            <option value="5000-10000">$5,000 - $10,000</option>
            <option value="10000-20000">$10,000 - $20,000</option>
            <option value="over-20000">Over $20,000</option>
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-2">
          Project Address
        </label>
        <input
          type="text"
          id="address"
          name="address"
          value={formData.address}
          onChange={handleChange}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-sky-500 transition-colors"
          placeholder="Street address, City, State"
        />
      </div>

      <div>
        <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-2">
          Project Description *
        </label>
        <textarea
          id="description"
          name="description"
          required
          rows={4}
          value={formData.description}
          onChange={handleChange}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-sky-500 transition-colors resize-vertical"
          placeholder="Please describe your project in detail. Include room dimensions, material preferences, and any specific requirements..."
        />
      </div>

      <div className="pt-4">
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-sky-500 hover:bg-sky-600 disabled:bg-sky-400 text-white px-6 py-4 rounded-lg font-semibold transition-colors flex items-center justify-center"
        >
          {isSubmitting ? (
            <>
              <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
              </svg>
              Sending...
            </>
          ) : (
            'Send Request'
          )}
        </button>
      </div>

      <div className="text-sm text-gray-500 text-center">
        <p>
          By submitting this form, you agree to be contacted by our team. 
          We respect your privacy and will never share your information.
        </p>
        <p className="mt-2">
          Need immediate assistance? <a href={`tel:${brand.phone.replace(/[^\d]/g, '')}`} className="text-sky-500 hover:text-sky-600 font-medium">{brand.phone}</a>
        </p>
      </div>
    </form>
  )
} 