import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Testimonial = ({ name, role, company, avatar, children }) => {
  return (
    <div className="h-full py-6 sm:py-8 flex flex-col italic">
      {/* Quote */}
      <div className="mb-6 flex-grow">
        <p className="leading-relaxed text-xl sm:text-2xl">"{children}"</p>
      </div>

      {/* User Info */}
      <div className="flex items-center">
        {avatar && (
          <img
            src={avatar}
            alt={name}
            className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover mr-3 sm:mr-4"
          />
        )}
        <div>
          <h4 className="font-medium text-base sm:text-lg">{name}</h4>
          <p className="text-sm text-gray-500">
            {role} {company && `at ${company}`}
          </p>
        </div>
      </div>
    </div>
  );
};

const TestimonialCarousel = ({
  testimonials,
  autoPlay = true,
  interval = 5000,
  showArrows = true,
  showDots = true,
  className = "",
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (!autoPlay || isHovered || testimonials.length <= 1) return;

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
    }, interval);

    return () => clearInterval(timer);
  }, [autoPlay, interval, isHovered, testimonials.length]);

  const goToPrevious = () => setCurrentIndex(
    currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1
  );

  const goToNext = () => setCurrentIndex(
    currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1
  );

  const goToSlide = (index) => setCurrentIndex(index);

  if (!testimonials || testimonials.length === 0) return null;

  return (
    <div
      className={`relative ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Carousel Track */}
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {testimonials.map((testimonial, index) => (
            <div key={index} className="w-full flex-shrink-0">
              <Testimonial
                name={testimonial.name}
                role={testimonial.role}
                company={testimonial.company}
                avatar={testimonial.avatar}
              >
                {testimonial.content}
              </Testimonial>
            </div>
          ))}
        </div>
      </div>

      {/* Arrows */}
      {showArrows && testimonials.length > 1 && (
        <div className="flex justify-start sm:justify-start gap-3 mt-4">
          <button
            className="p-2 rounded-full bg-secondary text-white transition-all hover:bg-opacity-90"
            onClick={goToPrevious}
            aria-label="Previous"
          >
            <ChevronLeft size={24} strokeWidth={1.5} />
          </button>
          <button
            className="p-2 rounded-full border border-secondary text-secondary bg-transparent hover:bg-secondary hover:text-white transition-all"
            onClick={goToNext}
            aria-label="Next"
          >
            <ChevronRight size={24} strokeWidth={1.5} />
          </button>
        </div>
      )}

      {/* Dots */}
      {showDots && testimonials.length > 1 && (
        <div className="flex justify-center mt-6 space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full transition-all duration-200 focus:outline-none ${
                index === currentIndex
                  ? "bg-secondary w-8"
                  : "bg-gray-300 hover:bg-gray-400 w-3"
              }`}
              onClick={() => goToSlide(index)}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default TestimonialCarousel;