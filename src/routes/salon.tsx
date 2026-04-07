import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/salon')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/salon"!</div>
}
