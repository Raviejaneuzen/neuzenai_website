import { Link } from 'react-router-dom';
import { Brain, Cpu, Eye, MessageSquare, Target, Zap, ArrowRight, CheckCircle, Award } from 'lucide-react';
import { AIImage } from '../assets/service-images.jsx';
import './ServiceDetail.css';

const CustomAI = () => {
  const solutions = [
    {
      icon: <Brain className="w-8 h-8" />,
      title: "Custom ML Model Development",
      description: "Tailored machine learning models designed specifically for your business needs, from data preprocessing to model deployment and monitoring.",
      benefits: ["Custom algorithm design", "Domain-specific optimization", "Scalable architecture", "Performance monitoring"]
    },
    {
      icon: <Eye className="w-8 h-8" />,
      title: "Computer Vision Applications",
      description: "Advanced image and video analysis solutions including object detection, facial recognition, quality inspection, and automated visual processing.",
      benefits: ["Object detection & tracking", "Image classification", "Quality control automation", "Real-time processing"]
    },
    {
      icon: <MessageSquare className="w-8 h-8" />,
      title: "Natural Language Processing",
      description: "Sophisticated text analysis, sentiment analysis, chatbots, and language understanding systems that process and understand human language.",
      benefits: ["Text analysis & extraction", "Sentiment analysis", "Chatbot development", "Language translation"]
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Recommendation Systems",
      description: "Intelligent recommendation engines that analyze user behavior and preferences to deliver personalized content and product suggestions.",
      benefits: ["Personalized recommendations", "Collaborative filtering", "Content-based filtering", "Real-time suggestions"]
    }
  ];

  const caseStudy = {
    title: "E-commerce AI Recommendation Engine",
    company: "TechMart Online",
    challenge: "Low conversion rates and poor customer engagement due to generic product recommendations and lack of personalization in their e-commerce platform.",
    solution: "Developed custom AI recommendation system with deep learning models, real-time personalization, and advanced collaborative filtering algorithms.",
    results: [
      { metric: "65%", label: "Increase in Conversions" },
      { metric: "40%", label: "Higher Average Order Value" },
      { metric: "80%", label: "Improved User Engagement" },
      { metric: "2.5M", label: "Personalized Recommendations Daily" }
    ]
  };

  const technologies = [
    "TensorFlow", "PyTorch", "Scikit-learn", "OpenCV", "NLTK", "spaCy", "Keras", "Python", "Docker", "Kubernetes"
  ];

  return (
    <div className="service-detail-page pt-24">
      {/* Hero Section */}
      <section className="service-hero">
        <div className="container mx-auto px-6">
          <div className="service-hero-content">
            <div className="service-hero-text">
              <div className="service-badge">
                <Brain className="w-5 h-5" />
                CUSTOM AI & MACHINE LEARNING
              </div>
              <h1 className="service-hero-title">
                Build Intelligent Systems with <span className="text-highlight">Custom AI Solutions</span>
              </h1>
              <p className="service-hero-description">
                Develop tailored artificial intelligence systems designed specifically for your business needs. From computer
                vision to natural language processing, we build scalable AI solutions that learn, adapt, and grow with your
                organization to deliver exceptional results.
              </p>
              <div className="service-hero-stats">
                <div className="stat-item">
                  <div className="stat-number">100+</div>
                  <div className="stat-label">AI Models Deployed</div>
                </div>
                <div className="stat-item">
                  <div className="stat-number">99.5%</div>
                  <div className="stat-label">Model Accuracy</div>
                </div>
                <div className="stat-item">
                  <div className="stat-number">24/7</div>
                  <div className="stat-label">AI System Uptime</div>
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
                <AIImage />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="solutions-section">
        <div className="container mx-auto px-6">
          <div className="section-header">
            <h2 className="section-title">Custom AI & ML Solutions</h2>
            <p className="section-description">
              Comprehensive artificial intelligence and machine learning solutions tailored to your specific business requirements
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

            <Link to="/success-stories/ai-recommendation-engine" className="case-study-link">
              Read Full Success Story <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="technologies-section">
        <div className="container mx-auto px-6">
          <div className="section-header">
            <h2 className="section-title">AI Technologies We Use</h2>
            <p className="section-description">
              Advanced frameworks and tools powering our custom AI and machine learning solutions
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
          <h2 className="cta-title">Ready to Build Your Custom AI Solution?</h2>
          <p className="cta-description">
            Let's discuss how our custom AI and machine learning expertise can solve your unique business challenges.
          </p>
          <div className="cta-actions">
            <Link to="/contact" className="btn btn-primary-large">
              Start Your AI Project
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

export default CustomAI;