import { cn } from '#/lib/utils.ts'

const stats = [
  { number: '4+', label: 'Services Under One Roof' },
  { number: '100+', label: 'Clients Served Monthly' },
  { number: '10+', label: 'Professional Practitioners' },
  { number: '2+', label: 'Years of Excellence' },
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
              'text-5xl',
              index % 2 !== 0 && 'lg:text-primary-foreground',
            )}
          >
            {stat.number}
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
