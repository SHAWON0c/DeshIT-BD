import React from "react";
import founder from "../../assets/Images/Author/founder.png";
import icon from "../../assets/Images/Icons/Founder-section/img-1.png";
import Counter from "../../Components/Counter/Counter"; // universal counter

const Founder = () => {
  return (
    <div className="w-full mt-20 mb-10">
      <div className="w-full mx-auto bg-gray-900 text-white py-8 px-6 ">
        <div className="max-w-[1120px] mx-auto flex items-center justify-between flex-wrap gap-6">
          {/* Left side */}
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-full overflow-hidden">
              <img
                src={founder}
                alt="Fuad Bin Omar, COO"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-1">
                Do not suffer novices, hire a skilled team!
              </h3>
              <p className="text-gray-400 text-sm">Fuad Bin Omar, COO</p>
              <h2 className="mt-2 text-orange-500 rounded-md text-sm font-medium flex flex-row gap-2 items-center">
                <span>
                  <img src={icon} alt="" />
                </span>
                Book My Calendar
              </h2>
            </div>
          </div>

          {/* Right side - Statistics */}
          <div className="flex gap-8 flex-wrap">
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-500">
                <Counter end={16} duration={2000} />
              </div>
              <div className="text-sm text-gray-400">Years of Experience</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-500">
                <Counter end={365} duration={2500} />
              </div>
              <div className="text-sm text-gray-400">Deliver Projects</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-500">
                <Counter end={25} duration={2200} />
              </div>
              <div className="text-sm text-gray-400">Countries Served</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Founder;
