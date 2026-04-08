import { QuoteIcon } from 'lucide-react'

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '#/components/ui/carousel.tsx'
import { useIsClient } from '#/hooks/use-is-client.ts'

export default function Testimonial() {
  const isClient = useIsClient()

  if (!isClient) {
    return
  }

  return (
    <div className="flex w-full items-center justify-center p-6 md:pt-14">
      <div className="w-full max-w-sm md:max-w-3xl">
        <div
        // title="Testimonial Highlight"
        // subtitle="What our customers are saying"
        >
          <div className={'text-center space-y-2'}>
            <h2>Testimonial Highlight</h2>
            <p>What our customers are saying</p>
          </div>
          <Carousel>
            <div className="relative mx-auto max-w-2xl">
              <CarouselContent>
                {Array.from({ length: 7 }).map((_, index) => (
                  <CarouselItem key={index}>
                    <div className="p-2 pb-5">
                      <div className="text-center">
                        <QuoteIcon className=" mx-auto my-4 text-4xl" />
                        <h4 className="text-xl mx-auto max-w-lg px-10 font-semibold">
                          {getTestimonialQuote(index)}
                        </h4>
                        <div>
                          <h4 className="text-xl my-2 font-semibold">
                            {getTestimonialName(index)}
                          </h4>
                        </div>
                        <div className="mb-3">
                          <span className="text-themeDarkGray text-sm">
                            {getTestimonialRole(index)}
                          </span>
                        </div>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </div>
            <div className="hidden md:block">
              <CarouselPrevious />
              <CarouselNext />
            </div>
          </Carousel>
        </div>
      </div>
    </div>
  )
}

function getTestimonialQuote(index: number): string {
  const quotes = [
    "eldora ui has revolutionized our security testing process. We're now able to identify and address vulnerabilities faster than ever before.",
    "With eldora ui, we've significantly improved our security posture. It's like having an AI-powered ethical hacker working around the clock.",
    "The AI-driven insights from eldora ui have transformed how we approach cybersecurity. It's a game-changer for our platform's security.",
    "eldora ui's automated penetration testing has saved us countless hours and dramatically enhanced our security measures.",
    "Implementing eldora ui was seamless, and the results were immediate. We're now proactively addressing potential security issues before they become threats.",
    "The continuous monitoring capabilities of eldora ui give us peace of mind. We're always one step ahead in protecting our users' data.",
    "eldora ui's compliance mapping feature has streamlined our security audit processes. It's an essential tool for maintaining trust with our users.",
  ]
  return quotes[index % quotes.length]
}

function getTestimonialName(index: number): string {
  const names = [
    'Alex Rivera',
    'Samantha Lee',
    'Raj Patel',
    'Emily Chen',
    'Michael Brown',
    'Linda Wu',
    'Carlos Gomez',
  ]
  return names[index % names.length]
}

function getTestimonialRole(index: number): string {
  const roles = [
    'Head of Cybersecurity',
    'Chief Information Security Officer',
    'VP of Engineering',
    'Security Operations Manager',
    'Director of IT Security',
    'Lead Security Architect',
    'Chief Technology Officer',
  ]
  return roles[index % roles.length]
}
