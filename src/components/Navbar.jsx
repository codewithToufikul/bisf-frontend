import * as React from "react";
import { Link } from "react-router-dom";
import { Menu, X, ChevronDown, LogIn } from "lucide-react";
import navLogo from "../../src/assets/BILF.webp";

// Navigation data
const aboutItems = [
  {
    title: "Who We Are",
    href: "/about-us#who-we-are",
    description: "Learn about our organization and mission",
  },
  {
    title: "Mission & Vision",
    href: "/about-us#mission-vision",
    description: "Our goals and aspirations",
  },
  {
    title: "Our Values",
    href: "/about-us#value-section",
    description: "Principles that guide us",
  },
  {
    title: "History",
    href: "/about-us#history",
    description: "Our journey and milestones",
  },
  {
    title: "Achievements",
    href: "/about-us#achievements",
    description: "Recognition and accomplishments",
  },
];

const leadershipItems = [
  {
    title: "Executive Committee",
    href: "/leadership",
    description: "Meet our leadership team",
  },
  {
    title: "Advisory Board",
    href: "/leadership/advisory",
    description: "Our trusted advisors",
  },
  {
    title: "Department Heads",
    href: "/leadership/departments",
    description: "Department coordinators",
  },
  {
    title: "All Members",
    href: "/leadership",
    description: "View complete member directory",
  },
];

const joinItems = [
  {
    title: "Why Join BILF",
    href: "/join-us#benefits",
    description: "Benefits of membership",
  },
  {
    title: "Apply Now",
    href: "/join-us#apply",
    description: "Start your application",
  },
];

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const [activeDropdown, setActiveDropdown] = React.useState(null);
  const [scrolled, setScrolled] = React.useState(false);

  // Handle scroll effect
  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close dropdown when clicking outside
  React.useEffect(() => {
    const handleClickOutside = (e) => {
      if (activeDropdown && !e.target.closest(".dropdown-container")) {
        setActiveDropdown(null);
      }
      if (mobileMenuOpen && !e.target.closest(".mobile-menu")) {
        setMobileMenuOpen(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [activeDropdown, mobileMenuOpen]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 py-3 transition-all duration-300 ${
        scrolled 
          ? "bg-gray-900/80 backdrop-blur-md shadow-2xl border-b border-gray-800" 
          : "bg-gray-900/80 backdrop-blur-md border-b border-gray-800"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <img className="w-16 group-hover:scale-105 transition-transform" src={navLogo} alt="BILF Logo" />
            <div className="hidden sm:block">
              <h1 className="text-xl font-bold text-white">BILF</h1>
              <p className="text-xs text-gray-400">
                Intellectual Leaders Forum
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {/* Home */}
            <Link
              to="/"
              className="px-4 py-2 text-gray-300 hover:text-white hover:bg-gray-800 rounded-lg transition-all font-medium"
            >
              Home
            </Link>

            {/* About Dropdown */}
            <DropdownMenu
              title="About"
              items={aboutItems}
              activeDropdown={activeDropdown}
              setActiveDropdown={setActiveDropdown}
            />

            {/* Leadership Dropdown */}
            <DropdownMenu
              title="Leadership"
              items={leadershipItems}
              activeDropdown={activeDropdown}
              setActiveDropdown={setActiveDropdown}
            />

            {/* Join Us Dropdown */}
            <DropdownMenu
              title="Join Us"
              items={joinItems}
              activeDropdown={activeDropdown}
              setActiveDropdown={setActiveDropdown}
            />

            {/* Contact */}
            <Link
              to="/contact"
              className="px-4 py-2 text-gray-300 hover:text-white hover:bg-gray-800 rounded-lg transition-all font-medium"
            >
              Contact
            </Link>
          </div>

          {/* Right Side Actions */}
          <div className="hidden lg:flex items-center space-x-3">
            <Link
              to="/admin/login"
              className="flex items-center space-x-2 px-4 py-2 text-gray-300 hover:text-white hover:bg-gray-800 rounded-lg transition-all border border-gray-700 hover:border-gray-600"
            >
              <LogIn className="w-4 h-4" />
              <span className="font-medium">Login</span>
            </Link>
            <Link
              to="/join-us#apply"
              className="px-5 py-2 bg-white text-gray-900 rounded-lg hover:bg-gray-100 transition-all shadow-lg hover:shadow-xl font-medium"
            >
              Join Now
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              setMobileMenuOpen(!mobileMenuOpen);
            }}
            className="lg:hidden p-2 rounded-lg hover:bg-gray-800 transition-colors mobile-menu"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6 text-gray-300" />
            ) : (
              <Menu className="w-6 h-6 text-gray-300" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-gray-900 border-t border-gray-800 shadow-2xl mobile-menu">
          <div className="px-4 py-3 space-y-1 max-h-[calc(100vh-4rem)] overflow-y-auto">
            <MobileLink to="/" onClick={() => setMobileMenuOpen(false)}>
              Home
            </MobileLink>

            <MobileDropdown
              title="About"
              items={aboutItems}
              activeDropdown={activeDropdown}
              setActiveDropdown={setActiveDropdown}
              setMobileMenuOpen={setMobileMenuOpen}
            />

            <MobileDropdown
              title="Leadership"
              items={leadershipItems}
              activeDropdown={activeDropdown}
              setActiveDropdown={setActiveDropdown}
              setMobileMenuOpen={setMobileMenuOpen}
            />

            <MobileDropdown
              title="Join Us"
              items={joinItems}
              activeDropdown={activeDropdown}
              setActiveDropdown={setActiveDropdown}
              setMobileMenuOpen={setMobileMenuOpen}
            />

            <MobileLink to="/contact" onClick={() => setMobileMenuOpen(false)}>
              Contact
            </MobileLink>

            <div className="pt-3 mt-3 border-t border-gray-800 space-y-2">
              <Link
                to="/admin/login"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center space-x-2 px-4 py-3 text-gray-300 hover:bg-gray-800 rounded-lg transition-all border border-gray-700"
              >
                <LogIn className="w-5 h-5" />
                <span className="font-medium">Admin Login</span>
              </Link>
              <Link
                to="/join-us"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center px-4 py-3 bg-white text-gray-900 rounded-lg hover:bg-gray-100 transition-all font-medium shadow-lg"
              >
                Join BILF Now
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

// Desktop Dropdown Component
function DropdownMenu({ title, items, activeDropdown, setActiveDropdown }) {
  const isActive = activeDropdown === title;

  const handleClick = (e) => {
    e.stopPropagation();
    setActiveDropdown(isActive ? null : title);
  };

  return (
    <div className="relative dropdown-container">
      <button
        onClick={handleClick}
        className={`flex items-center space-x-1 px-4 py-2 rounded-lg transition-all font-medium ${
          isActive
            ? "text-white bg-gray-800"
            : "text-gray-300 hover:text-white hover:bg-gray-800"
        }`}
      >
        <span>{title}</span>
        <ChevronDown
          className={`w-4 h-4 transition-transform ${
            isActive ? "rotate-180" : ""
          }`}
        />
      </button>

      {isActive && (
        <div className="absolute top-full left-0 mt-1 w-72 bg-gray-800 rounded-lg shadow-2xl border border-gray-700 py-2 animate-in fade-in slide-in-from-top-2 duration-200">
          {items.map((item, index) => (
            <Link
              key={index}
              to={item.href}
              className="block px-4 py-3 hover:bg-gray-700 transition-colors group"
              onClick={() => setActiveDropdown(null)}
            >
              <div className="font-medium text-white group-hover:text-gray-100 transition-colors">
                {item.title}
              </div>
              {item.description && (
                <div className="text-sm text-gray-400 mt-0.5">
                  {item.description}
                </div>
              )}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

// Mobile Link Component
function MobileLink({ to, onClick, children }) {
  return (
    <Link
      to={to}
      onClick={onClick}
      className="block px-4 py-3 text-gray-300 hover:bg-gray-800 hover:text-white rounded-lg transition-all font-medium"
    >
      {children}
    </Link>
  );
}

// Mobile Dropdown Component
function MobileDropdown({
  title,
  items,
  activeDropdown,
  setActiveDropdown,
  setMobileMenuOpen,
}) {
  const isActive = activeDropdown === title;

  const toggleDropdown = (e) => {
    e.stopPropagation();
    setActiveDropdown(isActive ? null : title);
  };

  return (
    <div className="space-y-1 dropdown-container">
      <button
        onClick={toggleDropdown}
        className="flex items-center justify-between w-full px-4 py-3 text-gray-300 hover:bg-gray-800 hover:text-white rounded-lg transition-all font-medium"
      >
        <span>{title}</span>
        <ChevronDown
          className={`w-4 h-4 transition-transform ${
            isActive ? "rotate-180" : ""
          }`}
        />
      </button>

      {isActive && (
        <div className="ml-4 space-y-1 animate-in fade-in slide-in-from-top-2 duration-200">
          {items.map((item, index) => (
            <Link
              key={index}
              to={item.href}
              onClick={() => {
                setActiveDropdown(null);
                setMobileMenuOpen(false);
              }}
              className="block px-4 py-2 text-sm text-gray-400 hover:text-white hover:bg-gray-800 rounded-lg transition-all"
            >
              <div className="font-medium">{item.title}</div>
              {item.description && (
                <div className="text-xs text-gray-500 mt-0.5">
                  {item.description}
                </div>
              )}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}