import Image from 'next/image'
import Link from 'next/link'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gray-900">
      <div className="absolute inset-0">
        <Image
          src="/images/hero-background.jpg"
          alt="Construction and development background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      </div>
      
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold text-white mb-6 font-big-shoulders">
          AltaPoint Development
        </h1>
        <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-3xl mx-auto leading-relaxed">
          A next-generation real estate development firm and construction solutions provider 
          committed to reshaping Southern California. From acquiring land and delivering 
          high-impact projects to consulting on complex builds and AI-driven workflows—we 
          partner with clients, cities, and teams to drive smarter outcomes across every 
          phase of construction and development.
        </p>
        <Link
          href="/contact"
          className="inline-flex items-center px-8 py-3 bg-accent text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
        >
          Get Started Today
        </Link>
      </div>
    </section>
  )
}
