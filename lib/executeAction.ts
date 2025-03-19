import { isRedirectError } from "next/dist/client/components/redirect-error"

type Options<T> = {
  actionFn: () => Promise<T>
  successMessage?: string
}

export interface IResult {
  success: boolean
  message: string
}

const executeAction = async <T>({
  actionFn,
  successMessage = "The actions was successful",
}: Options<T>): Promise<IResult> => {
  try {
    await actionFn()

    return {
      success: true,
      message: successMessage,
    }
  } catch (error) {
    if (isRedirectError(error)) {
      throw error
    }
    const errorMessage =
      error instanceof Error ? error.message : "An error has occurred during executing the action"

    return {
      success: false,
      message: errorMessage,
    }
  }
}

export { executeAction }
