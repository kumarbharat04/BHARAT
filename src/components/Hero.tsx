import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Globe, Users, Zap, Target } from 'lucide-react';

const Hero = () => {
  const stats = [
    { icon: Globe, value: '1M+', label: 'Global Users' },
    { icon: Users, value: '50K+', label: 'Green Jobs Posted' },
    { icon: Zap, value: '99%', label: 'AI Accuracy' },
    { icon: Target, value: '2030', label: 'Carbon Neutral Goal' },
  ];

  return (
    <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Transform Your Career with{' '}
              <span className="gradient-text">AI-Powered</span>{' '}
              Green Solutions
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Join the sustainability revolution with Bharat SkillConnect AI. 
              Get personalized green job recommendations, track environmental impact, 
              and connect with a global community working towards a sustainable future.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
          >
            <button className="btn-primary flex items-center justify-center">
              Get Started <ArrowRight className="ml-2 h-5 w-5" />
            </button>
            <button className="btn-secondary">
              Watch Demo
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto"
          >
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-primary-100 rounded-lg mb-4">
                  <stat.icon className="h-6 w-6 text-primary-600" />
                </div>
                <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 relative"
        >
          <div className="bg-gradient-to-r from-primary-600 to-secondary-600 rounded-2xl p-1">
            <div className="bg-white rounded-xl p-8">
              <img
                src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="Sustainable Technology Dashboard"
                className="w-full h-64 md:h-96 object-cover rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;