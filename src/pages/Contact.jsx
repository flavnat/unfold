import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const contactInfo = [
  {
    title: "Message Us",
    content: "unfoldbusinesssolutions@gmail.com",
  },
  {
    title: "Call Us",
    content: "+251910832473",
  },
  {
    title: "Location",
    content: "22 Quality Bldg, Addis Ababa",
  },
];

function Contact() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <>
      <Navbar />
      <div className="bg-primary">
        <div
          className="py-20 sm:py-32 md:py-40 text-white items-center max-w-6xl mx-auto text-center px-4"
          data-aos="fade-up"
        >
          <div className="space-y-2">
            <h1 className="text-2xl sm:text-3xl md:text-4xl">
              Get in Touch with unfold solutions
            </h1>
            <p className="w-full sm:w-3/4 md:w-1/2 mx-auto text-sm sm:text-base">
              Interested in switching to solar? Have questions about our
              services? Our team is ready to help! Reach out to us today and
              take the first step toward energy independence.
            </p>
          </div>
        </div>

        <div className="bg-[#E1EBFF]" data-aos="fade-up" data-aos-delay="100">
          <div className="max-w-5xl mx-auto py-16">
            <div className="max-w-lg w-full mx-auto lg:col-span-2">
              <h2 className="text-lg sm:text-xl mb-6">Send Us a Message</h2>
              <form
                action="mailto:unfoldbusinesssolutions@gmail.com"
                method="POST"
                encType="text/plain"
              >
                <div className="space-y-4 sm:space-y-5">
                  {/* Name Field */}
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-3 sm:px-4 py-2 border border-gray-400 focus:ring-2 focus:ring-secondary focus:border-secondary outline-none transition"
                      placeholder="Your name"
                      required
                    />
                  </div>

                  {/* Email Field */}
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-3 sm:px-4 py-2 border border-gray-400 focus:ring-2 focus:ring-secondary focus:border-secondary outline-none transition"
                      placeholder="you@example.com"
                      required
                    />
                  </div>

                  {/* Subject Field */}
                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      className="w-full px-3 sm:px-4 py-2 border border-gray-400 focus:ring-2 focus:ring-secondary focus:border-secondary outline-none transition"
                      placeholder="How can we help?"
                      required
                    />
                  </div>

                  {/* Message Field */}
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      className="w-full px-3 sm:px-4 py-2 border border-gray-400 focus:ring-2 focus:ring-secondary focus:border-secondary outline-none transition resize-none"
                      placeholder="Your message here..."
                      required
                    ></textarea>
                  </div>

                  {/* Submit Button */}
                  <div>
                    <button
                      type="submit"
                      className="w-full bg-secondary text-white py-2 px-6 hover:bg-secondary/90 focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-2 transition"
                    >
                      Send Message
                    </button>
                  </div>
                </div>
              </form>
            </div>

            <div className="max-w-lg py-10 mx-auto">
              <div className="space-y-1">
                <h1 className="text-xl sm:text-2xl">Let's Connect</h1>
                <p className="text-xs sm:text-sm text-zinc-500">
                  Have a project in mind? Let's turn your ideas into stunning
                  realities. Reach out now
                </p>
              </div>

              <div className="mt-6">
                {contactInfo.map((info) => (
                  <div
                    className="flex justify-between space-x-4 py-4 border-b"
                    key={info.title}
                  >
                    <h4 className="text-sm sm:text-base">{info.title}</h4>

                    {info.title === "Message Us" ? (
                      <a
                        href={`mailto:${info.content}`}
                        className="text-sm sm:text-base hover:underline break-all"
                      >
                        {info.content}
                      </a>
                    ) : info.title === "Call Us" ? (
                      <a
                        href={`tel:${info.content}`}
                        className="text-sm sm:text-base hover:underline"
                      >
                        {info.content}
                      </a>
                    ) : (
                      <h5 className="text-sm sm:text-base">{info.content}</h5>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Contact;
