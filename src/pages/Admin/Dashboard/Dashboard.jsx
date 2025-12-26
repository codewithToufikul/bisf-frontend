import {
    Users,
    FileText,
    CheckCircle,
    XCircle,
    TrendingUp,
    Clock
} from "lucide-react";

export default function Dashboard() {
    const stats = [
        {
            title: "Total Members",
            value: "500+",
            change: "+12%",
            icon: Users,
            color: "blue",
        },
        {
            title: "Pending Applications",
            value: "24",
            change: "Needs Review",
            icon: Clock,
            color: "yellow",
        },
        {
            title: "Approved This Month",
            value: "45",
            change: "+5%",
            icon: CheckCircle,
            color: "green",
        },
        {
            title: "Rejected",
            value: "5",
            change: "2%",
            icon: XCircle,
            color: "red",
        },
    ];

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
                    const Icon = stat.icon;
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
                    <h3 className="text-lg font-bold text-white mb-6">Recent Applications</h3>
                    <div className="space-y-4">
                        {[1, 2, 3, 4, 5].map((_, i) => (
                            <div key={i} className="flex items-center justify-between p-4 bg-gray-950 rounded-lg border border-gray-800/50 hover:border-gray-700 transition-all">
                                <div className="flex items-center space-x-3">
                                    <div className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 font-bold">
                                        JD
                                    </div>
                                    <div>
                                        <h4 className="text-white font-medium">John Doe</h4>
                                        <p className="text-xs text-gray-500">Dhaka University • CS</p>
                                    </div>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <span className="px-2 py-1 bg-yellow-500/10 text-yellow-500 text-xs rounded-md">
                                        Pending
                                    </span>
                                    <button className="text-gray-400 hover:text-white transition-colors">
                                        Review
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
                    <h3 className="text-lg font-bold text-white mb-6">Quick Actions</h3>
                    <div className="grid grid-cols-2 gap-4">
                        <button className="p-4 bg-gray-950 border border-gray-800 rounded-lg hover:bg-gray-800 transition-all text-left group">
                            <FileText className="w-6 h-6 text-blue-500 mb-3 group-hover:scale-110 transition-transform" />
                            <h4 className="text-white font-medium mb-1">Review Applications</h4>
                            <p className="text-xs text-gray-400">24 pending requests</p>
                        </button>
                        <button className="p-4 bg-gray-950 border border-gray-800 rounded-lg hover:bg-gray-800 transition-all text-left group">
                            <Users className="w-6 h-6 text-purple-500 mb-3 group-hover:scale-110 transition-transform" />
                            <h4 className="text-white font-medium mb-1">Manage Members</h4>
                            <p className="text-xs text-gray-400">Add or remove members</p>
                        </button>
                        <button className="p-4 bg-gray-950 border border-gray-800 rounded-lg hover:bg-gray-800 transition-all text-left group">
                            <TrendingUp className="w-6 h-6 text-green-500 mb-3 group-hover:scale-110 transition-transform" />
                            <h4 className="text-white font-medium mb-1">Update Stats</h4>
                            <p className="text-xs text-gray-400">Modify dashboard numbers</p>
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
