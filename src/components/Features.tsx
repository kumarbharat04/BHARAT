import React from 'react';
import { motion } from 'framer-motion';
import { 
  Brain, 
  Briefcase, 
  Shield, 
  BarChart3, 
  Wifi, 
  Recycle,
  Droplets,
  TreePine,
  Trash2,
  Globe2
} from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Career Guidance',
      description: 'Get personalized recommendations for green jobs in renewable energy, sustainable architecture, and climate tech using advanced ML models.',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: Briefcase,
      title: 'Eco-Friendly Workforce Management',
      description: 'Help companies hire talent aligned with sustainable practices and analyze carbon footprints of job sectors.',
      color: 'from-green-500 to-green-600'
    },
    {
      icon: Shield,
      title: 'Blockchain Green Credentials',
      description: 'Store and verify green certifications and eco-friendly business credentials securely using decentralized technology.',
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: BarChart3,
      title: 'Sustainability Analytics',
      description: 'Analyze global job trends and climate impact of industries to make data-driven eco-friendly decisions.',
      color: 'from-orange-500 to-orange-600'
    },
    {
      icon: Wifi,
      title: 'IoT Smart Workspaces',
      description: 'Suggest energy-efficient workplaces with IoT monitoring and help adopt green infrastructure solutions.',
      color: 'from-teal-500 to-teal-600'
    },
    {
      icon: Globe2,
      title: 'Real-time Environmental Insights',
      description: 'Access live data on environmental issues and track your impact on global sustainability goals.',
      color: 'from-indigo-500 to-indigo-600'
    }
  ];

  const crisisStats = [
    {
      icon: Recycle,
      title: 'Plastic Waste Crisis',
      stat: '380M tons',
      description: 'Plastic produced yearly, only 9% recycled',
      color: 'text-red-600'
    },
    {
      icon: Droplets,
      title: 'Water Scarcity',
      stat: '50%',
      description: 'Of world population will face water scarcity by 2025',
      color: 'text-blue-600'
    },
    {
      icon: Globe2,
      title: 'Carbon Emissions',
      stat: '36.3B tons',
      description: 'Global CO2 emissions reached in 2021',
      color: 'text-gray-600'
    },
    {
      icon: Trash2,
      title: 'Food Waste',
      stat: '1.3B tons',
      description: 'Of food wasted yearly (one-third of production)',
      color: 'text-yellow-600'
    },
    {
      icon: TreePine,
      title: 'Deforestation',
      stat: '10M hectares',
      description: 'Of forest lost annually worldwide',
      color: 'text-green-600'
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Crisis Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            The Sustainability Crisis: <span className="text-red-600">1%</span> Helping vs{' '}
            <span className="text-red-600">99%</span> Polluting
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
            Earth is 100%, but only 1% of people actively help, while 99% contribute to pollution. 
            This imbalance makes sustainability efforts ineffective.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 mb-16">
            {crisisStats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-lg card-hover"
              >
                <div className={`inline-flex items-center justify-center w-12 h-12 rounded-lg mb-4 ${stat.color} bg-opacity-10`}>
                  <stat.icon className={`h-6 w-6 ${stat.color}`} />
                </div>
                <div className={`text-2xl font-bold ${stat.color} mb-2`}>{stat.stat}</div>
                <h3 className="font-semibold text-gray-900 mb-2">{stat.title}</h3>
                <p className="text-sm text-gray-600">{stat.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Features Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Our <span className="gradient-text">AI-Powered Solutions</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive platform bringing together individuals, businesses, and governments 
            to create large-scale, eco-friendly impact through advanced technology.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-xl p-8 shadow-lg card-hover"
            >
              <div className={`inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r ${feature.color} rounded-lg mb-6`}>
                <feature.icon className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;