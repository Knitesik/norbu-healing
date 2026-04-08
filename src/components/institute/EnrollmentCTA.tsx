import { buttonVariants } from '#/components/ui/button.tsx'
import { Link } from '@tanstack/react-router'
import {
  CalendarIcon,
  ClockIcon,
  GraduationCapIcon,
  UsersIcon,
} from 'lucide-react'

const highlights = [
  {
    Icon: CalendarIcon,
    title: 'Flexible Schedules',
    description: 'Full-time and part-time options to fit your life',
  },
  {
    Icon: ClockIcon,
    title: 'Next Batch Starting Soon',
    description: 'New intake every quarter — limited seats available',
  },
  {
    Icon: GraduationCapIcon,
    title: 'Certified Programmes',
    description: 'Industry-recognised certification upon completion',
  },
  {
    Icon: UsersIcon,
    title: 'Small Batch Sizes',
    description: 'Personalised attention with a maximum of 15 students',
  },
]

export default function EnrollmentCTA() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2">
      <div className="bg-primary p-8 md:p-14 flex flex-col justify-center space-y-8">
        <div className="space-y-4">
          <p className="text-primary-foreground/70 uppercase tracking-wider text-sm">
            Start Your Journey
          </p>
          <h2 className="text-primary-foreground text-3xl lg:text-5xl leading-tight">
            Ready to Build <br />
            Your Career?
          </h2>
          <p className="text-primary-foreground/80 max-w-md">
            Take the first step towards a fulfilling career in wellness, beauty,
            or hospitality. Our admissions team is ready to guide you through
            the enrollment process.
          </p>
        </div>
      </div>
      <div className="p-8 md:p-14 grid grid-cols-1 sm:grid-cols-2 gap-6 text-center lg:text-start">
        {highlights.map((item, index) => (
          <div key={index} className="space-y-3">
            <div className="rounded-full bg-primary/10 p-3 w-fit mx-auto lg:mx-0">
              <item.Icon className="size-5 text-primary" />
            </div>
            <h3 className="font-bold text-lg">{item.title}</h3>
            <p className="text-sm">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
