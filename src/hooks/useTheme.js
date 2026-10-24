import { useEffect, useState } from 'react'

const STORAGE_KEY = 'theme'

const readSaved = () => {
  try {
    const saved = localStorage.getItem(STORAGE_KEY)
    return saved === 'light' || saved === 'dark' ? saved : null
  } catch {
    return null
  }
}

const systemTheme = () =>
  window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'

// Light/dark theme stored on <html data-theme>. Follows the OS setting until
// the user picks one explicitly, then remembers that choice.
const useTheme = () => {
  const [theme, setTheme] = useState(
    () => document.documentElement.dataset.theme || readSaved() || systemTheme()
  )

  useEffect(() => {
    document.documentElement.dataset.theme = theme
  }, [theme])

  useEffect(() => {
    const media = window.matchMedia('(prefers-color-scheme: dark)')
    const onChange = (e) => {
      if (!readSaved()) setTheme(e.matches ? 'dark' : 'light')
    }
    media.addEventListener('change', onChange)
    return () => media.removeEventListener('change', onChange)
  }, [])

  const toggleTheme = () => {
    const next = theme === 'dark' ? 'light' : 'dark'
    try {
      localStorage.setItem(STORAGE_KEY, next)
    } catch {
      // Storage blocked (private mode) — the toggle still works for this visit.
    }
    setTheme(next)
  }

  return [theme, toggleTheme]
}

export default useTheme
