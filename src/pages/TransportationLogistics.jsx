import { Link } from 'react-router-dom';
import { Factory, Truck, MapPin, Zap, BarChart3, Shield, ArrowRight, CheckCircle, Award } from 'lucide-react';
import { TransportImage } from '../assets/industry-images.jsx';
import './IndustryDetail.css';

const TransportationLogistics = () => {
  const solutions = [
    {
      icon: <MapPin className="w-8 h-8" />,
      title: "Dynamic Route Optimization",
      description: "AI-powered route planning system that analyzes real-time traffic, weather conditions, and delivery constraints to optimize routes and reduce fuel costs.",
      benefits: ["30% reduction in fuel costs", "25% faster delivery times", "Improved driver satisfaction"]
    },
    {
      icon: <Truck className="w-8 h-8" />,
      title: "Predictive Fleet Maintenance",
      description: "Machine learning algorithms that predict vehicle maintenance needs based on usage patterns, preventing breakdowns and extending vehicle lifespan.",
      benefits: ["40% reduction in breakdowns", "Extended vehicle lifespan", "Optimized maintenance schedules"]
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Supply Chain Intelligence",
      description: "Comprehensive AI system that provides end-to-end visibility and optimization across the entire supply chain network.",
      benefits: ["Real-time supply chain visibility", "Demand forecasting accuracy", "Inventory optimization"]
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Automated Warehouse Management",
      description: "AI-driven warehouse automation that optimizes storage, picking, and packing processes for maximum efficiency and accuracy.",
      benefits: ["50% faster order processing", "99.8% picking accuracy", "Reduced labor costs"]
    }
  ];

  const caseStudy = {
    title: "Global Logistics Network Optimization",
    company: "TransGlobal Logistics",
    challenge: "Inefficient route planning, high fuel costs, frequent vehicle breakdowns, and poor supply chain visibility leading to delayed deliveries and increased operational costs.",
    solution: "Implemented comprehensive AI-powered logistics platform with route optimization, predictive maintenance, and real-time supply chain intelligence.",
    results: [
      { metric: "1000+", label: "Fleet Vehicles Optimized" },
      { metric: "35%", label: "Fuel Cost Reduction" },
      { metric: "50%", label: "Faster Deliveries" },
      { metric: "99.5%", label: "On-Time Delivery Rate" }
    ]
  };

  const technologies = [
    "TensorFlow", "Apache Kafka", "Redis", "PostgreSQL", "React", "Node.js", "AWS IoT", "Docker", "Kubernetes", "GraphQL"
  ];

  return (
    <div className="industry-detail-page pt-24">
      {/* Hero Section */}
      <section className="industry-hero">
        <div className="container mx-auto px-6">
          <div className="industry-hero-content">
            <div className="industry-hero-text">
              <div className="industry-badge">
                <Factory className="w-5 h-5" />
                TRANSPORTATION & LOGISTICS
              </div>
              <h1 className="industry-hero-title">
                Optimize Supply Chain with <span className="text-highlight">Smart Logistics AI</span>
              </h1>
              <p className="industry-hero-description">
                Transform your transportation and logistics operations with intelligent route planning, fleet management,
                predictive maintenance, and real-time logistics coordination that reduces costs and improves delivery
                efficiency across your entire supply chain network.
              </p>
              <div className="industry-hero-stats">
                <div className="stat-item">
                  <div className="stat-number">1000+</div>
                  <div className="stat-label">Fleet Vehicles Optimized</div>
                </div>
                <div className="stat-item">
                  <div className="stat-number">35%</div>
                  <div className="stat-label">Fuel Cost Reduction</div>
                </div>
                <div className="stat-item">
                  <div className="stat-number">99.5%</div>
                  <div className="stat-label">On-Time Delivery</div>
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
                <TransportImage />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="solutions-section">
        <div className="container mx-auto px-6">
          <div className="section-header">
            <h2 className="section-title">AI Solutions for Transportation & Logistics</h2>
            <p className="section-description">
              Comprehensive AI-powered solutions designed to optimize every aspect of your logistics operations
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

            <Link to="/success-stories/retail-personalization" className="case-study-link">
              Read Full Success Story <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="technologies-section">
        <div className="container mx-auto px-6">
          <div className="section-header">
            <h2 className="section-title">Logistics Technologies We Use</h2>
            <p className="section-description">
              Advanced technologies and IoT solutions powering modern transportation and logistics systems
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
          <h2 className="cta-title">Ready to Optimize Your Logistics Operations?</h2>
          <p className="cta-description">
            Let's discuss how our AI solutions can transform your supply chain and reduce operational costs.
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

export default TransportationLogistics;