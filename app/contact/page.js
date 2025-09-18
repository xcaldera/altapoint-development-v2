import Navbar from '../_components/Navbar'
import Footer from '../_components/Footer'
import ContactForm from '../_components/ContactForm'

export const metadata = {
  title: 'Contact AltaPoint Development | Construction Consulting & Project Management',
  description: 'Contact AltaPoint Development for construction consulting, project management support, and AI integration services. Let\'s build together!',
}

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main>
        <div className="py-12">
          <ContactForm />
        </div>
      </main>
      <Footer />
    </>
  )
}
