import { ChevronsRightIcon, Database } from "lucide-react";
import ServiceTabs from "../components/ServiceTabs";
import TestimonialCarousel from "../components/TestimonialCarousel";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

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

const whyChooseUsData = [
  {
    id: 1,
    title: "Customized Solutions",
    description:
      "We tailor our services to meet the specific needs of each client, ensuring effective and impactful outcomes.",
    icon: "/assets/icon/jigsaw.png",
  },
  {
    id: 2,
    title: "Proven Expertise",
    description:
      "Our experienced team brings a track record of success across diverse sectors and challenges.",
    icon: "/assets/icon/expertise.png",
  },
  {
    id: 3,
    title: "Innovation & Technology",
    description:
      "We leverage modern tools and creative thinking to deliver cutting-edge, future-ready solutions.",
    icon: "/assets/icon/innovation.png",
  },
  {
    id: 4,
    title: "People-Centered Values",
    description:
      "Our work is driven by empathy, inclusivity, and a deep respect for individuals and communities.",
    icon: "/assets/icon/people.png",
  },
  {
    id: 5,
    title: "Commitment to Excellence",
    description:
      "We uphold the highest standards in everything we do, ensuring quality, reliability, and impact.",
    icon: "/assets/icon/expertise.png",
  },
  {
    id: 6,
    title: "Collaborative Approach",
    description:
      "We work hand-in-hand with clients, partners, and stakeholders to co-create solutions and drive change.",
    icon: "/assets/icon/coordination.png",
  },
];

function Home() {
  return (
    <>
      <div>
        <Navbar />
      </div>
      <div className="">
        <div className="grid gap-x-5 p-5 py-24 md:grid-cols-2 text-white font-serif items-center max-w-6xl mx-auto">
          <div className="">
            <h4 className="my-4 border border-zinc-400 text-zinc-200 px-4 text-sm py-1 w-fit rounded-3xl capitalize">
              Best consulting
            </h4>
            <h1 className="text-5xl leading-14">
              Unfolding Potentials, Nurturing Growth
            </h1>
            <p className="mt-5 text-lg">
              Empowering organizations to achieve excellence through innovative
              learning, strategic consulting, and agile project management.
            </p>

            <button className="border mt-6 px-4 py-2 flex space-x-2 border-zinc-200 rounded-3xl text-lg items-center">
              <span>work together</span>{" "}
              <span>
                <ChevronsRightIcon strokeWidth={1.2} />
              </span>
            </button>
          </div>
          <div className="">
            <img src="assets/air.webp" alt="" />
          </div>
        </div>

        {/* /////////////////////////////////// */}

        <div className="bg-[#E1EBFF] py-10 font-serif">
          <div className="max-w-6xl mx-auto">
            {/* /////////////////////////// */}
            <div className="text-center">
              <h1 className="text-4xl text-center mx-auto text-zinc-700">
                Streamlines tasks,elevates <br /> efficiency for success
              </h1>
            </div>
            {/* /////////////////////////// */}
            <ServiceTabs />
          </div>
        </div>

        <div className="bg-white">
          <div className="grid grid-cols-2 gap-x-20 py-24 max-w-6xl mx-auto">
            <div className="grid grid-cols-2 gap-x-4 gap-y-14 ">
              {whyChooseUsData.map((data) => (
                <div
                  className="space-y-3 px-4 py-2 border-l border-zinc-200"
                  key={data.id}
                >
                  <Database />
                  <h1 className="text-xl">{data.title}</h1>
                  <p className="text-sm text-zinc-400">{data.description}</p>
                </div>
              ))}
            </div>

            <div className="flex flex-col font-serif justify-between bg-[#E1EBFF] p-10">
              <div className="space-y-3">
                <h1 className="text-4xl">
                  Why Unfold Solution is the Right Choice
                </h1>
                <p className="text-zinc-500">
                  Excellence Begins Here Powered by Unfold Solutions, where
                  innovation, modern technology, and transformative impact come
                  together
                </p>
              </div>

              <button className="border px-4 cursor-pointer hover:underline py-1.5 w-fit bg-primary text-white">
                learn more
              </button>
            </div>
          </div>
        </div>

        <div className="bg-white font-serif font-light">
          <div className="max-w-6xl grid grid-cols-2 py-24 mx-auto gap-x-10">
            <div className=" space-y-4 p-6">
              <h1 className="text-4xl"> What Our Clients Are Saying.</h1>
              <p className="text-zinc-500">
                Our clients value Unfold Solutions for streamlining workflows,
                driving operational efficiency, and empowering sustainable
                organizational growth.
              </p>
            </div>

            <div className="px-6">
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
