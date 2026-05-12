import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  BadgeCheck,
  BrainCircuit,
  CheckCircle2,
  ClipboardCheck,
  Code2,
  Cpu,
  Film,
  Globe2,
  Handshake,
  Laptop,
  Layers3,
  LineChart,
  LockKeyhole,
  MonitorCog,
  Rocket,
  ShieldCheck,
  Smartphone,
  Star,
  UsersRound,
  Workflow,
} from "lucide-react";
import FadeInSection from "../../../Components/FadeInSection";
import SlideInSection from "../../../Components/Slider/SlideInSection";
import SmoothLetterFade from "../../../Components/TypingEffect/SmoothLetterFade";
import Counter from "../../../Components/Counter/Counter";
import GlobalSpinner from "../../../Components/Spinner/GlobalSpinner";
import TrustedCompaniesSection from "../../Services/TrustedCompaniesSection";
import heroImage from "../../../assets/Images/Contact/img.png";
import aboutImage from "../../../assets/Images/About/img1.png";
import product1 from "../../../assets/Images/Product/product-1.png";
import product2 from "../../../assets/Images/Product/product-2.png";
import product3 from "../../../assets/Images/Product/product-3.png";

const metrics = [
  { value: 7, suffix: "+", label: "Years of experience" },
  { value: 130, suffix: "+", label: "Projects delivered" },
  { value: 14, suffix: "+", label: "Countries served" },
  { value: 18, suffix: "+", label: "Developers" },
];

const engagementModels = [
  {
    title: "Dedicated Team",
    Icon: UsersRound,
    text: "A focused team works with your product goals, delivery rhythm, and internal process as a long-term technical partner.",
  },
  {
    title: "Staff Augmentation",
    Icon: Handshake,
    text: "Add skilled engineers, designers, QA specialists, and technical talent to your existing team without slowing hiring cycles.",
  },
  {
    title: "Project Delivery",
    Icon: Rocket,
    text: "From idea to release, we manage planning, design, engineering, testing, and launch with clear ownership.",
  },
];

const values = [
  {
    title: "Accountability",
    Icon: BadgeCheck,
    text: "We take ownership of delivery quality and keep business outcomes at the center of every decision.",
  },
  {
    title: "Transparency",
    Icon: Layers3,
    text: "You get clear updates, practical timelines, and honest communication throughout the project.",
  },
  {
    title: "Confidentiality",
    Icon: LockKeyhole,
    text: "Your idea, data, and product strategy stay protected with careful team practices.",
  },
  {
    title: "Partnership",
    Icon: Handshake,
    text: "We work as an extension of your team, not just a vendor finishing tickets.",
  },
];

const services = [
  {
    title: "UI/UX Design",
    Icon: Layers3,
    text: "Product interfaces shaped for clarity, conversion, and everyday usability.",
  },
  {
    title: "Web Development",
    Icon: Globe2,
    text: "Fast, scalable, secure web applications built around your business workflow.",
  },
  {
    title: "Mobile Development",
    Icon: Smartphone,
    text: "Native and cross-platform apps designed for reliable performance across devices.",
  },
  {
    title: "Artificial Intelligence",
    Icon: BrainCircuit,
    text: "AI, automation, NLP, computer vision, and data-driven tools for smarter operations.",
  },
  {
    title: "Quality Assurance",
    Icon: ClipboardCheck,
    text: "Structured testing that improves stability, security, performance, and release confidence.",
  },
  {
    title: "Cyber Security",
    Icon: ShieldCheck,
    text: "Security-minded engineering to help protect products, infrastructure, and users.",
  },
  {
    title: "Custom Software",
    Icon: Code2,
    text: "Tailored software systems for portals, CRM, ERP, POS, SaaS, CMS, LMS, and operations.",
  },
  {
    title: "IoT & Automation",
    Icon: Cpu,
    text: "Connected devices, monitoring systems, and automation for homes, offices, and industries.",
  },
  {
    title: "Digital Growth",
    Icon: LineChart,
    text: "Marketing support, commercial video, content, SEO, campaigns, and analytics for growth.",
  },
];

const technologies = [
  "ReactJS",
  "NodeJS",
  "Laravel",
  "Django",
  "React Native",
  "Flutter",
  "Spring Boot",
  "Ruby on Rails",
  "DevOps",
  "CMS",
  "Artificial Intelligence",
  "Cloud",
];

const specializations = [
  "Portal",
  "E-Commerce",
  "Brand Website",
  "SaaS",
  "CRM",
  "ERP",
  "POS",
  "CMS",
  "LMS",
];

const products = [
  { title: "Gym Management System", image: product1 },
  { title: "E-commerce Dashboard", image: product2 },
  { title: "POS Inventory App", image: product3 },
];

const testimonials = [
  {
    quote:
      "Their team brings technical strength, reliability, and the kind of proactive communication that makes complex projects easier to run.",
    name: "Rob Flessner",
    role: "CEO / Co-Founder",
  },
  {
    quote:
      "They turn complex ideas into scalable products and work like a genuine extension of the business.",
    name: "Landon Morales",
    role: "Founder",
  },
  {
    quote:
      "A dependable technology partner with strong engineering discipline and a clear understanding of business goals.",
    name: "Daniel Banu",
    role: "CEO & Founder",
  },
];

const Home = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <GlobalSpinner visible={loading} />

      <main
        className={`bg-white transition-opacity duration-500 ${
          loading ? "opacity-0 pointer-events-none" : "opacity-100"
        }`}
      >
        <section className="relative overflow-hidden bg-[#FDF8F8] pt-28 pb-16 md:pt-32 lg:pt-36 md:pb-24">
          <div className="max-w-7xl mx-auto px-6 lg:px-0 grid lg:grid-cols-[1.04fr_0.96fr] gap-12 items-center">
            <SlideInSection direction="left">
              <div>
                <p className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-semibold text-[#EB2127] shadow-sm">
                  <Star className="h-4 w-4" />
                  Software company in Bangladesh
                </p>
                <h1 className="mt-6 text-4xl md:text-6xl lg:text-[68px] font-bold leading-tight text-[#1a365d]">
                  Expert software development for ambitious businesses
                </h1>
                <p className="mt-6 text-base md:text-xl text-gray-600 leading-relaxed max-w-2xl">
                  Ondrobit helps companies design, build, test, and scale
                  custom software, web platforms, mobile apps, AI solutions, and
                  automation systems with a reliable engineering team.
                </p>

                <div className="mt-8 flex flex-col sm:flex-row gap-4">
                  <Link
                    to="/contact"
                    className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#EB2127] px-6 py-3 font-medium text-white shadow-md transition-colors hover:bg-[#C81016]"
                  >
                    Get estimate
                    <Rocket className="h-5 w-5" />
                  </Link>
                  <Link
                    to="/services"
                    className="inline-flex items-center justify-center rounded-lg border border-[#EB2127] bg-white px-6 py-3 font-medium text-[#EB2127] transition-colors hover:bg-[#fff1f1]"
                  >
                    Our services
                  </Link>
                </div>
              </div>
            </SlideInSection>

            <SlideInSection direction="right">
              <div className="relative">
                <img
                  src={heroImage}
                  alt="Software development team illustration"
                  className="w-full max-w-[560px] mx-auto object-contain"
                />
                <div className="static mt-6 md:absolute md:left-0 md:bottom-0 w-full max-w-[390px] rounded-lg bg-white p-5 shadow-xl">
                  <div className="flex items-center gap-3">
                    <div className="h-12 w-12 rounded-lg bg-[#EB2127]/10 flex items-center justify-center">
                      <ShieldCheck className="h-6 w-6 text-[#EB2127]" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">
                        Built with care
                      </p>
                      <p className="text-sm text-gray-500">
                        Planning, development, QA, and launch support
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </SlideInSection>
          </div>
        </section>

        <section className="relative z-10 -mt-8 md:-mt-10">
          <div className="max-w-7xl mx-auto px-6 lg:px-0">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 rounded-lg bg-white p-4 shadow-xl">
              {metrics.map((metric, index) => (
                <div
                  key={metric.label}
                  className={`p-5 text-center ${
                    index < metrics.length - 1
                      ? "lg:border-r lg:border-gray-100"
                      : ""
                  }`}
                >
                  <p className="text-3xl md:text-4xl font-bold text-[#1a365d]">
                    <Counter end={metric.value} duration={900} />
                    <span className="text-[#EB2127]">{metric.suffix}</span>
                  </p>
                  <p className="mt-2 text-sm md:text-base text-gray-500">
                    {metric.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 md:py-20">
          <div className="max-w-7xl mx-auto px-6 lg:px-0">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <SmoothLetterFade
                text="Our Services"
                tag="h2"
                className="text-3xl md:text-5xl font-bold text-[#1a365d]"
              />
              <p className="mt-5 text-gray-600 leading-relaxed">
                Choose the working model that fits your roadmap, team structure,
                and delivery target.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {engagementModels.map(({ title, Icon, text }, index) => (
                <FadeInSection key={title} delay={index * 0.12}>
                  <article className="h-full rounded-lg border border-gray-100 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                    <div className="mb-6 h-14 w-14 rounded-lg bg-[#EB2127]/10 flex items-center justify-center">
                      <Icon className="h-7 w-7 text-[#EB2127]" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900">
                      {title}
                    </h3>
                    <p className="mt-4 text-gray-600 leading-relaxed">{text}</p>
                  </article>
                </FadeInSection>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-[#FDF8F8]">
          <div className="max-w-7xl mx-auto px-6 lg:px-0 grid lg:grid-cols-2 gap-12 items-center">
            <SlideInSection direction="left">
              <div>
                <p className="text-[#EB2127] font-semibold mb-3">About us</p>
                <h2 className="text-3xl md:text-5xl font-bold text-[#1a365d] leading-tight">
                  We turn business challenges into scalable digital products
                </h2>
                <p className="mt-5 text-gray-600 leading-relaxed">
                  Ondrobit builds tailored technology solutions for businesses
                  that need dependable execution. Our developers, designers, QA
                  engineers, and strategists work closely with clients to
                  understand the problem, shape the product, and deliver software
                  that supports real growth.
                </p>
                <div className="mt-8 grid sm:grid-cols-2 gap-4">
                  {values.map(({ title, Icon, text }) => (
                    <div key={title} className="rounded-lg bg-white p-5 shadow-sm">
                      <Icon className="h-6 w-6 text-[#EB2127]" />
                      <h3 className="mt-3 font-semibold text-gray-900">
                        {title}
                      </h3>
                      <p className="mt-2 text-sm text-gray-600 leading-relaxed">
                        {text}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </SlideInSection>

            <SlideInSection direction="right">
              <img
                src={aboutImage}
                alt="Ondrobit software team"
                className="w-full max-w-[520px] mx-auto object-contain"
              />
            </SlideInSection>
          </div>
        </section>

        <section className="py-14">
          <div className="max-w-7xl mx-auto px-6 lg:px-0">
            <TrustedCompaniesSection />
          </div>
        </section>

        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-0">
            <div className="max-w-4xl mx-auto text-center mb-14">
              <p className="text-[#EB2127] font-semibold mb-3">
                Enterprise software development
              </p>
              <h2 className="text-3xl md:text-5xl font-bold text-[#1a365d]">
                Services built for long-term business partnerships
              </h2>
              <p className="mt-5 text-gray-600 leading-relaxed">
                From customer-facing products to internal business systems, we
                deliver practical software with modern engineering standards.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map(({ title, Icon, text }, index) => (
                <FadeInSection key={title} delay={index * 0.07}>
                  <article className="h-full rounded-lg bg-[#FDF8F8] p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                    <div className="mb-5 h-12 w-12 rounded-lg bg-white flex items-center justify-center shadow-sm">
                      <Icon className="h-6 w-6 text-[#EB2127]" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900">
                      {title}
                    </h3>
                    <p className="mt-3 text-sm text-gray-600 leading-relaxed">
                      {text}
                    </p>
                  </article>
                </FadeInSection>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-[#FDF8F8]">
          <div className="max-w-7xl mx-auto px-6 lg:px-0 grid lg:grid-cols-[0.9fr_1.1fr] gap-12 items-start">
            <div>
              <p className="text-[#EB2127] font-semibold mb-3">
                Our technology
              </p>
              <h2 className="text-3xl md:text-5xl font-bold text-[#1a365d] leading-tight">
                Modern tools for web, mobile, AI, cloud, and automation
              </h2>
              <p className="mt-5 text-gray-600 leading-relaxed">
                We choose technologies based on product goals, scalability,
                security, and long-term maintainability.
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {technologies.map((tech) => (
                <div
                  key={tech}
                  className="rounded-lg bg-white px-4 py-3 text-center font-medium text-gray-700 shadow-sm"
                >
                  {tech}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-6 lg:px-0">
            <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-12 items-center">
              <SlideInSection direction="left">
                <div>
                  <p className="text-[#EB2127] font-semibold mb-3">
                    Why choose us
                  </p>
                  <h2 className="text-3xl md:text-5xl font-bold text-[#1a365d] leading-tight">
                    A focused team for dependable software delivery
                  </h2>
                  <p className="mt-5 text-gray-600 leading-relaxed">
                    We combine practical product thinking with strong
                    development standards, so your project moves forward with
                    speed, stability, and clear communication.
                  </p>
                </div>
              </SlideInSection>

              <SlideInSection direction="right">
                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    "Experienced engineering team",
                    "Agile project management",
                    "QA-focused development process",
                    "Secure and scalable architecture",
                    "Flexible engagement options",
                    "Long-term support mindset",
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 text-[#EB2127] flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
              </SlideInSection>
            </div>

            <div className="mt-14">
              <h3 className="text-2xl font-bold text-[#1a365d] mb-6">
                We specialize in
              </h3>
              <div className="flex flex-wrap gap-3">
                {specializations.map((item) => (
                  <span
                    key={item}
                    className="rounded-lg border border-[#EB2127]/25 bg-[#EB2127]/10 px-4 py-2 text-sm font-medium text-[#1a365d]"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-[#FDF8F8]">
          <div className="max-w-7xl mx-auto px-6 lg:px-0">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
              <div>
                <p className="text-[#EB2127] font-semibold mb-3">
                  Products & portfolio
                </p>
                <h2 className="text-3xl md:text-5xl font-bold text-[#1a365d]">
                  Ready systems and proven product experience
                </h2>
              </div>
              <Link
                to="/products"
                className="inline-flex w-fit items-center justify-center rounded-lg bg-[#EB2127] px-6 py-3 font-medium text-white transition-colors hover:bg-[#C81016]"
              >
                View products
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {products.map((product, index) => (
                <FadeInSection key={product.title} delay={index * 0.1}>
                  <Link
                    to="/products"
                    className="group block overflow-hidden rounded-lg bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                  >
                    <img
                      src={product.image}
                      alt={product.title}
                      className="h-56 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="p-5">
                      <div className="flex items-center gap-3">
                        <Laptop className="h-5 w-5 text-[#EB2127]" />
                        <h3 className="font-semibold text-gray-900">
                          {product.title}
                        </h3>
                      </div>
                    </div>
                  </Link>
                </FadeInSection>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-6 lg:px-0">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <p className="text-[#EB2127] font-semibold mb-3">
                Client testimonials
              </p>
              <h2 className="text-3xl md:text-5xl font-bold text-[#1a365d]">
                Trusted by founders and business leaders
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {testimonials.map((item, index) => (
                <FadeInSection key={item.name} delay={index * 0.12}>
                  <article className="h-full rounded-lg border border-gray-100 p-6 shadow-sm">
                    <div className="flex gap-1 text-[#EB2127]">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star key={star} className="h-4 w-4 fill-[#EB2127]" />
                      ))}
                    </div>
                    <p className="mt-5 text-gray-600 leading-relaxed">
                      "{item.quote}"
                    </p>
                    <div className="mt-6">
                      <p className="font-semibold text-gray-900">{item.name}</p>
                      <p className="text-sm text-gray-500">{item.role}</p>
                    </div>
                  </article>
                </FadeInSection>
              ))}
            </div>
          </div>
        </section>

        <section
          className="py-16 md:py-20"
          style={{
            background: "linear-gradient(90deg, #EB2127 0%, #C81016 100%)",
          }}
        >
          <div className="max-w-5xl mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-5xl font-bold text-white">
              Let us build the right software for your business
            </h2>
            <p className="mt-5 text-white/90 leading-relaxed">
              Tell us what you want to improve, automate, or launch. Our team
              will help you choose the right technical path and delivery model.
            </p>
            <Link
              to="/contact"
              className="mt-8 inline-flex items-center justify-center rounded-lg bg-white px-8 py-3 font-medium text-[#EB2127] transition-colors hover:bg-gray-100"
            >
              Contact us
            </Link>
          </div>
        </section>
      </main>
    </>
  );
};

export default Home;
