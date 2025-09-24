import React from 'react';

const technologies = [
  {
    title: 'Machine Learning',
    description: `We integrate machine learning into client projects to automate processes, predict outcomes, and
personalize user experiences. Our ML solutions drive business innovation, providing scalable solutions
that grow with your business.`,
  },
  {
    title: 'Blockchain',
    description: `Integrate blockchain to create secure, transparent systems that eliminate intermediaries and prevent
fraud. Our blockchain solutions enhance trust and improve operational efficiency by utilizing
decentralized ledgers and smart contracts.`,
  },
  {
    title: 'Big Data',
    description: `Utilize Big Data to analyze large volumes of information and gain actionable insights. Real-time analytics
and predictive modeling drive better decision-making and optimize operations, keeping your projects
competitive and efficient.`,
  },
  {
    title: 'Internet of Things (IoT)',
    description: `Leverage IoT to connect and manage devices, enabling real-time monitoring and automation. This technology
enhances operational efficiency and data-driven decision-making, ensuring your projects are smart and
responsive.`,
  },
  {
    title: 'Natural Language Processing',
    description: `Our experts use Natural Language Processing to create intelligent applications that understand and respond
to human language. From chatbots to sentiment analysis and data processing, we enhance user interactions
and improve efficiency in client projects.`,
  },
  {
    title: 'Facial Recognition',
    description: `We implement facial recognition technology to enhance security and user experience in various client
projects. This technology offers accurate identification and streamlined authentication, making your
applications secure and user-friendly.`,
  },
];

const TechnologySection = () => {
  return (
    <div className="w-full">
      <div className="w-full mx-auto">
        <div className="p-8">
          {/* Header */}
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Our Advanced Development Technology
            </h2>
            <p className="text-gray-700 mx-auto">
              Our advanced development technologies, including AI, machine learning, blockchain, and microservices, enable
              us to deliver innovative, future-proof solutions with exceptional efficiency and scalability.
            </p>
          </div>

          {/* Technology Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-[80px] mt-20">
            {technologies.map((tech, index) => (
              <div
                key={index}
                className="w-full max-w-[496px] h-full max-h-[242px]"
              >
                <h3 className="text-[40px] font-bold text-gray-900 mb-4">
                  {tech.title}
                </h3>
                <p className="text-gray-700 text-[20px]leading-relaxed mt-20 w-full h-[115px]">
                  {tech.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechnologySection;
