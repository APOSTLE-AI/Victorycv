import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import type { ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 font-sans font-medium transition-colors duration-150 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink/40 focus-visible:ring-offset-2 focus-visible:ring-offset-paper disabled:pointer-events-none disabled:opacity-50 active:scale-[0.98]",
  {
    variants: {
      variant: {
        primary: "bg-ink text-accent-fg hover:bg-ink/90",
        secondary:
          "border border-ink/20 bg-transparent text-ink hover:border-ink/40 hover:bg-surface",
        ghost: "text-ink hover:bg-surface",
        link: "h-auto rounded-none px-0 text-ink underline decoration-ink/30 underline-offset-[0.18em] hover:decoration-ink",
      },
      size: {
        md: "h-11 min-h-11 rounded-md px-5 text-sm",
        lg: "h-12 min-h-12 rounded-lg px-6 text-base",
        sm: "h-10 min-h-10 rounded-sm px-3.5 text-sm",
        icon: "size-11 min-h-11 min-w-11 rounded-md",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  },
);

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  };

export function Button({ className, variant, size, asChild, ...props }: ButtonProps) {
  const Comp = asChild ? Slot : "button";
  return <Comp className={cn(buttonVariants({ variant, size }), className)} {...props} />;
}
