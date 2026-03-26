import { Badge } from '@/components/ui/badge'
import { Card } from '@/components/ui/card'
import { Users, Leaf, Award, Gift } from 'lucide-react'

const stats = [
  {
    icon: Leaf,
    title: 'Natural Products',
    description: 'Pure natural products made from safe healing ingredients.',
  },
  {
    icon: Award,
    title: 'Certified Therapists',
    description:
      'Professionally trained and certified therapists you can trust.',
  },
  {
    icon: Users,
    title: 'Happy Clients',
    description: 'Trusted by many happy clients who love our healing services.',
  },
  {
    icon: Gift,
    title: 'Loyalty Program',
    description:
      'Exclusive loyalty program rewarding our valued returning clients.',
  },
]

export default function OurStory() {
  return (
    <div className="mx-auto max-w-7xl px-4 pt-10">
      <div className="grid items-center gap-8 lg:grid-cols-2">
        <Card className="flex size-full items-center justify-center overflow-hidden p-4 order-last lg:order-first">
          <img
            loading="lazy"
            decoding="async"
            src="https://www.norbuhealing.com/wp-content/uploads/2026/02/Norbu-Healing.jpg"
            alt="Project management illustration"
            className="size-full max-h-full max-w-full rounded object-cover"
          />
        </Card>
        <div>
          <div className="mx-auto mb-12 max-w-2xl text-start space-y-4">
            <Badge>Our Story</Badge>
            <h2 className="my-3">A Journey of Renewal & Balance</h2>
            <p className="text-base text-muted-foreground">
              At Norbu Healing, we are dedicated to guiding you on a journey of
              renewal, balance, and inner harmony. Located in the serene area of
              Changjalu, Olakha, Thimphu, our center combines ancient healing
              traditions with modern wellness practices.
            </p>
            <p>
              We promote physical, emotional, and spiritual well-being for
              locals and visitors alike. Our comprehensive approach ensures that
              every aspect of your wellness journey is addressed with care and
              expertise.
            </p>
          </div>
          <div className="mt-10 grid grid-cols-2 gap-4">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="flex items-start gap-3 p-4 rounded-xl bg-card border border-border"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <stat.icon className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-medium text-sm">{stat.title}</h4>
                  <p className="text-xs text-muted-foreground mt-1">
                    {stat.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* <div className="grid grid-cols-2 gap-6">*/}
        {/*  {[*/}
        {/*    {*/}
        {/*      icon: ClockCheckIcon,*/}
        {/*      iconColor: 'text-red-500',*/}
        {/*      title: '98%',*/}
        {/*      description: 'On-time project delivery rate',*/}
        {/*    },*/}
        {/*    {*/}
        {/*      icon: Users,*/}
        {/*      iconColor: 'text-blue-500',*/}
        {/*      title: '50+',*/}
        {/*      description: 'Team collaboration tools',*/}
        {/*    },*/}
        {/*    {*/}
        {/*      icon: ChartBar,*/}
        {/*      iconColor: 'text-green-500',*/}
        {/*      title: '3x',*/}
        {/*      description: 'Increase in team productivity',*/}
        {/*    },*/}
        {/*    {*/}
        {/*      icon: Target,*/}
        {/*      iconColor: 'text-yellow-500',*/}
        {/*      title: '100%',*/}
        {/*      description: 'Goal achievement accuracy',*/}
        {/*    },*/}
        {/*    {*/}
        {/*      icon: CloudLightningIcon,*/}
        {/*      iconColor: 'text-purple-500',*/}
        {/*      title: '24/7',*/}
        {/*      description: 'Real-time project updates',*/}
        {/*    },*/}
        {/*    {*/}
        {/*      icon: Copy,*/}
        {/*      iconColor: 'text-orange-500',*/}
        {/*      title: '1000+',*/}
        {/*      description: 'Project templates available',*/}
        {/*    },*/}
        {/*  ].map((item, index) => (*/}
        {/*    <Card key={index} className="p-4">*/}
        {/*      <CardContent className="flex flex-col items-center p-4 text-center">*/}
        {/*        <item.icon*/}
        {/*          className={`mb-2 size-8 ${item.iconColor}`}*/}
        {/*          aria-hidden="true"*/}
        {/*        />*/}
        {/*        <h3 className="mb-1 text-2xl font-bold">{item.title}</h3>*/}
        {/*        <p className="text-sm text-muted-foreground">*/}
        {/*          {item.description}*/}
        {/*        </p>*/}
        {/*      </CardContent>*/}
        {/*    </Card>*/}
        {/*  ))}*/}
        {/* </div>*/}
      </div>
    </div>
  )
}
