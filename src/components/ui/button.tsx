"use client";

import { forwardRef } from "react";
import { clsx } from "clsx";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "destructive";
  size?: "sm" | "md" | "lg";
  loading?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", loading, children, disabled, ...props }, ref) => {
    return (
      <button
        className={clsx(
          // Base styles - TailwindUI standard
          "inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",

          // Variants - TailwindUI patterns
          {
            "bg-primary-600 text-white hover:bg-primary-700 active:bg-primary-800": variant === "primary",
            "bg-gray-100 text-gray-900 hover:bg-gray-200 active:bg-gray-300": variant === "secondary",
            "border border-gray-300 bg-white text-gray-700 hover:bg-gray-50 active:bg-gray-100": variant === "outline",
            "text-gray-700 hover:bg-gray-100 active:bg-gray-200": variant === "ghost",
            "bg-red-600 text-white hover:bg-red-700 active:bg-red-800": variant === "destructive",
          },

          // Sizes - TailwindUI standard
          {
            "h-8 px-3 text-sm": size === "sm",
            "h-10 px-4 text-sm": size === "md",
            "h-12 px-6 text-base": size === "lg",
          },

          className
        )}
        disabled={disabled || loading}
        ref={ref}
        {...props}
      >
        {loading && (
          <svg
            className="mr-2 h-4 w-4 animate-spin"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="m4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
          </svg>
        )}
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

export { Button };
