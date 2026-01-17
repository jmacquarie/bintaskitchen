import type { Metadata } from 'next'
import { Check } from 'lucide-react'
import Navigation from '@/components/navigation'
import Footer from '@/components/footer'
import BookingForm from '@/components/booking-form'
import menuData from '@/data/menu.json'

export const metadata: Metadata = {
  title: "Catering Services - Binta's Kitchen | West African Event Catering",
  description: 'Professional West African catering for all occasions. From intimate family gatherings to grand celebrations, we bring authentic Burkinabè flavors to your event.',
}

export default function CateringPage() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-saddle-brown to-earth-700 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4">
              Catering Services
            </h1>
            <p className="text-lg md:text-xl text-earth-100 max-w-3xl mx-auto">
              Transform your event with authentic West African cuisine. 
              We bring the warmth of Burkinabè hospitality and exceptional flavors to celebrations of all sizes.
            </p>
          </div>
        </section>

        {/* Catering Packages */}
        <section className="py-16 bg-earth-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-center text-saddle-brown mb-12">
              Our Catering Packages
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {menuData.cateringPackages.map((pkg) => (
                <div
                  key={pkg.id}
                  className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow"
                >
                  <h3 className="font-serif text-2xl font-bold text-saddle-brown mb-2">
                    {pkg.name}
                  </h3>
                  <p className="text-gray-600 mb-4">{pkg.description}</p>
                  <div className="mb-6">
                    <span className="text-2xl font-bold text-gold">
                      Contact for custom quote
                    </span>
                  </div>
                  <div className="space-y-3 mb-6">
                    <p className="text-sm text-gray-500 font-medium">Package Includes:</p>
                    {pkg.includes.map((item, index) => (
                      <div key={index} className="flex items-start gap-2">
                        <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{item}</span>
                      </div>
                    ))}
                  </div>
                  <div className="pt-4 border-t border-gray-200 text-sm text-gray-600">
                    <p>
                      <span className="font-semibold">Guests:</span> {pkg.minGuests}
                      {pkg.maxGuests ? `-${pkg.maxGuests}` : '+'}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Booking Form Section */}
        <section className="py-16 bg-white">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-saddle-brown mb-4">
                Request a Quote
              </h2>
              <p className="text-lg text-gray-600">
                Fill out the form below and we&apos;ll get back to you within 24 hours 
                with a personalized quote for your event.
              </p>
            </div>
            <BookingForm />
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-16 bg-earth-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-center text-saddle-brown mb-12">
              What Makes Us Different
            </h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="font-serif text-xl font-semibold text-saddle-brown mb-3">
                  Authentic Preparation
                </h3>
                <p className="text-gray-600">
                  Every dish is prepared using traditional methods and authentic spices 
                  imported directly from West Africa, ensuring genuine flavors.
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="font-serif text-xl font-semibold text-saddle-brown mb-3">
                  Flexible Menu Options
                </h3>
                <p className="text-gray-600">
                  We work with you to customize the menu to accommodate dietary requirements 
                  and preferences while maintaining authentic taste.
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="font-serif text-xl font-semibold text-saddle-brown mb-3">
                  Professional Service
                </h3>
                <p className="text-gray-600">
                  Our experienced team handles everything from setup to cleanup, 
                  allowing you to focus on enjoying your event.
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="font-serif text-xl font-semibold text-saddle-brown mb-3">
                  Cultural Experience
                </h3>
                <p className="text-gray-600">
                  Beyond food, we bring the warmth and hospitality of West African culture, 
                  creating a memorable experience for your guests.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
