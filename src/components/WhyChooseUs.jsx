import { PackageX, Cloud } from "lucide-react";

const whyChooseUsData = [
  {
    id: 1,
    title: "Customized Solutions",
    description:
      "We tailor our services to meet the specific needs of each client, ensuring effective and impactful outcomes.",
    icon: "/src/assets/icon/jigsaw.png",
  },
  {
    id: 2,
    title: "Proven Expertise",
    description:
      "Our experienced team brings a track record of success across diverse sectors and challenges.",
    icon: "/src/assets/icon/expertise.png",
  },
  {
    id: 3,
    title: "Innovation & Technology",
    description:
      "We leverage modern tools and creative thinking to deliver cutting-edge, future-ready solutions.",
    icon: "/src/assets/icon/innovation.png",
  },
  {
    id: 4,
    title: "People-Centered Values",
    description:
      "Our work is driven by empathy, inclusivity, and a deep respect for individuals and communities.",
    icon: "/src/assets/icon/people.png",
  },
  {
    id: 5,
    title: "Commitment to Excellence",
    description:
      "We uphold the highest standards in everything we do, ensuring quality, reliability, and impact.",
    icon: "/src/assets/icon/expertise.png",
  },
  {
    id: 6,
    title: "Collaborative Approach",
    description:
      "We work hand-in-hand with clients, partners, and stakeholders to co-create solutions and drive change.",
    icon: "/src/assets/icon/coordination.png",
  },
];

function WhyChooseUs() {
  return (
    <section className="min-h-screen px-4 py-16 md:px-8 lg:px-12 mt-10 mb-10 space-y-12">
      {/* Headline */}
      <div className="max-w-3xl">
        <h1 className="text-4xl sm:text-5xl leading-tight">
          Why <span className="font-semibold text-secondary">Unfold</span> Solution is the Right Choice
        </h1>
        <p className="mt-4 text-zinc-500 lowercase text-base sm:text-lg">
          Better Energy Starts Here that is Powered by Advanced Solar Materials and with it’s Modern Tech
        </p>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {whyChooseUsData.map((why) => (
          <div key={why.id} className="space-y-2">
            <img
              src={why.icon}
              alt=""
              className="size-10 md:size-12 my-4"
            />
            <h4 className="text-xl sm:text-2xl font-medium">{why.title}</h4>
            <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">{why.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default WhyChooseUs;