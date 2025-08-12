import React, { useState } from "react";
import Accordion from "./Accordion";

const servicesData = [
  {
    label: "Learning & Development",
    image: "/assets/learning&development.webp",
    title: "Empower Your Skills",
    description:
      "Tailor training programs to match your team's unique needs with flexible modules, real-world exercises, and expert-led sessions. Track progress visually and ensure growth.",
    primaryAction: { text: "Get started", href: "/learning" },
    secondaryAction: { text: "Learn more", href: "/learning-more" },
    subtitle:
      "We design practical, people-centered learning experiences that build individual skills and institutional capacity.",
    services: [
      {
        title: "L&D Outsourcing / A2Z L&D Installment",
        subtitle:
          "End-to-end management of your learning and development function, tailored to your organization's goals.",
      },
      {
        title: "Learning Strategy Development",
        subtitle:
          "Designing data-driven, future-ready learning strategies aligned with business objectives.",
      },
      {
        title: "Needs Assessment",
        subtitle:
          "Identifying skills gaps and learning needs through structured analysis and stakeholder engagement.",
      },
      {
        title: "L&D Tools Development",
        subtitle:
          "Creating practical tools and templates to streamline L&D processes and improve outcomes.",
      },
      {
        title: "Curriculum and Content Development",
        subtitle:
          "Designing engaging, competency-based curricula and custom learning content across formats.",
      },
      {
        title: "LMS Management",
        subtitle:
          "Setup, administration, and optimization of Learning Management Systems to deliver and track learning effectively.",
      },
      {
        title: "Training Delivery",
        subtitle:
          "Facilitating impactful in-person or virtual training sessions using modern learning methodologies.",
      },
      {
        title: "Mentorship & Coaching",
        subtitle:
          "Structuring personalized development through one-on-one or group coaching and mentorship programs.",
      },
      {
        title: "L&D Monitoring and Evaluation",
        subtitle:
          "Tracking training effectiveness and learning impact using clear metrics and feedback loops.",
      },
      {
        title: "Engagement Design and Management",
        subtitle:
          "Designing interactive learning journeys to maximize learner motivation, participation, and retention.",
      },
      {
        title: "Facilitation Skills - ToT",
        subtitle:
          "Training of Trainers (ToT) programs to enhance facilitation skills and build internal training capacity.",
      },
    ],
  },
  {
    label: "Consulting & Advisory",
    image: "/assets/consulting&advisory.webp",
    title: "Expert Guidance for Success",
    description:
      "Leverage our consultants' deep expertise to identify opportunities, solve business challenges, and optimize processes for sustainable growth.",
    primaryAction: { text: "Get started", href: "/consulting" },
    secondaryAction: { text: "Learn more", href: "/consulting-more" },
    subtitle:
      "We provide end-to-end consulting support to help organizations transform strategy",
    services: [
      {
        title: "Business Strategy",
        subtitle:
          "Designing actionable strategies that drive growth, competitiveness, and long-term value.",
      },
      {
        title: "Project Management",
        subtitle:
          "Providing structure and leadership to ensure projects are delivered on time, within scope, and on budget.",
      },
      {
        title: "Human Resources",
        subtitle:
          "Strengthening HR systems, processes, and practices for effective people management and development.",
      },
      {
        title: "Organizational Development",
        subtitle:
          "Supporting structural, cultural, and process changes that improve organizational effectiveness.",
      },
      {
        title: "Information Communication Technology",
        subtitle:
          "Advising on innovative and scalable IT solutions to optimize operations and data-driven decisions.",
      },
      {
        title: "ICT Strategy Development / Roadmap",
        subtitle:
          "Crafting long-term ICT strategies that align with business goals.",
      },
      {
        title: "ICT Policy Development",
        subtitle: "Defining clear policies to govern IT systems and usage.",
      },
      {
        title: "IT Project Management",
        subtitle:
          "Managing IT initiatives with structure, agility, and risk awareness.",
      },
      {
        title: "IT System Evaluation and Assessment",
        subtitle:
          "Auditing current IT systems to identify gaps and areas for improvement.",
      },
      {
        title: "Data Management and Administration",
        subtitle:
          "Organizing and securing your data for accessibility, compliance, and decision-making.",
      },
      {
        title: "ERP / Software Implementation",
        subtitle:
          "Guiding selection, customization, and deployment of enterprise software solutions.",
      },
      {
        title: "Cloud Solutions",
        subtitle:
          "Implementing scalable cloud technologies to enable remote access, collaboration, and cost savings.",
      },
      {
        title: "Business Intelligence & Data Analytics",
        subtitle:
          "Turning data into actionable insights through BI dashboards and advanced analytics.",
      },
      {
        title: "IT Support & Maintenance",
        subtitle:
          "Providing continuous support to keep systems secure, updated, and fully operational.",
      },
    ],
  },
  {
    label: "Project Management",
    image: "/assets/projectmanagement.webp",
    title: "Streamline Your Projects",
    description:
      "Manage projects effortlessly with our collaborative tools. Customize workflows, track tasks, and hit deadlines with precision.",
    primaryAction: { text: "Get started", href: "/projects" },
    secondaryAction: { text: "Learn more", href: "/projects-more" },
    subtitle:
      "We emphasize capacity development, youth and women empowerment, and digitalization in delivering",
    services: [
      {
        title: "Capacity Development",
        subtitle:
          "We focus on building individual competencies and institutional systems that enable sustainable growth and performance.",
      },
      {
        title: "Youth & Women Empowerment",
        subtitle:
          "We design inclusive programs that create opportunities, amplify voices, and promote leadership among young people and women.",
      },
      {
        title: "Digitalization",
        subtitle:
          "We leverage digital tools and strategies to enhance service delivery, streamline operations, and expand reach.",
      },
    ],
  },
];

function ServiceTabsWithAccordion() {
  const [active, setActive] = useState(0);
  const activeTab = servicesData[active];

  return (
    <div className="mt-6 font-serif">
      {/* Tabs */}
      <div className="flex mt-8 sm:mt-14 overflow-x-auto scroll-smooth flex-nowrap justify-center gap-4 sm:gap-x-20 max-w-6xl mx-auto px-4">
        {servicesData.map((tab, index) => {
          const isActive = active === index;
          return (
            <button
              key={tab.label}
              onClick={() => setActive(index)}
              className={`
                relative pb-2 text-base sm:text-lg md:text-xl cursor-pointer transition
                ${isActive ? "text-primary" : "text-zinc-500 hover:text-primary"}
                after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-full after:scale-x-0
                after:bg-primary after:transition-transform after:duration-300
                ${isActive ? "after:scale-x-100" : ""}
              `}
            >
              {tab.label}
            </button>
          );
        })}
      </div>

      {/* Active Tab Content */}
      <div className="max-w-6xl mx-auto mt-8 sm:mt-10 grid gap-6 sm:gap-10 items-start px-4">
        {/* Image and Description */}
        {/* <div>
          <img
            src={activeTab.image}
            alt={activeTab.title}
            className="rounded-lg shadow-md w-full"
          />
          
        </div> */}

        {/* Accordion with services */}
        <div className="max-w-3xl mx-auto w-full">
          <Accordion defaultOpenIndex={0} allowMultiple={true}>
            <Accordion.Item
              title={activeTab.label}
              subtitle={activeTab.subtitle}
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-x-10 justify-between">
                {activeTab.services.map((service, index) => (
                  <div
                    key={index}
                    className="border-b border-zinc-300 space-y-2.5 py-4 sm:py-6"
                  >
                    <h4 className="text-lg sm:text-xl">{service.title}</h4>
                    <p className="text-zinc-500 text-sm sm:text-base">
                      {service.subtitle}
                    </p>
                  </div>
                ))}
              </div>
            </Accordion.Item>
          </Accordion>
        </div>
      </div>
    </div>
  );
}

export default ServiceTabsWithAccordion;
