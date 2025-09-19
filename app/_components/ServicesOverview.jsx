import Image from 'next/image'
import Link from 'next/link'

export default function ServicesOverview() {
  const services = [
    {
      title: 'Development Portfolio',
      description: 'AltaPoint is actively investing in and delivering the next wave of smart, efficient housing and commercial projects across Southern California.',
      link: '/development',
      linkText: 'Explore Development',
      image: 'https://picsum.photos/seed/development/600/400',
    },
    {
      title: 'Construction Management',
      description: "Whether you're a homeowner, builder, or property manager, AltaPoint offers full-scope management to turn your vision into reality.",
      link: '/construction',
      linkText: 'Get Project Support',
      image: 'https://picsum.photos/seed/construction/600/400',
    },
    {
      title: 'Consulting & AI Integration',
      description: 'AltaPoint is on the front lines of construction technology. We offer consulting to help you optimize with AI & workflow tools.',
      link: '/consulting',
      linkText: 'Optimize With AI',
      image: 'https://picsum.photos/seed/consulting/600/400',
    },
  ];

  return (
    <section className="py-20 bg-secondary">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-5xl font-bold text-accent mb-12 font-big-shoulders text-center">
          How We Build Together
        </h2>
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div key={service.title} className="bg-primary rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden flex flex-col">
              <div className="relative h-48">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-semibold text-accent mb-3 font-big-shoulders">{service.title}</h3>
                <p className="text-gray-300 flex-grow">{service.description}</p>
                <Link href={service.link} className="mt-5 inline-block text-accent hover:text-primary font-semibold">
                  {service.linkText} &rarr;
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
