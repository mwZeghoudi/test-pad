'use client'
import { Toggle } from "@/@/components/ui/toggle"
import { useState } from "react"
import {
  Moon,
  Sun
} from 'lucide-react'

export default function DarkModeBtn() {
  const [isDark, setIsDark] = useState(false)

  return (
    <Toggle
      variant="outline"
      aria-label="Toggle dark-mode"
      className={'rounded-full size-8'}
      onClick={() => { setIsDark(!isDark) }}
    >
      {
        isDark ?
          <Moon /> :
          <Sun />
      }
    </Toggle>
  )
}
