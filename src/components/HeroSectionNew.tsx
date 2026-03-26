import { Button } from '#/components/ui/button.tsx'

export default function HeroSectionNew() {
  return (
    <div className={'grid lg:grid-cols-2 place-content-center'}>
      <div className={'p-14'}>
        <div className={'grid gap-8 lg:w-2/3 text-center lg:text-start'}>
          <div>
            <h3 className={'text-4xl font-bold text-primary'}>Norbu</h3>
            <p>Healing Hotel</p>
          </div>
          <div className={'space-y-4'}>
            <p className={'font-bold'}>WELCOME TO</p>
            <h1 className={'leading-20 text-primary font-extrabold! lg:italic'}>
              NORBU
              <br />
              HEALING
              <br />
              HOTEL
            </h1>
          </div>
          <p>
            Discover a luxurious escape in the heart of the city, where
            impeccable service, refined style, and world-class amenities come
            together to create an extraordinary stay.
          </p>
          <Button className={'w-fit mx-auto lg:mx-0'}>Book Now</Button>
        </div>
      </div>
      <div className={'bg-muted relative'}>
        <img
          src="https://htj-client.b-cdn.net/norbu-healing/WhatsApp%20Image%202026-03-25%20at%202.04.29%20PM%20(2).jpeg"
          alt="counter"
          className={'object-cover object-left h-100 md:h-full'}
        />
      </div>
    </div>
  )
}
