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

export const MemberModal = ({ member, onClose }) => {
  if (!member) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative bg-gradient-to-r from-blue-600 to-blue-800 text-white p-8">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex flex-col md:flex-row gap-6 items-start">
            <img
              src={member.image}
              alt={member.name}
              className="w-32 h-32 rounded-2xl object-cover border-4 border-white/20 shadow-xl"
            />
            <div className="flex-1">
              <h2 className="text-3xl font-bold mb-2">{member.name}</h2>
              <p className="text-xl text-blue-100 mb-2">
                {member.designation}
              </p>
              <p className="text-blue-100 mb-4">{member.category}</p>
              <div className="flex flex-wrap gap-2">
                {member.expertise?.map((skill, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-white/20 rounded-full text-sm backdrop-blur-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="p-8 space-y-6">
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">About</h3>
            <p className="text-gray-600 leading-relaxed">
              {member.fullBio}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-blue-50 rounded-xl p-4 border border-blue-100">
              <div className="flex items-start space-x-3">
                <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <GraduationCap className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">
                    Education
                  </h4>
                  <p className="text-sm text-gray-600">
                    {member.education}
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-green-50 rounded-xl p-4 border border-green-100">
              <div className="flex items-start space-x-3">
                <div className="w-10 h-10 bg-green-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Briefcase className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">
                    University
                  </h4>
                  <p className="text-sm text-gray-600">
                    {member.university}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center">
              <Award className="w-5 h-5 mr-2 text-blue-600" />
              Key Achievements
            </h3>
            <ul className="space-y-2">
              {member.achievements?.map((achievement, index) => (
                <li key={index} className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-600">{achievement}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              Contact Information
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              {member.email && (
                <a
                  href={`mailto:${member.email}`}
                  className="flex items-center space-x-3 text-gray-600 hover:text-blue-600 transition-colors"
                >
                  <Mail className="w-5 h-5" />
                  <span className="text-sm">{member.email}</span>
                </a>
              )}
              {member.phone && (
                <a
                  href={`tel:${member.phone}`}
                  className="flex items-center space-x-3 text-gray-600 hover:text-blue-600 transition-colors"
                >
                  <Phone className="w-5 h-5" />
                  <span className="text-sm">{member.phone}</span>
                </a>
              )}
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Connect</h3>
            <div className="flex space-x-3">
              {member.linkedin && (
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center hover:bg-blue-700 transition-colors"
                >
                  <Linkedin className="w-5 h-5 text-white" />
                </a>
              )}
              {member.facebook && (
                <a
                  href={member.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors"
                >
                  <Facebook className="w-5 h-5 text-white" />
                </a>
              )}
              {member.twitter && (
                <a
                  href={member.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-sky-500 rounded-lg flex items-center justify-center hover:bg-sky-600 transition-colors"
                >
                  <Twitter className="w-5 h-5 text-white" />
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};