import React from "react";
import { cn } from "../../utils/classNames";

const sizes = {
  sm: "h-11 w-11",
  md: "h-12 w-12",
  lg: "h-14 w-14",
};

const iconSizes = {
  sm: "h-5 w-5",
  md: "h-6 w-6",
  lg: "h-7 w-7",
};

const IconBadge = ({ Icon, size = "md", className = "", iconClassName = "" }) => {
  const iconElement = React.createElement(Icon, {
    className: cn("text-[#EB2127]", iconSizes[size], iconClassName),
  });

  return (
    <div
      className={cn(
        "rounded-lg bg-[#EB2127]/10 flex items-center justify-center",
        sizes[size],
        className
      )}
    >
      {iconElement}
    </div>
  );
};

export default IconBadge;
