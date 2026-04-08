export default function AboutSection() {
  return (
    <div className={'grid lg:grid-cols-2'}>
      <div className={'bg-muted order-last lg:order-first'}>
        <img
          src={
            'https://htj-client.b-cdn.net/norbu-healing/WhatsApp%20Image%202026-03-28%20at%202.56.20%20PM%20(3).jpeg'
          }
          alt={'about the institute'}
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
          <h2 className={'text-primary'}>About the Institute</h2>
          <p>
            Norbu Institute of Wellness & Beauty is dedicated to building the
            next generation of wellness and beauty professionals. Through
            industry-aligned curricula, hands-on training, and mentorship from
            experienced practitioners, we prepare students for successful
            careers in the growing wellness and beauty industry.
          </p>
        </div>
      </div>
    </div>
  )
}
