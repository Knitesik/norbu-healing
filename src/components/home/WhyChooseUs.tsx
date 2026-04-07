const items = [
  {
    title: 'Integrated Ecosystem',

    description:
      'All services under one trusted brand — wellness, beauty, hospitality, and training work seamlessly together for your complete transformation.',
  },
  {
    title: 'Traditional Meets Modern',

    description:
      'We bridge ancient Bhutanese healing wisdom with contemporary techniques for treatments that are both authentically rooted and professionally advanced.',
  },
  {
    title: 'Expert Staff',

    description:
      'Professionally trained practitioners dedicated to delivering exceptional results and personalised care with every visit.',
  },
  {
    title: 'Personal & Career Growth',

    description:
      'Unique in offering both personal care services and certified professional training — a complete lifecycle of wellness and development.',
  },
  {
    title: 'Customer-First Approach',

    description:
      'Every decision is made with client satisfaction and measurable results in mind, from individual treatments to long-term outcomes.',
  },
  {
    title: 'Prime Location',

    description:
      'Conveniently located in Changjalu, Olakha — the heart of Thimphu, easily accessible for clients, guests, and students.',
  },
]

export default function WhyChooseUs() {
  return (
    <div className={'container mx-auto py-14'}>
      <div className={'grid grid-cols-2 items-end'}>
        <div className={'space-y-4'}>
          <p>WHY CHOOSE US</p>
          <h2>The Norbu Difference</h2>
        </div>
        <div className={'w-2/3'}>
          <h5>
            Choosing Norbu means choosing a brand that values quality,
            consistency, and care across all services — from the smallest detail
            to the complete guest experience.
          </h5>
        </div>
      </div>
      <div className={'grid grid-cols-3 mt-10 gap-10 '}>
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
