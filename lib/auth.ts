import { PrismaAdapter } from "@next-auth/prisma-adapter"
import bcrypt from "bcrypt"
import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import GitHub from "next-auth/providers/github"
import Google from "next-auth/providers/google"
import { prisma } from "./prisma"

export const { auth, handlers, signIn, signOut } = NextAuth({
  secret: process.env.NEXTAUTH_SECRET,
  providers: [
    Google({
      clientId: process.env.GOOGLE_ID!,
      clientSecret: process.env.GOOGLE_SECRET!,
    }),
    GitHub({
      clientId: process.env.GITHUB_ID!,
      clientSecret: process.env.GITHUB_SECRET!,
    }),
    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        username: { label: "Username", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password || !credentials.username) {
          throw new Error("Invalid email or password")
        }

        const email = credentials.email as string
        const password = credentials.password as string

        const user = await prisma.user.findUnique({
          where: { email },
        })

        if (!user || !user.hashedPassword) {
          throw new Error("User not found")
        }

        const passwordMatch = await bcrypt.compare(password, user.hashedPassword)

        if (!passwordMatch) {
          throw new Error("Incorrect password or email")
        }

        return user
      },
    }),
  ],
  adapter: PrismaAdapter(prisma),
  session: {
    strategy: "jwt",
  },
  pages: {
    error: "/login/error",
  },
  callbacks: {
    signIn: async ({ user, account }) => {
      const existingUser = await prisma.user.findFirst({
        where: { email: user.email },
        include: {
          accounts: true,
        },
      })

      if (existingUser) {
        const hasSameProvider = existingUser.accounts.some(
          acc => acc.provider === account?.provider
        )

        if (!hasSameProvider) {
          throw new Error(`This user has already registered with this email address`)
        }
      }

      return true
    },
  },
  trustHost: true,
})
