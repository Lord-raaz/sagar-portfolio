'use client'

import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import toast from 'react-hot-toast'

import { Button } from '@/components/ui/Button'
import { Input } from '@/components/ui/Input'
import { Textarea } from '@/components/ui/Textarea'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card'
import { fadeInUp, fadeInLeft, fadeInRight, staggerContainer, staggerItem } from '@/lib/animations'

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  subject: z.string().min(5, 'Subject must be at least 5 characters'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
  budget: z.string().optional(),
  timeline: z.string().optional(),
})

type ContactForm = z.infer<typeof contactSchema>

const contactInfo = [
  {
    icon: Mail,
    title: 'Email',
    value: 'skftsagar4321@gmail.com',
    description: 'Send me an email anytime',
    href: 'mailto:skftsagar4321@gmail.com',
  },
  {
    icon: Phone,
    title: 'Phone',
    value: '+91 89881 90839',
    description: 'Call me for urgent inquiries',
    href: 'tel:+918988190839',
  },
  {
    icon: MapPin,
    title: 'Location',
    value: 'Remote Worldwide',
    description: 'Available for global projects',
    href: '#',
  },
  {
    icon: Clock,
    title: 'Response Time',
    value: '24 Hours',
    description: 'I typically respond within',
    href: '#',
  },
]

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState('')
  const [success, setSuccess] = useState(false)
  
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactForm>({
    resolver: zodResolver(contactSchema),
  })

  const onSubmit = async (data: ContactForm) => {
    setIsSubmitting(true)
    setError('')
    setSuccess(false)
    
    try {
      const response = await fetch('https://formsubmit.co/ajax/skftsagar4321@gmail.com', {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json', 
          'Accept': 'application/json' 
        },
        body: JSON.stringify({ 
          ...data, 
          _captcha: 'false', 
          _subject: 'New message from Sagar Edits Portfolio Website!' 
        })
      })
      
      const result = await response.json()
      
      if (result.success) {
        setSuccess(true)
        toast.success('Message sent successfully! I\'ll get back to you soon.')
        reset()
      } else {
        throw new Error('Form submission failed')
      }
    } catch (error) {
      console.error('Failed to send message:', error)
      setError('Failed to send message. Please try again or contact me directly.')
      toast.error('Failed to send message. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

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
                Let's{' '}
                <span className="gradient-text-primary">
                  Connect
                </span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
                Ready to create content that converts? I'd love to hear about your YouTube channel, 
                Instagram strategy, or brand video needs and discuss how we can grow your audience together.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Contact Info Cards */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20"
            >
              {contactInfo.map((info) => {
                const Icon = info.icon
                return (
                  <motion.div key={info.title} variants={staggerItem}>
                    <Card className="text-center p-6 h-full hover:shadow-soft transition-all duration-300 hover:-translate-y-1">
                      <CardContent className="space-y-4">
                        <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                          <Icon className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-semibold mb-1">{info.title}</h3>
                          <p className="text-foreground font-medium mb-1">{info.value}</p>
                          <p className="text-sm text-muted-foreground">{info.description}</p>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                )
              })}
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <motion.div
                variants={fadeInLeft}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
              >
                <Card>
                  <CardHeader>
                    <CardTitle className="text-2xl">Send Me a Message</CardTitle>
                  </CardHeader>
                  <CardContent>
                    {success && (
                      <div className="mb-6 p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg">
                        <p className="text-green-800 dark:text-green-200 text-sm">
                          ✅ Message sent successfully! I'll get back to you within 24 hours.
                        </p>
                      </div>
                    )}
                    
                    {error && (
                      <div className="mb-6 p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg">
                        <p className="text-red-800 dark:text-red-200 text-sm">
                          ❌ {error}
                        </p>
                      </div>
                    )}
                    
                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label htmlFor="name" className="block text-sm font-medium mb-2">
                            Name *
                          </label>
                          <Input
                            id="name"
                            {...register('name')}
                            placeholder="Your full name"
                            className={errors.name ? 'border-destructive' : ''}
                          />
                          {errors.name && (
                            <p className="text-destructive text-sm mt-1">{errors.name.message}</p>
                          )}
                        </div>
                        
                        <div>
                          <label htmlFor="email" className="block text-sm font-medium mb-2">
                            Email *
                          </label>
                          <Input
                            id="email"
                            type="email"
                            {...register('email')}
                            placeholder="your@email.com"
                            className={errors.email ? 'border-destructive' : ''}
                          />
                          {errors.email && (
                            <p className="text-destructive text-sm mt-1">{errors.email.message}</p>
                          )}
                        </div>
                      </div>

                      <div>
                        <label htmlFor="subject" className="block text-sm font-medium mb-2">
                          Subject *
                        </label>
                        <Input
                          id="subject"
                          {...register('subject')}
                          placeholder="What's your project about?"
                          className={errors.subject ? 'border-destructive' : ''}
                        />
                        {errors.subject && (
                          <p className="text-destructive text-sm mt-1">{errors.subject.message}</p>
                        )}
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label htmlFor="budget" className="block text-sm font-medium mb-2">
                            Budget Range
                          </label>
                          <select 
                            id="budget"
                            {...register('budget')}
                            className="w-full h-10 px-3 py-2 text-sm bg-card text-foreground border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
                          >
                            <option value="">Select budget range</option>
                            <option value="under-10k">Under ₹10,000</option>
                            <option value="10k-50k">₹10,000 - ₹50,000</option>
                            <option value="50k-100k">₹50,000 - ₹1,00,000</option>
                          </select>
                        </div>

                        <div>
                          <label htmlFor="timeline" className="block text-sm font-medium mb-2">
                            Timeline
                          </label>
                          <select 
                            id="timeline"
                            {...register('timeline')}
                            className="w-full h-10 px-3 py-2 text-sm bg-card text-foreground border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
                          >
                            <option value="">Select timeline</option>
                            <option value="asap">ASAP</option>
                            <option value="1-month">Within 1 month</option>
                            <option value="2-3-months">2-3 months</option>
                            <option value="flexible">Flexible</option>
                          </select>
                        </div>
                      </div>

                      <div>
                        <label htmlFor="message" className="block text-sm font-medium mb-2">
                          Message *
                        </label>
                        <Textarea
                          id="message"
                          {...register('message')}
                          placeholder="Tell me about your project, vision, and any specific requirements..."
                          rows={6}
                          className={errors.message ? 'border-destructive' : ''}
                        />
                        {errors.message && (
                          <p className="text-destructive text-sm mt-1">{errors.message.message}</p>
                        )}
                      </div>

                      <Button 
                        type="submit" 
                        size="lg" 
                        className="w-full" 
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? (
                          <>
                            <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2" />
                            Sending...
                          </>
                        ) : (
                          <>
                            <Send className="mr-2 h-4 w-4" />
                            Send Message
                          </>
                        )}
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Additional Info */}
              <motion.div
                variants={fadeInRight}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                className="space-y-8"
              >
                <div>
                  <h3 className="text-2xl font-bold mb-4">Let's Create Together</h3>
                  <div className="space-y-4 text-muted-foreground">
                    <p>
                      Whether you need YouTube video editing, Instagram content creation, 
                      eye-catching thumbnails, or brand video work, I'm here to help 
                      grow your audience and boost engagement.
                    </p>
                    <p>
                      I believe in collaboration and understanding your brand's voice. 
                      From concept to final delivery, I'll work closely with you to 
                      create content that truly resonates with your audience.
                    </p>
                  </div>
                </div>

                <Card>
                  <CardHeader>
                    <CardTitle>What Happens Next?</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex gap-4">
                      <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">
                        1
                      </div>
                      <div>
                        <h4 className="font-semibold">Initial Consultation</h4>
                        <p className="text-sm text-muted-foreground">
                          We'll discuss your project, requirements, and vision.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex gap-4">
                      <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">
                        2
                      </div>
                      <div>
                        <h4 className="font-semibold">Proposal & Planning</h4>
                        <p className="text-sm text-muted-foreground">
                          I'll create a detailed proposal and project timeline.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex gap-4">
                      <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">
                        3
                      </div>
                      <div>
                        <h4 className="font-semibold">Creation & Delivery</h4>
                        <p className="text-sm text-muted-foreground">
                          I'll execute the project and deliver your final assets.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <div className="text-center">
                      <h4 className="font-semibold mb-2">Prefer to call?</h4>
                      <p className="text-muted-foreground mb-4">
                        I'm available for calls Monday through Friday, 9 AM to 6 PM IST.
                      </p>
                      <Button variant="outline" size="lg" asChild>
                        <a href="tel:+918988190839">
                          <>
                            <Phone className="mr-2 h-4 w-4" />
                            +91 89881 90839
                          </>
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>
      </div>
  )
}
