import React, { useEffect, useState } from "react";
import img1 from '../../assets/Images/About/img1.png';
import img2 from '../../assets/Images/About/img2.png';
import GlobalSpinner from "../../Components/Spinner/GlobalSpinner"; // ✅ loader
import SlideInSection from "../../Components/Slider/SlideInSection";

export default function AboutSection() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loaderTimer = setTimeout(() => {
      setLoading(false);
    }, 500); // 0.5s loader
    return () => clearTimeout(loaderTimer);
  }, []);

  return (
    <div className="w-full">
      {/* Spinner overlay */}
      <GlobalSpinner visible={loading} />

      {/* Main About Section */}
      <section
        className={`bg-white py-16 md:px-12 lg:px-20 transition-opacity duration-500 ${
          loading ? "opacity-0 pointer-events-none" : "opacity-100"
        }`}
      >
        <div className="max-w-7xl px-6 lg:px-0 mx-auto">
          {/* DeshITBD & Simplifying Text */}
          <div className="w-full space-y-6">
            <SlideInSection direction="left">
              <h1 className="text-3xl md:text-4xl lg:text-[60px] font-bold text-[#1a365d] mb-4">
                DeshITBD
              </h1>
            </SlideInSection>

            <SlideInSection direction="left">
              <p
                className="text-2xl md:text-[40px] text-[#ff7a7a] font-medium uppercase"
                style={{ letterSpacing: "0.1em" }}
              >
                SIMPLIFYING COMPLEXITY THROUGH TECHNOLOGY
              </p>
            </SlideInSection>
          </div>

          {/* Paragraph and Image */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 mt-10">
            <SlideInSection direction="left">
              <p className="text-xl lg:text-2xl text-gray-600 leading-relaxed w-full md:w-auto lg:w-[950px] ">
                We, DeshITbd is a mobile application development startup in
                Bangladesh. We can develop apps from sketch to workable apps and
                bring them to the marketplace like Google Play. We have a
                full-stack mobile application development team consisting of
                system analysts, programmers, testers, deployment specialists, and
                database engineers. We have already launched several apps
                successfully. We also have some software products and our clients
                are using them using satisfaction. You will find our product here
                and project here.
              </p>
            </SlideInSection>

            {/* Image */}
            <SlideInSection direction="right">
              <div className="flex-shrink-0 w-full max-w-[375px]">
                <img
                  src={img1}
                  alt="Team collaboration illustration"
                  className="w-full h-auto"
                />
              </div>
            </SlideInSection>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section
        className={`px-6 md:px-12 lg:px-20 transition-opacity duration-500 ${
          loading ? "opacity-0 pointer-events-none" : "opacity-100"
        }`}
      >
        <div className="max-w-7xl mx-auto">
          <div className="max-w-[1051px] space-y-6">
            <SlideInSection direction="left">
              <h2 className="text-center text-3xl md:text-[70px] font-bold text-[#1a365d]">
                Mission
              </h2>
            </SlideInSection>
          </div>

          <div className="flex flex-col lg:flex-row items-start justify-between gap-8 mt-10">
            {/* Mission Text */}
            <SlideInSection direction="left">
              <p className="text-xl lg:text-2xl text-gray-600 leading-relaxed w-full md:w-auto lg:w-[950px] ">
                Our mission is to transform ideas into digital products and enable
                organizations to leverage technology for betterment. Our priority
                is to deliver impactful digital solutions with superior user
                experience. We build such a solution that can accelerate the
                growth of your business.
              </p>
            </SlideInSection>

            {/* Mission Image */}
            <SlideInSection direction="right">
              <div className="flex-shrink-0 w-full max-w-[375px]">
                <img
                  src={img2}
                  alt="Team collaboration illustration"
                  className="w-full h-auto"
                />
              </div>
            </SlideInSection>
          </div>
        </div>
      </section>

      {/* How We Work Section */}
      <section
        style={{ background: "linear-gradient(90deg, #FA7470 0%, #FA9370 100%)" }}
        className={`py-16 lg:mt-20 px-6 md:px-12 lg:px-20 transition-opacity duration-500 ${
          loading ? "opacity-0 pointer-events-none" : "opacity-100"
        }`}
      >
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-8">
            How we work
          </h2>

          <p className=" lg:text-2xl text-white leading-relaxed text-base mb-8">
            We believe in agile development. We manage our projects by following
            Scrum, the most popular widely practiced agile approach. Delivering
            working applications on budget, and on time is always our concern
            and Scrum enables us to manage our projects in such a way. Scope of
            flexibility and collaboration enable us to manage the resources
            effectively and deliver the quality product.
          </p>

          <button className="bg-white text-[#ff9999] hover:bg-gray-100 px-8 py-3 rounded-full font-medium">
            Free Consultation
          </button>
        </div>

        {/* Freeform label */}
        <div className="fixed bottom-4 right-4">
          <div className="bg-black text-white px-3 py-1 rounded text-sm font-medium">
            Freeform
          </div>
        </div>
      </section>
    </div>
  );
}
