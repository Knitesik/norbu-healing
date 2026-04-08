import { buttonVariants } from '#/components/ui/button.tsx'
import { Link } from '@tanstack/react-router'
import Logo from '/healing_salon_logo.jpeg'

export default function HeroSection() {
  return (
    <div className={'grid lg:grid-cols-2 place-content-center'}>
      <div className={'bg-muted relative'}>
        <img
          src="https://htj-client.b-cdn.net/norbu-healing/IMG_4291.JPG.jpeg"
          alt="salon"
          className={'object-cover object-left h-100 lg:h-full'}
        />
      </div>

      <div className={'p-7 lg:p-14'}>
        <div
          className={'grid gap-8 lg:w-[80%] mx-auto text-center lg:text-center'}
        >
          <div>
            <img
              src={Logo}
              alt="Hotel Logo"
              className={'h-15 mx-auto mix-blend-multiply object-cover'}
            />
          </div>
          <div className={'space-y-4'}>
            <h1 className={'leading-20 text-primary font-extrabold!'}>
              Enhance. Glow.
              <br />
              Shine.
            </h1>
          </div>
          <p>
            A premium beauty and grooming destination where skilled artistry
            meets personalised care — designed to enhance your natural beauty
            and boost your confidence.
          </p>
          <span className={'inline-flex gap-4 space-x-4 mx-auto'}>
            <Link
              to="/salon"
              className={buttonVariants({ className: 'w-fit mx-auto lg:mx-0' })}
            >
              Book an Appointment
            </Link>
            <Link
              to="/salon"
              className={buttonVariants({
                variant: 'outline',
                className: 'w-fit mx-auto lg:mx-0',
              })}
            >
              View Services
            </Link>
          </span>
        </div>
      </div>
    </div>
  )
}
