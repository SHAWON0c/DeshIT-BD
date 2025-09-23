import React from 'react';

const SoftwareServices = () => {
    return (
        <div>
            <div className="w-full mx-auto ">
      <div className="border-2 border-blue-500 p-8">
        <h2 className="text-center text-xl font-semibold mb-8 text-gray-800">Software Development Services</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Mobile App Development */}
          <div className="text-center">
            <div className="w-12 h-12 mx-auto mb-4 bg-orange-100 rounded-lg flex items-center justify-center">
              <svg className="w-6 h-6 text-orange-500" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17 2H7c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM7 4h10v16H7V4z" />
              </svg>
            </div>
            <h3 className="font-semibold text-gray-800 mb-2">Mobile App Development</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Outsource your mobile development to our global team for user-friendly apps across iOS and Android. We
              ensure high performance, security, and scalability for applications that accelerate your time-to-market
              and reduce costs.
            </p>
          </div>

          {/* Web Development */}
          <div className="text-center">
            <div className="w-12 h-12 mx-auto mb-4 bg-orange-100 rounded-lg flex items-center justify-center">
              <svg className="w-6 h-6 text-orange-500" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
              </svg>
            </div>
            <h3 className="font-semibold text-gray-800 mb-2">Web Development</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Get a flexible web development team to craft responsive, secure websites using HTML, JavaScript, CSS,
              Angular, React, and more. We deliver high-quality, cost-effective solutions tailored to your needs.
            </p>
          </div>

          {/* UI/UX Design */}
          <div className="text-center">
            <div className="w-12 h-12 mx-auto mb-4 bg-orange-100 rounded-lg flex items-center justify-center">
              <svg className="w-6 h-6 text-orange-500" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
            </div>
            <h3 className="font-semibold text-gray-800 mb-2">UI/UX Design</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Our talented UI/UX designers create engaging, user-centric interfaces. Behavioral design services ensure
              seamless user experiences for web and mobile products, enabling us development and enhancing user
              satisfaction.
            </p>
          </div>

          {/* DevOps */}
          <div className="text-center">
            <div className="w-12 h-12 mx-auto mb-4 bg-orange-100 rounded-lg flex items-center justify-center">
              <svg className="w-6 h-6 text-orange-500" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
              </svg>
            </div>
            <h3 className="font-semibold text-gray-800 mb-2">DevOps</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Outsource your DevOps to our expert team to streamline software delivery with automation and CI/CD. This
              approach reduces costs, accelerates deployment, and ensures consistent, high-quality delivery.
            </p>
          </div>

          {/* Quality Assurance */}
          <div className="text-center">
            <div className="w-12 h-12 mx-auto mb-4 bg-orange-100 rounded-lg flex items-center justify-center">
              <svg className="w-6 h-6 text-orange-500" fill="currentColor" viewBox="0 0 24 24">
                <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
              </svg>
            </div>
            <h3 className="font-semibold text-gray-800 mb-2">Quality Assurance</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Our global QA team provides thorough testing services, including manual and automated checks. Outsourcing
              QA to our skilled professionals ensures high-quality software that meets user expectations.
            </p>
          </div>

          {/* Cyber Security */}
          <div className="text-center">
            <div className="w-12 h-12 mx-auto mb-4 bg-orange-100 rounded-lg flex items-center justify-center">
              <svg className="w-6 h-6 text-orange-500" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12,1L3,5V11C3,16.55 6.84,21.74 12,23C17.16,21.74 21,16.55 21,11V5L12,1M12,7C13.4,7 14.8,8.6 14.8,10V11H16V16H8V11H9.2V10C9.2,8.6 10.6,7 12,7M12,8.2C11.2,8.2 10.4,8.7 10.4,10V11H13.6V10C13.6,8.7 12.8,8.2 12,8.2Z" />
              </svg>
            </div>
            <h3 className="font-semibold text-gray-800 mb-2">Cyber Security</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Protect your business with our robust cyber security services, covering vulnerability assessments,
              penetration testing, and security audits. Our comprehensive solutions to safeguard your data and
              infrastructure.
            </p>
          </div>

          {/* Salesforce */}
          <div className="text-center">
            <div className="w-12 h-12 mx-auto mb-4 bg-orange-100 rounded-lg flex items-center justify-center">
              <svg className="w-6 h-6 text-orange-500" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
              </svg>
            </div>
            <h3 className="font-semibold text-gray-800 mb-2">Salesforce</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Leverage our Salesforce development and customization to our skilled team to improve the leading CRM
              platform. We provide comprehensive solutions, efficiently enhancing your sales processes and customer
              engagement.
            </p>
          </div>

          {/* Odoo */}
          <div className="text-center">
            <div className="w-12 h-12 mx-auto mb-4 bg-orange-100 rounded-lg flex items-center justify-center">
              <svg className="w-6 h-6 text-orange-500" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z" />
              </svg>
            </div>
            <h3 className="font-semibold text-gray-800 mb-2">Odoo</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Outsource your Odoo development to our offshore teams implementation, customization, and support services.
              We help streamline your business operations and improve efficiency without the overhead of in-house teams.
            </p>
          </div>

          {/* Magento */}
          <div className="text-center">
            <div className="w-12 h-12 mx-auto mb-4 bg-orange-100 rounded-lg flex items-center justify-center">
              <svg className="w-6 h-6 text-orange-500" fill="currentColor" viewBox="0 0 24 24">
                <path d="M2 17h20v2H2zm1.15-4.05L4 11l.85 1.95L6.7 11l1.85 1.95L10.4 11l1.85 1.95L14.1 11l1.85 1.95L17.8 11l1.85 1.95L21.5 11H23l-1.5 3.5L20 17H4l-1.5-2.5L1 11h1.5l.65 1.95z" />
              </svg>
            </div>
            <h3 className="font-semibold text-gray-800 mb-2">Magento</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Outsource your e-commerce development to optimize Magento e-commerce platforms to drive sales and growth.
              Our skilled team delivers robust, performance-driven store tailored to your business needs.
            </p>
          </div>

          {/* Drupal */}
          <div className="text-center">
            <div className="w-12 h-12 mx-auto mb-4 bg-orange-100 rounded-lg flex items-center justify-center">
              <svg className="w-6 h-6 text-orange-500" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
              </svg>
            </div>
            <h3 className="font-semibold text-gray-800 mb-2">Drupal</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Outsource your Drupal projects to our skilled team, which specializes in this powerful CMS. We provide
              comprehensive services, ensuring your site is well-managed and aligned with your business objectives.
            </p>
          </div>

          {/* Ruby On Rails */}
          <div className="text-center">
            <div className="w-12 h-12 mx-auto mb-4 bg-orange-100 rounded-lg flex items-center justify-center">
              <svg className="w-6 h-6 text-orange-500" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
              </svg>
            </div>
            <h3 className="font-semibold text-gray-800 mb-2">Ruby On Rails</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Utilize our offshore Ruby on Rails experts to build scalable, high-performance web applications. Our team
              delivers robust solutions that accelerate development and reduces costs while ensuring optimal
              performance.
            </p>
          </div>

          {/* Node.JS Development */}
          <div className="text-center">
            <div className="w-12 h-12 mx-auto mb-4 bg-orange-100 rounded-lg flex items-center justify-center">
              <svg className="w-6 h-6 text-orange-500" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
              </svg>
            </div>
            <h3 className="font-semibold text-gray-800 mb-2">Node.JS Development</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Our offshore Node.js developers create fast, scalable applications with real-time capabilities. We deliver
              efficient server-side solutions using JavaScript and APIs while allowing you to focus on your core
              business.
            </p>
          </div>

          {/* PHP Development */}
          <div className="text-center">
            <div className="w-12 h-12 mx-auto mb-4 bg-orange-100 rounded-lg flex items-center justify-center">
              <svg className="w-6 h-6 text-orange-500" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
              </svg>
            </div>
            <h3 className="font-semibold text-gray-800 mb-2">PHP Development</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Outsource your PHP development to our skilled team, which specializes in creating dynamic web
              applications. We deliver dynamic, feature-rich websites and secure, scalable, and cost-effective
              solutions.
            </p>
          </div>

          {/* Angular JS And ReactJS */}
          <div className="text-center">
            <div className="w-12 h-12 mx-auto mb-4 bg-orange-100 rounded-lg flex items-center justify-center">
              <svg className="w-6 h-6 text-orange-500" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
              </svg>
            </div>
            <h3 className="font-semibold text-gray-800 mb-2">Angular JS And ReactJS</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Leverage our offshore teams expertise in Angular JS and React JS for building dynamic, responsive web
              applications. Outsourcing ensures cutting-edge technology with a superior user experience at reduced
              development costs.
            </p>
          </div>
        </div>
      </div>
    </div>
        </div>
    );
};

export default SoftwareServices;