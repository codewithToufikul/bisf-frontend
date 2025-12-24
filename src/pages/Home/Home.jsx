import { useState } from 'react';
import { 
  ArrowRight, 
  Users, 
  Award, 
  Target, 
  BookOpen, 
  TrendingUp,
  Calendar,
  ChevronRight
} from 'lucide-react';

export default function Home() {
  const [email, setEmail] = useState('');

  // Stats data
  const stats = [
    { number: '500+', label: 'Active Members', icon: Users },
    { number: '50+', label: 'Events Organized', icon: Calendar },
    { number: '20+', label: 'Awards Won', icon: Award },
    { number: '15+', label: 'Universities', icon: BookOpen }
  ];

  // Featured members
  const featuredMembers = [
    {
      name: 'Dr. Ahmed Rahman',
      designation: 'President',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop',
      bio: 'Leading our vision for academic excellence'
    },
    {
      name: 'Fatima Khatun',
      designation: 'Vice President',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop',
      bio: 'Driving innovation and student engagement'
    },
    {
      name: 'Kamal Hassan',
      designation: 'General Secretary',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop',
      bio: 'Coordinating initiatives and events'
    },
    {
      name: 'Nadia Islam',
      designation: 'Treasurer',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop',
      bio: 'Managing resources and finances'
    }
  ];

  // Upcoming events
  const events = [
    {
      date: 'Jan 15, 2026',
      title: 'Leadership Summit 2026',
      description: 'Annual gathering of intellectual minds',
      type: 'Conference'
    },
    {
      date: 'Feb 10, 2026',
      title: 'Research Symposium',
      description: 'Showcase of cutting-edge research',
      type: 'Academic'
    },
    {
      date: 'Mar 5, 2026',
      title: 'Career Development Workshop',
      description: 'Building professional skills',
      type: 'Workshop'
    }
  ];

  // Why join reasons
  const benefits = [
    {
      icon: Users,
      title: 'Network Building',
      description: 'Connect with like-minded intellectuals from top universities across Bangladesh'
    },
    {
      icon: TrendingUp,
      title: 'Skill Development',
      description: 'Access workshops, seminars, and training programs for personal and professional growth'
    },
    {
      icon: Award,
      title: 'Recognition',
      description: 'Get recognized for your achievements and contributions to academic excellence'
    },
    {
      icon: Target,
      title: 'Leadership Opportunities',
      description: 'Lead initiatives, organize events, and develop leadership capabilities'
    }
  ];

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you for subscribing with: ${email}`);
    setEmail('');
  };

  return (
    <div className="min-h-screen bg-white">
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block mb-4">
                <span className="px-4 py-2 bg-blue-700/50 rounded-full text-sm font-medium backdrop-blur-sm">
                  Est. 2020 | Leading Student Organization
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Bangladesh Intellectual Students Forum
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-blue-100">
                Empowering minds, shaping futures, and building a community of excellence
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="/join/apply"
                  className="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-900 rounded-lg hover:bg-blue-50 transition-all font-bold shadow-xl hover:shadow-2xl group"
                >
                  Join BISF Today
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
                <a
                  href="/about/who-we-are"
                  className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white/10 transition-all font-bold backdrop-blur-sm"
                >
                  Learn More
                </a>
              </div>
            </div>

            <div className="hidden md:block">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-400/20 to-purple-400/20 rounded-2xl transform rotate-3"></div>
                <div className="relative bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
                  <div className="space-y-6">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center">
                        <Users className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-bold text-lg">500+ Members</h3>
                        <p className="text-blue-200 text-sm">From top universities</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center">
                        <Award className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-bold text-lg">20+ Awards</h3>
                        <p className="text-blue-200 text-sm">National recognition</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center">
                        <Calendar className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-bold text-lg">50+ Events</h3>
                        <p className="text-blue-200 text-sm">Annual activities</p>
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
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" className="w-full">
            <path fill="#ffffff" fillOpacity="1" d="M0,64L48,69.3C96,75,192,85,288,80C384,75,480,53,576,48C672,43,768,53,864,58.7C960,64,1056,64,1152,58.7C1248,53,1344,43,1392,37.3L1440,32L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"></path>
          </svg>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
                    <Icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <div className="text-4xl font-bold text-gray-900 mb-2">{stat.number}</div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block mb-4">
                <span className="text-blue-600 font-semibold text-sm uppercase tracking-wide">About BISF</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Fostering Excellence in Academia and Beyond
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                The Bangladesh Intellectual Students Forum (BISF) is a premier organization dedicated to nurturing intellectual growth, academic excellence, and leadership development among students across Bangladesh.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                Since our establishment in 2020, we have been committed to creating a vibrant community where bright minds come together to share knowledge, inspire innovation, and drive positive change in society.
              </p>
              <a
                href="/about/who-we-are"
                className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700 transition-colors group"
              >
                Learn more about us
                <ChevronRight className="ml-1 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl p-6 text-white">
                  <h3 className="text-2xl font-bold mb-2">Our Mission</h3>
                  <p className="text-blue-100">Empowering students through knowledge and collaboration</p>
                </div>
                <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">15+</h3>
                  <p className="text-gray-600">Partner Universities</p>
                </div>
              </div>
              <div className="space-y-4 mt-8">
                <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">100%</h3>
                  <p className="text-gray-600">Student Driven</p>
                </div>
                <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-2xl p-6 text-white">
                  <h3 className="text-2xl font-bold mb-2">Our Vision</h3>
                  <p className="text-green-100">Building leaders for tomorrow's challenges</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Leadership Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-blue-600 font-semibold text-sm uppercase tracking-wide">Leadership</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-4">
              Meet Our Intellectual Minds
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Dedicated leaders driving our vision and inspiring excellence across the organization
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
            {featuredMembers.map((member, index) => (
              <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all group cursor-pointer">
                <div className="relative overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                  <p className="text-blue-600 font-medium mb-3">{member.designation}</p>
                  <p className="text-gray-600 text-sm">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <a
              href="/leadership"
              className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all font-semibold shadow-lg hover:shadow-xl group"
            >
              View All Members
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </section>

      {/* Why Join Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-blue-600 font-semibold text-sm uppercase tracking-wide">Benefits</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-4">
              Why Join BISF?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Discover the advantages of being part of Bangladesh's premier intellectual community
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all border border-gray-100">
                  <div className="w-14 h-14 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="w-7 h-7 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-blue-600 font-semibold text-sm uppercase tracking-wide">Events</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-4">
              Upcoming Events
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Join us in our exciting programs and initiatives
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {events.map((event, index) => (
              <div key={index} className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all">
                <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-6">
                  <div className="inline-block px-3 py-1 bg-white/20 rounded-full text-sm font-medium mb-2">
                    {event.type}
                  </div>
                  <div className="text-sm opacity-90 mb-2">{event.date}</div>
                  <h3 className="text-xl font-bold">{event.title}</h3>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 mb-4">{event.description}</p>
                  <a href="#" className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700 transition-colors group">
                    Learn more
                    <ChevronRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Join Our Community?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Become part of a network of brilliant minds and unlock your potential
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/join/apply"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-blue-50 transition-all font-bold shadow-xl hover:shadow-2xl"
            >
              Apply for Membership
            </a>
            <a
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white/10 transition-all font-bold backdrop-blur-sm"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl p-8 md:p-12 border border-blue-100">
            <div className="text-center mb-8">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
                Stay Updated
              </h3>
              <p className="text-gray-600">
                Subscribe to our newsletter for the latest news, events, and opportunities
              </p>
            </div>
            <div className="max-w-md mx-auto">
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                />
                <button
                  onClick={handleNewsletterSubmit}
                  className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all font-semibold shadow-md hover:shadow-lg whitespace-nowrap"
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