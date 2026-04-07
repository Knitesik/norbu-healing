import { buttonVariants } from '#/components/ui/button.tsx'

export default function OurApproach() {
  return (
    <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-8 px-4 py-16 md:grid-cols-2">
      <div className={'grid gap-4'}>
        <p>Our Approach</p>
        <h1 className="text-balance font-bold tracking-tighter md:text-4xl">
          Where Beauty Meets Expertise
        </h1>
        <p className="mt-2 text-muted-foreground md:text-balance">
          At Norbu Salon & Beauty, we believe that true beauty is an expression
          of confidence and self-care. Our team of skilled stylists and beauty
          professionals combine contemporary techniques with personalised
          attention to deliver results that exceed expectations.
          <br />
          <br />
          From precision haircuts to rejuvenating skincare treatments, every
          service is crafted to enhance your natural beauty while providing a
          relaxing, luxurious experience.
        </p>
        <ul className={'list-disc *:ml-4 *:mb-2'}>
          {[
            'Personalised consultations for every client',
            'Premium, professional-grade beauty products',
            'Skilled and experienced beauty professionals',
            'Relaxing, contemporary salon environment',
          ].map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
        <div className="mt-6 flex gap-2">
          <a href="#" className={buttonVariants()}>
            Book Now
          </a>
          <a href="#" className={buttonVariants({ variant: 'outline' })}>
            Learn More
          </a>
        </div>
      </div>
      <div>
        <img
          loading="lazy"
          decoding="async"
          src="https://htj-client.b-cdn.net/norbu-healing/WhatsApp%20Image%202026-03-25%20at%202.04.29%20PM%20(4).jpeg"
          className="h-96 w-full object-cover"
          alt="Salon"
        />
      </div>
    </div>
  )
}
