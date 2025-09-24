import React, { useEffect, useState } from "react";
import Card from "../../Components/Card/Card";
import GlobalSpinner from "../../Components/Spinner/GlobalSpinner"; // Import your global spinner

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
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading delay
    const loaderTimer = setTimeout(() => {
      setLoading(false);

      // Trigger staggered animation after loader done
      productData.forEach((_, i) => {
        setTimeout(() => {
          setVisible((prev) => [...prev, i]);
        }, i * 300); // 300ms stagger
      });
    }, 500); // 1.5 seconds loader

    return () => clearTimeout(loaderTimer);
  }, []);

  return (
    <>
      {/* Overlay spinner, visible while loading */}
      <GlobalSpinner visible={loading} />

      {/* Product grid, fade in/out with loading */}
      <div
        className={`mt-16 mb-32 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-20 w-full max-w-[1200px] mx-auto transition-opacity duration-500 ${
          loading ? "opacity-0 pointer-events-none" : "opacity-100"
        }`}
      >
        {productData.map((product, index) => (
          <div
            key={index}
            className="transform transition-all duration-[900ms]"
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
    </>
  );
};

export default ProductCard;
