import { cn } from '#/lib/utils.ts'

const stats = [
  { value: '10+', label: 'Beauty Services' },
  { value: 'Premium', label: 'Products Only' },
  { value: 'Expert', label: 'Trained Stylists' },
  { value: '500+', label: 'Happy Clients' },
]

export default function StatsBar() {
  return (
    <div className={'grid grid-cols-2 lg:grid-cols-4 border border-border'}>
      {stats.map((stat, index) => (
        <div
          key={index}
          className={
            'text-center py-14 lg:even:bg-primary border border-border'
          }
        >
          <h4
            className={cn(
              'text-3xl',
              index % 2 !== 0 && 'lg:text-primary-foreground',
            )}
          >
            {stat.value}
          </h4>
          <p
            className={cn('', index % 2 !== 0 && 'lg:text-primary-foreground')}
          >
            {stat.label}
          </p>
        </div>
      ))}
    </div>
  )
}
