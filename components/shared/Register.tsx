"use client"
/* eslint-disable @next/next/no-img-element */
import { signInAction } from "@/lib/actions/login.action"
import { SubmitHandler, useForm } from "react-hook-form"
import { Button } from "../ui/button"
import { Input, InputPassword } from "../ui/input"

interface IRegisterForm {
  username: string
  email: string
  password: string
  password_comfirm: string
}

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch,
  } = useForm<IRegisterForm>()

  const handler: SubmitHandler<IRegisterForm> = data => {}

  const password = watch("password")

  return (
    <>
      <form onSubmit={handleSubmit(handler)} className="mt-10">
        <p className="mb-4">Enter your email and password to register.</p>
        <div className="flex flex-col gap-5">
          <Input
            {...register("username", {
              required: {
                message: "Please enter a username",
                value: true,
              },
              minLength: {
                message: "Username has to be least 2 charaters",
                value: 2,
              },
            })}
            variant={errors.username ? "error" : "default"}
            placeholder={errors.username ? errors.username.message : "Username"}
          />
          <Input
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
            placeholder={errors.email ? errors.email.message : "Enter your email address"}
            variant={errors.email ? "error" : "default"}
            type="email"
          />
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
            placeholder={errors.password ? errors.password?.message : "Password"}
            variant={errors.password ? "error" : "empty"}
          />

          <InputPassword
            {...register("password_comfirm", {
              required: {
                value: true,
                message: "Required comfirm password",
              },
              validate: value => value === password || "Passwords do not match",
            })}
            placeholder={
              errors.password_comfirm ? errors.password_comfirm.message : "Confirm Password"
            }
            variant={errors.password_comfirm ? "error" : "default"}
          />
        </div>
        <Button type="submit" className="w-full mt-11 font-bold">
          Register
        </Button>
      </form>
      <div className="w-full text-center border-b leading-[0.1em] mt-[46px] my-[10px]">
        <span className="bg-white px-[10px]">Or register with</span>
      </div>
      <form action={() => signInAction("google")}>
        <Button type="submit" className="w-full mt-7" variant={"outline"}>
          <img src="/Google.svg" alt="Google icon" />
          Login with Google
        </Button>
      </form>

      <form action={() => signInAction("github")}>
        <Button type="submit" className="w-full mt-7" variant={"outline"}>
          <img className="w-[20px] h-[20px]" src="/Github.svg" alt="Github icon" />
          Login with Github
        </Button>
      </form>
    </>
  )
}

export default Register
