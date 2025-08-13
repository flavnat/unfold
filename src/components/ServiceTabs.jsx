import React, { useState } from "react";

function ServiceTabs() {
  const tabs = [
    {
      label: "Learning & Development",
      image: "/assets/learning&development.webp",
      title: "Empower Your Skills",
      description:
        "Tailor training programs to match your team's unique needs with flexible modules, real-world exercises, and expert-led sessions. Track progress visually and ensure growth.",
      secondaryAction: { text: "Learn more", href: "/services" },
    },
    {
      label: "Consulting & Advisory",
      image: "/assets/consulting&advisory.webp",
      title: "Expert Guidance for Success",
      description:
        "Leverage our consultants' deep expertise to identify opportunities, solve business challenges, and optimize processes for sustainable growth.",
      secondaryAction: { text: "Learn more", href: "/services" },
    },
    {
      label: "Project Management",
      image: "/assets/projectmanagement.webp",
      title: "Streamline Your Projects",
      description:
        "Manage projects effortlessly with our collaborative tools. Customize workflows, track tasks, and hit deadlines with precision.",
      secondaryAction: { text: "Learn more", href: "/services" },
    },
  ];

  const [active, setActive] = useState(0);
  return (
    <div className="mt-6">
      <div className="flex mt-8 sm:mt-14 overflow-x-auto scroll-smooth flex-nowrap justify-center gap-4 sm:gap-x-20 max-w-6xl mx-auto px-4">
        {tabs.map((tab, index) => {
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

      {/* Tab Content */}

      <div className="max-w-6xl mx-auto mt-8 sm:mt-10 grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-10 items-start px-4">
        <img
          src={tabs[active].image}
          alt={tabs[active].title}
          className="rounded-xl shadow-lg w-full h-auto"
        />
        <div className="md:py-10">
          <h2 className="text-2xl sm:text-3xl mb-3 sm:mb-4">
            {tabs[active].title}
          </h2>
          <p className="text-zinc-600 mb-4 sm:mb-6 text-sm sm:text-base">
            {tabs[active].description}
          </p>
          <div className="flex gap-4">
            <a
              href={tabs[active].secondaryAction.href}
              className="hover:underline text-primary text-sm sm:text-base"
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
