import React from "react"
import img1 from '../../assets/Images/About/img1.png'
import img2 from '../../assets/Images/About/img2.png'
export default function AboutSection() {
  return (
    <div className="w-full">
      {/* Main About Section */}
      <section className="bg-white py-16 px-6 md:px-12 lg:px-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div>
                <h1 className="text-4xl md:text-5xl font-bold text-[#1a365d] mb-4">DeshITBD</h1>
                <p className="text-lg text-[#ff7a7a] font-medium tracking-wide uppercase">
                  SIMPLIFYING COMPLEXITY THROUGH TECHNOLOGY
                </p>
              </div>

              <p className="text-gray-600 leading-relaxed text-base">
                We, DeshITbd is a mobile application development startup in Bangladesh. We can develop apps from sketch
                to workable apps and bring them to the marketplace like Google Play. We have a full-stack mobile
                application development team consisting of system analysts, programmers, testers, deployment
                specialists, and database engineers. We have already launched several apps successfully. We also have
                some software products and our clients are using them using satisfaction. You will find our product here
                and project here.
              </p>
            </div>

            <div className="flex justify-center">
              <img
                src={img1}
                alt="Team collaboration illustration"
                className="w-full max-w-md h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="bg-gray-50 py-16 px-6 md:px-12 lg:px-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-bold text-[#1a365d]">Mission</h2>

              <p className="text-gray-600 leading-relaxed text-base">
                Our mission is to transform ideas into digital products and enable organizations to leverage technology
                for betterment. Our priority is to deliver impactful digital solutions with superior user experience. We
                build such a solution that can accelerate the growth of your business.
              </p>
            </div>

            <div className="flex justify-center">
              <img src={img2} alt="Mission target illustration" className="w-48 h-48" />
            </div>
          </div>
        </div>
      </section>

      {/* How We Work Section */}
      <section className="bg-[#ff9999] py-16 px-6 md:px-12 lg:px-20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">How we work</h2>

          <p className="text-white leading-relaxed text-base mb-8">
            We believe in agile development. We manage our projects by following Scrum, the most popular widely
            practiced agile approach. Delivering working applications on budget, and on time is always our concern and
            Scrum enables us to manage our projects in such a way. Scope of flexibility and collaboration enable us to
            manage the resources effectively and deliver the quality product.
          </p>

          <button className="bg-white text-[#ff9999] hover:bg-gray-100 px-8 py-3 rounded-full font-medium">
            Free Consultation
          </button>
        </div>

        {/* Freeform label */}
        <div className="fixed bottom-4 right-4">
          <div className="bg-black text-white px-3 py-1 rounded text-sm font-medium">Freeform</div>
        </div>
      </section>
    </div>
  )
}
