import { buttonVariants } from '#/components/ui/button.tsx'
import { Link } from '@tanstack/react-router'

const packages = [
  {
    name: 'Essential',
    tagline: 'Quick Refresh',
    description:
      'A quick beauty refresh for those on the go — perfect for a pick-me-up before an event or outing.',
    includes: ['Haircut & Blow Dry', 'Express Facial', 'Basic Manicure'],
  },
  {
    name: 'Signature',
    tagline: 'Most Popular',
    description:
      'Our most popular package combining hair, skin, and nail care for a complete beauty transformation.',
    includes: [
      'Hair Styling & Treatment',
      'Full Facial with Mask',
      'Manicure & Pedicure',
      'Eyebrow Shaping',
    ],
    featured: true,
  },
  {
    name: 'Luxe',
    tagline: 'Complete Pampering',
    description:
      'The ultimate beauty experience — a full day of pampering from head to toe for special occasions.',
    includes: [
      'Hair Colour & Styling',
      'Premium Facial & Mask',
      'Gel Manicure & Pedicure',
      'Full Makeup Application',
      'Relaxation Massage',
    ],
  },
]

export default function PricingHighlight() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="text-center space-y-4 mb-12">
        <p>OUR PACKAGES</p>
        <h2>Beauty Packages for Every Occasion</h2>
        <p className="max-w-2xl mx-auto">
          Choose a package that suits your needs, or let us create a custom
          experience just for you.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {packages.map((pkg, index) => (
          <div
            key={index}
            className={`p-8 space-y-6 border ${
              pkg.featured
                ? 'border-primary bg-primary text-primary-foreground'
                : 'border-border'
            }`}
          >
            <div>
              <p
                className={`text-sm font-bold uppercase tracking-wider ${
                  pkg.featured ? 'text-primary-foreground/70' : ''
                }`}
              >
                {pkg.tagline}
              </p>
              <h3
                className={`text-2xl font-bold mt-2 ${pkg.featured ? 'text-primary-foreground' : 'text-foreground'}`}
              >
                {pkg.name}
              </h3>
            </div>
            <p className={pkg.featured ? 'text-primary-foreground/80' : ''}>
              {pkg.description}
            </p>
            <ul className="space-y-3">
              {pkg.includes.map((item, i) => (
                <li
                  key={i}
                  className={`flex items-center gap-2 text-sm ${
                    pkg.featured
                      ? 'text-primary-foreground/90'
                      : 'text-muted-foreground'
                  }`}
                >
                  <span
                    className={`size-1.5 rounded-full ${
                      pkg.featured ? 'bg-primary-foreground' : 'bg-primary'
                    }`}
                  />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  )
}
