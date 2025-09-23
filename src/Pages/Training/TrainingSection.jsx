import React, { useEffect, useState } from "react";
import Card from "../../Components/Card/Card";

import flutter from "../../assets/Images/Training/img-1.png";
import mern from "../../assets/Images/Training/img-2.png";
import laravel from "../../assets/Images/Training/img-3.png";


const trainingData = [
  { title: "Flutter", image: flutter },
  { title: "Mern  Stack", image: mern },
  { title: "PHP Laravel", image: laravel },

];

const TrainingSection = () => {
const [visible, setVisible] = useState([]);

  useEffect(() => {
    trainingData.forEach((_, i) => {
      setTimeout(() => {
        setVisible((prev) => [...prev, i]);
      }, i * 500); 
    });
  }, []);

  return (
    <div className=" py-32 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12 w-full max-w-[1200px] mx-auto">
      {trainingData.map((product, index) => (
        <div
          key={index}
          className={`transform transition-all duration-[900ms] opacity-0 translate-y-12`}
          style={{
            opacity: visible.includes(index) ? 1 : 0,
            transform: visible.includes(index)
              ? "translateY(0)"
              : "translateY(80px)",
            transitionTimingFunction: "cubic-bezier(0.22, 1, 0.36, 1)", // smooth ease out
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
  );
};


export default TrainingSection;