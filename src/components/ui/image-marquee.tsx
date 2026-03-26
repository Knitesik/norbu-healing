import type React from 'react'

export interface LogoMarqueeProps {
  images: string[]
  speed?: 'slow' | 'normal' | 'fast'
  direction?: 'left' | 'right'
  pauseOnHover?: boolean
}

const SPEED_MAP = {
  slow: '60s',
  normal: '40s',
  fast: '20s',
}

export default function Marquee({
  images = [],
  speed = 'normal',
  direction = 'left',
  pauseOnHover = true,
}: LogoMarqueeProps) {
  const animationDuration = SPEED_MAP[speed]
  const animationDirection = direction === 'right' ? 'reverse' : 'normal'

  return (
    <div className="overflow-hidden">
      <style>
        {`
          @keyframes marquee-scroll {
            from {
              transform: translateX(0);
            }
            to {
              transform: translateX(-50%);
            }
          }

          .marquee-track {
            animation: marquee-scroll var(--marquee-duration, 40s) linear infinite;
            animation-direction: var(--marquee-direction, normal);
          }

          .marquee-container:hover .marquee-track {
            animation-play-state: var(--marquee-pause-on-hover, running);
          }

          @media (prefers-reduced-motion: reduce) {
            .marquee-track {
              animation: none;
            }
          }
        `}
      </style>
      <div className="">
        <div
          className="marquee-container relative overflow-hidden"
          style={{
            maskImage:
              'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
            WebkitMaskImage:
              'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
          }}
        >
          <div
            className="marquee-track flex w-max"
            style={
              {
                '--marquee-duration': animationDuration,
                '--marquee-direction': animationDirection,
                '--marquee-pause-on-hover': pauseOnHover ? 'paused' : 'running',
              } as React.CSSProperties
            }
          >
            {/* First set of logos */}
            {images.map((image, index) => (
              <div
                className="flex shrink-0 items-center justify-center px-1 opacity-90 transition-opacity duration-200 *:fill-foreground hover:opacity-100"
                key={`first-${index}`}
              >
                <img src={image} alt={'marquee'} className={'h-75'} />
              </div>
            ))}
            {/* Second set of logos for seamless loop */}
            {images.map((image, index) => (
              <div
                className="flex shrink-0 items-center justify-center px-1 opacity-90 transition-opacity duration-200 *:fill-foreground hover:opacity-100"
                key={`second-${index}`}
              >
                <img src={image} alt={'marquee'} className={'h-75'} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
