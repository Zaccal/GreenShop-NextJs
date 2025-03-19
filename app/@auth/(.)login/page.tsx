/* eslint-disable react-hooks/rules-of-hooks */
"use client"
import Login from "@/components/shared/Login"
import Register from "@/components/shared/Register"
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useRouter } from "next/navigation"

const page = () => {
  const router = useRouter()

  return (
    <>
      <Dialog open onOpenChange={router.back}>
        <DialogContent className="p-12 !rounded-none">
          <Tabs defaultValue="login" className="">
            <DialogTitle>
              <TabsList className="grid mt-3 w-full grid-cols-2">
                <TabsTrigger value="login">Login</TabsTrigger>
                <TabsTrigger value="register">Register</TabsTrigger>
              </TabsList>
            </DialogTitle>
            <TabsContent className="mt-[53px]" value="login">
              <Login />
            </TabsContent>
            <TabsContent value="register">
              <Register />
            </TabsContent>
          </Tabs>
        </DialogContent>
      </Dialog>
    </>
  )
}

export default page
