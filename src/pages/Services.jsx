import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import ServiceTabsWithAccordion from "../components/ServiceTabsMain";

function Services() {
  useEffect(() => {
    AOS.init({ duration: 800, easing: "ease-in-out", once: true });
  }, []);

  return (
    <>
      <Navbar />
      <div className="bg-[#E1EBFF]">
        <div
          className="py-20 sm:py-32 md:py-40  items-center max-w-6xl mx-auto text-center px-4"
          data-aos="fade-up"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl leading-tight sm:leading-snug md:leading-14">
            Unleash Success with <br className="hidden sm:block" /> Our
            Comprehensive Services
          </h1>
          <p className="px-4 sm:px-16 md:px-32 lg:px-72 mt-4 text-base sm:text-lg">
            We offer a wide range of comprehensive services designed to address
            your business needs and propel your organization towards success.
          </p>

          <img
            src="/assets/hero1.png"
            className="object-cover h-[250px] sm:h-[300px] md:h-[400px] lg:h-[500px] mt-8 sm:mt-10 w-full rounded-2xl sm:rounded-3xl shadow-lg"
            alt="Hero"
            data-aos="zoom-in"
          />
        </div>

        <div className="bg-white py-8 sm:py-10 ">
          <div
            className="max-w-6xl mx-auto px-4"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <div className="text-center">
              <h1 className="text-2xl sm:text-3xl md:text-4xl text-center mx-auto text-zinc-700">
                Simplifies{" "}
                <span className="italic">
                  task management <br className="hidden sm:block" />
                </span>
                and enhances productivity!
              </h1>
            </div>
            <ServiceTabsWithAccordion />
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto">
        <Footer />
      </div>
    </>
  );
}

export default Services;
