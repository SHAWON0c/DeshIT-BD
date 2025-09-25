// import React from "react";

// const SmoothLetterFade = ({ text, className = "", delay = 0.04, tag = "h1" }) => {
//   const Tag = tag;

//   return (
//     <Tag className={className}>
//       {text.split("").map((char, index) => (
//         <span
//           key={index}
//           className="letter-appear"
//           style={{
//             animationDelay: `${index * delay}s`,
//           }}
//         >
//           {char === " " ? "\u00A0" : char}
//         </span>
//       ))}
//     </Tag>
//   );
// };

// export default SmoothLetterFade;


import React, { useEffect, useRef, useState } from "react";

const SmoothLetterFade = ({ text, className = "", delay = 0.04, tag = "h1" }) => {
  const Tag = tag;
  const containerRef = useRef(null);
  const [inView, setInView] = useState(false);

  // Observe when the component is in viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect(); // Trigger only once
        }
      },
      {
        threshold: 0.3, // Trigger when 30% is visible
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <Tag className={className} ref={containerRef}>
      {text.split("").map((char, index) => (
        <span
          key={index}
          className={`letter-appear ${inView ? "visible" : ""}`}
          style={{
            animationDelay: `${index * delay}s`,
          }}
        >
          {char === " " ? "\u00A0" : char}
        </span>
      ))}
    </Tag>
  );
};

export default SmoothLetterFade;
