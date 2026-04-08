import { buttonVariants } from '#/components/ui/button.tsx'
import { Link } from '@tanstack/react-router'
import Logo from '/healing_arts_logo.jpeg'

export default function HeroSectionNew() {
  return (
    <div className={'grid lg:grid-cols-2 place-content-center'}>
      <div className={'bg-muted relative'}>
        <img
          src="https://htj-client.b-cdn.net/norbu-healing/WhatsApp%20Image%202026-03-28%20at%202.56.20%20PM.jpeg"
          alt="counter"
          className={'object-cover object-left h-100 lg:h-full'}
        />
      </div>

      <div className={'p-7 lg:p-14'}>
        <div
          className={'grid gap-8 lg:w-[80%] mx-auto text-center lg:text-center'}
        >
          <img
            src={Logo}
            alt="Hotel Logo"
            className={'h-15 mx-auto mix-blend-multiply object-cover'}
          />
          <div className={'space-y-4'}>
            <h1 className={'leading-20 text-primary font-extrabold!'}>
              Restore. Rebalance.
              <br />
              Renew.
            </h1>
          </div>
          <p>
            A sanctuary of therapeutic healing where ancient wisdom meets modern
            spa science — designed to restore balance, relieve stress, and
            promote holistic well-being.
          </p>
          <span className={'inline-flex gap-4 space-x-4 mx-auto'}>
            <Link
              to="/healing-arts-centre"
              className={buttonVariants({ className: 'w-fit mx-auto lg:mx-0' })}
            >
              Book a Session
            </Link>
            <Link
              to="/healing-arts-centre"
              className={buttonVariants({
                variant: 'outline',
                className: 'w-fit mx-auto lg:mx-0',
              })}
            >
              View Treatments
            </Link>
          </span>
        </div>
      </div>
    </div>
  )
}
