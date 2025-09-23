import React from 'react';
import ServiceHeading from './ServiceHeading';
import Founder from './Founder';
import SoftwareServices from './SoftwareServices';
import OutsorcingSection from './OutsorcingSection';
import SoftwareDevelopmentSection from './SoftwareDevelopmentSection';
import TechnologySection from './TechnologySection';
import Portfolio from './Portfolio';

const ServicesMain = () => {
    return (
        <div className="w-full max-w-[1120px] flex flex-col items-center justify-center gap-y-12 px-6 md:px-0 mx-auto">

            <ServiceHeading />
            <Founder />
            <SoftwareServices />
            <OutsorcingSection />
            <SoftwareDevelopmentSection />
            <TechnologySection />
            <Portfolio />
        </div>

    );
};

export default ServicesMain;