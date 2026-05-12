import React from "react";
import { cn } from "../../utils/classNames";

const variants = {
  primary:
    "inline-flex items-center justify-center gap-2 rounded-lg bg-[#EB2127] px-6 py-3 font-medium text-white shadow-md transition-colors hover:bg-[#C81016]",
  primaryFlat:
    "inline-flex items-center justify-center rounded-lg bg-[#EB2127] px-6 py-3 font-medium text-white transition-colors hover:bg-[#C81016]",
  outline:
    "inline-flex items-center justify-center rounded-lg border border-[#EB2127] bg-white px-6 py-3 font-medium text-[#EB2127] transition-colors hover:bg-[#fff1f1]",
  darkOutline:
    "inline-flex items-center justify-center rounded-lg border border-white/20 px-6 py-3 font-medium text-white transition-colors hover:bg-white/10",
  white:
    "inline-flex items-center justify-center gap-2 rounded-lg bg-white px-8 py-3 font-medium text-[#EB2127] transition-colors hover:bg-gray-100",
  contact:
    "bg-[#EB2127] text-white px-8 py-3 rounded-2xl button-bottom-shadow hover:translate-y-[-2px] transition-all duration-300",
};

const Button = ({
  as: Component = "button",
  variant = "primary",
  className = "",
  children,
  ...props
}) => {
  return React.createElement(
    Component,
    { className: cn(variants[variant], className), ...props },
    children
  );
};

export default Button;
