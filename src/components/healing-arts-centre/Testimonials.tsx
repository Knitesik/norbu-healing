import { QuoteIcon } from 'lucide-react'

const testimonials = [
  {
    quote:
      'The therapeutic massage was unlike anything I have experienced before. I felt a complete release of tension that lasted for days.',
    author: 'Tshering Dorji',
    role: 'Regular Client',
  },
  {
    quote:
      'The aromatherapy session was deeply relaxing and the therapist was incredibly skilled. I left feeling completely renewed.',
    author: 'Karma Yangzom',
    role: 'Hotel Guest',
  },
  {
    quote:
      'As someone who suffers from chronic back pain, the holistic healing sessions here have been transformative for my quality of life.',
    author: 'Pema Wangchuk',
    role: 'Wellness Member',
  },
]

export default function Testimonials() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="text-center space-y-4 mb-12">
        <p>TESTIMONIALS</p>
        <h2>What Our Clients Say</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="border border-border p-8 space-y-6 hover:border-primary/50 transition-colors"
          >
            <QuoteIcon className="size-8 text-primary/30" />
            <p className="italic">{testimonial.quote}</p>
            <div>
              <p className="font-bold text-sm text-foreground">{testimonial.author}</p>
              <p className="text-sm">{testimonial.role}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
