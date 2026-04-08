import { Button, buttonVariants } from '#/components/ui/button.tsx'
import ThemeToggle from '#/components/ThemeToggle.tsx'
import { Link } from '@tanstack/react-router'
import { useState } from 'react'
import { MenuIcon, XIcon } from 'lucide-react'
import Logo from '/logo.jpeg'

const navLinks = [
  { to: '/' as const, label: 'Home' },
  { to: '/hotel' as const, label: 'Hotel' },
  { to: '/healing-arts-centre' as const, label: 'Healing Arts Centre' },
  { to: '/salon' as const, label: 'Salon' },
  { to: '/institute' as const, label: 'Institute' },
]

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="w-full border-b border-b-border fixed z-50 top-0 bg-background">
      <div className="mx-auto flex max-w-7xl items-center justify-between p-4">
        <Link to="/">
          <img src={Logo} alt="Logo" className={'h-10 object-cover'} />
        </Link>
        <div className="flex items-center gap-1">
          <nav className="hidden items-center text-muted-foreground lg:inline-flex">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={buttonVariants({ variant: 'ghost', size: 'sm' })}
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <XIcon /> : <MenuIcon />}
          </Button>
        </div>
      </div>

      {mobileOpen && (
        <div className="lg:hidden border-t border-border bg-background">
          <nav className="flex flex-col p-4 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={
                  buttonVariants({ variant: 'ghost', size: 'sm' }) +
                  ' justify-start'
                }
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  )
}
