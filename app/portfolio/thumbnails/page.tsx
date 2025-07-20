'use client'

import { motion } from 'framer-motion'
import { ArrowLeft, Eye, Download, MousePointer } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

import { Button } from '@/components/ui/Button'
import { Card, CardContent } from '@/components/ui/Card'
import { fadeInUp, staggerContainer, staggerItem } from '@/lib/animations'

const thumbnailDesigns = [
  {
    filename: 'thumbnail1.jpg',
    title: 'Sample Thumbnail Design',
    description: 'High-energy  thumbnail with bold colors and dynamic typography designed to increase click-through rates',
    category: 'Mystory Content',
    ctr: '12.5%',
    type: 'YouTube Thumbnail',
  },
  {
    filename: 'thumbnail2.jpg',
    title: 'Sample Thumbnail',
    description: 'Clean and professional thumbnail featuring clear value proposition',
    category: 'History',
    ctr: '9.8%',
    type: 'YouTube Thumbnail',
  },
  {
    filename: 'thumbnail3.jpg',
    title: ' Content Thumbnail',
    description: ' thumbnail with clear hierarchy and engaging visual elements to attract learners',
    category: 'Education',
    ctr: '11.2%',
    type: 'YouTube Thumbnail',
  },
  {
    filename: 'thumbnail4.jpg',
    title: 'Sample Thumbnail',
    description: 'Eye-catching  thumbnail with vibrant colors and compelling visual storytelling',
    category: 'Entertainment',
    ctr: '14.3%',
    type: 'YouTube Thumbnail',
  },
  {
    filename: 'thumbnail5.jpg',
    title: 'Sample Thumbnail Design',
    description: ' thumbnail with aesthetic appeal and clear messaging designed for maximum engagement',
    category: 'Youtube',
    ctr: '10.7%',
    type: 'YouTube Thumbnail',
  },
]

export default function ThumbnailsPortfolioPage() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 lg:py-32 relative overflow-hidden">
        {/* Background gradient effects */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5" />
        <motion.div
          className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-full blur-2xl"
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 4, repeat: Infinity }}
        />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            variants={fadeInUp}
            initial="initial"
            animate="animate"
            className="text-center space-y-8"
          >
            {/* Back button */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="flex justify-center"
            >
              <Button variant="outline" asChild className="group">
                <Link href="/portfolio" className="flex items-center gap-2">
                  <ArrowLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform" />
                  Back to Portfolio
                </Link>
              </Button>
            </motion.div>

            <h1 className="text-4xl md:text-6xl font-display font-bold">
              <span className="gradient-text-primary">
                Thumbnail
              </span>{' '}
              Design
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              Eye-catching thumbnail designs that stop the scroll and drive clicks. 
              Each design is strategically crafted to maximize click-through rates 
              and improve video performance across all platforms.
            </p>
            
            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap justify-center gap-8 text-center"
            >
              <div className="space-y-1">
                <div className="text-2xl font-bold text-primary">300+</div>
                <div className="text-sm text-muted-foreground">Thumbnails Created</div>
              </div>
              <div className="space-y-1">
                <div className="text-2xl font-bold text-secondary">15%</div>
                <div className="text-sm text-muted-foreground">Avg. CTR Increase</div>
              </div>
              <div className="space-y-1">
                <div className="text-2xl font-bold text-accent">48hrs</div>
                <div className="text-sm text-muted-foreground">Turnaround Time</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Thumbnail Gallery */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {thumbnailDesigns.map((thumbnail) => (
              <motion.div key={thumbnail.filename} variants={staggerItem}>
                <Card className="overflow-hidden group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 bg-gradient-to-br from-background/80 to-background border-white/10 backdrop-blur-sm">
                  <div className="aspect-video bg-black relative overflow-hidden">
                    <Image
                      src={`/thumbnails/${thumbnail.filename}`}
                      alt={thumbnail.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    
                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    
                    {/* CTR badge */}
                    <div className="absolute top-3 right-3 bg-green-500/80 backdrop-blur-sm text-white text-xs px-2 py-1 rounded-full font-medium">
                      CTR: {thumbnail.ctr}
                    </div>
                    
                    {/* Click indicator */}
                    <div className="absolute bottom-3 right-3 flex items-center gap-1 bg-black/60 backdrop-blur-sm text-white text-xs px-2 py-1 rounded-full pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <MousePointer className="h-3 w-3" />
                      Click to view
                    </div>
                  </div>
                  
                  <CardContent className="p-6 space-y-4">
                    <div>
                      <h3 className="font-semibold text-lg mb-2 line-clamp-1">{thumbnail.title}</h3>
                      <p className="text-sm text-muted-foreground line-clamp-2 mb-3">{thumbnail.description}</p>
                    </div>
                    
                    <div className="space-y-3">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-primary font-medium">{thumbnail.category}</span>
                        <span className="text-muted-foreground">{thumbnail.type}</span>
                      </div>
                      
                      <div className="flex gap-2">
                        <Button 
                          variant="outline" 
                          size="sm" 
                          className="flex-1"
                          onClick={() => {
                            const link = document.createElement('a')
                            link.href = `/thumbnails/${thumbnail.filename}`
                            link.download = thumbnail.filename
                            document.body.appendChild(link)
                            link.click()
                            document.body.removeChild(link)
                          }}
                        >
                          <Download className="h-4 w-4 mr-2" />
                          Download
                        </Button>
                        <Button 
                          size="sm" 
                          className="flex-1"
                          onClick={() => {
                            window.open(`/thumbnails/${thumbnail.filename}`, '_blank')
                          }}
                        >
                          <Eye className="h-4 w-4 mr-2" />
                          View Full
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="text-center space-y-8"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold">
              Why My Thumbnails Drive Results
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              {[
                {
                  title: 'Psychology-Based Design',
                  description: 'Every thumbnail uses proven psychological triggers like curiosity gaps and emotional hooks to compel clicks.',
                },
                {
                  title: 'A/B Test Optimized',
                  description: 'Designs are based on extensive A/B testing data to ensure maximum click-through rates.',
                },
                {
                  title: 'Platform Optimized',
                  description: 'Thumbnails are optimized for each platform\'s specific requirements and audience behavior.',
                },
              ].map((feature) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="text-center p-6 rounded-lg bg-background/50 backdrop-blur-sm"
                >
                  <h3 className="text-lg font-semibold mb-3">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </motion.div>
              ))}
            </div>
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
              Ready to Boost Your Click-Through Rates?
            </h2>
            <p className="text-lg text-muted-foreground">
              Let&apos;s create thumbnails that grab attention, drive clicks, and grow your audience.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="/contact">
                  Order Custom Thumbnails
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/portfolio">
                  View All Work
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
