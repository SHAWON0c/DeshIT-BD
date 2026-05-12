import React from "react";
import { cn } from "../../utils/classNames";

const SurfaceCard = ({
  as: Component = "div",
  className = "",
  hover = false,
  children,
  ...props
}) => {
  return React.createElement(
    Component,
    {
      className: cn(
        "rounded-lg bg-white shadow-sm",
        hover && "transition-all duration-300 hover:-translate-y-1 hover:shadow-lg",
        className
      ),
      ...props,
    },
    children
  );
};

export default SurfaceCard;
