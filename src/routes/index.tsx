import { createFileRoute } from '@tanstack/react-router'
import HeroSectionNew from '#/components/HeroSectionNew.tsx'
import AboutUs from '#/components/AboutUs.tsx'
import WhyChooseUsNew from '#/components/WhyChooseUsNew.tsx'
import RoomTypes from '#/components/RoomTypes.tsx'
import HotelFeatures from '#/components/HotelFeatures.tsx'
import HotelDining from '#/components/HotelDining.tsx'
import ImageMarquee from '#/components/ImageMarquee.tsx'
import OurServicesNew from '#/components/OurServicesNew.tsx'
import BookYourStay from '#/components/BookYourStay.tsx'

export const Route = createFileRoute('/')({
  head: () => ({
    meta: [
      {
        title: 'Norbu Healing Hotel',
      },
    ],
  }),
  component: App,
})

function App() {
  return (
    <main className="page-wrap">
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
        <ImageMarquee />
      </section>
      <section className={'max-w-full'}>
        <OurServicesNew />
      </section>
      <section className={'max-w-full'}>
        <BookYourStay />
      </section>
    </main>
  )
}
