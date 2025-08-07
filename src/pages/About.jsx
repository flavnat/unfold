import CoreValues from "../components/CoreValues";
import Footer from "../components/Footer";
import Team from "../components/Team";
import VisionMission from "../components/VisionMission";
import MainLayout from "../layouts/MainLayout";

function About() {
  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="min-h-dvh">
        {/* Text Content */}
        <div className="w-full mx-auto my-10 mt-20 sm:mt-32 md:mt-40 text-center space-y-4 px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl md:text-6xl leading-tight">
            Visualize your ultimate goal, take bold action, and watch success
            <span className="font-semibold text-secondary"> unfold.</span>
          </h1>
          <p className="text-base sm:text-lg text-zinc-600 max-w-3xl mx-auto">
            The AI SDR that automatically identifies high-intent prospects,
            performs, crafts hyper-relevant personalized outreach and books
            sales calls.
          </p>
        </div>

        {/* Image */}
        <div className="mt-10 px-4 sm:px-6 lg:px-8">
          <img
            src="/assets/hero1.png"
            className="object-cover h-[300px] sm:h-[400px] md:h-[500px] w-full rounded-3xl shadow-lg"
            alt="Hero"
          />
        </div>
      </section>

      <CoreValues />
      <Team />
      <VisionMission />
    </MainLayout>
  );
}

export default About;
