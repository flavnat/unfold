import React, { useState } from "react";

const Accordion = ({
  children,
  defaultOpenIndex = 0,
  allowMultiple = false,
  className = "",
}) => {
  const [openIndices, setOpenIndices] = useState(
    allowMultiple
      ? defaultOpenIndex >= 0
        ? [defaultOpenIndex]
        : []
      : defaultOpenIndex >= 0
      ? [defaultOpenIndex]
      : []
  );

  const togglePanel = (index) => {
    if (allowMultiple) {
      setOpenIndices((prev) =>
        prev.includes(index)
          ? prev.filter((i) => i !== index)
          : [...prev, index]
      );
    } else {
      setOpenIndices((prev) => (prev[0] === index ? [] : [index]));
    }
  };

  return (
    <div className={`overflow-hidden ${className}`}>
      {React.Children.map(children, (child, index) => {
        if (!child) return null;

        const isOpen = openIndices.includes(index);

        return (
          <div
            key={index}
            className={`border-b border-gray-300 last:border-b-0 ${
              isOpen ? "" : ""
            }`}
          >
            <button
              className="flex justify-between items-center py-4 sm:py-5 w-full duration-150 px-2 sm:px-0"
              onClick={() => togglePanel(index)}
              type="button"
              aria-expanded={isOpen}
            >
              <div className="space-y-1 text-left cursor-pointer flex-1">
                <span className="flex items-center text-lg sm:text-xl md:text-2xl">
                  {child.props.title}
                </span>
                <span className="text-zinc-500 text-xs sm:text-sm md:text-base">
                  {child.props.subtitle}
                </span>
              </div>
            
            </button>
            <div
              className={`overflow-hidden transition-all duration-300 ease-in-out px-2 sm:px-0 ${
                isOpen ? "opacity-100 pb-4" : "max-h-0 opacity-0"
              }`}
            >
              {child.props.children}
            </div>
          </div>
        );
      })}
    </div>
  );
};

const AccordionItem = ({ title, children, icon }) => {
  return null;
};

Accordion.Item = AccordionItem;

export default Accordion;