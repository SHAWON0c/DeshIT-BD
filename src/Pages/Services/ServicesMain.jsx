import React, { useEffect, useState } from "react";
import ServiceHeading from "./ServiceHeading";
import Founder from "./Founder";
import SoftwareServices from "./SoftwareServices";
import OutsorcingSection from "./OutsorcingSection";
import SoftwareDevelopmentSection from "./SoftwareDevelopmentSection";
import TechnologySection from "./TechnologySection";
import Portfolio from "./Portfolio";
import TrustedCompaniesSection from "./TrustedCompaniesSection";
import GlobalSpinner from "../../Components/Spinner/GlobalSpinner"; // Import GlobalSpinner
import TestimonialSection from "./TestimonialSection";

const ServicesMain = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Show loader for 0.5 seconds (simulate fetching data or just for effect)
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
        className={`transition-opacity duration-500 ${
          loading ? "opacity-0 pointer-events-none" : "opacity-100"
        }`}
      >
        {/* Constrained section */}
        <div className="w-full max-w-[1120px] flex flex-col items-center justify-center gap-y-12 px-4 sm:px-6 md:px-8 lg:px-0 mx-auto">
          <ServiceHeading />
          <TrustedCompaniesSection />
        </div>

        {/* Full-width Founder section */}
        <Founder />

        {/* Back to constrained layout */}
        <div className="w-full max-w-[1120px] flex flex-col items-center justify-center gap-y-12 px-4 sm:px-6 md:px-8 lg:px-0 mx-auto">
          <SoftwareServices />
          <OutsorcingSection />
          <SoftwareDevelopmentSection />
          <TechnologySection />
          <Portfolio />
          <TestimonialSection />
        </div>
      </div>
    </>
  );
};

export default ServicesMain;
