import React from 'react';
import { Calendar, User, ArrowRight, BookOpen, TrendingUp, Lightbulb, Clock, Tag, Mail, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import './Insights.css';

const Insights = () => {
    const featuredArticle = {
        category: "AI Strategy",
        title: "The Enterprise AI Revolution: What Leaders Need to Know in 2025",
        excerpt: "As artificial intelligence becomes mainstream, enterprise leaders must navigate new challenges and opportunities. This comprehensive guide explores the strategic considerations, implementation frameworks, and success metrics that define AI transformation in the modern enterprise.",
        date: "Dec 20, 2024",
        author: "Dr. Sarah Chen",
        readTime: "12 min read",
        image: "from-blue-500 to-purple-600",
        tags: ["Strategy", "Enterprise", "Leadership"]
    };

    const articles = [
        {
            category: "Machine Learning",
            title: "Optimizing Supply Chains with Predictive Analytics",
            excerpt: "How reinforcement learning and predictive models are reducing waste and improving delivery times by up to 30% across global supply chains.",
            date: "Dec 15, 2024",
            author: "James Wilson",
            readTime: "8 min read",
            color: "blue",
            tags: ["ML", "Supply Chain", "Optimization"]
        },
        {
            category: "Ethics & AI",
            title: "Building Responsible AI: A Framework for Ethical Implementation",
            excerpt: "Why transparency, fairness, and accountability in AI algorithms are becoming the new gold standard for technology companies worldwide.",
            date: "Dec 10, 2024",
            author: "Elena Rodriguez",
            readTime: "10 min read",
            color: "green",
            tags: ["Ethics", "Governance", "Compliance"]
        },
        {
            category: "Industry Trends",
            title: "The Rise of Multimodal AI in Healthcare",
            excerpt: "Exploring how AI systems that process text, images, and sensor data simultaneously are revolutionizing medical diagnosis and treatment.",
            date: "Dec 5, 2024",
            author: "Dr. Michael Park",
            readTime: "6 min read",
            color: "red",
            tags: ["Healthcare", "Multimodal", "Innovation"]
        },
        {
            category: "Data Science",
            title: "Real-Time Analytics: Processing Billions of Events",
            excerpt: "Technical deep-dive into building scalable real-time analytics systems that can handle massive data streams with sub-second latency.",
            date: "Nov 28, 2024",
            author: "Alex Thompson",
            readTime: "15 min read",
            color: "purple",
            tags: ["Analytics", "Real-time", "Architecture"]
        },
        {
            category: "Automation",
            title: "Intelligent Process Automation: Beyond RPA",
            excerpt: "How cognitive automation is evolving beyond simple rule-based systems to handle complex, unstructured business processes.",
            date: "Nov 22, 2024",
            author: "Lisa Chang",
            readTime: "7 min read",
            color: "orange",
            tags: ["Automation", "RPA", "Process"]
        },
        {
            category: "Future Tech",
            title: "Quantum-Enhanced Machine Learning: The Next Frontier",
            excerpt: "Investigating the potential of quantum computing to accelerate machine learning algorithms and solve previously intractable problems.",
            date: "Nov 18, 2024",
            author: "Dr. Robert Kim",
            readTime: "12 min read",
            color: "indigo",
            tags: ["Quantum", "Future", "Research"]
        }
    ];

    const categories = [
        { name: "All", count: 25, active: true },
        { name: "AI Strategy", count: 8 },
        { name: "Machine Learning", count: 12 },
        { name: "Industry Trends", count: 6 },
        { name: "Case Studies", count: 9 },
        { name: "Technical", count: 7 }
    ];

    const colorClasses = {
        blue: { bg: "bg-blue-50", text: "text-blue-500", border: "border-blue-200" },
        green: { bg: "bg-green-50", text: "text-green-500", border: "border-green-200" },
        red: { bg: "bg-red-50", text: "text-red-500", border: "border-red-200" },
        purple: { bg: "bg-purple-50", text: "text-purple-500", border: "border-purple-200" },
        orange: { bg: "bg-orange-50", text: "text-orange-500", border: "border-orange-200" },
        indigo: { bg: "bg-indigo-50", text: "text-indigo-500", border: "border-indigo-200" }
    };

    return (
        <div className="insights-page pt-24">
            {/* Hero Section */}
            <section className="insights-hero">
                <div className="container mx-auto px-6 text-center">
                    <div className="insights-hero-content fade-in">
                        <div className="insights-badge">
                            INSIGHTS & RESEARCH
                        </div>
                        <h1 className="insights-title">
                            AI Insights & <span className="insights-title-highlight">Industry Trends</span>
                        </h1>
                        <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-12 leading-relaxed">
                            Stay ahead of the curve with expert analysis, research findings, and practical insights from the world of artificial intelligence. 
                            Discover the latest trends, best practices, and innovations shaping the future of AI.
                        </p>
                        <Link to="#newsletter" className="btn btn-primary px-8 py-4 text-lg">
                            Subscribe to Updates
                        </Link>
                    </div>
                </div>
            </section>

            {/* Featured Article */}
            <section className="py-20">
                <div className="container mx-auto px-6">
                    <div className="featured-article fade-in">
                        <div className="md:flex">
                            <div className="md:w-1/2">
                                <div className="featured-visual">
                                    <div className="featured-visual-content">
                                        <div className="featured-visual-icon">
                                            <BookOpen className="w-10 h-10" />
                                        </div>
                                        <div className="text-lg font-bold">Featured Article</div>
                                    </div>
                                </div>
                            </div>
                            <div className="md:w-1/2 featured-content">
                                <div className="featured-category">
                                    {featuredArticle.category}
                                </div>
                                <div className="featured-meta">
                                    <span className="flex items-center gap-2">
                                        <Calendar className="w-4 h-4" />
                                        {featuredArticle.date}
                                    </span>
                                    <span className="flex items-center gap-2">
                                        <Clock className="w-4 h-4" />
                                        {featuredArticle.readTime}
                                    </span>
                                </div>
                                <h2 className="featured-title">{featuredArticle.title}</h2>
                                <p className="featured-excerpt">{featuredArticle.excerpt}</p>
                                <div className="featured-tags">
                                    {featuredArticle.tags.map((tag, index) => (
                                        <span key={index} className="featured-tag">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                                <div className="featured-author">
                                    <div className="author-info">
                                        <div className="author-avatar">
                                            <User className="w-6 h-6" />
                                        </div>
                                        <div className="author-details">
                                            <h4>{featuredArticle.author}</h4>
                                            <p>Senior AI Researcher</p>
                                        </div>
                                    </div>
                                    <Link to="/contact" className="btn btn-primary">
                                        Read Article
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Categories Filter */}
            <section className="categories-section">
                <div className="container mx-auto px-6">
                    <div className="categories-filter">
                        {categories.map((category, index) => (
                            <button
                                key={index}
                                className={`category-button ${category.active ? 'active' : ''}`}
                            >
                                {category.name} ({category.count})
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* Articles Grid */}
            <section className="articles-section">
                <div className="container mx-auto px-6">
                    <div className="articles-grid">
                        {articles.map((article, index) => (
                            <div key={index} className={`article-card ${article.color} fade-in`} style={{ animationDelay: `${index * 0.1}s` }}>
                                <div className="article-visual">
                                    <div className="article-category-badge">
                                        {article.category}
                                    </div>
                                    <div className="article-visual-icon">
                                        <Lightbulb className="w-8 h-8" />
                                    </div>
                                </div>
                                <div className="article-content">
                                    <div className="article-meta">
                                        <span className="flex items-center gap-1">
                                            <Calendar className="w-3 h-3" />
                                            {article.date}
                                        </span>
                                        <span className="flex items-center gap-1">
                                            <Clock className="w-3 h-3" />
                                            {article.readTime}
                                        </span>
                                    </div>
                                    <h3 className="article-title">
                                        {article.title}
                                    </h3>
                                    <p className="article-excerpt">
                                        {article.excerpt}
                                    </p>
                                    <div className="article-tags">
                                        {article.tags.map((tag, idx) => (
                                            <span key={idx} className="article-tag">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                    <div className="article-footer">
                                        <div className="article-author">
                                            <div className="article-author-avatar">
                                                <User className="w-4 h-4" />
                                            </div>
                                            <span className="article-author-name">{article.author}</span>
                                        </div>
                                        <Link to="/contact" className="article-read-more">
                                            <ArrowRight className="w-5 h-5" />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="stats-section">
                <div className="container mx-auto px-6">
                    <div className="stats-hero">
                        <div className="stats-hero-content">
                            <div className="stats-badge">
                                RESEARCH IMPACT
                            </div>
                            <h2 className="stats-title">
                                Driving AI Innovation Through <span className="stats-title-highlight">Research Excellence</span>
                            </h2>
                            <p className="stats-description">
                                Contributing to the global AI knowledge base through comprehensive research, expert insights, 
                                and thought leadership that shapes the future of artificial intelligence across industries worldwide.
                            </p>
                        </div>
                    </div>
                    
                    <div className="stats-grid">
                        {[
                            { 
                                icon: <BookOpen className="w-10 h-10" />, 
                                metric: "150+", 
                                label: "Articles Published",
                                description: "In-depth research papers and industry insights",
                                color: "orange"
                            },
                            { 
                                icon: <TrendingUp className="w-10 h-10" />, 
                                metric: "50K+", 
                                label: "Monthly Readers",
                                description: "Global professionals staying informed",
                                color: "green"
                            },
                            { 
                                icon: <User className="w-10 h-10" />, 
                                metric: "25+", 
                                label: "Expert Contributors",
                                description: "Leading AI researchers and practitioners",
                                color: "blue"
                            },
                            { 
                                icon: <Tag className="w-10 h-10" />, 
                                metric: "12", 
                                label: "Research Areas",
                                description: "Specialized domains of AI expertise",
                                color: "purple"
                            }
                        ].map((item, index) => (
                            <div key={index} className={`stat-card ${item.color} slide-up`} style={{ animationDelay: `${index * 0.1}s` }}>
                                <div className="stat-visual">
                                    <div className="stat-icon">
                                        {item.icon}
                                    </div>
                                    <div className="stat-glow"></div>
                                </div>
                                <div className="stat-content">
                                    <div className="stat-metric">{item.metric}</div>
                                    <div className="stat-label">{item.label}</div>
                                    <div className="stat-description">{item.description}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                    
                    <div className="research-highlights">
                        <div className="research-highlight-card">
                            <div className="research-highlight-icon">
                                <Lightbulb className="w-8 h-8" />
                            </div>
                            <div className="research-highlight-content">
                                <h3>Latest Research</h3>
                                <p>Breakthrough findings in neural architecture optimization published in top-tier AI conferences</p>
                            </div>
                        </div>
                        <div className="research-highlight-card">
                            <div className="research-highlight-icon">
                                <TrendingUp className="w-8 h-8" />
                            </div>
                            <div className="research-highlight-content">
                                <h3>Industry Impact</h3>
                                <p>Our research has been cited 500+ times and implemented by Fortune 500 companies globally</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Newsletter Signup */}
            <section id="newsletter" className="newsletter-section">
                <div className="container mx-auto px-6">
                    <div className="newsletter-container">
                        <div className="newsletter-visual">
                            <div className="newsletter-visual-content">
                                <div className="newsletter-visual-icon">
                                    <Mail className="w-12 h-12" />
                                </div>
                                <div className="newsletter-visual-elements">
                                    <div className="newsletter-element"></div>
                                    <div className="newsletter-element"></div>
                                    <div className="newsletter-element"></div>
                                </div>
                            </div>
                        </div>
                        
                        <div className="newsletter-content">
                            <div className="newsletter-badge">
                                STAY UPDATED
                            </div>
                            <h2 className="newsletter-title">
                                Stay Informed with <span className="newsletter-title-highlight">AI Insights</span>
                            </h2>
                            <p className="newsletter-description">
                                Get the latest AI research, industry trends, and expert analysis delivered to your inbox. 
                                Join 10,000+ professionals staying ahead of the curve with cutting-edge insights and practical knowledge.
                            </p>
                            
                            <div className="newsletter-benefits">
                                <div className="newsletter-benefit">
                                    <div className="newsletter-benefit-icon">
                                        <CheckCircle className="w-5 h-5" />
                                    </div>
                                    <span>Weekly AI research summaries</span>
                                </div>
                                <div className="newsletter-benefit">
                                    <div className="newsletter-benefit-icon">
                                        <CheckCircle className="w-5 h-5" />
                                    </div>
                                    <span>Exclusive industry insights</span>
                                </div>
                                <div className="newsletter-benefit">
                                    <div className="newsletter-benefit-icon">
                                        <CheckCircle className="w-5 h-5" />
                                    </div>
                                    <span>Early access to new content</span>
                                </div>
                            </div>
                            
                            <div className="newsletter-form">
                                <div className="newsletter-input-group">
                                    <input 
                                        type="email" 
                                        placeholder="Enter your email address" 
                                        className="newsletter-input"
                                    />
                                    <button className="newsletter-button">
                                        <Mail className="w-5 h-5" />
                                        Subscribe Now
                                    </button>
                                </div>
                            </div>
                            
                            <div className="newsletter-social-proof">
                                <div className="newsletter-avatars">
                                    <div className="newsletter-avatar"></div>
                                    <div className="newsletter-avatar"></div>
                                    <div className="newsletter-avatar"></div>
                                    <div className="newsletter-avatar-count">+10K</div>
                                </div>
                                <p className="newsletter-disclaimer">
                                    Join 10,000+ AI professionals • No spam, unsubscribe anytime
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Insights;