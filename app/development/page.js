import Navbar from '../_components/Navbar'
import Footer from '../_components/Footer'
import ContactForm from '../_components/ContactForm'
import Image from 'next/image'
import Link from 'next/link'

export const metadata = {
  title: 'Development Portfolio | AltaPoint Development',
  description: 'Explore AltaPoint Development\'s real estate development opportunities including land acquisition, joint ventures, and vertical development across Southern California.',
}

export default function DevelopmentPage() {
  const services = [
    {
      title: "Land Acquisition",
      description: "We evaluate and acquire sites suited for residential, mixed-use, and infill projects. If you have land or are exploring a sale, we're the partner to talk to."
    },
    {
      title: "Joint Ventures", 
      description: "We collaborate with developers, architects, builders, and capital partners to create aligned, equitable partnerships with clear execution strategies."
    },
    {
      title: "Public & Private Partnerships",
      description: "We work closely with cities, non-profits, and housing agencies to deliver real units that solve today's challenges."
    },
    {
      title: "Vertical Development",
      description: "From concept to completion, we lead all aspects of development—design coordination, entitlements, permitting, and construction execution."
    },
    {
      title: "Investment Opportunities",
      description: "We invite accredited investors, funds, and mission-aligned institutions to invest in our projects for scalable returns and social impact."
    }
  ]

  const whyAltaPoint = [
    "Deep local knowledge of entitlement and permitting processes",
    "In-house construction and design management", 
    "Proven track record of alignment across stakeholders",
    "A modern and adaptable approach that prioritizes quality, efficiency, and responsible growth"
  ]

  return (
    <>
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl md:text-6xl font-bold text-primary mb-6 font-big-shoulders">
                  Development Portfolio
                </h1>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  AltaPoint Development is actively shaping the future of Southern California by 
                  identifying high-impact opportunities and turning them into smart, sustainable, 
                  and inspiring projects. We bring together design, entitlement, construction, 
                  and long-term vision to create real places with real value.
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center px-8 py-3 bg-accent text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Partner with Us!
                </Link>
              </div>
              
              <div className="relative h-96 bg-gray-200 rounded-2xl">
                <Image
                  src="/images/development-bg.jpg"
                  alt="Development projects"
                  fill
                  className="object-cover rounded-2xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Why AltaPoint & Services Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Why AltaPoint */}
              <div className="lg:col-span-1">
                <h3 className="text-xl font-bold text-primary mb-4 uppercase tracking-wide">
                  Why AltaPoint
                </h3>
                <ul className="space-y-3">
                  {whyAltaPoint.map((item, index) => (
                    <li key={index} className="flex items-start">
                      <div className="w-2 h-2 bg-accent rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-gray-600">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Services Grid */}
              <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
                {services.slice(0, 3).map((service, index) => (
                  <div key={index} className="bg-white rounded-lg p-6">
                    <h4 className="text-lg font-bold text-primary mb-3">{service.title}</h4>
                    <p className="text-gray-600 text-sm">{service.description}</p>
                  </div>
                ))}
                {services.slice(3).map((service, index) => (
                  <div key={index + 3} className="bg-white rounded-lg p-6">
                    <h4 className="text-lg font-bold text-primary mb-3">{service.title}</h4>
                    <p className="text-gray-600 text-sm">{service.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <ContactForm />
      </main>
      <Footer />
    </>
  )
}
