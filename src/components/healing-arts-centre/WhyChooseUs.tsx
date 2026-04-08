const items = [
  {
    title: 'Authentic Techniques',
    description:
      'Our therapists are trained in traditional Bhutanese healing practices passed down through generations, combined with modern therapeutic science.',
  },
  {
    title: 'Natural Products Only',
    description:
      'Every treatment uses carefully selected natural, professional-grade products — free from harsh chemicals and gentle on your body.',
  },
  {
    title: 'Private Treatment Rooms',
    description:
      'Each session takes place in a serene, private room designed to maximise your comfort and allow complete immersion in the healing process.',
  },
  {
    title: 'Tailored Treatments',
    description:
      'No two bodies are alike. Every session begins with a consultation to understand your needs and customise your treatment accordingly.',
  },
  {
    title: 'Post-Treatment Care',
    description:
      'Our care extends beyond the session — with guidance on how to maintain the benefits of your treatment at home.',
  },
  {
    title: 'Calm Environment',
    description:
      'From the soothing reception area to the treatment rooms, every space is designed to help you disconnect and fully relax.',
  },
]

export default function WhyChooseUs() {
  return (
    <div className={'container mx-auto py-14'}>
      <div className={'grid grid-cols-1 lg:grid-cols-2 gap-6 items-end px-4 lg:px-0'}>
        <div className={'space-y-4'}>
          <p>WHY CHOOSE US</p>
          <h2>The Healing Arts Difference</h2>
        </div>
        <div className={'lg:w-2/3'}>
          <h5>
            Every aspect of our healing centre is designed to provide a deeply
            restorative experience — from the products we use to the care we
            deliver.
          </h5>
        </div>
      </div>
      <div className={'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-10 gap-10 px-4 lg:px-0'}>
        {items.map((item, index) => (
          <div key={index} className={'border-t border-t-border p-6 space-y-4'}>
            <span className={'text-4xl font-bold tracking-tight block'}>0{index + 1}</span>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
