'use client'

import { motion } from 'framer-motion'
import { ArrowLeft, Eye, Volume2, VolumeX } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'

import { Button } from '@/components/ui/Button'
import { Card, CardContent } from '@/components/ui/Card'
import { fadeInUp, staggerContainer, staggerItem } from '@/lib/animations'

const instagramVideos = [
  {
    filename: 'VID-20250720-WA0007.mp4',
    title: 'Sample Instagram Reel #1',
    description: 'High-energy content with engaging transitions and music sync',
    category: 'Instagram Reel',
    duration: '0:30',
    views: '75K',
  },
  {
    filename: 'VID-20250720-WA0008.mp4',
    title: 'Sample Instagram Reel #2',
    description: 'Storytelling-focused reel with smooth cuts and effects',
    category: 'Instagram Reel',
    duration: '0:45',
    views: '122K',
  },
  {
    filename: 'VID-20250720-WA0009.mp4',
    title: 'Sample Instagram Reel #3',
    description: 'Trending format with quick edits and catchy visuals',
    category: 'Instagram Reel',
    duration: '0:35',
    views: '68K',
  },
  {
    filename: 'VID-20250720-WA0010.mp4',
    title: 'Sample Instagram Reel #4',
    description: 'Professional brand content with modern editing style',
    category: 'Instagram Reel',
    duration: '0:40',
    views: '69K',
  },
  {
    filename: 'VID-20250720-WA0011.mp4',
    title: 'Sample Instagram Reel #5',
    description: 'Fun and engaging content designed for maximum reach',
    category: 'Instagram Reel',
    duration: '0:50',
    views: '81K',
  },
]

export default function InstagramPortfolioPage() {
  const [mutedStates, setMutedStates] = useState<Record<string, boolean>>({})

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
                Instagram
              </span>{' '}
              Content
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              High-impact Instagram reels and videos designed to boost engagement, 
              increase followers, and create viral moments. Each video is crafted 
              with trending formats and optimized for maximum reach.
            </p>
            
            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap justify-center gap-8 text-center"
            >
              <div className="space-y-1">
                <div className="text-2xl font-bold text-primary">100+</div>
                <div className="text-sm text-muted-foreground">Reels Created</div>
              </div>
              <div className="space-y-1">
                <div className="text-2xl font-bold text-secondary">300K+</div>
                <div className="text-sm text-muted-foreground">Total Views</div>
              </div>
              <div className="space-y-1">
                <div className="text-2xl font-bold text-accent">95%</div>
                <div className="text-sm text-muted-foreground">Engagement Rate</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Instagram Videos Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          >
            {instagramVideos.map((video, index) => (
              <motion.div key={video.filename} variants={staggerItem}>
                <Card 
                  className="overflow-hidden group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 bg-gradient-to-br from-background/80 to-background border-white/10 backdrop-blur-sm cursor-pointer"
                  onClick={() => {
                    const videoEl = document.querySelector(`[data-video="${video.filename}"] video`) as HTMLVideoElement
                    if (videoEl) {
                      if (videoEl.paused) {
                        videoEl.muted = false // Enable sound when user clicks
                        setMutedStates(prev => ({ ...prev, [video.filename]: false }))
                        videoEl.play().catch(console.error)
                      } else {
                        videoEl.pause()
                        videoEl.muted = true // Mute when paused
                        setMutedStates(prev => ({ ...prev, [video.filename]: true }))
                      }
                    }
                  }}
                  onMouseEnter={() => {
                    const videoEl = document.querySelector(`[data-video="${video.filename}"] video`) as HTMLVideoElement
                    if (videoEl && videoEl.paused) {
                      // Keep muted on hover to avoid autoplay restrictions
                      videoEl.play().catch(console.error)
                    }
                  }}
                  onMouseLeave={() => {
                    const videoEl = document.querySelector(`[data-video="${video.filename}"] video`) as HTMLVideoElement
                    if (videoEl && !videoEl.paused) {
                      videoEl.pause()
                      videoEl.currentTime = 0
                      videoEl.muted = true // Ensure muted when leaving
                      setMutedStates(prev => ({ ...prev, [video.filename]: true }))
                    }
                  }}
                >
                  <div className="aspect-[9/16] bg-black relative overflow-hidden" data-video={video.filename}>
                    <video
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      preload="metadata"
                      muted
                      loop
                      playsInline
                    >
                      <source src={`/instagram/${video.filename}`} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                    
                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                    
                    {/* Duration badge */}
                    <div className="absolute top-3 right-3 bg-black/60 backdrop-blur-sm text-white text-xs px-2 py-1 rounded-full pointer-events-none">
                      {video.duration}
                    </div>
                    
                    {/* View count */}
                    <div className="absolute bottom-3 left-3 flex items-center gap-1 bg-black/60 backdrop-blur-sm text-white text-xs px-2 py-1 rounded-full pointer-events-none">
                      <Eye className="h-3 w-3" />
                      {video.views}
                    </div>
                    
                    {/* Mute/Unmute button */}
                    <button
                      className="absolute bottom-3 right-3 w-8 h-8 bg-black/60 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/20 hover:bg-black/80 transition-colors duration-200"
                      onClick={(e) => {
                        e.stopPropagation()
                        const videoEl = document.querySelector(`[data-video="${video.filename}"] video`) as HTMLVideoElement
                        if (videoEl) {
                          videoEl.muted = !videoEl.muted
                          setMutedStates(prev => ({
                            ...prev,
                            [video.filename]: videoEl.muted
                          }))
                        }
                      }}
                    >
                      {mutedStates[video.filename] !== false ? (
                        <VolumeX className="h-4 w-4 text-white" />
                      ) : (
                        <Volume2 className="h-4 w-4 text-white" />
                      )}
                    </button>
                  </div>
                  
                  <CardContent className="p-4 space-y-3 pointer-events-none">
                    <div>
                      <h3 className="font-semibold text-sm mb-1 line-clamp-1">{video.title}</h3>
                      <p className="text-xs text-muted-foreground line-clamp-2">{video.description}</p>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-primary font-medium">{video.category}</span>
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
              Why My Instagram Content Works
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              {[
                {
                  title: 'Trending Formats',
                  description: 'Always up-to-date with the latest Instagram trends and viral formats that drive engagement.',
                },
                {
                  title: 'Music Synchronization',
                  description: 'Perfect timing with trending audio and music to maximize reach and shareability.',
                },
                {
                  title: 'Hook Strategy',
                  description: 'Compelling opening seconds designed to stop the scroll and keep viewers watching.',
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
              Ready to Go Viral?
            </h2>
            <p className="text-lg text-muted-foreground">
              Let's create Instagram content that gets noticed, shared, and drives real results for your brand.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="/contact">
                  Start Your Instagram Project
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
