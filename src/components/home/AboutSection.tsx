export default function AboutSection() {
  return (
    <div className={'grid lg:grid-cols-2 place-content-center'}>
      <div className={'bg-muted relative'}>
        <img
          src="https://htj-client.b-cdn.net/norbu-healing/WhatsApp%20Image%202026-03-25%20at%202.04.29%20PM%20(2).jpeg"
          alt="counter"
          className={'object-cover object-left h-100 lg:h-full'}
        />
      </div>
      <div className={'p-7 lg:p-14 bg-primary'}>
        <div
          className={
            'grid gap-4 mx-auto text-center text-primary bg-muted w-[90%] p-8'
          }
        >
          <div className={'space-y-4'}>
            <h2 className={'font-bold text-3xl lg:text-5xl'}>
              Where Ancient Wisdom <br /> Meets Modern Care
            </h2>
          </div>
          <p className={'text-primary'}>
            Norbu is a multi-service lifestyle brand built on the foundation of
            holistic well-being, professional excellence, and quality service.
            Located in the heart of Thimphu, we integrate four distinct yet
            interconnected businesses.
            <br />
            <br />
            Our approach combines traditional healing wisdom with modern
            techniques, ensuring that every service meets both professional
            standards and personal care expectations.
          </p>
          <ul className={'list-disc  *:mx-auto *:w-fit *:pb-2'}>
            {[
              'Integrated services under one trusted brand',
              'Professionally trained and experienced staff',
              'Combination of traditional and modern practices',
              'Convenient central location in Thimphu',
            ].map((text, index) => (
              <li key={index}>{text}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}
