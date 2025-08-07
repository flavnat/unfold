import ServiceCard from "./Cards/ServiceCard";

const services = [
  {
    headline: "Learning & Development",
    description:
      "We design practical, people-centered learning experiences that build individual skills and institutional capacity. ",
    icon: "/assets/icon/deep-learning.png",
  },
  {
    headline: "Consulting & Advisory",
    description:
      "We work alongside organizations to solve complex problems with clarity and evidence-based insight. ",
    icon: "/assets/icon/strategic-consulting.png",
  },
  {
    headline: "Project Management",
    description:
      "We offer end-to-end support for managing initiatives that deliver real impact on time and within budget.",
    icon: "/assets/icon/folder-management.png",
  },
];

function Service() {
  return (
    <section className="px-6 py-16 bg-secondary text-white rounded-3xl space-y-10 md:px-10 lg:px-12">
      {/* Text Content */}
      <div className="max-w-3xl">
        <h1 className="text-4xl sm:text-5xl font-medium">Unfold Services</h1>
        <p className="mt-4 text-zinc-300 text-base sm:text-lg">
          We create environments where individuals and organizations can unlock
          their potential and lead their own transformation.
        </p>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-x-8">
        {services.map((service) => (
          <ServiceCard
            key={service.headline}
            headline={service.headline}
            description={service.description}
            icon={service.icon}
            hideBorder={true}
          />
        ))}
      </div>
    </section>
  );
}

export default Service;