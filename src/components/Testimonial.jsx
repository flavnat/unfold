import TestimonialCarousel from "./TestimonialCarousel";

// Sample avatar images
const avatar1 =
  "https://images.unsplash.com/photo-1494790108787-52f159d74a29?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80";
const avatar2 =
  "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80";
const avatar3 =
  "https://images.unsplash.com/photo-1520813792240-56fc4a3765a7?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80";
const avatar4 =
  "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Marketing Director",
    company: "TechCorp",
    avatar: avatar1,
    content:
      "This product has completely transformed our workflow. We've seen a 40% increase in productivity since implementation. The support team is responsive and helpful.",
  },
  {
    name: "Michael Chen",
    role: "Product Manager",
    company: "Innovate Inc",
    avatar: avatar2,
    content:
      "Intuitive interface and powerful features. It took our team less than a day to get up to speed. Worth every penny!",
  },
  {
    name: "Emily Rodriguez",
    role: "CEO",
    company: "StartupXYZ",
    avatar: avatar3,
    content:
      "We evaluated several solutions, but this one stood out for its reliability and feature set. Our customers have noticed the improvement in our service.",
  },
  {
    name: "David Kim",
    role: "Software Engineer",
    company: "CodeMasters",
    avatar: avatar4,
    content:
      "The API is well-documented and reliable. Integration was seamless, and the performance exceeds our expectations.",
  },
];

function Testimonial() {
  return (
    <section className="px-4 md:px-6 lg:px-10 mt-12 w-full">
      {/* Headline */}
      <div className="max-w-3xl mb-10">
        <h1 className="text-4xl sm:text-5xl">What Our Clients Are Saying</h1>
        <p className="mt-4 text-lg italic text-zinc-500 leading-relaxed">
          Our clients value Unfold Solutions for streamlining workflows, driving
          operational efficiency, and empowering sustainable organizational
          growth.
        </p>
      </div>

      {/* Carousel Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
        <div className="col-span-2">
          <TestimonialCarousel
            testimonials={testimonials}
            autoPlay={true}
            interval={5000}
            showArrows={true}
            showDots={true}
          />
        </div>

        {/* Optional Sidebar (Hidden on mobile) */}
        <div className="rounded-3xl space-y-8 py-8 lg:block hidden">
          <h4 className="text-lg text-zinc-700">
            How Unfold Solutions Transformed Operations for Smoother,
            Error-Resilient Growth
          </h4>
          <div>
            <img
              src="/assets/testimonial.png"
              alt="Client success story"
              className="w-full h-auto rounded-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonial;