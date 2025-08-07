import { useEffect, useState } from "react";

function TestimonialCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      quote:
        "Partnering with Unfold Solutions has been a transformative experience for our organization. Their deep expertise in learning and development, combined with a genuinely collaborative approach, helped us redesign our internal training systems and build lasting capacity across teams. What sets Unfold apart is their ability to listen, adapt, and co-create solutions that are not only practical but aligned with our vision.",
      name: "Daniel Reed",
      role: "Senior Program Director, International NGO",
    },
    {
      id: 2,
      quote:
        "Unfold Solutions brought clarity and structure to our digital transformation journey. Their team guided us through complex IT upgrades with precision, minimal disruption, and a strong focus on staff capacity building. The impact was immediate and sustainable.",
      name: "Selamawit Bekele",
      role: "Operations Lead, Development Agency",
    },
    {
      id: 3,
      quote:
        "Their approach to organizational development was both insightful and human-centered. Unfold didn’t just deliver a strategy — they walked with us every step of the way, ensuring ownership, alignment, and real change.",
      name: "Alemayehu Teklu",
      role: "Executive Director, Non-Profit Network",
    },
  ];

  // Auto-advance every 6 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  const goToPrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <div className="border col-span-2 p-10 bg-blue-900 dark:text-gray-100 relative">
      {/* Quote */}
      <blockquote className="italic font-light leading-7 mb-6">
        {currentTestimonial.quote}
      </blockquote>

      {/* Client Info */}
      <div className="mt-6">
        <cite className="not-italic font-semibold block">{currentTestimonial.name}</cite>
        <p className="text-sm text-zinc-500 dark:text-zinc-400">{currentTestimonial.role}</p>
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={goToPrev}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-blue-900 text-white p-2 rounded-full hover:bg-blue-800 focus:outline-none"
        aria-label="Previous testimonial"
      >
        &#8249;
      </button>
      <button
        onClick={goToNext}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-blue-900 text-white p-2 rounded-full hover:bg-blue-800 focus:outline-none"
        aria-label="Next testimonial"
      >
        &#8250;
      </button>

      {/* Indicator Dots */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {testimonials.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 rounded-full transition-all ${
              index === currentIndex ? "bg-blue-900" : "bg-zinc-400"
            }`}
            onClick={() => setCurrentIndex(index)}
            aria-label={`Go to testimonial ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

export default TestimonialCarousel;