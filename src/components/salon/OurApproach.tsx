import { buttonVariants } from '#/components/ui/button.tsx'

export default function OurApproach() {
  return (
    <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-8 px-4 py-16 md:grid-cols-2">
      <div className={'grid gap-4'}>
        <p>Our Approach</p>
        <h2>Where Beauty Meets Expertise</h2>
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
          src="https://htj-client.b-cdn.net/norbu-healing/IMG_4302.JPG.jpeg"
          className="h-96 w-full object-cover"
          alt="Salon"
        />
      </div>
    </div>
  )
}
