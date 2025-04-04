import { signIn } from 'next-auth/react'
import { Button } from '../ui/button'

const OAuthButtons = () => {
  return (
    <>
      <Button
        onClick={() => signIn('google')}
        type="submit"
        className="w-full mt-7"
        variant={'outline'}
      >
        <img src="/Google.svg" alt="Google icon" />
        Login with Google
      </Button>

      <Button
        onClick={() => signIn('github')}
        type="submit"
        className="w-full mt-7"
        variant={'outline'}
      >
        <img
          className="w-[20px] h-[20px]"
          src="/Github.svg"
          alt="Github icon"
        />
        Login with Github
      </Button>
    </>
  )
}

export default OAuthButtons
