// TestimonialSection.jsx
import React, { useState, useEffect } from "react";
import img1 from '../../assets/Images/Author/client.png'
const testimonials = [
  {
    text: "Everything went extremely well. My project was fairly complex and required Nascenia to investigate new technologies/APIs. They succeeded with flying colors and I can’t wait to get started on another project. I was very impressed with their communication and willingness to move directions slightly. The code produced was excellent. Fantastic team!",
    name: "Patrick Stockwell",
    role: "Founder, Volta Inc. San Francisco Bay Area, USA",
    project: "Project: Baller ID",
    image:img1, // replace with real image
  },
  {
    text: "The team exceeded our expectations. They delivered on time and provided continuous updates throughout the development cycle. Their expertise helped us overcome challenges smoothly.",
    name: "Sarah Lee",
    role: "CTO, InnovateX, UK",
    project: "Project: AI Dashboard",
    image: "https://i.pravatar.cc/100?img=2",
  },
  {
    text: "Nascenia's dedication and technical skills are impressive. They quickly adapted to changes and ensured quality in every deliverable. I would highly recommend working with them!",
    name: "David Kim",
    role: "Product Manager, TechWorld, Canada",
    project: "Project: Fintech App",
    image: "https://i.pravatar.cc/100?img=3",
  },
];

const TestimonialSection = () => {
  const [current, setCurrent] = useState(0);

  // auto-slide every 5s
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="w-full bg-white py-12 ">
      <div className="w-full mx-auto text-center">
        {/* Heading */}
        <h2 className="text-xl md:text-2xl font-bold mb-2">Clients Testimonials</h2>
        <p className="text-gray-600 text-sm md:text-base mb-8">
          We Measure Success Through Client Satisfaction.{" "}
          <span className="font-bold">Words from Our Clients</span>
        </p>

        {/* Slider */}
        <div className="overflow-hidden relative">
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${current * 100}%)` }}
          >
            {testimonials.map((t, idx) => (
              <div
                key={idx}
                className="w-full flex-shrink-0 flex flex-col items-center"
              >
                {/* Client Image */}
                <img
                  src={t.image}
                  alt={t.name}
                  className="w-16 h-16 rounded-md object-cover mb-4"
                />

                {/* Testimonial Box */}
                <div className="border-2 border-dashed border-gray-400 rounded-lg p-6 mb-4">
                  <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                    {t.text}
                  </p>
                </div>

                {/* Client Info */}
                <p className="text-xs md:text-sm text-gray-800 font-semibold">
                  {t.name}
                  <span className="font-normal text-gray-600">
                    , {t.role}, {t.project}
                  </span>
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Slider Dots */}
        <div className="flex justify-center mt-4 space-x-2">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrent(idx)}
              className={`w-3 h-3 rounded-full ${current === idx ? "bg-orange-500" : "bg-gray-300"
                }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
