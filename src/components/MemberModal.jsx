import {
  X,
  Mail,
  Phone,
  Award,
  Briefcase,
  GraduationCap,
} from "lucide-react";

export const MemberModal = ({ member, onClose, actions }) => {
  if (!member) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="bg-gray-900 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-gray-800"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative bg-gradient-to-r from-gray-800 to-gray-900 text-white p-8 border-b border-gray-800">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex flex-col md:flex-row gap-6 items-start">
            <div className="flex-shrink-0">
              <div className="w-32 h-32 rounded-2xl overflow-hidden border-4 border-gray-700 shadow-xl bg-gray-800 flex items-center justify-center">
                {member.image ? (
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <span className="text-4xl font-bold text-gray-500">{member.name?.charAt(0)}</span>
                )}
              </div>
            </div>

            <div className="flex-1">
              <h2 className="text-3xl font-bold mb-2">{member.name}</h2>
              <p className="text-xl text-gray-300 mb-2">
                {member.designation || "Member"}
              </p>
              <p className="text-gray-400 mb-4">{member.category}</p>

              {member.expertise && (
                <div className="flex flex-wrap gap-2">
                  {member.expertise.map((skill, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-gray-700/50 border border-gray-600 rounded-full text-sm backdrop-blur-sm text-gray-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="p-8 space-y-6">
          {(member.fullBio || member.bio) && (
            <div>
              <h3 className="text-xl font-bold text-white mb-3">About</h3>
              <p className="text-gray-400 leading-relaxed">
                {member.fullBio || member.bio}
              </p>
            </div>
          )}

          {member.whyJoin && (
            <div>
              <h3 className="text-xl font-bold text-white mb-3">Why Join</h3>
              <p className="text-gray-400 leading-relaxed italic">
                "{member.whyJoin}"
              </p>
            </div>
          )}

          <div className="grid md:grid-cols-2 gap-6">
            {/* Education Block */}
            <div className="bg-gray-800/50 rounded-xl p-4 border border-gray-700">
              <div className="flex items-start space-x-3">
                <div className="w-10 h-10 bg-gray-700 rounded-lg flex items-center justify-center flex-shrink-0">
                  <GraduationCap className="w-5 h-5 text-gray-300" />
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-1">
                    Education
                  </h4>
                  {member.education && <p className="text-sm text-gray-400 mb-1">{member.education}</p>}
                  {member.university && <p className="text-sm text-gray-400">{member.university}</p>}
                  {member.department && <p className="text-sm text-gray-400">{member.department}</p>}
                  {member.session && <p className="text-sm text-gray-400">Session: {member.session}</p>}
                </div>
              </div>
            </div>

            {/* University Block (Merged with Education above for Apps, but kept for legacy if needed or repurposed)
                Actually, let's keep it separate if the original design had them separate, but often they overlap.
                In Leadership logic: 'Education' and 'University' were separate blocks.
            */}
            {/* Organization / Work Block REMOVED as per user request */}
          </div>

          {/* Personal Info Grid for Applications */}
          {(member.gender || member.bloodGroup || member.presentAddress) && (
            <div className="grid md:grid-cols-2 gap-6">
              {member.gender && (
                <div className="bg-gray-800/50 rounded-xl p-4 border border-gray-700">
                  <span className="text-gray-500 text-sm block mb-1">Gender</span>
                  <span className="text-white capitalize">{member.gender}</span>
                </div>
              )}
              {member.bloodGroup && (
                <div className="bg-gray-800/50 rounded-xl p-4 border border-gray-700">
                  <span className="text-gray-500 text-sm block mb-1">Blood Group</span>
                  <span className="text-white font-medium text-red-400">{member.bloodGroup}</span>
                </div>
              )}
              {member.presentAddress && (
                <div className="bg-gray-800/50 rounded-xl p-4 border border-gray-700 md:col-span-2">
                  <span className="text-gray-500 text-sm block mb-1">Present Address</span>
                  <span className="text-gray-300 text-sm">{member.presentAddress}</span>
                </div>
              )}
            </div>
          )}

          {member.achievements && member.achievements.length > 0 && (
            <div>
              <h3 className="text-xl font-bold text-white mb-3 flex items-center">
                <Award className="w-5 h-5 mr-2 text-gray-400" />
                Key Achievements
              </h3>
              <ul className="space-y-2">
                {member.achievements.map((achievement, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-gray-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-400">{achievement}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div>
            <h3 className="text-xl font-bold text-white mb-3">
              Contact Information
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              {member.email && (
                <a
                  href={`mailto:${member.email}`}
                  className="flex items-center space-x-3 text-gray-400 hover:text-white transition-colors"
                >
                  <Mail className="w-5 h-5" />
                  <span className="text-sm">{member.email}</span>
                </a>
              )}
              {member.phone && (
                <a
                  href={`tel:${member.phone}`}
                  className="flex items-center space-x-3 text-gray-400 hover:text-white transition-colors"
                >
                  <Phone className="w-5 h-5" />
                  <span className="text-sm">{member.phone}</span>
                </a>
              )}
            </div>
          </div>

          {actions && (
            <div className="pt-6 border-t border-gray-800 mt-6">
              {actions}
            </div>
          )}

        </div>
      </div>
    </div>
  );
};






