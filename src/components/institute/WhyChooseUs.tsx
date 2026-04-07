const items = [
  {
    title: 'Industry-Aligned Curriculum',
    description:
      'Our courses are designed in consultation with industry professionals, ensuring students learn skills that are in demand in today\'s market.',
  },
  {
    title: 'Hands-On Training',
    description:
      'Practical, real-world training forms the core of our programmes — students learn by doing, not just reading.',
  },
  {
    title: 'Certified Programmes',
    description:
      'All courses lead to recognised certifications that open doors to employment opportunities across the wellness and beauty industry.',
  },
  {
    title: 'Expert Instructors',
    description:
      'Learn from experienced practitioners and industry leaders who bring real-world insights and mentorship to the classroom.',
  },
  {
    title: 'Career Support',
    description:
      'From resume building to job placement assistance, we support our graduates in launching successful careers after training.',
  },
  {
    title: 'Integrated Ecosystem',
    description:
      'Students benefit from direct exposure to Norbu\'s hotel, salon, and healing centre — gaining practical experience across multiple disciplines.',
  },
]

export default function WhyChooseUs() {
  return (
    <div className={'container mx-auto py-14'}>
      <div className={'grid grid-cols-1 lg:grid-cols-2 gap-6 items-end px-4 lg:px-0'}>
        <div className={'space-y-4'}>
          <p>WHY TRAIN WITH US</p>
          <h2>The Norbu Institute Advantage</h2>
        </div>
        <div className={'lg:w-2/3'}>
          <h5>
            Norbu Institute offers more than education — we provide a launchpad
            for meaningful careers in wellness, beauty, and hospitality.
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
