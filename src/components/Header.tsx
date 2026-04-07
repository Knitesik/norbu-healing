import { buttonVariants } from '@/components/ui/button'
import ThemeToggle from '#/components/ThemeToggle.tsx'
import { Link } from '@tanstack/react-router'

export default function Header() {
  return (
    <header className="w-full border-b border-b-border fixed z-50 top-0 bg-background">
      <div className="mx-auto flex max-w-7xl items-center justify-between p-4">
        <h3>Logo</h3>
        <div className="flex items-center gap-1">
          <div className="hidden items-center text-muted-foreground md:inline-flex">
            <Link
              to="/hotel"
              className={buttonVariants({ variant: 'ghost', size: 'sm' })}
            >
              Hotel
            </Link>
            <Link
              to="/healing-arts-centre"
              className={buttonVariants({ variant: 'ghost', size: 'sm' })}
            >
              Healing Arts Centre
            </Link>
          </div>
          <ThemeToggle />
        </div>
      </div>
    </header>
  )
}
