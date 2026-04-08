import { buttonVariants } from '#/components/ui/button.tsx'
import { cn } from '#/lib/utils.ts'
import { ArrowRight, Check } from 'lucide-react'

const items = [
  {
    title: 'Signature',
    subtitle: 'Traditional Therapeutic Massage',
    image:
      'https://htj-client.b-cdn.net/norbu-healing/WhatsApp%20Image%202026-03-28%20at%202.56.20%20PM%20(4).jpeg',
    description:
      "Deep tissue work grounded in traditional techniques, targeting tension and restoring the body's natural energy flow and balance.",
  },

  {
    title: 'Sensory',
    subtitle: 'Aromatherapy Massage',
    image: 'https://htj-client.b-cdn.net/norbu-healing/Untitled.jpg',
    description:
      'A gentle, full-body massage using premium essential oils chosen for their calming and restorative properties.',
  },

  {
    title: 'Detox',
    subtitle: 'Body Treatments & Detox',
    image:
      'https://htj-client.b-cdn.net/norbu-healing/WhatsApp%20Image%202026-03-28%20at%202.56.20%20PM%20(2).jpeg',
    description:
      "Natural botanicals in wraps and scrubs to purify the skin and stimulate the body's lymphatic system.",
  },

  {
    title: 'Wellness',
    subtitle: 'Stress Relief Therapies',
    image:
      'https://htj-client.b-cdn.net/norbu-healing/WhatsApp%20Image%202026-03-28%20at%202.56.20%20PM%20(4).jpeg',
    description:
      'Personalised sessions combining pressure point work, breathwork guidance, and gentle therapeutic touch.',
  },

  {
    title: 'Holistic',
    subtitle: 'Holistic Healing Sessions',
    image:
      'https://htj-client.b-cdn.net/norbu-healing/WhatsApp%20Image%202026-03-28%20at%202.56.20%20PM%20(3).jpeg',
    description:
      'Whole-body sessions drawing on multiple modalities for physical, mental, and energetic balance.',
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
          <span>Get started</span>
          <ArrowRight className="size-4" />
        </a>
      </div>
    </div>
  )
}

export default function TreatmentComponent() {
  return (
    <div className="mx-auto max-w-4xl text-center text-primary-foreground px-4 py-20">
      <span className={'space-y-2'}>
        <p className={'text-primary-foreground'}>Treatments</p>
        <h2 className="">Therapies Designed to Restore You</h2>
      </span>
      <div className={'mt-20 space-y-20 text-start'}>
        {items.map((item, index) => (
          <FeatureBlock
            key={item.title}
            title={item.title}
            description={item.description}
            featureList={[item.subtitle]}
            position={index % 2 === 0 ? 'right' : 'left'}
            image={item.image}
          />
        ))}
      </div>
    </div>
  )
}
