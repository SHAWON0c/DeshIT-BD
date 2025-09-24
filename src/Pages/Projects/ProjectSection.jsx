import React, { useEffect, useState } from "react";
import Card from "../../Components/Card/Card";
import GlobalSpinner from "../../Components/Spinner/GlobalSpinner";

import project1 from "../../assets/Images/Project/img-1.png";
import project2 from "../../assets/Images/Project/img-2.png";
import project3 from "../../assets/Images/Project/img-3.png";
import project4 from "../../assets/Images/Project/img-4.png";
import project5 from "../../assets/Images/Project/img-5.png";
import project6 from "../../assets/Images/Project/img-6.png";
import project7 from "../../assets/Images/Project/img-7.png";
import project8 from "../../assets/Images/Project/img-8.png";
import project9 from "../../assets/Images/Project/img-9.png";
import project10 from "../../assets/Images/Project/img-10.png";
import project11 from "../../assets/Images/Project/img-11.png";
import project12 from "../../assets/Images/Project/img-12.png";

const projectData = [
  { title: "Swoop News", image: project1 },
  { title: "Telefood", image: project2 },
  { title: "সহজ কুরআন শিক্ষা", image: project3 },
  { title: "Sleeptot-Baby White Noise", image: project4 },
  { title: "SBI General Secure", image: project5 },
  { title: "Cinebaz", image: project6 },
  { title: "My Tamimi App", image: project7 },
  { title: "Sole Retriever", image: project8 },
  { title: "Walliflex", image: project9 },
  { title: "Quiz Battle", image: project10 },
  { title: "German Language App ", image: project11 },
  { title: "TeQuip", image: project12 },
];

const ProjectSection = () => {
  const [visible, setVisible] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Show loader for 1.5 seconds (simulate data fetch)
    const loaderTimer = setTimeout(() => {
      setLoading(false);

      // Trigger staggered animation for each project card
      projectData.forEach((_, i) => {
        setTimeout(() => {
          setVisible((prev) => [...prev, i]);
        }, i * 300); // stagger interval in ms
      });
    }, 500);

    return () => clearTimeout(loaderTimer);
  }, []);

  return (
    <>
      {/* Global loader overlay */}
      <GlobalSpinner visible={loading} />

      {/* Project cards grid */}
      <div
        className={`mt-10 mb-24 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12 w-full max-w-[1200px] mx-auto transition-opacity duration-500 ${
          loading ? "opacity-0 pointer-events-none" : "opacity-100"
        }`}
      >
        {projectData.map((project, index) => (
          <div
            key={index}
            className="transform transition-all duration-[900ms]"
            style={{
              opacity: visible.includes(index) ? 1 : 0,
              transform: visible.includes(index)
                ? "translateY(0)"
                : "translateY(80px)",
              transitionTimingFunction: "cubic-bezier(0.22, 1, 0.36, 1)",
              transitionProperty: "opacity, transform",
            }}
          >
            <Card
              title={project.title}
              image={project.image}
              onClick={() => alert(`${project.title} clicked!`)}
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default ProjectSection;
