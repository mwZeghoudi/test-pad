'use client'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/@/components/ui/dropdown-menu"
import { Avatar, AvatarFallback, AvatarImage } from "@/@/components/ui/avatar"
import { Button } from "@/@/components/ui/button"
import Link from "next/link"
import { CirclePower, CircleUser } from 'lucide-react'
import { logout } from "@/@/lib/auth"
export default function UserMenu() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Avatar className={'cursor-pointer'}>
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuGroup>
          <DropdownMenuItem className={'flex gap-3 cursor-pointer'}>
            <Link href={'profile'}>
              <Button
                variant="link"
                className={'w-full justify-start h-fit cursor-pointer'}
              >
                <CircleUser />Profile
              </Button>
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem className={'cursor-pointer'}>
            <Button
              variant="link"
              className={'w-full justify-start h-fit cursor-pointer text-red-700'}
              onClick={logout}
            >
              <CirclePower className="text-red-700" />Logout
            </Button>
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
