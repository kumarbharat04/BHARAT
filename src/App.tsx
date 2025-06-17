import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Dashboard from './components/Dashboard';
import GreenJobs from './components/GreenJobs';
import Analytics from './components/Analytics';
import Community from './components/Community';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-green-50 to-blue-50">
        <Navbar />
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <Features />
              <Dashboard />
              <Analytics />
              <Community />
            </>
          } />
          <Route path="/jobs" element={<GreenJobs />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/community" element={<Community />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;