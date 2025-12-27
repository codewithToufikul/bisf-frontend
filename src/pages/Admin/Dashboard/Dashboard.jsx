import { useState, useEffect } from "react";
import axios from 'axios';
import {
    Users,
    FileText,
    CheckCircle,
    XCircle,
    TrendingUp,
    Clock,
    ArrowRight,
    Loader2
} from "lucide-react";
import { Link } from "react-router-dom";

export default function Dashboard() {
    const [stats, setStats] = useState([]);
    const [recentApplications, setRecentApplications] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchDashboardData = async () => {
            try {
                const response = await axios.get("https://bisf-server.onrender.com/api/admin/dashboard-stats");
                if (response.data.success) {
                    setStats(response.data.data.stats);
                    setRecentApplications(response.data.data.recentApplications);
                }
            } catch (error) {
                console.error("Failed to fetch dashboard data:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchDashboardData();
    }, []);

    if (loading) {
        return (
            <div className="flex items-center justify-center h-96">
                <Loader2 className="w-8 h-8 text-blue-500 animate-spin" />
            </div>
        );
    }

    return (
        <div className="space-y-8">
            <div className="flex items-center justify-between">
                <div>
                    <h2 className="text-2xl font-bold text-white mb-1">Dashboard Overview</h2>
                    <p className="text-gray-400">Welcome back to the admin panel</p>
                </div>
                <button className="px-4 py-2 bg-white text-gray-900 rounded-lg font-medium hover:bg-gray-100 transition-colors">
                    Download Report
                </button>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {stats.map((stat, index) => {
                    const iconMap = {
                        "Total Members": Users,
                        "Pending Applications": Clock,
                        "Approved This Month": CheckCircle,
                        "Rejected": XCircle
                    };
                    const Icon = iconMap[stat.title] || Users;

                    const colors = {
                        blue: "bg-blue-500/10 text-blue-500",
                        yellow: "bg-yellow-500/10 text-yellow-500",
                        green: "bg-green-500/10 text-green-500",
                        red: "bg-red-500/10 text-red-500",
                    };

                    return (
                        <div key={index} className="bg-gray-900 border border-gray-800 rounded-xl p-6">
                            <div className="flex items-start justify-between mb-4">
                                <div className={`p-3 rounded-lg ${colors[stat.color]}`}>
                                    <Icon className="w-6 h-6" />
                                </div>
                                <span className={`text-xs font-medium px-2 py-1 rounded-full ${stat.change.includes("+") ? "bg-green-500/10 text-green-400" : "bg-gray-800 text-gray-400"
                                    }`}>
                                    {stat.change}
                                </span>
                            </div>
                            <h3 className="text-3xl font-bold text-white mb-1">{stat.value}</h3>
                            <p className="text-gray-400 text-sm">{stat.title}</p>
                        </div>
                    );
                })}
            </div>

            {/* Recent Activity */}
            <div className="grid lg:grid-cols-2 gap-8">
                <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
                    <div className="flex items-center justify-between mb-6">
                        <h3 className="text-lg font-bold text-white">Recent Applications</h3>
                        <Link to="/admin/applications" className="text-blue-500 hover:text-blue-400 text-sm flex items-center">
                            View All <ArrowRight className="w-4 h-4 ml-1" />
                        </Link>
                    </div>

                    <div className="space-y-4">
                        {recentApplications.length > 0 ? (
                            recentApplications.map((app, i) => (
                                <div key={i} className="flex items-center justify-between p-4 bg-gray-950 rounded-lg border border-gray-800/50 hover:border-gray-700 transition-all">
                                    <div className="flex items-center space-x-3">
                                        <div className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-white font-bold overflow-hidden">
                                            {app.image ? <img src={app.image} className="w-full h-full object-cover" /> : app.fullName.charAt(0)}
                                        </div>
                                        <div>
                                            <h4 className="text-white font-medium">{app.fullName}</h4>
                                            <p className="text-xs text-gray-500">{app.university} • {app.department}</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                        <span className={`px-2 py-1 text-xs rounded-md ${app.status === 'pending' ? 'bg-yellow-500/10 text-yellow-500' :
                                                app.status === 'approved' ? 'bg-green-500/10 text-green-500' :
                                                    'bg-red-500/10 text-red-500'
                                            }`}>
                                            {app.status.charAt(0).toUpperCase() + app.status.slice(1)}
                                        </span>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <p className="text-gray-500 text-center py-4">No recent applications</p>
                        )}
                    </div>
                </div>

                <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
                    <h3 className="text-lg font-bold text-white mb-6">Quick Actions</h3>
                    <div className="grid grid-cols-2 gap-4">
                        <Link to="/admin/applications" className="p-4 bg-gray-950 border border-gray-800 rounded-lg hover:bg-gray-800 transition-all text-left group">
                            <FileText className="w-6 h-6 text-blue-500 mb-3 group-hover:scale-110 transition-transform" />
                            <h4 className="text-white font-medium mb-1">Applications</h4>
                            <p className="text-xs text-gray-400">Review requests</p>
                        </Link>
                        <Link to="/admin/members" className="p-4 bg-gray-950 border border-gray-800 rounded-lg hover:bg-gray-800 transition-all text-left group">
                            <Users className="w-6 h-6 text-purple-500 mb-3 group-hover:scale-110 transition-transform" />
                            <h4 className="text-white font-medium mb-1">Members</h4>
                            <p className="text-xs text-gray-400">Manage directory</p>
                        </Link>
                        <button className="p-4 bg-gray-950 border border-gray-800 rounded-lg hover:bg-gray-800 transition-all text-left group">
                            <TrendingUp className="w-6 h-6 text-green-500 mb-3 group-hover:scale-110 transition-transform" />
                            <h4 className="text-white font-medium mb-1">Update Stats</h4>
                            <p className="text-xs text-gray-400">Modify numbers</p>
                        </button>
                        <button className="p-4 bg-gray-950 border border-gray-800 rounded-lg hover:bg-gray-800 transition-all text-left group">
                            <Clock className="w-6 h-6 text-orange-500 mb-3 group-hover:scale-110 transition-transform" />
                            <h4 className="text-white font-medium mb-1">View Logs</h4>
                            <p className="text-xs text-gray-400">System activities</p>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
