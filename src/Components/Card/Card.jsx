import React from "react";

export default function Card({
    title,
    image,
    imageAlt = "",
    backgroundColor = "from-[#FA7B70] to-[#FA5A60]",
    className = "",
    onClick,
}) {
    return (
        <div
            className={`relative   overflow-visible transition-all duration-300 cursor-pointer group ${className}`}
            onClick={onClick}
        >
            {/* Image Section with gradient background */}
            <div
                className={`relative w-full lg:max-w-[364px] h-[227px] bg-gradient-to-br `}
            >
                {image && (
                    <img
                        src={image}
                        alt={imageAlt}
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 rounded-lg group-hover:scale-110"
                    />
                )}
            </div>

            {/* Centered Title Overlay */}
            <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 z-10">
                <div className=" w-[400px] sm:w-[300px] h-[60px]  flex flex-col justify-center bg-white rounded-xl shadow-md p-4 transition-all duration-300 group-hover:shadow-lg">
                    <div className="text-lg font-semibold text-blue-600 text-center">
                        <div className="relative inline-block overflow-hidden">
                            <span className="relative z-10 transition-colors duration-500 group-hover:text-blue-800 whitespace-nowrap overflow-hidden text-ellipsis">
                                {title}
                            </span>
                            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-500 group-hover:w-full"></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
