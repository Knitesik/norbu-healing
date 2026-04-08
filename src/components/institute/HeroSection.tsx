import { buttonVariants } from '#/components/ui/button.tsx'
import { Link } from '@tanstack/react-router'
import Logo from '/logo.jpeg'

export default function HeroSection() {
  return (
    <div className={'grid lg:grid-cols-2 place-content-center'}>
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
            <p className={'font-bold'}>Norbu Institute of Wellness & Beauty</p>
            <h1 className={'leading-20 text-primary font-extrabold!'}>
              Learn. Grow.
              <br />
              Excel.
            </h1>
          </div>
          <p>
            A professional training institute empowering careers in wellness,
            beauty, and hospitality — through hands-on learning and certified
            programmes.
          </p>
          <span className={'inline-flex gap-4 space-x-4 mx-auto'}>
            <Link
              to="/institute"
              className={buttonVariants({ className: 'w-fit mx-auto lg:mx-0' })}
            >
              Explore Courses
            </Link>
            <Link
              to="/institute"
              className={buttonVariants({
                variant: 'outline',
                className: 'w-fit mx-auto lg:mx-0',
              })}
            >
              Apply Now
            </Link>
          </span>
        </div>
      </div>
      <div className={'bg-muted relative'}>
        <img
          src="https://htj-client.b-cdn.net/norbu-healing/WhatsApp%20Image%202026-03-28%20at%202.56.20%20PM.jpeg"
          alt="institute"
          className={'object-cover object-left h-100 lg:h-full'}
        />
      </div>
    </div>
  )
}
