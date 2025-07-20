'use client'

import { motion } from 'framer-motion'
import { Instagram, Twitter, Youtube, Mail, Phone, MapPin, Heart, Video } from 'lucide-react'
import Link from 'next/link'

const socialLinks = [
  { icon: Instagram, href: 'https://www.instagram.com/unonproductions?igsh=bGFicDBqdXJiNWh2', label: 'Instagram', color: 'hover:text-pink-400' },
  { icon: Twitter, href: '#', label: 'Twitter', color: 'hover:text-blue-400' },
  { icon: Youtube, href: 'https://www.youtube.com/@Razzz-y2h', label: 'YouTube', color: 'hover:text-red-400' },
  { icon: Mail, href: 'mailto:skftsagar4321@gmail.com', label: 'Email', color: 'hover:text-green-400' },
]

const quickLinks = [
  { label: 'Home', href: '/home' },
  { label: 'About', href: '/about' },
  { label: 'Portfolio', href: '/portfolio' },
  { label: 'Contact', href: '/contact' },
]

const services = [
  { label: 'YouTube Video Editing', href: '/portfolio/youtube' },
  { label: 'Instagram Content', href: '/portfolio/instagram' },
  { label: 'Thumbnail Design', href: '/portfolio/thumbnails' },
  { label: 'Brand Video Work', href: '/portfolio/brands' },
]

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative bg-gradient-to-br from-gray-900/90 via-purple-900/20 to-gray-900/90 backdrop-blur-lg border-t border-white/10">
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-secondary/5 to-accent/5" />
      
      <div className="relative container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2"
          >
            <Link href="/home" className="flex items-center space-x-3 mb-6 group">
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
                className="p-2 rounded-xl bg-gradient-to-r from-primary/20 to-secondary/20 group-hover:from-primary/30 group-hover:to-secondary/30 transition-all"
              >
                <Video className="h-8 w-8 text-primary" />
              </motion.div>
              <span className="text-2xl font-bold gradient-text-primary">
                Sagar Edits
              </span>
            </Link>
            <p className="text-gray-400 mb-6 max-w-md leading-relaxed">
              Professional video editor and thumbnail designer specializing in YouTube content, 
              Instagram videos, and brand collaborations. I help creators and brands tell their 
              stories through engaging visual content.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <motion.div 
                className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors group"
                whileHover={{ x: 5 }}
              >
                <div className="p-2 rounded-lg bg-gradient-to-r from-primary/20 to-secondary/20 group-hover:from-primary/30 group-hover:to-secondary/30 transition-all">
                  <Phone className="h-4 w-4" />
                </div>
                <span>+91 89881 90839</span>
              </motion.div>
              
              <motion.div 
                className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors group"
                whileHover={{ x: 5 }}
              >
                <div className="p-2 rounded-lg bg-gradient-to-r from-accent/20 to-purple-500/20 group-hover:from-accent/30 group-hover:to-purple-500/30 transition-all">
                  <Mail className="h-4 w-4" />
                </div>
                <span>skftsagar4321@gmail.com</span>
              </motion.div>
              
              <motion.div 
                className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors group"
                whileHover={{ x: 5 }}
              >
                <div className="p-2 rounded-lg bg-gradient-to-r from-orange-500/20 to-pink-500/20 group-hover:from-orange-500/30 group-hover:to-pink-500/30 transition-all">
                  <MapPin className="h-4 w-4" />
                </div>
                <span>Shimla , India</span>
              </motion.div>
            </div>
          </motion.div>
          
          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="text-lg font-semibold text-white mb-6 relative">
              Quick Links
              <div className="absolute -bottom-2 left-0 w-12 h-1 bg-gradient-to-r from-primary to-secondary rounded-full" />
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <motion.li key={`quick-link-${index}-${link.label.toLowerCase()}`}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.1 * index }}
                >
                  <Link 
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-all duration-300 hover:translate-x-1 inline-block relative group"
                  >
                    {link.label}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-secondary transition-all duration-300 group-hover:w-full" />
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>
          
          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="text-lg font-semibold text-white mb-6 relative">
              Services
              <div className="absolute -bottom-2 left-0 w-12 h-1 bg-gradient-to-r from-accent to-purple-500 rounded-full" />
            </h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <motion.li key={`service-${index}-${service.label.replace(/\s+/g, '-').toLowerCase()}`}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.1 * index }}
                >
                  <Link 
                    href={service.href}
                    className="text-gray-400 hover:text-white transition-all duration-300 hover:translate-x-1 inline-block relative group"
                  >
                    {service.label}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-accent to-purple-500 transition-all duration-300 group-hover:w-full" />
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
        
        {/* Social Links Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12"
        >
          <h4 className="text-lg font-semibold text-white mb-6 text-center relative">
            Follow My Journey
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-gradient-to-r from-primary via-secondary to-accent rounded-full" />
          </h4>
          <div className="flex justify-center gap-4">
            {socialLinks.map((social, index) => {
              const Icon = social.icon
              return (
                <motion.a
                  key={social.label}
                  href={social.href}
                  className={`p-3 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 text-gray-400 transition-all duration-300 hover:scale-110 hover:bg-white/10 ${social.color} group relative overflow-hidden`}
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: 0.1 * index }}
                >
                  {/* Shimmer effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                  <Icon className="h-5 w-5 relative z-10" />
                </motion.a>
              )
            })}
          </div>
        </motion.div>
        
        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 pt-8 border-t border-white/10"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm flex items-center gap-2">
              © {currentYear} Sagar Edits. Made with 
              <motion.span
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1, repeat: Infinity, repeatDelay: 2 }}
              >
                <Heart className="h-4 w-4 text-red-400 fill-current" />
              </motion.span>
              and passion for visual storytelling.
            </p>
            <div className="flex items-center gap-6 text-sm text-gray-400">
              <Link href="/privacy" className="hover:text-white transition-colors relative group">
                Privacy Policy
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-secondary transition-all duration-300 group-hover:w-full" />
              </Link>
              <Link href="/terms" className="hover:text-white transition-colors relative group">
                Terms of Service
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-secondary transition-all duration-300 group-hover:w-full" />
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
      
      {/* Floating decorations */}
      <div className="absolute top-4 right-4 w-32 h-32 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-full blur-2xl animate-pulse" />
      <div className="absolute bottom-4 left-4 w-24 h-24 bg-gradient-to-br from-accent/10 to-purple-500/10 rounded-full blur-xl animate-bounce" style={{ animationDuration: '3s' }} />
    </footer>
  )
}
