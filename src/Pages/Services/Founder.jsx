import React from 'react';

const Founder = () => {
    return (
        <div className='w-full'>
            <div className="w-full mx-auto bg-gray-900 text-white py-8 px-6 rounded-lg">
      <div className="w-full mx-auto flex items-center justify-between flex-wrap gap-6">
        {/* Left side - Profile and text */}
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 rounded-full overflow-hidden">
            <img src="/avatar-1.png" alt="Fuad Bin Omar, COO" className="w-full h-full object-cover" />
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-1">Do not suffer novices, hire a skilled team!</h3>
            <p className="text-gray-400 text-sm">Fuad Bin Omar, COO</p>
            <button className="mt-2 bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors">
              📅 Book My Calendar
            </button>
          </div>
        </div>

        {/* Right side - Statistics */}
        <div className="flex gap-8 flex-wrap">
          <div className="text-center">
            <div className="text-3xl font-bold text-orange-500">16</div>
            <div className="text-sm text-gray-400">Years of Experience</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-orange-500">365</div>
            <div className="text-sm text-gray-400">Deliver Projects</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-orange-500">25</div>
            <div className="text-sm text-gray-400">Countries Served</div>
          </div>
        </div>
      </div>
    </div>
        </div>
    );
};

export default Founder;