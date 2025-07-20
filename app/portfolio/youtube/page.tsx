'use client'

import { motion } from 'framer-motion'
import { Youtube, ArrowLeft, Eye, ThumbsUp } from 'lucide-react'
import Link from 'next/link'

import { Button } from '@/components/ui/Button'
import { Card, CardContent } from '@/components/ui/Card'
import { fadeInUp, staggerContainer, staggerItem } from '@/lib/animations'

const youtubeVideos = [
  {
    id: 'qeoRpAoZXGk',
    title: 'YouTube Video #1',
    description: 'Professional video content with engaging storytelling and high production value',
    category: 'YouTube Video',
    views: '50K',
    likes: '2.1K',
  },
  {
    id: 'eJ9efKdjBC8',
    title: 'YouTube Video #2', 
    description: 'Creative content showcasing advanced editing techniques and visual effects',
    category: 'YouTube Video',
    views: '75K',
    likes: '3.2K',
  },
  {
    id: 'eJmlzr3KZPg',
    title: 'YouTube Video #3',
    description: 'Educational content with clear explanations and engaging visual presentation',
    category: 'YouTube Video', 
    views: '120K',
    likes: '5.8K',
  },
  {
    id: 'eUWwNjU7Sh0',
    title: 'YouTube Video #4',
    description: 'Entertainment focused content with dynamic editing and catchy elements',
    category: 'YouTube Video',
    views: '89K',
    likes: '4.1K',
  },
]

export default function YouTubePortfolioPage() {
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
                YouTube
              </span>{' '}
              Content
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              Professional YouTube videos crafted to inform, entertain, and engage audiences. 
              Each video is optimized for YouTube's algorithm with compelling thumbnails, 
              strategic SEO, and content that keeps viewers watching.
            </p>
            
            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap justify-center gap-8 text-center"
            >
              <div className="space-y-1">
                <div className="text-2xl font-bold text-primary">50+</div>
                <div className="text-sm text-muted-foreground">Videos Published</div>
              </div>
              <div className="space-y-1">
                <div className="text-2xl font-bold text-secondary">500K+</div>
                <div className="text-sm text-muted-foreground">Total Views</div>
              </div>
              <div className="space-y-1">
                <div className="text-2xl font-bold text-accent">92%</div>
                <div className="text-sm text-muted-foreground">Retention Rate</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* YouTube Videos Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-8"
          >
            {youtubeVideos.map((video, index) => (
              <motion.div key={video.id} variants={staggerItem}>
                <Card className="overflow-hidden group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 bg-gradient-to-br from-background/80 to-background border-white/10 backdrop-blur-sm">
                  <div className="aspect-video bg-black relative overflow-hidden">
                    <iframe
                      className="w-full h-full"
                      src={`https://www.youtube.com/embed/${video.id}?rel=0&modestbranding=1&showinfo=0`}
                      title={video.title}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                    />
                    
                    {/* View count overlay */}
                    <div className="absolute top-3 left-3 flex items-center gap-1 bg-black/60 backdrop-blur-sm text-white text-xs px-2 py-1 rounded-full pointer-events-none">
                      <Eye className="h-3 w-3" />
                      {video.views}
                    </div>
                    
                    {/* Likes overlay */}
                    <div className="absolute top-3 right-3 flex items-center gap-1 bg-black/60 backdrop-blur-sm text-white text-xs px-2 py-1 rounded-full pointer-events-none">
                      <ThumbsUp className="h-3 w-3" />
                      {video.likes}
                    </div>
                  </div>
                  
                  <CardContent className="p-6 space-y-4">
                    <div>
                      <h3 className="font-semibold text-lg mb-2 line-clamp-1">{video.title}</h3>
                      <p className="text-sm text-muted-foreground line-clamp-2">{video.description}</p>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-primary font-medium">{video.category}</span>
                      <Button variant="outline" size="sm" asChild>
                        <Link 
                          href={`https://youtu.be/${video.id}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2"
                        >
                          <Youtube className="h-4 w-4" />
                          Watch on YouTube
                        </Link>
                      </Button>
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
              Why My YouTube Content Stands Out
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              {[
                {
                  title: 'SEO Optimized',
                  description: 'Every video is crafted with strategic keywords and optimized for YouTube search algorithms.',
                },
                {
                  title: 'High Retention',
                  description: 'Engaging content structure designed to keep viewers watching from start to finish.',
                },
                {
                  title: 'Professional Quality',
                  description: 'Crisp visuals, clear audio, and polished editing that meets professional standards.',
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
              Ready to Create Amazing YouTube Content?
            </h2>
            <p className="text-lg text-muted-foreground">
              Let's collaborate to produce YouTube videos that educate, entertain, and grow your channel.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="/contact">
                  Start Your YouTube Project
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
