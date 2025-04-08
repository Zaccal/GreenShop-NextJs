import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import protectPageAuthedUser from './middlewares/protectPageAuthedUser'

export default async function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl

  if (pathname.startsWith('/login')) {
    return protectPageAuthedUser(req)
  }

  return NextResponse.next()
}
