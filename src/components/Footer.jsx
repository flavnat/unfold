import { Phone } from "lucide-react";
import { Mail } from "lucide-react";

function Footer() {
  return (
    <footer className="text-white min-h-32 p-4 sm:p-6 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-6 lg:gap-x-4 md:p-8 lg:p-10">
      {/* First Column */}
      <div className="space-y-4 sm:space-y-6 mb-6 md:mb-0">
        <h1 className="text-xl sm:text-2xl uppercase flex items-center">
          <span>
            {/* <img
              className="size-14"
              src="src\assets\logo.png"
              alt=""
              srcset=""
            /> */}
          </span>
          <span className="font-semibold">Unfold Solutions</span>
        </h1>
        <p className="text-zinc-300 lowercase text-sm sm:text-base">
          We empower organizations to achieve excellence through tailored
          solutions in Learning & Development, Consulting, and Project
          Management.
        </p>
        <p className="text-sm sm:text-base">123 Solar Drive, Suite 200 Los Angeles, CA, 90001</p>

        <div>
          <p className="text-sm sm:text-base">Follow Us</p>
        </div>
      </div>

      {/* Second Column */}
      <div className="flex flex-col sm:flex-row md:flex-col lg:flex-row space-y-6 sm:space-y-0 md:space-y-6 lg:space-y-0 justify-around mb-6 md:mb-0">
        <div className="space-y-4 sm:space-y-6">
          <h1 className="text-base sm:text-lg font-semibold">Quick Links</h1>
          <ul className="flex flex-col space-y-3 sm:space-y-4 text-sm sm:text-base">
            <li>About</li>
            <li>Contact</li>
            <li>Services</li>
            <li>Home</li>
          </ul>
        </div>
        <div className="space-y-4 sm:space-y-6">
          <h1 className="text-base sm:text-lg font-semibold">Contact</h1>
          <ul className="flex flex-col space-y-3 sm:space-y-4 text-sm sm:text-base">
            <li className="flex space-x-2 items-center">
              <Mail strokeWidth={1.2} size={18} /> <span>info@unfold.com</span>
            </li>
            <li className="flex space-x-2 items-center">
              <Phone strokeWidth={1.2} size={18} /> <span>+251-910111213</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Third Column */}
      <div className="space-y-3 sm:space-y-4 md:col-span-2 lg:col-span-1">
        <h1 className="text-lg sm:text-xl font-semibold">Subscribe for Updates</h1>
        <p className="text-zinc-300 lowercase text-sm sm:text-base">
          Subscribe to our newsletter for the latest tech solutions and consulte, exclusive offers, and expert insights.
        </p>
      </div>
    </footer>
  );
}

export default Footer;