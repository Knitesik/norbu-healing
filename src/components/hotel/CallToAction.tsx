import { buttonVariants } from '#/components/ui/button.tsx'
import { Link } from '@tanstack/react-router'
import { Bookmark } from 'lucide-react'

export default function CallToAction() {
  return (
    <div className="text-center flex-col items-center space-y-6 bg-muted py-8 w-full">
      <div className="rounded-full mx-auto border botext-foreground bg-muted w-fit p-2">
        <Bookmark className="size-5 stroke-2 text-foreground" />
      </div>
      <div className="space-y-2">
        <h2>
          Join over 4,000 bookmarkers.
        </h2>
        <p className="text-balance text-base text-muted-foreground">
          Sign up to bookmark your favorite links and access them from any
          device.
        </p>
      </div>
      <div className="flex items-center justify-center gap-2">
        <Link
          to="/hotel"
          className={buttonVariants({ variant: 'outline' })}
        >
          View Features
        </Link>
        <Link
          to="/hotel"
          className={buttonVariants()}
        >
          Sign Up
        </Link>
      </div>
    </div>
  )
}
