'use client'

import { motion } from 'framer-motion'
import { Youtube, Video, ArrowRight, ImageIcon } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

import { Button } from '@/components/ui/Button'
import { Card, CardContent } from '@/components/ui/Card'
import { fadeInUp, staggerContainer, staggerItem } from '@/lib/animations'

const categories = [
  {
    title: 'YouTube Editing',
    description: 'Engaging YouTube videos that keep viewers watching',
    href: '/portfolio/youtube',
    icon: Youtube,
    count: '100+ Videos',
    image: '/placeholder-youtube.jpg',
  },
  {
    title: 'Instagram Content',
    description: 'High-impact reels and stories that boost engagement',
    href: '/portfolio/instagram',
    icon: Video,
    count: '200+ Posts',
    image: '/placeholder-instagram.jpg',
  },
  {
    title: 'Thumbnail Design',
    description: 'Eye-catching thumbnails that increase click-through rates',
    href: '/portfolio/thumbnails',
    icon: ImageIcon,
    count: '300+ Designs',
    image: '/placeholder-thumbnails.jpg',
  },
]

const featured = [
  {
    id: 1,
    title: 'High-Energy Instagram Reel',
    category: 'Instagram Content',
    image: '/instagram/VID-20250720-WA0007.mp4',
    isVideo: true,
    description: 'Viral Instagram reel with engaging transitions and music sync that gained 75K views and boosted follower growth.',
    link: '/portfolio/instagram',
  },
  {
    id: 2,
    title: 'Professional YouTube Video',
    category: 'YouTube Editing',
    image: '',
    youtubeId: 'qeoRpAoZXGk',
    description: 'High-quality YouTube content with professional editing, storytelling and optimized for maximum engagement.',
    link: '/portfolio/youtube',
  },
  {
    id: 3,
    title: 'Amazing Thumbnail Design',
    category: 'Thumbnail Design',
    image: '/thumbnails/thumbnail1.jpg',
    description: 'Eye-catching thumbnail with bold colors and dynamic typography that achieved 12.5% CTR.',
    link: '/portfolio/thumbnails',
  },
]

export default function PortfolioPage() {
  return (
    <div className="pt-16">
        {/* Hero Section */}
        <section className="py-20 lg:py-32">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              variants={fadeInUp}
              initial="initial"
              animate="animate"
              className="text-center space-y-8"
            >
              <h1 className="text-4xl md:text-6xl font-display font-bold">
                My{' '}
                <span className="gradient-text-primary">
                  Portfolio
                </span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
                Explore my collection of YouTube edits, Instagram content, and thumbnail designs. 
                Each project demonstrates how engaging content can transform brands and grow audiences.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Categories */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-2 gap-8"
            >
              {categories.map((category) => {
                const Icon = category.icon
                return (
                  <motion.div key={category.title} variants={staggerItem}>
                    <Link href={category.href} className="group block">
                      <Card className="overflow-hidden hover:shadow-hard transition-all duration-300 group-hover:-translate-y-2">
                        <div className="aspect-video bg-muted relative overflow-hidden">
                          {/* Placeholder image */}
                          <div className="w-full h-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                            <Icon className="h-16 w-16 text-primary/50" />
                          </div>
                          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                            <Button variant="secondary" size="lg">
                              View Gallery
                              <ArrowRight className="ml-2 h-5 w-5" />
                            </Button>
                          </div>
                        </div>
                        <CardContent className="p-6">
                          <div className="flex items-start justify-between mb-4">
                            <div>
                              <h3 className="text-2xl font-bold mb-2">{category.title}</h3>
                              <p className="text-muted-foreground mb-3">{category.description}</p>
                              <span className="text-sm text-primary font-medium">{category.count}</span>
                            </div>
                            <Icon className="h-8 w-8 text-primary flex-shrink-0" />
                          </div>
                        </CardContent>
                      </Card>
                    </Link>
                  </motion.div>
                )
              })}
            </motion.div>
          </div>
        </section>

        {/* Featured Work */}
        <section className="py-20 bg-muted/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              variants={fadeInUp}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
                Featured Work
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                A selection of my best work showcasing different styles and techniques.
              </p>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {featured.map((item) => (
                <motion.div key={item.id} variants={staggerItem}>
                  <Card className="overflow-hidden group hover:shadow-hard transition-all duration-300 hover:-translate-y-2">
                    <div className="aspect-square bg-muted relative overflow-hidden">
                      {/* Render different media types */}
                      {item.isVideo ? (
                        <video
                          className="w-full h-full object-cover"
                          preload="metadata"
                          muted
                          loop
                          playsInline
                          onMouseEnter={(e) => e.currentTarget.play()}
                          onMouseLeave={(e) => {
                            e.currentTarget.pause()
                            e.currentTarget.currentTime = 0
                          }}
                        >
                          <source src={item.image} type="video/mp4" />
                        </video>
                      ) : item.youtubeId ? (
                        <iframe
                          className="w-full h-full"
                          src={`https://www.youtube.com/embed/${item.youtubeId}?rel=0&modestbranding=1&showinfo=0`}
                          title={item.title}
                          frameBorder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                          allowFullScreen
                        />
                      ) : item.image ? (
                        <Image
                          src={item.image}
                          alt={item.title}
                          fill
                          className="object-cover transition-transform duration-300 group-hover:scale-105"
                          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        />
                      ) : (
                        <div className="w-full h-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                          <span className="text-muted-foreground">Featured Work {item.id}</span>
                        </div>
                      )}
                      
                      <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-6">
                        <div className="text-center text-white">
                          <h4 className="text-lg font-semibold mb-2">{item.title}</h4>
                          <p className="text-sm opacity-90 mb-4 line-clamp-3">{item.description}</p>
                          <Button variant="secondary" size="sm" asChild>
                            <Link href={item.link || '#'}>
                              View Details
                            </Link>
                          </Button>
                        </div>
                      </div>
                    </div>
                    <CardContent className="p-4">
                      <div className="space-y-2">
                        <h3 className="font-semibold line-clamp-1">{item.title}</h3>
                        <p className="text-sm text-primary">{item.category}</p>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              variants={fadeInUp}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="space-y-8"
            >
              <h2 className="text-3xl md:text-4xl font-display font-bold">
                Like What You See?
              </h2>
              <p className="text-lg text-muted-foreground">
                Let's discuss your project and create something amazing together.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild>
                  <Link href="/contact">
                    <>
                      Start Your Project
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </>
                  </Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link href="/about">
                    Learn More About Me
                  </Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
  )
}
