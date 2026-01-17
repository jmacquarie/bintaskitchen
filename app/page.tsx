import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Users, Heart, Award } from 'lucide-react'
import Navigation from '@/components/navigation'
import Footer from '@/components/footer'
import menuData from '@/data/menu.json'

export default function Home() {
  // Get popular dishes
  const popularDishes = menuData.categories.flatMap(cat => 
    cat.dishes.filter(dish => dish.popular)
  ).slice(0, 3)

  // Map dish IDs to image paths
  const dishImages: Record<string, string> = {
    'riz-gras': '/images/riz-gras.svg',
    'poulet-bicyclette': '/images/poulet-bicyclette.svg',
    'aloco': '/images/aloco.svg',
    'bissap': '/images/bissap.svg',
    'beignets': '/images/beignets.svg',
  }

  return (
    <>
      <Navigation />
      <main>
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-earth-800 via-saddle-brown to-earth-700 text-white py-20 md:py-32">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <h1 className="font-serif text-4xl md:text-6xl font-bold mb-6 text-balance">
                Authentic West African Flavors from Burkina Faso
              </h1>
              <p className="text-lg md:text-xl mb-8 text-earth-100">
                Experience the warmth of traditional Burkinabè hospitality and cuisine. 
                We bring generations of culinary heritage to your celebrations, 
                crafted with love and authentic ingredients.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/catering"
                  className="inline-flex items-center justify-center gap-2 bg-gold hover:bg-earth-400 text-gray-900 font-semibold px-8 py-4 rounded-lg transition-colors"
                >
                  Book Catering
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  href="/menu"
                  className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm border-2 border-white text-white font-semibold px-8 py-4 rounded-lg transition-colors"
                >
                  View Menu
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-center mb-12 text-saddle-brown">
              Why Choose Binta&apos;s Kitchen
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gold/10 rounded-full mb-4">
                  <Heart className="w-8 h-8 text-gold" />
                </div>
                <h3 className="font-serif text-xl font-semibold mb-2">Authentic Recipes</h3>
                <p className="text-gray-600">
                  Every dish is prepared using traditional methods passed down through generations, 
                  ensuring authentic flavors that transport you to West Africa.
                </p>
              </div>
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gold/10 rounded-full mb-4">
                  <Award className="w-8 h-8 text-gold" />
                </div>
                <h3 className="font-serif text-xl font-semibold mb-2">Fresh Ingredients</h3>
                <p className="text-gray-600">
                  We source the finest local and imported ingredients to maintain 
                  the integrity and richness of traditional Burkinabè cuisine.
                </p>
              </div>
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gold/10 rounded-full mb-4">
                  <Users className="w-8 h-8 text-gold" />
                </div>
                <h3 className="font-serif text-xl font-semibold mb-2">Personal Service</h3>
                <p className="text-gray-600">
                  From intimate family gatherings to grand celebrations, 
                  we tailor our service to make your event truly memorable.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Popular Dishes */}
        <section className="py-16 md:py-24 bg-earth-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4 text-saddle-brown">
                Guest Favorites
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Discover the dishes that bring our customers back time and time again
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {popularDishes.map((dish) => (
                <div key={dish.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow">
                  <div className="relative h-48 bg-gradient-to-br from-earth-300 to-earth-500">
                    <Image
                      src={dishImages[dish.id] || '/images/placeholder-dish.svg'}
                      alt={dish.name}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="font-serif text-2xl font-semibold mb-2 text-saddle-brown">
                      {dish.name}
                    </h3>
                    <p className="text-gray-600 mb-4 line-clamp-3">
                      {dish.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-lg font-semibold text-gold">
                        Contact for quote
                      </span>
                      <span className="text-sm text-gray-500 capitalize">
                        {dish.spiceLevel} spice
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="text-center mt-12">
              <Link
                href="/menu"
                className="inline-flex items-center gap-2 bg-gold hover:bg-earth-400 text-gray-900 font-semibold px-8 py-3 rounded-lg transition-colors"
              >
                View Full Menu
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24 bg-gradient-to-r from-saddle-brown to-earth-700 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6">
              Ready to Experience Authentic West African Cuisine?
            </h2>
            <p className="text-lg mb-8 text-earth-100">
              Whether it&apos;s an intimate family gathering or a grand celebration, 
              we&apos;re here to make your event unforgettable with flavors that tell a story.
            </p>
            <Link
              href="/catering"
              className="inline-flex items-center gap-2 bg-gold hover:bg-earth-400 text-gray-900 font-semibold px-8 py-4 rounded-lg transition-colors"
            >
              Get Started
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
