import { Button } from '#/components/ui/button.tsx'

export default function HeroSectionNew() {
  return (
    <div className={'grid lg:grid-cols-2 place-content-center'}>
      <div className={'p-7 lg:p-14'}>
        <div
          className={'grid gap-8 lg:w-2/3 mx-auto text-center lg:text-center'}
        >
          <div>
            <h3 className={'text-4xl font-bold text-primary'}>Norbu</h3>
            <p>Healing Hotel</p>
          </div>
          <div className={'space-y-4'}>
            <p className={'font-bold'}>Changjalu · Olakha · Thimphu · Bhutan</p>
            <h1 className={'leading-20 text-primary font-extrabold!'}>
              Heal. Enhance.
              <br />
              Evolve.
            </h1>
          </div>
          <p>
            A complete destination for wellness, beauty, hospitality &
            professional training — all under one roof in the heart of Thimphu.
          </p>
          <span className={'inline-flex gap-4 space-x-4 mx-auto'}>
            <Button className={'w-fit mx-auto lg:mx-0'}>
              Explore Our Rooms
            </Button>
            <Button variant={'outline'} className={'w-fit mx-auto lg:mx-0'}>
              View Our Services
            </Button>
          </span>
        </div>
      </div>
      <div className={'bg-muted relative'}>
        <img
          src="https://htj-client.b-cdn.net/norbu-healing/WhatsApp%20Image%202026-03-25%20at%202.04.29%20PM%20(2).jpeg"
          alt="counter"
          className={'object-cover object-left h-100 lg:h-full'}
        />
      </div>
    </div>
  )
}
