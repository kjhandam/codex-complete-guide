import { Button as ButtonPrimitive } from "@base-ui/react/button"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "cn"

const buttonVariants = cva(
  "inline-flex min-h-11 min-w-11 items-center justify-center gap-2 whitespace-normal rounded-none border-2 px-4 py-3 text-sm font-semibold leading-normal cursor-pointer disabled:cursor-not-allowed disabled:bg-muted disabled:text-muted-foreground disabled:border-input [&_svg]:pointer-events-none [&_svg]:size-5 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground border-primary-foreground hover:bg-[var(--primary-hover)] active:bg-[var(--primary-hover)] focus-visible:[outline-color:var(--primary-foreground)]",
        outline: "border-input bg-card text-foreground hover:bg-muted active:bg-muted",
        secondary: "border-input bg-secondary text-secondary-foreground hover:bg-card",
        ghost: "border-transparent text-foreground hover:bg-muted",
        destructive: "border-destructive bg-card text-destructive hover:bg-muted",
        link: "border-transparent text-[var(--link)] underline underline-offset-4 hover:text-[var(--link-hover)]",
      },
      size: {
        default: "", xs: "px-2", sm: "px-3", lg: "px-6",
        icon: "size-11 p-2", "icon-xs": "size-11 p-2", "icon-sm": "size-11 p-2", "icon-lg": "size-12 p-2",
      },
    },
    defaultVariants: { variant: "default", size: "default" },
  }
)
function Button({ className, variant = "default", size = "default", ...props }: ButtonPrimitive.Props & VariantProps<typeof buttonVariants>) {
  return <ButtonPrimitive data-slot="button" data-variant={variant} className={cn(buttonVariants({ variant, size, className }))} {...props} />
}
export { Button, buttonVariants }
