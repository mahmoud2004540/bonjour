"use client";

import { cn } from "@/lib/utils";
import { ButtonHTMLAttributes, forwardRef } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost" | "accent";
  size?: "sm" | "md" | "lg";
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center font-medium transition-all duration-200 ease-out-expo",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-500 focus-visible:ring-offset-2",
          "disabled:opacity-50 disabled:pointer-events-none",
          {
            "bg-ink-950 text-surface hover:bg-ink-800": variant === "primary",
            "border border-ink-200 text-ink-800 hover:bg-ink-50 hover:border-ink-300":
              variant === "secondary",
            "text-ink-500 hover:text-ink-900 hover:bg-ink-50": variant === "ghost",
            "bg-accent-600 text-white hover:bg-accent-700": variant === "accent",
          },
          {
            "h-9 px-4 text-sm rounded-lg": size === "sm",
            "h-11 px-6 text-body rounded-xl": size === "md",
            "h-12 px-8 text-body rounded-xl": size === "lg",
          },
          className
        )}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";
