import React, { useEffect, useRef, useState } from "react";

const SlideInSection = ({ children, direction = "right" }) => {
  const ref = useRef();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const baseClasses = "transition-transform transition-opacity duration-1500 opacity-0";
  const directionClasses =
    direction === "right"
      ? "translate-x-32" // bigger distance
      : "-translate-x-32";

  return (
    <div
      ref={ref}
      className={`${baseClasses} ${visible ? "opacity-100 translate-x-0" : directionClasses}`}
    >
      {children}
    </div>
  );
};

export default SlideInSection;
