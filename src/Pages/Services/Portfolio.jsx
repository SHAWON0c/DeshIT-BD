import React from 'react';

const Portfolio = () => {
    return (
        <div>
            <section className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Our Projects & Portfolio</h2>

        {/* Portfolio Images Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {/* Fern Image */}
          <div className="aspect-[4/3] overflow-hidden rounded-lg">
            <img
              src="/green-fern-leaves-against-dark-background.jpg"
              alt="Green fern leaves project"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Mountain/City View Image */}
          <div className="aspect-[4/3] overflow-hidden rounded-lg">
            <img
              src="/scenic-mountain-cliff-view-overlooking-coastal-cit.jpg"
              alt="Mountain coastal city view project"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Crystal Ball Forest Image */}
          <div className="aspect-[4/3] overflow-hidden rounded-lg">
            <img
              src="/hand-holding-crystal-ball-reflecting-upside-down-f.jpg"
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
        </div>
    );
};

export default Portfolio;