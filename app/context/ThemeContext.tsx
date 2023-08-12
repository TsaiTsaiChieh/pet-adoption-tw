'use client'
import { createContext } from 'react'

export const ThemeContext = createContext({})

interface Props {
  children: React.ReactNode
}
export const ThemeProvider = ({children}: Props) => {
  return (
    <ThemeContext.Provider value='light'>
      {children}
    </ThemeContext.Provider>
  )
}