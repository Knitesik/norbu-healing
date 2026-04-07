const items = [
  {
    title: 'Skilled Professionals',
    description:
      'Our team of trained stylists and beauty experts bring years of experience and a passion for making you look and feel your best.',
  },
  {
    title: 'Premium Products',
    description:
      'We use only high-quality, professional-grade beauty products that are gentle on your skin and deliver lasting results.',
  },
  {
    title: 'Personalised Service',
    description:
      'Every visit begins with a consultation to understand your preferences, ensuring a tailored experience every time.',
  },
  {
    title: 'Hygiene & Safety',
    description:
      'We maintain the highest standards of cleanliness and hygiene across all our tools, stations, and treatment areas.',
  },
  {
    title: 'Complete Beauty Hub',
    description:
      'From hair to nails to skincare — all your beauty needs addressed under one roof with consistent quality and care.',
  },
  {
    title: 'Relaxing Atmosphere',
    description:
      'Step into a calm, welcoming space designed to help you unwind and enjoy your beauty experience to the fullest.',
  },
]

export default function WhyChooseUs() {
  return (
    <div className={'container mx-auto py-14'}>
      <div className={'grid grid-cols-1 lg:grid-cols-2 gap-6 items-end px-4 lg:px-0'}>
        <div className={'space-y-4'}>
          <p>WHY CHOOSE US</p>
          <h2>The Norbu Salon Difference</h2>
        </div>
        <div className={'lg:w-2/3'}>
          <h5>
            At Norbu Salon & Beauty, we combine skill, premium products, and
            personalised care to deliver an exceptional beauty experience every
            time.
          </h5>
        </div>
      </div>
      <div className={'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-10 gap-10 px-4 lg:px-0'}>
        {items.map((item, index) => (
          <div key={index} className={'border-t border-t-border p-6 space-y-4'}>
            <h2>0{index + 1}</h2>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
