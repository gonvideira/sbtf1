import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-mono font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-atlantic-teal focus:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-deep-navy text-ice-white",
        secondary:
          "border-transparent bg-glacier-blue text-deep-navy",
        outline:
          "border-deep-navy/30 text-deep-navy",
        teal:
          "border-transparent bg-atlantic-teal text-ice-white",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  )
}

export { Badge, badgeVariants }
