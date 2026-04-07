const items = [
  {
    step: '01',
    title: 'Arrival & Welcome',
    label:
      'Greeted in our serene reception with a warming herbal welcome drink and a brief introduction to our healing philosophy.',
  },
  {
    step: '02',
    title: 'Consultation',
    label:
      'A brief session with your therapist to understand your needs, health background, and personalise your treatment plan.',
  },
  {
    step: '03',
    title: 'Your Treatment',
    label:
      'Immerse in a private, calm treatment room with skilled, caring healing hands using natural, premium products.',
  },
  {
    step: '04',
    title: 'Rest & Restore',
    label:
      'Spend time in our post-treatment relaxation space with herbal tea to prolong the healing effect and ease back into your day.',
  },
]

export default function JourneyComponent() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="text-center space-y-4 mb-16">
        <p>Your Journey</p>
        <h2>What to Expect</h2>
        <p className="max-w-2xl mx-auto">
          From the moment you arrive, every detail is designed to create a
          seamless and deeply restorative experience.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {items.map((item, index) => (
          <div key={index} className="relative">
            <div className="space-y-4">
              <div className="text-6xl font-bold text-primary/20">
                {item.step}
              </div>
              <h3 className="font-bold">{item.title}</h3>
              <p>{item.label}</p>
            </div>
            {index < items.length - 1 && (
              <div className="hidden lg:block absolute top-8 right-0 translate-x-1/2 w-8 h-px bg-border" />
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
