import React, { useState, useEffect } from 'react';

const EditMemberModal = ({ member, onClose, onUpdate }) => {
    const [formData, setFormData] = useState({
        name: '',
        designation: '',
        email: '',
        phone: '',
        bio: '',
        fullBio: '',
        education: '',
        university: '',
        department: '',
        session: '',
        passingYear: '',
        achievements: [],
        expertise: [],
        category: '',
        yearOfStudy: '',
        gender: '',
        bloodGroup: '',
        presentAddress: '',
        permanentAddress: '',
        whyJoin: '',
        order: 0,
        isActive: true,
        homepageshow: false,
        image: '',
        socialLinks: {
            linkedin: '',
            facebook: '',
            twitter: ''
        }
    });

    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (member) {
            setFormData({
                ...member,
                socialLinks: {
                    linkedin: member.socialLinks?.linkedin || '',
                    facebook: member.socialLinks?.facebook || '',
                    twitter: member.socialLinks?.twitter || ''
                },
                achievements: member.achievements || [],
                expertise: member.expertise || [],
            });
        }
    }, [member]);

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;

        if (name.includes('socialLinks.')) {
            const socialKey = name.split('.')[1];
            setFormData(prev => ({
                ...prev,
                socialLinks: {
                    ...prev.socialLinks,
                    [socialKey]: value
                }
            }));
        } else {
            setFormData(prev => ({
                ...prev,
                [name]: type === 'checkbox' ? checked : value
            }));
        }
    };

    const handleArrayChange = (e, field) => {
        const val = e.target.value;
        setFormData(prev => ({
            ...prev,
            [field]: val.split(',').map(item => item.trim())
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            await onUpdate(member._id, formData);
            onClose();
        } catch (error) {
            console.error("Failed to update member", error);
        } finally {
            setLoading(false);
        }
    };

    if (!member) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm overflow-y-auto">
            <div className="bg-gray-900 border border-gray-800 rounded-xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto p-8 m-4">
                <div className="flex justify-between items-center mb-8 border-b border-gray-800 pb-4">
                    <div>
                        <h2 className="text-2xl font-bold text-white">Edit Profile</h2>
                        <p className="text-gray-400 text-sm mt-1">Update member information and settings</p>
                    </div>
                    <button
                        onClick={onClose}
                        className="text-gray-400 hover:text-white transition-colors bg-gray-800 hover:bg-gray-700 p-2 rounded-lg"
                    >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>

                <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="md:col-span-1">
                        <label className="block text-sm font-medium text-gray-400 mb-2">Full Name</label>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full bg-gray-800 border border-gray-700 rounded-lg py-2.5 px-4 text-white placeholder-gray-500 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                            placeholder="e.g. John Doe"
                            required
                        />
                    </div>

                    <div className="md:col-span-1">
                        <label className="block text-sm font-medium text-gray-400 mb-2">Designation</label>
                        <input
                            type="text"
                            name="designation"
                            value={formData.designation}
                            onChange={handleChange}
                            className="w-full bg-gray-800 border border-gray-700 rounded-lg py-2.5 px-4 text-white placeholder-gray-500 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                            placeholder="e.g. General Secretary"
                        />
                    </div>

                    <div className="md:col-span-1">
                        <label className="block text-sm font-medium text-gray-400 mb-2">Email Address</label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full bg-gray-800 border border-gray-700 rounded-lg py-2.5 px-4 text-white placeholder-gray-500 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                            required
                        />
                    </div>

                    <div className="md:col-span-1">
                        <label className="block text-sm font-medium text-gray-400 mb-2">Phone Number</label>
                        <input
                            type="text"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            className="w-full bg-gray-800 border border-gray-700 rounded-lg py-2.5 px-4 text-white placeholder-gray-500 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                        />
                    </div>
                    <div className="md:col-span-1">
                        <label className="block text-sm font-medium text-gray-400 mb-2">University</label>
                        <input
                            type="text"
                            name="university"
                            value={formData.university}
                            onChange={handleChange}
                            className="w-full bg-gray-800 border border-gray-700 rounded-lg py-2.5 px-4 text-white placeholder-gray-500 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                            placeholder="e.g. Dhaka University"
                        />
                    </div>

                    <div className="md:col-span-1">
                        <label className="block text-sm font-medium text-gray-400 mb-2">Department</label>
                        <input
                            type="text"
                            name="department"
                            value={formData.department}
                            onChange={handleChange}
                            className="w-full bg-gray-800 border border-gray-700 rounded-lg py-2.5 px-4 text-white placeholder-gray-500 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                            placeholder="e.g. Computer Science"
                        />
                    </div>

                    <div className="md:col-span-1">
                        <label className="block text-sm font-medium text-gray-400 mb-2">Year of Study</label>
                        <input
                            type="text"
                            name="yearOfStudy"
                            value={formData.yearOfStudy}
                            onChange={handleChange}
                            className="w-full bg-gray-800 border border-gray-700 rounded-lg py-2.5 px-4 text-white placeholder-gray-500 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                            placeholder="e.g. 3rd Year"
                        />
                    </div>


                    <div className="col-span-2">
                        <label className="block text-sm font-medium text-gray-400 mb-2">Full Bio</label>
                        <textarea
                            name="fullBio"
                            value={formData.fullBio}
                            onChange={handleChange}
                            rows="5"
                            className="w-full bg-gray-800 border border-gray-700 rounded-lg py-2.5 px-4 text-white placeholder-gray-500 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                            placeholder="Detailed biography..."
                        ></textarea>
                    </div>

                    <div className="md:col-span-1">
                        <label className="block text-sm font-medium text-gray-400 mb-2">Display Order</label>
                        <input
                            type="number"
                            name="order"
                            value={formData.order}
                            onChange={handleChange}
                            className="w-full bg-gray-800 border border-gray-700 rounded-lg py-2.5 px-4 text-white placeholder-gray-500 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                        />
                    </div>

                    <div className="md:col-span-1 flex items-end pb-3">
                        <label className="flex items-center space-x-3 cursor-pointer group">
                            <div className="relative">
                                <input
                                    type="checkbox"
                                    name="homepageshow"
                                    checked={formData.homepageshow}
                                    onChange={handleChange}
                                    className="sr-only peer"
                                />
                                <div className="w-10 h-6 bg-gray-700 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                            </div>
                            <span className="text-gray-300 font-medium group-hover:text-white transition-colors">Show on Homepage</span>
                        </label>
                    </div>

                    <div className="col-span-2 pt-6 flex justify-end gap-4 border-t border-gray-800 mt-2">
                        <button
                            type="button"
                            onClick={onClose}
                            className="px-6 py-2.5 rounded-lg border border-gray-700 text-gray-300 font-medium hover:bg-gray-800 hover:text-white transition-all"
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            disabled={loading}
                            className="px-6 py-2.5 rounded-lg bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-medium hover:from-blue-700 hover:to-indigo-700 focus:ring-4 focus:ring-blue-500/20 disabled:opacity-50 transition-all shadow-lg shadow-blue-500/20"
                        >
                            {loading ? 'Saving...' : 'Save Changes'}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default EditMemberModal;
