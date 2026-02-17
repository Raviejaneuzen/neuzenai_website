import { Link } from 'react-router-dom';
import { Settings, Zap, Cpu, FileText, BarChart3, Shield, ArrowRight, CheckCircle, Award } from 'lucide-react';
import { AutomationImage } from '../assets/service-images.jsx';
import './ServiceDetail.css';

const ProcessAutomation = () => {
  const solutions = [
    {
      icon: <Cpu className="w-8 h-8" />,
      title: "Robotic Process Automation (RPA)",
      description: "Intelligent software robots that automate repetitive, rule-based tasks across multiple systems and applications to improve efficiency and accuracy.",
      benefits: ["Task automation", "Error reduction", "24/7 operation", "Cost savings up to 60%"]
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Workflow Optimization",
      description: "Advanced process analysis and optimization using AI to identify bottlenecks, streamline workflows, and improve overall operational efficiency.",
      benefits: ["Process optimization", "Bottleneck identification", "Workflow streamlining", "Performance improvement"]
    },
    {
      icon: <FileText className="w-8 h-8" />,
      title: "Smart Document Processing",
      description: "AI-powered document processing that automatically extracts, validates, and processes information from various document types and formats.",
      benefits: ["Automated data extraction", "Document classification", "Validation & verification", "Multi-format support"]
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Process Mining & Analysis",
      description: "Advanced analytics that discover, monitor, and improve real processes by extracting knowledge from event logs and system data.",
      benefits: ["Process discovery", "Performance monitoring", "Compliance checking", "Continuous improvement"]
    }
  ];

  const caseStudy = {
    title: "Financial Services Automation",
    company: "GlobalBank Financial",
    challenge: "Manual processing of loan applications, compliance checks, and document verification leading to long processing times and high operational costs.",
    solution: "Implemented comprehensive automation platform with RPA, smart document processing, and workflow optimization across all loan processing operations.",
    results: [
      { metric: "80%", label: "Processing Time Reduction" },
      { metric: "95%", label: "Accuracy Improvement" },
      { metric: "$2M", label: "Annual Cost Savings" },
      { metric: "50K+", label: "Documents Processed Monthly" }
    ]
  };

  const technologies = [
    "UiPath", "Blue Prism", "Automation Anywhere", "Microsoft Power Automate", "Python", "OCR", "Machine Learning", "API Integration"
  ];

  return (
    <div className="service-detail-page pt-24">
      {/* Hero Section */}
      <section className="service-hero">
        <div className="container mx-auto px-6">
          <div className="service-hero-content">
            <div className="service-hero-text">
              <div className="service-badge">
                <Settings className="w-5 h-5" />
                INTELLIGENT PROCESS AUTOMATION
              </div>
              <h1 className="service-hero-title">
                Streamline Operations with <span className="text-highlight">Smart Automation</span>
              </h1>
              <p className="service-hero-description">
                Transform your business operations with intelligent automation solutions that learn and adapt. Our smart
                automation systems optimize business processes, reduce costs, and improve efficiency while seamlessly
                integrating with your existing infrastructure.
              </p>
              <div className="service-hero-stats">
                <div className="stat-item">
                  <div className="stat-number">1000+</div>
                  <div className="stat-label">Processes Automated</div>
                </div>
                <div className="stat-item">
                  <div className="stat-number">75%</div>
                  <div className="stat-label">Cost Reduction</div>
                </div>
                <div className="stat-item">
                  <div className="stat-number">99.9%</div>
                  <div className="stat-label">Accuracy Rate</div>
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
                <AutomationImage />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="solutions-section">
        <div className="container mx-auto px-6">
          <div className="section-header">
            <h2 className="section-title">Intelligent Automation Solutions</h2>
            <p className="section-description">
              Comprehensive process automation solutions designed to optimize operations and drive efficiency
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

            <Link to="/success-stories/financial-automation" className="case-study-link">
              Read Full Success Story <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="technologies-section">
        <div className="container mx-auto px-6">
          <div className="section-header">
            <h2 className="section-title">Automation Technologies We Use</h2>
            <p className="section-description">
              Leading automation platforms and tools powering our intelligent process automation solutions
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
          <h2 className="cta-title">Ready to Automate Your Processes?</h2>
          <p className="cta-description">
            Let's discuss how our intelligent automation solutions can streamline your operations and reduce costs.
          </p>
          <div className="cta-actions">
            <Link to="/contact" className="btn btn-primary-large">
              Start Automation Journey
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

export default ProcessAutomation;