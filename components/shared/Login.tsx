/* eslint-disable @next/next/no-img-element */
'use client'

import { ILogin } from '@/types/login.type'
import { SubmitHandler, useForm } from 'react-hook-form'
import { Button } from '../ui/button'
import { Input, InputPassword } from '../ui/input'
import OAuthButtons from './OAuthButtons'

const Login = () => {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<ILogin>()

  const onSubmit: SubmitHandler<ILogin> = async data => {
    // reset()
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
          variant={errors.email ? 'error' : 'default'}
          placeholder={'almamun_uxui@outlook.com'}
          className="mb-[17px] mt-1"
          {...register('email', {
            required: {
              value: true,
              message: 'Required email',
            },
            pattern: {
              value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
              message: 'Incorrect email address',
            },
          })}
        />

        {errors.password && (
          <label htmlFor="password-input" className="text-destructive text-sm">
            * {errors.password?.message}
          </label>
        )}
        <InputPassword
          {...register('password', {
            required: {
              value: true,
              message: 'Required password',
            },
            minLength: {
              value: 8,
              message: 'Password must be at least 8 characters',
            },
            pattern: {
              value:
                /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/,
              message:
                'Password must be with characters and symbols (!@#$%^&*) also use numbers',
            },
          })}
          id="password-input"
          placeholder={errors.password ? errors.password?.message : 'Password'}
          variant={errors.password ? 'error' : 'empty'}
          className="mt-1"
        />

        <div className="flex justify-end w-full">
          <Button variant={'link'}>Forgot password</Button>
        </div>

        <Button className="mt-7 w-full font-bold" type="submit">
          Login
        </Button>
      </form>
      <div className="w-full text-center border-b-border border-b leading-[0.1em] mt-[46px] my-[10px]">
        <span className="bg-white px-[10px]">Or login with</span>
      </div>
      <OAuthButtons />
    </>
  )
}

export default Login
