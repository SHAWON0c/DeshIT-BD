import React from "react";
import { Zap, Crown, RefreshCcw, RotateCw, Figma, Code } from "lucide-react";

const ServiceHeading = () => {
  const icons = [Zap, Figma, Crown, RefreshCcw, RotateCw, Code];
  const containerSize = 450;
  const radius = containerSize / 2 - 30; // reduce 30px so icons don't overflow
  const center = containerSize / 2;

  return (
    <section className="bg-white py-12 px-6 md:px-20">
      {/* Title */}
      <div className="text-center max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Software Development <br /> Outsourcing Services
        </h2>
        <p className="text-gray-600">
          Expand your capabilities by hiring our expert developers. We deliver
          top-notch software outsourcing solutions tailored to your needs while
          saving your time and resources.
        </p>
        <button className="mt-6 bg-blue-500 text-white px-6 py-2 rounded-md shadow hover:bg-blue-600 transition">
          719 Fill × 84 Hug
        </button>
      </div>

      {/* API Development Circle */}
      <div
        className="flex justify-center items-center relative mx-auto mt-12"
        style={{ height: containerSize, width: containerSize }}
      >
        {/* Circle Outline */}
        <div className="absolute h-full w-full rounded-full border border-gray-300"></div>

        {/* Icons */}
        {icons.map((Icon, index) => {
          const angle = (index / icons.length) * 2 * Math.PI; 
          // divide circle evenly
          const radius = containerSize / 2;
          const x = center + radius * Math.cos(angle) - 20; // center icon horizontally
          const y = center + radius * Math.sin(angle) - 20; // center icon vertically

          return (
            <div
              key={index}
              className="absolute bg-black text-white rounded-full p-2"
              style={{ left: `${x}px`, top: `${y}px` }}
            >
              <Icon size={24} />
            </div>
          );
        })}

        {/* Center Text */}
        <div className="absolute text-center">
          <h2 className="font-bold text-lg">API Development</h2>
          <p className="text-sm text-gray-600">APIs that Power Your Digital Ecosystem</p>
        </div>
      </div>

      {/* Services Row */}
      <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto text-center mt-12">
        <div>
          <h4 className="font-semibold text-lg mb-2">Dedicated Team</h4>
          <p className="text-gray-600 text-sm">
            Our dedicated team offers you a full-time, specialized team committed to your projects...
          </p>
        </div>
        <div>
          <h4 className="font-semibold text-lg mb-2">Staff Augmentation</h4>
          <p className="text-gray-600 text-sm">
            With our staff augmentation services, you can temporarily extend your team...
          </p>
        </div>
        <div>
          <h4 className="font-semibold text-lg mb-2">End-to-End Project</h4>
          <p className="text-gray-600 text-sm">
            We manage your entire project from concept to completion with our end-to-end services...
          </p>
        </div>
      </div>

      {/* Logos */}
      <div className="mt-12 text-center">
        <p className="text-gray-500 mb-6">Trusted By 100+ Companies including</p>
        <div className="flex flex-wrap justify-center gap-8 opacity-80">
          <img src="/logos/undp.png" alt="UNDP" className="h-8" />
          <img src="/logos/itc.png" alt="ITC" className="h-8" />
          <img src="/logos/telenor.png" alt="Telenor" className="h-8" />
          <img src="/logos/nokia.png" alt="Nokia" className="h-8" />
          <img src="/logos/vivo.png" alt="Vivo" className="h-8" />
        </div>
      </div>
    </section>
  );
};

export default ServiceHeading;
