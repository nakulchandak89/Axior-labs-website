"use client";

import { motion } from "motion/react";
import { ButtonProps } from "@/lib/types";

export function Button({
  label,
  variant = "primary",
  size = "md",
  icon: Icon,
  iconPosition = "right",
  href,
  className = "",
  onClick,
  ...props
}: ButtonProps & { className?: string; onClick?: () => void }) {
  const baseStyles =
    "inline-flex items-center justify-center font-sans transition-all duration-150 font-bold whitespace-nowrap cursor-pointer";

  const variants = {
    primary:
      "bg-indigo-600 text-white hover:brightness-110 shadow-lg shadow-indigo-100 hover:shadow-indigo-200",
    ghost: "bg-transparent text-slate-500 hover:text-indigo-600 hover:bg-slate-50",
    outline:
      "bg-transparent border-2 border-slate-200 text-slate-600 hover:border-indigo-600 hover:text-indigo-600",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm rounded-full",
    md: "px-5 py-2.5 text-sm rounded-full",
    lg: "px-8 py-3 text-base rounded-full",
  };

  const Component = href ? motion.a : motion.button;
  const classes = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

  const content = (
    <>
      {Icon && iconPosition === "left" && <Icon className="w-4 h-4 mr-2" />}
      {label}
      {Icon && iconPosition === "right" && <Icon className="w-4 h-4 ml-2" />}
    </>
  );

  return (
    <Component
      href={href}
      className={classes}
      whileTap={{ scale: 0.98 }}
      onClick={onClick as any}
      {...(props as any)}
    >
      {content}
    </Component>
  );
}
