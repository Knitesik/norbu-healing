import { CheckIcon } from 'lucide-react'

const points = [
  'Peaceful and wellness-focused environment.',
  'Comfortable Rooms with Contemporary Amenities.',
  'Personalized Service.',
  'Ideal location for Relaxation.',
  'Perfect blend of Comfort and Flavor.',
]

export default function WhyChooseUsNew() {
  return (
    <div className={'grid lg:grid-cols-2 text-primary-foreground'}>
      <div
        className={
          'bg-primary py-10 px-10 lg:px-0 grid lg:grid-cols-5 place-content-center'
        }
      >
        <div className={'col-span-3 col-start-2'}>
          <h2 className={'text-4xl text-primary-foreground leading-17 lg:mb-8'}>
            Why Choose Us
          </h2>
          <ul className={'text-lg space-y-4'}>
            {points.map((point, i) => (
              <li key={i} className={'flex items-center gap-4'}>
                <CheckIcon />
                {point}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className={'bg-muted'}>
        <img
          src={
            'https://htj-client.b-cdn.net/norbu-healing/WhatsApp%20Image%202026-03-25%20at%202.04.29%20PM%20(6).jpeg'
          }
          alt={'Why Choose Us'}
          className={'lg:h-150 w-full object-cover'}
        />
      </div>
    </div>
  )
}
