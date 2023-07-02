"use client";

import { cn } from "@/libs/utils";
import { forwardRef } from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, children, disabled, type = "button", ...props }, ref) => {
    return (
      <button
        ref={ref}
        disabled={disabled}
        {...props}
        className={cn(
          `w-auto 
      rounded-full 
      bg-black 
      border-transparent 
      px-5 
      py-3 
      disabled:cursor-not-allowed 
      disabled:opacity-50 
      text-white 
      font-semibold
      hover:opacity-75
      transition
      `,
          className
        )}
      >
        {children}
      </button>
    );
  }
);

export default Button;
