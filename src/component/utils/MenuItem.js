import React from 'react'
import Link from 'next/link'
import { Button } from "@/components/ui/button"

export default function MenuItem({
  label = "",
  href = "#",
  icon = <></>
}) {
  return (
    <Link href={href} className='w-full'>
      <Button
        variant={'ghost'}
        className={'w-full justify-start'}
      >
        {icon}{label}
      </Button>
    </Link >
  )
}
