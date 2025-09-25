import { useEffect, useState } from "react";
import icon1 from "../../assets/Images/Icons/DevelopmentSection/icon1.png"
import icon2 from "../../assets/Images/Icons/DevelopmentSection/icon2.png"
import icon3 from "../../assets/Images/Icons/DevelopmentSection/icon1.png"
import icon4 from "../../assets/Images/Icons/DevelopmentSection/icon3.png"
import icon5 from "../../assets/Images/Icons/DevelopmentSection/icon4.png"
import icon6 from "../../assets/Images/Icons/DevelopmentSection/icon5.png"
import SlideInSection from "../../Components/Slider/SlideInSection";

const ServiceHeading = () => {
    const icons = [icon1, icon2, icon3, icon4, icon5, icon6];
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
    const radius = (containerSize - iconSize) / 2 + iconSize * 0.5;
    const center = containerSize / 2;

    return (
        <div className="flex flex-col items-center justify-center w-full mt-32 lg:mt-[227px] lg:max-h-[653px]">
            <section className="w-full">
                <div className="w-full flex flex-col md:flex-row justify-around">
                    {/* Left content */}
                    <SlideInSection direction="left">
                        <div className=" w-full max-w-[719px] text-center md:text-left mx-auto md:mx-0 mb-0 md:mb-0">
                            <h2 className="text-center w-full max-w-[719px] p-0 text-2xl sm:text-3xl md:text-[72px] font-bold mb-4">
                                Software Development Outsourcing Services
                            </h2>
                            <p className="text-center text-black lg:text-[24px] sm:text-base">
                                Expand your capabilities by hiring our expert developers. We deliver top-notch software outsourcing
                                solutions tailored to your needs while saving your time and resources.
                            </p>
                        </div>
                    </SlideInSection>

                    {/* API Development Circle */}
                    <SlideInSection direction="right">
                        <div
                            className="flex justify-center items-center relative ml-2 mt-12 md:mt-0 aspect-square w-full max-w-[407px] max-h-[445px]"
                            style={{
                                width: `${containerSize}px`,
                                height: `${containerSize}px`,
                                minWidth: "350px",
                                minHeight: "350px",
                                maxWidth: "405px",
                                maxHeight: "405px",
                                overflow: "visible",
                            }}
                        >
                            <div className="absolute inset-0 rounded-full border border-gray-300"></div>

                            {icons.map((item, index) => {
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
                                        <div className="bg-black text-white rounded-full flex items-center justify-center w-full h-full">
                                            <img
                                                src={item}
                                                alt="service icon"
                                                className="w-[60%] h-[60%] object-contain"
                                            />
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
                    </SlideInSection>
                </div>

                {/* Orbit Animation */}
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
