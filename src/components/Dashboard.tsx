import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  TrendingUp, 
  Users, 
  Briefcase, 
  Award,
  Calendar,
  MapPin,
  Clock,
  Star
} from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';

const Dashboard = () => {
  const [realTimeData, setRealTimeData] = useState({
    activeUsers: 12543,
    jobsPosted: 1847,
    carbonSaved: 2.4,
    projectsFunded: 156
  });

  // Simulate real-time data updates
  useEffect(() => {
    const interval = setInterval(() => {
      setRealTimeData(prev => ({
        activeUsers: prev.activeUsers + Math.floor(Math.random() * 10),
        jobsPosted: prev.jobsPosted + Math.floor(Math.random() * 3),
        carbonSaved: prev.carbonSaved + (Math.random() * 0.1),
        projectsFunded: prev.projectsFunded + Math.floor(Math.random() * 2)
      }));
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const chartData = [
    { name: 'Jan', greenJobs: 400, applications: 240 },
    { name: 'Feb', greenJobs: 300, applications: 139 },
    { name: 'Mar', greenJobs: 200, applications: 980 },
    { name: 'Apr', greenJobs: 278, applications: 390 },
    { name: 'May', greenJobs: 189, applications: 480 },
    { name: 'Jun', greenJobs: 239, applications: 380 },
    { name: 'Jul', greenJobs: 349, applications: 430 },
  ];

  const pieData = [
    { name: 'Renewable Energy', value: 35, color: '#22c55e' },
    { name: 'Sustainable Tech', value: 25, color: '#3b82f6' },
    { name: 'Green Architecture', value: 20, color: '#f59e0b' },
    { name: 'Climate Research', value: 20, color: '#8b5cf6' },
  ];

  const recentJobs = [
    {
      title: 'Solar Energy Engineer',
      company: 'GreenTech Solutions',
      location: 'Mumbai, India',
      salary: '₹8-12 LPA',
      type: 'Full-time',
      posted: '2 hours ago'
    },
    {
      title: 'Sustainability Consultant',
      company: 'EcoVision Corp',
      location: 'Bangalore, India',
      salary: '₹6-10 LPA',
      type: 'Remote',
      posted: '4 hours ago'
    },
    {
      title: 'Environmental Data Analyst',
      company: 'ClimateAI',
      location: 'Delhi, India',
      salary: '₹7-11 LPA',
      type: 'Hybrid',
      posted: '6 hours ago'
    }
  ];

  const stats = [
    {
      icon: Users,
      title: 'Active Users',
      value: realTimeData.activeUsers.toLocaleString(),
      change: '+12%',
      color: 'text-blue-600 bg-blue-100'
    },
    {
      icon: Briefcase,
      title: 'Green Jobs Posted',
      value: realTimeData.jobsPosted.toLocaleString(),
      change: '+8%',
      color: 'text-green-600 bg-green-100'
    },
    {
      icon: TrendingUp,
      title: 'Carbon Saved (tons)',
      value: realTimeData.carbonSaved.toFixed(1) + 'M',
      change: '+15%',
      color: 'text-purple-600 bg-purple-100'
    },
    {
      icon: Award,
      title: 'Projects Funded',
      value: realTimeData.projectsFunded.toLocaleString(),
      change: '+23%',
      color: 'text-orange-600 bg-orange-100'
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Real-Time <span className="gradient-text">Sustainability Dashboard</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Monitor global sustainability efforts, track green job trends, and see your impact in real-time.
          </p>
        </motion.div>

        {/* Real-time Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-xl p-6 shadow-lg card-hover"
            >
              <div className="flex items-center justify-between mb-4">
                <div className={`p-3 rounded-lg ${stat.color}`}>
                  <stat.icon className="h-6 w-6" />
                </div>
                <span className="text-sm font-medium text-green-600">{stat.change}</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</h3>
              <p className="text-gray-600">{stat.title}</p>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Line Chart */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-xl p-6 shadow-lg"
          >
            <h3 className="text-xl font-semibold text-gray-900 mb-6">Green Jobs Trend</h3>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={chartData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="greenJobs" stroke="#22c55e" strokeWidth={3} />
                <Line type="monotone" dataKey="applications" stroke="#3b82f6" strokeWidth={3} />
              </LineChart>
            </ResponsiveContainer>
          </motion.div>

          {/* Pie Chart */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-xl p-6 shadow-lg"
          >
            <h3 className="text-xl font-semibold text-gray-900 mb-6">Job Categories Distribution</h3>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={pieData}
                  cx="50%"
                  cy="50%"
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                  label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                >
                  {pieData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </motion.div>
        </div>

        {/* Recent Jobs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-xl p-6 shadow-lg"
        >
          <h3 className="text-xl font-semibold text-gray-900 mb-6">Latest Green Job Opportunities</h3>
          <div className="space-y-4">
            {recentJobs.map((job, index) => (
              <div key={index} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                <div className="flex-1">
                  <h4 className="font-semibold text-gray-900">{job.title}</h4>
                  <p className="text-gray-600">{job.company}</p>
                  <div className="flex items-center space-x-4 mt-2 text-sm text-gray-500">
                    <span className="flex items-center">
                      <MapPin className="h-4 w-4 mr-1" />
                      {job.location}
                    </span>
                    <span className="flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      {job.posted}
                    </span>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-semibold text-gray-900">{job.salary}</p>
                  <span className="inline-block px-2 py-1 text-xs bg-green-100 text-green-800 rounded-full">
                    {job.type}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Dashboard;