import { Instagram, Facebook, PhoneIcon, MailIcon, MapPinIcon } from 'lucide-react'
import { Link } from '@tanstack/react-router'

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-4 py-16">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-primary-foreground">Norbu</h3>
            <p className="text-sm text-primary-foreground/80">
              A complete destination for wellness, beauty, hospitality &
              professional training — all under one roof in the heart of
              Thimphu, Bhutan.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" target="_blank" rel="noreferrer noopener" aria-label="Instagram">
                <Instagram className="size-5 text-primary-foreground/70 hover:text-primary-foreground transition-colors" />
              </a>
              <a href="#" target="_blank" rel="noreferrer noopener" aria-label="Facebook">
                <Facebook className="size-5 text-primary-foreground/70 hover:text-primary-foreground transition-colors" />
              </a>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="font-bold text-primary-foreground">Our Services</h4>
            <nav className="flex flex-col space-y-2 text-sm text-primary-foreground/80">
              <Link to="/hotel" className="hover:text-primary-foreground transition-colors">
                Hotel & Accommodation
              </Link>
              <Link to="/healing-arts-centre" className="hover:text-primary-foreground transition-colors">
                Healing Arts Centre
              </Link>
              <Link to="/salon" className="hover:text-primary-foreground transition-colors">
                Salon & Beauty
              </Link>
              <Link to="/institute" className="hover:text-primary-foreground transition-colors">
                Training Institute
              </Link>
            </nav>
          </div>

          <div className="space-y-4">
            <h4 className="font-bold text-primary-foreground">Quick Links</h4>
            <nav className="flex flex-col space-y-2 text-sm text-primary-foreground/80">
              <Link to="/" className="hover:text-primary-foreground transition-colors">
                Home
              </Link>
              <a href="#" className="hover:text-primary-foreground transition-colors">
                About Us
              </a>
              <a href="#" className="hover:text-primary-foreground transition-colors">
                Book Now
              </a>
              <a href="#" className="hover:text-primary-foreground transition-colors">
                Contact
              </a>
            </nav>
          </div>

          <div className="space-y-4">
            <h4 className="font-bold text-primary-foreground">Contact Us</h4>
            <div className="space-y-3 text-sm text-primary-foreground/80">
              <div className="flex items-start gap-2">
                <MapPinIcon className="size-4 mt-0.5 shrink-0" />
                <span>Changjalu, Olakha, Thimphu, Bhutan</span>
              </div>
              <div className="flex items-center gap-2">
                <PhoneIcon className="size-4 shrink-0" />
                <span>+975 17534016 / 02341550</span>
              </div>
              <div className="flex items-center gap-2">
                <MailIcon className="size-4 shrink-0" />
                <span>norbuhealinghotel@gmail.com</span>
              </div>
            </div>
          </div>
        </div>

        <hr className="my-10 border-primary-foreground/20" />

        <div className="flex flex-col items-center justify-between gap-4 text-center sm:flex-row">
          <p className="text-xs text-primary-foreground/60">
            © 2026 Norbu Healing Hotel. All rights reserved.
          </p>
          <div className="flex gap-4 text-xs text-primary-foreground/60">
            <a href="#" className="hover:text-primary-foreground transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary-foreground transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
