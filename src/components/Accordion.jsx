import React, { useState } from "react";
import { ChevronUp, ChevronDown } from "lucide-react";

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
              className="flex justify-between items-center py-5 w-full duration-150"
              onClick={() => togglePanel(index)}
              type="button"
              aria-expanded={isOpen}
            >
              <div className="space-y-1 text-left">
                <span className="flex items-center text-2xl">
                  {child.props.title}
                </span>
                <span className="text-zinc-500 text-sm sm:text-base">
                  {child.props.subtitle}
                </span>
              </div>
              <span
                className={`transform transition-transform duration-200 ${
                  isOpen ? "rotate-90" : ""
                }`}
              >
                {isOpen ? (
                  <ChevronUp
                    size={30}
                    strokeWidth={1.2}
                    className="text-gray-500"
                  />
                ) : (
                  <ChevronDown
                    size={30}
                    strokeWidth={1.2}
                    className="text-gray-500"
                  />
                )}
              </span>
            </button>
            <div
              className={`overflow-hidden transition-all duration-300 ease-in-out ${
                isOpen ? "opacity-100" : "max-h-0 opacity-0"
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