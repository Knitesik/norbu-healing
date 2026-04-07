import { createFileRoute } from '@tanstack/react-router'
import HeroSection from '#/components/healing-arts-centre/HeroSection.tsx'
import StatsBar from '#/components/healing-arts-centre/StatsBar.tsx'
import OurApproach from '#/components/healing-arts-centre/OurApproach.tsx'
import TreatmentComponent from '#/components/healing-arts-centre/TreatmentComponent.tsx'

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
    </main>
  )
}
