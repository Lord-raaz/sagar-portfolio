export interface NavItem {
  name: string
  href: string
  description?: string
}

export interface SocialLink {
  name: string
  href: string
  icon: string
}

export interface SEOProps {
  title: string
  description: string
  image?: string
  url?: string
  type?: 'website' | 'article'
}

export interface ButtonProps {
  variant?: 'default' | 'destructive' | 'outline' | 'secondary' | 'ghost' | 'link'
  size?: 'default' | 'sm' | 'lg' | 'icon'
  className?: string
}

export interface ModalProps {
  isOpen: boolean
  onClose: () => void
  title?: string
  children: React.ReactNode
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'full'
}
