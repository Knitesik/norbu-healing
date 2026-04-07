import { Button } from '#/components/ui/button.tsx'

const features = [
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
      <div className={'grid lg:grid-cols-2 text-start my-20 gap-6'}>
        {features.map((feature, index) => (
          <div key={index} className={'bg-muted text-primary p-8'}>
            <h2>{feature.title}</h2>
            <h5>{feature.subtitle}</h5>
            <p className={'text-primary my-5'}>{feature.description}</p>
            <ul className={'list-disc *:ml-8'}>
              {feature.items.map((item, subIndex) => (
                <li key={subIndex}>{item}</li>
              ))}
            </ul>
            <Button className={'mt-10'}>{feature.cta}</Button>
          </div>
        ))}
      </div>
    </div>
  )
}
