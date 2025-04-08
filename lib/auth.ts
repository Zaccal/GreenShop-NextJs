import { NextAuthOptions } from 'next-auth'
import Google from 'next-auth/providers/google'
import Github from 'next-auth/providers/github'
import { PrismaAdapter } from '@next-auth/prisma-adapter'
import prisma from './prisma'

export const authOptions: NextAuthOptions = {
  providers: [
    Google({
      clientId: process.env.GOOGLE_ID || '',
      clientSecret: process.env.GOOGLE_SECRET || '',
    }),
    Github({
      clientId: process.env.GITHUB_ID || '',
      clientSecret: process.env.GITHUB_SECRET || '',
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET || '',
  // adapter: PrismaAdapter(prisma),
}
