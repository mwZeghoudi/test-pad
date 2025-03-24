import React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import "/node_modules/flag-icons/css/flag-icons.min.css";

import Link from 'next/link';
import DarkModeBtn from './utils/DarkModeBtn';
import LangSelect from './utils/LangSelect';
import Image from 'next/image';

export default function Header() {
  return (
    <header className="col-span-12 p-4 flex items-center justify-between">
      <Image
        className={'w-auto h-auto'}
        src={'/logo.png'}
        alt='Logo'
        width={100}
        height={100}
      />
      <div className='flex items-center justify-between gap-5'>
        <DarkModeBtn />
        <LangSelect />
        <Link href={'/profil'}>
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </Link>
      </div>
    </header>
  )
}
