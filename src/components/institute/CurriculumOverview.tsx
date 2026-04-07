import { BookOpenIcon, BriefcaseIcon, AwardIcon, UsersIcon } from 'lucide-react'

const phases = [
  {
    Icon: BookOpenIcon,
    phase: 'Phase 1',
    title: 'Foundation & Theory',
    duration: 'Weeks 1–4',
    description:
      'Core theoretical knowledge covering anatomy, product chemistry, client consultation techniques, and industry standards.',
  },
  {
    Icon: UsersIcon,
    phase: 'Phase 2',
    title: 'Hands-On Practice',
    duration: 'Weeks 5–12',
    description:
      'Supervised practical training with real clients in our salon, healing centre, and hotel — building confidence and skill.',
  },
  {
    Icon: BriefcaseIcon,
    phase: 'Phase 3',
    title: 'Specialisation',
    duration: 'Weeks 13–16',
    description:
      'Choose your area of focus and develop advanced skills through intensive workshops and mentored practice.',
  },
  {
    Icon: AwardIcon,
    phase: 'Phase 4',
    title: 'Certification & Placement',
    duration: 'Weeks 17–20',
    description:
      'Final assessments, portfolio development, certification, and career support including job placement assistance.',
  },
]

export default function CurriculumOverview() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="text-center space-y-4 mb-16">
        <p>HOW IT WORKS</p>
        <h2>Your Learning Journey</h2>
        <p className="max-w-2xl mx-auto">
          Our structured programmes take you from foundational knowledge to
          professional certification in a supportive, hands-on environment.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {phases.map((phase, index) => (
          <div key={index} className="relative">
            <div className="space-y-4">
              <div className="rounded-full bg-primary/10 p-4 w-fit">
                <phase.Icon className="size-6 text-primary" />
              </div>
              <div>
                <p className="text-sm font-bold uppercase tracking-wider text-primary">
                  {phase.phase}
                </p>
                <h3 className="font-bold text-lg mt-1">{phase.title}</h3>
                <p className="text-sm text-muted-foreground mt-1">{phase.duration}</p>
              </div>
              <p className="text-sm">{phase.description}</p>
            </div>
            {index < phases.length - 1 && (
              <div className="hidden lg:block absolute top-8 right-0 translate-x-1/2 w-8 h-px bg-border" />
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
