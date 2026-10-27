import { mergeProps } from "@base-ui/react/merge-props"
import { useRender } from "@base-ui/react/use-render"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "cn"

const badgeVariants = cva(
  "inline-flex w-fit max-w-full items-center justify-center gap-2 rounded-none border px-2 py-1 text-sm font-semibold leading-normal whitespace-normal [&_svg]:size-5 [&_svg]:shrink-0 [&:is(a)]:min-h-11 [&:is(a)]:min-w-11 [&:is(a)]:underline [&:is(a)]:underline-offset-4",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground border-2 border-primary-foreground",
        secondary: "bg-secondary text-secondary-foreground border-border [a]:hover:text-[var(--link)] aria-current:bg-primary aria-current:text-primary-foreground aria-current:border-primary-foreground",
        destructive: "bg-card text-destructive border-destructive",
        outline: "bg-card text-foreground border-border",
        ghost: "text-foreground border-transparent",
        link: "text-[var(--link)] underline border-transparent",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

function Badge({
  className,
  variant = "default",
  render,
  ...props
}: useRender.ComponentProps<"span"> & VariantProps<typeof badgeVariants>) {
  return useRender({
    defaultTagName: "span",
    props: mergeProps<"span">(
      {
        className: cn(badgeVariants({ variant }), className),
      },
      props
    ),
    render,
    state: {
      slot: "badge",
      variant,
    },
  })
}

export { Badge, badgeVariants }
