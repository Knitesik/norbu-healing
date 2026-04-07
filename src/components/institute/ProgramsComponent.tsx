import { buttonVariants } from '#/components/ui/button.tsx'
import { cn } from '#/lib/utils.ts'
import { ArrowRight, Check } from 'lucide-react'

const items = [
  {
    title: 'Beauty & Cosmetology',
    subtitle: 'Professional Beauty Training',
    description:
      'Comprehensive training in hair styling, skincare, makeup artistry, and nail care — preparing students for careers in the beauty industry.',
  },
  {
    title: 'Wellness Therapy',
    subtitle: 'Therapeutic Massage & Healing',
    description:
      'Learn traditional and modern therapeutic techniques including massage, aromatherapy, and holistic healing practices.',
  },
  {
    title: 'Hospitality Training',
    subtitle: 'Service Excellence Programme',
    description:
      'Develop skills in guest relations, front desk management, food & beverage service, and hospitality operations.',
  },
  {
    title: 'Advanced Certification',
    subtitle: 'Specialist Programmes',
    description:
      'Advanced courses for practising professionals looking to specialise in areas such as bridal styling, advanced skincare, or spa management.',
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
          <span className="text-5xl font-bold text-primary-foreground/20">{title}</span>
        </div>
      )}
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
          <span>Learn More</span>
          <ArrowRight className="size-4" />
        </a>
      </div>
    </div>
  )
}

export default function ProgramsComponent() {
  return (
    <div className="mx-auto max-w-4xl text-center text-primary-foreground px-4 py-20">
      <span className={'space-y-2'}>
        <p className={'text-primary-foreground'}>Our Programmes</p>
        <h2 className="">Courses Designed to Build Careers</h2>
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
      </div>
    </div>
  )
}
