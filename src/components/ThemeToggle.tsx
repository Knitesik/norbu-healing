import { useEffect, useState } from 'react'
import { MoonIcon, SunIcon, SunMoonIcon } from 'lucide-react'
import { Button } from '#/components/ui/button.tsx'

type ThemeMode = 'light' | 'dark' | 'auto'

function getInitialMode(): ThemeMode {
  if (typeof window === 'undefined') {
    return 'auto'
  }

  const stored = window.localStorage.getItem('theme')
  if (stored === 'light' || stored === 'dark' || stored === 'auto') {
    return stored
  }

  return 'auto'
}

function applyThemeMode(mode: ThemeMode) {
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
  const resolved = mode === 'auto' ? (prefersDark ? 'dark' : 'light') : mode

  document.documentElement.classList.remove('light', 'dark')
  document.documentElement.classList.add(resolved)

  if (mode === 'auto') {
    document.documentElement.removeAttribute('data-theme')
  } else {
    document.documentElement.setAttribute('data-theme', mode)
  }

  document.documentElement.style.colorScheme = resolved
}

export default function ThemeToggle() {
  const [mode, setMode] = useState<ThemeMode>('light')

  useEffect(() => {
    const initialMode = getInitialMode()
    setMode(initialMode)
    applyThemeMode(initialMode)
  }, [])

  useEffect(() => {
    if (mode !== 'auto') {
      return
    }

    const media = window.matchMedia('(prefers-color-scheme: dark)')
    const onChange = () => applyThemeMode('auto')

    media.addEventListener('change', onChange)
    return () => {
      media.removeEventListener('change', onChange)
    }
  }, [mode])

  function toggleMode(coords: { x: number; y: number } | null) {
    const nextMode: ThemeMode =
      mode === 'light' ? 'dark' : mode === 'dark' ? 'auto' : 'light'

    const root = document.documentElement

    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches

    setMode(nextMode)
    window.localStorage.setItem('theme', nextMode)

    // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
    if (!document.startViewTransition || prefersReducedMotion) {
      // handleThemeToggle(newTheme)
      applyThemeMode(nextMode)
      return
    }

    if (coords) {
      root.style.setProperty('--x', `${coords.x}px`)
      root.style.setProperty('--y', `${coords.y}px`)
    }

    // setMode(nextMode)
    // window.localStorage.setItem('theme', nextMode)
    document.startViewTransition(() => {
      applyThemeMode(nextMode)
    })
  }

  const label =
    mode === 'auto'
      ? 'Theme mode: auto (system). Click to switch to light mode.'
      : `Theme mode: ${mode}. Click to switch mode.`

  return (
    <Button
      type="button"
      onClick={(e) =>
        toggleMode({
          x: e.clientX,
          y: e.clientY,
        })
      }
      aria-label={label}
      title={label}
      size={'icon'}
      variant={'ghost'}
      className=""
    >
      {mode === 'auto' ? (
        <SunMoonIcon />
      ) : mode === 'dark' ? (
        <SunIcon />
      ) : (
        <MoonIcon />
      )}
    </Button>
  )
}
