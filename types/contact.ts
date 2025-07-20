export interface ContactForm {
  name: string
  email: string
  subject: string
  message: string
  budget?: string
  timeline?: string
  projectType?: string
  phone?: string
}

export interface ContactInfo {
  email: string
  phone?: string
  location?: {
    address: string
    city: string
    country: string
    coordinates?: {
      lat: number
      lng: number
    }
  }
  social: {
    instagram?: string
    facebook?: string
    twitter?: string
    linkedin?: string
    youtube?: string
    behance?: string
    dribbble?: string
  }
  availability: {
    status: 'available' | 'busy' | 'booked'
    message?: string
    responseTime?: string
  }
}

export interface Testimonial {
  id: string
  name: string
  role?: string
  company?: string
  avatar?: string
  rating: number
  content: string
  featured: boolean
  createdAt: string
  projectType?: string
}

export interface Service {
  id: string
  title: string
  description: string
  features: string[]
  pricing: {
    starting: number
    currency: string
    unit: string
  }
  duration: string
  category: 'photography' | 'videography' | 'editing'
  popular?: boolean
}
