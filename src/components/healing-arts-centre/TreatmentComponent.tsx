import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { ArrowRight, Check } from 'lucide-react'

const items = [
  {
    title: 'Signature',
    subtitle: 'Traditional Therapeutic Massage',
    description:
      "Deep tissue work grounded in traditional techniques, targeting tension and restoring the body's natural energy flow and balance.",
  },

  {
    title: 'Sensory',
    subtitle: 'Aromatherapy Massage',
    description:
      'A gentle, full-body massage using premium essential oils chosen for their calming and restorative properties.',
  },

  {
    title: 'Detox',
    subtitle: 'Body Treatments & Detox',
    description:
      "Natural botanicals in wraps and scrubs to purify the skin and stimulate the body's lymphatic system.",
  },

  {
    title: 'Wellness',
    subtitle: 'Stress Relief Therapies',
    description:
      'Personalised sessions combining pressure point work, breathwork guidance, and gentle therapeutic touch.',
  },

  {
    title: 'Holistic',
    subtitle: 'Holistic Healing Sessions',
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
      <div>
        <h2 className="mb-2 font-semibold">{title}</h2>
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
          />
        ))}
        {/* <FeatureBlock*/}
        {/*  title="Folders and Subfolders"*/}
        {/*  description="Organize your bookmarks into folders and subfolders. You can also move bookmarks between folders."*/}
        {/*  image="https://images.unsplash.com/photo-1698044048234-2e7f6c4e6aca?q=80&w=1000&auto=format"*/}
        {/*  featureList={[*/}
        {/*    'Organize bookmarks into folders and subfolders',*/}
        {/*    'Move bookmarks between folders',*/}
        {/*    'Drag and drop bookmarks to reorder them',*/}
        {/*  ]}*/}
        {/* />*/}
      </div>
    </div>
  )
}
