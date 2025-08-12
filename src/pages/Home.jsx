import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import {
  ChevronsRightIcon,
  Database,
  Puzzle,
  Award,
  Lightbulb,
  Users,
  Star,
  Handshake,
} from "lucide-react";

import ServiceTabs from "../components/ServiceTabs";
import TestimonialCarousel from "../components/TestimonialCarousel";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const whyChooseUsData = [
  {
    id: 1,
    title: "Customized Solutions",
    description:
      "We tailor our services to meet the specific needs of each client, ensuring effective and impactful outcomes.",
    icon: Puzzle,
  },
  {
    id: 2,
    title: "Proven Expertise",
    description:
      "Our experienced team brings a track record of success across diverse sectors and challenges.",
    icon: Award,
  },
  {
    id: 3,
    title: "Innovation & Technology",
    description:
      "We leverage modern tools and creative thinking to deliver cutting-edge, future-ready solutions.",
    icon: Lightbulb,
  },
  {
    id: 4,
    title: "People-Centered Values",
    description:
      "Our work is driven by empathy, inclusivity, and a deep respect for individuals and communities.",
    icon: Users,
  },
  {
    id: 5,
    title: "Commitment to Excellence",
    description:
      "We uphold the highest standards in everything we do, ensuring quality, reliability, and impact.",
    icon: Star,
  },
  {
    id: 6,
    title: "Collaborative Approach",
    description:
      "We work hand-in-hand with clients, partners, and stakeholders to co-create solutions and drive change.",
    icon: Handshake,
  },
];

// ... avatars and testimonials unchanged
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

function Home() {
  useEffect(() => {
    AOS.init({ duration: 800, easing: "ease-in-out", once: true });
  }, []);

  return (
    <>
      <div>
        <Navbar />
      </div>
      <div>
        <div
          className="grid gap-5 p-4 sm:p-5 py-16 sm:py-20 md:py-24 lg:grid-cols-2 text-white font-serif items-center max-w-6xl mx-auto"
          data-aos="fade-up"
        >
          <div data-aos="fade-right">
            <h4 className="my-4 border border-zinc-400 text-slate-300 px-3 sm:px-4 text-xs sm:text-sm py-1 w-fit rounded-3xl capitalize">
              Best consulting
            </h4>
            <h1 className="text-3xl sm:text-4xl md:text-5xl leading-tight sm:leading-snug md:leading-14">
              Unfolding Potentials, Nurturing Growth
            </h1>
            <p className="mt-4 sm:mt-5 text-base sm:text-lg">
              Empowering organizations to achieve excellence through innovative
              learning, strategic consulting, and agile project management.
            </p>

            <button className="border mt-4 sm:mt-6 px-3 sm:px-4 py-2 flex space-x-2 border-zinc-200 rounded-3xl text-base sm:text-lg items-center">
              <span>work together</span>{" "}
              <span>
                <ChevronsRightIcon strokeWidth={1.2} />
              </span>
            </button>
          </div>
          <div className="order-1 lg:order-2" data-aos="fade-left">
            <img src="assets/air.webp" alt="" className="w-full h-auto" />
          </div>
        </div>

        <div
          className="bg-[#E1EBFF] py-8 sm:py-10 font-serif"
          data-aos="fade-up"
        >
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center" data-aos="zoom-in">
              <h1 className="text-2xl sm:text-3xl md:text-4xl text-center mx-auto text-zinc-700 px-4">
                Streamlines tasks,elevates <br className="hidden sm:block" />{" "}
                efficiency for success
              </h1>
            </div>
            <ServiceTabs />
          </div>
        </div>

        <div className="bg-white">
          <div
            className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-x-20 py-8 sm:py-20 md:py-24 max-w-6xl mx-auto px-4"
            data-aos="fade-up"
          >
            <div
              className="order-2 lg:order-1 grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-x-4 gap-y-8 sm:gap-y-14"
              data-aos="fade-right"
            >
              {whyChooseUsData.map((data) => {
                const Icon = data.icon;
                return (
                  <div
                    className="space-y-3 px-3 sm:px-4 py-2 border-l border-zinc-200"
                    key={data.id}
                  >
                    <Icon />
                    <h1 className="text-lg sm:text-xl">{data.title}</h1>
                    <p className="text-xs sm:text-sm text-zinc-400">
                      {data.description}
                    </p>
                  </div>
                );
              })}
            </div>

            <div
              className="order-1 lg:order-2 flex flex-col font-serif justify-between bg-[#E1EBFF] p-6 sm:p-8 lg:p-10"
              data-aos="fade-left"
            >
              <div className="space-y-3">
                <h1 className="text-2xl sm:text-3xl md:text-4xl">
                  Why Unfold Solution is the Right Choice
                </h1>
                <p className="text-zinc-500 text-sm sm:text-base">
                  Excellence Begins Here Powered by Unfold Solutions, where
                  innovation, modern technology, and transformative impact come
                  together
                </p>
              </div>

              <button className="border px-4 cursor-pointer hover:underline py-1.5 w-fit bg-primary text-white mt-6">
                learn more
              </button>
            </div>
          </div>
        </div>

        <div className="bg-white font-serif font-light">
          <div
            className="max-w-6xl grid grid-cols-1 lg:grid-cols-2 py-8 sm:py-20 md:py-24 mx-auto gap-8 lg:gap-x-10 px-4"
            data-aos="fade-up"
          >
            <div className="space-y-4 p-4 sm:p-6">
              <h1 className="text-2xl sm:text-3xl md:text-4xl">
                {" "}
                What Our Clients Are Saying.
              </h1>
              <p className="text-zinc-500 text-sm sm:text-base">
                Our clients value Unfold Solutions for streamlining workflows,
                driving operational efficiency, and empowering sustainable
                organizational growth.
              </p>
            </div>

            <div className="px-2 sm:px-6" data-aos="fade-left">
              <TestimonialCarousel
                testimonials={testimonials}
                autoPlay={true}
                interval={5000}
                showArrows={true}
                showDots={true}
              />
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto">
          <Footer />
        </div>
      </div>
    </>
  );
}

export default Home;
