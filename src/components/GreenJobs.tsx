import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Search, 
  MapPin, 
  Clock, 
  DollarSign, 
  Filter,
  Star,
  Bookmark,
  ExternalLink
} from 'lucide-react';

const GreenJobs = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedLocation, setSelectedLocation] = useState('all');

  const categories = [
    { value: 'all', label: 'All Categories' },
    { value: 'renewable-energy', label: 'Renewable Energy' },
    { value: 'sustainable-tech', label: 'Sustainable Technology' },
    { value: 'green-architecture', label: 'Green Architecture' },
    { value: 'climate-research', label: 'Climate Research' },
    { value: 'environmental-consulting', label: 'Environmental Consulting' }
  ];

  const locations = [
    { value: 'all', label: 'All Locations' },
    { value: 'mumbai', label: 'Mumbai' },
    { value: 'bangalore', label: 'Bangalore' },
    { value: 'delhi', label: 'Delhi' },
    { value: 'pune', label: 'Pune' },
    { value: 'hyderabad', label: 'Hyderabad' },
    { value: 'remote', label: 'Remote' }
  ];

  const jobs = [
    {
      id: 1,
      title: 'Senior Solar Energy Engineer',
      company: 'SolarTech India',
      location: 'Mumbai, Maharashtra',
      type: 'Full-time',
      salary: '₹12-18 LPA',
      experience: '5-8 years',
      category: 'renewable-energy',
      description: 'Lead solar panel installation projects and optimize energy efficiency systems.',
      skills: ['Solar PV Systems', 'AutoCAD', 'Project Management', 'Energy Analysis'],
      posted: '2 days ago',
      applicants: 45,
      rating: 4.8,
      featured: true
    },
    {
      id: 2,
      title: 'Sustainability Data Scientist',
      company: 'EcoAnalytics',
      location: 'Bangalore, Karnataka',
      type: 'Full-time',
      salary: '₹15-22 LPA',
      experience: '3-6 years',
      category: 'sustainable-tech',
      description: 'Analyze environmental data to drive sustainable business decisions using AI/ML.',
      skills: ['Python', 'Machine Learning', 'Data Visualization', 'Environmental Science'],
      posted: '1 day ago',
      applicants: 67,
      rating: 4.9,
      featured: true
    },
    {
      id: 3,
      title: 'Green Building Architect',
      company: 'Sustainable Spaces',
      location: 'Delhi, NCR',
      type: 'Full-time',
      salary: '₹10-16 LPA',
      experience: '4-7 years',
      category: 'green-architecture',
      description: 'Design eco-friendly buildings with LEED certification and sustainable materials.',
      skills: ['LEED Certification', 'Sustainable Design', 'BIM', 'Green Materials'],
      posted: '3 days ago',
      applicants: 32,
      rating: 4.7,
      featured: false
    },
    {
      id: 4,
      title: 'Climate Research Analyst',
      company: 'Climate Solutions Lab',
      location: 'Remote',
      type: 'Remote',
      salary: '₹8-14 LPA',
      experience: '2-5 years',
      category: 'climate-research',
      description: 'Research climate change impacts and develop mitigation strategies.',
      skills: ['Climate Modeling', 'Research', 'Statistical Analysis', 'Report Writing'],
      posted: '4 days ago',
      applicants: 28,
      rating: 4.6,
      featured: false
    },
    {
      id: 5,
      title: 'Environmental Consultant',
      company: 'GreenConsult Pro',
      location: 'Pune, Maharashtra',
      type: 'Full-time',
      salary: '₹9-15 LPA',
      experience: '3-6 years',
      category: 'environmental-consulting',
      description: 'Provide environmental compliance and sustainability consulting services.',
      skills: ['Environmental Law', 'EIA', 'Sustainability Planning', 'Compliance'],
      posted: '5 days ago',
      applicants: 41,
      rating: 4.5,
      featured: false
    },
    {
      id: 6,
      title: 'Wind Energy Technician',
      company: 'WindPower India',
      location: 'Hyderabad, Telangana',
      type: 'Full-time',
      salary: '₹6-10 LPA',
      experience: '1-4 years',
      category: 'renewable-energy',
      description: 'Maintain and repair wind turbines for optimal energy generation.',
      skills: ['Wind Turbine Maintenance', 'Electrical Systems', 'Safety Protocols', 'Troubleshooting'],
      posted: '1 week ago',
      applicants: 23,
      rating: 4.4,
      featured: false
    }
  ];

  const filteredJobs = jobs.filter(job => {
    const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         job.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         job.skills.some(skill => skill.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = selectedCategory === 'all' || job.category === selectedCategory;
    const matchesLocation = selectedLocation === 'all' || 
                           job.location.toLowerCase().includes(selectedLocation.toLowerCase()) ||
                           (selectedLocation === 'remote' && job.type === 'Remote');
    
    return matchesSearch && matchesCategory && matchesLocation;
  });

  return (
    <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Discover <span className="gradient-text">Green Career Opportunities</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Find your perfect role in sustainability, renewable energy, and environmental technology. 
            Join the green revolution and make a positive impact on our planet.
          </p>
        </motion.div>

        {/* Search and Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white rounded-xl p-6 shadow-lg mb-8"
        >
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="text"
                placeholder="Search jobs, companies, skills..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
            </div>
            
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            >
              {categories.map(category => (
                <option key={category.value} value={category.value}>
                  {category.label}
                </option>
              ))}
            </select>

            <select
              value={selectedLocation}
              onChange={(e) => setSelectedLocation(e.target.value)}
              className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            >
              {locations.map(location => (
                <option key={location.value} value={location.value}>
                  {location.label}
                </option>
              ))}
            </select>

            <button className="btn-primary flex items-center justify-center">
              <Filter className="h-5 w-5 mr-2" />
              Advanced Filters
            </button>
          </div>
        </motion.div>

        {/* Results Count */}
        <div className="flex justify-between items-center mb-6">
          <p className="text-gray-600">
            Showing {filteredJobs.length} of {jobs.length} green jobs
          </p>
          <select className="px-4 py-2 border border-gray-300 rounded-lg">
            <option>Sort by: Most Recent</option>
            <option>Sort by: Salary (High to Low)</option>
            <option>Sort by: Salary (Low to High)</option>
            <option>Sort by: Company Rating</option>
          </select>
        </div>

        {/* Job Listings */}
        <div className="space-y-6">
          {filteredJobs.map((job, index) => (
            <motion.div
              key={job.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`bg-white rounded-xl p-6 shadow-lg card-hover ${job.featured ? 'ring-2 ring-primary-200' : ''}`}
            >
              <div className="flex justify-between items-start mb-4">
                <div className="flex-1">
                  <div className="flex items-center space-x-2 mb-2">
                    <h3 className="text-xl font-semibold text-gray-900">{job.title}</h3>
                    {job.featured && (
                      <span className="px-2 py-1 text-xs bg-primary-100 text-primary-800 rounded-full">
                        Featured
                      </span>
                    )}
                  </div>
                  <p className="text-gray-600 mb-2">{job.company}</p>
                  <div className="flex items-center space-x-4 text-sm text-gray-500 mb-3">
                    <span className="flex items-center">
                      <MapPin className="h-4 w-4 mr-1" />
                      {job.location}
                    </span>
                    <span className="flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      {job.posted}
                    </span>
                    <span className="flex items-center">
                      <DollarSign className="h-4 w-4 mr-1" />
                      {job.salary}
                    </span>
                  </div>
                  <p className="text-gray-700 mb-4">{job.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {job.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="px-3 py-1 text-sm bg-gray-100 text-gray-700 rounded-full"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="flex flex-col items-end space-y-2 ml-6">
                  <div className="flex items-center space-x-1">
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                    <span className="text-sm font-medium">{job.rating}</span>
                  </div>
                  <button className="p-2 text-gray-400 hover:text-primary-600 transition-colors">
                    <Bookmark className="h-5 w-5" />
                  </button>
                </div>
              </div>

              <div className="flex justify-between items-center pt-4 border-t border-gray-200">
                <div className="flex items-center space-x-4 text-sm text-gray-500">
                  <span>{job.applicants} applicants</span>
                  <span>{job.experience} experience</span>
                  <span className={`px-2 py-1 rounded-full text-xs ${
                    job.type === 'Remote' 
                      ? 'bg-blue-100 text-blue-800' 
                      : 'bg-green-100 text-green-800'
                  }`}>
                    {job.type}
                  </span>
                </div>
                
                <div className="flex space-x-3">
                  <button className="px-4 py-2 text-primary-600 border border-primary-600 rounded-lg hover:bg-primary-50 transition-colors">
                    View Details
                  </button>
                  <button className="btn-primary flex items-center">
                    Apply Now
                    <ExternalLink className="h-4 w-4 ml-2" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {filteredJobs.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No jobs found matching your criteria.</p>
            <p className="text-gray-400 mt-2">Try adjusting your search filters.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default GreenJobs;