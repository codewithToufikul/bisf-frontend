import { useState } from "react";
import {
  ArrowRight,
  Users,
  Award,
  Target,
  BookOpen,
  TrendingUp,
  Calendar,
  ChevronRight,
  Mail,
  Phone,
  MapPin,
  Facebook,
  Linkedin,
  Twitter,
  Instagram,
} from "lucide-react";

export default function Home() {
  const [email, setEmail] = useState("");

  // Stats data
  const stats = [
    { number: "500+", label: "Active Members", icon: Users },
    { number: "50+", label: "Events Organized", icon: Calendar },
    { number: "20+", label: "Awards Won", icon: Award },
    { number: "15+", label: "Universities", icon: BookOpen },
  ];

  // Featured members
  const featuredMembers = [
    {
      name: "Dr. Ahmed Rahman",
      designation: "President",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
      bio: "Leading our vision for academic excellence",
    },
    {
      name: "Fatima Khatun",
      designation: "Vice President",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
      bio: "Driving innovation and student engagement",
    },
    {
      name: "Kamal Hassan",
      designation: "General Secretary",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop",
      bio: "Coordinating initiatives and events",
    },
    {
      name: "Nadia Islam",
      designation: "Treasurer",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
      bio: "Managing resources and finances",
    },
  ];

  // Upcoming events
  const events = [
    {
      date: "Jan 15, 2026",
      title: "Leadership Summit 2026",
      description: "Annual gathering of intellectual minds",
      type: "Conference",
    },
    {
      date: "Feb 10, 2026",
      title: "Research Symposium",
      description: "Showcase of cutting-edge research",
      type: "Academic",
    },
    {
      date: "Mar 5, 2026",
      title: "Career Development Workshop",
      description: "Building professional skills",
      type: "Workshop",
    },
  ];

  // Why join reasons
  const benefits = [
    {
      icon: Users,
      title: "Network Building",
      description:
        "Connect with like-minded intellectuals from top universities across Bangladesh",
    },
    {
      icon: TrendingUp,
      title: "Skill Development",
      description:
        "Access workshops, seminars, and training programs for personal and professional growth",
    },
    {
      icon: Award,
      title: "Recognition",
      description:
        "Get recognized for your achievements and contributions to academic excellence",
    },
    {
      icon: Target,
      title: "Leadership Opportunities",
      description:
        "Lead initiatives, organize events, and develop leadership capabilities",
    },
  ];

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you for subscribing with: ${email}`);
    setEmail("");
  };

  return (
    <div className=" min-h-screen ">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white overflow-hidden pt-24 md:pt-32">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          ></div>
        </div>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-900/50 to-gray-900"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 md:py-32">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left Content */}
            <div className="text-center lg:text-left">
              <div className="inline-block mb-4 sm:mb-6">
                <span className="px-3 sm:px-4 py-2 bg-gray-800/80 border border-gray-700 rounded-full text-xs sm:text-sm font-medium backdrop-blur-sm">
                  Est. 2020 | Leading Student Organization
                </span>
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight">
                Bangladesh Intellectual Leaders Forum
              </h1>
              <p className="text-base sm:text-xl md:text-2xl mb-6 sm:mb-8 text-gray-300">
                Bangladesh first and foremost!
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
                <a
                  href="/join/apply"
                  className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 bg-white text-gray-900 rounded-lg hover:bg-gray-100 transition-all font-bold shadow-xl hover:shadow-2xl group text-sm sm:text-base"
                >
                  Join BILF Today
                  <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
                </a>
                <a
                  href="/about/who-we-are"
                  className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 border-2 border-gray-700 text-white rounded-lg hover:bg-gray-800 transition-all font-bold backdrop-blur-sm text-sm sm:text-base"
                >
                  Learn More
                </a>
              </div>
            </div>

            {/* Right Stats Card */}
            <div className="hidden lg:block">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-tr from-gray-800/40 to-gray-700/40 rounded-2xl transform rotate-3"></div>
                <div className="relative bg-gray-800/60 backdrop-blur-xl rounded-2xl p-6 lg:p-8 border border-gray-700/50 shadow-2xl">
                  <div className="space-y-5 lg:space-y-6">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-gray-700 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Users className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-bold text-base lg:text-lg text-white">
                          500+ Members
                        </h3>
                        <p className="text-gray-400 text-sm">
                          From top universities
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-gray-700 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Award className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-bold text-base lg:text-lg text-white">
                          20+ Awards
                        </h3>
                        <p className="text-gray-400 text-sm">
                          National recognition
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-gray-700 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Calendar className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-bold text-base lg:text-lg text-white">
                          50+ Events
                        </h3>
                        <p className="text-gray-400 text-sm">
                          Annual activities
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Wave Divider */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 120"
            className="w-full"
          >
            <path
              fill="#030712"
              fillOpacity="1"
              d="M0,64L48,69.3C96,75,192,85,288,80C384,75,480,53,576,48C672,43,768,53,864,58.7C960,64,1056,64,1152,58.7C1248,53,1344,43,1392,37.3L1440,32L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"
            ></path>
          </svg>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 sm:py-16 bg-gray-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div
                  key={index}
                  className="text-center bg-gray-900 rounded-xl p-4 sm:p-6 border border-gray-800 hover:border-gray-700 transition-all"
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 bg-gray-800 rounded-full mb-3 sm:mb-4">
                    <Icon className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                  </div>
                  <div className="text-2xl sm:text-4xl font-bold text-white mb-1 sm:mb-2">
                    {stat.number}
                  </div>
                  <div className="text-xs sm:text-sm text-gray-400 font-medium">
                    {stat.label}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left Content */}
            <div>
              <div className="inline-block mb-3 sm:mb-4">
                <span className="text-gray-400 font-semibold text-xs sm:text-sm uppercase tracking-wide">
                  About BILF
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4 sm:mb-6">
                Fostering Excellence in Academia and Beyond
              </h2>
              <p className="text-base sm:text-lg text-gray-400 mb-4 sm:mb-6">
                The Bangladesh Intellectual Leaders Forum (BILF) is a premier
                organization dedicated to nurturing intellectual growth,
                academic excellence, and leadership development among students
                across Bangladesh.
              </p>
              <p className="text-base sm:text-lg text-gray-400 mb-6 sm:mb-8">
                Since our establishment in 2020, we have been committed to
                creating a vibrant community where bright minds come together to
                share knowledge, inspire innovation, and drive positive change
                in society.
              </p>
              <a
                href="/about/who-we-are"
                className="inline-flex items-center text-white font-semibold hover:text-gray-300 transition-colors group text-sm sm:text-base"
              >
                Learn more about us
                <ChevronRight className="ml-1 w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

            {/* Right Grid */}
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              <div className="space-y-3 sm:space-y-4">
                <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-gray-700">
                  <h3 className="text-lg sm:text-2xl font-bold mb-2 text-white">
                    Our Mission
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-400">
                    Empowering students through knowledge and collaboration
                  </p>
                </div>
                <div className="bg-gray-900 rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-gray-800">
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-1 sm:mb-2">
                    15+
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-400">
                    Partner Universities
                  </p>
                </div>
              </div>
              <div className="space-y-3 sm:space-y-4 mt-4 sm:mt-8">
                <div className="bg-gray-900 rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-gray-800">
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-1 sm:mb-2">
                    100%
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-400">
                    Student Driven
                  </p>
                </div>
                <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-gray-700">
                  <h3 className="text-lg sm:text-2xl font-bold mb-2 text-white">
                    Our Vision
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-400">
                    Building leaders for tomorrow's challenges
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Leadership Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-gray-900 to-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <span className="text-gray-400 font-semibold text-xs sm:text-sm uppercase tracking-wide">
              Leadership
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mt-2 mb-3 sm:mb-4">
              Meet Our Intellectual Minds
            </h2>
            <p className="text-sm sm:text-base lg:text-lg text-gray-400 max-w-2xl mx-auto">
              Dedicated leaders driving our vision and inspiring excellence
              across the organization
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 mb-6 sm:mb-8">
            {featuredMembers.map((member, index) => (
              <div
                key={index}
                className="bg-gray-900 rounded-xl lg:rounded-2xl overflow-hidden border border-gray-800 hover:border-gray-700 shadow-xl hover:shadow-2xl transition-all group cursor-pointer"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-48 sm:h-56 lg:h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>
                <div className="p-4 sm:p-6">
                  <h3 className="text-base sm:text-lg lg:text-xl font-bold text-white mb-1">
                    {member.name}
                  </h3>
                  <p className="text-gray-400 font-medium mb-2 sm:mb-3 text-sm sm:text-base">
                    {member.designation}
                  </p>
                  <p className="text-gray-500 text-xs sm:text-sm">
                    {member.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <a
              href="/leadership"
              className="inline-flex items-center px-5 sm:px-6 py-2.5 sm:py-3 bg-white text-gray-900 rounded-lg hover:bg-gray-100 transition-all font-semibold shadow-lg hover:shadow-xl group text-sm sm:text-base"
            >
              View All Members
              <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </section>

      {/* Why Join Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <span className="text-gray-400 font-semibold text-xs sm:text-sm uppercase tracking-wide">
              Benefits
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mt-2 mb-3 sm:mb-4">
              Why Join BILF?
            </h2>
            <p className="text-sm sm:text-base lg:text-lg text-gray-400 max-w-2xl mx-auto">
              Discover the advantages of being part of Bangladesh's premier
              intellectual community
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div
                  key={index}
                  className="bg-gray-900 rounded-xl p-4 sm:p-6 border border-gray-800 hover:border-gray-700 shadow-lg hover:shadow-xl transition-all"
                >
                  <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gray-800 rounded-lg flex items-center justify-center mb-3 sm:mb-4">
                    <Icon className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                  </div>
                  <h3 className="text-base sm:text-lg lg:text-xl font-bold text-white mb-2 sm:mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-400">
                    {benefit.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <span className="text-gray-400 font-semibold text-xs sm:text-sm uppercase tracking-wide">
              Events
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mt-2 mb-3 sm:mb-4">
              Upcoming Events
            </h2>
            <p className="text-sm sm:text-base lg:text-lg text-gray-400 max-w-2xl mx-auto">
              Join us in our exciting programs and initiatives
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {events.map((event, index) => (
              <div
                key={index}
                className="bg-gray-950 rounded-xl overflow-hidden border border-gray-800 hover:border-gray-700 shadow-lg hover:shadow-xl transition-all"
              >
                <div className="bg-gradient-to-r from-gray-800 to-gray-900 text-white p-4 sm:p-6">
                  <div className="inline-block px-3 py-1 bg-gray-700/50 rounded-full text-xs sm:text-sm font-medium mb-2">
                    {event.type}
                  </div>
                  <div className="text-xs sm:text-sm text-gray-400 mb-2">
                    {event.date}
                  </div>
                  <h3 className="text-base sm:text-lg lg:text-xl font-bold">
                    {event.title}
                  </h3>
                </div>
                <div className="p-4 sm:p-6">
                  <p className="text-xs sm:text-sm text-gray-400 mb-4">
                    {event.description}
                  </p>
                  <a
                    href="#"
                    className="inline-flex items-center text-white font-semibold hover:text-gray-300 transition-colors group text-xs sm:text-sm"
                  >
                    Learn more
                    <ChevronRight className="ml-1 w-3 h-3 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-r from-gray-900 to-gray-800 text-white border-y border-gray-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6">
            Ready to Join Our Community?
          </h2>
          <p className="text-base sm:text-lg lg:text-xl mb-6 sm:mb-8 text-gray-300">
            Become part of a network of brilliant minds and unlock your
            potential
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <a
              href="/join/apply"
              className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 bg-white text-gray-900 rounded-lg hover:bg-gray-100 transition-all font-bold shadow-xl hover:shadow-2xl text-sm sm:text-base"
            >
              Apply for Membership
            </a>
            <a
              href="/contact"
              className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 border-2 border-gray-700 text-white rounded-lg hover:bg-gray-800 transition-all font-bold backdrop-blur-sm text-sm sm:text-base"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-12 sm:py-16 bg-gray-950">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl lg:rounded-2xl p-6 sm:p-8 lg:p-12 border border-gray-800">
            <div className="text-center mb-6 sm:mb-8">
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-2 sm:mb-3">
                Stay Updated
              </h3>
              <p className="text-sm sm:text-base text-gray-400">
                Subscribe to our newsletter for the latest news, events, and
                opportunities
              </p>
            </div>
            <div className="max-w-md mx-auto">
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-lg bg-gray-950 border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-600 focus:border-transparent text-sm sm:text-base"
                />
                <button
                  onClick={handleNewsletterSubmit}
                  className="px-5 sm:px-6 py-3 bg-white text-gray-900 rounded-lg hover:bg-gray-100 transition-all font-semibold shadow-md hover:shadow-lg whitespace-nowrap text-sm sm:text-base"
                >
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
