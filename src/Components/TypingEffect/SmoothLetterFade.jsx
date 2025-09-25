import React, { useEffect, useRef, useState } from "react";

const SmoothLetterFade = ({ text, className = "", delay = 0.04, tag = "h1" }) => {
  const Tag = tag;
  const containerRef = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const element = containerRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect(); // Trigger once
        }
      },
      { threshold: 0.3 } // Trigger when 30% visible
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <Tag className={className} ref={containerRef}>
      {text.split("").map((char, index) => (
        <span
          key={index}
          className={`letter-appear ${inView ? "visible" : ""}`}
          style={{ animationDelay: `${index * delay}s` }}
        >
          {char === " " ? "\u00A0" : char}
        </span>
      ))}
    </Tag>
  );
};

export default SmoothLetterFade;
