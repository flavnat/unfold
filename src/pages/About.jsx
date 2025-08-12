import { Lamp, Linkedin } from "lucide-react";
import Navbar from "../components/Navbar";

const teamMembers = [
  {
    id: 1,
    name: "Mekonnen Mengesha",
    role: "CEO",
    image: "/assets/team/team1.png",
  },
  {
    id: 2,
    name: "Chere Lemma",
    role: "CTO",
    image: "/assets/team/team2.png",
  },
  {
    id: 3,
    name: "Dawit Teshome",
    role: "Team Lead",
    image: "/assets/team/team2.png",
  },
  {
    id: 4,
    name: "Dawit Teshome",
    role: "Head of Business",
    image: "/assets/team/team2.png",
  },
];

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

function About() {
  return (
    <>
      <div>
        <Navbar />
      </div>
      <div className="bg-[#E1EBFF]">
        <div className="py-40 font-serif items-center max-w-6xl mx-auto text-center">
          <h1 className="text-5xl leading-14">
            Visualize your ultimate goal, <br />
            take bold action, and watch success unfold.
          </h1>
          <p className="px-64 mt-4 text-lg">
            Rooted in people, powered by insight we help organizations evolve
            through strategic consulting, capacity building, and transformative
            learning experiences
          </p>

          <img
            src="/assets/hero1.png"
            className="object-cover h-[300px] sm:h-[400px] md:h-[500px] mt-10 w-full rounded-3xl shadow-lg"
            alt="Hero"
          />
        </div>

        <div className="bg-white font-serif">
          <div className="max-w-6xl space-y-8 grid grid-cols-2 mx-auto py-10 px-10 gap-x-6 items-center">
            <div className="space-y-3 bg-primary text-white p-6">
              <h1 className="text-4xl">Our Vision</h1>
              <p className="text-lg">
                To be the principal partner in organizational growth,
                innovation, and excellence through fostering a culture of
                continuous improvement.
              </p>
            </div>

            <div className="space-y-3 bg-[#F3F7FF] p-6">
              <h1 className="text-4xl">Our Mission</h1>
              <p className="text-lg">
                To empower organizations to achieve operational excellence and
                substantial growth by delivering innovative solutions, nurturing
                a culture of relentless improvement, and ensuring our clients
                consistently outpace the ever-evolving business landscape
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white">
          <div className="max-w-6xl mx-auto py-20 font-serif">
            <h1 className="text-5xl text-center">our core values</h1>

            <div className="grid grid-cols-3 my-8 gap-4 gap-y-6">
              {coreValues.map((value) => (
                <div className="px-10 py-8 space-y-4 border-r border-zinc-200">
                  <Lamp />
                  <h1 className="text-xl">{value.title}</h1>
                  <p className="text-zinc-600">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-[#F3F7FF]">
          <div className="max-w-6xl mx-auto py-24 ">
            <h1 className="text-4xl text-center font-serif">
              Meet the <span className="font-serif"> experts behind </span>
              AirList
              <br />
              your trusted IT Partners
            </h1>

            <div className="my-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
              {teamMembers.map((member) => (
                <div key={member.id} className="space-y-3">
                  <div className="overflow-hidden rounded-xl aspect-[4/5]">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="space-y-0.5 flex justify-between items-end">
                    <div>
                      <h4 className="text-lg">{member.name}</h4>
                      <p className="text-sm">{member.role}</p>
                    </div>
                    <div>
                      <Linkedin strokeWidth={1} />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
