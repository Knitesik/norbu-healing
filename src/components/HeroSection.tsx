import { buttonVariants } from '@/components/ui/button'
import { StarsIcon } from 'lucide-react'
import { Badge } from '#/components/ui/badge.tsx'
import { Link } from '@tanstack/react-router'

export default function HeroSection() {
  return (
    <div className="mx-auto flex  max-w-4xl flex-col items-start justify-start gap-x-8 gap-y-7 p-4">
      <Badge className={'mx-auto'}>
        <StarsIcon />
        Healing to Enjoy in {new Date().getFullYear()}
      </Badge>
      <div className="mx-auto flex max-w-lg flex-col items-center justify-center gap-4 text-center">
        <h1 className="text-foreground text-4xl font-bold tracking-tight text-balance">
          Sanctuary for Holistic Healing
        </h1>
        <p className="mx-auto max-w-sm">
          Experience renewal, balance, and inner harmony at Norbu Healing in
          Thimphu. We combine ancient healing traditions with modern wellness
          practices.
        </p>
        <div className="flex gap-2">
          <a href={'#item'} className={buttonVariants()}>
            Get Started
          </a>
          <Link
            to={'.'}
            href="#"
            className={buttonVariants({ variant: 'outline' })}
          >
            Learn More
          </Link>
        </div>
      </div>

      <div className="relative mx-auto my-14 h-full w-full overflow-visible">
        <div
          className="absolute inset-0 grid blur-2xl select-none pointer-events-none"
          aria-hidden
        >
          <div className="bg-primary/50"></div>
        </div>
        <div className="border-input relative bg-background mx-auto h-full w-full overflow-hidden rounded-md border p-2">
          <img
            loading="lazy"
            decoding="async"
            src="https://www.norbuhealing.com/wp-content/uploads/2026/02/Healing-hotel.jpeg"
            className="border-input h-96 w-full rounded border object-cover"
            alt="Healing Hotel"
          />
        </div>
      </div>
      <div className="grid grid-cols-2 gap-8 overflow-hidden w-full lg:grid-cols-4 mb-10">
        <div className="flex items-start justify-start gap-5">
          <div className="mt-0.5 flex items-center justify-center rounded-md border-[0.5px] border-red-300 bg-red-50 dark:border-red-800/25 dark:bg-red-800/25 p-2"></div>
          <div>
            <h3 className="text-foreground text-lg font-semibold">
              Healing Center
            </h3>
            <p className="text-muted-foreground text-sm">Therapeutic Care</p>
          </div>
        </div>
        <div className="flex items-start justify-start gap-5">
          <div className="mt-0.5 flex items-center justify-center rounded-md border-[0.5px] border-emerald-300 bg-emerald-50 dark:border-emerald-800/25 dark:bg-emerald-800/25 p-2">
            {/* <Mobile className="h-6 w-6 text-emerald-600 dark:text-foreground" />*/}
          </div>
          <div>
            <h3 className="text-foreground text-lg font-semibold">
              Healing Hotel
            </h3>
            <p className="text-muted-foreground text-sm">Restful Retreat</p>
          </div>
        </div>
        <div className="flex items-start justify-start gap-5">
          <div className="mt-0.5 flex items-center justify-center rounded-md border-[0.5px] border-blue-300 bg-blue-50 dark:border-blue-800/25 dark:bg-blue-800/25 p-2">
            {/* <Mobile className="h-6 w-6 text-blue-600 dark:text-foreground" />*/}
          </div>
          <div>
            <h3 className="text-foreground text-lg font-semibold">
              Healing Salon
            </h3>
            <p className="text-muted-foreground text-sm">Beauty & Wellness</p>
          </div>
        </div>
        <div className="flex items-start justify-start gap-5">
          <div className="mt-0.5 flex items-center justify-center rounded-md border-[0.5px] border-indigo-300 bg-indigo-50 dark:border-indigo-800/25 dark:bg-indigo-800/25 p-2">
            {/* <Label className="h-6 w-6 text-indigo-600 dark:text-foreground" />*/}
          </div>
          <div>
            <h3 className="text-foreground text-lg font-semibold">
              Healing Institute
            </h3>
            <p className="text-muted-foreground text-sm">
              Professional Training
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
