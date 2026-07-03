import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Stats from './components/Stats';
import Journey from './components/Journey';
import MissionVision from './components/MissionVision';
import WhyUs from './components/WhyUs';
import Literature from './components/Literature';
import SupportCTA from './components/SupportCTA';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-cream min-h-screen text-charcoal font-sans selection:bg-maroon selection:text-cream">
      {/* Sticky Header Navigation */}
      <Header />
      
      {/* Main Page Layout Sections */}
      <main>
        {/* Hero Section */}
        <Hero />
        
        {/* About Section */}
        <About />
        
        {/* Stats / Impact Counter Cards */}
        <Stats />
        
        {/* Journey Timeline */}
        <Journey />
        
        {/* Mission & Vision Section */}
        <MissionVision />
        
        {/* Why Bolati Pustake / Feature Grid */}
        <WhyUs />
        
        {/* Featured Literature & Authors Collection */}
        <Literature />
        
        {/* Cultural Call-to-action Section */}
        <SupportCTA />
        
        {/* Contact Form, Info, and Embedded Google Map */}
        <Contact />
      </main>
      
      {/* Footer Branding and Legal Policies Links */}
      <Footer />
    </div>
  );
}

export default App;
