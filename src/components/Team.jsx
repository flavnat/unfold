const teamMembers = [
  {
    id: 1,
    name: "Mekonnen Mengesha",
    role: "Head of Organizational Learning & Growth",
    image: "/assets/team/team1.png", 
  },
  {
    id: 2,
    name: "Chere Lemma",
    role: "Head of Technology & Process Optimization",
    image: "/assets/team/team2.png",
  },
  {
    id: 3,
    name: "Dawit Teshome",
    role: "Head of Business Innovation & Consultancy",
    image: "/assets/team/team2.png",
  },
  {
    id: 4,
    name: "Dawit Teshome",
    role: "Head of Business Innovation & Consultancy",
    image: "/assets/team/team2.png",
  },
];

function Team() {
  return (
    <section className="min-h-dvh p-10 bg-secondary text-white rounded-3xl my-24">
      <div className="space-y-1">
        <h1 className="md:text-5xl text-4xl font-medium">Our Talented Team</h1>
        <p className="md:w-1/2 text-sm md:text-base mt-4 text-zinc-300">
          Through the innovation needed for energy utilization, meet the minds behind the magic a team of passionate experts driving change.
        </p>
      </div>

      <div className="mt-20 mb-10 w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
        {teamMembers.map((member) => (
          <div key={member.id} className="space-y-3">
            <div className="overflow-hidden rounded-xl aspect-[4/5]">
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="space-y-0.5">
              <h4 className="text-lg font-semibold">{member.name}</h4>
              <p className="text-sm text-zinc-300">{member.role}</p>
            </div>  
          </div>
        ))}
      </div>
    </section>
  );
}


export default Team;
