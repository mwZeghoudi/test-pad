'use client'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"
import { useState } from "react"

export default function LangSelect() {
  const [flag, setFlag] = useState('um')
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className={'rounded-full size-8 p-1'}>
          <span className={"fi fi-" + flag}></span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuGroup>
          <DropdownMenuItem onClick={() => { setFlag('um') }}>
            <span className="fi fi-um"></span> English
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => { setFlag('fr') }}>
            <span className="fi fi-fr"></span> French
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => { setFlag('es') }}>
            <span className="fi fi-es"></span> Spanish
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
