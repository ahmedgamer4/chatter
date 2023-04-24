import { useEffect, useState } from "react"

const Themes = ['light', 'dark'] as const
type Theme = (typeof Themes)[number]

export default () => {
  const [theme, setTheme] = useState<Theme>('dark')

  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark')
    } else {
      setTheme('light')
    }
  }

  useEffect(() => {
    const localTheme = localStorage.getItem('theme')
    localTheme ?
      setTheme(localTheme as Theme) : null
  }, [])

  useEffect(() => {
    const localTheme = localStorage.getItem('theme')
    if (localTheme === 'dark') {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [theme])

  return [theme, toggleTheme]
}
