import React from 'react';
import img1 from '../../assets/Images/Portfolio/img1.jpg';
import img2 from '../../assets/Images/Portfolio/img2.jpg';
import img3 from '../../assets/Images/Portfolio/img3.jpg';

const Portfolio = () => {
  return (
    <section className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          Our Projects & Portfolio
        </h2>

        {/* Portfolio Images Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-items-center mb-12">
          {/* Image 1 */}
          <div className="w-[357px] h-[380px] overflow-hidden">
            <img
              src={img1}
              alt="Green fern leaves project"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Image 2 */}
          <div className="w-[357px] h-[380px] overflow-hidden">
            <img
              src={img2}
              alt="Mountain coastal city view project"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Image 3 */}
          <div className="w-[357px] h-[380px] overflow-hidden">
            <img
              src={img3}
              alt="Crystal ball forest reflection project"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Call to Action Button */}
        <div className="text-center">
          <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-medium transition-colors">
            Find more case studies
          </button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
