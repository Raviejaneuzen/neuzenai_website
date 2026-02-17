import { Link } from 'react-router-dom';
import { Lightbulb, Target, TrendingUp, Users, Shield, Zap, ArrowRight, CheckCircle, Award } from 'lucide-react';
import { StrategyImage } from '../assets/service-images.jsx';
import './ServiceDetail.css';

const AIStrategy = () => {
  const solutions = [
    {
      icon: <Target className="w-8 h-8" />,
      title: "AI Readiness Assessment",
      description: "Comprehensive evaluation of your organization's current capabilities, infrastructure, and readiness for AI adoption with detailed recommendations.",
      benefits: ["Current state analysis", "Gap identification", "Readiness scoring", "Actionable recommendations"]
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Strategic Roadmap Development",
      description: "Detailed AI implementation roadmap with clear milestones, timelines, resource requirements, and success metrics aligned with business objectives.",
      benefits: ["Phased implementation plan", "Clear milestones & timelines", "Resource allocation", "ROI projections"]
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Technology Stack Evaluation",
      description: "Expert analysis and recommendations for AI technologies, platforms, and tools that best fit your business requirements and existing infrastructure.",
      benefits: ["Technology recommendations", "Platform evaluation", "Integration planning", "Vendor selection support"]
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Team Training & Upskilling",
      description: "Comprehensive training programs designed to upskill your team in AI technologies, best practices, and implementation methodologies.",
      benefits: ["Custom training programs", "Hands-on workshops", "Certification support", "Ongoing mentorship"]
    }
  ];

  const caseStudy = {
    title: "Manufacturing Digital Transformation",
    company: "IndustrialTech Solutions",
    challenge: "Traditional manufacturing company struggling with outdated processes, lack of AI expertise, and unclear digital transformation strategy.",
    solution: "Developed comprehensive AI strategy with phased implementation plan, technology evaluation, team training, and change management support.",
    results: [
      { metric: "300%", label: "ROI Within 18 Months" },
      { metric: "45%", label: "Operational Efficiency Gain" },
      { metric: "200+", label: "Employees Trained" },
      { metric: "12", label: "AI Projects Launched" }
    ]
  };

  const technologies = [
    "Strategic Planning", "Change Management", "Technology Assessment", "Training & Development", "ROI Analysis", "Risk Management"
  ];

  return (
    <div className="service-detail-page pt-24">
      {/* Hero Section */}
      <section className="service-hero">
        <div className="container mx-auto px-6">
          <div className="service-hero-content">
            <div className="service-hero-text">
              <div className="service-badge">
                <Lightbulb className="w-5 h-5" />
                AI STRATEGY & DIGITAL TRANSFORMATION
              </div>
              <h1 className="service-hero-title">
                Navigate Your AI Journey with <span className="text-highlight">Strategic Guidance</span>
              </h1>
              <p className="service-hero-description">
                Expert guidance on AI adoption, implementation strategies, and comprehensive digital transformation roadmaps
                that align with your business objectives. We help organizations successfully navigate their AI journey from
                strategy to execution with proven methodologies.
              </p>
              <div className="service-hero-stats">
                <div className="stat-item">
                  <div className="stat-number">150+</div>
                  <div className="stat-label">Strategy Projects</div>
                </div>
                <div className="stat-item">
                  <div className="stat-number">300%</div>
                  <div className="stat-label">Average ROI</div>
                </div>
                <div className="stat-item">
                  <div className="stat-number">95%</div>
                  <div className="stat-label">Success Rate</div>
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
                <StrategyImage />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="solutions-section">
        <div className="container mx-auto px-6">
          <div className="section-header">
            <h2 className="section-title">AI Strategy & Transformation Services</h2>
            <p className="section-description">
              Comprehensive strategic consulting services to guide your organization's AI adoption and digital transformation
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

            <Link to="/success-stories/manufacturing-transformation" className="case-study-link">
              Read Full Success Story <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="technologies-section">
        <div className="container mx-auto px-6">
          <div className="section-header">
            <h2 className="section-title">Our Strategic Expertise</h2>
            <p className="section-description">
              Core competencies and methodologies that drive successful AI strategy and digital transformation
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
          <h2 className="cta-title">Ready to Develop Your AI Strategy?</h2>
          <p className="cta-description">
            Let's discuss how our strategic expertise can guide your organization's successful AI transformation.
          </p>
          <div className="cta-actions">
            <Link to="/contact" className="btn btn-primary-large">
              Start Strategic Planning
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

export default AIStrategy;