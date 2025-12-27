import {
  Target,
  Eye,
  Heart,
  Award,
  Users,
  BookOpen,
  TrendingUp,
  Globe,
  Lightbulb,
  Shield,
  Sparkles,
  Calendar,
  Trophy,
  GraduationCap,
} from "lucide-react";
import { useEffect } from "react";
import { useLocation } from "react-router";

export default function AboutUs() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace("#", "");
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 100);
      }
    }
  }, [location]);

  const timeline = [
    {
      year: "2020",
      title: "Foundation",
      description:
        "BILF was established by a group of visionary students with a dream to create an intellectual community",
      milestone: "Organization Founded",
    },
    {
      year: "2021",
      title: "First Summit",
      description:
        "Organized our first Leadership Summit with 200+ participants from 10 universities",
      milestone: "200+ Participants",
    },
    {
      year: "2022",
      title: "National Recognition",
      description:
        "Received national award for excellence in student organization management",
      milestone: "First National Award",
    },
    {
      year: "2023",
      title: "Expansion",
      description:
        "Expanded to 15+ universities across Bangladesh with 500+ active members",
      milestone: "500+ Members",
    },
    {
      year: "2024",
      title: "International Partnerships",
      description:
        "Established partnerships with international student organizations",
      milestone: "Global Network",
    },
    {
      year: "2025",
      title: "Innovation Hub",
      description:
        "Launched BILF Innovation Hub for research and development projects",
      milestone: "Innovation Center",
    },
  ];

  const values = [
    {
      icon: Lightbulb,
      title: "Innovation",
      description:
        "We encourage creative thinking and innovative solutions to academic and social challenges",
    },
    {
      icon: Heart,
      title: "Integrity",
      description:
        "We uphold the highest standards of honesty, ethics, and transparency in all our activities",
    },
    {
      icon: Users,
      title: "Collaboration",
      description:
        "We believe in the power of teamwork and collective effort to achieve greater goals",
    },
    {
      icon: TrendingUp,
      title: "Excellence",
      description:
        "We strive for excellence in everything we do, continuously raising our standards",
    },
    {
      icon: Globe,
      title: "Inclusivity",
      description:
        "We embrace diversity and create an inclusive environment where everyone belongs",
    },
    {
      icon: Shield,
      title: "Responsibility",
      description:
        "We take ownership of our actions and their impact on our community and society",
    },
  ];

  const achievements = [
    {
      icon: Trophy,
      title: "Best Student Organization 2023",
      description: "National Award for Excellence in Student Leadership",
      year: "2023",
    },
    {
      icon: Award,
      title: "Community Impact Award",
      description: "Recognized for outstanding social service initiatives",
      year: "2022",
    },
    {
      icon: GraduationCap,
      title: "Academic Excellence Award",
      description: "For promoting research and academic development",
      year: "2024",
    },
    {
      icon: Sparkles,
      title: "Innovation Award",
      description: "For creative programs and innovative approaches",
      year: "2023",
    },
  ];

  const departments = [
    {
      name: "Executive Board",
      description: "Overall leadership and strategic direction",
      members: 5,
      icon: Users,
    },
    {
      name: "Academic Affairs",
      description: "Educational programs and workshops",
      members: 8,
      icon: BookOpen,
    },
    {
      name: "Events & Programs",
      description: "Event planning and execution",
      members: 12,
      icon: Calendar,
    },
    {
      name: "Media & Communications",
      description: "PR, marketing, and social media",
      members: 6,
      icon: Globe,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-950">
      {/* Hero Section */}
      <section id="who-we-are" className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-40 overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          ></div>
        </div>

        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-900/50 to-gray-900"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-block mb-4">
              <span className="px-4 py-2 bg-gray-800/80 border border-gray-700 rounded-full text-sm font-medium backdrop-blur-sm">
                About BILF
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">Who We Are</h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
              A community of intellectual minds dedicated to academic
              excellence, leadership development, and positive social impact
            </p>
          </div>
        </div>

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

      {/* Introduction Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4 sm:mb-6">
                Building a Community of Excellence
              </h2>
              <div className="space-y-4 text-base sm:text-lg text-gray-400">
                <p>
                  The Bangladesh Intellectual Leaders Forum (BILF) is a premier
                  organization dedicated to nurturing thoughtful, ethical, and
                  forward-looking leaders who can contribute meaningfully to the
                  nation and the global community. Our vision is to create a
                  platform where ideas, knowledge, and values come together to
                  inspire positive change.
                </p>
                <p>
                  We are committed to identifying potential leaders,
                  strengthening their intellectual capacity, and supporting
                  their personal and professional growth through dialogue,
                  learning, and collaboration. By fostering critical thinking,
                  integrity, and social responsibility, we aim to develop
                  leaders who are prepared to address challenges, serve society,
                  and shape a more inclusive and sustainable future for
                  Bangladesh.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              <div className="bg-gray-900 rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-gray-800">
                <div className="text-2xl sm:text-4xl font-bold text-white mb-1 sm:mb-2">
                  500+
                </div>
                <div className="text-xs sm:text-sm text-gray-400 font-medium">Active Members</div>
              </div>
              <div className="bg-gray-900 rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-gray-800">
                <div className="text-2xl sm:text-4xl font-bold text-white mb-1 sm:mb-2">
                  6+
                </div>
                <div className="text-xs sm:text-sm text-gray-400 font-medium">Universities</div>
              </div>

              <div className="bg-gray-900 rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-gray-800">
                <div className="text-2xl sm:text-4xl font-bold text-white mb-1 sm:mb-2">
                  7+
                </div>
                <div className="text-xs sm:text-sm text-gray-400 font-medium">Awards Won</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section
        id="mission-vision"
        className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-gray-900 to-gray-950"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
            {/* Mission */}
            <div className="bg-gray-950 rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-xl border border-gray-800">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gray-800 rounded-lg sm:rounded-xl flex items-center justify-center mb-4 sm:mb-6">
                <Target className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">
                Our Mission
              </h3>

              <p className="text-base sm:text-lg text-gray-400 mb-4 sm:mb-6">
                The Bangladesh Intellectual Leaders Forum is dedicated to nurturing
                thoughtful, ethical, and forward-looking leaders who can contribute
                meaningfully to the nation and the global community. We strive to
                create a platform where knowledge, ideas, and values unite to inspire
                positive and lasting change.
              </p>

              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-gray-800 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-2 h-2 bg-white rounded-full" />
                  </div>
                  <p className="text-sm sm:text-base text-gray-400">
                    Identify and empower future leaders across Bangladesh
                  </p>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-gray-800 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-2 h-2 bg-white rounded-full" />
                  </div>
                  <p className="text-sm sm:text-base text-gray-400">
                    Strengthen intellectual capacity through learning and dialogue
                  </p>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-gray-800 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-2 h-2 bg-white rounded-full" />
                  </div>
                  <p className="text-sm sm:text-base text-gray-400">
                    Encourage integrity, responsibility, and ethical leadership
                  </p>
                </div>
              </div>
            </div>

            {/* Vision */}
            <div className="bg-gray-950 rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-xl border border-gray-800">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gray-800 rounded-lg sm:rounded-xl flex items-center justify-center mb-4 sm:mb-6">
                <Eye className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">
                Our Vision
              </h3>

              <p className="text-base sm:text-lg text-gray-400 mb-4 sm:mb-6">
                Our vision is to become a leading intellectual platform that nurtures
                socially responsible, knowledgeable, and visionary leaders for
                Bangladesh and the world. By fostering critical thinking, moral
                values, and collaboration, we aim to shape a more inclusive,
                sustainable, and enlightened future.
              </p>

              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-gray-800 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-2 h-2 bg-white rounded-full" />
                  </div>
                  <p className="text-sm sm:text-base text-gray-400">
                    Build a nationwide network of ethical and capable leaders
                  </p>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-gray-800 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-2 h-2 bg-white rounded-full" />
                  </div>
                  <p className="text-sm sm:text-base text-gray-400">
                    Promote meaningful collaboration and knowledge-sharing
                  </p>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-gray-800 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-2 h-2 bg-white rounded-full" />
                  </div>
                  <p className="text-sm sm:text-base text-gray-400">
                    Inspire student-driven innovation for social good
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Core Values Section */}
      <section id="value-section" className="py-12 sm:py-16 lg:py-20 bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <span className="text-gray-400 font-semibold text-xs sm:text-sm uppercase tracking-wide">
              Our Values
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mt-2 mb-3 sm:mb-4">
              Principles That Guide Us
            </h2>
            <p className="text-sm sm:text-base lg:text-lg text-gray-400 max-w-2xl mx-auto">
              These core values shape our culture, guide our decisions, and
              define who we are as an organization
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div
                  key={index}
                  className="bg-gray-900 rounded-xl p-4 sm:p-6 shadow-lg hover:shadow-xl transition-all border border-gray-800 hover:border-gray-700"
                >
                  <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gray-800 rounded-lg flex items-center justify-center mb-3 sm:mb-4">
                    <Icon className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                  </div>
                  <h3 className="text-base sm:text-lg lg:text-xl font-bold text-white mb-2 sm:mb-3">
                    {value.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-400">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section id="history" className="py-12 sm:py-16 lg:py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <span className="text-gray-400 font-semibold text-xs sm:text-sm uppercase tracking-wide">
              Our Journey
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mt-2 mb-3 sm:mb-4">
              History & Milestones
            </h2>
            <p className="text-sm sm:text-base lg:text-lg text-gray-400 max-w-2xl mx-auto">
              From our humble beginnings to becoming a leading student
              organization
            </p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-gray-700 via-gray-600 to-gray-700"></div>

            <div className="space-y-8 sm:space-y-12">
              {timeline.map((item, index) => (
                <div
                  key={index}
                  className={`relative grid md:grid-cols-2 gap-4 sm:gap-8 items-center ${index % 2 === 0 ? "" : "md:flex-row-reverse"
                    }`}
                >
                  {index % 2 === 0 ? (
                    <>
                      {/* Content Left */}
                      <div className="md:text-right">
                        <div className="bg-gray-950 rounded-xl p-4 sm:p-6 shadow-lg border border-gray-800 inline-block">
                          <div className="text-2xl sm:text-3xl font-bold text-white mb-2">
                            {item.year}
                          </div>
                          <h3 className="text-base sm:text-xl font-bold text-white mb-2">
                            {item.title}
                          </h3>
                          <p className="text-xs sm:text-sm text-gray-400 mb-3">
                            {item.description}
                          </p>
                          <span className="inline-block px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-xs sm:text-sm font-medium">
                            {item.milestone}
                          </span>
                        </div>
                      </div>
                      {/* Dot Center */}
                      <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-white rounded-full border-4 border-gray-900 shadow-lg"></div>
                      {/* Empty Right */}
                      <div></div>
                    </>
                  ) : (
                    <>
                      {/* Empty Left */}
                      <div></div>
                      {/* Dot Center */}
                      <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-white rounded-full border-4 border-gray-900 shadow-lg"></div>
                      {/* Content Right */}
                      <div>
                        <div className="bg-gray-950 rounded-xl p-4 sm:p-6 shadow-lg border border-gray-800 inline-block">
                          <div className="text-2xl sm:text-3xl font-bold text-white mb-2">
                            {item.year}
                          </div>
                          <h3 className="text-base sm:text-xl font-bold text-white mb-2">
                            {item.title}
                          </h3>
                          <p className="text-xs sm:text-sm text-gray-400 mb-3">
                            {item.description}
                          </p>
                          <span className="inline-block px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-xs sm:text-sm font-medium">
                            {item.milestone}
                          </span>
                        </div>
                      </div>
                    </>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section id="achievements" className="py-12 sm:py-16 lg:py-20 bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <span className="text-gray-400 font-semibold text-xs sm:text-sm uppercase tracking-wide">
              Recognition
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mt-2 mb-3 sm:mb-4">
              Our Achievements
            </h2>
            <p className="text-sm sm:text-base lg:text-lg text-gray-400 max-w-2xl mx-auto">
              Recognition and awards that validate our commitment to excellence
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {achievements.map((achievement, index) => {
              const Icon = achievement.icon;
              return (
                <div
                  key={index}
                  className="bg-gray-900 rounded-xl p-4 sm:p-6 shadow-lg hover:shadow-xl transition-all border border-gray-800 hover:border-gray-700 group"
                >
                  <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gray-800 rounded-lg flex items-center justify-center mb-3 sm:mb-4 group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                  </div>
                  <div className="text-xs sm:text-sm font-semibold text-gray-400 mb-2">
                    {achievement.year}
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-white mb-2">
                    {achievement.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-500">
                    {achievement.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Organization Structure */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-gray-900 to-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <span className="text-gray-400 font-semibold text-xs sm:text-sm uppercase tracking-wide">
              Structure
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mt-2 mb-3 sm:mb-4">
              How We're Organized
            </h2>
            <p className="text-sm sm:text-base lg:text-lg text-gray-400 max-w-2xl mx-auto">
              Our team structure ensures efficient operations and meaningful
              impact
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {departments.map((dept, index) => {
              const Icon = dept.icon;
              return (
                <div
                  key={index}
                  className="bg-gray-950 rounded-xl p-4 sm:p-6 shadow-lg hover:shadow-xl transition-all border border-gray-800 hover:border-gray-700"
                >
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gray-800 rounded-lg flex items-center justify-center mb-3 sm:mb-4">
                    <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-white mb-2">
                    {dept.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-400 mb-3 sm:mb-4">
                    {dept.description}
                  </p>
                  <div className="flex items-center space-x-2 text-xs sm:text-sm text-gray-400 font-medium">
                    <Users className="w-4 h-4" />
                    <span>{dept.members} Members</span>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-8 sm:mt-12 text-center">
            <a
              href="/leadership"
              className="inline-flex items-center px-5 sm:px-6 py-2.5 sm:py-3 bg-white text-gray-900 rounded-lg hover:bg-gray-100 transition-all font-semibold shadow-lg hover:shadow-xl text-sm sm:text-base"
            >
              Meet Our Team
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-r from-gray-900 to-gray-800 text-white border-t border-gray-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6">
            Want to Be Part of Our Story?
          </h2>
          <p className="text-base sm:text-lg lg:text-xl mb-6 sm:mb-8 text-gray-300">
            Join BILF and contribute to shaping the future of student leadership
            in Bangladesh
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
    </div>
  );
}
