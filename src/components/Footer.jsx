import { Phone } from "lucide-react";
import { Mail } from "lucide-react";

function Footer() {
  return (
    <footer className="bg-secondary text-white min-h-32 p-6 md:grid md:grid-cols-3 md:gap-x-4 md:p-10">
      {/* First Column */}
      <div className="space-y-6 mb-8 md:mb-0">
        <h1 className="text-2xl uppercase flex items-center">
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
        <p className="text-zinc-300 lowercase">
          We empower organizations to achieve excellence through tailored
          solutions in Learning & Development, Consulting, and Project
          Management.
        </p>
        <p>123 Solar Drive, Suite 200 Los Angeles, CA, 90001</p>

        <div>
          <p>Follow Us</p>
        </div>
      </div>

      {/* Second Column */}
      <div className="flex flex-col sm:flex-row md:flex-col lg:flex-row space-y-6 sm:space-y-0 md:space-y-6 lg:space-y-0 justify-around mb-8 md:mb-0">
        <div className="space-y-6">
          <h1 className="text-lg font-semibold">Quick Links</h1>
          <ul className="flex flex-col space-y-4">
            <li>About</li>
            <li>Contact</li>
            <li>Services</li>
            <li>Home</li>
          </ul>
        </div>
        <div className="space-y-6">
          <h1 className="text-lg font-semibold">Contact</h1>
          <ul className="flex flex-col space-y-4">
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
      <div className="space-y-4">
        <h1 className="text-xl font-semibold">Subscribe for Updates</h1>
        <p className="text-zinc-300 lowercase">
          Subscribe to our newsletter for the latest tech solutions and consulte, exclusive offers, and expert insights.
        </p>
      </div>
    </footer>
  );
}

export default Footer;