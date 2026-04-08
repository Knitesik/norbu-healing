import { buttonVariants } from '#/components/ui/button.tsx'
import { Link } from '@tanstack/react-router'
import { GlobeIcon, MailIcon, MapIcon, PhoneIcon } from 'lucide-react'

const contactDetails = [
  {
    Icon: MailIcon,
    label: 'Email',
    value: 'norbuhealinghotel@gmail.com',
  },
  {
    Icon: PhoneIcon,
    label: 'Telephone',
    value: '+975 17534016 / 02341550',
  },
  {
    Icon: MapIcon,
    label: 'Address',
    value: 'Changjalu, Olakha : Thimphu Bhutan',
  },
  {
    Icon: GlobeIcon,
    label: 'Website',
    value: 'www.norbuhealing.com',
  },
]

export default function BookYourStay() {
  return (
    <div className={'grid lg:grid-cols-2 bg-primary'}>
      <div className={'p-6 md:p-10 *:text-primary-foreground space-y-8'}>
        <h2 className={'text-3xl lg:text-5xl text-primary-foreground leading-tight lg:leading-17'}>
          Book Your Stay Today!
        </h2>
        <p className={'lg:w-1/2'}>
          Experience luxury and service at Norbu Healing Hotel. Book now for top
          accommodations and personalized services. We look forward to hosting
          you!
        </p>
        <Link
          to="/hotel"
          className={buttonVariants({ variant: 'secondary', className: 'text-accent-foreground!' })}
        >
          Book Now
        </Link>
        <div
          className={
            'w-full bg-background rounded text-primary p-8 grid lg:grid-cols-2 gap-8'
          }
        >
          {contactDetails.map((contact, index) => (
            <div key={index}>
              <span
                className={
                  'flex gap-2 items-center dark:text-primary-foreground text-primary'
                }
              >
                <contact.Icon size={20} />
                <h4 className={'text-lg font-bold'}>{contact.label}</h4>
              </span>
              <p className={'dark:text-primary-foreground text-primary/80'}>
                {contact.value}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className={''}>
        <img
          src={
            'https://htj-client.b-cdn.net/norbu-healing/WhatsApp%20Image%202026-03-25%20at%202.04.29%20PM%20(1).jpeg'
          }
          alt={'book your stay'}
          className={'h-full'}
        />
      </div>
    </div>
  )
}
