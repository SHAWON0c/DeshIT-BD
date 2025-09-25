import React, { useEffect, useState } from "react";
import Card from "../../Components/Card/Card";
import GlobalSpinner from "../../Components/Spinner/GlobalSpinner";  // Import your global spinner

import flutter from "../../assets/Images/Training/img-1.png";
import mern from "../../assets/Images/Training/img-2.png";
import laravel from "../../assets/Images/Training/img-3.png";

const trainingData = [
  { title: "Flutter", image: flutter },
  { title: "Mern Stack", image: mern },
  { title: "PHP Laravel", image: laravel },
];

const TrainingSection = () => {
  const [visible, setVisible] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Show loader for 1.5 seconds (simulate fetch)
    const loaderTimer = setTimeout(() => {
      setLoading(false);

      // Trigger staggered animation for cards
      trainingData.forEach((_, i) => {
        setTimeout(() => {
          setVisible((prev) => [...prev, i]);
        }, i * 300); // faster stagger
      });
    }, 500);

    return () => clearTimeout(loaderTimer);
  }, []);

  return (
    <>
      {/* Loader overlay */}
      <GlobalSpinner visible={loading} />

      {/* Cards grid */}
      <div
        className={`mt-8 mb-28 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12 px-4 lg:px-0 w-full max-w-[1200px] mx-auto transition-opacity duration-500 ${
          loading ? "opacity-0 pointer-events-none" : "opacity-100"
        }`}
      >
        {trainingData.map((product, index) => (
          <div
            key={index}
            className="transform transition-all duration-[900ms]"
            style={{
              opacity: visible.includes(index) ? 1 : 0,
              transform: visible.includes(index)
                ? "translateY(0)"
                : "translateY(80px)",
              transitionTimingFunction: "cubic-bezier(0.22, 1, 0.36, 1)",
              transitionProperty: "opacity, transform",
            }}
          >
            <Card
              title={product.title}
              image={product.image}
              onClick={() => alert(`${product.title} clicked!`)}
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default TrainingSection;
