import Login from '@/components/shared/Login'
import Register from '@/components/shared/Register'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import prisma from '@/lib/prisma'
import React from 'react'

const page = async () => {
  return (
    <div className="container !max-w-2xl mt-24">
      <Tabs defaultValue="login" className="">
        <TabsList className="grid mt-3 w-full grid-cols-2">
          <TabsTrigger value="login">Login</TabsTrigger>
          <TabsTrigger value="register">Register</TabsTrigger>
        </TabsList>
        <TabsContent className="mt-[53px]" value="login">
          <Login />
        </TabsContent>
        <TabsContent value="register">
          <Register />
        </TabsContent>
      </Tabs>
    </div>
  )
}

export default page
