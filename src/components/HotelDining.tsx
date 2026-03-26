export default function HotelDining() {
  return (
    <div className={'grid lg:grid-cols-2'}>
      <div className={'bg-muted'}>
        <img
          src={
            'https://htj-client.b-cdn.net/norbu-healing/WhatsApp%20Image%202026-03-25%20at%202.04.29%20PM%20(5).jpeg'
          }
          alt={'dining room'}
          className={'w-full lg:h-150 object-cover'}
        />
      </div>
      <div
        className={
          'bg-primary p-14 flex flex-col justify-center space-y-4 text-center lg:text-start xl:*:w-2/3'
        }
      >
        <h2 className={'text-5xl text-primary-foreground leading-17'}>
          Dining at Norbu Healing Restaurant
        </h2>
        <p className={'text-primary-foreground'}>
          Offering a serene dining experience that blends nourishment and
          relaxation. Thoughtfully prepared dishes, warm interiors, and
          attentive service create a calming atmosphere where guests can unwind
          and enjoy wholesome, flavorful cuisine.
        </p>
      </div>
    </div>
  )
}
