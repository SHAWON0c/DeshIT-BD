import React from "react";
import { cn } from "../../utils/classNames";

const baseClass =
  "w-full border border-gray-300 bg-[#FDF8F8] rounded-3xl focus:outline-none focus:ring-2 focus:ring-[#EB2127]/40 focus:border-[#EB2127]";

export const TextInput = ({ className = "", ...props }) => (
  <input className={cn(baseClass, "p-4", className)} {...props} />
);

export const TextArea = ({ className = "", ...props }) => (
  <textarea className={cn(baseClass, "p-4 resize-none", className)} {...props} />
);
