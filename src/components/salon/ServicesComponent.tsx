import { buttonVariants } from '#/components/ui/button.tsx'
import { cn } from '#/lib/utils.ts'
import { ArrowRight, Check } from 'lucide-react'

const items = [
  {
    title: 'Hair Styling',
    subtitle: 'Cuts, Colour & Styling',
    image: 'https://htj-client.b-cdn.net/norbu-healing/IMG_4302.JPG.jpeg',
    description:
      'From precision cuts to creative colouring and styling, our expert stylists craft looks that suit your personality and lifestyle.',
  },
  {
    title: 'Skincare',
    subtitle: 'Facials & Skin Treatments',
    image: 'https://htj-client.b-cdn.net/norbu-healing/IMG_4293.JPG.jpeg',
    description:
      'Rejuvenating facial treatments using premium products to cleanse, nourish, and restore your natural glow.',
  },
  {
    title: 'Nail Art',
    subtitle: 'Manicure & Pedicure',
    image: 'https://htj-client.b-cdn.net/norbu-healing/IMG_4299.JPG.jpeg',
    description:
      'Professional nail care and creative nail art services to keep your hands and feet looking polished and beautiful.',
  },
  {
    title: 'Bridal',
    subtitle: 'Bridal & Occasion Packages',
    image: 'https://htj-client.b-cdn.net/norbu-healing/IMG_4306.JPG.jpeg',
    description:
      'Complete beauty packages for weddings and special occasions — hair, makeup, skincare, and nails, all in one place.',
  },
  {
    title: 'Grooming',
    subtitle: "Men's Grooming Services",
    image: 'https://htj-client.b-cdn.net/norbu-healing/IMG_4304.JPG.jpeg',
    description:
      'Professional grooming services for men including haircuts, beard styling, facials, and skincare treatments.',
  },
]

function FeatureBlock({
  title,
  description,
  image,
  featureList,
  position = 'left',
}: {
  title: string
  description: string
  image?: string
  featureList?: string[]
  position?: 'left' | 'right'
}) {
  return (
    <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-2 md:gap-24">
      {image ? (
        <img
          loading="lazy"
          decoding="async"
          src={image}
          alt={title}
          className={cn(
            'h-80 w-full bg-muted object-cover',
            position === 'left' ? '' : 'md:order-last',
          )}
        />
      ) : (
        <div
          className={cn(
            'h-80 w-full bg-primary-foreground/10 flex items-center justify-center',
            position === 'left' ? '' : 'md:order-last',
          )}
        >
          <span className="text-5xl font-bold text-primary-foreground/20">
            {title}
          </span>
        </div>
      )}
      <div>
        <h3 className="mb-2 font-semibold">{title}</h3>
        <p className="text-primary-foreground">{description}</p>
        {featureList && (
          <ul className="my-6 space-y-3 text-primary-foreground">
            {featureList.map((feature) => (
              <li key={feature}>
                <Check className="mr-2 inline-block size-4 text-emerald-500" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        )}
        <a href="#" className={buttonVariants({ variant: 'secondary' })}>
          <span>Book Now</span>
          <ArrowRight className="size-4" />
        </a>
      </div>
    </div>
  )
}

export default function ServicesComponent() {
  return (
    <div className="mx-auto max-w-4xl text-center text-primary-foreground px-4 py-20">
      <span className={'space-y-2'}>
        <p className={'text-primary-foreground'}>Our Services</p>
        <h2 className="">Beauty Services Tailored for You</h2>
      </span>
      <div className={'mt-20 space-y-20 text-start'}>
        {items.map((item, index) => (
          <FeatureBlock
            key={item.title}
            title={item.title}
            description={item.description}
            featureList={[item.subtitle]}
            image={item.image}
            position={index % 2 === 0 ? 'right' : 'left'}
          />
        ))}
      </div>
    </div>
  )
}
