import React from 'react';
import { useLocation } from 'react-router-dom';
import pageMeta from "../../../Constant/pageMeta";
import SmoothLetterFade from '../../../Components/TypingEffect/SmoothLetterFade';

const Banner = () => {
    const location = useLocation();
    const path = location.pathname;

    // ❌ Don't render banner on services page
    if (path === "/services") {
        return null;
    }
    if (path === "/contact") {
        return null;
    }



    // ✅ Set page key based on path
    let pageKey = "home"; // default to home

    if (path.includes("/product")) {
        pageKey = "product";
    }
    else if (path.includes("/projects")) {
        pageKey = "projects";

    }
    else if (path.includes("/training")) {
        pageKey = "training";
    }

    else if (path.includes("/company")) {
        pageKey = "company";
    }
    // Add more conditions as needed
    // else if (path.includes("/about")) {
    //     pageKey = "about";
    // }

    const { title, breadcrumbs } = pageMeta[pageKey] || { title: "", breadcrumbs: [] };

    return (
        <div>
            <section className="page-banner pt-20">
                <div className="container">
                    <div className="page-title-wrapper">
                        <SmoothLetterFade
                        
                        text={title} 
                        delay={0.1}
                        key={`${path}-${title}`}
                        tag="h1"
                        className="gradual-text page-title dir-right"></SmoothLetterFade>

                        <ul className="bradcurmed">
                            {breadcrumbs.map((crumb, index) => (
                                <li key={index}>
                                    {crumb.href ? (
                                        <a href={crumb.href} rel="noopener noreferrer">
                                            {crumb.label}
                                        </a>
                                    ) : (
                                        crumb.label
                                    )}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <svg
                    className="circle"
                    data-parallax='{"x" : -200}'
                    xmlns="http://www.w3.org/2000/svg"
                    width="950px"
                    height="950px"
                    style={{
                        transform: "translate3d(0px, 0px, 0px)",
                        WebkitTransform: "translate3d(0px, 0px, 0px)",
                    }}
                >
                    <path
                        fillRule="evenodd"
                        stroke="rgb(250, 112, 112)"
                        strokeWidth="100px"
                        opacity="0.25"
                        fill="none"
                        d="M450.000,50.000 C670.914,50.000 850.000,229.086 850.000,450.000 C850.000,670.914 670.914,850.000 450.000,850.000 C229.086,850.000 50.000,670.914 50.000,450.000 C50.000,229.086 229.086,50.000 450.000,50.000 Z"
                    />
                </svg>

                <ul className="animate-ball">
                    <li className="ball"></li>
                    <li className="ball"></li>
                    <li className="ball"></li>
                    <li className="ball"></li>
                    <li className="ball"></li>
                </ul>
            </section>
        </div>
    );
};

export default Banner;
