import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
})

export const metadata: Metadata = {
  title: "Binta's Catering - Authentic West African Cuisine in Australia",
  description: 'Experience the rich flavors of Burkina Faso with our authentic West African catering services. From family gatherings to grand celebrations, we bring traditional dishes and warm hospitality to your event.',
  keywords: ['West African catering', 'Burkina Faso cuisine', 'African food Australia', 'catering services', 'traditional African dishes'],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="font-sans antialiased bg-earth-50 text-gray-900">
        {children}
      </body>
    </html>
  )
}
