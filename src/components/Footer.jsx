import { Phone } from "lucide-react";
import { Mail } from "lucide-react";
import { FaLinkedinIn } from "react-icons/fa";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaX,
  FaXTwitter,
} from "react-icons/fa6";
import { Link } from "react-router";

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
        <p className="text-sm sm:text-base">22 Quality Bldg, Addis Ababa</p>

        <div>
          <p className="text-sm sm:text-base mb-4">Follow Us</p>
          <div className="flex gap-x-3 text-lg">
            <a
              href="https://www.facebook.com/yourpage"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-500"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://twitter.com/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-black"
            >
              <FaXTwitter />
            </a>
            <a
              href="https://www.instagram.com/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-pink-500"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.linkedin.com/company/unfold-business-solutions/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-700"
            >
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </div>

      {/* Second Column */}
      <div className="flex flex-col sm:flex-row md:flex-col lg:flex-row space-y-6 sm:space-y-0 md:space-y-6 lg:space-y-0 justify-around mb-6 md:mb-0">
        <div className="space-y-4 sm:space-y-6">
          <h1 className="text-base sm:text-lg font-semibold">Quick Links</h1>
          <ul className="flex flex-col space-y-3 sm:space-y-4 text-sm sm:text-base">
            <Link to={"/about"} className="hover:underline">
              About
            </Link>
            <Link to={"/contact"} className="hover:underline">
              Contact
            </Link>
            <Link to={"services"} className="hover:underline">
              Services
            </Link>
            <Link to={"/"} className="hover:underline">
              Home
            </Link>
          </ul>
        </div>
      </div>

      {/* Third Column */}
      <div className="space-y-4 sm:space-y-6">
        <div className="space-y-3 sm:space-y-4 md:col-span-2 lg:col-span-1">
          <h1 className="text-lg sm:text-xl font-semibold">Stay Connected</h1>
          <p className="text-zinc-300 lowercase text-sm sm:text-base">
            Get in touch with us for the latest updates, service announcements,
            and ways we can help bring your ideas to life.
          </p>
          <ul className="flex flex-col space-y-3 sm:space-y-4 text-sm sm:text-base">
            <li className="flex space-x-2 items-start">
              <Phone strokeWidth={1.2} size={18} />
              <span className="flex flex-col space-y-1">
                <a href="tel:+251910832473" className="hover:underline">
                  +251910832473
                </a>
              </span>
            </li>

            <li className="flex space-x-2 items-center">
              <Mail strokeWidth={1.2} size={18} />
              <a
                href="mailto:unfoldbusinesssolutions@gmail.com"
                className="hover:underline"
              >
                unfoldbusinesssolutions@gmail.com
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
