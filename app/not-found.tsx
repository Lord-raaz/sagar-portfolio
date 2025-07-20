'use client'

import { motion } from 'framer-motion'
import { Home, ArrowLeft } from 'lucide-react'
import Link from 'next/link'

import { Button } from '@/components/ui/Button'
import { fadeInUp } from '@/lib/animations'

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <motion.div
        variants={fadeInUp}
        initial="initial"
        animate="animate"
        className="text-center space-y-8"
      >
        <div className="space-y-4">
          <h1 className="text-9xl font-bold text-primary">404</h1>
          <h2 className="text-3xl md:text-4xl font-display font-bold">
            Page Not Found
          </h2>
          <p className="text-lg text-muted-foreground max-w-md mx-auto">
            Sorry, the page you're looking for doesn't exist. 
            It may have been moved or deleted.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" asChild>
            <Link href="/home">
              <>
                <Home className="mr-2 h-5 w-5" />
                Go Home
              </>
            </Link>
          </Button>
          <Button variant="outline" size="lg" onClick={() => window.history.back()}>
            <ArrowLeft className="mr-2 h-5 w-5" />
            Go Back
          </Button>
        </div>
      </motion.div>
    </div>
  )
}
