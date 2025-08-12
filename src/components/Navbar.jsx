import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router";

export default function Navbar() {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [shouldHide, setShouldHide] = useState(false);

  const menuItems = [
    {
      label: "Home",
      href: "/",
      exact: true,
      bgColor: "#1B356A",
      textColor: "#ffffff",
    },
    {
      label: "About",
      href: "/about",
      bgColor: "#E1EBFF",
      textColor: "#1B356A",
    },
    {
      label: "Services",
      href: "/services",
      bgColor: "#E1EBFF",
      textColor: "#1B356A",
    },
  ];

  const isLinkActive = (path, exact = false) => {
    return exact
      ? location.pathname === path
      : location.pathname.startsWith(path);
  };

  // Compute active item during render (instant, no delay)
  const activeItem =
    menuItems.find((item) => isLinkActive(item.href, item.exact)) ||
    menuItems[0];

  const headerBgColor = activeItem.bgColor;
  const headerTextColor = activeItem.textColor;

  // Scroll hide/show logic
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY && window.scrollY > 50) {
        setShouldHide(true);
      } else {
        setShouldHide(false);
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <header
      style={{ backgroundColor: headerBgColor, color: headerTextColor }}
      className={`fixed top-0 left-0 w-full z-50 font-serif transition-transform duration-300 ease-in-out ${
        shouldHide ? "-translate-y-full" : "translate-y-0"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Brand */}
          <div className="flex items-center space-x-1">
            <img src="/assets/logo.png" className="size-12" alt="" />
            <p className="uppercase font-medium">unfold solutions</p>
          </div>

          {/* Desktop Menu */}
          <nav className="hidden sm:flex items-center gap-8">
            {menuItems.map((item, index) => (
              <Link
                key={index}
                to={item.href}
                className="transition-colors"
                style={{ color: headerTextColor }}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Right-side Actions */}
          <div className="hidden lg:flex items-center gap-4">
            <Link
              to="/contact"
              className="px-4 py-2 text-sm font-medium bg-transparent border rounded-lg hover:text-white transition-colors"
              style={{ borderColor: headerTextColor, color: headerTextColor }}
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
              className="w-6 h-6"
              style={{ color: headerTextColor }}
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
                className="transition-colors"
                style={{ color: headerTextColor }}
              >
                {item.label}
              </Link>
            ))}
            <div className="pt-2 flex flex-col space-y-2">
              <Link
                to="/contact"
                className="px-4 py-2 self-start text-sm font-medium rounded-lg transition-colors"
                style={{
                  color: headerTextColor,
                  borderColor: headerTextColor,
                  borderWidth: "1px",
                }}
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
