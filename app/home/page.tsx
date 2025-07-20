'use client'

import { motion } from 'framer-motion'
import { Youtube, Play, ArrowRight, Image as ImageIcon, Video, Star } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

import { Button } from '@/components/ui/Button'
import { fadeInUp, fadeInLeft, fadeInRight, staggerContainer, staggerItem } from '@/lib/animations'

export default function HomePage() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden particles">
          {/* Animated Background */}
          <div className="absolute inset-0 gradient-bg opacity-20" />
          
          {/* Floating Elements */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-br from-primary/30 to-secondary/30 rounded-full floating blur-sm" />
            <div className="absolute top-40 right-20 w-16 h-16 bg-gradient-to-br from-accent/30 to-purple-500/30 rounded-full floating" style={{ animationDelay: '1s' }} />
            <div className="absolute bottom-40 left-20 w-24 h-24 bg-gradient-to-br from-orange-500/30 to-secondary/30 rounded-full floating" style={{ animationDelay: '2s' }} />
            <div className="absolute bottom-20 right-10 w-18 h-18 bg-gradient-to-br from-primary/30 to-accent/30 rounded-full floating" style={{ animationDelay: '3s' }} />
          </div>
          
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              variants={staggerContainer}
              initial="initial"
              animate="animate"
              className="space-y-8"
            >
              <motion.div variants={staggerItem} className="space-y-4">
                <motion.h1 
                  className="text-4xl md:text-6xl lg:text-8xl font-display font-bold"
                  variants={fadeInUp}
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <span className="gradient-text-animated">
                    Crafting Content
                  </span>
                  <br />
                  <motion.span 
                    className="text-foreground relative"
                    animate={{ 
                      textShadow: [
                        "0 0 0px rgba(59, 130, 246, 0)",
                        "0 0 20px rgba(59, 130, 246, 0.5)",
                        "0 0 0px rgba(59, 130, 246, 0)"
                      ]
                    }}
                    transition={{ duration: 3, repeat: Infinity }}
                  >
                    Editing Excellence
                  </motion.span>
                </motion.h1>
                
                <motion.p 
                  variants={fadeInUp}
                  className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
                  whileHover={{ scale: 1.02, color: "hsl(var(--foreground))" }}
                  transition={{ duration: 0.3 }}
                >
                  Professional video editor and thumbnail designer specializing in YouTube content, 
                  Instagram videos, and brand collaborations. I transform raw footage into 
                  engaging stories that captivate audiences and drive results.
                </motion.p>
              </motion.div>

              <motion.div 
                variants={staggerItem}
                className="flex flex-col sm:flex-row gap-4 justify-center items-center"
              >
                <motion.div
                  whileHover={{ scale: 1.05, rotate: 2 }}
                  whileTap={{ scale: 0.95 }}
                  className="group"
                >
                  <Button size="lg" className="relative overflow-hidden bg-gradient-to-r from-primary to-secondary hover:from-secondary hover:to-primary transition-all duration-500 shadow-lg hover:shadow-xl" asChild>
                    <Link href="/portfolio">
                      <>
                        <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent transform translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                        <Video className="mr-2 h-5 w-5 group-hover:animate-bounce" />
                        View My Work
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:scale-110" />
                      </>
                    </Link>
                  </Button>
                </motion.div>
                
                <motion.div
                  whileHover={{ scale: 1.05, rotate: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="group"
                >
                  <Button variant="outline" size="lg" className="border-2 border-primary/50 hover:border-primary hover:bg-primary/10 backdrop-blur-sm group-hover:shadow-lg transition-all duration-300" asChild>
                    <Link href="/contact">
                      <>
                        <span className="gradient-text-primary group-hover:gradient-text-animated">
                          Let's Talk
                        </span>
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1 text-primary" />
                      </>
                    </Link>
                  </Button>
                </motion.div>
              </motion.div>

              <motion.div 
                variants={staggerItem}
                className="flex items-center justify-center space-x-8 text-sm"
              >
                <motion.div 
                  className="flex items-center space-x-1 glass px-4 py-2 rounded-full"
                  whileHover={{ scale: 1.05, y: -2 }}
                  animate={{ y: [0, -2, 0] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 0 }}
                >
                  <Star className="h-4 w-4 fill-yellow-400 text-yellow-400 animate-pulse" />
                  <span className="text-yellow-400 font-semibold">5.0 Rating</span>
                </motion.div>
                <div className="h-4 w-px bg-gradient-to-b from-transparent via-border to-transparent" />
                <motion.div 
                  className="glass px-4 py-2 rounded-full"
                  whileHover={{ scale: 1.05, y: -2 }}
                  animate={{ y: [0, -2, 0] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                >
                  <span className="gradient-text-primary font-semibold">100+ Happy Clients</span>
                </motion.div>
                <div className="h-4 w-px bg-gradient-to-b from-transparent via-border to-transparent" />
                <motion.div 
                  className="glass px-4 py-2 rounded-full"
                  whileHover={{ scale: 1.05, y: -2 }}
                  animate={{ y: [0, -2, 0] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                >
                  <span className="gradient-text font-semibold">500+ Projects</span>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>

          {/* Enhanced Scroll Indicator */}
          <motion.div
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
            animate={{ 
              y: [0, 10, 0],
              opacity: [0.5, 1, 0.5]
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex justify-center relative overflow-hidden">
              <motion.div 
                className="w-1 h-3 bg-gradient-to-b from-primary to-secondary rounded-full mt-2"
                animate={{ y: [0, 16, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </div>
          </motion.div>
        </section>

        {/* Brief About Section */}
        <section className="py-20 relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                variants={fadeInLeft}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                className="relative"
              >
                {/* Profile Image Container */}
                <motion.div 
                  className="aspect-square max-w-md mx-auto rounded-2xl overflow-hidden bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20 relative"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {/* Animated orb */}
                  <motion.div
                    className="absolute top-4 right-4 w-16 h-16 bg-gradient-to-br from-primary/40 to-secondary/40 rounded-full blur-xl"
                    animate={{ 
                      scale: [1, 1.3, 1],
                      opacity: [0.6, 1, 0.6] 
                    }}
                    transition={{ duration: 3, repeat: Infinity }}
                  />
                  
                  {/* Profile Image */}
                  <div className="w-full h-full relative overflow-hidden">
                    <Image
                      src="/sagar.jpeg"
                      alt="Sagar - Video Editor and Content Creator"
                      fill
                      className="object-cover object-center"
                      priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
                  </div>
                </motion.div>
                
                {/* Floating Elements */}
                <motion.a
                  href="https://www.youtube.com/@Razzz-y2h"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full flex items-center justify-center backdrop-blur-sm border border-white/20 shadow-lg cursor-pointer"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  animate={{ rotate: [0, 5, -5, 0] }}
                  transition={{ duration: 4, repeat: Infinity }}
                >
                  <Youtube className="h-8 w-8 text-primary" />
                </motion.a>
                
                <motion.div 
                  className="absolute -bottom-4 -left-4 w-24 h-12 bg-gradient-to-r from-accent/20 to-purple-500/20 rounded-2xl flex items-center justify-center backdrop-blur-sm border border-white/20 shadow-lg"
                  whileHover={{ scale: 1.05, y: -2 }}
                  animate={{ y: [0, -3, 0] }}
                  transition={{ duration: 3, repeat: Infinity, delay: 1 }}
                >
                  <span className="text-xs font-bold text-accent">
                    Creator ✨
                  </span>
                </motion.div>
              </motion.div>

              <motion.div
                variants={fadeInRight}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                className="space-y-6"
              >
                <div>
                  <motion.h2 
                    className="text-3xl md:text-4xl font-bold mb-4"
                    whileHover={{ scale: 1.02 }}
                  >
                    Hi, I'm{' '}
                    <span className="gradient-text">
                      Sagar
                    </span>
                  </motion.h2>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    A passionate video editor and content creator with over 3 years of experience 
                    helping YouTubers, brands, and creators grow their audience through compelling 
                    visual storytelling and eye-catching thumbnails.
                  </p>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <motion.div 
                    className="bg-primary/10 rounded-lg p-4 text-center"
                    whileHover={{ scale: 1.05 }}
                  >
                    <div className="text-2xl font-bold text-primary">100+</div>
                    <div className="text-sm text-muted-foreground">Videos Edited</div>
                  </motion.div>
                  <motion.div 
                    className="bg-secondary/10 rounded-lg p-4 text-center"
                    whileHover={{ scale: 1.05 }}
                  >
                    <div className="text-2xl font-bold text-secondary">50+</div>
                    <div className="text-sm text-muted-foreground">Happy Clients</div>
                  </motion.div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button asChild size="lg">
                    <Link href="/about">
                      Learn More About Me
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button variant="outline" size="lg" asChild>
                    <Link href="/portfolio">View My Work</Link>
                  </Button>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Services Preview */}
        <section className="py-20 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5 relative overflow-hidden">
          {/* Background decorations */}
          <div className="absolute top-0 left-0 w-72 h-72 bg-gradient-to-br from-primary/10 to-transparent rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-secondary/10 to-transparent rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div
              variants={fadeInUp}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <motion.h2 
                className="text-3xl md:text-4xl font-display font-bold mb-4"
                whileHover={{ scale: 1.05 }}
              >
                <span className="gradient-text">
                  What I Do Best
                </span>
              </motion.h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Specializing in YouTube content creation, Instagram video editing, and 
                thumbnail design that drives engagement and grows your audience.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <motion.div
                variants={fadeInLeft}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                className="group"
                whileHover={{ y: -10, rotateY: 5 }}
                transition={{ duration: 0.3 }}
              >
                <div className="bg-background/80 backdrop-blur-sm rounded-2xl p-6 shadow-soft hover:shadow-hard transition-all duration-500 group-hover:shadow-primary/20 border border-primary/20 hover:border-primary/40 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative z-10">
                    <motion.div 
                      className="w-16 h-16 bg-gradient-to-br from-primary to-primary/50 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                    >
                      <Youtube className="h-8 w-8 text-white" />
                    </motion.div>
                    <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">YouTube Editing</h3>
                    <p className="text-muted-foreground mb-4">
                      Professional YouTube video editing that keeps viewers engaged 
                      with dynamic cuts, effects, and storytelling that grows your channel.
                    </p>
                    <Link 
                      href="/portfolio/youtube" 
                      className="text-primary hover:text-secondary font-medium inline-flex items-center group-hover:translate-x-2 transition-all duration-300"
                    >
                      View YouTube Work
                      <ArrowRight className="ml-1 h-4 w-4 group-hover:scale-110" />
                    </Link>
                  </div>
                </div>
              </motion.div>

              <motion.div
                variants={fadeInUp}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                className="group"
                whileHover={{ y: -10, rotateY: 5 }}
                transition={{ duration: 0.3 }}
              >
                <div className="bg-background/80 backdrop-blur-sm rounded-2xl p-6 shadow-soft hover:shadow-hard transition-all duration-500 group-hover:shadow-secondary/20 border border-secondary/20 hover:border-secondary/40 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative z-10">
                    <motion.div 
                      className="w-16 h-16 bg-gradient-to-br from-secondary to-secondary/50 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                    >
                      <Play className="h-8 w-8 text-white" />
                    </motion.div>
                    <h3 className="text-xl font-semibold mb-2 group-hover:text-secondary transition-colors">Instagram Content</h3>
                    <p className="text-muted-foreground mb-4">
                      High-impact Instagram videos and reels that stop the scroll, 
                      boost engagement, and grow your following organically.
                    </p>
                    <Link 
                      href="/portfolio/instagram" 
                      className="text-secondary hover:text-primary font-medium inline-flex items-center group-hover:translate-x-2 transition-all duration-300"
                    >
                      View Instagram Work
                      <ArrowRight className="ml-1 h-4 w-4 group-hover:scale-110" />
                    </Link>
                  </div>
                </div>
              </motion.div>

              <motion.div
                variants={fadeInRight}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                className="group"
                whileHover={{ y: -10, rotateY: 5 }}
                transition={{ duration: 0.3 }}
              >
                <div className="bg-background/80 backdrop-blur-sm rounded-2xl p-6 shadow-soft hover:shadow-hard transition-all duration-500 group-hover:shadow-accent/20 border border-accent/20 hover:border-accent/40 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative z-10">
                    <motion.div 
                      className="w-16 h-16 bg-gradient-to-br from-accent to-accent/50 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                    >
                      <ImageIcon className="h-8 w-8 text-white" />
                    </motion.div>
                    <h3 className="text-xl font-semibold mb-2 group-hover:text-accent transition-colors">Thumbnail Design</h3>
                    <p className="text-muted-foreground mb-4">
                      Eye-catching thumbnails that increase click-through rates and make 
                      your content stand out in crowded feeds and search results.
                    </p>
                    <Link 
                      href="/portfolio/thumbnails" 
                      className="text-accent hover:text-primary font-medium inline-flex items-center group-hover:translate-x-2 transition-all duration-300"
                    >
                      View Thumbnails
                      <ArrowRight className="ml-1 h-4 w-4 group-hover:scale-110" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            </div>
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
                Ready to Create Something Amazing?
              </h2>
              <p className="text-lg text-muted-foreground">
                Let's discuss your project and bring your vision to life. 
                I'm here to help you tell your story through stunning visuals.
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
                    Learn About Me
                  </Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
  )
}
