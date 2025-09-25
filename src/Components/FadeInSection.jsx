import React, { useRef, useState, useEffect } from "react";

const FadeInSection = ({ children, delay = 0 }) => {
    const ref = useRef();
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setTimeout(() => setVisible(true), delay * 500); // faster delay
                }
            },
            { threshold: 0.25 } // triggers earlier for high scroll
        );

        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, [delay]);

    return (
        <div
            ref={ref}
            className={`transition-opacity transition-transform duration-500 ease-out ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"
                }`}
        >
            {children}
        </div>
    );
};

export default FadeInSection;
