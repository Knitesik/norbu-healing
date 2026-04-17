export default function RoomTypes() {
  return (
    <div
      className={
        'grid grid-cols-1 lg:grid-cols-[1fr_5fr_5fr] bg-primary *:p-6 md:*:p-10'
      }
    >
      <div>
        <h2 className={'text-primary-foreground'}>Room Types</h2>
      </div>
      <div className={'bg-background text-primary space-y-4'}>
        <img
          src="https://htj-client.b-cdn.net/norbu-healing/WhatsApp%20Image%202026-03-25%20at%202.04.30%20PM%20(1).jpeg"
          alt="room type"
          className={'w-full h-60 md:h-100 bg-muted object-cover'}
        />
        <h3 className={'font-bold'}>Deluxe Couple Room</h3>
        <p className={'text-primary'}>
          Designed for refined comfort, the Deluxe Couple Room features elegant
          interiors, premium bedding, and modern conveniences. Its warm and
          inviting ambiance creates the perfect retreat for couples, ensuring
          relaxation and a peaceful night's sleep.
        </p>
      </div>
      <div className={'bg-background text-primary space-y-4'}>
        <img
          src="https://htj-client.b-cdn.net/norbu-healing/WhatsApp%20Image%202026-03-25%20at%202.04.30%20PM%20(2).jpeg"
          alt="room type"
          className={'w-full h-60 md:h-100 bg-muted object-cover object-left'}
        />
        <h3 className={'font-bold'}>Deluxe Twin Room</h3>
        <p className={'text-primary'}>
          Thoughtfully designed for refined comfort, the Deluxe Twin Room offers
          stylish interiors, twin premium beds, and modern conveniences. The
          calm and welcoming atmosphere makes it ideal for friends or family
          members sharing, providing both comfort and restful sleep.
        </p>
      </div>
    </div>
  )
}
