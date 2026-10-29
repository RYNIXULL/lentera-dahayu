import React from "react";
import Link from "next/link";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  href?: string;
  external?: boolean;
  children: React.ReactNode;
}

export const Button = React.forwardRef<HTMLButtonElement | HTMLAnchorElement, ButtonProps>(
  (
    {
      variant = "primary",
      size = "md",
      href,
      external,
      className = "",
      children,
      disabled,
      ...props
    },
    ref
  ) => {
    const baseStyles =
      "inline-flex items-center justify-center font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#C1F1FF] focus:ring-offset-2 focus:ring-offset-[#090D14] disabled:opacity-50 disabled:cursor-not-allowed select-none";

    const sizeStyles = {
      sm: "px-3.5 py-1.5 text-xs rounded-lg gap-1.5",
      md: "px-5 py-2.5 text-sm rounded-xl gap-2",
      lg: "px-6 py-3 text-base rounded-xl gap-2.5",
    };

    const variantStyles = {
      primary:
        "bg-[#8BE5FF] text-[#090D14] font-semibold hover:bg-[#43BFEA] shadow-sm hover:shadow-[0_0_20px_rgba(139,229,255,0.25)] active:translate-y-px",
      secondary:
        "bg-[#172232] text-[#F3F6FA] hover:bg-[#1E2D42] border border-[#2A3545] hover:border-[#8BE5FF]/40 active:translate-y-px",
      outline:
        "bg-transparent text-[#F3F6FA] border border-[#2A3545] hover:border-[#8BE5FF] hover:text-[#8BE5FF] active:translate-y-px",
      ghost:
        "bg-transparent text-[#A5B0C0] hover:text-[#F3F6FA] hover:bg-[#172232]/50 active:translate-y-px",
    };

    const combinedClassName = `${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`;

    if (href) {
      if (external) {
        return (
          <a
            ref={ref as React.Ref<HTMLAnchorElement>}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className={combinedClassName}
          >
            {children}
          </a>
        );
      }
      return (
        <Link
          ref={ref as React.Ref<HTMLAnchorElement>}
          href={href}
          className={combinedClassName}
        >
          {children}
        </Link>
      );
    }

    return (
      <button
        ref={ref as React.Ref<HTMLButtonElement>}
        disabled={disabled}
        className={combinedClassName}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
