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
          "inline-flex items-center justify-center font-bold tracking-tight transition-all duration-200 ease-out",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-500 focus-visible:ring-offset-2",
          "disabled:opacity-50 disabled:pointer-events-none",
          {
            "bg-ink-950 text-surface shadow-[0_4px_0_rgb(var(--shadow))] hover:bg-ink-800 hover:-translate-y-0.5 active:translate-y-[2px] active:shadow-[0_2px_0_rgb(var(--shadow))]":
              variant === "primary",
            "border-2 border-ink-300 bg-surface-elevated text-ink-900 shadow-[0_3px_0_rgb(var(--ink-200))] hover:border-ink-400 hover:bg-ink-50 hover:-translate-y-0.5 active:translate-y-[1px] active:shadow-[0_1px_0_rgb(var(--ink-200))]":
              variant === "secondary",
            "text-ink-600 hover:text-ink-950 hover:bg-ink-100/80":
              variant === "ghost",
            "bg-accent-600 text-white shadow-[0_4px_0_#9a3d2c] hover:brightness-95 hover:-translate-y-0.5 active:translate-y-[2px] active:shadow-[0_2px_0_#9a3d2c]":
              variant === "accent",
          },
          {
            "h-10 px-4 text-sm rounded-xl": size === "sm",
            "h-12 px-6 text-body rounded-2xl": size === "md",
            "h-14 px-8 text-body-lg rounded-2xl": size === "lg",
          },
          className
        )}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";
