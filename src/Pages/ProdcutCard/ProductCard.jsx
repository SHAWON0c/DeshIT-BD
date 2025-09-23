import React, { useEffect, useState } from "react";
import Card from "../../Components/Card/Card";

import product1 from "../../assets/Images/Product/product-1.png";
import product2 from "../../assets/Images/Product/product-2.png";
import product3 from "../../assets/Images/Product/product-3.png";
import product4 from "../../assets/Images/Product/product-4.png";
import product5 from "../../assets/Images/Product/product-5.png";
import product6 from "../../assets/Images/Product/product-6.png";

const productData = [
  { title: "Gym Management System", image: product1 },
  { title: "E-commerce Dashboard", image: product2 },
  { title: "POS Inventory App", image: product3 },
  { title: "Online Learning Platform", image: product4 },
  { title: "Restaurant Ordering System", image: product5 },
  { title: "Healthcare Portal", image: product6 },
];

const ProductCard = () => {
  const [visible, setVisible] = useState([]);

  useEffect(() => {
    productData.forEach((_, i) => {
      setTimeout(() => {
        setVisible((prev) => [...prev, i]);
      }, i * 500); 
    });
  }, []);

  return (
    <div className=" py-32 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12 w-full max-w-[1200px] mx-auto">
      {productData.map((product, index) => (
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

export default ProductCard;
