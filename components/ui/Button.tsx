import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'

import { cn } from '@/lib/utils'

const buttonVariants = cva(
  'inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 relative overflow-hidden group',
  {
    variants: {
      variant: {
        default: 'bg-gradient-to-r from-primary to-secondary text-white hover:from-primary/90 hover:to-secondary/90 shadow-lg hover:shadow-xl hover:scale-105 active:scale-95',
        destructive:
          'bg-gradient-to-r from-red-500 to-red-600 text-white hover:from-red-600 hover:to-red-700 shadow-lg hover:shadow-xl',
        outline:
          'border-2 border-primary/50 bg-transparent text-foreground hover:bg-gradient-to-r hover:from-primary/10 hover:to-secondary/10 hover:border-primary backdrop-blur-sm',
        secondary:
          'bg-gradient-to-r from-secondary/10 to-accent/10 text-foreground hover:from-secondary/20 hover:to-accent/20 border border-secondary/20',
        ghost: 'text-foreground hover:bg-gradient-to-r hover:from-primary/10 hover:to-secondary/10 hover:text-primary transition-all duration-300',
        link: 'text-primary underline-offset-4 hover:underline hover:text-secondary transition-colors',
      },
      size: {
        default: 'h-10 px-4 py-2',
        sm: 'h-9 rounded-md px-3',
        lg: 'h-12 rounded-lg px-8 text-base font-semibold',
        icon: 'h-10 w-10',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button'
    
    if (asChild) {
      return (
        <Comp
          className={cn(buttonVariants({ variant, size, className }))}
          ref={ref}
          {...props}
        />
      )
    }
    
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      >
        {variant === 'default' && (
          <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out" />
        )}
        {props.children}
      </Comp>
    )
  }
)
Button.displayName = 'Button'

export { Button, buttonVariants }
