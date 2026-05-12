import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  BrainCircuit,
  CheckCircle2,
  ClipboardCheck,
  Code2,
  Cpu,
  Film,
  Globe2,
  Layers3,
  LineChart,
  MonitorCog,
  Rocket,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Target,
  UsersRound,
  Workflow,
} from "lucide-react";
import FadeInSection from "../../Components/FadeInSection";
import SlideInSection from "../../Components/Slider/SlideInSection";
import SmoothLetterFade from "../../Components/TypingEffect/SmoothLetterFade";
import GlobalSpinner from "../../Components/Spinner/GlobalSpinner";
import Button from "../../Components/UI/Button";
import IconBadge from "../../Components/UI/IconBadge";
import SurfaceCard from "../../Components/UI/SurfaceCard";

const serviceGroups = [
  {
    id: "web",
    title: "Web Platforms",
    Icon: Globe2,
    summary:
      "Custom web applications, SaaS dashboards, customer portals, admin panels, and workflow systems built for scale.",
    deliverables: [
      "Frontend and backend development",
      "API design and integrations",
      "Role-based dashboards",
      "Performance and security tuning",
    ],
    stack: ["React", "NodeJS", "Laravel", "Django"],
  },
  {
    id: "software",
    title: "Custom Software",
    Icon: Code2,
    summary:
      "Purpose-built software for operations, reporting, approvals, inventory, finance, CRM, ERP, POS, LMS, and internal teams.",
    deliverables: [
      "Business process mapping",
      "Custom modules and permissions",
      "Data models and reports",
      "Maintenance and feature growth",
    ],
    stack: ["Ruby on Rails", "Spring Boot", "PostgreSQL", "Cloud"],
  },
  {
    id: "mobile",
    title: "Mobile Apps",
    Icon: Smartphone,
    summary:
      "User-friendly iOS, Android, and cross-platform applications for customers, field teams, and product ecosystems.",
    deliverables: [
      "Native and hybrid development",
      "Push notifications and auth",
      "Offline-ready workflows",
      "Store release preparation",
    ],
    stack: ["Flutter", "React Native", "Swift", "Kotlin"],
  },
  {
    id: "ai",
    title: "AI & Automation",
    Icon: BrainCircuit,
    summary:
      "Practical AI and automation systems that reduce manual work, improve decisions, and connect business processes.",
    deliverables: [
      "AI-assisted workflows",
      "NLP and document processing",
      "Prediction and recommendations",
      "Process automation dashboards",
    ],
    stack: ["Machine Learning", "NLP", "Python", "Automation"],
  },
  {
    id: "iot",
    title: "IoT Systems",
    Icon: Cpu,
    summary:
      "Connected device solutions for monitoring, control, automation, security, energy management, and industrial use cases.",
    deliverables: [
      "Device integration",
      "Real-time monitoring",
      "Control panels",
      "Secure data transmission",
    ],
    stack: ["IoT", "MQTT", "Realtime DB", "Embedded"],
  },
  {
    id: "qa",
    title: "QA & Security",
    Icon: ShieldCheck,
    summary:
      "Quality assurance, release validation, and security-minded checks that make software dependable before and after launch.",
    deliverables: [
      "Manual and automated testing",
      "Regression test planning",
      "Performance checks",
      "Security review support",
    ],
    stack: ["QA", "Automation", "CI/CD", "Security"],
  },
];

const supportServices = [
  { title: "Desktop Applications", Icon: MonitorCog },
  { title: "Digital Marketing", Icon: LineChart },
  { title: "Commercial Video", Icon: Film },
  { title: "UI/UX Design", Icon: Layers3 },
];

const tracks = [
  {
    title: "Discovery Sprint",
    text: "For unclear ideas, we define scope, screens, risks, architecture, timeline, and MVP priorities.",
    duration: "1-2 weeks",
  },
  {
    title: "MVP Build",
    text: "For startups and new products, we build the first reliable version with core features and launch support.",
    duration: "4-12 weeks",
  },
  {
    title: "Scale & Maintain",
    text: "For existing products, we improve performance, security, features, integrations, and release quality.",
    duration: "Ongoing",
  },
];

const process = [
  "Requirement workshop",
  "Solution blueprint",
  "UI and architecture",
  "Agile development",
  "QA and release",
  "Support and growth",
];

const scopeMatrix = [
  ["Product planning", "User flows, feature scope, estimates, and roadmap"],
  ["Engineering", "Frontend, backend, database, API, and integration work"],
  ["Quality", "Testing plans, bug tracking, regression checks, and release validation"],
  ["Operations", "Deployment, monitoring guidance, documentation, and support"],
];

const heroServiceNodes = [
  { label: "Web", Icon: Globe2 },
  { label: "Mobile", Icon: Smartphone },
  { label: "AI", Icon: BrainCircuit },
  { label: "IoT", Icon: Cpu },
  { label: "QA", Icon: ClipboardCheck },
  { label: "Launch", Icon: Rocket },
];

const ServicesMain = () => {
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
        <section
          className="bg-[#111827] pt-36 pb-16 md:pt-44 md:pb-24 text-white overflow-hidden"
          style={{
            background:
              "radial-gradient(circle at 78% 28%, rgba(235, 33, 39, 0.22), transparent 30%), #111827",
          }}
        >
          <div className="max-w-7xl mx-auto px-6 lg:px-0">
            <div className="grid lg:grid-cols-[0.95fr_1.05fr] gap-12 items-center">
              <SlideInSection direction="left">
                <div>
                  <p className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-semibold text-[#EB2127]">
                    <Sparkles className="h-4 w-4" />
                    Service command center
                  </p>
                  <h1 className="mt-6 text-4xl md:text-6xl lg:text-[68px] font-bold leading-tight text-white">
                    Technical services built around your product scope
                  </h1>
                  <p className="mt-6 max-w-2xl text-base md:text-xl leading-relaxed text-gray-300">
                    Pick a focused capability, assemble a dedicated delivery
                    team, or hand us the full product scope. Every service is
                    structured around outcomes, timelines, and maintainable
                    software.
                  </p>
                  <div className="mt-8 flex flex-col sm:flex-row gap-4">
                    <Button
                      as={Link}
                      to="/contact"
                      variant="primary"
                    >
                      Discuss service scope
                      <ArrowRight className="h-5 w-5" />
                    </Button>
                    <Button
                      as="a"
                      href="#catalog"
                      variant="darkOutline"
                    >
                      Browse catalog
                    </Button>
                  </div>
                </div>
              </SlideInSection>

              <SlideInSection direction="right">
                <div className="relative min-h-[430px] md:min-h-[520px]">
                  <div className="absolute inset-4 rounded-full border border-white/10"></div>
                  <div className="absolute inset-16 rounded-full border border-[#EB2127]/20"></div>

                  <div className="absolute left-1/2 top-1/2 z-10 h-48 w-48 -translate-x-1/2 -translate-y-1/2">
                    {[0, 1, 2, 3].map((layer) => (
                      <div
                        key={layer}
                        className="absolute left-1/2 top-1/2 h-36 w-40 -translate-x-1/2 border border-[#EB2127]/20 shadow-2xl"
                        style={{
                          clipPath:
                            "polygon(50% 0%, 100% 23%, 100% 73%, 50% 100%, 0 73%, 0 23%)",
                          background:
                            layer === 0
                              ? "rgba(235, 33, 39, 0.28)"
                              : "rgba(235, 33, 39, 0.13)",
                          transform: `translate(-50%, calc(-50% + ${
                            layer * 18
                          }px))`,
                          zIndex: 4 - layer,
                        }}
                      ></div>
                    ))}
                    <div
                      className="absolute left-1/2 top-1/2 z-20 flex h-24 w-28 -translate-x-1/2 -translate-y-1/2 items-center justify-center bg-white text-[#1a365d] shadow-xl"
                      style={{
                        clipPath:
                          "polygon(50% 0%, 100% 23%, 100% 73%, 50% 100%, 0 73%, 0 23%)",
                      }}
                    >
                      <Workflow className="h-12 w-12 text-[#EB2127]" />
                    </div>
                  </div>

                  <div className="hero-hex-orbit absolute left-1/2 top-1/2 z-20 h-[330px] w-[330px] -translate-x-1/2 -translate-y-1/2 md:h-[450px] md:w-[450px]">
                    <div className="hero-hex-orbit-spin absolute inset-0">
                      {heroServiceNodes.map(({ label, Icon }, index) => {
                        const angle = (360 / heroServiceNodes.length) * index;
                        return (
                          <div
                            key={label}
                            className="hero-hex-node absolute left-1/2 top-1/2 flex h-[82px] w-[82px] -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center bg-white text-[#1a365d] shadow-xl md:h-24 md:w-24"
                            style={{
                              "--node-angle": `${angle}deg`,
                              clipPath:
                                "polygon(25% 6%, 75% 6%, 100% 50%, 75% 94%, 25% 94%, 0 50%)",
                            }}
                          >
                            <div className="hero-hex-node-content flex flex-col items-center justify-center">
                              {React.createElement(Icon, {
                                className:
                                  "h-6 w-6 text-[#EB2127] md:h-7 md:w-7",
                              })}
                              <span className="mt-1 text-[11px] font-bold md:text-xs">
                                {label}
                              </span>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  <div className="absolute left-1/2 top-6 hidden w-px -translate-x-1/2 bg-[#EB2127]/40 md:block md:h-[100px]"></div>
                  <div className="absolute bottom-6 left-1/2 hidden w-px -translate-x-1/2 bg-[#EB2127]/40 md:block md:h-[100px]"></div>
                  <div className="absolute left-16 top-1/2 hidden h-px -translate-y-1/2 bg-[#EB2127]/40 md:block md:w-[120px]"></div>
                  <div className="absolute right-16 top-1/2 hidden h-px -translate-y-1/2 bg-[#EB2127]/40 md:block md:w-[120px]"></div>

                  <style>{`
                    .hero-hex-orbit {
                      --orbit-radius: 128px;
                    }
                    @media (min-width: 768px) {
                      .hero-hex-orbit {
                        --orbit-radius: 178px;
                      }
                    }
                    .hero-hex-orbit-spin {
                      animation: heroHexOrbit 22s linear infinite;
                      transform-origin: 50% 50%;
                    }
                    .hero-hex-node {
                      transform:
                        translate(-50%, -50%)
                        rotate(var(--node-angle))
                        translateX(var(--orbit-radius))
                        rotate(calc(-1 * var(--node-angle)));
                      transform-origin: center;
                    }
                    .hero-hex-node-content {
                      animation: heroHexCounterOrbit 22s linear infinite;
                    }
                    @keyframes heroHexOrbit {
                      from { transform: rotate(0deg); }
                      to { transform: rotate(360deg); }
                    }
                    @keyframes heroHexCounterOrbit {
                      from { transform: rotate(0deg); }
                      to { transform: rotate(-360deg); }
                    }
                  `}</style>
                </div>
              </SlideInSection>
            </div>
          </div>
        </section>

        <section className="sticky top-[66px] z-30 border-b border-gray-100 bg-white/95 py-4 backdrop-blur-md">
          <div className="max-w-7xl mx-auto px-6 lg:px-0 overflow-x-auto">
            <div className="flex min-w-max gap-3">
              {serviceGroups.map((service) => (
                <a
                  key={service.id}
                  href={`#${service.id}`}
                  className="rounded-lg border border-gray-200 px-4 py-2 text-sm font-medium text-gray-700 transition-colors hover:border-[#EB2127] hover:text-[#EB2127]"
                >
                  {service.title}
                </a>
              ))}
            </div>
          </div>
        </section>

        <section id="catalog" className="py-16 md:py-24 bg-[#FDF8F8]">
          <div className="max-w-7xl mx-auto px-6 lg:px-0">
            <div className="max-w-3xl mb-12">
              <SmoothLetterFade
                text="Service Catalog"
                tag="h2"
                className="text-3xl md:text-5xl font-bold text-[#1a365d]"
              />
              <p className="mt-5 text-gray-600 leading-relaxed">
                Each service includes planning, implementation, review, and
                delivery support. The details below show what we can own for
                your project.
              </p>
            </div>

            <div className="space-y-6">
              {serviceGroups.map(
                ({ id, title, Icon, summary, deliverables, stack }, index) => (
                  <FadeInSection key={title} delay={index * 0.06}>
                    <SurfaceCard
                      as="article"
                      id={id}
                      className="grid lg:grid-cols-[0.75fr_1.25fr] gap-6 rounded-lg bg-white p-6 md:p-8 shadow-sm scroll-mt-32"
                    >
                      <div>
                        <IconBadge Icon={Icon} size="lg" />
                        <h3 className="mt-5 text-2xl font-bold text-[#1a365d]">
                          {title}
                        </h3>
                        <p className="mt-4 text-gray-600 leading-relaxed">
                          {summary}
                        </p>
                      </div>

                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <h4 className="font-semibold text-gray-900">
                            What we deliver
                          </h4>
                          <div className="mt-4 space-y-3">
                            {deliverables.map((item) => (
                              <div key={item} className="flex items-start gap-3">
                                <CheckCircle2 className="mt-0.5 h-5 w-5 text-[#EB2127] flex-shrink-0" />
                                <span className="text-gray-700">{item}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div>
                          <h4 className="font-semibold text-gray-900">
                            Common stack
                          </h4>
                          <div className="mt-4 flex flex-wrap gap-3">
                            {stack.map((item) => (
                              <span
                                key={item}
                                className="rounded-lg bg-[#FDF8F8] px-3 py-2 text-sm font-medium text-[#1a365d]"
                              >
                                {item}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </SurfaceCard>
                  </FadeInSection>
                )
              )}
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-6 lg:px-0">
            <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-12 items-start">
              <SlideInSection direction="left">
                <div>
                  <p className="text-[#EB2127] font-semibold mb-3">
                    Delivery tracks
                  </p>
                  <h2 className="text-3xl md:text-5xl font-bold text-[#1a365d] leading-tight">
                    Choose how the service should move
                  </h2>
                  <p className="mt-5 text-gray-600 leading-relaxed">
                    A service page should help you decide what engagement fits.
                    These tracks make the starting point clearer.
                  </p>
                </div>
              </SlideInSection>

              <div className="grid gap-4">
                {tracks.map((track, index) => (
                  <FadeInSection key={track.title} delay={index * 0.1}>
                    <SurfaceCard
                      as="article"
                      className="rounded-lg border border-gray-100 bg-white p-6 shadow-sm"
                    >
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                        <h3 className="text-xl font-semibold text-gray-900">
                          {track.title}
                        </h3>
                        <span className="w-fit rounded-lg bg-[#EB2127]/10 px-3 py-2 text-sm font-semibold text-[#EB2127]">
                          {track.duration}
                        </span>
                      </div>
                      <p className="mt-4 text-gray-600 leading-relaxed">
                        {track.text}
                      </p>
                    </SurfaceCard>
                  </FadeInSection>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-[#111827] text-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-0">
            <div className="max-w-3xl mb-12">
              <p className="text-[#EB2127] font-semibold mb-3">
                Delivery workflow
              </p>
              <h2 className="text-3xl md:text-5xl font-bold leading-tight">
                A service process you can actually track
              </h2>
            </div>

            <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-4">
              {process.map((item, index) => (
                <FadeInSection key={item} delay={index * 0.07}>
                  <div className="h-full rounded-lg border border-white/10 bg-white/5 p-5">
                    <p className="text-sm font-semibold text-[#EB2127]">
                      Step {index + 1}
                    </p>
                    <p className="mt-4 font-semibold text-white">{item}</p>
                  </div>
                </FadeInSection>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-0 grid lg:grid-cols-[1fr_1fr] gap-12 items-start">
            <div>
              <p className="text-[#EB2127] font-semibold mb-3">
                Scope clarity
              </p>
              <h2 className="text-3xl md:text-5xl font-bold text-[#1a365d] leading-tight">
                Know exactly what the service includes
              </h2>
              <p className="mt-5 text-gray-600 leading-relaxed">
                We keep projects professional by making the service boundary
                visible. That means less confusion, fewer delays, and a clearer
                path from idea to shipped product.
              </p>
            </div>

            <div className="rounded-lg border border-gray-100 shadow-sm overflow-hidden">
              {scopeMatrix.map(([title, text], index) => (
                <div
                  key={title}
                  className={`grid sm:grid-cols-[0.35fr_0.65fr] gap-4 p-5 ${
                    index < scopeMatrix.length - 1
                      ? "border-b border-gray-100"
                      : ""
                  }`}
                >
                  <p className="font-semibold text-[#1a365d]">{title}</p>
                  <p className="text-gray-600">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-[#FDF8F8]">
          <div className="max-w-7xl mx-auto px-6 lg:px-0">
            <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-12 items-start">
              <div>
                <p className="text-[#EB2127] font-semibold mb-3">
                  Supporting services
                </p>
                <h2 className="text-3xl md:text-5xl font-bold text-[#1a365d] leading-tight">
                  Add the specialist help your project needs
                </h2>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                {supportServices.map(({ title, Icon }) => (
                  <SurfaceCard
                    key={title}
                    className="rounded-lg bg-white p-5 shadow-sm flex items-center gap-4"
                  >
                    <IconBadge Icon={Icon} size="sm" />
                    <span className="font-semibold text-gray-900">{title}</span>
                  </SurfaceCard>
                ))}
              </div>
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
            <Target className="mx-auto h-10 w-10 text-white" />
            <h2 className="mt-5 text-3xl md:text-5xl font-bold text-white">
              Bring us the problem. We will shape the service plan.
            </h2>
            <p className="mt-5 text-white/90 leading-relaxed">
              Share your product goal, current challenge, or automation need.
              We will recommend the right service track and delivery scope.
            </p>
            <Button
              as={Link}
              to="/contact"
              variant="white"
              className="mt-8"
            >
              Request consultation
              <ArrowRight className="h-5 w-5" />
            </Button>
          </div>
        </section>
      </main>
    </>
  );
};

export default ServicesMain;
