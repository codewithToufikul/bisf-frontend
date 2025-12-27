import React, { useEffect, useState } from 'react';
import { Eye, Edit, Trash, AlertTriangle, Search } from 'lucide-react';
import { MemberModal } from '../../components/MemberModal';
import EditMemberModal from '../../components/Admin/EditMemberModal';
import axios from 'axios';

const AdminMembers = () => {
    const [members, setMembers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [selectedMember, setSelectedMember] = useState(null); // For View Modal
    const [editingMember, setEditingMember] = useState(null); // For Edit Modal
    const [showDeleteConfirm, setShowDeleteConfirm] = useState(null); // ID of member to delete
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        fetchMembers();
    }, []);

    const fetchMembers = async () => {
        try {
            const response = await axios.get('https://bisf-server.onrender.com/api/members/admin'); // Assuming base URL
            if (response.data.success) {
                setMembers(response.data.data);
            }
        } catch (err) {
            setError('Failed to fetch members');
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    const handleSoftDelete = async (id) => {
        try {
            await axios.delete(`https://bisf-server.onrender.com/api/members/${id}`);
            const updatedMembers = members.map(m =>
                m._id === id ? { ...m, isDeleted: true } : m
            );
            // Optional: filter immediately if we don't want to show deleted ones, 
            // but prompt says "r oi data admin dashboard bade kothao dekhabe na", so implied admin *can* see if they want?
            // Usually soft delete means it disappears from main list or has a "Deleted" status.
            // Let's just mark it as deleted in UI or remove it from list.
            // "confirmation asbe delete er confirm korle actual delete hbe na but ekta field add hbe delete true"
            // "taile r oi data admin dashboard bade kothao dekhabe na" implies it *should* show in admin dashboard still, likely with a status indicator.
            setMembers(updatedMembers);
            setShowDeleteConfirm(null);
        } catch (err) {
            console.error("Failed to delete member", err);
            alert("Failed to delete member");
        }
    };

    const handleUpdate = async (id, updatedData) => {
        try {
            const response = await axios.patch(`https://bisf-server.onrender.com/api/members/${id}`, updatedData);
            if (response.data.success) {
                const updatedList = members.map(m =>
                    m._id === id ? response.data.data : m
                );
                setMembers(updatedList);
            }
        } catch (err) {
            throw err;
        }
    };

    const filteredMembers = members.filter(member =>
        member.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        member.email.toLowerCase().includes(searchTerm.toLowerCase())
    );

    if (loading) return <div className="text-center p-10 text-white">Loading...</div>;
    if (error) return <div className="text-center p-10 text-red-500">{error}</div>;

    return (
        <div className="p-6 bg-gray-900 min-h-screen text-white">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-4">
                    <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                        Member Management
                    </h1>
                    <div className="relative w-full md:w-64">
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                        <input
                            type="text"
                            placeholder="Search members..."
                            className="w-full pl-10 pr-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 text-sm outline-none"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>
                </div>

                <div className="bg-gray-800 rounded-lg shadow-xl overflow-hidden border border-gray-700">
                    <div className="overflow-x-auto">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="bg-gray-700/50 text-gray-300 text-sm uppercase tracking-wider">
                                    <th className="p-4">Member</th>
                                    <th className="p-4">Role/Designation</th>
                                    <th className="p-4 text-center">Order</th>
                                    <th className="p-4 text-center">Home</th>
                                    <th className="p-4 text-center">Status</th>
                                    <th className="p-4 text-right">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-700">
                                {filteredMembers.map(member => (
                                    <tr key={member._id} className="hover:bg-gray-700/30 transition-colors">
                                        <td className="p-4">
                                            <div className="flex items-center gap-3">
                                                <div className="w-10 h-10 rounded-full bg-gray-600 overflow-hidden shrink-0">
                                                    {member.image ? (
                                                        <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                                                    ) : (
                                                        <div className="w-full h-full flex items-center justify-center text-xs font-bold">{member.name.charAt(0)}</div>
                                                    )}
                                                </div>
                                                <div>
                                                    <div className="font-semibold">{member.name}</div>
                                                    <div className="text-xs text-gray-400">{member.email}</div>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="p-4">
                                            <div className="text-sm">{member.designation}</div>
                                            <div className="text-xs text-gray-500">{member.category}</div>
                                        </td>
                                        <td className="p-4 text-center font-mono text-sm">
                                            {member.order}
                                        </td>
                                        <td className="p-4 text-center">
                                            <span className={`px-2 py-1 rounded text-xs ${member.homepageshow ? 'bg-green-500/20 text-green-400' : 'bg-gray-600/20 text-gray-400'}`}>
                                                {member.homepageshow ? 'Yes' : 'No'}
                                            </span>
                                        </td>
                                        <td className="p-4 text-center">
                                            {member.isDeleted ? (
                                                <span className="px-2 py-1 rounded text-xs bg-red-500/20 text-red-400">Deleted</span>
                                            ) : (
                                                <span className="px-2 py-1 rounded text-xs bg-blue-500/20 text-blue-400">Active</span>
                                            )}
                                        </td>
                                        <td className="p-4 text-right">
                                            <div className="flex items-center justify-end gap-2">
                                                <button
                                                    onClick={() => setSelectedMember(member)}
                                                    className="p-2 hover:bg-gray-600 rounded-lg text-blue-400 transition-colors"
                                                    title="View Details"
                                                >
                                                    <Eye className="w-4 h-4" />
                                                </button>
                                                <button
                                                    onClick={() => setEditingMember(member)}
                                                    className="p-2 hover:bg-gray-600 rounded-lg text-yellow-400 transition-colors"
                                                    title="Edit Member"
                                                >
                                                    <Edit className="w-4 h-4" />
                                                </button>
                                                {!member.isDeleted && (
                                                    <button
                                                        onClick={() => setShowDeleteConfirm(member._id)}
                                                        className="p-2 hover:bg-gray-600 rounded-lg text-red-400 transition-colors"
                                                        title="Delete Member"
                                                    >
                                                        <Trash className="w-4 h-4" />
                                                    </button>
                                                )}
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    {filteredMembers.length === 0 && (
                        <div className="p-8 text-center text-gray-500">
                            No members found.
                        </div>
                    )}
                </div>
            </div>

            {/* View Modal */}
            {selectedMember && (
                <MemberModal
                    member={selectedMember}
                    onClose={() => setSelectedMember(null)}
                />
            )}

            {/* Edit Modal */}
            {editingMember && (
                <EditMemberModal
                    member={editingMember}
                    onClose={() => setEditingMember(null)}
                    onUpdate={handleUpdate}
                />
            )}

            {/* Delete Confirmation Modal */}
            {showDeleteConfirm && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4">
                    <div className="bg-gray-800 rounded-xl p-6 max-w-sm w-full border border-gray-700 shadow-2xl">
                        <div className="flex flex-col items-center text-center">
                            <div className="w-12 h-12 bg-red-500/20 rounded-full flex items-center justify-center mb-4">
                                <AlertTriangle className="w-6 h-6 text-red-500" />
                            </div>
                            <h3 className="text-xl font-bold mb-2">Confirm Deletion</h3>
                            <p className="text-gray-400 mb-6">
                                Are you sure you want to delete this member? This will hide them from the public website but keep the data in the admin dashboard.
                            </p>
                            <div className="flex gap-3 w-full">
                                <button
                                    onClick={() => setShowDeleteConfirm(null)}
                                    className="flex-1 px-4 py-2 rounded-lg bg-gray-700 hover:bg-gray-600 text-gray-200 font-medium transition-colors"
                                >
                                    Cancel
                                </button>
                                <button
                                    onClick={() => handleSoftDelete(showDeleteConfirm)}
                                    className="flex-1 px-4 py-2 rounded-lg bg-red-600 hover:bg-red-700 text-white font-medium transition-colors"
                                >
                                    Delete
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default AdminMembers;
