/* eslint-disable @next/next/no-img-element */
"use client"

import { signInAction } from "@/lib/actions/login.action"
import { ILogin } from "@/types/login.type"
import { SubmitHandler, useForm } from "react-hook-form"
import { Button } from "../ui/button"
import { Input, InputPassword } from "../ui/input"

const Login = () => {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<ILogin>()

  const onSubmit: SubmitHandler<ILogin> = async data => {
    await signInAction("credentials", data)
    reset()
  }

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        {errors.email && (
          <label htmlFor="email-input" className="text-destructive text-sm">
            * {errors.email?.message}
          </label>
        )}
        <Input
          type="email"
          id="email-input"
          variant={errors.email ? "error" : "default"}
          placeholder={"almamun_uxui@outlook.com"}
          className="mb-[17px] mt-1"
          {...register("email", {
            required: {
              value: true,
              message: "Required email",
            },
            pattern: {
              value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
              message: "Incorrect email address",
            },
          })}
        />

        {errors.password && (
          <label htmlFor="password-input" className="text-destructive text-sm">
            * {errors.password?.message}
          </label>
        )}
        <InputPassword
          {...register("password", {
            required: {
              value: true,
              message: "Required password",
            },
            minLength: {
              value: 8,
              message: "Password must be at least 8 characters",
            },
            pattern: {
              value: /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/,
              message: "Password must be with characters and symbols (!@#$%^&*) also use numbers",
            },
          })}
          id="password-input"
          placeholder={errors.password ? errors.password?.message : "Password"}
          variant={errors.password ? "error" : "empty"}
          className="mt-1"
        />

        <div className="flex justify-end w-full">
          <Button variant={"link"}>Forgot password</Button>
        </div>

        <Button className="mt-7 w-full font-bold" type="submit">
          Login
        </Button>
      </form>
      <div className="w-full text-center border-b leading-[0.1em] mt-[46px] my-[10px]">
        <span className="bg-white px-[10px]">Or login with</span>
      </div>
      <form action={async () => await signInAction("google")}>
        <Button type="submit" className="w-full mt-7" variant={"outline"}>
          <img src="/Google.svg" alt="Google icon" />
          Login with Google
        </Button>
      </form>

      <form action={async () => await signInAction("github")}>
        <Button type="submit" className="w-full mt-7" variant={"outline"}>
          <img className="w-[20px] h-[20px]" src="/Github.svg" alt="Github icon" />
          Login with Github
        </Button>
      </form>
    </>
  )
}

export default Login
