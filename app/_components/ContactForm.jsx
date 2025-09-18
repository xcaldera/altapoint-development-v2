'use client'
import { useState } from 'react'

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    role: '',
    helpWith: '',
    description: '',
    contactMethod: 'Email'
  })

  const handleSubmit = async (e) => {
    e.preventDefault()
    // Handle form submission
    console.log('Form submitted:', formData)
    // Add your form submission logic here
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
            Request for Proposal
          </h2>
          <p className="text-gray-600 mb-2">
            We're here to help! Send any questions you have over to us.
          </p>
          <p className="text-gray-600">
            We look forward to hearing from you.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                Name *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
              />
            </div>
            
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                Phone
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
              />
            </div>
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
              Email *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="role" className="block text-sm font-medium text-gray-700 mb-2">
                What's your role? *
              </label>
              <select
                id="role"
                name="role"
                required
                value={formData.role}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
              >
                <option value="">Select your role</option>
                <option value="Homeowner">Homeowner</option>
                <option value="General Contractor">General Contractor</option>
                <option value="Developer">Developer</option>
                <option value="Architect / Designer">Architect / Designer</option>
                <option value="Lender / Owner's Rep">Lender / Owner's Rep</option>
                <option value="Property Manager">Property Manager</option>
              </select>
            </div>

            <div>
              <label htmlFor="helpWith" className="block text-sm font-medium text-gray-700 mb-2">
                What are you looking for help with? *
              </label>
              <select
                id="helpWith"
                name="helpWith"
                required
                value={formData.helpWith}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
              >
                <option value="">Select service needed</option>
                <option value="Feasibility Study">Feasibility Study</option>
                <option value="Scope Reviews / Bid Comparison">Scope Reviews / Bid Comparison</option>
                <option value="Contractor Price Checks">Contractor Price Checks</option>
                <option value="Estimating Support">Estimating Support</option>
                <option value="Change Order Validation">Change Order Validation</option>
                <option value="Preconstruction Advisory">Preconstruction Advisory</option>
                <option value="Owner's Rep / Project Management Support">Owner's Rep / Project Management Support</option>
                <option value="AI Strategy for My Business">AI Strategy for My Business</option>
                <option value="Workflow & Tool Optimization">Workflow & Tool Optimization</option>
                <option value="Not Sure – I need guidance">Not Sure – I need guidance</option>
              </select>
            </div>
          </div>

          <div>
            <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-2">
              Describe your current challenge or what you need help with. *
            </label>
            <input
              type="text"
              id="description"
              name="description"
              required
              value={formData.description}
              onChange={handleChange}
              placeholder="Where are you stuck, what's unclear, or what outcome you're hoping for."
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Upload any supporting docs, plans, or photos
              </label>
              <input
                type="file"
                multiple
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Preferred Response Method
              </label>
              <div className="space-y-2">
                {['Email', 'Phone Call', 'Text Message'].map((method) => (
                  <label key={method} className="flex items-center">
                    <input
                      type="radio"
                      name="contactMethod"
                      value={method}
                      checked={formData.contactMethod === method}
                      onChange={handleChange}
                      className="mr-2"
                    />
                    {method}
                  </label>
                ))}
              </div>
            </div>
          </div>

          <div className="text-right">
            <button
              type="submit"
              className="px-8 py-3 bg-accent text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
            >
              Let's Build Together!
            </button>
          </div>
        </form>
      </div>
    </section>
  )
}
