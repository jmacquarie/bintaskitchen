import type { Metadata } from 'next'
import Image from 'next/image'
import { Leaf, Flame } from 'lucide-react'
import Navigation from '@/components/navigation'
import Footer from '@/components/footer'
import menuData from '@/data/menu.json'

export const metadata: Metadata = {
  title: "Menu - Binta's Catering | Authentic West African Dishes",
  description: 'Explore our authentic West African menu featuring traditional dishes from Burkina Faso. From Riz Gras to Poulet Bicyclette, discover flavors that tell a story.',
}

const spiceLevelColors = {
  none: 'bg-gray-100 text-gray-600',
  mild: 'bg-green-100 text-green-700',
  medium: 'bg-orange-100 text-orange-700',
  hot: 'bg-red-100 text-red-700',
}

const spiceLevelIcons = {
  none: 0,
  mild: 1,
  medium: 2,
  hot: 3,
}

// Map dish IDs to image paths
const dishImages: Record<string, string> = {
  'riz-gras': '/images/riz-gras.svg',
  'poulet-bicyclette': '/images/poulet-bicyclette.svg',
  'aloco': '/images/aloco.svg',
  'bissap': '/images/bissap.svg',
  'beignets': '/images/beignets.svg',
}

export default function MenuPage() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-saddle-brown to-earth-700 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4">
              Our Menu
            </h1>
            <p className="text-lg md:text-xl text-earth-100 max-w-3xl mx-auto">
              Every dish tells the story of Burkina Faso&apos;s rich culinary heritage. 
              Prepared with authentic ingredients and traditional methods passed down through generations.
            </p>
          </div>
        </section>

        {/* Menu Categories */}
        <section className="py-16 bg-earth-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {menuData.categories.map((category) => (
              <div key={category.id} className="mb-16 last:mb-0">
                <div className="text-center mb-12">
                  <h2 className="font-serif text-3xl md:text-4xl font-bold text-saddle-brown mb-3">
                    {category.name}
                  </h2>
                  <p className="text-lg text-gray-600">{category.description}</p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {category.dishes.map((dish) => (
                    <div
                      key={dish.id}
                      className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow overflow-hidden"
                    >
                      {/* Dish Image */}
                      <div className="relative h-48 bg-gradient-to-br from-earth-300 to-earth-500">
                        <Image
                          src={dishImages[dish.id] || '/images/placeholder-dish.svg'}
                          alt={dish.name}
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                        {dish.popular && (
                          <span className="absolute top-4 right-4 bg-gold text-gray-900 text-xs font-bold px-3 py-1 rounded-full">
                            Popular
                          </span>
                        )}
                      </div>

                      {/* Content */}
                      <div className="p-6">
                        <h3 className="font-serif text-2xl font-semibold text-saddle-brown mb-2">
                          {dish.name}
                        </h3>
                        <p className="text-gray-600 mb-4">{dish.description}</p>

                        {/* Contact for Quote */}
                        <div className="text-xl font-semibold text-gold mb-4">
                          Contact for quote
                        </div>

                        {/* Dietary & Spice Info */}
                        <div className="flex flex-wrap gap-2">
                          {dish.dietary.map((diet) => (
                            <span
                              key={diet}
                              className="inline-flex items-center gap-1 bg-green-50 text-green-700 text-xs font-medium px-3 py-1 rounded-full"
                            >
                              <Leaf className="w-3 h-3" />
                              {diet}
                            </span>
                          ))}
                          {dish.spiceLevel !== 'none' && (
                            <span
                              className={`inline-flex items-center gap-1 text-xs font-medium px-3 py-1 rounded-full ${
                                spiceLevelColors[dish.spiceLevel as keyof typeof spiceLevelColors]
                              }`}
                            >
                              <Flame className="w-3 h-3" />
                              {dish.spiceLevel}
                              {Array.from({ length: spiceLevelIcons[dish.spiceLevel as keyof typeof spiceLevelIcons] }).map((_, i) => (
                                <span key={i}>🌶️</span>
                              ))}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Catering CTA */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-saddle-brown mb-4">
              Planning an Event?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              These dishes and more are available through our catering packages. 
              Let us create a memorable West African dining experience for your guests.
            </p>
            <a
              href="/catering"
              className="inline-block bg-gold hover:bg-earth-400 text-gray-900 font-semibold px-8 py-4 rounded-lg transition-colors"
            >
              Explore Catering Packages
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
