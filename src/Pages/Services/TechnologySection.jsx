import React from 'react';

const TechnologySection = () => {
    return (
        <div className='w-full'>
            <div className="w-full max-w-6xl mx-auto ">
      <div className="border-2 border-blue-500 p-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Advanced Development Technology</h2>
          <p className="text-gray-700 max-w-4xl mx-auto">
            Our advanced development technologies, including AI, machine learning, blockchain, and microservices, enable
            us to deliver innovative, future-proof solutions with exceptional efficiency and scalability.
          </p>
        </div>

        {/* Technology Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
          {/* Machine Learning */}
          <div className="border border-gray-300 p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Machine Learning</h3>
            <p className="text-gray-700 text-sm leading-relaxed">
              We integrate machine learning into client projects to automate processes, predict outcomes, and
              personalize user experiences. Our ML solutions drive business innovation, providing scalable solutions
              that grow with your business.
            </p>
          </div>

          {/* Blockchain */}
          <div className="border border-gray-300 p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Blockchain</h3>
            <p className="text-gray-700 text-sm leading-relaxed">
              Integrate blockchain to create secure, transparent systems that eliminate intermediaries and prevent
              fraud. Our blockchain solutions enhance trust and improve operational efficiency by utilizing
              decentralized ledgers and smart contracts.
            </p>
          </div>

          {/* Big Data */}
          <div className="border border-gray-300 p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Big Data</h3>
            <p className="text-gray-700 text-sm leading-relaxed">
              Utilize Big Data to analyze large volumes of information and gain actionable insights. Real-time analytics
              and predictive modeling drive better decision-making and optimize operations, keeping your projects
              competitive and efficient.
            </p>
          </div>

          {/* Internet of Things (IoT) */}
          <div className="border border-gray-300 p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Internet of Things (IoT)</h3>
            <p className="text-gray-700 text-sm leading-relaxed">
              Leverage IoT to connect and manage devices, enabling real-time monitoring and automation. This technology
              enhances operational efficiency and data-driven decision-making, ensuring your projects are smart and
              responsive.
            </p>
          </div>

          {/* Natural Language Processing */}
          <div className="border border-gray-300 p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Natural Language Processing</h3>
            <p className="text-gray-700 text-sm leading-relaxed">
              Our experts use Natural Language Processing to create intelligent applications that understand and respond
              to human language. From chatbots to sentiment analysis and data processing, we enhance user interactions
              and improve efficiency in client projects.
            </p>
          </div>

          {/* Facial Recognition */}
          <div className="border border-gray-300 p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Facial Recognition</h3>
            <p className="text-gray-700 text-sm leading-relaxed">
              We implement facial recognition technology to enhance security and user experience in various client
              projects. This technology offers accurate identification and streamlined authentication, making your
              applications secure and user-friendly.
            </p>
          </div>
        </div>
      </div>
    </div>
        </div>
    );
};

export default TechnologySection;