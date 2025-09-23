import React from 'react';

const OutsorcingSection = () => {


    const benefits = [
    {
      number: "01",
      title: "Cost Efficiency",
      description:
        "Outsourcing software development significantly cuts costs by leveraging talent from regions with lower living costs. This eliminates the need for in-house hiring, training, and infrastructure investments, allowing you to allocate resources more effectively.",
    },
    {
      number: "02",
      title: "Access to Expertise",
      description:
        "By outsourcing, you tap into a global pool of specialized developers with diverse skills and experience in your project. Whether you need expertise in emerging technologies or niche domains, outsourcing provides access to talent that may not be readily available in your local market.",
    },
    {
      number: "03",
      title: "Scalability",
      description:
        "Outsourcing offers the flexibility to scale your development team up or down based on project requirements. Whether you're looking to expand quickly or maintain efficiency, outsourcing eliminates the complexities of hiring or downsizing permanent staff.",
    },
    {
      number: "04",
      title: "Faster Time to Market",
      description:
        "With a dedicated outsourced team, you can accelerate your project timelines. Access to experienced developers, established workflows, and proven methodologies means faster completion and allowing you to bring your product to market sooner than if you were building an in-house team from scratch.",
    },
    {
      number: "05",
      title: "Focus on Core Business",
      description:
        "Outsourcing lets your internal team concentrate on core business activities while external experts handle the technical aspects. Your in-house team can focus on strategic initiatives, customer relationships, and business growth and innovation.",
    },
    {
      number: "06",
      title: "Risk Management",
      description:
        "Outsourcing can help mitigate risks associated with software development projects. Experienced outsourcing partners bring established processes, quality assurance practices, and project management expertise that can navigate potential challenges and can navigate them effectively, reducing the likelihood of project delays or budget overruns.",
    },
  ]
    return (
        <div>
    <div className="w-full mx-auto ">
      <div className="border-2 border-blue-500 p-8">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Benefits of Software Development Outsourcing</h2>
          <p className="text-gray-600 max-w-4xl mx-auto">
            Outsourcing software development cuts costs, gives you access to expert skills, and offers flexibility. It
            accelerates project timelines, minimizes risks, and introduces new global ideas to your work.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="text-left">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-orange-500 text-white rounded-lg flex items-center justify-center font-bold text-lg mr-3">
                  {benefit.number}
                </div>
                <h3 className="text-xl font-bold text-gray-900">{benefit.title}</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <div className="inline-block bg-gray-100 px-4 py-2 rounded text-gray-600">1120 × 674 Hug</div>
        </div>
      </div>
    </div>
        </div>
    );
};

export default OutsorcingSection;