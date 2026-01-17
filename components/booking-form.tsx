'use client'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { Calendar, Users, Mail, Phone, User, MessageSquare } from 'lucide-react'
import { useState } from 'react'

// Validation schema
const bookingSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().min(10, 'Please enter a valid phone number'),
  eventDate: z.string().refine((date) => {
    const selectedDate = new Date(date)
    const today = new Date()
    today.setHours(0, 0, 0, 0)
    return selectedDate >= today
  }, 'Event date must be in the future'),
  guestCount: z.coerce.number().min(1, 'Guest count must be at least 1'),
  packageType: z.string().min(1, 'Please select a package'),
  message: z.string().optional(),
})

type BookingFormData = z.infer<typeof bookingSchema>

export default function BookingForm() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<BookingFormData>({
    resolver: zodResolver(bookingSchema),
  })

  const onSubmit = async (data: BookingFormData) => {
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500))
    console.log('Form data:', data)
    setIsSubmitted(true)
    reset()
    
    // Reset success message after 5 seconds
    setTimeout(() => setIsSubmitted(false), 5000)
  }

  return (
    <div className="bg-white rounded-lg shadow-lg p-8">
      {isSubmitted && (
        <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
          <p className="text-green-800 font-medium">
            Thank you for your booking request! We&apos;ll get back to you within 24 hours.
          </p>
        </div>
      )}

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {/* Name */}
        <div>
          <label htmlFor="name" className="flex items-center gap-2 text-gray-700 font-medium mb-2">
            <User className="w-5 h-5 text-gold" />
            Full Name *
          </label>
          <input
            {...register('name')}
            type="text"
            id="name"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold focus:border-transparent transition-all"
            placeholder="John Doe"
          />
          {errors.name && (
            <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
          )}
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className="flex items-center gap-2 text-gray-700 font-medium mb-2">
            <Mail className="w-5 h-5 text-gold" />
            Email Address *
          </label>
          <input
            {...register('email')}
            type="email"
            id="email"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold focus:border-transparent transition-all"
            placeholder="john@example.com"
          />
          {errors.email && (
            <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
          )}
        </div>

        {/* Phone */}
        <div>
          <label htmlFor="phone" className="flex items-center gap-2 text-gray-700 font-medium mb-2">
            <Phone className="w-5 h-5 text-gold" />
            Phone Number *
          </label>
          <input
            {...register('phone')}
            type="tel"
            id="phone"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold focus:border-transparent transition-all"
            placeholder="+61 400 123 456"
          />
          {errors.phone && (
            <p className="mt-1 text-sm text-red-600">{errors.phone.message}</p>
          )}
        </div>

        {/* Event Date */}
        <div>
          <label htmlFor="eventDate" className="flex items-center gap-2 text-gray-700 font-medium mb-2">
            <Calendar className="w-5 h-5 text-gold" />
            Event Date *
          </label>
          <input
            {...register('eventDate')}
            type="date"
            id="eventDate"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold focus:border-transparent transition-all"
          />
          {errors.eventDate && (
            <p className="mt-1 text-sm text-red-600">{errors.eventDate.message}</p>
          )}
        </div>

        {/* Guest Count */}
        <div>
          <label htmlFor="guestCount" className="flex items-center gap-2 text-gray-700 font-medium mb-2">
            <Users className="w-5 h-5 text-gold" />
            Number of Guests *
          </label>
          <input
            {...register('guestCount')}
            type="number"
            id="guestCount"
            min="1"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold focus:border-transparent transition-all"
            placeholder="50"
          />
          {errors.guestCount && (
            <p className="mt-1 text-sm text-red-600">{errors.guestCount.message}</p>
          )}
        </div>

        {/* Package Type */}
        <div>
          <label htmlFor="packageType" className="block text-gray-700 font-medium mb-2">
            Catering Package *
          </label>
          <select
            {...register('packageType')}
            id="packageType"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold focus:border-transparent transition-all"
          >
            <option value="">Select a package</option>
            <option value="family-feast">Family Feast (10-15 guests)</option>
            <option value="celebration-spread">Celebration Spread (20-40 guests)</option>
            <option value="grand-event">Grand Event (50+ guests)</option>
          </select>
          {errors.packageType && (
            <p className="mt-1 text-sm text-red-600">{errors.packageType.message}</p>
          )}
        </div>

        {/* Message */}
        <div>
          <label htmlFor="message" className="flex items-center gap-2 text-gray-700 font-medium mb-2">
            <MessageSquare className="w-5 h-5 text-gold" />
            Additional Details (Optional)
          </label>
          <textarea
            {...register('message')}
            id="message"
            rows={4}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold focus:border-transparent transition-all resize-none"
            placeholder="Tell us about your event, dietary requirements, or any special requests..."
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-gold hover:bg-earth-400 text-gray-900 font-semibold py-4 px-6 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? 'Submitting...' : 'Request Quote'}
        </button>

        <p className="text-sm text-gray-500 text-center">
          * Required fields. We&apos;ll respond to your request within 24 hours.
        </p>
      </form>
    </div>
  )
}
