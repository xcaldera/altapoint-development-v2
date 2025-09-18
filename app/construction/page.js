import Navbar from '../_components/Navbar'
import Footer from '../_components/Footer'
import ContactForm from '../_components/ContactForm'
import Image from 'next/image'
import Link from 'next/link'

export const metadata = {
  title: 'Construction Management Services | AltaPoint Development',
  description: 'Expert construction management from preconstruction to closeout. AltaPoint provides strategic execution support for all project phases.',
}

export default function ConstructionPage() {
  const services = [
    {
      title: "Preconstruction Support",
      description: "We help you build the right team, budget smartly, and get your project ready to run. Scope coordination, bid reviews, and contractor vetting are part of the process."
    },
    {
      title: "Owner's Representation", 
      description: "We fill the gap when you need someone with experience to lead or supplement your internal team."
    },
    {
      title: "GC/Sub Support",
      description: "Need bandwidth on your estimating, procurement, or project coordination? We offer short-term and long-term support to keep your projects moving."
    },
    {
      title: "Construction Oversight",
      description: "Acting as your eyes and ears, we represent your interest on-site—tracking progress, resolving issues, and ensuring accountability."
    },
    {
      title: "Homeowner Guidance",
      description: "Planning a remodel or ground-up home? We support homeowners by helping them manage GCs, validate scopes, and avoid common pitfalls."
    },
    {
      title: "ADU & Tiny Home Guidance",
      description: "Whether you're exploring a backyard ADU, rental unit, or prefab/tiny home solution, we help you select the right builder, evaluate costs, review design options, and navigate permitting challenges."
    }
  ]

  const whyAltaPoint = [
    "Decades of real-world construction experience",
    "Fluent in both the field and the budget",
    "Strong documentation and communication discipline", 
    "Trusted by owners, GCs, architects, and subs alike"
  ]

  return (
    <>
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="py-20 bg-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="relative h-96 bg-gray-200 rounded-2xl order-2 lg:order-1">
                <Image
                  src="/images/construction-image.jpg"
                  alt="Construction management"
                  fill
                  className="object-cover rounded-2xl"
                />
              </div>
              
              <div className="order-1 lg:order-2">
                <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">
                  Construction Management Services
                </h1>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  When it's time to build, AltaPoint becomes your strategic execution partner. 
                  We support projects from preconstruction through closeout, offering clear 
                  direction, problem-solving, and proactive oversight every step of the way.
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center px-8 py-3 bg-accent text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Learn more
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Why AltaPoint & Services Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Why AltaPoint */}
              <div className="lg:col-span-1">
                <h3 className="text-xl font-bold text-primary mb-4">
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
                {services.map((service, index) => (
                  <div key={index} className="bg-gray-50 rounded-lg p-6">
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
