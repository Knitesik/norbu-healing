import {
  BrainIcon,
  CloudIcon,
  HeartIcon,
} from 'lucide-react'
import { Badge } from '#/components/ui/badge.tsx'

export default function WhyChooseUs() {
  return (
    <div className="mx-auto max-w-7xl grid gap-7 px-4 py-12">
      <Badge className={'mx-auto'}>Why Choose Us</Badge>
      <div>
        <h2 className="text-center">Building Physical and Mental Health</h2>
        <p className={'text-center max-w-lg mx-auto mt-4'}>
          Our holistic approach addresses your complete well-being, helping you
          achieve balance in mind, body, and spirit.
        </p>
      </div>
      <div className="grid grid-cols-1 mt-10 gap-8 md:grid-cols-3">
        <div className="flex items-start gap-4 border border-muted hover:border-border transition-colors p-6">
          <div className="rounded-full bg-pink-600/10 p-3">
            <HeartIcon className="size-5 text-pink-600" />
          </div>
          <div className="space-y-1">
            <h3 className="text-base font-semibold">Helps to Relieve Stress</h3>
            <p className="text-sm text-muted-foreground">
              Calm the mind, and restore natural balance to your body and
              emotions through our therapeutic treatments.
            </p>
          </div>
        </div>
        <div className="flex items-start gap-4 border border-muted hover:border-border transition-colors p-6">
          <div className="rounded-full bg-sky-600/10 p-3">
            <CloudIcon className="size-5 text-sky-600" />
          </div>
          <div className="space-y-1">
            <h3 className="text-base font-semibold">Enhances Sleep</h3>
            <p className="text-sm text-muted-foreground">
              Relax the nervous system and promote deep, natural rest for
              rejuvenating sleep and renewed energy.
            </p>
          </div>
        </div>
        <div className="flex items-start gap-4 border border-muted hover:border-border transition-colors p-6">
          <div className="rounded-full bg-emerald-600/10 p-3">
            <BrainIcon className="size-5 text-emerald-600" />
          </div>
          <div className="space-y-1">
            <h3 className="text-base font-semibold">
              Releases Serotonin & Dopamine
            </h3>
            <p className="text-sm text-muted-foreground">
              Boost your mood and create a natural sense of happiness and
              well-being through holistic healing.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
