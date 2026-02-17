import { Link } from 'react-router-dom';
import { Heart, Activity, Brain, Stethoscope, FileText, ArrowRight, CheckCircle, Award } from 'lucide-react';
import { HealthImage } from '../assets/industry-images.jsx';
import './IndustryDetail.css';

const HealthcareInsurance = () => {
  const solutions = [
    {
      icon: <Brain className="w-8 h-8" />,
      title: "Predictive Health Risk Assessment",
      description: "Advanced AI algorithms that analyze patient data, medical history, and lifestyle factors to predict health risks and enable proactive care interventions.",
      benefits: ["Early disease detection", "Reduced healthcare costs by 35%", "Improved patient outcomes"]
    },
    {
      icon: <FileText className="w-8 h-8" />,
      title: "Automated Claims Processing",
      description: "Intelligent claims processing system that automates review, validation, and approval processes while detecting fraudulent claims with high accuracy.",
      benefits: ["90% faster claim processing", "Reduced operational costs", "99.2% fraud detection accuracy"]
    },
    {
      icon: <Activity className="w-8 h-8" />,
      title: "Medical Image Analysis",
      description: "AI-powered medical imaging analysis that assists healthcare professionals in diagnosing conditions from X-rays, MRIs, CT scans, and other medical images.",
      benefits: ["95% diagnostic accuracy", "Faster diagnosis times", "Reduced human error"]
    },
    {
      icon: <Stethoscope className="w-8 h-8" />,
      title: "Personalized Treatment Plans",
      description: "AI-driven treatment recommendation system that creates personalized care plans based on patient data, medical research, and treatment outcomes.",
      benefits: ["Improved treatment efficacy", "Reduced side effects", "Better patient compliance"]
    }
  ];

  const caseStudy = {
    title: "Healthcare Insurance Transformation",
    company: "MediCare Plus Insurance",
    challenge: "High claim processing times, increasing fraud rates, and inefficient risk assessment leading to significant operational costs and customer dissatisfaction.",
    solution: "Implemented comprehensive AI system for automated claims processing, fraud detection, and predictive risk assessment with real-time analytics.",
    results: [
      { metric: "500K+", label: "Policies Processed" },
      { metric: "75%", label: "Faster Claims Processing" },
      { metric: "99.2%", label: "Fraud Detection Rate" },
      { metric: "$50M", label: "Annual Cost Savings" }
    ]
  };

  const technologies = [
    "TensorFlow", "PyTorch", "OpenCV", "DICOM", "HL7 FHIR", "Python", "R", "AWS HealthLake", "Docker", "Kubernetes"
  ];

  return (
    <div className="industry-detail-page pt-24">
      {/* Hero Section */}
      <section className="industry-hero">
        <div className="container mx-auto px-6">
          <div className="industry-hero-content">
            <div className="industry-hero-text">
              <div className="industry-badge">
                <Heart className="w-5 h-5" />
                HEALTHCARE & LIFE INSURANCE
              </div>
              <h1 className="industry-hero-title">
                Revolutionize Healthcare with <span className="text-highlight">AI-Powered Solutions</span>
              </h1>
              <p className="industry-hero-description">
                Transform patient care and insurance operations with advanced risk assessment, automated claims processing,
                predictive health analytics, and fraud detection systems that improve outcomes and reduce costs while
                ensuring compliance with healthcare regulations.
              </p>
              <div className="industry-hero-stats">
                <div className="stat-item">
                  <div className="stat-number">500K+</div>
                  <div className="stat-label">Policies Processed</div>
                </div>
                <div className="stat-item">
                  <div className="stat-number">99.2%</div>
                  <div className="stat-label">Fraud Detection Rate</div>
                </div>
                <div className="stat-item">
                  <div className="stat-number">75%</div>
                  <div className="stat-label">Faster Processing</div>
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
                <HealthImage />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="solutions-section">
        <div className="container mx-auto px-6">
          <div className="section-header">
            <h2 className="section-title">AI Solutions for Healthcare & Insurance</h2>
            <p className="section-description">
              Advanced AI-powered solutions designed to transform healthcare delivery and insurance operations
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

            <Link to="/success-stories/finance-fraud-detection" className="case-study-link">
              Read Full Success Story <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="technologies-section">
        <div className="container mx-auto px-6">
          <div className="section-header">
            <h2 className="section-title">Healthcare Technologies We Use</h2>
            <p className="section-description">
              HIPAA-compliant technologies and frameworks ensuring security and reliability in healthcare AI
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
          <h2 className="cta-title">Ready to Transform Healthcare Operations?</h2>
          <p className="cta-description">
            Let's discuss how our AI solutions can improve patient outcomes and operational efficiency in your healthcare organization.
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

export default HealthcareInsurance;