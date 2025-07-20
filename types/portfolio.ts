export interface MediaItem {
  id: string
  type: 'image' | 'video'
  url: string
  thumbnail?: string
  title: string
  description?: string
  category: string
  tags: string[]
  dimensions?: {
    width: number
    height: number
  }
  metadata?: {
    camera?: string
    settings?: string
    location?: string
    date?: string
  }
  featured: boolean
  order: number
}

export interface PortfolioCategory {
  id: string
  name: string
  slug: string
  description?: string
  count: number
  featured: boolean
}

export interface Gallery {
  id: string
  title: string
  description?: string
  category: string
  items: MediaItem[]
  coverImage: string
  featured: boolean
  createdAt: string
  updatedAt: string
}

export interface VideoMetadata {
  duration: number
  resolution: string
  fps: number
  codec: string
  size: number
}

export interface ImageMetadata {
  exif?: {
    camera: string
    lens: string
    iso: number
    aperture: string
    shutterSpeed: string
    focalLength: string
  }
  location?: {
    lat: number
    lng: number
    city: string
    country: string
  }
  size: number
  format: string
}
