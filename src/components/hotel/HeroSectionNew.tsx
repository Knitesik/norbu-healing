import { buttonVariants } from '#/components/ui/button.tsx'
import { Link } from '@tanstack/react-router'
import Logo from '/healing_hotel_logo.jpeg'

export default function HeroSectionNew() {
  return (
    <div className={'grid lg:grid-cols-2 place-content-center'}>
      <div className={'p-7 lg:p-14'}>
        <div
          className={'grid gap-8 lg:w-2/3 mx-auto text-center lg:text-center'}
        >
          <img
            src={Logo}
            alt="Logo"
            className={'h-20 mix-blend-multiply object-cover mx-auto'}
          />
          <div className={'space-y-4'}>
            <p className={'font-bold'}>Changjalu · Olakha · Thimphu · Bhutan</p>
            <h1 className={'leading-20 text-primary font-extrabold!'}>
              NORBU HEALING
              <br />
              HOTEL
            </h1>
          </div>
          <p>
            Discover a luxurious escape in the heart of the city, where
            impeccable service, refined style, and world-class amenities come
            together to create an extraordinary stay.
          </p>
          <Link
            to="/hotel"
            className={buttonVariants({
              variant: 'outline',
              className: 'w-fit mx-auto',
            })}
          >
            View Our Services
          </Link>
        </div>
      </div>
      <div className={'bg-muted relative'}>
        <img
          src="https://htj-client.b-cdn.net/norbu-healing/WhatsApp%20Image%202026-03-25%20at%202.04.29%20PM%20(2).jpeg"
          alt="counter"
          className={'object-cover object-left h-100 lg:h-full'}
        />
      </div>
    </div>
  )
}
