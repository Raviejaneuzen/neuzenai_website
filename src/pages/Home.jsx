import React, { useState, useEffect } from 'react';
import { ArrowRight, Brain, Database, Shield, Cloud, Zap, Code, BarChart, Users, Star, StarHalf, CheckCircle, Heart, Building2, Factory, ShoppingCart, Sparkles, TrendingUp, Award, Globe, LayoutDashboard, BrainCircuit, PieChart, Settings, PlayCircle, Truck } from 'lucide-react';
import { Link } from 'react-router-dom';
import './Home.css';
import './HomeMobile.css';

import GravityBackground from '../components/GravityBackground';
import NeuralBackground from '../components/NeuralBackground';


const Home = () => {
    const [text, setText] = useState('');
    const fullText = "Product Development & Intelligent Automation";

    useEffect(() => {
        document.title = "neuzenai";
        const metaDescription = document.querySelector('meta[name="description"]');
        if (metaDescription) {
            metaDescription.setAttribute('content', 'At NeuzenAI we harness the synergy of Data, Analytics, and Artificial Intelligence to elevate our clients digital transformation journeys.');
        }

        const timeout = setTimeout(() => {
            let i = 0;
            const timer = setInterval(() => {
                setText(fullText.substring(0, i + 1));
                i++;
                if (i === fullText.length) {
                    clearInterval(timer);
                }
            }, 150); // Typing speed
            return () => clearInterval(timer);
        }, 1000); // Start delay
        return () => clearTimeout(timeout);
    }, []);

    const clients = [
        { name: "TechCorp", logo: "TC" },
        { name: "InnovateLabs", logo: "IL" },
        { name: "DataFlow Inc", logo: "DF" },
        { name: "SmartSystems", logo: "SS" },
        { name: "FutureTech", logo: "FT" },
        { name: "CloudVision", logo: "CV" },
        { name: "AI Dynamics", logo: "AD" },
        { name: "NextGen Solutions", logo: "NG" },
        { name: "Digital Minds", logo: "DM" },
        { name: "Quantum Labs", logo: "QL" },
        { name: "Neural Networks Inc", logo: "NN" },
        { name: "Cyber Intelligence", logo: "CI" },
        { name: "Data Insights Co", logo: "DI" },
        { name: "Machine Learning Pro", logo: "ML" },
        { name: "Analytics Plus", logo: "AP" },
        { name: "Smart Analytics", logo: "SA" }
    ];



    const colorClasses = {
        blue: { bg: "bg-blue-50", text: "text-blue-500", border: "border-blue-200", gradient: "from-blue-400 to-blue-600", shadow: "shadow-blue-200" },
        green: { bg: "bg-green-50", text: "text-green-500", border: "border-green-200", gradient: "from-green-400 to-green-600", shadow: "shadow-green-200" },
        purple: { bg: "bg-purple-50", text: "text-purple-500", border: "border-purple-200", gradient: "from-purple-400 to-purple-600", shadow: "shadow-purple-200" },
        orange: { bg: "bg-[#ff4500] bg-opacity-10", text: "text-[#ff4500]", border: "border-[#ff4500] border-opacity-20", gradient: "from-[#ff4500] to-[#ff4500]", shadow: "shadow-[#ff4500]/20" },
        red: { bg: "bg-red-50", text: "text-red-500", border: "border-red-200", gradient: "from-red-400 to-red-600", shadow: "shadow-red-200" },
        indigo: { bg: "bg-indigo-50", text: "text-indigo-500", border: "border-indigo-200", gradient: "from-indigo-400 to-indigo-600", shadow: "shadow-indigo-200" }
    };

    return (
        <>
            <NeuralBackground />
            {/* Hero Section */}
            <section className="home-hero">
                <GravityBackground />
                <div className="home-hero-content fade-in">
                    <h1 className="home-hero-title">
                        Next-Gen AI <br />
                        <span>{text}</span>
                    </h1>
                    <p className="home-hero-subtitle">
                        Accelerate your digital transformation with NeuZenAI’s custom machine learning models, proprietary AI platforms, and data-driven product engineering. From concept to scale, we build the intelligent systems that power your future
                    </p>
                    <Link to="/contact" className="home-hero-cta">
                        START YOUR AI JOURNEY
                        <ArrowRight className="w-5 h-5" />
                    </Link>
                </div>
            </section>

            {/* Our Story Section */}
            <section className="homepage-story-section">
                <div className="homepage-main-container">
                    <div className="homepage-story-content fade-in">
                        <div className="homepage-story-text">
                            <div className="homepage-badge-green">
                                <Sparkles className="w-4 h-4" />
                                OUR STORY
                            </div>
                            <h2 className="homepage-story-title">Pioneering the Future of AI Innovation</h2>
                            <p className="homepage-story-description">
                                NeuZenAI leads in Data, Analytics, and AI, transforming how businesses harness data-driven insights for smarter decisions and intelligently automated operations.
                            </p>
                            <p className="homepage-story-description">
                                Through our innovative digital accelerators, we don't just deliver solutions—we redefine the future of business intelligence.
                            </p>

                            <div className="homepage-story-highlights">
                                <div className="homepage-highlight-item">
                                    <div className="homepage-highlight-icon">
                                        <Award className="w-6 h-6" />
                                    </div>
                                    <div className="homepage-highlight-content">
                                        <h4 className="homepage-highlight-title">Industry Recognition</h4>
                                        <p className="homepage-highlight-desc">Award-winning AI solutions recognized globally</p>
                                    </div>
                                </div>
                                <div className="homepage-highlight-item">
                                    <div className="homepage-highlight-icon">
                                        <Globe className="w-6 h-6" />
                                    </div>
                                    <div className="homepage-highlight-content">
                                        <h4 className="homepage-highlight-title">Global Impact</h4>
                                        <p className="homepage-highlight-desc">Serving clients across 5+ countries</p>
                                    </div>
                                </div>
                            </div>

                            <Link to="/about" className="homepage-story-cta">
                                Learn More About Us
                                <ArrowRight className="w-5 h-5" />
                            </Link>
                        </div>

                        {/* Right Side - Story Image */}
                        <div className="homepage-story-image">
                            <img
                                src="/story.png"
                                alt="NeuZenAI Story - AI Innovation Journey"
                                className="homepage-story-img"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* What We Do Section - Enhanced */}
            <section className="homepage-services-section">
                <div className="homepage-main-container">
                    <div className="homepage-section-header fade-in">
                        <div className="homepage-badge-green">
                            <Sparkles className="w-4 h-4" />
                            OUR EXPERTISE
                        </div>
                        <h2 className="homepage-main-title">What We Do</h2>
                        <p className="homepage-main-description">
                            We deliver cutting-edge AI solutions that transform businesses and drive innovation across industries with measurable results.
                        </p>
                    </div>

                    {/* Enhanced Service Cards Grid */}
                    <div className="homepage-services-grid fade-in">
                        {[
                            {
                                icon: <BarChart className="w-8 h-8 text-[#ff4500]" stroke="#ff4500" />,
                                title: "Advanced Analytics",
                                desc: "Transform raw data into actionable insights with sophisticated statistical models and predictive analytics solutions that drive business growth.",
                                features: ["Predictive Modeling", "Statistical Analysis", "Data Visualization", "Business Intelligence"],
                                bgImage: "/analytics.png",
                                color: "orange",
                                gradient: "from-[#ff4500] to-[#ff4500]"
                            },
                            {
                                icon: <Users className="w-8 h-8" />,
                                title: "AI Strategic Consulting",
                                desc: "Expert guidance on AI adoption, implementation strategies, and digital transformation roadmaps for sustainable competitive advantage.",
                                features: ["Strategy Development", "AI Roadmapping", "Technology Assessment", "Change Management"],
                                bgImage: "/aistragery.png",
                                color: "green",
                                gradient: "from-green-500 to-green-600"
                            },
                            {
                                icon: <BrainCircuit className="w-8 h-8" />,
                                title: "Custom AI Solutions",
                                desc: "Tailored artificial intelligence systems designed specifically for your business needs and industry requirements with proven ROI.",
                                features: ["Custom ML Models", "Neural Networks", "Computer Vision", "NLP Solutions"],
                                bgImage: "/aisolution.png",
                                color: "purple",
                                gradient: "from-purple-500 to-purple-600"
                            },
                            {
                                icon: <Settings className="w-8 h-8 text-[#ff4500]" stroke="#ff4500" />,
                                title: "Intelligent Automation",
                                desc: "Streamline operations with smart automation solutions that learn and adapt to optimize business processes and reduce costs.",
                                features: ["Process Automation", "RPA Implementation", "Workflow Optimization", "Smart Scheduling"],
                                bgImage: "/automation.png",
                                color: "orange",
                                gradient: "from-[#ff4500] to-[#ff4500]"
                            }
                        ].map((service, index) => (
                            <div key={index} className="homepage-service-card fade-in-stagger">
                                {/* Background Image */}
                                {/* Background Image Removed */}
                                {/* Background Gradient */}
                                <div className={`homepage-service-bg bg-gradient-to-br ${service.gradient}`}></div>

                                {/* Service Icon */}
                                <div className={`homepage-service-icon ${service.color === 'orange' ? 'text-[#ff4500]' : `text-${service.color}-600`}`}>
                                    {service.icon}
                                </div>

                                {/* Service Content */}
                                <div className="homepage-service-content">
                                    <h3 className="homepage-service-title">{service.title}</h3>
                                    <p className="homepage-service-desc">{service.desc}</p>

                                    {/* Service Features */}
                                    <ul className="homepage-service-features">
                                        {service.features.map((feature, idx) => (
                                            <li key={idx} className="homepage-service-feature">
                                                <span>{feature}</span>
                                            </li>
                                        ))}
                                    </ul>

                                    {/* Service CTA */}
                                    <Link to="/capabilities" className="homepage-service-cta">
                                        <ArrowRight className="w-5 h-5" />
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>



            {/* Industries We Serve Section - Enhanced */}
            <section className="homepage-industries-section">
                <div className="homepage-main-container">
                    <div className="homepage-section-header fade-in">
                        <div className="homepage-badge-green animate-bounce">
                            <Globe className="w-4 h-4" />
                            DIVERSE EXPERTISE
                        </div>
                        <h2 className="homepage-main-title">Industries We Serve</h2>
                        <p className="homepage-main-description">
                            Transforming businesses across diverse sectors with tailored AI solutions that drive innovation, accelerate growth, and deliver measurable ROI.
                        </p>
                    </div>

                    {/* Enhanced Industries Grid */}
                    <div className="homepage-industries-grid fade-in">
                        {[
                            {
                                icon: <ShoppingCart className="w-10 h-10" />,
                                name: "E-commerce & Retail",
                                desc: "Personalized shopping experiences, inventory optimization, and customer behavior analysis for increased sales and loyalty.",
                                stats: "2M+ Customers Served",
                                features: ["Personalization", "Inventory AI", "Customer Analytics", "Price Optimization"],
                                bgPattern: "🛒",
                                bgImage: "/ecommerence.png",
                                color: "purple",
                                gradient: "from-purple-500 to-violet-600",
                                achievements: ["45% Revenue Growth", "Dynamic Pricing", "Omnichannel Experience"]
                            },
                            {
                                icon: <Zap className="w-10 h-10" />,
                                name: "Energy & Utilities",
                                desc: "Smart grid optimization, predictive maintenance, energy consumption forecasting, and renewable energy management.",
                                stats: "500+ Smart Grids",
                                features: ["Grid Optimization", "Energy Forecasting", "Predictive Maintenance", "Renewable Integration"],
                                bgPattern: "⚡",
                                bgImage: "/energy.png",
                                color: "teal",
                                gradient: "from-teal-500 to-cyan-600",
                                achievements: ["25% Energy Savings", "Grid Stability", "Sustainability Goals"]
                            },
                            {
                                icon: <Building2 className="w-10 h-10" />,
                                name: "Financial Services",
                                desc: "Advanced fraud detection, algorithmic trading, credit scoring, and regulatory compliance solutions for modern banking.",
                                stats: "1B+ Transactions Analyzed",
                                features: ["Fraud Detection", "Credit Scoring", "Algorithmic Trading", "Compliance AI"],
                                bgPattern: "🏦",
                                bgImage: "/financial.png",
                                color: "yellow",
                                gradient: "from-yellow-500 to-[#ff4500]",
                                achievements: ["99.8% Fraud Detection", "Regulatory Compliance", "Risk Mitigation"]
                            },
                            {
                                icon: <Heart className="w-10 h-10" />,
                                name: "Healthcare & Insurance",
                                desc: "Risk assessment, claims processing automation, and predictive health analytics for better coverage decisions and patient outcomes.",
                                stats: "500K+ Policies Processed",
                                features: ["Risk Assessment", "Claims Automation", "Health Predictions", "Fraud Detection"],
                                bgPattern: "🏥",
                                bgImage: "/health.png",
                                color: "red",
                                gradient: "from-red-500 to-pink-600",
                                achievements: ["99.2% Accuracy", "60% Faster Processing", "HIPAA Compliant"]
                            },
                            {
                                icon: <PlayCircle className="w-10 h-10 text-[#e11d48]" stroke="#e11d48" />,
                                name: "Media & Entertainment",
                                desc: "Content recommendation systems, audience analytics, and personalized streaming experiences that engage millions of viewers worldwide.",
                                stats: "10M+ Content Views",
                                features: ["Content AI", "Audience Analytics", "Recommendation Engine", "Content Moderation"],
                                bgPattern: "🎬",
                                bgImage: "/media.png",
                                color: "blue",
                                gradient: "from-blue-500 to-indigo-600",
                                achievements: ["40% Engagement Boost", "Real-time Analytics", "Global Scale"]
                            },
                            {
                                icon: <Truck className="w-10 h-10" />,
                                name: "Transportation & Logistics",
                                desc: "Route optimization, fleet management, and supply chain intelligence for efficient operations and cost reduction.",
                                stats: "1000+ Fleet Vehicles",
                                features: ["Route Optimization", "Fleet Management", "Supply Chain AI", "Predictive Maintenance"],
                                bgPattern: "🚛",
                                bgImage: "/transport.png",
                                color: "green",
                                gradient: "from-green-500 to-emerald-600",
                                achievements: ["30% Cost Savings", "Real-time Tracking", "Carbon Footprint Reduction"]
                            }
                        ].map((industry, index) => (
                            <div key={index} className="homepage-industry-card fade-in-stagger">
                                {/* Background Image */}
                                {/* Background Image Removed */}

                                {/* Background Pattern */}
                                <div className="homepage-industry-pattern">
                                    {industry.bgPattern}
                                </div>

                                {/* Gradient Background */}
                                <div className={`homepage-industry-bg bg-gradient-to-br ${industry.gradient}`}></div>

                                {/* Industry Header */}
                                <div className="homepage-industry-header">
                                    <div className={`homepage-industry-icon bg-${industry.color}-50 text-${industry.color}-600`}>
                                        {industry.icon}
                                    </div>
                                    <div className="homepage-industry-badge">
                                        <TrendingUp className="w-3 h-3" />
                                        <span>{industry.stats}</span>
                                    </div>
                                </div>

                                {/* Industry Content */}
                                <div className="homepage-industry-content">
                                    <h3 className="homepage-industry-title">{industry.name}</h3>
                                    <p className="homepage-industry-desc">{industry.desc}</p>

                                    {/* Key Features */}
                                    <div className="homepage-industry-features">
                                        <h4 className="homepage-features-title">Key Solutions:</h4>
                                        <ul className="homepage-features-list">
                                            {industry.features.map((feature, idx) => (
                                                <li key={idx} className="homepage-feature-item">
                                                    <div className={`homepage-feature-bullet bg-${industry.color}-400`}></div>
                                                    <span>{feature}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    {/* Achievements */}
                                    <div className="homepage-industry-achievements">
                                        <h4 className="homepage-achievements-title">
                                            <Award className="w-4 h-4" />
                                            Achievements:
                                        </h4>
                                        <div className="homepage-achievements-list">
                                            {industry.achievements.map((achievement, idx) => (
                                                <span key={idx} className={`homepage-achievement-tag bg-${industry.color}-100 text-${industry.color}-700`}>
                                                    {achievement}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Industry CTA */}
                                    <Link to="/industries" className="homepage-industry-cta">
                                        <ArrowRight className="w-5 h-5" />
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Industries CTA */}
                    <div className="homepage-industries-cta fade-in">
                        <div className="homepage-cta-content">
                            <h3 className="homepage-cta-title">Ready to Transform Your Industry?</h3>

                            <Link to="/contact" className="homepage-cta-button">
                                <span>Contact Us</span>
                                <ArrowRight className="w-5 h-5" />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Success Stories Preview */}
            <section className="home-section home-section-transparent">
                <div className="homepage-main-container">
                    <div className="homepage-section-header fade-in">
                        <div className="homepage-badge-green">
                            <Star className="w-4 h-4" />
                            PROVEN RESULTS
                        </div>
                        <h2 className="homepage-main-title">Success Stories</h2>
                        <p className="homepage-main-description">
                            Real results from real clients who transformed their business with our AI solutions.
                        </p>
                    </div>

                    {/* Static Grid Success Stories */}
                    <div className="home-testimonials-grid fade-in">
                        {[
                            {
                                quote: "Partnering with NeuZenAI has accelerated our product innovation cycle. Their deep expertise in AI integration has helped us deliver more robust and intelligent communication solutions.",
                                author: "David Herber",
                                role: "VP, Engineering And Product Development ",
                                company: "Meteorcomm",
                                industry: "Communications Technology",
                                metrics: ["2x faster innovation cycle", "99.9% system reliability", "Cutting-edge AI integration"],
                                image: "/meterocomm-david.jpg",
                                color: "green",
                                logo: "/metero.png",
                                initials: "MC",
                                rating: 4.5
                            },
                            {
                                quote: "NeuZenAI’s AI-driven recruitment and resource management solutions have streamlined our talent acquisition process, ensuring we find the right expertise for our clients faster than ever.",
                                author: "Lakshmi kalluru",
                                role: "SVP IT Solutions & Delivery",
                                company: "ITConnectUS",
                                industry: "IT Staffing & Consulting",
                                metrics: ["40% faster hiring cycle", "High-quality talent matching", "Scalable workforce solutions"],
                                image: "/itconnectus-lakshmi-kalluru.jpg",
                                color: "blue",
                                logo: "/itconnect.png",
                                initials: "IT",
                                rating: 4.0
                            },
                            {
                                quote: "The intelligent automation and customer analytics platforms provided by NeuZenAI have allowed us to scale our services rapidly while maintaining exceptional quality of experience for our global clients.",
                                author: "Aravind Maddineni",
                                role: "Head-RF Engineering",
                                company: "",
                                industry: "Telecommunications",
                                metrics: ["35% operational cost saving", "50% faster service rollout", "Enhanced network security"],
                                image: "/telecomm-aravind.jpg",
                                color: "orange",
                                logo: "/telecom.png",
                                initials: "TG",
                                rating: 4.0
                            }
                        ].map((study, index) => {
                            // Map color strings to tailwind classes for the logo background
                            const logoColors = {
                                green: "bg-emerald-600",
                                orange: "bg-amber-600",
                                blue: "bg-blue-600"
                            };
                            const logoBg = logoColors[study.color] || "bg-gray-600";

                            // Generate Stars based on rating
                            const renderStars = (rating) => {
                                const stars = [];
                                for (let i = 1; i <= 5; i++) {
                                    if (i <= Math.floor(rating)) {
                                        stars.push(<Star key={i} className="w-5 h-5 fill-current" />);
                                    } else if (i === Math.ceil(rating) && !Number.isInteger(rating)) {
                                        stars.push(<StarHalf key={i} className="w-5 h-5 fill-current" />);
                                    } else {
                                        stars.push(<Star key={i} className="w-5 h-5 text-gray-300" />);
                                    }
                                }
                                return stars;
                            };

                            return (
                                <div key={index} className="home-testimonial-card active">
                                    {/* Background Image */}
                                    {/* Background Image Removed */}
                                    {/* Rating Stars */}
                                    <div className="home-testimonial-stars">
                                        {renderStars(study.rating)}
                                    </div>

                                    {/* Quote */}
                                    <p className="home-testimonial-quote">
                                        "{study.quote}"
                                    </p>

                                    {/* Author */}
                                    <div className="home-testimonial-author-row">
                                        <div className="home-testimonial-avatar">
                                            <img
                                                src={study.image}
                                                alt={study.author}
                                                onError={(e) => {
                                                    e.target.src = `https://ui-avatars.com/api/?name=${study.author}&background=e2e8f0&color=64748b`;
                                                }}
                                            />
                                        </div>
                                        <div className="home-testimonial-author-info">
                                            <div className="home-testimonial-author-name">{study.author}</div>
                                            <div className="home-testimonial-author-role">{study.role}</div>
                                        </div>
                                    </div>

                                    <div className="home-testimonial-divider"></div>

                                    {/* Company Info */}
                                    <div className="home-testimonial-company-row">
                                        <div className="flex items-center gap-3">
                                            {study.logo ? (
                                                <img
                                                    src={study.logo}
                                                    alt={`${study.company} logo`}
                                                    className="object-contain"
                                                    style={{ width: 'auto', height: '48px', maxWidth: '140px' }}
                                                />
                                            ) : (
                                                <>
                                                    <div className={`home-testimonial-company-logo ${logoBg}`}>
                                                        {study.initials}
                                                    </div>
                                                    <span className="home-testimonial-company-name">{study.company}</span>
                                                </>
                                            )}
                                        </div>
                                        <span className="home-testimonial-industry">{study.industry}</span>
                                    </div>

                                    <div className="home-testimonial-divider"></div>

                                    {/* Metrics */}
                                    <ul className="home-testimonial-metrics">
                                        {study.metrics.map((metric, i) => (
                                            <li key={i} className="home-testimonial-metric-item">
                                                <div className="home-testimonial-metric-dot"></div>
                                                {metric}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            );
                        })}
                    </div>

                    <div className="text-center mt-16 fade-in">
                        <Link to="/success-stories" className="home-hero-cta">
                            View All Success Stories
                        </Link>
                    </div>
                </div>
            </section >

            {/* Projects Done & Stats */}
            {/* Projects Done & Stats */}
            <section className="brand-impact-stats-section">
                <div className="home-container">
                    <div className="home-section-header fade-in">
                        <h2 className="brand-impact-title">Our Impact in Numbers</h2>
                        <p className="brand-impact-description">
                            Delivering measurable results across 6+ projects worldwide.
                        </p>
                    </div>

                    <div className="brand-impact-grid fade-in">
                        {[
                            { metric: "6+", label: "Projects Completed", icon: <CheckCircle className="w-8 h-8" /> },
                            { metric: "4+", label: "Happy Clients", icon: <Users className="w-8 h-8" /> },
                            { metric: "3+", label: "Industries Served", icon: <Building2 className="w-8 h-8" /> },
                            { metric: "98%", label: "Success Rate", icon: <Star className="w-8 h-8" /> }
                        ].map((stat, index) => (
                            <div key={index} className="brand-impact-item">
                                <div className="brand-impact-icon">
                                    {stat.icon}
                                </div>
                                <div className="brand-impact-number">{stat.metric}</div>
                                <div className="brand-impact-label">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Our Values */}
            <section className="home-section">
                <div className="home-container">
                    <div className="home-section-header fade-in">
                        <h2 className="home-section-title">Our Values</h2>
                        <p className="home-section-description">
                            The principles that guide everything we do, from innovation to client relationships.
                        </p>
                    </div>

                    <div className="home-values-grid fade-in">
                        {[
                            {
                                icon: <BrainCircuit className="w-8 h-8" />,
                                title: "Innovation First",
                                desc: "We constantly push the boundaries of what's possible with AI technology.",
                                color: "blue"
                            },
                            {
                                icon: <Heart className="w-8 h-8" />,
                                title: "Human-Centered",
                                desc: "Technology should enhance human capabilities, not replace them.",
                                color: "red"
                            },
                            {
                                icon: <Shield className="w-8 h-8" />,
                                title: "Ethical AI",
                                desc: "We're committed to developing AI that is transparent, fair, and accountable.",
                                color: "green"
                            },
                            {
                                icon: <Zap className="w-8 h-8" />,
                                title: "Excellence",
                                desc: "We maintain the highest standards in everything we do.",
                                color: "orange"
                            }
                        ].map((value, index) => {
                            const colorConfig = colorClasses[value.color] || colorClasses.blue;
                            return (
                                <div key={index} className="home-value-item">
                                    <div className={`home-value-icon ${colorConfig.bg} ${colorConfig.text}`}>
                                        {value.icon}
                                    </div>
                                    <h3 className="home-value-title">{value.title}</h3>
                                    <p className="home-value-description">{value.desc}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Trusted Clients Section - Enhanced Ticker */}
            <section className="homepage-trusted-section">
                <div className="homepage-main-container">
                    <div className="text-center mb-16 fade-in">
                        <div className="homepage-badge-green mx-auto mb-4">
                            <Sparkles className="w-4 h-4" />
                            GLOBAL PARTNERSHIPS
                        </div>
                        <h2 className="homepage-main-title">Trusted by Leading Organizations</h2>
                        <p className="homepage-main-description mx-auto">
                            Empowering innovative teams at world-class companies to achieve more with AI.
                        </p>
                    </div>

                    <div className="logo-ticker-container fade-in">
                        <div className="logo-ticker-track">
                            {/* Original Set */}
                            <div className="logo-ticker-item">
                                <img src="/metero.png" alt="Meteorcomm" />
                            </div>
                            <div className="logo-ticker-item">
                                <img src="/itconnect.png" alt="ITConnectUS" />
                            </div>
                            <div className="logo-ticker-item">
                                <img src="/csx.png" alt="CSX" />
                            </div>
                            <div className="logo-ticker-item">
                                <img src="/telecom.png" alt="Telecom Gateway" />
                            </div>
                            {/* Duplicate Set for Infinite Scroll */}
                            <div className="logo-ticker-item">
                                <img src="/metero.png" alt="Meteorcomm" />
                            </div>
                            <div className="logo-ticker-item">
                                <img src="/itconnect.png" alt="ITConnectUS" />
                            </div>
                            <div className="logo-ticker-item">
                                <img src="/csx.png" alt="CSX" />
                            </div>
                            <div className="logo-ticker-item">
                                <img src="/telecom.png" alt="Telecom Gateway" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>


        </>
    );
};

export default Home;