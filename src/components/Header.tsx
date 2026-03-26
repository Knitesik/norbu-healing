import { buttonVariants } from '@/components/ui/button'
import { Menu } from 'lucide-react'
import ThemeToggle from '#/components/ThemeToggle.tsx'

export default function Header() {
  return (
    <header className="w-full border-b border-b-border sticky z-50 top-0 bg-background">
      <div className="mx-auto flex max-w-7xl items-center justify-between p-4">
        <h3>Logo</h3>
        <div className="flex items-center gap-1">
          <div className="hidden items-center text-muted-foreground md:inline-flex">
            <a
              href="#"
              className={buttonVariants({ variant: 'ghost', size: 'sm' })}
            >
              Features
            </a>
            <a
              href="#"
              className={buttonVariants({ variant: 'ghost', size: 'sm' })}
            >
              Pricing
            </a>
            <a
              href="#"
              className={buttonVariants({ variant: 'ghost', size: 'sm' })}
            >
              Blog
            </a>
            <a
              href="#"
              className={buttonVariants({ variant: 'ghost', size: 'sm' })}
            >
              Company
            </a>
            <p
              aria-hidden="true"
              className="hidden select-none text-border sm:block"
            >
              |
            </p>
            <a
              href="#"
              className={buttonVariants({ variant: 'ghost', size: 'sm' })}
            >
              Sign in
            </a>
          </div>
          <ThemeToggle />
        </div>
      </div>
    </header>
  )
}
