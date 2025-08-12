import Navbar from "../components/Navbar";
const contactInfo = [
  {
    title: "Message Us",
    content: "info@unfold.com",
  },
  {
    title: "Call Us",
    content: "(555) 987-6543",
  },
  {
    title: "Location",
    content: "4567 Elm Street, Suite 301,",
  },
];

function Contact() {
  return (
    <>
    <Navbar />
      <div className="bg-primary">
        <div className="py-40 font-serif text-white items-center max-w-6xl mx-auto text-center">
          <div className="space-y-2">
            <h1 className="text-4xl">Get in Touch with unfold solutions</h1>
            <p className="w-1/2 mx-auto">
              Interested in switching to solar? Have questions about our
              services? Our team is ready to help! Reach out to us today and
              take the first step toward energy independence.
            </p>
          </div>
        </div>

        <div className="bg-[#E1EBFF] font-serif">
          <div className="max-w-5xl mx-auto py-24 ps-28 grid grid-cols-3">
            <div className="">
              <div className="space-y-1 ">
                <h1 className="text-2xl">Let's Connect</h1>
                <p className="text-sm text-zinc-500">
                  Have a project in mind? Let’s turn your ideas into stunning
                  realities. Reach out now
                </p>
              </div>

              <div className="mt-6">
                {contactInfo.map((info) => (
                  <div
                    className={`flex justify-between space-x-4 py-4 border-b`}
                    key={info.title}
                  >
                    <h4>{info.title}</h4>
                    <h5>{info.content}</h5>
                  </div>
                ))}
              </div>
            </div>

            <div className="max-w-lg w-full mx-auto col-span-2">
              <h2 className="text-xl mb-6">Send Us a Message</h2>
              <form>
                <div className="space-y-5">
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
                      className="w-full px-4 py-2 border border-gray-300 focus:ring-2 focus:ring-secondary focus:border-secondary outline-none transition"
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
                      className="w-full px-4 py-2 border border-gray-300 focus:ring-2 focus:ring-secondary focus:border-secondary outline-none transition"
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
                      className="w-full px-4 py-2 border border-gray-300 focus:ring-2 focus:ring-secondary focus:border-secondary outline-none transition"
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
                      className="w-full px-4 py-2 border border-gray-300 focus:ring-2 focus:ring-secondary focus:border-secondary outline-none transition resize-none"
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
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
