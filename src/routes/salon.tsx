import { createFileRoute } from '@tanstack/react-router'
import HeroSection from '#/components/salon/HeroSection.tsx'
import StatsBar from '#/components/salon/StatsBar.tsx'
import OurApproach from '#/components/salon/OurApproach.tsx'
import ServicesComponent from '#/components/salon/ServicesComponent.tsx'
import PricingHighlight from '#/components/salon/PricingHighlight.tsx'
import GallerySection from '#/components/salon/GallerySection.tsx'
import WhyChooseUs from '#/components/salon/WhyChooseUs.tsx'
import Testimonials from '#/components/salon/Testimonials.tsx'
import ImageMarquee from '#/components/ImageMarquee.tsx'
import BookYourStay from '#/components/hotel/BookYourStay.tsx'

export const Route = createFileRoute('/salon')({
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
        <ServicesComponent />
      </section>
      <section className={'max-w-full'}>
        <PricingHighlight />
      </section>
      <section className={'max-w-full'}>
        <GallerySection />
      </section>
      <section className={'max-w-full'}>
        <WhyChooseUs />
      </section>
      <section className={'max-w-full'}>
        <Testimonials />
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
