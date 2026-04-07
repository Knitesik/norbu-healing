import { createFileRoute } from '@tanstack/react-router'
import HeroSection from '#/components/institute/HeroSection.tsx'
import StatsBar from '#/components/institute/StatsBar.tsx'
import AboutSection from '#/components/institute/AboutSection.tsx'
import CurriculumOverview from '#/components/institute/CurriculumOverview.tsx'
import ProgramsComponent from '#/components/institute/ProgramsComponent.tsx'
import WhyChooseUs from '#/components/institute/WhyChooseUs.tsx'
import Testimonials from '#/components/institute/Testimonials.tsx'
import EnrollmentCTA from '#/components/institute/EnrollmentCTA.tsx'
import ImageMarquee from '#/components/ImageMarquee.tsx'
import BookYourStay from '#/components/hotel/BookYourStay.tsx'

export const Route = createFileRoute('/institute')({
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
        <AboutSection />
      </section>
      <section className={'max-w-full'}>
        <CurriculumOverview />
      </section>
      <section className={'max-w-full bg-primary'}>
        <ProgramsComponent />
      </section>
      <section className={'max-w-full'}>
        <WhyChooseUs />
      </section>
      <section className={'max-w-full'}>
        <Testimonials />
      </section>
      <section className={'max-w-full'}>
        <EnrollmentCTA />
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
