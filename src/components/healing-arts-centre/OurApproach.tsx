import { buttonVariants } from '@/components/ui/button'

export default function OurApproach() {
  return (
    <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-8 px-4 py-16 md:grid-cols-2">
      <div className={'grid gap-4'}>
        <p>Our Approach</p>
        <h1 className="text-balance font-bold tracking-tighter md:text-4xl">
          Ancient Wisdom, Modern Healing
        </h1>
        <p className="mt-2 text-muted-foreground md:text-balance">
          We integrate traditional Bhutanese healing techniques with modern spa
          practices to create therapies that are both effective and deeply
          relaxing. Every session is tailored to meet the individual needs of
          our clients.
          <br />
          <br />
          Our centre is designed to provide a calm and soothing atmosphere,
          allowing clients to disconnect from daily stress and fully immerse
          themselves in a healing experience.
        </p>
        <ul className={'list-disc *:ml-4 *:mb-2'}>
          {[
            'Individually tailored treatments for every client',
            'Traditional Bhutanese healing techniques',
            'Natural, professional-grade products only',
            'Serene, private treatment rooms',
          ].map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
        <div className="mt-6 flex gap-2">
          <a href="#" className={buttonVariants()}>
            Get Started
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
          src="https://htj-client.b-cdn.net/norbu-healing/WhatsApp%20Image%202026-03-25%20at%202.04.30%20PM%20(3).jpeg"
          className="h-96 w-full  object-cover"
          alt="Image"
        />
      </div>
    </div>
  )
}
