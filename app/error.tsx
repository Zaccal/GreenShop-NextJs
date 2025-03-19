"use client"

import { Button } from "@/components/ui/button"

const ErrorBoundry = ({ error, reset }: { error: Error; reset: () => void }) => {
  return (
    <div className="w-full h-[90vh] flex items-center justify-center">
      <div className="text-center max-w-xl">
        <h1 className="text-4xl font-bold text-primary uppercase">{error.message}</h1>
        <p className="text-lg my-6">
          An unexpected error occurred. Please check your input and try again. If the issue
          persists, contact support.
        </p>

        <Button onClick={reset} className="text-lg font-bold uppercase" size={"lg"}>
          Retry
        </Button>
      </div>
    </div>
  )
}

export default ErrorBoundry
