import Image from 'next/image'
import Link from 'next/link'

export default function ServicesOverview() {
  const services = [
    {
      title: "Development Portfolio",
      description: "AltaPoint is actively investing in and delivering the next wave of smart, efficient housing and commercial development across Southern California. We don't just advise—we build.",
      link: "/development",
      linkText: "Explore Development Opportunities",
      image: "/images/development-bg.jpg"
    },
    {
      title: "Construction Management",
      description: "Whether you're a homeowner, builder, or property manager, AltaPoint offers full-scope and a la carte construction management services. We fill the gaps, manage complexity, and protect your bottom line.",
      link: "/construction",
      linkText: "Get Project Support Now",
      image: "/images/construction-image.jpg"
    },
    {
      title: "Consulting & AI Integration",
      description: "AltaPoint is on the front lines of construction technology. We offer consulting services to help construction teams, developers, and owners optimize operations using modern tools—including AI.",
      link: "/consulting",
      linkText: "Optimize with AI & Workflow Tools",
      image: "/images/ai-consulting-bg.jpg"
    }
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
            How We Build Together
          </h2>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto mb-8">
            At AltaPoint Development, we approach every opportunity through three powerful lenses: 
            as real estate developers shaping the built environment, as construction managers 
            ensuring projects succeed in the field, and as forward-thinking consultants helping 
            others optimize through real tools and modern methods.
          </p>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto">
            Whether you're looking to co-develop land, need boots-on-the-ground project support, 
            or want to future-proof your workflow with AI—we build smarter, together.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="mb-6">
                <div className="relative h-48 bg-gray-200 rounded-lg mb-4">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
              </div>
              <h3 className="text-xl font-bold text-primary mb-4">{service.title}</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
              <Link
                href={service.link}
                className="inline-flex items-center px-6 py-3 bg-accent text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
              >
                {service.linkText}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
