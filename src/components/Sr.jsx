import { Code } from "lucide-react";
import Accordion from "./Accordion";

const servicesData = [
  {
    title: "Learning & Development",
    subtitle:
      "We design practical, people-centered learning experiences that build individual skills and institutional capacity.",

    services: [
      {
        title: "L&D Outsourcing / A2Z L&D Installment",
        subtitle:
          "End-to-end management of your learning and development function, tailored to your organization’s goals.",
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
    title: "Consulting Services",
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
    title: "Project and Program Management",
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

function Sr() {
  return (
    <div className="my-10">
      <Accordion defaultOpenIndex={9} allowMultiple={true} className="mb-6">
        {servicesData.map((section) => (
          <Accordion.Item
            key={section.title}
            title={section.title}
            subtitle={section.subtitle}
          >
            <div className="grid md:grid-cols-2">
              {section.services.map((service, index) => (
                <div
                  key={index}
                  className="border-t border-b border-zinc-300 space-y-1 py-6  gap-x-4 items-center justify-between"
                >
                  <h4 className="text-xl">{service.title}</h4>
                  <p className="text-zinc-500 w-3/4 text-sm md:text-base">{service.subtitle}</p>
                </div>
              ))}
            </div>
          </Accordion.Item>
        ))}
      </Accordion>
    </div>
  );
}

export default Sr;
