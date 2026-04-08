import { QuoteIcon } from 'lucide-react'

const testimonials = [
  {
    quote:
      'Best haircut I have ever had in Thimphu. The stylist really listened to what I wanted and delivered perfectly.',
    author: 'Tashi Dema',
    role: 'Regular Client',
  },
  {
    quote:
      'My bridal package was absolutely perfect. The team made me feel beautiful and stress-free on my special day.',
    author: 'Pema Lhaden',
    role: 'Bridal Client',
  },
  {
    quote:
      'The facial treatment completely transformed my skin. I have been coming back monthly and the results speak for themselves.',
    author: 'Ugyen Wangmo',
    role: 'Skincare Client',
  },
]

export default function Testimonials() {
  return (
    <div className="bg-muted">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center space-y-4 mb-12">
          <p>CLIENT STORIES</p>
          <h2>What Our Clients Say</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-background p-8 space-y-6 hover:shadow-md transition-shadow"
            >
              <QuoteIcon className="size-8 text-primary/30" />
              <p className="italic leading-relaxed">{testimonial.quote}</p>
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
