import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

import {
  Accessibility,
  Lamp,
  Lightbulb,
  ShieldCheck,
  Users
} from "lucide-react";
import { FaLinkedin } from "react-icons/fa";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const coreValues = [
  {
    title: "Empowerment",
    icon: Lamp,
    description:
      "We create environments where individuals and organizations can unlock their potential and lead their own transformation.",
  },
  {
    title: "Innovation",
    icon: Lightbulb,
    description:
      "We embrace bold thinking and modern tools to co-create solutions that are practical, creative, and future-ready.",
  },
  {
    title: "Integrity",
    icon: ShieldCheck,
    description:
      "We lead with honesty, accountability, and ethical responsibility in every interaction and decision we make.",
  },
  {
    title: "Accessibility",
    icon: Accessibility,
    description:
      "We design inclusive solutions that are responsive to diverse needs, voices, and lived experiences.",
  },
  {
    title: "Collaboration",
    icon: Users,
    description:
      "We believe that shared success is built through trust, listening, and co-creation with our clients and communities.",
  },
];

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
];

function About() {
  useEffect(() => {
    AOS.init({ duration: 800, easing: "ease-in-out", once: true });
  }, []);

  return (
    <>
      <div>
        <Navbar />
      </div>
      <div className="bg-[#E1EBFF]">
        <div
          className="py-20 sm:py-32 md:py-40  items-center max-w-6xl mx-auto text-center px-4"
          data-aos="fade-up"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl leading-tight sm:leading-snug md:leading-14">
            Visualize your ultimate goal, <br className="hidden sm:block" />
            take bold action, and watch success unfold.
          </h1>
          <p className="px-4 sm:px-16 md:px-32 lg:px-64 mt-4 text-base sm:text-lg">
            Rooted in people, powered by insight we help organizations evolve
            through strategic consulting, capacity building, and transformative
            learning experiences
          </p>

          <img
            src="/assets/hero1.png"
            className="object-cover h-[250px] sm:h-[300px] md:h-[400px] lg:h-[500px] mt-8 sm:mt-10 w-full rounded-2xl sm:rounded-3xl shadow-lg"
            alt="Hero"
            data-aos="zoom-in"
          />
        </div>

        <div className="bg-white ">
          <div
            className="max-w-6xl space-y-6 sm:space-y-8 grid grid-cols-1 lg:grid-cols-2 mx-auto py-8 sm:py-10 px-4 sm:px-10 gap-6 lg:gap-x-6 items-stretch"
            data-aos="fade-up"
          >
            <div className="space-y-3 bg-primary text-white p-4 sm:p-6 h-full">
              <h1 className="text-2xl sm:text-3xl md:text-4xl">Our Vision</h1>
              <p className="text-base sm:text-lg">
                To be the principal partner in organizational growth,
                innovation, and excellence through fostering a culture of
                continuous improvement.
              </p>
            </div>

            <div className="space-y-3 bg-[#F3F7FF] p-4 sm:p-6 h-full">
              <h1 className="text-2xl sm:text-3xl md:text-4xl">Our Mission</h1>
              <p className="text-base sm:text-lg">
                To empower organizations to achieve operational excellence and
                substantial growth by delivering innovative solutions, nurturing
                a culture of relentless improvement, and ensuring our clients
                consistently outpace the ever-evolving business landscape
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white">
          <div
            className="max-w-6xl mx-auto py-12 sm:py-16 md:py-20  px-4"
            data-aos="fade-up"
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl text-center">
              our core values
            </h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 my-6 sm:my-8 gap-4 gap-y-6">
              {coreValues.map((value, index) => {
                const Icon = value.icon;
                return (
                  <div
                    key={index}
                    className="px-4 sm:px-6 md:px-10 py-6 sm:py-8 space-y-4 border-r border-zinc-200"
                    data-aos="fade-up"
                    data-aos-delay={index * 100}
                  >
                    <Icon className="size-8 text-primary" />
                    <h1 className="text-lg sm:text-xl">{value.title}</h1>
                    <p className="text-zinc-600 text-sm sm:text-base">
                      {value.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div className="bg-[#F3F7FF]">
          <div
            className="max-w-6xl mx-auto py-16 sm:py-20 md:py-24 px-4"
            data-aos="fade-up"
          >
            <h1 className="text-2xl sm:text-3xl md:text-4xl text-center ">
              Meet the <span className=""> experts behind </span>
              Unfold Solutions
              <br className="hidden sm:block" />
              your trusted IT Partners
            </h1>

            <div className="my-8 sm:my-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
              {teamMembers.map((member) => (
                <div
                  key={member.id}
                  className="space-y-3 bg-primary p-5 rounded-2xl text-white"
                  data-aos="fade-up"
                  data-aos-delay={member.id * 100}
                >
                  <div className="overflow-hidden rounded-xl aspect-[4/5]">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="space-y-0.5 flex justify-between items-end">
                    <div className="space-y-1.5">
                      <h4 className="md:text-lg text-sm">{member.name}</h4>
                      <p className="text-xs sm:text-sm text-zinc-300">{member.role}</p>
                    </div>
                    <div>
                      <FaLinkedin className="w-6 h-6 hover:text-blue-700 cursor-pointer transition-colors" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto">
          <Footer />
        </div>
    </>
  );
}

export default About;
