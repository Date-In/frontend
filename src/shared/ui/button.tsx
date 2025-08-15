import type { ButtonHTMLAttributes } from "react";
import cn from "clsx";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "red" | "white";
  className?: string;
}

export function Button({
  variant = "red",
  className,
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      {...props}
      className={cn(
        "transition-all duration-250 ease-in-out transform cursor-pointer",
        variant === "red"
          ? "bg-red  cursor-pointer gap-4.5 rounded-2xl py-4 text-base font-bold text-white active:bg-[#cd394c]"
          : "border-1 border-border-color py-4 rounded-2xl text-red hover:border-red active:border-red",
        className,
      )}
    >
      {children}
    </button>
  );
}
