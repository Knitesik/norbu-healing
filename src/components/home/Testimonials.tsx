import { QuoteIcon } from 'lucide-react'

const testimonials = [
  {
    quote:
      'Norbu is more than a hotel — it is a complete experience. From the healing treatments to the dining, everything was thoughtfully curated.',
    author: 'Sonam Pelden',
    role: 'Repeat Guest from Paro',
  },
  {
    quote:
      'I came for a salon appointment and ended up booking a spa session and dinner. The quality across all their services is remarkably consistent.',
    author: 'Dechen Wangmo',
    role: 'Local Client',
  },
  {
    quote:
      'The training institute gave me the skills and confidence to start my own beauty practice. I am forever grateful to the Norbu team.',
    author: 'Kinley Tshering',
    role: 'Institute Graduate',
  },
]

export default function Testimonials() {
  return (
    <div className="bg-muted">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center space-y-4 mb-12">
          <p>WHAT PEOPLE SAY</p>
          <h2>Voices from Our Community</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-background p-8 space-y-6 hover:shadow-md transition-shadow"
            >
              <QuoteIcon className="size-8 text-primary/30" />
              <p className="italic leading-relaxed">
                {testimonial.quote}
              </p>
              <div className="pt-4 border-t border-border">
                <p className="font-bold text-sm text-foreground">
                  {testimonial.author}
                </p>
                <p className="text-sm">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
