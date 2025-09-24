import React, { useEffect, useState } from "react";
import { useInView } from "../../Hooks/useInView";

const Counter = ({ end, duration }) => {
  const [ref, inView] = useInView({ threshold: 0.3 });
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;

    if (inView) {
      const increment = end / (duration / 16);
      const counter = setInterval(() => {
        start += increment;
        if (start >= end) {
          clearInterval(counter);
          setCount(end);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);

      return () => clearInterval(counter);
    } else {
      // Reset when leaving the viewport so it restarts next time
      setCount(0);
    }
  }, [inView, end, duration]);

  return <span ref={ref}>{count}</span>;
};

export default Counter;
