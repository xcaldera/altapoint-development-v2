import Navbar from '../_components/Navbar'
import Footer from '../_components/Footer'
import ContactForm from '../_components/ContactForm'
import Image from 'next/image'
import Link from 'next/link'

export const metadata = {
  title: 'AI Consulting & Construction Technology | AltaPoint Development',
  description: 'Leading-edge AI consulting for construction teams. Optimize workflows, implement modern tools, and future-proof your construction business.',
}

export default function ConsultingPage() {
  const services = [
    {
      title: "Workflow Audit & Optimization",
      description: "We analyze how your team works—from email overload and manual scheduling to submittal backlogs—and identify areas for improvement."
    },
    {
      title: "Implementation & Onboarding", 
      description: "We don't stop at strategy. We help you set up tools, train your team, and track performance so the change sticks."
    },
    {
      title: "AI Integration & Tool Scouting",
      description: "We cut through the noise and help you select tools that actually apply to your day-to-day—from submittal review bots to meeting automation to document compliance."
    },
    {
      title: "Advisory for Startups",
      description: "For builders, tech developers, or real estate innovators looking to bridge construction with software—we offer first-hand knowledge, product input, and partnership potential."
    }
  ]

  const whyAltaPoint = [
    "We are actively shaping how AI is applied to real-world construction workflows",
    "We speak both construction and software fluently—bridging the gap with clarity",
    "Our team works in the field and in product—so our guidance is grounded in experience", 
    "We bring startup energy, long-term vision, and real credibility to your team"
  ]

  const platforms = [
    {
      title: "RenovaWise",
      description: "An AI-powered renovation planning and pricing tool that helps homeowners and small contractors scope and compare remodeling work with confidence and clarity.",
      image: "/images/renovawise-screenshot.png",
      link: "https://www.renovawise.com/"
    },
    {
      title: "Forge.AI", 
      description: "A comprehensive AI project management suite designed specifically for construction pros—streamlining RFIs, submittals, task tracking, meeting notes, and more.",
      image: "/images/forge-ai-screenshot.png",
      link: null
    }
  ]

  return (
    <>
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="relative py-20 bg-gray-900">
          <div className="absolute inset-0">
            <Image
              src="/images/ai-consulting-bg.jpg"
              alt="AI consulting background"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-60"></div>
          </div>
          
          <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold text-white mb-6 font-big-shoulders">
              Consulting & AI Integration
            </h1>
            <p className="text-lg md:text-xl text-gray-200 mb-8 leading-relaxed">
              The construction industry is entering a new era—and AltaPoint is at the forefront. 
              Our consulting services are built to help teams streamline workflows, save time, 
              and unlock efficiency using practical, accessible technology—especially where 
              artificial intelligence (AI) can create real impact.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-3 bg-accent text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
            >
              Learn more
            </Link>
          </div>
        </section>

        {/* Why AltaPoint & Services Section */}
        <section className="py-20 bg-white">
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

        {/* AI Portfolio Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <p className="text-sm font-semibold text-accent uppercase tracking-wider mb-4">
                AI PORTFOLIO
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                Our In-House AI Platforms
              </h2>
              <div className="max-w-4xl mx-auto space-y-4 text-gray-600">
                <p>
                  At AltaPoint, we're not waiting for the future of construction—we're building it 
                  to understand it. Our platforms, RenovaWise and Forge.AI, were born out of a simple 
                  need: to truly grasp how artificial intelligence can solve real-world problems in 
                  renovation, project management, and jobsite operations.
                </p>
                <p>
                  We're creating these tools so we can speak to our clients, partners, and the industry 
                  from a place of deep understanding—not speculation. This firsthand experience allows 
                  us to advise with confidence, onboard teams effectively, and guide others through 
                  digital transformation with credibility.
                </p>
                <p>
                  As these tools evolve, we're looking ahead. If you're an investor, a technology partner, 
                  or someone who sees the power of aligning capital with impact—we welcome the opportunity 
                  to grow with you.
                </p>
              </div>
              <Link
                href="/contact"
                className="inline-flex items-center px-8 py-3 bg-accent text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors mt-8"
              >
                Invest in AI with Us
              </Link>
            </div>

            {/* Platforms Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {platforms.map((platform, index) => (
                <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
                  <div className="relative h-64 bg-gray-200">
                    <Image
                      src={platform.image}
                      alt={platform.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-primary mb-3">{platform.title}</h3>
                    <p className="text-gray-600 mb-4">{platform.description}</p>
                    {platform.link && (
                      <a
                        href={platform.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-4 py-2 bg-accent text-white font-semibold rounded hover:bg-blue-700 transition-colors"
                      >
                        Visit Platform
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <ContactForm />
      </main>
      <Footer />
    </>
  )
}
