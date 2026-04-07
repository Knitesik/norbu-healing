export default function OurServicesNew() {
  return (
    <div className={'text-center lg:text-start lg:grid grid-cols-6'}>
      <div
        className={
          'col-span-2 p-10 space-y-4 grid place-content-center *:text-primary-foreground bg-primary'
        }
      >
        <h2 className={'text-5xl text-primary-foreground leading-17'}>
          Wellness and <br />
          Relaxation
        </h2>
        <p>
          Our wellness programs focus on restoring balance of body, mind, and
          spirit. Guests can enjoy calming treatments, guided relaxation, and
          tranquil spaces designed to release stress and promote inner peace. It
          is an ideal sanctuary for rejuvenation, reflection, and complete
          well-being.
        </p>
      </div>
      <div className={'col-span-2'}>
        <img
          src={
            'https://htj-client.b-cdn.net/norbu-healing/WhatsApp%20Image%202026-03-25%20at%202.04.29%20PM%20(7).jpeg'
          }
          alt={'spa'}
          className={'object-cover h-full'}
        />
      </div>
      <div className={'col-span-2 p-10 space-y-8 [&>div]:space-y-4'}>
        <div>
          <h2>Spa and Massage</h2>
          <p>
            Enjoy relaxing spa and massage treatments that ease tension, reduce
            stress, and refresh the body and mind. A calm setting and caring
            therapists help you unwind and feel renewed.
          </p>
        </div>
        <hr className={'w-full border-border'} />
        <div>
          <h2>Steam and Sauna</h2>
          <p>
            Relax and recharge with our steam and sauna facilities. The gentle
            heat soothes muscles, melts away stress, and leaves you feeling
            refreshed and revitalized.
          </p>
        </div>
      </div>
    </div>
  )
}
