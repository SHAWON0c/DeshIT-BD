import React from 'react';
import pageMeta from "../../../Constant/pageMeta";

const Banner = () => {

    const { title, breadcrumbs } = pageMeta.singlePage;
    return (
        <div>
            <section className="page-banner pt-20">
                <div className="container">
                    <div className="page-title-wrapper">
                        <h1 className="gradual-text page-title dir-right">{title}</h1>

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
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    width="950px"
                    height="950px"
                    style={{
                        transform:
                            "translate3d(0px, 0px, 0px) rotateX(0deg) rotateY(0deg) rotateZ(0deg) scaleX(1) scaleY(1) scaleZ(1)",
                        WebkitTransform:
                            "translate3d(0px, 0px, 0px) rotateX(0deg) rotateY(0deg) rotateZ(0deg) scaleX(1) scaleY(1) scaleZ(1)",
                    }}
                >
                    <path
                        fillRule="evenodd"
                        stroke="rgb(250, 112, 112)"
                        strokeWidth="100px"
                        strokeLinecap="butt"
                        strokeLinejoin="miter"
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