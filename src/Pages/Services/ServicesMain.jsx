import React, { useEffect, useState } from "react";
import ServiceHeading from "./ServiceHeading";
import Founder from "./Founder";
import SoftwareServices from "./SoftwareServices";
import OutsorcingSection from "./OutsorcingSection";
import SoftwareDevelopmentSection from "./SoftwareDevelopmentSection";
import TechnologySection from "./TechnologySection";
import Portfolio from "./Portfolio";
import TrustedCompaniesSection from "./TrustedCompaniesSection";
import GlobalSpinner from "../../Components/Spinner/GlobalSpinner";
import TestimonialSection from "./TestimonialSection";

const ServicesMain = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* Loader overlay */}
      <GlobalSpinner visible={loading} />

      {/* Main content, fade in when loading is done */}
      <div
        className={` bg-[#B79F9F]transition-opacity duration-500 ${
          loading ? "opacity-0 pointer-events-none" : "opacity-100"
        }`}
      >
        {/* Constrained section */}
    <div className="px-2 md:px-2 lg:px-0">
          <div className="w-full max-w-[1120px] flex flex-col items-center justify-center gap-y-12 px-10 lg:px-0 mx-auto">
          <ServiceHeading />
          <TrustedCompaniesSection />
        </div>
    </div>

        {/* 💡 Founder - Full width with no padding */}
        <div className="w-full">
          <Founder />
        </div>

        {/* Back to constrained layout */}
        <div className="px-2 md:px-2 lg:px-0">
          <div className="w-full max-w-[1120px] flex flex-col items-center justify-center gap-y-12 px-4 lg:px-0 mx-auto">
          <SoftwareServices />
          <OutsorcingSection />
          <SoftwareDevelopmentSection />
          <TechnologySection />
          <Portfolio />
          <TestimonialSection />
        </div>
        </div>
      </div>
    </>
  );
};

export default ServicesMain;
