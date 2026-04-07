import { QuoteIcon } from 'lucide-react'

const testimonials = [
  {
    quote:
      'The hands-on training was incredible. Within six months, I had the skills and confidence to start working at a professional salon.',
    author: 'Kinley Tshering',
    role: 'Beauty & Cosmetology Graduate',
  },
  {
    quote:
      'The instructors are real practitioners who share practical insights you cannot learn from textbooks. Truly career-changing.',
    author: 'Sonam Choden',
    role: 'Wellness Therapy Graduate',
  },
  {
    quote:
      'The career support after graduation made all the difference. I was placed in a hospitality role within two weeks of completing the programme.',
    author: 'Dorji Wangchuk',
    role: 'Hospitality Programme Graduate',
  },
]

export default function Testimonials() {
  return (
    <div className="bg-muted">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center space-y-4 mb-12">
          <p>STUDENT STORIES</p>
          <h2>Hear from Our Graduates</h2>
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
