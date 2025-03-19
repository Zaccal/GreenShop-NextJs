import Login from "@/components/shared/Login"
import Register from "@/components/shared/Register"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { auth } from "@/lib/auth"

const page = async () => {
  const session = await auth()

  if (session) throw new Error("Page is not found")

  return (
    <div className="flex items-center h-[90vh] justify-center">
      <div className="w-full max-w-xl">
        <Tabs defaultValue="login">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="login">Login</TabsTrigger>
            <TabsTrigger value="register">Register</TabsTrigger>
          </TabsList>
          <TabsContent value="login" className="mt-12">
            <Login />
          </TabsContent>
          <TabsContent value="register">
            <Register />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

export default page
