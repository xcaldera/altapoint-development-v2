import Image from 'next/image'
import Link from 'next/link'

export default function Hero() {
  return (
    <section className="relative min-h-[70vh] flex items-center justify-center bg-secondary overflow-hidden">
      <Image
        src="https://picsum.photos/1920/1080?random=1"
        alt="Construction and development background"
        fill
        priority
        className="object-cover"
      />
      <div className="absolute inset-0 bg-black bg-opacity-50" />
      <div className="relative z-10 text-center max-w-2xl px-6">
        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold mb-6 font-big-shoulders">
          AltaPoint Development
        </h1>
        <p className="text-lg sm:text-xl lg:text-2xl text-gray-300 mb-8">
          Modern real estate development, consulting & AI-driven construction solutions
        </p>
        <Link href="/contact" className="inline-block bg-accent text-primary font-semibold py-3 px-8 rounded-md hover:bg-primary hover:text-accent transition-colors duration-300">
          Contact Us
        </Link>
      </div>
    </section>
  )
}
