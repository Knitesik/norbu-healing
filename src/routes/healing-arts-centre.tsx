import { createFileRoute } from '@tanstack/react-router'
import HeroSection from '#/components/healing-arts-centre/HeroSection.tsx'
import StatsBar from '#/components/healing-arts-centre/StatsBar.tsx'
import OurApproach from '#/components/healing-arts-centre/OurApproach.tsx'
import TreatmentComponent from '#/components/healing-arts-centre/TreatmentComponent.tsx'
import JourneyComponent from '#/components/healing-arts-centre/JourneyComponent.tsx'
import WhyChooseUs from '#/components/healing-arts-centre/WhyChooseUs.tsx'
import Testimonials from '#/components/healing-arts-centre/Testimonials.tsx'
import FAQ from '#/components/healing-arts-centre/FAQ.tsx'
import ImageMarquee from '#/components/ImageMarquee.tsx'
import BookYourStay from '#/components/hotel/BookYourStay.tsx'

export const Route = createFileRoute('/healing-arts-centre')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <main className={'py-14'}>
      <section className={'max-w-full'}>
        <HeroSection />
      </section>
      <section className={'max-w-full'}>
        <StatsBar />
      </section>
      <section className={'max-w-full'}>
        <OurApproach />
      </section>
      <section className={'max-w-full bg-primary'}>
        <TreatmentComponent />
      </section>
      <section className={'max-w-full'}>
        <JourneyComponent />
      </section>
      <section className={'max-w-full'}>
        <WhyChooseUs />
      </section>
      <section className={'max-w-full'}>
        <Testimonials />
      </section>
      <section className={'max-w-full bg-muted'}>
        <FAQ />
      </section>
      <section className={'max-w-full'}>
        <ImageMarquee />
      </section>
      <section className={'max-w-full'}>
        <BookYourStay />
      </section>
    </main>
  )
}
