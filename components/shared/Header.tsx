import { LogIn, Search, ShoppingCart } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar'
import { Button } from '../ui/button'
import UserDropdown from './UserDropdown'
import { getServerSession } from 'next-auth'

const Header = async () => {
  const session = await getServerSession()

  return (
    <header>
      <div className="container py-6 border-b-border border-b flex justify-between items-center">
        <Image src={'/Logo.png'} alt="Logo" width={150} height={34} priority />
        <nav>
          <ul className="flex gap-[50px] text-md">
            <li>Home</li>
            <li>Shop</li>
            <li>Plant Care</li>
            <li>Blogs</li>
          </ul>
        </nav>
        <div className="flex items-center gap-7">
          <Button variant={'ghost'} size={'icon'}>
            <Search />
          </Button>
          <Button variant={'ghost'} size={'icon'}>
            <ShoppingCart />
          </Button>
          {session ? (
            <div className="flex items-center gap-3">
              <Avatar>
                <AvatarFallback>
                  {session.user!.name![0].toLocaleUpperCase()}
                </AvatarFallback>
                <AvatarImage src={session.user?.image || ''} />
              </Avatar>
              <div className="flex flex-col">
                <span className="text-muted-foreground text-sm">
                  Hi, {session.user?.name}!
                </span>
                <UserDropdown session={session} />
              </div>
            </div>
          ) : (
            <Link href={'/login'}>
              <Button>
                <LogIn />
                <span className="leading-none font-semibold">Log in</span>
              </Button>
            </Link>
          )}
        </div>
      </div>
    </header>
  )
}

export default Header
