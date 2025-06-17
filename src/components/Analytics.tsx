import React from 'react';
import { motion } from 'framer-motion';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  AreaChart,
  Area,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar
} from 'recharts';
import { TrendingUp, Globe, Factory, Zap } from 'lucide-react';

const Analytics = () => {
  const carbonEmissionData = [
    { year: '2018', emissions: 36.7, renewable: 11.2 },
    { year: '2019', emissions: 36.8, renewable: 12.1 },
    { year: '2020', emissions: 34.8, renewable: 13.4 },
    { year: '2021', emissions: 36.3, renewable: 14.2 },
    { year: '2022', emissions: 36.8, renewable: 15.8 },
    { year: '2023', emissions: 37.4, renewable: 17.2 },
  ];

  const industryImpactData = [
    { industry: 'Energy', impact: 85, jobs: 2400 },
    { industry: 'Transport', impact: 72, jobs: 1800 },
    { industry: 'Manufacturing', impact: 68, jobs: 3200 },
    { industry: 'Agriculture', impact: 45, jobs: 1600 },
    { industry: 'Construction', impact: 52, jobs: 2800 },
    { industry: 'Technology', impact: 38, jobs: 4200 },
  ];

  const skillsRadarData = [
    { skill: 'Renewable Energy', A: 120, B: 110, fullMark: 150 },
    { skill: 'Data Science', A: 98, B: 130, fullMark: 150 },
    { skill: 'Sustainability', A: 86, B: 130, fullMark: 150 },
    { skill: 'IoT Systems', A: 99, B: 100, fullMark: 150 },
    { skill: 'Green Tech', A: 85, B: 90, fullMark: 150 },
    { skill: 'Climate Research', A: 65, B: 85, fullMark: 150 },
  ];

  const globalStats = [
    {
      icon: Globe,
      title: 'Global CO2 Emissions',
      value: '37.4B tons',
      change: '+1.6%',
      trend: 'up',
      color: 'text-red-600 bg-red-100'
    },
    {
      icon: Zap,
      title: 'Renewable Energy Share',
      value: '17.2%',
      change: '+8.9%',
      trend: 'up',
      color: 'text-green-600 bg-green-100'
    },
    {
      icon: Factory,
      title: 'Green Jobs Created',
      value: '12.8M',
      change: '+15.3%',
      trend: 'up',
      color: 'text-blue-600 bg-blue-100'
    },
    {
      icon: TrendingUp,
      title: 'Sustainability Investment',
      value: '$2.8T',
      change: '+22.1%',
      trend: 'up',
      color: 'text-purple-600 bg-purple-100'
    }
  ];

  return (
    <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Global <span className="gradient-text">Sustainability Analytics</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Data-driven insights into global sustainability trends, climate impact analysis, 
            and green job market dynamics to help make informed eco-friendly decisions.
          </p>
        </motion.div>

        {/* Global Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {globalStats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-xl p-6 shadow-lg card-hover"
            >
              <div className="flex items-center justify-between mb-4">
                <div className={`p-3 rounded-lg ${stat.color}`}>
                  <stat.icon className="h-6 w-6" />
                </div>
                <span className={`text-sm font-medium ${
                  stat.trend === 'up' ? 'text-green-600' : 'text-red-600'
                }`}>
                  {stat.change}
                </span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</h3>
              <p className="text-gray-600">{stat.title}</p>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Carbon Emissions Trend */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-xl p-6 shadow-lg"
          >
            <h3 className="text-xl font-semibold text-gray-900 mb-6">
              Global Carbon Emissions vs Renewable Energy
            </h3>
            <ResponsiveContainer width="100%" height={300}>
              <AreaChart data={carbonEmissionData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="year" />
                <YAxis />
                <Tooltip />
                <Area 
                  type="monotone" 
                  dataKey="emissions" 
                  stackId="1" 
                  stroke="#ef4444" 
                  fill="#ef4444" 
                  fillOpacity={0.6}
                />
                <Area 
                  type="monotone" 
                  dataKey="renewable" 
                  stackId="2" 
                  stroke="#22c55e" 
                  fill="#22c55e" 
                  fillOpacity={0.8}
                />
              </AreaChart>
            </ResponsiveContainer>
          </motion.div>

          {/* Industry Impact */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-xl p-6 shadow-lg"
          >
            <h3 className="text-xl font-semibold text-gray-900 mb-6">
              Industry Climate Impact vs Green Jobs
            </h3>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={industryImpactData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="industry" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="impact" fill="#ef4444" name="Climate Impact Score" />
                <Bar dataKey="jobs" fill="#22c55e" name="Green Jobs (hundreds)" />
              </BarChart>
            </ResponsiveContainer>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Skills Radar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white rounded-xl p-6 shadow-lg"
          >
            <h3 className="text-xl font-semibold text-gray-900 mb-6">
              Green Skills Demand Analysis
            </h3>
            <ResponsiveContainer width="100%" height={300}>
              <RadarChart data={skillsRadarData}>
                <PolarGrid />
                <PolarAngleAxis dataKey="skill" />
                <PolarRadiusAxis />
                <Radar
                  name="Current Demand"
                  dataKey="A"
                  stroke="#22c55e"
                  fill="#22c55e"
                  fillOpacity={0.3}
                />
                <Radar
                  name="Projected Demand"
                  dataKey="B"
                  stroke="#3b82f6"
                  fill="#3b82f6"
                  fillOpacity={0.3}
                />
                <Tooltip />
              </RadarChart>
            </ResponsiveContainer>
          </motion.div>

          {/* Key Insights */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-white rounded-xl p-6 shadow-lg"
          >
            <h3 className="text-xl font-semibold text-gray-900 mb-6">Key Insights</h3>
            <div className="space-y-4">
              <div className="p-4 bg-green-50 rounded-lg border-l-4 border-green-500">
                <h4 className="font-semibold text-green-800 mb-2">Renewable Energy Growth</h4>
                <p className="text-green-700 text-sm">
                  Renewable energy share increased by 8.9% in 2023, creating 2.4M new jobs globally.
                </p>
              </div>
              
              <div className="p-4 bg-blue-50 rounded-lg border-l-4 border-blue-500">
                <h4 className="font-semibold text-blue-800 mb-2">Tech Sector Leadership</h4>
                <p className="text-blue-700 text-sm">
                  Technology sector leads in green job creation with 4.2M positions, despite lower climate impact.
                </p>
              </div>
              
              <div className="p-4 bg-purple-50 rounded-lg border-l-4 border-purple-500">
                <h4 className="font-semibold text-purple-800 mb-2">Skills Gap Analysis</h4>
                <p className="text-purple-700 text-sm">
                  Data science and IoT skills show highest projected demand growth for green careers.
                </p>
              </div>
              
              <div className="p-4 bg-orange-50 rounded-lg border-l-4 border-orange-500">
                <h4 className="font-semibold text-orange-800 mb-2">Investment Surge</h4>
                <p className="text-orange-700 text-sm">
                  Sustainability investments reached $2.8T in 2023, up 22.1% from previous year.
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Environmental Crisis Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="bg-gradient-to-r from-red-500 to-orange-500 rounded-xl p-8 text-white"
        >
          <h3 className="text-2xl font-bold mb-6 text-center">Environmental Crisis by Numbers</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">380M tons</div>
              <div className="text-sm opacity-90">Plastic produced yearly (only 9% recycled)</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">1.3B tons</div>
              <div className="text-sm opacity-90">Food wasted annually (1/3 of production)</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">10M hectares</div>
              <div className="text-sm opacity-90">Forest lost every year globally</div>
            </div>
          </div>
          <div className="text-center mt-6">
            <p className="text-lg opacity-90">
              By 2025, 50% of the world's population will face water scarcity
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Analytics;