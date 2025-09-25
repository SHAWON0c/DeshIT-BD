import React from 'react';
import undp from '../../assets/Images/Companies/img-1.png';
import ict from '../../assets/Images/Companies/img-2.png';
import telenor from '../../assets/Images/Companies/img-3.png';
import nokia from '../../assets/Images/Companies/img-4.png';
import vivo from '../../assets/Images/Companies/img-5.png';
import SlideInSection from '../../Components/Slider/SlideInSection';

const TrustedCompaniesSection = () => {
    const logos = [
        { src: undp, alt: 'UNDP' },
        { src: ict, alt: 'ICT' },
        { src: telenor, alt: 'Telenor' },
        { src: nokia, alt: 'Nokia' },
        { src: vivo, alt: 'Vivo' },
    ];

    return (
        <div className="w-full">
            <div className="w-full bg-white py-2 sm:py-4 flex flex-col justify-start">
                {/* Top Text */}
                <h4 className="text-center text-black font-bold text-xs sm:text-sm md:text-base lg:text-lg leading-tight mb-4 sm:mb-6 md:mb-8">
                    Trusted By 100+ Companies including
                </h4>

                {/* Logos */}
                <div className="flex items-center justify-around gap-2 sm:gap-2 md:gap-6 lg:gap-8 flex-wrap overflow-hidden">
                    {logos.map((logo, index) => (
                        <SlideInSection key={index} direction="right">
                            <img
                                className="h-3 sm:h-8 md:h-10 lg:h-[40px] object-contain"
                                src={logo.src}
                                alt={logo.alt}
                            />
                        </SlideInSection>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default TrustedCompaniesSection;
