import { useEffect, useState } from "react";
import { Link } from "react-router";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [shouldHide, setShouldHide] = useState(false);

  // Check if the link is active
  const isLinkActive = (path, exact = false) => {
    return exact
      ? location.pathname === path
      : location.pathname.startsWith(path);
  };

  const menuItems = [
    { label: "Home", href: "/", exact: true },
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
  ];

  // Handle scroll to hide/show navbar
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY && window.scrollY > 50) {
        setShouldHide(true); // scrolling down
      } else {
        setShouldHide(false); // scrolling up
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <header
      className={`fixed top-0 left-0 w-full bg-[#f4f4f4] z-50 transition-transform duration-300 ease-in-out ${
        shouldHide ? "-translate-y-full" : "translate-y-0"
      } shadow-sm`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Brand */}
          <div className="flex items-center space-x-1">
            <img src="/assets/logo.png" className="size-12" alt="" />
            <p className="uppercase font-medium">unfold solutions</p>
          </div>

          {/* Desktop Menu */}
          <nav className="hidden sm:flex items-center gap-8 text-lg">
            {menuItems.map((item, index) => (
              <Link
                key={index}
                to={item.href}
                className={`transition-colors hover:text-secondary ${
                  isLinkActive(item.href, item.exact)
                    ? "text-secondary font-semibold"
                    : "text-gray-700 hover:text-gray-900"
                }
                `}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Right-side Actions */}
          <div className="hidden lg:flex items-center gap-4">
            <Link
              to={"/contact"}
              className="px-4 py-2 text-sm font-medium text-secondary bg-transparent border border-secondary rounded-lg hover:bg-secondary hover:text-white transition-colors"
            >
              Contact Us
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="sm:hidden p-2"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6 text-gray-700"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`sm:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isMenuOpen ? "max-h-60 opacity-100 mb-2" : "max-h-0 opacity-0"
          }`}
        >
          <nav className="flex flex-col space-y-4 py-4 px-2">
            {menuItems.map((item, index) => (
              <Link
                key={index}
                to={item.href}
                className={`transition-colors hover:text-secondary ${
                  isLinkActive(item.href, item.exact)
                    ? "text-secondary font-semibold"
                    : "text-gray-700"
                }
                `}
              >
                {item.label}
              </Link>
            ))}
            <div className="pt-2 flex flex-col space-y-2">
              <Link
                to={"/contact"}
                className="px-4 py-2 self-start text-sm font-medium text-secondary hover:bg-secondary hover:text-white border border-secondary rounded-lg transition-colors"
              >
                Contact
              </Link>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
