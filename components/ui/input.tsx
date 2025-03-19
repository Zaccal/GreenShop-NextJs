import * as React from "react"

import { cn } from "@/lib/utils"
import { Eye, EyeOff } from "lucide-react"

interface IInput extends React.ComponentProps<"input"> {
  variant?: "error" | "default" | "empty"
}

const Input = React.forwardRef<HTMLInputElement, IInput>(
  ({ className, type, variant = "default", ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          className,
          variant === "error"
            ? "flex h-10 w-full rounded-md border border-red-500 bg-background px-3 py-2 text-base text-red-700 ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-red-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
            : variant === "empty"
            ? ""
            : "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Input.displayName = "Input"

const InputPassword = React.forwardRef<HTMLInputElement, IInput>(
  ({ className, variant = "empty", ...props }, ref) => {
    const [isVisible, setIsVisible] = React.useState(false)

    return (
      <div
        className={cn(
          "flex h-10 items-center rounded-md border bg-white text-sm ring-offset-background focus-within:ring-1 focus-within:ring-offset-2",
          variant === "error"
            ? "border-red-500 focus-within:ring-red-500 focus-within:ring-2 px-3"
            : "border-input focus-within:ring-ring pr-3",
          className
        )}
      >
        <Input
          {...props}
          type={isVisible ? "text" : "password"}
          ref={ref}
          variant={variant === "error" ? "empty" : "default"}
          className={cn(
            "w-full placeholder:text-muted-foreground focus-visible:outline-none outline-none disabled:cursor-not-allowed disabled:opacity-50",
            variant === "error"
              ? "placeholder:text-red-400 text-red-700"
              : "!border-x-0 focus-within:!ring-0 focus-within:!ring-offset-0 border-y-border"
          )}
        />
        <div onClick={() => setIsVisible(prev => !prev)} className="cursor-pointer">
          {isVisible ? (
            <Eye className="text-muted-foreground" size={20} />
          ) : (
            <EyeOff size={20} className="text-muted-foreground" />
          )}
        </div>
      </div>
    )
  }
)

InputPassword.displayName = "InputPassword"

export { Input, InputPassword }
