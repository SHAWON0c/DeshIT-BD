"use client";

import { Zap, Crown, RefreshCcw, RotateCw, Figma, Code } from "lucide-react";
import { useEffect, useState } from "react";

const ServiceHeading = () => {
  const icons = [Zap, Figma, Crown, RefreshCcw, RotateCw, Code];
  const [containerSize, setContainerSize] = useState(450);

useEffect(() => {
  const handleResize = () => {
    const vw = window.innerWidth;

    let width;
    if (vw < 768) {
      // Mobile
      width = Math.min(350, vw * 0.7);
    } else {
      // Desktop / Tablet
      width = Math.min(450, vw * 0.6);
    }

    setContainerSize(width);
  };

  handleResize();
  window.addEventListener("resize", handleResize);
  return () => window.removeEventListener("resize", handleResize);
}, []);


  const iconSize = containerSize * 0.09; // scale icons with container (about 9%)
//   const radius = (containerSize - iconSize) / 2+5;
  const radius = (containerSize - iconSize) / 2 + iconSize * 0.2;
  const center = containerSize / 2;

  return (
    <div className="flex flex-col items-center justify-center w-full px-4 md:px-8 lg:px-20">
      <section>
        {/* Title */}
        <div className="w-full flex flex-col md:flex-row items-center justify-between">
          <div className="text-center md:text-left max-w-lg mx-auto md:mx-0 mb-12 md:mb-0">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
              Software Development <br /> Outsourcing Services
            </h2>
            <p className="text-gray-600 text-sm sm:text-base">
              Expand your capabilities by hiring our expert developers. We deliver top-notch software outsourcing
              solutions tailored to your needs while saving your time and resources.
            </p>
            <button className="mt-6 bg-blue-500 text-white px-4 sm:px-6 py-2 rounded-md shadow hover:bg-blue-600 transition text-sm sm:text-base">
              719 Fill × 84 Hug
            </button>
          </div>

          {/* API Development Circle */}
          <div
            className="flex justify-center items-center relative mt-12 md:mt-0 md:ml-12 aspect-square w-full max-w-[450px]"
            style={{ height: `${containerSize}px` }}
          >
            {/* Circle Outline */}
            <div className="absolute inset-0 rounded-full border border-gray-300"></div>

            {/* Orbiting Icons */}
            {icons.map((Icon, index) => {
              const delay = index * 1.5;
              return (
                <div
                  key={index}
                  className="absolute bg-black text-white rounded-full orbit flex items-center justify-center"
                  style={{
                    width: `${iconSize}px`,
                    height: `${iconSize}px`,
                    top: `${center - iconSize / 2}px`,
                    left: `${center - iconSize / 2}px`,
                    animationDelay: `${delay}s`,
                  }}
                >
                  <Icon size={iconSize * 0.6} /> {/* scale icon size with container */}
                </div>
              );
            })}

            {/* Center Text */}
            <div className="absolute text-center px-4 sm:px-0">
              <h2 className="font-bold text-lg sm:text-xl">API Development</h2>
              <p className="text-sm sm:text-base text-gray-600">APIs that Power Your Digital Ecosystem</p>
            </div>
          </div>
        </div>

        <div className="mt-16">
          {/* Services Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-red-500">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Dedicated Team</h3>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                Our dedicated team service offers you a full-time, specialized team committed to your project. This model
                ensures focused expertise, quick turnaround times and seamless integration with your existing processes.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-red-500">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Staff Augmentation</h3>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                With our staff augmentation services, you can temporarily extend your team with experienced professionals.
                This approach allows you to scale resources flexibly, reduce hiring overheads, and address skill gaps
                efficiently.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-red-500">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">End-to-End Project</h3>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                We manage your entire project from concept to completion with our end-to-end service. This comprehensive
                approach ensures accountability, reduces risks, and delivers a cohesive final product aligned with your
                business objectives.
              </p>
            </div>
          </div>

          {/* Trusted Companies Section */}
          <div className="bg-blue-50 border-2 border-blue-200 rounded-lg p-6 sm:p-8">
            <h4 className="text-center text-gray-700 font-medium mb-6 text-sm sm:text-base">
              Trusted by 100+ Companies including
            </h4>
            <div className="flex items-center justify-center gap-6 sm:gap-8 flex-wrap">
              <div className="flex items-center">
                <span className="text-blue-600 font-bold text-xl sm:text-2xl">UNDP</span>
              </div>
              <div className="flex items-center text-center sm:text-left">
                <span className="text-gray-600 font-semibold text-lg sm:text-xl">ITC</span>
                <span className="text-xs sm:text-sm text-gray-500 ml-1">
                  INTERNATIONAL
                  <br />
                  TRADE
                  <br />
                  CENTRE
                </span>
              </div>
              <div className="flex items-center">
                <span className="text-blue-500 font-bold text-xl sm:text-2xl">telenor</span>
              </div>
              <div className="flex items-center">
                <span className="text-gray-800 font-bold text-xl sm:text-2xl">NOKIA</span>
              </div>
              <div className="flex items-center">
                <span className="text-gray-800 font-bold text-xl sm:text-2xl italic">vivo</span>
              </div>
            </div>
          </div>
        </div>

        {/* Orbit Animation */}
        <style jsx>{`
          @keyframes orbit {
            0% {
              transform: rotate(0deg) translateX(${radius}px) rotate(0deg);
            }
            100% {
              transform: rotate(360deg) translateX(${radius}px) rotate(-360deg);
            }
          }

          .orbit {
            animation: orbit 10s linear infinite;
            transform-origin: 50% 50%;
            animation-fill-mode: both;
          }
        `}</style>
      </section>
    </div>
  );
};

export default ServiceHeading;
