const coreValues = [
  {
    title: "Empowerment",
    description:
      "We create environments where individuals and organizations can unlock their potential and lead their own transformation.",
  },
  {
    title: "Innovation",
    description:
      "We embrace bold thinking and modern tools to co-create solutions that are practical, creative, and future-ready.",
  },
  {
    title: "Integrity",
    description:
      "We lead with honesty, accountability, and ethical responsibility in every interaction and decision we make.",
  },
  {
    title: "Accessibility",
    description:
      "We design inclusive solutions that are responsive to diverse needs, voices, and lived experiences.",
  },
  {
    title: "Collaboration",
    description:
      "We believe that shared success is built through trust, listening, and co-creation with our clients and communities.",
  },
];

function CoreValues() {
  return (
    <section className="px-4 md:my-20 md:px-0">
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-start">
        {/* Left Column - Sticky Title */}
        <div className="space-y-6 md:space-y-8 md:sticky md:top-20">
          <h1 className="text-4xl sm:text-5xl leading-tight">
            Our Values at
            <span className="font-medium text-secondary"> Unfold </span>
            Solutions
          </h1>
          <p className="text-zinc-500 text-base sm:text-lg max-w-md">
            We blend coaching, consulting, and mentorship to deliver tailored
            strategies for growth. With a human-first approach and data-backed.
          </p>
        </div>

        {/* Right Column - Core Values List */}
        <div className="space-y-10 md:mt-0">
          {coreValues.map((core) => (
            <div key={core.title} className="space-y-3">
              <h2 className="text-2xl sm:text-3xl">
                {core.title}
              </h2>
              <p className="text-zinc-500 leading-relaxed">
                {core.description} yourself.
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default CoreValues;