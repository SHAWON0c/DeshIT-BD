import React from "react";


import img1 from "../../assets/Images/Icons/DevelopmentSection/vector1.png";
import img2 from "../../assets/Images/Icons/DevelopmentSection/vector2.png";
import img3 from "../../assets/Images/Icons/DevelopmentSection/vector3.png";
import img4 from "../../assets/Images/Icons/DevelopmentSection/vector4.png";
import img5 from "../../assets/Images/Icons/DevelopmentSection/vector5.png";
import img6 from "../../assets/Images/Icons/DevelopmentSection/vector6.png";
import img7 from "../../assets/Images/Icons/DevelopmentSection/vector7.png";
import img8 from "../../assets/Images/Icons/DevelopmentSection/vector8.png";
import img9 from "../../assets/Images/Icons/DevelopmentSection/vector9.png";
import img10 from "../../assets/Images/Icons/DevelopmentSection/vector10.png";
import img11 from "../../assets/Images/Icons/DevelopmentSection/vector11.png";
import img12 from "../../assets/Images/Icons/DevelopmentSection/vector12.png";
import img13 from "../../assets/Images/Icons/DevelopmentSection/vector1.png";
import img14 from "../../assets/Images/Icons/DevelopmentSection/vector14.png";
import FadeInSection from "../../Components/FadeInSection";
import SmoothLetterFade from "../../Components/TypingEffect/SmoothLetterFade";

const SoftwareServices = () => {
  const cards = [
    { img: img1, title: "Mobile App Development", text: "Outsource your mobile development to our global team for user-friendly apps across iOS and Android. We ensure high performance, security, and scalability for applications that accelerate your time-to-market and reduce costs." },
    { img: img2, title: "Web Development", text: "Get a flexible web development team to craft responsive, secure websites using HTML, JavaScript, CSS, Angular, React, and more. We deliver high-quality, cost-effective solutions tailored to your needs." },
    { img: img3, title: "UI/UX Design", text: "Our talented UI/UX designers create engaging, user-centric interfaces. Behavioral design services ensure seamless user experiences for web and mobile products, enabling us development and enhancing user satisfaction." },
    { img: img4, title: "DevOps", text: "Outsource your DevOps to our expert team to streamline software delivery with automation and CI/CD. This approach reduces costs, accelerates deployment, and ensures consistent, high-quality delivery." },
    { img: img5, title: "Quality Assurance", text: "Our global QA team provides thorough testing services, including manual and automated checks. Outsourcing QA to our skilled professionals ensures high-quality software that meets user expectations." },
    { img: img6, title: "Cyber Security", text: "Protect your business with our robust cyber security services, covering vulnerability assessments, penetration testing, and security audits. Our comprehensive solutions safeguard your data and infrastructure." },
    { img: img7, title: "Salesforce", text: "Leverage our Salesforce development and customization with our skilled team to improve the leading CRM platform. We provide comprehensive solutions, efficiently enhancing your sales processes and customer engagement." },
    { img: img8, title: "Odoo", text: "Outsource your Odoo development to our offshore teams for implementation, customization, and support services. We help streamline your business operations and improve efficiency without the overhead of in-house teams." },
    { img: img9, title: "Magento", text: "Outsource your e-commerce development to optimize Magento platforms to drive sales and growth. Our skilled team delivers robust, performance-driven stores tailored to your business needs." },
    { img: img10, title: "Drupal", text: "Outsource your Drupal projects to our skilled team, which specializes in this powerful CMS. We provide comprehensive services, ensuring your site is well-managed and aligned with your business objectives." },
    { img: img11, title: "Ruby On Rails", text: "Utilize our offshore Ruby on Rails experts to build scalable, high-performance web applications. Our team delivers robust solutions that accelerate development and reduce costs while ensuring optimal performance." },
    { img: img12, title: "Node.JS Development", text: "Our offshore Node.js developers create fast, scalable applications with real-time capabilities. We deliver efficient server-side solutions using JavaScript and APIs while allowing you to focus on your core business." },
    { img: img13, title: "PHP Development", text: "Outsource your PHP development to our skilled team, which specializes in creating dynamic web applications. We deliver feature-rich websites that are secure, scalable, and cost-effective." },
    { img: img14, title: "Angular JS And ReactJS", text: "Leverage our offshore teams’ expertise in Angular JS and React JS for building dynamic, responsive web applications. Outsourcing ensures cutting-edge technology with a superior user experience at reduced development costs." },
  ];

  return (
    <div className="w-full flex justify-center items-center">
      <div className="w-full  mx-auto ">

        <SmoothLetterFade
          text="Software Development Services"
          delay={0.0}         // small stagger for letters
          tag="h2"             // renders as <h2>
          className="text-center text-xl font-semibold mb-20 text-gray-800"
        />


        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 place-items-center">
          {cards.map((card, index) => (
            <FadeInSection key={index} delay={index * 0.1}>
              <div className="flex flex-col items-center text-center w-full max-w-[291px] h-full min-h-[238px] p-4">
                <div className="w-6 h-6 mx-auto mb-6 bg-white flex items-center justify-center">
                  <img src={card.img} alt={card.title} />
                </div>
                <h3 className="font-semibold text-gray-800 mb-2">{card.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{card.text}</p>
              </div>
            </FadeInSection>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SoftwareServices;
