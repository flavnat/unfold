import React, { useState } from "react";

function ServiceTabs() {
  const tabs = [
    {
      label: "Learning & Development",
      image: "/assets/learning&development.webp",
      title: "Empower Your Skills",
      description:
        "Tailor training programs to match your team's unique needs with flexible modules, real-world exercises, and expert-led sessions. Track progress visually and ensure growth.",
      primaryAction: { text: "Get started", href: "/learning" },
      secondaryAction: { text: "Learn more", href: "/learning-more" },
    },
    {
      label: "Consulting & Advisory",
      image: "/assets/consulting&advisory.webp",
      title: "Expert Guidance for Success",
      description:
        "Leverage our consultants’ deep expertise to identify opportunities, solve business challenges, and optimize processes for sustainable growth.",
      primaryAction: { text: "Get started", href: "/consulting" },
      secondaryAction: { text: "Learn more", href: "/consulting-more" },
    },
    {
      label: "Project Management",
      image: "/assets/projectmanagement.webp",
      title: "Streamline Your Projects",
      description:
        "Manage projects effortlessly with our collaborative tools. Customize workflows, track tasks, and hit deadlines with precision.",
      primaryAction: { text: "Get started", href: "/projects" },
      secondaryAction: { text: "Learn more", href: "/projects-more" },
    },
  ];

  const [active, setActive] = useState(0);
  return (
    <div className="mt-6 font-serif">
      <div className="flex mt-14 flex-wrap justify-center gap-x-20 border-b border-zinc-300 max-w-6xl mx-auto">
        {tabs.map((tab, index) => {
          const isActive = active === index;
          return (
            <button
              key={tab.label}
              onClick={() => setActive(index)}
              className={`
          relative pb-2 text-xl cursor-pointer transition
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

      {/* Tab Content */}

      <div className="max-w-6xl mx-auto mt-10 grid md:grid-cols-2 gap-10 items-center">
        <img
          src={tabs[active].image}
          alt={tabs[active].title}
          className="rounded-xl shadow-lg"
        />
        <div>
          <h2 className="text-3xl mb-4">{tabs[active].title}</h2>
          <p className="text-zinc-600 mb-6">{tabs[active].description}</p>
          <div className="flex gap-4">
          
            <a
              href={tabs[active].secondaryAction.href}
              className="hover:underline text-primary"
            >
              {tabs[active].secondaryAction.text}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServiceTabs;
