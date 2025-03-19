"use server"
import { ILogin } from "@/types/login.type"
import { signIn, signOut } from "../auth"

export async function signInAction(action: "google" | "github" | "credentials", data?: ILogin) {
  if (action !== "credentials") await signIn(action, { redirectTo: "/" })

  if (!data) throw new Error("Data for auth credentials is not provided")

  await signIn(action, data)
}

export async function logout() {
  await signOut()
}
