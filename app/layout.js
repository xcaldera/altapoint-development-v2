import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'AltaPoint Development | Construction Consulting & Real Estate Development',
  description: 'AltaPoint Development is a next-generation real estate development firm and construction solutions provider committed to reshaping Southern California.',
  keywords: 'construction consulting, real estate development, project management, AI integration, Southern California development',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
