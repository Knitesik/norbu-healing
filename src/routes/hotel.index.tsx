import { createFileRoute } from '@tanstack/react-router'
import HeroSectionNew from '#/components/hotel/HeroSectionNew.tsx'
import AboutUs from '#/components/hotel/AboutUs.tsx'
import WhyChooseUsNew from '#/components/hotel/WhyChooseUsNew.tsx'
import RoomTypes from '#/components/hotel/RoomTypes.tsx'
import HotelFeatures from '#/components/hotel/HotelFeatures.tsx'
import HotelDining from '#/components/hotel/HotelDining.tsx'
import DiningMenu from '#/components/hotel/DiningMenu.tsx'
import Testimonials from '#/components/hotel/Testimonials.tsx'
import ImageMarquee from '#/components/ImageMarquee.tsx'
import OurServicesNew from '#/components/hotel/OurServicesNew.tsx'
import BookYourStay from '#/components/hotel/BookYourStay.tsx'

export const Route = createFileRoute('/hotel/')({
  component: RouteComponent,
  head: () => ({
    meta: [{ title: 'Norbu Healing Hotel' }],
  }),
})

function RouteComponent() {
  return (
    <main className="page-wrap pt-14">
      <section className={'max-w-full'}>
        <HeroSectionNew />
      </section>
      <section className={'max-w-full'}>
        <AboutUs />
      </section>
      <section className={'max-w-full'}>
        <WhyChooseUsNew />
      </section>
      <section className={'max-w-full'}>
        <RoomTypes />
      </section>
      <section className={'linedBackground max-w-full'}>
        <HotelFeatures />
      </section>
      <section className={'max-w-full!'}>
        <HotelDining />
      </section>
      <section className={'max-w-full'}>
        <DiningMenu />
      </section>
      <section className={'max-w-full'}>
        <OurServicesNew />
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
