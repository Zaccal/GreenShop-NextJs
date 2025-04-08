'use server'
import { getToken } from 'next-auth/jwt'
import { NextRequest, NextResponse } from 'next/server'

export default async function protectPageAuthedUser(req: NextRequest) {
  const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET })

  if (token) {
    return NextResponse.redirect(new URL('/404', req.url))
  } else return NextResponse.next()
}
