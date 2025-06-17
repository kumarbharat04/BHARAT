import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Users, 
  MessageCircle, 
  Heart, 
  Share2, 
  Calendar,
  MapPin,
  Award,
  TrendingUp,
  Plus,
  Filter
} from 'lucide-react';

const Community = () => {
  const [activeTab, setActiveTab] = useState('feed');

  const communityStats = [
    { icon: Users, label: 'Active Members', value: '125K+', color: 'text-blue-600 bg-blue-100' },
    { icon: MessageCircle, label: 'Discussions', value: '8.5K', color: 'text-green-600 bg-green-100' },
    { icon: Award, label: 'Projects Funded', value: '342', color: 'text-purple-600 bg-purple-100' },
    { icon: TrendingUp, label: 'Impact Score', value: '94%', color: 'text-orange-600 bg-orange-100' }
  ];

  const posts = [
    {
      id: 1,
      author: 'Priya Sharma',
      role: 'Solar Energy Engineer',
      avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=100',
      time: '2 hours ago',
      content: 'Just completed installation of a 50kW solar system for a rural school in Maharashtra! The kids will now have reliable electricity for their computer lab. This is why I love working in renewable energy! 🌞',
      image: 'https://images.pexels.com/photos/9875414/pexels-photo-9875414.jpeg?auto=compress&cs=tinysrgb&w=600',
      likes: 234,
      comments: 45,
      shares: 12,
      tags: ['SolarEnergy', 'RuralDevelopment', 'Education']
    },
    {
      id: 2,
      author: 'Arjun Patel',
      role: 'Environmental Data Scientist',
      avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=100',
      time: '5 hours ago',
      content: 'Our AI model successfully predicted air quality improvements in Delhi after implementing green transportation policies. Data shows 23% reduction in PM2.5 levels! 📊',
      likes: 189,
      comments: 32,
      shares: 28,
      tags: ['DataScience', 'AirQuality', 'Delhi', 'AI']
    },
    {
      id: 3,
      author: 'Kavya Reddy',
      role: 'Sustainability Consultant',
      avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=100',
      time: '1 day ago',
      content: 'Excited to announce that our startup just secured ₹2 crore funding for developing biodegradable packaging solutions! Looking for passionate team members to join our mission. 🌱',
      likes: 456,
      comments: 78,
      shares: 34,
      tags: ['Startup', 'Packaging', 'Biodegradable', 'Funding']
    }
  ];

  const events = [
    {
      id: 1,
      title: 'Green Tech Innovation Summit 2024',
      date: 'March 15, 2024',
      location: 'Bangalore, India',
      attendees: 1250,
      type: 'Conference',
      image: 'https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      id: 2,
      title: 'Renewable Energy Career Fair',
      date: 'March 22, 2024',
      location: 'Mumbai, India',
      attendees: 850,
      type: 'Career Fair',
      image: 'https://images.pexels.com/photos/2833037/pexels-photo-2833037.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      id: 3,
      title: 'Climate Action Workshop',
      date: 'March 28, 2024',
      location: 'Online',
      attendees: 2100,
      type: 'Workshop',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=400'
    }
  ];

  const projects = [
    {
      id: 1,
      title: 'Ocean Plastic Cleanup Initiative',
      description: 'Developing AI-powered robots to collect plastic waste from oceans',
      funding: '₹45,00,000',
      target: '₹75,00,000',
      backers: 1234,
      daysLeft: 23,
      image: 'https://images.pexels.com/photos/2547565/pexels-photo-2547565.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      id: 2,
      title: 'Smart Urban Farming System',
      description: 'IoT-enabled vertical farming solutions for urban areas',
      funding: '₹32,50,000',
      target: '₹50,00,000',
      backers: 892,
      daysLeft: 15,
      image: 'https://images.pexels.com/photos/4503273/pexels-photo-4503273.jpeg?auto=compress&cs=tinysrgb&w=400'
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
            Join the <span className="gradient-text">Global Sustainability Community</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Connect with like-minded professionals, share your green initiatives, 
            fund sustainable projects, and collaborate on solutions for a better planet.
          </p>
        </motion.div>

        {/* Community Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {communityStats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-xl p-6 shadow-lg card-hover text-center"
            >
              <div className={`inline-flex items-center justify-center w-12 h-12 rounded-lg mb-4 ${stat.color}`}>
                <stat.icon className="h-6 w-6" />
              </div>
              <div className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</div>
              <div className="text-gray-600">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Navigation Tabs */}
        <div className="flex justify-center mb-8">
          <div className="bg-white rounded-lg p-1 shadow-lg">
            {['feed', 'events', 'projects'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-3 rounded-md font-medium transition-colors capitalize ${
                  activeTab === tab
                    ? 'bg-primary-600 text-white'
                    : 'text-gray-600 hover:text-primary-600'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Content based on active tab */}
        {activeTab === 'feed' && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Feed */}
            <div className="lg:col-span-2 space-y-6">
              {/* Create Post */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="bg-white rounded-xl p-6 shadow-lg"
              >
                <div className="flex items-center space-x-4 mb-4">
                  <img
                    src="https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=100"
                    alt="Your avatar"
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <input
                    type="text"
                    placeholder="Share your sustainability journey..."
                    className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  />
                </div>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-4">
                    <button className="text-gray-500 hover:text-primary-600 transition-colors">
                      📷 Photo
                    </button>
                    <button className="text-gray-500 hover:text-primary-600 transition-colors">
                      📊 Poll
                    </button>
                    <button className="text-gray-500 hover:text-primary-600 transition-colors">
                      🎯 Project
                    </button>
                  </div>
                  <button className="btn-primary">
                    <Plus className="h-4 w-4 mr-2" />
                    Post
                  </button>
                </div>
              </motion.div>

              {/* Posts */}
              {posts.map((post, index) => (
                <motion.div
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-xl p-6 shadow-lg"
                >
                  <div className="flex items-center space-x-4 mb-4">
                    <img
                      src={post.avatar}
                      alt={post.author}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-900">{post.author}</h3>
                      <p className="text-sm text-gray-600">{post.role}</p>
                    </div>
                    <span className="text-sm text-gray-500">{post.time}</span>
                  </div>

                  <p className="text-gray-800 mb-4">{post.content}</p>

                  {post.image && (
                    <img
                      src={post.image}
                      alt="Post content"
                      className="w-full h-64 object-cover rounded-lg mb-4"
                    />
                  )}

                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-3 py-1 text-sm bg-primary-100 text-primary-800 rounded-full"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                    <div className="flex space-x-6">
                      <button className="flex items-center space-x-2 text-gray-600 hover:text-red-600 transition-colors">
                        <Heart className="h-5 w-5" />
                        <span>{post.likes}</span>
                      </button>
                      <button className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 transition-colors">
                        <MessageCircle className="h-5 w-5" />
                        <span>{post.comments}</span>
                      </button>
                      <button className="flex items-center space-x-2 text-gray-600 hover:text-green-600 transition-colors">
                        <Share2 className="h-5 w-5" />
                        <span>{post.shares}</span>
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Trending Topics */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="bg-white rounded-xl p-6 shadow-lg"
              >
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Trending Topics</h3>
                <div className="space-y-3">
                  {['#ClimateAction', '#RenewableEnergy', '#SustainableTech', '#GreenJobs', '#CircularEconomy'].map((topic, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <span className="text-primary-600 font-medium">{topic}</span>
                      <span className="text-sm text-gray-500">{Math.floor(Math.random() * 1000)}K posts</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Suggested Connections */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-white rounded-xl p-6 shadow-lg"
              >
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Suggested Connections</h3>
                <div className="space-y-4">
                  {[
                    { name: 'Dr. Rajesh Kumar', role: 'Climate Scientist', mutual: 12 },
                    { name: 'Anita Singh', role: 'Green Architect', mutual: 8 },
                    { name: 'Vikram Joshi', role: 'Solar Engineer', mutual: 15 }
                  ].map((person, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <div>
                        <p className="font-medium text-gray-900">{person.name}</p>
                        <p className="text-sm text-gray-600">{person.role}</p>
                        <p className="text-xs text-gray-500">{person.mutual} mutual connections</p>
                      </div>
                      <button className="px-3 py-1 text-sm bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors">
                        Connect
                      </button>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        )}

        {activeTab === 'events' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {events.map((event, index) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl overflow-hidden shadow-lg card-hover"
              >
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="px-2 py-1 text-xs bg-primary-100 text-primary-800 rounded-full">
                      {event.type}
                    </span>
                    <span className="text-sm text-gray-500">{event.attendees} attending</span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{event.title}</h3>
                  <div className="flex items-center text-sm text-gray-600 mb-2">
                    <Calendar className="h-4 w-4 mr-2" />
                    {event.date}
                  </div>
                  <div className="flex items-center text-sm text-gray-600 mb-4">
                    <MapPin className="h-4 w-4 mr-2" />
                    {event.location}
                  </div>
                  <button className="w-full btn-primary">
                    Register Now
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        )}

        {activeTab === 'projects' && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl overflow-hidden shadow-lg card-hover"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  
                  <div className="mb-4">
                    <div className="flex justify-between text-sm text-gray-600 mb-2">
                      <span>Funded: {project.funding}</span>
                      <span>Goal: {project.target}</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-primary-600 h-2 rounded-full" 
                        style={{ width: `${(parseInt(project.funding.replace(/[₹,]/g, '')) / parseInt(project.target.replace(/[₹,]/g, ''))) * 100}%` }}
                      ></div>
                    </div>
                  </div>

                  <div className="flex justify-between items-center mb-4">
                    <span className="text-sm text-gray-600">{project.backers} backers</span>
                    <span className="text-sm text-gray-600">{project.daysLeft} days left</span>
                  </div>

                  <button className="w-full btn-primary">
                    Support Project
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Community;