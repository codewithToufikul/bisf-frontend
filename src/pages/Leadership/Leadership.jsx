import { useState } from "react";
import {
  X,
  Mail,
  Phone,
  Linkedin,
  Facebook,
  Twitter,
  Award,
  Briefcase,
  GraduationCap,
  Search,
  Filter,
  Users,
  ChevronDown,
} from "lucide-react";
import { MemberModal } from "@/components/MemberModal";

// Move MemberModal outside the main component


export default function LeadershipPage() {
  const [selectedMember, setSelectedMember] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const members = [
    {
      id: 1,
      name: "Dr. Ahmed Rahman",
      designation: "President",
      category: "Executive Committee",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=800&fit=crop",
      shortBio: "Leading BILF with vision and dedication",
      fullBio:
        "Dr. Ahmed Rahman is a distinguished academic and student leader with over 5 years of experience in educational development. He has been instrumental in shaping BILF into what it is today.",
      education: "PhD in Computer Science, University of Dhaka",
      university: "University of Dhaka",
      email: "ahmed.rahman@bilf.org",
      phone: "+880 1XXX-XXXXXX",
      linkedin: "#",
      facebook: "#",
      twitter: "#",
      achievements: [
        "National Youth Leadership Award 2023",
        "Best Student Organization Leader",
        "Published 10+ research papers",
        "Organized 25+ successful events",
      ],
      expertise: ["Leadership", "Strategic Planning", "Academic Research"],
    },
    {
      id: 2,
      name: "Fatima Khatun",
      designation: "Vice President",
      category: "Executive Committee",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=800&h=800&fit=crop",
      shortBio: "Driving innovation and student engagement",
      fullBio:
        "Fatima Khatun is a passionate advocate for student rights and educational excellence. She has pioneered several innovative programs at BILF.",
      education: "Masters in Business Administration, BUET",
      university: "BUET",
      email: "fatima.khatun@bilf.org",
      phone: "+880 1XXX-XXXXXX",
      linkedin: "#",
      facebook: "#",
      twitter: "#",
      achievements: [
        "Women in Leadership Award 2024",
        "Innovation in Education Award",
        "Mentored 100+ students",
        "Led 15+ major initiatives",
      ],
      expertise: ["Program Management", "Student Engagement", "Innovation"],
    },
    {
      id: 3,
      name: "Kamal Hossain",
      designation: "General Secretary",
      category: "Executive Committee",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=800&h=800&fit=crop",
      shortBio: "Managing operations with excellence",
      fullBio:
        "Kamal Hossain ensures smooth operations and coordination across all BILF activities. His organizational skills have been crucial to our success.",
      education: "Bachelor in Engineering, BUET",
      university: "BUET",
      email: "kamal.hossain@bilf.org",
      phone: "+880 1XXX-XXXXXX",
      linkedin: "#",
      facebook: "#",
      twitter: "#",
      achievements: [
        "Excellence in Administration Award",
        "Coordinated 30+ major events",
        "Streamlined organizational processes",
      ],
      expertise: ["Operations", "Coordination", "Event Management"],
    },
    {
      id: 4,
      name: "Nusrat Jahan",
      designation: "Finance Director",
      category: "Department Heads",
      image:
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&h=800&fit=crop",
      shortBio: "Ensuring financial sustainability",
      fullBio:
        "Nusrat Jahan manages BILF's finances with transparency and strategic planning, ensuring sustainable growth and resource optimization.",
      education: "MBA in Finance, University of Dhaka",
      university: "University of Dhaka",
      email: "nusrat.jahan@bilf.org",
      phone: "+880 1XXX-XXXXXX",
      linkedin: "#",
      facebook: "#",
      twitter: "#",
      achievements: [
        "Increased funding by 40%",
        "Implemented transparent financial systems",
        "Financial Excellence Award 2023",
      ],
      expertise: ["Financial Planning", "Budget Management", "Fundraising"],
    },
    {
      id: 5,
      name: "Tariq Rahman",
      designation: "Communications Head",
      category: "Department Heads",
      image:
        "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=800&h=800&fit=crop",
      shortBio: "Building our brand and outreach",
      fullBio:
        "Tariq Rahman leads our communication strategies, ensuring BILF's message reaches students across Bangladesh effectively.",
      education: "Masters in Mass Communication, DU",
      university: "University of Dhaka",
      email: "tariq.rahman@bilf.org",
      phone: "+880 1XXX-XXXXXX",
      linkedin: "#",
      facebook: "#",
      twitter: "#",
      achievements: [
        "Grew social media following by 300%",
        "Launched successful PR campaigns",
        "Media Excellence Award",
      ],
      expertise: ["Public Relations", "Digital Marketing", "Brand Strategy"],
    },
    {
      id: 6,
      name: "Sabrina Islam",
      designation: "Events Coordinator",
      category: "Department Heads",
      image:
        "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=800&h=800&fit=crop",
      shortBio: "Creating memorable experiences",
      fullBio:
        "Sabrina Islam brings creativity and precision to every BILF event, making each one a memorable experience for participants.",
      education: "Bachelor in Business Administration, NSU",
      university: "North South University",
      email: "sabrina.islam@bilf.org",
      phone: "+880 1XXX-XXXXXX",
      linkedin: "#",
      facebook: "#",
      twitter: "#",
      achievements: [
        "Organized 40+ successful events",
        "Event Excellence Award 2024",
        "Perfect attendance record",
      ],
      expertise: ["Event Planning", "Logistics", "Team Coordination"],
    },
    {
      id: 7,
      name: "Prof. Dr. Mahmud Khan",
      designation: "Senior Advisor",
      category: "Advisory Board",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=800&h=800&fit=crop",
      shortBio: "Guiding with wisdom and experience",
      fullBio:
        "Prof. Dr. Mahmud Khan brings decades of academic excellence and leadership experience to guide BILF's strategic direction.",
      education: "PhD in Educational Leadership, Oxford University",
      university: "University of Dhaka (Current)",
      email: "mahmud.khan@bilf.org",
      phone: "+880 1XXX-XXXXXX",
      linkedin: "#",
      facebook: "#",
      twitter: "#",
      achievements: [
        "40+ years in education",
        "Published 50+ research papers",
        "Lifetime Achievement Award",
        "Advised 100+ organizations",
      ],
      expertise: ["Educational Policy", "Strategic Planning", "Leadership"],
    },
    {
      id: 8,
      name: "Ayesha Siddiqua",
      designation: "Youth Advisor",
      category: "Advisory Board",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=800&h=800&fit=crop",
      shortBio: "Connecting with student perspectives",
      fullBio:
        "Ayesha Siddiqua ensures BILF stays connected with student needs and perspectives, bridging generations of leadership.",
      education: "Masters in Psychology, Jahangirnagar University",
      university: "Jahangirnagar University",
      email: "ayesha.siddiqua@bilf.org",
      phone: "+880 1XXX-XXXXXX",
      linkedin: "#",
      facebook: "#",
      twitter: "#",
      achievements: [
        "Youth Empowerment Award",
        "Mentored 200+ students",
        "Published research on student welfare",
      ],
      expertise: ["Youth Development", "Counseling", "Student Advocacy"],
    },
  ];

  const categories = [
    "All",
    "Executive Committee",
    "Department Heads",
    "Advisory Board",
  ];

  const filteredMembers = members.filter((member) => {
    const matchesSearch =
      member.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      member.designation.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory =
      selectedCategory === "All" || member.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Our Leadership Team
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
              Meet the dedicated individuals who guide and inspire BILF's mission
              to empower students across Bangladesh
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-gray-50 to-transparent"></div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-8 bg-white shadow-sm sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-4 items-center">
            <div className="relative flex-1 w-full">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search by name or designation..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none transition-colors"
              />
            </div>
            <div className="flex gap-2 flex-wrap justify-center">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-3 rounded-xl font-medium transition-all ${
                    selectedCategory === category
                      ? "bg-blue-600 text-white shadow-lg"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Members Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredMembers.length === 0 ? (
            <div className="text-center py-20">
              <Users className="w-20 h-20 text-gray-300 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-700 mb-2">
                No members found
              </h3>
              <p className="text-gray-500 text-lg">
                Try adjusting your search or filter criteria
              </p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {filteredMembers.map((member) => (
                <div
                  key={member.id}
                  onClick={() => setSelectedMember(member)}
                  className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer group transform hover:-translate-y-2"
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={member.image}
                      className="w-full h-72 object-cover group-hover:scale-110 transition-transform duration-300"
                      alt={member.name}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-1">
                      {member.name}
                    </h3>
                    <p className="text-blue-600 font-medium mb-2">
                      {member.designation}
                    </p>
                    <p className="text-gray-600 text-sm">{member.shortBio}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Member Modal */}
      <MemberModal
        member={selectedMember}
        onClose={() => setSelectedMember(null)}
      />

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Want to Join Our Leadership Team?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            We're always looking for passionate individuals to help lead BILF
            forward
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-blue-50 transition-all font-bold shadow-xl hover:shadow-2xl">
              Apply for Membership
            </button>
            <button className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white/10 transition-all font-bold backdrop-blur-sm">
              Contact Us
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}