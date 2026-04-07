import { Button } from '#/components/ui/button.tsx'
import { Link } from '@tanstack/react-router'

const features = [
  {
    title: 'Norbu Healing Hotel',
    subtitle: 'Luxury Hospitality',
    description:
      'A peaceful retreat offering comfort, relaxation, and authentic Bhutanese hospitality. Modern convenience meets traditional charm in the heart of Thimphu.',
    items: [
      'Deluxe Couple & Twin Rooms',
      'Indoor Restaurant & Outdoor Café',
      'Sauna & Steam Facilities',
      'Bar & Lounge',
      'Mini Conference Hall',
    ],
    cta: 'Explore rooms',
    to: '/hotel' as const,
  },
  {
    title: 'Norbu Healing Arts Centre',
    subtitle: 'Therapeutic Wellness',
    description:
      'A sanctuary offering therapeutic spa treatments, traditional healing practices, and relaxation therapies designed to restore balance and promote holistic health.',
    items: [
      'Traditional Therapeutic Massage',
      'Aromatherapy & Relaxation',
      'Body Treatments & Detox',
      'Stress Relief Therapies',
      'Holistic Healing Sessions',
    ],
    cta: 'Explore treatments',
    to: '/healing-arts-centre' as const,
  },
  {
    title: 'Norbu Salon & Beauty',
    subtitle: 'Beauty & Grooming',
    description:
      'A premium beauty destination where skilled artistry meets personalised care — designed to enhance your natural beauty and boost your confidence.',
    items: [
      'Hair Styling & Colouring',
      'Facials & Skin Treatments',
      'Manicure & Pedicure',
      'Bridal & Occasion Packages',
      "Men's Grooming Services",
    ],
    cta: 'View services',
    to: '/salon' as const,
  },
  {
    title: 'Norbu Institute',
    subtitle: 'Professional Training',
    description:
      'Empowering careers in wellness, beauty, and hospitality through hands-on learning, certified programmes, and mentorship from industry experts.',
    items: [
      'Beauty & Cosmetology Training',
      'Therapeutic Massage Courses',
      'Hospitality Management',
      'Advanced Specialist Certification',
      'Career Placement Support',
    ],
    cta: 'Explore courses',
    to: '/institute' as const,
  },
]

export default function FeaturesComponent() {
  return (
    <div
      className={
        'lg:text-center container mx-auto py-14 text-primary-foreground'
      }
    >
      <p className={'text-primary-foreground px-8'}>UNDER ONE UMBRELLA</p>
      <h2 className={'text-4xl mt-4 text-secondary px-8'}>
        Four Pillars of Complete Wellness
      </h2>
      <div className={'grid md:grid-cols-2 text-start my-20 gap-6 px-4 lg:px-0'}>
        {features.map((feature, index) => (
          <div key={index} className={'bg-muted text-primary p-6 md:p-8'}>
            <h2>{feature.title}</h2>
            <h5 className="text-muted-foreground">{feature.subtitle}</h5>
            <p className={'text-primary my-5'}>{feature.description}</p>
            <ul className={'list-disc *:ml-8'}>
              {feature.items.map((item, subIndex) => (
                <li key={subIndex}>{item}</li>
              ))}
            </ul>
            <Link to={feature.to}>
              <Button className={'mt-10'}>{feature.cta}</Button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}
