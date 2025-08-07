const ourApproach = [
  {
    title: "Innovation with Purpose",
    subtitle:
      "We combine fresh thinking, modern tools, and evidence-based practices to design solutions that are relevant scalable, and impactful. Our work is rooted in a bold yet practical mindset",
    icon: "src/assets/rocket.png",
  },
  {
    title: "Partnership at the Core",
    subtitle:
      "We don’t work in isolation. We collaborate deeply with clients to understand their context, co-create strategies, and implement change that sticks. Your success is our shared goal.",
    icon: "src/assets/globe.png",
  },
  {
    title: "Built for Agility and Growth",
    subtitle:
      "We apply proven methods while staying flexible, continuously refining our approach to matchevolving needs. Our commitment to improvement ensures clients stay responsive and resilient infast-changing environments",
    icon: "src/assets/agile-methodology.png",
  },
];

function OurApproach() {
  return (
    <div className="my-20 grid grid-cols-2 px-10">
      <div className="space-y-2">
        <div className="">
          <h1 className="text-5xl">Work Process </h1>
          <h3 className="text-zinc-500 w-96">
            Streamlined Work Process That Drives Results Efficient, Transparent,
            and Tailored for Your Success
          </h3>
        </div>
      </div>

      <div className="space-y-14">
        {ourApproach.map((approach) => (
          <div className="space-y-2">
            <div className="flex items-center space-x-4">
              <img src={approach.icon} className="size-8" alt="" />
              <h1 className="text-2xl">{approach.title}</h1>
            </div>
            <p className="text-zinc-500">{approach.subtitle}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default OurApproach;
