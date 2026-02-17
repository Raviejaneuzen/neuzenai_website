import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Calendar, MapPin, Users, Target, CheckCircle, TrendingUp, Award, Clock, Lightbulb, BarChart, Zap } from 'lucide-react';
import './CaseStudyDetail.css';

const CaseStudyDetail = () => {
  const { id } = useParams();

  const caseStudyData = {
    'education-remote-learning': {
      category: "Education",
      title: "Revolutionizing Remote Learning",
      company: "EduTech Global",
      industry: "EdTech",
      timeline: "6 months",
      location: "San Francisco, CA",
      teamSize: "12 specialists",
      color: "blue",
      icon: <Lightbulb className="w-8 h-8" />,
      hero: {
        description: "How we implemented AI-driven personalization for a leading online education platform, transforming student engagement and learning outcomes across 50+ countries.",
        image: "/case-study-education.jpg"
      },
      overview: {
        challenge: "EduTech Global faced significant challenges with their online learning platform. Student engagement rates were declining, with only 35% of enrolled students completing courses. The one-size-fits-all approach wasn't meeting diverse learning needs, resulting in high dropout rates and poor learning outcomes.",
        solution: "We developed a comprehensive AI-powered personalized learning system that adapts to individual student needs, learning pace, and preferences. The solution included intelligent content recommendation, adaptive assessments, and real-time progress tracking.",
        impact: "The implementation resulted in a 40% increase in student engagement, 65% reduction in dropout rates, and 85% student satisfaction score, transforming the online learning experience for over 100,000 students globally."
      },
      results: [
        { metric: "40%", label: "Increase in Engagement", description: "Students now spend 40% more time actively learning" },
        { metric: "65%", label: "Reduction in Dropouts", description: "Completion rates improved from 35% to 87%" },
        { metric: "85%", label: "Student Satisfaction", description: "Net Promoter Score increased to 85" },
        { metric: "100K+", label: "Students Impacted", description: "Platform now serves students in 50+ countries" }
      ],
      process: [
        {
          phase: "Discovery & Analysis",
          duration: "4 weeks",
          description: "Conducted comprehensive analysis of existing platform, student behavior patterns, and learning outcomes.",
          deliverables: ["User journey mapping", "Data analysis report", "Technical architecture review"]
        },
        {
          phase: "AI Model Development",
          duration: "8 weeks",
          description: "Developed machine learning models for personalization, content recommendation, and adaptive assessment.",
          deliverables: ["Personalization algorithms", "Recommendation engine", "Adaptive testing system"]
        },
        {
          phase: "Platform Integration",
          duration: "6 weeks",
          description: "Integrated AI models with existing platform infrastructure and developed new user interfaces.",
          deliverables: ["API integration", "Dashboard development", "Mobile app updates"]
        },
        {
          phase: "Testing & Optimization",
          duration: "4 weeks",
          description: "Conducted extensive testing with pilot groups and optimized algorithms based on real user feedback.",
          deliverables: ["A/B testing results", "Performance optimization", "User feedback integration"]
        }
      ],
      technologies: [
        "Python", "TensorFlow", "React", "Node.js", "MongoDB", "AWS", "Docker", "Kubernetes"
      ],
      testimonial: {
        quote: "NeuZenAI transformed our platform beyond our expectations. The personalized learning experience has not only improved student outcomes but also positioned us as a leader in the EdTech space.",
        author: "Sarah Johnson",
        position: "CEO, EduTech Global",
        avatar: "/testimonial-sarah.jpg"
      }
    },
    'finance-fraud-detection': {
      category: "Finance",
      title: "Fraud Detection at Scale",
      company: "SecureBank Corp",
      industry: "FinTech",
      timeline: "4 months",
      location: "New York, NY",
      teamSize: "8 specialists",
      color: "green",
      icon: <Target className="w-8 h-8" />,
      hero: {
        description: "Deploying a real-time anomaly detection system that prevented millions in fraudulent transactions while maintaining seamless user experience for legitimate customers.",
        image: "/case-study-finance.jpg"
      },
      overview: {
        challenge: "SecureBank Corp was experiencing increasing fraud rates with their existing rule-based system generating too many false positives, causing customer frustration and operational overhead. Manual review processes were slow and costly.",
        solution: "We implemented a sophisticated machine learning-based fraud detection system using behavioral analysis, transaction pattern recognition, and real-time risk scoring to identify fraudulent activities with high accuracy.",
        impact: "The new system prevented over $2M in fraudulent transactions in the first quarter while reducing false positives by 75%, significantly improving both security and customer experience."
      },
      results: [
        { metric: "$2M+", label: "Fraud Prevented", description: "Blocked fraudulent transactions in Q1 alone" },
        { metric: "99.8%", label: "Detection Accuracy", description: "Industry-leading fraud detection rate" },
        { metric: "75%", label: "Reduced False Positives", description: "Fewer legitimate transactions flagged" },
        { metric: "2.5s", label: "Average Response Time", description: "Real-time transaction processing" }
      ],
      process: [
        {
          phase: "Risk Assessment",
          duration: "2 weeks",
          description: "Analyzed existing fraud patterns, transaction data, and current system limitations.",
          deliverables: ["Risk analysis report", "Data quality assessment", "System architecture review"]
        },
        {
          phase: "Model Development",
          duration: "6 weeks",
          description: "Built advanced ML models for anomaly detection, behavioral analysis, and risk scoring.",
          deliverables: ["Fraud detection algorithms", "Behavioral models", "Risk scoring engine"]
        },
        {
          phase: "System Integration",
          duration: "4 weeks",
          description: "Integrated ML models with existing banking infrastructure and payment processing systems.",
          deliverables: ["API development", "Real-time processing pipeline", "Dashboard integration"]
        },
        {
          phase: "Deployment & Monitoring",
          duration: "4 weeks",
          description: "Deployed system in production with comprehensive monitoring and continuous model improvement.",
          deliverables: ["Production deployment", "Monitoring setup", "Performance optimization"]
        }
      ],
      technologies: [
        "Python", "Scikit-learn", "Apache Kafka", "Redis", "PostgreSQL", "Docker", "Kubernetes", "Grafana"
      ],
      testimonial: {
        quote: "The fraud detection system has been a game-changer for our operations. We've significantly reduced losses while improving customer satisfaction.",
        author: "Michael Chen",
        position: "CTO, SecureBank Corp",
        avatar: "/testimonial-michael.jpg"
      }
    }
    // Add more case studies as needed
  };

  const caseStudy = caseStudyData[id];

  if (!caseStudy) {
    return (
      <div className="case-study-detail-page pt-24">
        <div className="container mx-auto px-6 text-center py-20">
          <h1 className="text-4xl font-bold mb-4">Case Study Not Found</h1>
          <p className="text-gray-600 mb-8">The case study you're looking for doesn't exist.</p>
          <Link to="/success-stories" className="btn btn-primary">
            Back to Success Stories
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className={`case-study-detail-page ${caseStudy.color} pt-24`}>
      {/* Navigation */}
      <div className="case-study-nav">
        <div className="container mx-auto px-6">
          <Link to="/success-stories" className="back-link">
            <ArrowLeft className="w-5 h-5" />
            Back to Success Stories
          </Link>
        </div>
      </div>

      {/* Hero Section */}
      <section className="case-study-hero">
        <div className="container mx-auto px-6">
          <div className="case-study-hero-content">
            <div className="case-study-hero-meta">
              <div className="case-study-category-badge">{caseStudy.category}</div>
              <div className="case-study-hero-details">
                <div className="detail-item">
                  <Calendar className="w-4 h-4" />
                  <span>{caseStudy.timeline}</span>
                </div>
                <div className="detail-item">
                  <MapPin className="w-4 h-4" />
                  <span>{caseStudy.location}</span>
                </div>
                <div className="detail-item">
                  <Users className="w-4 h-4" />
                  <span>{caseStudy.teamSize}</span>
                </div>
              </div>
            </div>

            <div className="case-study-hero-main">
              <div className="case-study-icon-large">
                {caseStudy.icon}
              </div>
              <h1 className="case-study-hero-title">{caseStudy.title}</h1>
              <p className="case-study-hero-company">{caseStudy.company}</p>
              <p className="case-study-hero-description">{caseStudy.hero.description}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Results Overview */}
      <section className="results-overview">
        <div className="container mx-auto px-6">
          <h2 className="section-title">Key Results</h2>
          <div className="results-grid-detail">
            {caseStudy.results.map((result, index) => (
              <div key={index} className="result-card-detail">
                <div className="result-metric-large">{result.metric}</div>
                <div className="result-label-large">{result.label}</div>
                <div className="result-description">{result.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Overview */}
      <section className="project-overview">
        <div className="container mx-auto px-6">
          <div className="overview-grid">
            <div className="overview-section">
              <h3 className="overview-title">
                <Target className="w-6 h-6" />
                The Challenge
              </h3>
              <p className="overview-content">{caseStudy.overview.challenge}</p>
            </div>

            <div className="overview-section">
              <h3 className="overview-title">
                <Lightbulb className="w-6 h-6" />
                Our Solution
              </h3>
              <p className="overview-content">{caseStudy.overview.solution}</p>
            </div>

            <div className="overview-section">
              <h3 className="overview-title">
                <TrendingUp className="w-6 h-6" />
                The Impact
              </h3>
              <p className="overview-content">{caseStudy.overview.impact}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Timeline */}
      <section className="process-timeline">
        <div className="container mx-auto px-6">
          <h2 className="section-title">Project Timeline</h2>
          <div className="timeline">
            {caseStudy.process.map((phase, index) => (
              <div key={index} className="timeline-item">
                <div className="timeline-marker">
                  <div className="timeline-number">{index + 1}</div>
                </div>
                <div className="timeline-content">
                  <div className="timeline-header">
                    <h3 className="timeline-title">{phase.phase}</h3>
                    <div className="timeline-duration">
                      <Clock className="w-4 h-4" />
                      {phase.duration}
                    </div>
                  </div>
                  <p className="timeline-description">{phase.description}</p>
                  <div className="timeline-deliverables">
                    <h4>Key Deliverables:</h4>
                    <ul>
                      {phase.deliverables.map((deliverable, idx) => (
                        <li key={idx}>
                          <CheckCircle className="w-4 h-4" />
                          {deliverable}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Used */}
      <section className="technologies-section">
        <div className="container mx-auto px-6">
          <h2 className="section-title">Technologies Used</h2>
          <div className="technologies-grid">
            {caseStudy.technologies.map((tech, index) => (
              <div key={index} className="technology-tag">
                {tech}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Testimonial */}
      <section className="testimonial-section">
        <div className="container mx-auto px-6">
          <div className="testimonial-card">
            <div className="testimonial-content">
              <div className="testimonial-quote">"{caseStudy.testimonial.quote}"</div>
              <div className="testimonial-author">
                <div className="author-info">
                  <div className="author-name">{caseStudy.testimonial.author}</div>
                  <div className="author-position">{caseStudy.testimonial.position}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="case-study-cta">
        <div className="container mx-auto px-6 text-center">
          <h2 className="cta-title">Ready to Transform Your Business?</h2>
          <p className="cta-description">
            Let's discuss how we can help you achieve similar breakthrough results with our AI solutions.
          </p>
          <div className="cta-buttons">
            <Link to="/contact" className="btn btn-primary-large">
              Start Your Project
            </Link>
            <Link to="/success-stories" className="btn btn-secondary-large">
              View More Success Stories
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CaseStudyDetail;