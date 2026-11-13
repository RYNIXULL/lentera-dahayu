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
      "inline-flex items-center justify-center font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#0284C7] focus:ring-offset-2 focus:ring-offset-[#F0F5FA] disabled:opacity-50 disabled:cursor-not-allowed select-none cursor-pointer";

    const sizeStyles = {
      sm: "px-4 py-2 text-xs rounded-2xl gap-2 font-bold",
      md: "px-6 py-3 text-sm rounded-2xl gap-2.5 font-bold",
      lg: "px-8 py-4 text-base rounded-[22px] gap-3 font-bold",
    };

    const variantStyles = {
      primary: "clay-btn-primary",
      secondary: "clay-btn-secondary",
      outline:
        "bg-white text-[#0284C7] border-2 border-[#38BDF8]/70 hover:bg-[#F0F9FF] hover:border-[#0284C7] shadow-[0_4px_12px_rgba(14,165,233,0.1),inset_1px_1px_2px_#FFFFFF] active:translate-y-0.5",
      ghost:
        "bg-transparent text-[#64748B] hover:text-[#0284C7] hover:bg-[#F0F9FF] active:translate-y-0.5",
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
