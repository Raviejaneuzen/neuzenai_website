import { Link } from 'react-router-dom';
import { Users, BarChart3, Shield, Zap, Target, ArrowRight, CheckCircle, Award } from 'lucide-react';
import { MediaImage } from '../assets/industry-images.jsx';
import './IndustryDetail.css';

const MediaEntertainment = () => {
  const solutions = [
    {
      icon: <Target className="w-8 h-8" />,
      title: "AI-Powered Content Recommendation",
      description: "Advanced machine learning algorithms that analyze user behavior, preferences, and viewing patterns to deliver personalized content recommendations that increase engagement and retention.",
      benefits: ["40% increase in user engagement", "25% boost in content discovery", "Reduced churn rate by 30%"]
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Real-time Audience Analytics",
      description: "Comprehensive analytics platform that provides deep insights into audience behavior, content performance, and viewer demographics in real-time.",
      benefits: ["Real-time performance tracking", "Detailed audience segmentation", "Predictive content trends"]
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Automated Content Moderation",
      description: "AI-driven content moderation system that automatically detects and filters inappropriate content, ensuring brand safety and compliance.",
      benefits: ["99.5% accuracy in content filtering", "24/7 automated monitoring", "Reduced moderation costs by 60%"]
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Multi-platform Distribution Intelligence",
      description: "Intelligent distribution system that optimizes content delivery across multiple platforms and channels for maximum reach and engagement.",
      benefits: ["Optimized content delivery", "Cross-platform analytics", "Automated scheduling"]
    }
  ];

  const caseStudy = {
    title: "Global Streaming Platform Transformation",
    company: "StreamMax Entertainment",
    challenge: "Low user engagement and high churn rates due to poor content discovery and generic recommendations.",
    solution: "Implemented AI-powered recommendation engine with real-time analytics and personalized user experiences.",
    results: [
      { metric: "45%", label: "Increase in Watch Time" },
      { metric: "35%", label: "Reduction in Churn" },
      { metric: "60%", label: "Better Content Discovery" },
      { metric: "10M+", label: "Users Served Daily" }
    ]
  };

  const technologies = [
    "TensorFlow", "PyTorch", "Apache Kafka", "Redis", "MongoDB", "React", "Node.js", "AWS", "Docker", "Kubernetes"
  ];

  return (
    <div className="industry-detail-page pt-24">
      {/* Hero Section */}
      <section className="industry-hero">
        <div className="container mx-auto px-6">
          <div className="industry-hero-content">
            <div className="industry-hero-text">
              <div className="industry-badge">
                <Users className="w-5 h-5" />
                MEDIA & ENTERTAINMENT
              </div>
              <h1 className="industry-hero-title">
                Transform Content Creation with <span className="text-highlight">AI Innovation</span>
              </h1>
              <p className="industry-hero-description">
                Revolutionize your media and entertainment business with AI-powered content recommendation systems,
                audience analytics, and personalized streaming experiences that captivate viewers and maximize engagement
                across all platforms.
              </p>
              <div className="industry-hero-stats">
                <div className="stat-item">
                  <div className="stat-number">10M+</div>
                  <div className="stat-label">Content Views Analyzed</div>
                </div>
                <div className="stat-item">
                  <div className="stat-number">40%</div>
                  <div className="stat-label">Engagement Increase</div>
                </div>
                <div className="stat-item">
                  <div className="stat-number">25+</div>
                  <div className="stat-label">Platforms Integrated</div>
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
                <MediaImage />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="solutions-section">
        <div className="container mx-auto px-6">
          <div className="section-header">
            <h2 className="section-title">AI Solutions for Media & Entertainment</h2>
            <p className="section-description">
              Comprehensive AI-powered solutions designed specifically for the media and entertainment industry
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

            <Link to="/success-stories/education-remote-learning" className="case-study-link">
              Read Full Success Story <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="technologies-section">
        <div className="container mx-auto px-6">
          <div className="section-header">
            <h2 className="section-title">Technologies We Use</h2>
            <p className="section-description">
              Cutting-edge technologies and frameworks powering our media & entertainment solutions
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
          <h2 className="cta-title">Ready to Transform Your Media Business?</h2>
          <p className="cta-description">
            Let's discuss how our AI solutions can revolutionize your content strategy and audience engagement.
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

export default MediaEntertainment;