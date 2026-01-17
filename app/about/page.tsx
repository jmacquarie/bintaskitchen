import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Heart, Globe, Award, ArrowRight } from 'lucide-react'
import Navigation from '@/components/navigation'
import Footer from '@/components/footer'

export const metadata: Metadata = {
  title: "About Binta's Kitchen - Our Story & West African Heritage",
  description: "Learn about Binta's journey from Burkina Faso to Australia, bringing authentic West African flavors and traditions to every event we cater.",
}

export default function AboutPage() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-saddle-brown to-earth-700 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4">
              Our Story
            </h1>
            <p className="text-lg md:text-xl text-earth-100 max-w-3xl mx-auto">
              A journey from Burkina Faso to Australia, bringing authentic flavors and warm hospitality
            </p>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="prose prose-lg max-w-none">
              <div className="mb-8">
                <h2 className="font-serif text-3xl font-bold text-saddle-brown mb-4">
                  From Ouagadougou to Melbourne
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  Binta&apos;s Kitchen was born from a deep love for West African cuisine and a desire 
                  to share the rich culinary traditions of Burkina Faso with Australia. Growing up in 
                  Ouagadougou, founder Binta Traoré learned to cook alongside her grandmother, mastering 
                  the art of traditional dishes that have been passed down through generations.
                </p>
              </div>

              <div className="mb-8">
                <h2 className="font-serif text-3xl font-bold text-saddle-brown mb-4">
                  Preserving Heritage Through Food
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Every dish we prepare tells a story. The slow-simmered peanut butter stews, the aromatic 
                  grilled chicken marinated in traditional spices, the perfectly cooked Riz Gras that brings 
                  families together—these are more than just meals. They are connections to our heritage, 
                  celebrations of community, and expressions of love.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  When Binta moved to Australia, she noticed a gap in the culinary landscape. While there 
                  was increasing appreciation for diverse cuisines, authentic West African food remained 
                  relatively unknown. She saw an opportunity not just to introduce new flavors, but to 
                  bridge cultures through the universal language of food.
                </p>
              </div>

              <div className="mb-8">
                <h2 className="font-serif text-3xl font-bold text-saddle-brown mb-4">
                  Authenticity Meets Quality
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  At Binta&apos;s Kitchen, we are committed to authenticity without compromise. We source 
                  traditional spices and ingredients directly from West Africa, ensuring that every bite 
                  captures the true essence of Burkinabè cuisine. Our fresh, locally-sourced Australian 
                  produce complements these authentic flavors, creating a perfect fusion of tradition and quality.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-16 bg-earth-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-center text-saddle-brown mb-12">
              Our Values
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white rounded-lg p-8 shadow-md text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gold/10 rounded-full mb-4">
                  <Heart className="w-8 h-8 text-gold" />
                </div>
                <h3 className="font-serif text-xl font-semibold text-saddle-brown mb-3">
                  Authenticity
                </h3>
                <p className="text-gray-600">
                  We honor traditional recipes and cooking methods, ensuring every dish reflects 
                  the true taste of Burkina Faso.
                </p>
              </div>

              <div className="bg-white rounded-lg p-8 shadow-md text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gold/10 rounded-full mb-4">
                  <Globe className="w-8 h-8 text-gold" />
                </div>
                <h3 className="font-serif text-xl font-semibold text-saddle-brown mb-3">
                  Cultural Bridge
                </h3>
                <p className="text-gray-600">
                  We believe food has the power to connect people across cultures, fostering 
                  understanding and appreciation.
                </p>
              </div>

              <div className="bg-white rounded-lg p-8 shadow-md text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gold/10 rounded-full mb-4">
                  <Award className="w-8 h-8 text-gold" />
                </div>
                <h3 className="font-serif text-xl font-semibold text-saddle-brown mb-3">
                  Excellence
                </h3>
                <p className="text-gray-600">
                  From ingredients to presentation, we maintain the highest standards to make 
                  your event truly memorable.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Mission Statement */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-saddle-brown mb-6">
              Our Mission
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              To bring the authentic flavors, warmth, and hospitality of West Africa to every event, 
              creating memorable culinary experiences that celebrate heritage, unite communities, 
              and introduce Australia to the rich tapestry of Burkinabè cuisine.
            </p>
            <div className="inline-block border-t-4 border-gold w-24"></div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-saddle-brown to-earth-700 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6">
              Experience Our Story Through Food
            </h2>
            <p className="text-lg mb-8 text-earth-100">
              Let us cater your next event and share the rich flavors of West African cuisine with your guests.
            </p>
            <Link
              href="/catering"
              className="inline-flex items-center gap-2 bg-gold hover:bg-earth-400 text-gray-900 font-semibold px-8 py-4 rounded-lg transition-colors"
            >
              Book Your Event
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
