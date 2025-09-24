import React from 'react';
import undp from '../../assets/Images/Companies/img-1.png';
import ict from '../../assets/Images/Companies/img-2.png';
import telenor from '../../assets/Images/Companies/img-3.png';
import nokia from '../../assets/Images/Companies/img-4.png';
import vivo from '../../assets/Images/Companies/img-5.png';

const TrustedCompaniesSection = () => {
    return (
        <div className="w-full">
            <div className="w-full h-[122px] bg-white  px-4 sm:px-8 py-2 flex flex-col justify-start">
                
                {/* Top Text */}
                <h4 className="text-center text-black font-bold text-sm sm:text-base leading-none mb-8">
                    Trusted By 100+ Companies including
                </h4>

                {/* Logos */}
                <div className="flex items-center justify-center gap-4 sm:gap-6 flex-wrap overflow-hidden">
                    <img className="h-[40px] sm:h-[50px] object-contain" src={undp} alt="UNDP" />
                    <img className="h-[40px] sm:h-[50px] object-contain" src={ict} alt="ICT" />
                    <img className="h-[40px] sm:h-[50px] object-contain" src={telenor} alt="Telenor" />
                    <img className="h-[40px] sm:h-[50px] object-contain" src={nokia} alt="Nokia" />
                    <img className="h-[40px] sm:h-[50px] object-contain" src={vivo} alt="Vivo" />
                </div>
            </div>
        </div>
    );
};

export default TrustedCompaniesSection;
