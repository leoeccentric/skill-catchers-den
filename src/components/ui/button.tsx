import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-semibold ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90 hover:scale-105 shadow-card",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/90 hover:scale-105 shadow-card",
        accent: "bg-accent text-accent-foreground hover:bg-accent/90 hover:scale-105 shadow-card",
        warning: "bg-warning text-warning-foreground hover:bg-warning/90 hover:scale-105 shadow-card",
        hero: "bg-gradient-hero text-white hover:scale-105 shadow-glow font-bold",
        battle: "bg-gradient-battle text-white hover:scale-105 shadow-battle font-bold",
        pokeball: "bg-gradient-card text-foreground border-2 border-primary hover:bg-primary hover:text-primary-foreground hover:scale-105 shadow-card",
        victory: "bg-victory text-white hover:bg-victory/90 hover:scale-105 shadow-card",
        defeat: "bg-defeat text-white hover:bg-defeat/90 hover:scale-105 shadow-card",
        outline: "border border-input bg-card hover:bg-accent hover:text-accent-foreground hover:scale-105",
        ghost: "hover:bg-accent hover:text-accent-foreground hover:scale-105",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-12 px-6 py-3",
        sm: "h-9 rounded-md px-3",
        lg: "h-14 rounded-xl px-8 text-base",
        xl: "h-16 rounded-xl px-12 text-lg",
        icon: "h-12 w-12",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />;
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
