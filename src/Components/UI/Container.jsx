import React from "react";
import { cn } from "../../utils/classNames";

const Container = ({ as: Component = "div", className = "", children, ...props }) => {
  return React.createElement(
    Component,
    { className: cn("max-w-7xl mx-auto px-6 lg:px-0", className), ...props },
    children
  );
};

export default Container;
