import Navbar from './_components/Navbar'
import Hero from './_components/Hero'
import AboutSection from './_components/AboutSection'
import ServicesOverview from './_components/ServicesOverview'
import ContactForm from './_components/ContactForm'
import Footer from './_components/Footer'

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <AboutSection />
        <ServicesOverview />
        <ContactForm />
      </main>
      <Footer />
    </>
  )
}
