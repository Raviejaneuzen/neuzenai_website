import { Link } from 'react-router-dom';
import { TrendingUp, BarChart3, Database, Target, Zap, Eye, ArrowRight, CheckCircle, Award } from 'lucide-react';
import { AnalyticsImage } from '../assets/service-images.jsx';
import './ServiceDetail.css';

const AdvancedAnalytics = () => {
  const solutions = [
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Predictive Modeling & Forecasting",
      description: "Advanced statistical models and machine learning algorithms that analyze historical data to predict future trends, customer behavior, and business outcomes.",
      benefits: ["Accurate demand forecasting", "Risk assessment and mitigation", "Revenue optimization", "Strategic planning support"]
    },
    {
      icon: <Eye className="w-8 h-8" />,
      title: "Real-time Data Visualization",
      description: "Interactive dashboards and visualization tools that transform complex data into clear, actionable insights with real-time updates and customizable views.",
      benefits: ["Instant data insights", "Interactive dashboards", "Custom visualization", "Mobile-responsive design"]
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Data Mining & Pattern Recognition",
      description: "Sophisticated algorithms that discover hidden patterns, correlations, and insights within large datasets to uncover new business opportunities.",
      benefits: ["Hidden pattern discovery", "Customer segmentation", "Market trend analysis", "Anomaly detection"]
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "KPI Monitoring & Alerts",
      description: "Automated monitoring systems that track key performance indicators and send intelligent alerts when metrics deviate from expected ranges.",
      benefits: ["Automated monitoring", "Smart alert system", "Performance tracking", "Threshold management"]
    }
  ];

  const caseStudy = {
    title: "Retail Chain Analytics Transformation",
    company: "MegaRetail Corporation",
    challenge: "Struggling with inventory management, poor sales forecasting, and lack of real-time insights across 500+ stores leading to significant revenue losses.",
    solution: "Implemented comprehensive analytics platform with predictive modeling, real-time dashboards, and automated KPI monitoring across all locations.",
    results: [
      { metric: "35%", label: "Inventory Cost Reduction" },
      { metric: "50%", label: "Forecast Accuracy Improvement" },
      { metric: "25%", label: "Revenue Increase" },
      { metric: "90%", label: "Faster Decision Making" }
    ]
  };

  const technologies = [
    "Python", "R", "Apache Spark", "Tableau", "Power BI", "TensorFlow", "Scikit-learn", "PostgreSQL", "MongoDB", "AWS"
  ];

  return (
    <div className="service-detail-page pt-24">
      {/* Hero Section */}
      <section className="service-hero">
        <div className="container mx-auto px-6">
          <div className="service-hero-content">
            <div className="service-hero-text">
              <div className="service-badge">
                <TrendingUp className="w-5 h-5" />
                ADVANCED ANALYTICS & BI
              </div>
              <h1 className="service-hero-title">
                Transform Data into <span className="text-highlight">Strategic Insights</span>
              </h1>
              <p className="service-hero-description">
                Unlock the power of your data with sophisticated statistical models, predictive analytics, and comprehensive
                business intelligence solutions that drive strategic decision-making and deliver measurable business value
                across your entire organization.
              </p>
              <div className="service-hero-stats">
                <div className="stat-item">
                  <div className="stat-number">500TB+</div>
                  <div className="stat-label">Data Processed</div>
                </div>
                <div className="stat-item">
                  <div className="stat-number">95%</div>
                  <div className="stat-label">Prediction Accuracy</div>
                </div>
                <div className="stat-item">
                  <div className="stat-number">50+</div>
                  <div className="stat-label">Analytics Projects</div>
                </div>
              </div>
              <div className="service-hero-actions">
                <Link to="/contact" className="btn btn-primary">
                  Get Started Today
                </Link>
                <Link to="/success-stories" className="btn btn-secondary">
                  View Success Stories
                </Link>
              </div>
            </div>
            <div className="service-hero-visual">
              <div className="service-hero-image">
                <AnalyticsImage />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="solutions-section">
        <div className="container mx-auto px-6">
          <div className="section-header">
            <h2 className="section-title">Advanced Analytics Solutions</h2>
            <p className="section-description">
              Comprehensive data analytics and business intelligence solutions designed to unlock insights and drive growth
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

            <Link to="/success-stories/retail-analytics" className="case-study-link">
              Read Full Success Story <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="technologies-section">
        <div className="container mx-auto px-6">
          <div className="section-header">
            <h2 className="section-title">Analytics Technologies We Use</h2>
            <p className="section-description">
              Cutting-edge tools and frameworks powering our advanced analytics and business intelligence solutions
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
      <section className="service-cta">
        <div className="container mx-auto px-6 text-center">
          <h2 className="cta-title">Ready to Unlock Your Data's Potential?</h2>
          <p className="cta-description">
            Let's discuss how our advanced analytics solutions can transform your data into strategic business insights.
          </p>
          <div className="cta-actions">
            <Link to="/contact" className="btn btn-primary-large">
              Start Your Analytics Journey
            </Link>
            <Link to="/capabilities" className="btn btn-secondary-large">
              Explore Other Capabilities
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AdvancedAnalytics;