import { cn } from '#/lib/utils.ts'

const stats = [
  { value: '8+', label: 'Treatment Types' },
  { value: 'Natural', label: 'Products Only' },
  { value: 'Private', label: 'Treatment Rooms' },
  { value: 'Expert', label: 'Trained Therapists' },
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
