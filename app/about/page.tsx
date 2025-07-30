'use client'

import { motion } from 'framer-motion'
import { Download, Award, Users, Coffee } from 'lucide-react'
import Image from 'next/image'

import { Button } from '@/components/ui/Button'
import { Card, CardContent } from '@/components/ui/Card'
import { fadeInUp, fadeInLeft, fadeInRight, staggerContainer, staggerItem } from '@/lib/animations'

const skills = [
  'Adobe Premiere Pro',
  'Adobe After Effects',
  'Adobe Photoshop',
  'DaVinci Resolve',
  'Final Cut Pro',
  'Adobe Illustrator',
  'Thumbnail Design',
  'Motion Graphics',
  'Color Grading',
  'YouTube SEO',
]

const achievements = [
  { icon: Award, title: '100+ Videos Edited', description: 'YouTube and Instagram content created' },
  { icon: Users, title: '50+ Creators', description: 'Content creators and brands served' },
  { icon: Coffee, title: '3 Years', description: 'Professional experience in video editing' },
]

export default function AboutPage() {
  return (
    <div className="pt-16 relative">
      {/* Hero Section */}
      <section className="py-20 lg:py-32 relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                variants={fadeInLeft}
                initial="initial"
                animate="animate"
                className="space-y-8 relative z-10"
              >
                <div className="relative">
                  <motion.div
                    className="absolute -left-4 -top-4 w-16 h-16 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-full blur-xl"
                    animate={{ scale: [1, 1.2, 1], rotate: [0, 180, 360] }}
                    transition={{ duration: 4, repeat: Infinity }}
                  />
                  <h1 className="text-4xl md:text-5xl font-display font-bold mb-6 relative">
                    Hi, I&apos;m{' '}
                    <motion.span 
                      className="gradient-text-animated inline-block"
                      animate={{ 
                        scale: [1, 1.05, 1]
                      }}
                      transition={{ duration: 3, repeat: Infinity }}
                    >
                      Sagar
                    </motion.span>
                    <motion.span
                      className="absolute -right-8 -top-2 text-primary opacity-60"
                      animate={{ rotate: [0, 15, -15, 0] }}
                      transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                    >
                      ✨
                    </motion.span>
                  </h1>
                  <motion.div 
                    className="space-y-4 text-lg text-muted-foreground"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                  >
                    <motion.p
                      className="relative"
                      whileHover={{ scale: 1.02 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <span className="absolute -left-2 top-0 w-1 h-full bg-gradient-to-b from-primary to-secondary rounded-full opacity-0 hover:opacity-100 transition-opacity" />
                      A passionate video editor and thumbnail designer with over 3 years of experience 
                      in creating engaging YouTube content, Instagram videos, and helping creators 
                      grow their audience through compelling visual storytelling.
                    </motion.p>
                    <motion.p
                      className="relative"
                      whileHover={{ scale: 1.02 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <span className="absolute -left-2 top-0 w-1 h-full bg-gradient-to-b from-secondary to-accent rounded-full opacity-0 hover:opacity-100 transition-opacity" />
                      My journey began with a love for YouTube and social media content. 
                      Today, I specialize in editing videos that keep viewers engaged, 
                      designing thumbnails that get clicks, and helping brands create content that converts.
                    </motion.p>
                    <motion.p
                      className="relative"
                      whileHover={{ scale: 1.02 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <span className="absolute -left-2 top-0 w-1 h-full bg-gradient-to-b from-accent to-purple-500 rounded-full opacity-0 hover:opacity-100 transition-opacity" />
                      When I&apos;m not editing or designing, you can find me analyzing trending content, 
                      learning new editing techniques, or collaborating with creators to produce 
                      content that stands out in today&apos;s competitive digital landscape.
                    </motion.p>
                  </motion.div>
                </div>

                <motion.div 
                  className="flex flex-col sm:flex-row gap-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8, duration: 0.6 }}
                >
                  <Button 
                    size="lg" 
                    className="group relative overflow-hidden bg-gradient-to-r from-primary to-secondary hover:from-primary/80 hover:to-secondary/80 transform hover:scale-105 transition-all duration-300"
                    onClick={() => {
                      const link = document.createElement('a')
                      link.href = '/Doc1.pdf'
                      link.download = 'Sagar_Resume.pdf'
                      document.body.appendChild(link)
                      link.click()
                      document.body.removeChild(link)
                    }}
                  >
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0"
                      initial={{ x: '-100%' }}
                      whileHover={{ x: '100%' }}
                      transition={{ duration: 0.6 }}
                    />
                    <Download className="mr-2 h-5 w-5 relative z-10" />
                    <span className="relative z-10">Download Resume</span>
                  </Button>
                  <Button 
                    variant="outline" 
                    size="lg"
                    className="group border-2 border-gradient-to-r from-accent to-purple-500 hover:bg-gradient-to-r hover:from-accent/10 hover:to-purple-500/10 transform hover:scale-105 transition-all duration-300"
                  >
                    <span className="gradient-text-accent">
                      View Portfolio
                    </span>
                  </Button>
                </motion.div>
              </motion.div>

              <motion.div
                variants={fadeInRight}
                initial="initial"
                animate="animate"
                className="relative"
              >
                {/* Animated gradient background */}
                <motion.div 
                  className="aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20 relative"
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
                      alt="Sagar - Video Editor and Thumbnail Designer"
                      fill
                      className="object-cover object-center"
                      priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
                    
                    {/* Floating particles */}
                    {Array.from({ length: 3 }).map((_, i) => (
                      <motion.div
                        key={i}
                        className="absolute w-2 h-2 bg-gradient-to-r from-primary to-secondary rounded-full"
                        style={{
                          left: `${20 + i * 30}%`,
                          top: `${15 + i * 25}%`,
                        }}
                        animate={{
                          y: [0, -20, 0],
                          opacity: [0.4, 1, 0.4],
                        }}
                        transition={{
                          duration: 2 + i,
                          repeat: Infinity,
                          delay: i * 0.5,
                        }}
                      />
                    ))}
                  </div>
                </motion.div>
                
                {/* Enhanced Floating Elements */}
                <motion.div 
                  className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full flex items-center justify-center backdrop-blur-sm border border-white/20 shadow-lg"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  animate={{ rotate: [0, 5, -5, 0] }}
                  transition={{ duration: 4, repeat: Infinity }}
                >
                  <Award className="h-8 w-8 text-primary" />
                </motion.div>
                
                <motion.div 
                  className="absolute -bottom-4 -left-4 w-32 h-16 bg-gradient-to-r from-accent/20 to-purple-500/20 rounded-2xl flex items-center justify-center backdrop-blur-sm border border-white/20 shadow-lg"
                  whileHover={{ scale: 1.05, y: -2 }}
                  animate={{ y: [0, -3, 0] }}
                  transition={{ duration: 3, repeat: Infinity, delay: 1 }}
                >
                  <span className="text-sm font-bold gradient-text-accent">
                    5+ Years ✨
                  </span>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Achievements */}
        <section className="py-20 relative overflow-hidden">
          {/* Background effects */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5" />
          <motion.div
            className="absolute top-10 left-10 w-32 h-32 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-full blur-2xl"
            animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 4, repeat: Infinity }}
          />
          <motion.div
            className="absolute bottom-10 right-10 w-24 h-24 bg-gradient-to-br from-accent/10 to-purple-500/10 rounded-full blur-xl"
            animate={{ scale: [1, 1.3, 1], opacity: [0.4, 0.7, 0.4] }}
            transition={{ duration: 3, repeat: Infinity, delay: 1 }}
          />
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                <span className="gradient-text-primary">
                  Achievements & Milestones
                </span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                A journey marked by passion, dedication, and countless moments of creative excellence
              </p>
            </motion.div>
            
            <motion.div
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
            >
              {achievements.map((achievement, index) => {
                const Icon = achievement.icon
                const gradients = [
                  'from-primary/20 to-secondary/20',
                  'from-secondary/20 to-accent/20', 
                  'from-accent/20 to-purple-500/20'
                ]
                const iconColors = [
                  'text-primary',
                  'text-secondary',
                  'text-accent'
                ]
                
                return (
                  <motion.div 
                    key={achievement.title} 
                    variants={staggerItem}
                    whileHover={{ y: -5, scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Card className={`text-center p-8 h-full relative overflow-hidden group bg-gradient-to-br ${gradients[index]} backdrop-blur-sm border-white/20 hover:border-white/30 transition-all duration-300`}>
                      {/* Shimmer effect */}
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                      
                      <CardContent className="space-y-6 relative z-10">
                        <motion.div 
                          className={`w-20 h-20 bg-gradient-to-br ${gradients[index]} rounded-2xl flex items-center justify-center mx-auto shadow-lg border border-white/20`}
                          whileHover={{ rotate: 5, scale: 1.1 }}
                          transition={{ type: "spring", stiffness: 400 }}
                        >
                          <Icon className={`h-10 w-10 ${iconColors[index]}`} />
                        </motion.div>
                        <div>
                          <motion.h3 
                            className="text-2xl font-bold mb-3"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ delay: 0.2 }}
                          >
                            {achievement.title}
                          </motion.h3>
                          <motion.p 
                            className="text-muted-foreground leading-relaxed"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ delay: 0.3 }}
                          >
                            {achievement.description}
                          </motion.p>
                        </div>
                      </CardContent>
                      
                      {/* Floating decoration */}
                      <motion.div
                        className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-br from-primary to-secondary rounded-full opacity-60"
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 2, repeat: Infinity, delay: index * 0.5 }}
                      />
                    </Card>
                  </motion.div>
                )
              })}
            </motion.div>
          </div>
        </section>

        {/* Skills & Tools */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              variants={fadeInUp}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
                Skills & Tools
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Proficient in industry-standard software and equipment to deliver 
                professional results for every project.
              </p>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4"
            >
              {skills.map((skill) => (
                <motion.div
                  key={skill}
                  variants={staggerItem}
                  className="bg-background border rounded-lg p-4 text-center hover:shadow-soft transition-all duration-300 hover:-translate-y-1"
                >
                  <span className="text-sm font-medium">{skill}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Timeline */}
        <section className="py-20 bg-muted/50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              variants={fadeInUp}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
                My Journey
              </h2>
              <p className="text-lg text-muted-foreground">
                Key milestones in my photography and video editing career.
              </p>
            </motion.div>

            <div className="space-y-8">
              {[
                {
                  year: '2019',
                  title: 'Started Videoography',
                  description: 'Began my journey with street and landscape Videography & Photography as a hobby.',
                },
                {
                  year: '2020',
                  title: 'First Youtube Channel',
                  description: 'Shot my first Youtube and discovered my passion for capturing special moments.',
                },
                {
                  year: '2021',
                  title: 'Video Editing',
                  description: 'Expanded into video editing and post-production services.',
                },
                 {
                  year: '2022',
                  title: 'Art of Content creation program',
                  description: 'Did a BrightSo content creation program and learned about content creation',
                },
                {
                  year: '2023',
                  title: 'Studio Setup',
                  description: 'Established professional studio and invested in high-end equipment.',
                },
                {
                  year: '2024',
                  title: 'Client Deals',
                  description: 'Received multiple Clients photography and video work.',
                },
              ].map((milestone) => (
                <motion.div
                  key={milestone.year}
                  variants={fadeInLeft}
                  initial="initial"
                  whileInView="animate"
                  viewport={{ once: true }}
                  className="flex gap-6 items-start"
                >
                  <div className="flex-shrink-0 w-20 text-right">
                    <span className="text-primary font-bold text-lg">{milestone.year}</span>
                  </div>
                  <div className="flex-shrink-0 w-4 h-4 bg-primary rounded-full mt-2" />
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-2">{milestone.title}</h3>
                    <p className="text-muted-foreground">{milestone.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Certificates */}
        <section className="py-20 relative overflow-hidden">
          {/* Background effects */}
          <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-purple-500/5 to-primary/5" />
          <motion.div
            className="absolute top-20 left-20 w-40 h-40 bg-gradient-to-br from-accent/10 to-purple-500/10 rounded-full blur-3xl"
            animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 5, repeat: Infinity }}
          />
          <motion.div
            className="absolute bottom-20 right-20 w-32 h-32 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-full blur-2xl"
            animate={{ scale: [1, 1.2, 1], opacity: [0.4, 0.7, 0.4] }}
            transition={{ duration: 4, repeat: Infinity, delay: 1.5 }}
          />
          
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                <span className="gradient-text-accent">
                  Certifications & Recognition
                </span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Professional certifications that validate my expertise in video editing and content creation
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex justify-center"
            >
              <motion.div 
                className="relative max-w-2xl w-full"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Card className="overflow-hidden relative group bg-gradient-to-br from-accent/10 via-purple-500/10 to-primary/10 backdrop-blur-sm border-white/20 hover:border-white/30 transition-all duration-500 shadow-2xl">
                  {/* Shimmer effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                  
                  {/* Floating decorations */}
                  <motion.div
                    className="absolute top-4 right-4 w-8 h-8 bg-gradient-to-br from-accent to-purple-500 rounded-full opacity-60"
                    animate={{ scale: [1, 1.3, 1], rotate: [0, 180, 360] }}
                    transition={{ duration: 3, repeat: Infinity }}
                  />
                  <motion.div
                    className="absolute bottom-4 left-4 w-6 h-6 bg-gradient-to-br from-primary to-secondary rounded-full opacity-70"
                    animate={{ scale: [1, 1.2, 1], rotate: [360, 180, 0] }}
                    transition={{ duration: 4, repeat: Infinity, delay: 1 }}
                  />
                  
                  <CardContent className="p-8 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                      {/* Certificate Image */}
                      <motion.div 
                        className="relative overflow-hidden rounded-xl shadow-lg border border-white/20"
                        whileHover={{ scale: 1.03 }}
                        transition={{ type: "spring", stiffness: 400 }}
                      >
                        <div className="aspect-[4/3] relative">
                          <Image
                            src="/certificate.jpeg"
                            alt="Professional Certification in Video Editing and Content Creation"
                            fill
                            className="object-cover object-center"
                            priority
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent" />
                          
                          {/* Certificate badge overlay */}
                          <motion.div
                            className="absolute top-3 left-3 bg-gradient-to-r from-accent/90 to-purple-500/90 text-white px-3 py-1 rounded-full text-xs font-bold backdrop-blur-sm"
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.5 }}
                          >
                            ✨ Certified
                          </motion.div>
                        </div>
                      </motion.div>
                      
                      {/* Certificate Details */}
                      <div className="space-y-6">
                        <motion.div
                          initial={{ opacity: 0, x: 20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.3 }}
                        >
                          <h3 className="text-2xl font-bold mb-3 gradient-text-accent">
                            Professional Certification
                          </h3>
                          <p className="text-muted-foreground leading-relaxed mb-4">
                            Officially certified in advanced video editing techniques, content creation strategies, 
                            and digital media production. This certification validates my expertise and commitment 
                            to delivering professional-quality work.
                          </p>
                        </motion.div>
                        
                        <motion.div 
                          className="space-y-3"
                          initial={{ opacity: 0, x: 20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.4 }}
                        >
                          <div className="flex items-center gap-3">
                            <div className="w-2 h-2 bg-gradient-to-r from-accent to-purple-500 rounded-full"></div>
                            <span className="text-sm font-medium">Advanced Video Editing Techniques</span>
                          </div>
                          <div className="flex items-center gap-3">
                            <div className="w-2 h-2 bg-gradient-to-r from-purple-500 to-primary rounded-full"></div>
                            <span className="text-sm font-medium">Content Creation & Strategy</span>
                          </div>
                          <div className="flex items-center gap-3">
                            <div className="w-2 h-2 bg-gradient-to-r from-primary to-secondary rounded-full"></div>
                            <span className="text-sm font-medium">Digital Media Production</span>
                          </div>
                        </motion.div>
                        
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.5 }}
                          className="pt-4"
                        >
                          <Button 
                            variant="outline" 
                            size="sm"
                            className="group border-2 border-gradient-to-r from-accent to-purple-500 hover:bg-gradient-to-r hover:from-accent/10 hover:to-purple-500/10 transform hover:scale-105 transition-all duration-300"
                          >
                            <Award className="mr-2 h-4 w-4" />
                            <span className="gradient-text-accent">
                              View Certificate
                            </span>
                          </Button>
                        </motion.div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </div>
  )
}
