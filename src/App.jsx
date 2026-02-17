import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

// Pages
import Home from './pages/Home';
import Capabilities from './pages/Capabilities';
import Products from './pages/Products';
import Insights from './pages/Insights';
import Careers from './pages/Careers';
import About from './pages/About';
import Industries from './pages/Industries';
import SuccessStories from './pages/SuccessStories';
import CaseStudyDetail from './pages/CaseStudyDetail';
import Contact from './pages/Contact';
import MediaEntertainment from './pages/MediaEntertainment';
import HealthcareInsurance from './pages/HealthcareInsurance';
import TransportationLogistics from './pages/TransportationLogistics';
import EcommerceRetail from './pages/EcommerceRetail';
import AdvancedAnalytics from './pages/AdvancedAnalytics';
import CustomAI from './pages/CustomAI';
import AIStrategy from './pages/AIStrategy';
import ProcessAutomation from './pages/ProcessAutomation';
import JobDetail from './pages/JobDetail';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsConditions from './pages/TermsConditions';
import CookiePolicy from './pages/CookiePolicy';

function App() {
  // const [loading, setLoading] = useState(true); // Removed preloader state

  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col bg-white overflow-hidden">
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/capabilities" element={<Capabilities />} />
              <Route path="/capabilities/advanced-analytics" element={<AdvancedAnalytics />} />
              <Route path="/capabilities/custom-ai" element={<CustomAI />} />
              <Route path="/capabilities/ai-strategy" element={<AIStrategy />} />
              <Route path="/capabilities/process-automation" element={<ProcessAutomation />} />
              <Route path="/industries" element={<Industries />} />
              <Route path="/industries/media-entertainment" element={<MediaEntertainment />} />
              <Route path="/industries/healthcare-insurance" element={<HealthcareInsurance />} />
              <Route path="/industries/transportation-logistics" element={<TransportationLogistics />} />
              <Route path="/industries/ecommerce-retail" element={<EcommerceRetail />} />
              <Route path="/products" element={<Products />} />
              <Route path="/success-stories" element={<SuccessStories />} />
              <Route path="/success-stories/:id" element={<CaseStudyDetail />} />
              <Route path="/insights" element={<Insights />} />
              <Route path="/careers" element={<Careers />} />
              <Route path="/careers/:id" element={<JobDetail />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/privacy-policy" element={<PrivacyPolicy />} />
              <Route path="/terms-conditions" element={<TermsConditions />} />
              <Route path="/cookie-policy" element={<CookiePolicy />} />
              {/* Fallback */}
              <Route path="*" element={<Home />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;
