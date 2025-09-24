import React from 'react';
import img1 from '../../assets/Images/Icons/DevelopmentSection/Frame.png'
const OutsorcingSection = () => {


    const benefits = [
    {
      icon:img1,
      title: "Cost Efficiency",
      description:
        "Outsourcing software development significantly cuts costs by leveraging talent from regions with lower living costs. This eliminates the need for in-house hiring, training, and infrastructure investments, allowing you to allocate resources more effectively.",
    },
    {
      icon:img1,
      title: "Access to Expertise",
      description:
        "By outsourcing, you tap into a global pool of specialized developers with diverse skills and experience in your project. Whether you need expertise in emerging technologies or niche domains, outsourcing provides access to talent that may not be readily available in your local market.",
    },
    {
      icon:img1,
      title: "Scalability",
      description:
        "Outsourcing offers the flexibility to scale your development team up or down based on project requirements. Whether you're looking to expand quickly or maintain efficiency, outsourcing eliminates the complexities of hiring or downsizing permanent staff.",
    },
    {
      icon:img1,
      title: "Faster Time to Market",
      description:
        "With a dedicated outsourced team, you can accelerate your project timelines. Access to experienced developers, established workflows, and proven methodologies means faster completion and allowing you to bring your product to market sooner than if you were building an in-house team from scratch.",
    },
    {
      icon:img1,
      title: "Focus on Core Business",
      description:
        "Outsourcing lets your internal team concentrate on core business activities while external experts handle the technical aspects. Your in-house team can focus on strategic initiatives, customer relationships, and business growth and innovation.",
    },
    {
      icon:img1,
      title: "Risk Management",
      description:
        "Outsourcing can help mitigate risks associated with software development projects. Experienced outsourcing partners bring established processes, quality assurance practices, and project management expertise that can navigate potential challenges and can navigate them effectively, reducing the likelihood of project delays or budget overruns.",
    },
  ]
    return (
        <div>
    <div className="w-full mx-auto ">
      <div className="mt-10">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Benefits of Software Development Outsourcing</h2>
          <p className="text-black font-light text-base lg:text-2xl mx-auto mb-20">
            Outsourcing software development cuts costs, gives you access to expert skills, and offers flexibility. It
            accelerates project timelines, minimizes risks, and introduces new global ideas to your work.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
  {benefits.map((benefit, index) => (
    <div key={index} className="text-left">
      <div className="flex gap-1 sm:gap-2 mb-4">
        <img
          src={benefit.icon}
          alt={benefit.title}
          className="w-10 h-10 sm:w-12 sm:h-12 object-contain"
        />
        <div>
          <h3 className="text-xl font-bold text-gray-900">{benefit.title}</h3>
          <p className="text-gray-600 leading-relaxed mt-3">{benefit.description}</p>
        </div>
      </div>
    </div>
  ))}
</div>

      </div>
    </div>
        </div>
    );
};

export default OutsorcingSection;