import { StarIcon } from 'lucide-react'

const testimonials = [
  {
    quote:
      'The rooms were immaculate and the staff went above and beyond. A truly peaceful retreat in the heart of Thimphu.',
    author: 'James Mitchell',
    role: 'Business Traveller',
    stars: 5,
  },
  {
    quote:
      'We loved the blend of traditional charm and modern comfort. The restaurant served some of the best food we had in Bhutan.',
    author: 'Rinzin Lhamo',
    role: 'Couple from Punakha',
    stars: 5,
  },
  {
    quote:
      'Perfect location, wonderful staff, and the wellness facilities were a bonus. Will definitely return on my next visit to Thimphu.',
    author: 'Tandin Dorji',
    role: 'Leisure Traveller',
    stars: 5,
  },
]

export default function Testimonials() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="text-center space-y-4 mb-12">
        <p>GUEST REVIEWS</p>
        <h2>What Our Guests Say</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="border border-border p-8 space-y-4 hover:border-primary/50 transition-colors"
          >
            <div className="flex gap-1">
              {Array.from({ length: testimonial.stars }).map((_, i) => (
                <StarIcon
                  key={i}
                  className="size-4 fill-yellow-500 text-yellow-500"
                />
              ))}
            </div>
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
  )
}
