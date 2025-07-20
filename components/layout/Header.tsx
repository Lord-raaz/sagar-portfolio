'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Video } from 'lucide-react'

import { Button } from '@/components/ui/Button'
import { cn } from '@/lib/utils'
import { navVariants, mobileNavVariants } from '@/lib/animations'

const navigation = [
  { name: 'Home', href: '/home' },
  { name: 'About', href: '/about' },
  { name: 'Portfolio', href: '/portfolio' },
  { name: 'Contact', href: '/contact' },
]

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.header
      variants={navVariants}
      initial="initial"
      animate="animate"
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled
          ? 'bg-background/80 backdrop-blur-md border-b border-border shadow-sm'
          : 'bg-transparent'
      )}
    >
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05, rotate: 5 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <Link href="/home" className="flex items-center space-x-2 group">
              <motion.div
                className="relative"
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              >
                <Video className="h-8 w-8 text-transparent bg-gradient-to-r from-primary to-secondary bg-clip-text" />
                <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-full opacity-20 blur-sm group-hover:opacity-40 transition-opacity" />
              </motion.div>
              <span className="text-xl font-display font-bold gradient-text-primary">
                Sagar Edits
              </span>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            {navigation.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 + 0.5 }}
                whileHover={{ y: -2 }}
              >
                <Link
                  href={item.href}
                  className={cn(
                    'relative px-3 py-2 text-sm font-medium transition-all duration-300 rounded-lg group',
                    pathname === item.href
                      ? 'text-white'
                      : 'text-muted-foreground hover:text-foreground'
                  )}
                >
                  {pathname === item.href && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-lg"
                      transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                  <span className="relative z-10 group-hover:scale-105 transition-transform duration-200 inline-block">
                    {item.name}
                  </span>
                  <motion.div
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-primary to-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    initial={false}
                    animate={pathname !== item.href ? { scaleX: 0 } : { scaleX: 1 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center">
            {/* Mobile menu button */}
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="md:hidden"
            >
              <Button
                variant="ghost"
                size="icon"
                className="relative overflow-hidden rounded-full"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                <motion.div
                  animate={{ rotate: isMobileMenuOpen ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {isMobileMenuOpen ? (
                    <X className="h-5 w-5 text-secondary" />
                  ) : (
                    <Menu className="h-5 w-5 text-primary" />
                  )}
                </motion.div>
              </Button>
            </motion.div>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            variants={mobileNavVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="md:hidden bg-background/95 backdrop-blur-md border-b border-border"
          >
            <div className="px-4 py-6 space-y-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={cn(
                    'block px-3 py-2 text-base font-medium transition-colors',
                    pathname === item.href
                      ? 'text-primary bg-primary/10 rounded-md'
                      : 'text-muted-foreground hover:text-foreground hover:bg-accent rounded-md'
                  )}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
