import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Stats from "./components/Stats";
import Journey from "./components/Journey";
import MissionVision from "./components/MissionVision";
import WhyUs from "./components/WhyUs";
import Literature from "./components/Literature";
import SupportCTA from "./components/SupportCTA";
import Contact from "./components/Contact";
import FAQ from "./components/FAQ";
import Sitemap from "./components/Sitemap";
import Footer from "./components/Footer";
import PrivacyPolicy from "./components/PrivacyPolicy";
import DeleteAccount from "./components/DeleteAccount";
import { LanguageProvider } from "./context/LanguageContext";

function AppContent() {
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

        {/* Frequently Asked Questions */}
        <FAQ />

        {/* Website Structure & Interactive Sitemap */}
        <Sitemap />
      </main>

      {/* Footer Branding and Legal Policies Links */}
      <Footer />
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <LanguageProvider>
              <AppContent />
            </LanguageProvider>
          }
        />
        <Route
          path="/privacy"
          element={
            <LanguageProvider>
              <PrivacyPolicy />
            </LanguageProvider>
          }
        />
        <Route
          path="/delete-account"
          element={
            <LanguageProvider>
              <DeleteAccount />
            </LanguageProvider>
          }
        />
        <Route
          path="*"
          element={
            <LanguageProvider>
              <AppContent />
            </LanguageProvider>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
