import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/institute')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/institute"!</div>
}
