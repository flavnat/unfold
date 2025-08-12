import Navbar from "../components/Navbar";
import ServiceTabsWithAccordion from "../components/ServiceTabsMain";

function Services() {
  return (
    <>
      <Navbar />
      <div className="bg-[#E1EBFF]">
        <div className="py-40 font-serif items-center max-w-6xl mx-auto text-center">
          <h1 className="text-5xl leading-14">
            Unleash Success with <br /> Our Comprehensive Services
          </h1>
          <p className="px-72 mt-4 text-lg">
            We offer a wide range of comprehensive services designed to address
            your business needs and propel your organization towards success.
          </p>

          <img
            src="/assets/hero1.png"
            className="object-cover h-[300px] sm:h-[400px] md:h-[500px] mt-10 w-full rounded-3xl shadow-lg"
            alt="Hero"
          />
        </div>

        <div className="bg-white py-10 font-serif">
          <div className="max-w-6xl mx-auto">
            {/* /////////////////////////// */}
            <div className="text-center">
              <h1 className="text-4xl text-center mx-auto text-zinc-700">
                Simplifies{" "}
                <span className="italic">
                  task management <br />
                </span>
                and enhances productivity!
              </h1>
            </div>
            {/* /////////////////////////// */}
            <ServiceTabsWithAccordion />
          </div>
        </div>
      </div>
    </>
  );
}

export default Services;
