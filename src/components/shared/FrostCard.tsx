import * as React from "react"
import { cn } from "@/lib/utils"

interface FrostCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
}

const FrostCard = React.forwardRef<HTMLDivElement, FrostCardProps>(
  ({ className, children, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        "rounded-lg border border-glacier-blue/50 bg-white/70 backdrop-blur-[12px] shadow-sm",
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
)
FrostCard.displayName = "FrostCard"

export { FrostCard }
