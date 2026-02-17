import { Link } from 'react-router-dom';
import { ShoppingCart, Target, TrendingUp, MessageSquare, BarChart3, Zap, ArrowRight, CheckCircle, Award } from 'lucide-react';
import { EcommerceImage } from '../assets/industry-images.jsx';
import './IndustryDetail.css';

const EcommerceRetail = () => {
  const solutions = [
    {
      icon: <Target className="w-8 h-8" />,
      title: "Personalized Product Recommendations",
      description: "Advanced machine learning algorithms that analyze customer behavior, purchase history, and preferences to deliver highly personalized product recommendations.",
      benefits: ["45% increase in conversion rates", "60% boost in average order value", "Enhanced customer satisfaction"]
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Dynamic Pricing Optimization",
      description: "AI-powered pricing engine that adjusts prices in real-time based on demand, competition, inventory levels, and market conditions.",
      benefits: ["20% increase in profit margins", "Competitive pricing advantage", "Automated price adjustments"]
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Customer Behavior Analytics",
      description: "Comprehensive analytics platform that provides deep insights into customer journeys, preferences, and purchasing patterns.",
      benefits: ["360° customer view", "Predictive customer insights", "Improved marketing ROI"]
    },
    {
      icon: <MessageSquare className="w-8 h-8" />,
      title: "AI Chatbot & Virtual Assistants",
      description: "Intelligent conversational AI that provides 24/7 customer support, product recommendations, and seamless shopping assistance.",
      benefits: ["24/7 customer support", "80% query resolution rate", "Reduced support costs"]
    }
  ];

  const caseStudy = {
    title: "E-commerce Platform Transformation",
    company: "ShopSmart Retail",
    challenge: "Low conversion rates, poor customer engagement, inefficient inventory management, and lack of personalized shopping experiences leading to high cart abandonment rates.",
    solution: "Implemented comprehensive AI-powered e-commerce platform with personalized recommendations, dynamic pricing, and intelligent customer analytics.",
    results: [
      { metric: "2M+", label: "Customers Served" },
      { metric: "65%", label: "Increase in Conversions" },
      { metric: "40%", label: "Higher Average Order Value" },
      { metric: "85%", label: "Customer Satisfaction Rate" }
    ]
  };

  const technologies = [
    "TensorFlow", "PyTorch", "Apache Spark", "Redis", "MongoDB", "React", "Node.js", "AWS", "Elasticsearch", "Kafka"
  ];

  return (
    <div className="industry-detail-page pt-24">
      {/* Hero Section */}
      <section className="industry-hero">
        <div className="container mx-auto px-6">
          <div className="industry-hero-content">
            <div className="industry-hero-text">
              <div className="industry-badge">
                <ShoppingCart className="w-5 h-5" />
                E-COMMERCE & RETAIL
              </div>
              <h1 className="industry-hero-title">
                Boost Sales with <span className="text-highlight">AI-Powered Retail</span>
              </h1>
              <p className="industry-hero-description">
                Enhance customer experiences and boost sales with personalized shopping recommendations, dynamic pricing,
                inventory optimization, and comprehensive customer behavior analysis powered by advanced AI that drives
                conversions and customer loyalty.
              </p>
              <div className="industry-hero-stats">
                <div className="stat-item">
                  <div className="stat-number">2M+</div>
                  <div className="stat-label">Customers Served</div>
                </div>
                <div className="stat-item">
                  <div className="stat-number">65%</div>
                  <div className="stat-label">Conversion Increase</div>
                </div>
                <div className="stat-item">
                  <div className="stat-number">40%</div>
                  <div className="stat-label">Higher Order Value</div>
                </div>
              </div>
              <div className="industry-hero-actions">
                <Link to="/contact" className="btn btn-primary">
                  Get Started Today
                </Link>
                <Link to="/success-stories" className="btn btn-secondary">
                  View Success Stories
                </Link>
              </div>
            </div>
            <div className="industry-hero-visual">
              <div className="industry-hero-image">
                <EcommerceImage />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="solutions-section">
        <div className="container mx-auto px-6">
          <div className="section-header">
            <h2 className="section-title">AI Solutions for E-commerce & Retail</h2>
            <p className="section-description">
              Comprehensive AI-powered solutions designed to maximize sales and enhance customer experiences
            </p>
          </div>

          <div className="solutions-grid">
            {solutions.map((solution, index) => (
              <div key={index} className="solution-card">
                <div className="solution-icon">
                  {solution.icon}
                </div>
                <h3 className="solution-title">{solution.title}</h3>
                <p className="solution-description">{solution.description}</p>
                <div className="solution-benefits">
                  <h4>Key Benefits:</h4>
                  <ul>
                    {solution.benefits.map((benefit, idx) => (
                      <li key={idx}>
                        <CheckCircle className="w-4 h-4" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study Section */}
      <section className="case-study-section">
        <div className="container mx-auto px-6">
          <div className="case-study-card">
            <div className="case-study-header">
              <div className="case-study-badge">
                <Award className="w-5 h-5" />
                SUCCESS STORY
              </div>
              <h2 className="case-study-title">{caseStudy.title}</h2>
              <p className="case-study-company">{caseStudy.company}</p>
            </div>

            <div className="case-study-content">
              <div className="case-study-details">
                <div className="case-study-item">
                  <h3>Challenge</h3>
                  <p>{caseStudy.challenge}</p>
                </div>
                <div className="case-study-item">
                  <h3>Solution</h3>
                  <p>{caseStudy.solution}</p>
                </div>
              </div>

              <div className="case-study-results">
                <h3>Results Achieved</h3>
                <div className="results-grid">
                  {caseStudy.results.map((result, index) => (
                    <div key={index} className="result-item">
                      <div className="result-metric">{result.metric}</div>
                      <div className="result-label">{result.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <Link to="/success-stories/healthcare-diagnostics" className="case-study-link">
              Read Full Success Story <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="technologies-section">
        <div className="container mx-auto px-6">
          <div className="section-header">
            <h2 className="section-title">E-commerce Technologies We Use</h2>
            <p className="section-description">
              Scalable technologies and frameworks powering modern e-commerce and retail solutions
            </p>
          </div>

          <div className="technologies-grid">
            {technologies.map((tech, index) => (
              <div key={index} className="technology-tag">
                {tech}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="industry-cta">
        <div className="container mx-auto px-6 text-center">
          <h2 className="cta-title">Ready to Transform Your Retail Business?</h2>
          <p className="cta-description">
            Let's discuss how our AI solutions can boost your sales and enhance customer experiences.
          </p>
          <div className="cta-actions">
            <Link to="/contact" className="btn btn-primary-large">
              Start Your Transformation
            </Link>
            <Link to="/industries" className="btn btn-secondary-large">
              Explore Other Industries
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EcommerceRetail;