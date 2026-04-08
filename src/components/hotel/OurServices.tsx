import { buttonVariants } from '#/components/ui/button.tsx'
import { cn } from '#/lib/utils.ts'
import {
  ArrowRight,
  Check,
  Coffee,
  GraduationCap,
  Hotel,
  MonitorPlay,
  Scissors,
  Sparkles,
} from 'lucide-react'
import { Badge } from '#/components/ui/badge.tsx'

const services = [
  {
    icon: Sparkles,
    title: 'Healing Center',
    description:
      'Therapeutic massage, reflexology, sinus and migraine relief, stress management, and customized essential oil treatments based on the Five Elements philosophy.',
    features: ['Certified Therapists', 'Natural Products', 'Personalized Care'],
    image:
      'https://www.norbuhealing.com/wp-content/uploads/2026/02/Healing.jpg',
  },
  {
    icon: Scissors,
    title: 'Healing Salon',
    description:
      'Professional hair, beauty, and wellness treatments. Features sauna and steam bath for detoxification, improved circulation, and glowing skin.',
    features: ['Hair & Beauty', 'Sauna & Steam', 'Relaxation'],
    image:
      'https://www.norbuhealing.com/wp-content/uploads/2026/02/Healing-Salon-1.png',
  },
  {
    icon: Hotel,
    title: 'Healing Hotel',
    description:
      'Peaceful and comfortable stay designed to support rest, relaxation, and holistic well-being with spacious rooms and warm hospitality.',
    features: ['Serene Environment', 'Wellness Services', 'Healthy Dining'],
    image:
      'https://www.norbuhealing.com/wp-content/uploads/2026/02/Healing-hotel.jpeg',
  },
  {
    icon: Coffee,
    title: 'Healing Café',
    description:
      'A peaceful space serving healthy, wholesome meals, herbal teas, and refreshing beverages designed to support healing and balanced living.',
    features: ['Organic Menu', 'Herbal Teas', 'Mindful Dining'],
    image: 'https://www.norbuhealing.com/wp-content/uploads/2026/02/cafe.jpg',
  },
  {
    icon: GraduationCap,
    title: 'Healing Institute',
    description:
      'Professional training center for massage, spa, hair, and beauty therapies. Hands-on training with internationally aligned standards.',
    features: ['Certified Courses', 'Expert Instructors', 'Career Support'],
    image:
      'https://www.norbuhealing.com/wp-content/uploads/2026/02/Screenshot-2026-02-02-at-4.00.58-PM.png',
  },
  {
    icon: MonitorPlay,
    title: 'E-Learning',
    description:
      'Flexible online courses in wellness, healing arts, and professional skills. Learn anytime, anywhere with guided lessons and video tutorials.',
    features: ['Self-Paced', 'Video Tutorials', 'Certification'],
    badge: 'New',
    image:
      'https://www.norbuhealing.com/wp-content/uploads/2026/02/About-Us.jpg',
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
          'h-80 w-full bg-primary-foreground object-cover object-top',
          position === 'left' ? '' : 'md:order-last',
        )}
      />
      <div>
        <h3 className="mb-2 text-xl font-semibold">{title}</h3>
        <p className="text-muted-foreground">{description}</p>
        {featureList && (
          <ul className="my-6 space-y-3 text-muted-foreground">
            {featureList.map((feature) => (
              <li key={feature}>
                <Check className="mr-2 inline-block size-4 text-emerald-500" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        )}
        <a href="#" className={buttonVariants()}>
          <span>Get started</span>
          <ArrowRight className="size-4" />
        </a>
      </div>
    </div>
  )
}

export default function OurServices() {
  return (
    <div className="mx-auto grid max-w-6xl gap-12 px-4 py-20">
      <div className={'grid *:mx-auto gap-4'}>
        <Badge className={'mx-auto'}>Our Services</Badge>
        <h2 className="mx-auto">Healing, Wellness & Hospitality</h2>
        <p>
          A complete ecosystem of wellness services designed to nurture your
          body, mind, and spirit.
        </p>
      </div>
      {services.map((service, index) => (
        <FeatureBlock
          key={index}
          title={service.title}
          description={service.description}
          image={service.image}
          featureList={service.features}
          position={index % 2 === 0 ? 'left' : 'right'}
        />
      ))}
    </div>
  )
}
