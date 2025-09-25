import React, { useEffect, useRef, useState } from "react";

const TypingEffect = ({ children, tag = "div", speed = 50, className = "" }) => {
  const [text, setText] = useState("");
  const frameRef = useRef();
  const charIndexRef = useRef(0);
  const lastTimeRef = useRef(null);
  const fullText = typeof children === "string" ? children : "";

  const animate = (timestamp) => {
    if (!lastTimeRef.current) lastTimeRef.current = timestamp;

    const delta = timestamp - lastTimeRef.current;

    if (delta >= speed) {
      const nextIndex = charIndexRef.current + 1;
      setText(fullText.slice(0, nextIndex));
      charIndexRef.current = nextIndex;
      lastTimeRef.current = timestamp;
    }

    if (charIndexRef.current < fullText.length) {
      frameRef.current = requestAnimationFrame(animate);
    }
  };

  useEffect(() => {
    frameRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frameRef.current);
  }, [fullText]);

  const Tag = tag;
  return <Tag className={className}>{text}</Tag>;
};

export default TypingEffect;
