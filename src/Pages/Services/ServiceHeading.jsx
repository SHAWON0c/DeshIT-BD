"use client";

import { Zap, Crown, RefreshCcw, RotateCw, Figma, Code } from "lucide-react";
import { useEffect, useState } from "react";

const ServiceHeading = () => {
    const icons = [Zap, Figma, Crown, RefreshCcw, RotateCw, Code];
    const [containerSize, setContainerSize] = useState(450);

    useEffect(() => {
        const handleResize = () => {
            const vw = window.innerWidth;

            let width;
            if (vw < 768) {
                width = Math.min(350, vw * 0.7);
            } else {
                width = Math.min(405, vw * 0.6);
            }

            setContainerSize(width);
        };

        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const iconSize = containerSize * 0.09;
    // Reduce orbit radius to pull icons closer to center
    const radius = (containerSize - iconSize) / 2 + iconSize * 0.5;
    const center = containerSize / 2;


    return (
        <div className="flex flex-col items-center justify-center w-full mt-32 lg:mt-[227px] lg:max-h-[653px]">
            <section className="w-full">
                {/* Title + Circle */}
                <div className="w-full flex flex-col md:flex-row items-center ">
                    {/* Left content */}
                    <div className=" w-full max-w-[719px] text-center md:text-left  mx-auto md:mx-0 mb-0 md:mb-0">
                        <h2 className="text-center w-full max-w-[719px] p-0  text-2xl sm:text-3xl md:text-[72px] font-bold mb-4">
                            Software Development Outsourcing Services
                        </h2>
                        <p className=" text-center text-black lg:text-[24px] sm:text-base">
                            Expand your capabilities by hiring our expert developers. We deliver top-notch software outsourcing
                            solutions tailored to your needs while saving your time and resources.
                        </p>
                    </div>

                    {/* API Development Circle */}
                    <div
                        className="flex justify-center items-center relative ml-2 mt-12 md:mt-0  aspect-square w-full max-w-[407px] max-h-[445px]"
                        style={{
                            width: `${containerSize}px`,
                            height: `${containerSize}px`,
                            minWidth: "350px",
                            minHeight: "350px",
                            maxWidth: "405px",
                            maxHeight: "405px",
                            overflow: "visible", // Prevent icon clipping
                        }}
                    >
                        {/* Circle outline */}
                        <div className="absolute inset-0 rounded-full border border-gray-300"></div>

                        {/* Orbiting Icons */}
                        {icons.map((Icon, index) => {
                            const angle = (360 / icons.length) * index;
                            const delay = index * 1.5;

                            return (
                                <div
                                    key={index}
                                    className="absolute orbit"
                                    style={{
                                        width: `${iconSize}px`,
                                        height: `${iconSize}px`,
                                        top: `${center - iconSize / 2}px`,
                                        left: `${center - iconSize / 2}px`,
                                        animationDelay: `${delay}s`,
                                        transform: `rotate(${angle}deg) translateX(${radius}px) rotate(-${angle}deg)`,
                                    }}
                                >
                                    <div
                                        className="bg-black text-white rounded-full flex items-center justify-center w-full h-full"
                                    >
                                        <Icon size={iconSize * 0.6} />
                                    </div>
                                </div>
                            );
                        })}

                        {/* Center Text */}
                        <div className="absolute text-center px-4 sm:px-0">
                            <h2 className="font-bold text-[27px] sm:text-xl">API Development</h2>
                            <p className="text-sm sm:text-base text-gray-600">
                                APIs that Power Your Digital <br /> Ecosystem
                            </p>
                        </div>
                    </div>
                </div>

                {/* Services Section */}
                <div className="mt-20 px-4 ">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mb-16 justify-items-center">
                        {[
                            {
                                title: "Dedicated Team",
                                desc: "Our dedicated team service offers you a full-time, specialized team committed to your project. This model ensures focused expertise, quick turnaround times and seamless integration with your existing processes."
                            },
                            {
                                title: "Staff Augmentation",
                                desc: "With our staff augmentation services, you can temporarily extend your team with experienced professionals. This approach allows you to scale resources flexibly, reduce hiring overheads, and address skill gaps efficiently."
                            },
                            {
                                title: "End-to-End Project",
                                desc: "We manage your entire project from concept to completion with our end-to-end service. This comprehensive approach ensures accountability, reduces risks, and delivers a cohesive final product aligned with your business objectives."
                            }
                        ].map((service, idx) => (
                            <div
                                key={idx}
                                className="w-full sm:w-[90%] md:w-[326px] min-h-[174px] bg-white p-4 sm:p-5 md:p-[8px] border-l-2 border-red-500 flex flex-col justify-center"
                            >
                                <h3 className="text-[20px] sm:text-[22px] md:text-[24px] text-center font-bold text-[#141414] mb-2">
                                    {service.title}
                                </h3>
                                <p className="text-[14px] sm:text-[15px] md:text-[16px] text-center text-[#141414] leading-[1.4]">
                                    {service.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>


                {/* Orbit Animation Style */}
                <style jsx>{`
                    @keyframes orbit {
                        0% {
                            transform: rotate(0deg) translateX(${radius}px) rotate(0deg);
                        }
                        100% {
                            transform: rotate(360deg) translateX(${radius}px) rotate(-360deg);
                        }
                    }

                    .orbit {
                        animation: orbit 10s linear infinite;
                        transform-origin: 50% 50%;
                        animation-fill-mode: both;
                    }
                `}</style>
            </section>
        </div>
    );
};

export default ServiceHeading;
