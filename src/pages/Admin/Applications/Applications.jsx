import { useState, useEffect } from "react";
import { Check, X, Search, Filter, Eye } from "lucide-react";
import { MemberModal } from "@/components/MemberModal";

export default function Applications() {
    const [applications, setApplications] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [searchQuery, setSearchQuery] = useState("");
    const [statusFilter, setStatusFilter] = useState("all");

    useEffect(() => {
        fetchApplications();
    }, []);

    const fetchApplications = async () => {
        try {
            const response = await fetch("https://bisf-server.onrender.com/api/applications");
            const result = await response.json();
            if (result.success) {
                setApplications(result.data);
            }
        } catch (error) {
            console.error("Error fetching applications:", error);
        } finally {
            setIsLoading(false);
        }
    };

    const handleStatusUpdate = async (id, status) => {
        try {
            const response = await fetch(`https://bisf-server.onrender.com/api/applications/${id}/status`, {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ status }),
            });

            const result = await response.json();
            if (result.success) {
                // Refresh list or update local state
                setApplications(prev =>
                    prev.map(app => app._id === id ? { ...app, status } : app)
                );
            }
        } catch (error) {
            console.error("Error updating status:", error);
            alert("Failed to update status");
        }
    };

    const filteredApplications = applications.filter(app => {
        const matchesSearch =
            app.fullName.toLowerCase().includes(searchQuery.toLowerCase()) ||
            app.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
            app.university.toLowerCase().includes(searchQuery.toLowerCase());

        const matchesStatus = statusFilter === "all" || app.status === statusFilter;

        return matchesSearch && matchesStatus;
    });

    const getStatusColor = (status) => {
        switch (status) {
            case "approved": return "bg-green-500/10 text-green-500 border-green-500/20";
            case "rejected": return "bg-red-500/10 text-red-500 border-red-500/20";
            default: return "bg-yellow-500/10 text-yellow-500 border-yellow-500/20";
        }
    };

    const [selectedApp, setSelectedApp] = useState(null);

    // ... existing code ...

    const handleViewDetails = (app) => {
        setSelectedApp(app);
    };

    const closeModal = () => {
        setSelectedApp(null);
    };

    return (
        <div className="space-y-6">
            {/* Member Modal */}
            {selectedApp && (
                <MemberModal
                    member={{
                        ...selectedApp,
                        name: selectedApp.fullName,
                        fullBio: selectedApp.bio,
                        designation: selectedApp.designation || "General Member",
                        // Map other fields that might be missing in direct spread if necessary
                    }}
                    onClose={closeModal}
                    actions={
                        selectedApp.status === "pending" && (
                            <div className="flex gap-4 w-full">
                                <button
                                    onClick={() => {
                                        handleStatusUpdate(selectedApp._id, "approved");
                                        closeModal();
                                    }}
                                    className="flex-1 py-3 bg-green-500/10 text-green-400 border border-green-500/20 rounded-xl hover:bg-green-500/20 transition-colors flex items-center justify-center gap-2 font-bold"
                                >
                                    <Check className="w-5 h-5" /> Approve Application
                                </button>
                                <button
                                    onClick={() => {
                                        handleStatusUpdate(selectedApp._id, "rejected");
                                        closeModal();
                                    }}
                                    className="flex-1 py-3 bg-red-500/10 text-red-400 border border-red-500/20 rounded-xl hover:bg-red-500/20 transition-colors flex items-center justify-center gap-2 font-bold"
                                >
                                    <X className="w-5 h-5" /> Reject Application
                                </button>
                            </div>
                        )
                    }
                />
            )}

            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <h1 className="text-2xl font-bold text-white">Member Applications</h1>

                <div className="flex gap-3 w-full sm:w-auto">
                    <div className="relative flex-1 sm:w-64">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                        <input
                            type="text"
                            placeholder="Search applications..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full pl-9 pr-4 py-2 bg-gray-900 border border-gray-800 rounded-lg text-sm text-white focus:outline-none focus:border-blue-500"
                        />
                    </div>
                    <select
                        value={statusFilter}
                        onChange={(e) => setStatusFilter(e.target.value)}
                        className="px-4 py-2 bg-gray-900 border border-gray-800 rounded-lg text-sm text-gray-300 focus:outline-none focus:border-blue-500"
                    >
                        <option value="all">All Status</option>
                        <option value="pending">Pending</option>
                        <option value="approved">Approved</option>
                        <option value="rejected">Rejected</option>
                    </select>
                </div>
            </div>

            <div className="bg-gray-900/50 border border-gray-800 rounded-xl overflow-hidden backdrop-blur-sm">
                <div className="overflow-x-auto">
                    <table className="w-full text-left text-sm text-gray-400">
                        <thead className="bg-gray-900/50 text-gray-300 uppercase font-medium">
                            <tr>
                                <th className="px-6 py-4">Applicant</th>
                                <th className="px-6 py-4">University</th>
                                <th className="px-6 py-4">Applied Date</th>
                                <th className="px-6 py-4">Status</th>
                                <th className="px-6 py-4 text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-800">
                            {isLoading ? (
                                <tr>
                                    <td colSpan="5" className="px-6 py-8 text-center text-gray-500">
                                        Loading applications...
                                    </td>
                                </tr>
                            ) : filteredApplications.length === 0 ? (
                                <tr>
                                    <td colSpan="5" className="px-6 py-8 text-center text-gray-500">
                                        No applications found matching your criteria.
                                    </td>
                                </tr>
                            ) : (
                                filteredApplications.map((app) => (
                                    <tr key={app._id} className="hover:bg-gray-800/50 transition-colors">
                                        <td className="px-6 py-4">
                                            <div className="flex items-center gap-3">
                                                <div className="w-10 h-10 rounded-full bg-gray-800 overflow-hidden flex items-center justify-center border border-gray-700">
                                                    {app.image ? (
                                                        <img src={app.image} alt={app.fullName} className="w-full h-full object-cover" />
                                                    ) : (
                                                        <span className="text-gray-500 text-xs">{app.fullName.charAt(0)}</span>
                                                    )}
                                                </div>
                                                <div>
                                                    <div className="font-medium text-white">{app.fullName}</div>
                                                    <div className="text-xs text-gray-500">{app.email}</div>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4">
                                            <div className="text-gray-300">{app.university}</div>
                                            <div className="text-xs text-gray-500">{app.department}</div>
                                        </td>
                                        <td className="px-6 py-4">
                                            {new Date(app.appliedAt).toLocaleDateString()}
                                        </td>
                                        <td className="px-6 py-4">
                                            <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border ${getStatusColor(app.status)}`}>
                                                {app.status.charAt(0).toUpperCase() + app.status.slice(1)}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4 text-right">
                                            <div className="flex items-center justify-end gap-2">
                                                {app.status === "pending" && (
                                                    <>
                                                        <button
                                                            onClick={() => handleStatusUpdate(app._id, "approved")}
                                                            className="p-1.5 text-green-400 hover:bg-green-500/10 rounded-lg transition-colors"
                                                            title="Approve"
                                                        >
                                                            <Check className="w-4 h-4" />
                                                        </button>
                                                        <button
                                                            onClick={() => handleStatusUpdate(app._id, "rejected")}
                                                            className="p-1.5 text-red-400 hover:bg-red-500/10 rounded-lg transition-colors"
                                                            title="Reject"
                                                        >
                                                            <X className="w-4 h-4" />
                                                        </button>
                                                    </>
                                                )}
                                                <button
                                                    onClick={() => handleViewDetails(app)}
                                                    className="p-1.5 text-blue-400 hover:bg-blue-500/10 rounded-lg transition-colors"
                                                    title="View Details"
                                                >
                                                    <Eye className="w-4 h-4" />
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
