import React, { useEffect, useRef, useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import './Industries.css';
import './IndustriesMobile.css';

const Industries = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        company: '',
        jobTitle: '',
        reason: 'Select a reason',
        consent: false
    });

    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!formData.consent) {
            alert('Please consent to receive communications.');
            return;
        }
        setIsSubmitting(true);

        try {
            const response = await fetch('/wp-json/neuzen/v1/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name: `${formData.firstName} ${formData.lastName}`,
                    email: formData.email,
                    phone: formData.phone,
                    company: formData.company,
                    // Embedding specialized fields into the main message block for easy reading in admin
                    message: `Job Title: ${formData.jobTitle}\nReason: ${formData.reason}`,
                    service: 'Industries Inquiry'
                }),
            });

            const data = await response.json();

            if (response.ok && (data.success || data.id)) {
                setIsSubmitted(true);
                setFormData({
                    firstName: '',
                    lastName: '',
                    email: '',
                    phone: '',
                    company: '',
                    jobTitle: '',
                    reason: 'Select a reason',
                    consent: false
                });
                setTimeout(() => setIsSubmitted(false), 5000);
            } else {
                console.error('Submission failed:', data);
                alert('Failed to send message.');
            }
        } catch (error) {
            console.error('Error:', error);
            alert('An error occurred.');
        } finally {
            setIsSubmitting(false);
        }
    };

    const industries = [
        {
            title: "E-Commerce And Retail",
            description: "Our AI solutions are designed for personalized shopping experiences, inventory management, and customer behavior analysis, enhancing customer experience and predicting consumer trends.",
            colorClass: "bg-orange",
            image: "/E-Commerce-Over-Traditional.jpg",
            link: "/industries/retail"
        },
        {
            title: "Energy & Utilities",
            description: "Our tech solutions for energy sector focus on efficient management, predictive maintenance, and optimization of renewable sources. We aim to optimize energy consumption and enable smart grid management.",
            colorClass: "bg-green",
            image: "/energy-utlities.png",
            link: "/industries/energy-utilities"
        },
        {
            title: "Financial Services",
            description: "Implementing AI solutions for risk analysis, fraud detection, customer service automation, and financial data management, we enhance fraud detection and automate risk management for a more secure financial environment.",
            colorClass: "bg-royal-blue",
            image: "/financial-services.png",
            link: "/industries/financial-services"
        },
        {
            title: "Healthcare and Insurance",
            description: "We provide AI-driven solutions for healthcare and insurance, enabling personalized patient care, faster medical research and drug discovery, efficient data management, smarter risk assessment, streamlined claims processing, and effective fraud detection—helping organizations improve outcomes and innovate faster.",
            colorClass: "bg-purple",
            image: "/helathcare-insurance.png",
            link: "/industries/healthcare-insurance"
        },
        {
            title: "Media and Entertainment",
            description: "Offering AI-driven solutions for content personalization, audience engagement, and digital media management, we create interactive experiences and analyze audience engagement.",
            colorClass: "bg-royal-blue",
            image: "/media-enterianment.png",
            link: "/industries/media-entertainment"
        },
        {
            title: "Transportation and Logistics",
            description: "We implement AI for route optimization, fleet management, and logistics automation, aiming to improve delivery efficiency and fleet management.",
            colorClass: "bg-orange",
            image: "/transporatation-logistics.png",
            link: "/industries/transportation-logistics"
        }
    ];

    const rowRefs = useRef([]);

    useEffect(() => {
        document.title = "Industries We Serve | neuzenai";
        const metaDescription = document.querySelector('meta[name="description"]');
        if (metaDescription) {
            metaDescription.setAttribute('content', 'NeuZenAI serves 6 major industries including E-commerce, Healthcare, Financial Services, and more. We provide tailored AI solutions to drive innovation and efficiency.');
        }

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('in-view');
                }
            });
        }, { threshold: 0.1 });

        rowRefs.current.forEach(row => {
            if (row) observer.observe(row);
        });

        return () => {
            rowRefs.current.forEach(row => {
                if (row) observer.unobserve(row);
            });
        };
    }, []);

    return (
        <div className="industries-page">
            {/* Hero Section */}
            <section className="industries-new-hero">
                <div className="hero-left-panel">
                    <div className="hero-title-wrapper">
                        <h1>
                            Let's innovate<br />
                            something<br />
                            <span className="serif-italic">New</span>
                        </h1>
                        <div className="orange-accent-line"></div>
                    </div>
                </div>

                {/* <div className="hero-center-image-container slide-up-animated delay-1">
                    <img src="/ABOUTUS_MAIN.png" alt="Industry Representative" className="hero-person-image" />
                </div> */}

                <div className="industries-hero-right-panel">
                    <div className="industries-tech-pattern-overlay"></div>
                    <div className="industries-hero-right-content">
                        <h2>Industries</h2>
                        <div className="hero-divider"></div>
                        <p>
                            Strengthen your digital capabilities to overcome new challenges and stay nimble, competitive and adaptable.
                        </p>
                        <Link to="/contact" className="hero-contact-link">
                            Contact Us <ArrowRight className="w-5 h-5" />
                        </Link>
                    </div>
                </div>
            </section>

            {/* Overview Section */}
            <section className="overview-section">
                <div className="overview-container">
                    <h2 className="overview-title">Overview</h2>
                    <div className="overview-text">
                        <p>
                            The pandemic has become a watershed moment in business technology, as it underlined the impact of operational efficiencies and digitization across industries and verticals. The new regime of accelerated digital transformation is causing organizations to increasingly embrace new digital business models to initiate flexibility, scalability and security in their existing ecosystem.
                        </p>
                        <p>
                            At NeuZenAI, we leverage our decades of experience and vast expertise across the entire range of technology and Client Managed Services to overcome unique industry challenges. We enable innovative and competitive consumer technology for Prisma, Banking & Insurance, Retail and Technology industries.
                        </p>
                    </div>
                </div>
            </section>

            {/* Industries Heading */}
            <section className="industries-serve-section">
                <div className="container mx-auto px-6">
                    <h2 className="industries-serve-title">Industries We Serve</h2>

                    <div className="industries-grid-new">
                        {industries.map((industry, index) => (
                            <div
                                key={index}
                                id={industry.title.toLowerCase().replace(/[^a-z0-3]+/g, '-')}
                                className="industry-item-new"
                                ref={el => rowRefs.current[index] = el}
                            >
                                <div className="industry-image-side">
                                    <Link to={industry.link} className="image-link">
                                        <img src={industry.image} alt={industry.title} className="industry-img-new" />
                                    </Link>
                                </div>
                                <div className="industry-content-side">
                                    <div className={`industry-card-new ${industry.colorClass}`}>
                                        <Link to={industry.link} className="content-link">
                                            <h3>{industry.title}</h3>
                                            <p>{industry.description}</p>
                                            <div className="explore-action-new">
                                                {/* <button className="explore-btn-new">
                                                    <span className="arrow-box">→</span>
                                                    <span>Explore</span>
                                                </button> */}
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section className="industry-contact-section">
                <div className="contact-layout">
                    <div className="contact-text">
                        <h2>Contact us to <span className="text-gradient-animate">streamline</span> and accelerate your <span className="text-gradient-animate">Industries</span> Solutions with our <span className="text-gradient-animate">cutting-edge capabilities</span></h2>
                        <div className="contact-image">
                            <img
                                src="/industries-form.jpg"
                                alt="Industry Worker"
                            />
                        </div>
                    </div>
                    <div className="contact-form">
                        {isSubmitted ? (
                            <div className="success-message text-center p-8 bg-black/50 rounded-lg text-white">
                                <h3 className="text-2xl font-bold text-[#ff4500] mb-2">Message Sent!</h3>
                                <p>Thank you for reaching out. We'll get back to you shortly.</p>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit}>
                                <div className="form-row">
                                    <div className="form-group">
                                        <label>First Name *</label>
                                        <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} required />
                                    </div>
                                    <div className="form-group">
                                        <label>Last Name *</label>
                                        <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} required />
                                    </div>
                                </div>

                                <div className="form-row">
                                    <div className="form-group">
                                        <label>Business Email ID *</label>
                                        <input type="email" name="email" value={formData.email} onChange={handleChange} required />
                                    </div>
                                    <div className="form-group">
                                        <label>Phone Number</label>
                                        <input type="tel" name="phone" value={formData.phone} onChange={handleChange} />
                                    </div>
                                </div>

                                <div className="form-row">
                                    <div className="form-group">
                                        <label>Company Name *</label>
                                        <input type="text" name="company" value={formData.company} onChange={handleChange} required />
                                    </div>
                                    <div className="form-group">
                                        <label>Job Title</label>
                                        <input type="text" name="jobTitle" value={formData.jobTitle} onChange={handleChange} />
                                    </div>
                                </div>

                                <div className="form-group" style={{ marginBottom: '1.5rem' }}>
                                    <label>Which of the following best represents your reason for contacting us?</label>
                                    <select name="reason" value={formData.reason} onChange={handleChange}>
                                        <option>Select a reason</option>
                                        <option>Business Inquiry</option>
                                        <option>Careers</option>
                                        <option>Partnership</option>
                                    </select>
                                </div>

                                <div className="gdpr-consent" style={{ fontSize: '0.8rem', color: '#666', marginBottom: '1.5rem' }}>
                                    <p style={{ marginBottom: '1rem' }}>
                                        By clicking on the box below, you allow NeuZenAI to use your contact information to send you technology and thought leadership content.
                                    </p>
                                    <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'start' }}>
                                        <input type="checkbox" id="consent" name="consent" checked={formData.consent} onChange={handleChange} style={{ marginTop: '0.2rem' }} />
                                        <label htmlFor="consent">I consent to receive communications from NeuZenAI.</label>
                                    </div>
                                </div>

                                <button type="submit" className="submit-btn" disabled={isSubmitting}>
                                    {isSubmitting ? 'Submitting...' : 'Submit'}
                                </button>
                            </form>
                        )}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Industries;