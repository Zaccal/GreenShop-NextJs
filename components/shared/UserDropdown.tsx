'use client'
import {
  ChevronDown,
  Heart,
  LogOut,
  MapPin,
  Settings,
  User,
} from 'lucide-react'
import { Session } from 'next-auth'
import Link from 'next/link'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '../ui/dropdown-menu'
import { signOut } from 'next-auth/react'

interface IUserDropdown {
  session: Session | null
}

const UserDropdown = ({ session }: IUserDropdown) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <span className="cursor-pointer flex items-end gap-1">
          {session?.user?.name} <ChevronDown size={18} />
        </span>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-52">
        <DropdownMenuLabel>Options</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem className="cursor-pointer">
            <Link
              href={'/settings/account-details'}
              className="flex gap-2 items-center"
            >
              <User />
              <span>Account Details</span>
            </Link>
          </DropdownMenuItem>

          <DropdownMenuItem className="cursor-pointer">
            <Link
              href={'/settings/address'}
              className="flex gap-2 items-center"
            >
              <MapPin />
              <span>Address</span>
            </Link>
          </DropdownMenuItem>

          <DropdownMenuItem className="cursor-pointer">
            <Link
              href={'/settings/wishlist'}
              className="flex gap-2 items-center"
            >
              <Heart />
              <span>Wishlist</span>
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem className="cursor-pointer">
            <Link href={'/settings'} className="flex gap-2 items-center">
              <Settings />
              <span>Settings</span>
            </Link>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem
            onClick={() => signOut()}
            className="cursor-pointer !text-destructive hover:!bg-destructive/25"
          >
            <LogOut className="text-destructive" />
            <span>Log out</span>
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default UserDropdown
