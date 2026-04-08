import { createFileRoute } from '@tanstack/react-router'
import HeroSection from '#/components/home/HeroSection.tsx'
import StatsBar from '#/components/home/StatsBar.tsx'
import AboutSection from '#/components/home/AboutSection.tsx'
import OurPhilosophy from '#/components/home/OurPhilosophy.tsx'
import FeaturesComponent from '#/components/home/FeaturesComponent.tsx'
import WhyChooseUs from '#/components/home/WhyChooseUs.tsx'
import Testimonials from '#/components/home/Testimonials.tsx'
import CallToAction from '#/components/home/CallToAction.tsx'
import ImageMarquee from '#/components/ImageMarquee.tsx'
import BookYourStay from '#/components/hotel/BookYourStay.tsx'

export const Route = createFileRoute('/')({
  head: () => ({
    meta: [
      {
        title: 'Norbu Healing',
      },
    ],
  }),
  component: App,
})

function App() {
  return (
    <main className={'py-14'}>
      <section className={'max-w-full'}>
        <HeroSection />
      </section>
      <section className={'max-w-full'}>
        <StatsBar />
      </section>
      <section className={'max-w-full'}>
        <AboutSection />
      </section>
      <section>
        <OurPhilosophy />
      </section>
      <section className={'max-w-full bg-primary'}>
        <FeaturesComponent />
      </section>
      <section className={'max-w-full'}>
        <WhyChooseUs />
      </section>
      <section className={'max-w-full'}>
        <Testimonials />
      </section>
      <section className={'max-w-full'}>
        <CallToAction />
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
