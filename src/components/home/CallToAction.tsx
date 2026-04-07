import { Button } from '#/components/ui/button.tsx'
import { Link } from '@tanstack/react-router'

export default function CallToAction() {
  return (
    <div className="bg-primary">
      <div className="container mx-auto px-4 py-20 text-center space-y-8">
        <h2 className="text-primary-foreground text-3xl lg:text-5xl leading-tight">
          Your Journey to Wellness <br />Starts Here
        </h2>
        <p className="text-primary-foreground/80 max-w-2xl mx-auto">
          Whether you seek relaxation, beauty, comfort, or career growth —
          Norbu offers a complete experience tailored to your needs. Visit us
          in the heart of Thimphu and discover the difference.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link to="/hotel">
            <Button variant="secondary" size="lg">
              Book a Room
            </Button>
          </Link>
          <Link to="/healing-arts-centre">
            <Button
              variant="outline"
              size="lg"
              className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10"
            >
              Book a Treatment
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
