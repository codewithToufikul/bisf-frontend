import { useState, useEffect } from "react";
import {
  X,
  Mail,
  Phone,
  Search,
  Filter,
  Users,
  ChevronDown,
} from "lucide-react";
import { MemberModal } from "@/components/MemberModal";

export default function LeadershipPage() {
  const [selectedMember, setSelectedMember] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const [members, setMembers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchMembers = async () => {
      try {
        const response = await fetch("https://bisf-server.onrender.com/api/members");
        const result = await response.json();
        console.log(result);
        if (result.success) {
          setMembers(result.data);
        }
      } catch (error) {
        console.error("Error fetching members:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchMembers();
  }, []);

//   const categories = [
//     "All",
//     "Executive Committee",
//     "Department Heads",
//     "Advisory Board",
//   ];

  const filteredMembers = members.filter((member) => {
    const matchesSearch =
      member.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      member.designation.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory =
      selectedCategory === "All" || member.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-gray-950">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-28 lg:py-34 overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          ></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <span className="inline-block px-4 py-2 bg-gray-800/80 border border-gray-700 rounded-full text-sm font-medium backdrop-blur-sm mb-4">
              Meet Our Team
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">
              Our Leadership Team
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-gray-300 max-w-3xl mx-auto">
              Meet the dedicated individuals who guide and inspire BILF's mission
              to empower students across Globe.
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

      {/* Search and Filter Section */}
      <section className="py-8 sm:py-12 bg-gray-950 border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-4 lg:gap-6 items-center justify-between">
            <div className="relative w-full lg:w-96">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500 w-5 h-5" />
              <input
                type="text"
                placeholder="Search members..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-gray-900 border-2 border-gray-800 rounded-xl text-white placeholder-gray-500 focus:border-gray-700 focus:outline-none transition-colors"
              />
            </div>
            {/* <div className="flex flex-wrap gap-2 sm:gap-3 justify-center">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 sm:px-6 py-2 sm:py-3 rounded-xl font-medium transition-all text-sm sm:text-base ${selectedCategory === category
                    ? "bg-white text-gray-900 shadow-lg"
                    : "bg-gray-900 text-gray-400 border border-gray-800 hover:border-gray-700 hover:text-white"
                    }`}
                >
                  {category}
                </button>
              ))}
            </div> */}
          </div>
        </div>
      </section>

      {/* Members Grid */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {isLoading ? (
            <div className="flex justify-center py-20">
              <div className="w-12 h-12 border-4 border-blue-500/30 border-t-blue-500 rounded-full animate-spin"></div>
            </div>
          ) : filteredMembers.length === 0 ? (
            <div className="text-center py-16">
              <Users className="w-16 h-16 text-gray-700 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">
                No members found
              </h3>
              <p className="text-gray-500">
                Try adjusting your search or filter criteria
              </p>
            </div>
          ) : (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
              {filteredMembers.map((member) => (
                <div
                  key={member._id}
                  onClick={() => setSelectedMember(member)}
                  className="bg-gray-900 rounded-2xl overflow-hidden border border-gray-800 hover:border-gray-700 shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer group transform hover:-translate-y-2"
                >
                  <div className="relative overflow-hidden">
                    {member.image ? (
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-56 sm:h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                    ) : (
                      <div className="w-full h-56 sm:h-64 bg-gray-800 flex items-center justify-center text-gray-600">
                        <Users className="w-12 h-12" />
                      </div>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent"></div>
                  </div>
                  <div className="p-4 sm:p-6">
                    <h3 className="text-lg sm:text-xl font-bold text-white mb-1">
                      {member.name}
                    </h3>
                    <p className="text-gray-400 font-medium mb-2 sm:mb-3 text-sm sm:text-base">
                      {member.designation}
                    </p>
                    <p className="text-gray-500 text-xs sm:text-sm line-clamp-3">{member.bio}</p>
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
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-r from-gray-900 to-gray-800 text-white border-y border-gray-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6">
            Want to Join Our Leadership Team?
          </h2>
          <p className="text-base sm:text-lg lg:text-xl mb-6 sm:mb-8 text-gray-300">
            We're always looking for passionate individuals to help lead BILF
            forward
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
