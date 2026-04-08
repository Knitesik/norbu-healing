export default function AboutUs() {
  return (
    <div className={'grid lg:grid-cols-2'}>
      <div className={'bg-muted order-last lg:order-first'}>
        <img
          src={
            'https://htj-client.b-cdn.net/norbu-healing/WhatsApp%20Image%202026-03-25%20at%202.04.30%20PM%20(3).jpeg'
          }
          alt={'about us'}
          className={'w-full lg:h-150 object-cover object-bottom'}
        />
      </div>

      <div
        className={
          'bg-primary p-7 lg:p-14 flex flex-col items-center justify-center'
        }
      >
        <div
          className={
            'bg-background w-fit p-10 max-w-lg space-y-4 text-center lg:text-start'
          }
        >
          <h2 className={'text-primary'}>About Us</h2>
          <p>
            Norbu Healing Hotel is a peaceful retreat designed to offer comfort,
            relaxation, and authentic hospitality. Nestled in a serene
            environment, the hotel blends modern convenience with traditional
            charm, making it an ideal choice for leisure travelers, wellness
            seekers, and business guests alike. Our dedicated team ensures
            personalized service, warm hospitality, and a memorable stay for
            every guest.
          </p>
        </div>
      </div>
    </div>
  )
}
