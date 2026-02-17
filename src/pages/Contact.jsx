import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle, ChevronRight, MessageSquare, Briefcase, ChevronLeft } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';
import './Contact.css';
import './ContactMobile.css';

const Contact = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        company: '',
        source: '',
        needs: ''
    });

    const [isSubmitted, setIsSubmitted] = useState(false);
    const [activeTestimonial, setActiveTestimonial] = useState(0);

    const detailedStories = [
        {
            id: "meteorcomm",
            company: "Meteorcomm",
            quote: "Partnering with NeuZenAI has fundamentally accelerated our product innovation cycle. Their deep expertise in AI integration and custom algorithm development has helped us deliver more robust, intelligent, and scalable communication solutions for our global infrastructure. The level of precision they brought to our predictive maintenance modules has reduced downtime by 45% and established a new benchmark for reliability in our industry.",
            author: "David Herber",
            role: "VP, Engineering And Product Development",
            category: "Communications Technology"
        },
        {
            id: "itconnectus",
            company: "ITConnectUS",
            quote: "NeuZenAI's AI-driven recruitment and resource management solutions have completely streamlined our talent acquisition pipeline. By automating the initial screening and matching process with high accuracy, they've ensured we find the right expertise for our enterprise clients faster than ever before. Their platform doesn't just process data; it understands the nuance of technical skills, leading to a significant increase in successful long-term placements and client satisfaction.",
            author: "Lakshmi kalluru",
            role: "SVP IT Solutions & Delivery",
            category: "IT Staffing & Consulting"
        },
        {
            id: "telecom-gateway",
            company: "Telecom Gateway",
            quote: "The intelligent automation and customer analytics platforms provided by NeuZenAI have allowed us to scale our services rapidly while maintaining exceptional quality of experience for our global clients. Their real-time network monitoring tools have identified efficiency gaps we didn't know existed, allowing us to optimize resource allocation and significantly reduce operational overhead. It's rare to find a partner that understands both the technology and the business impact so deeply.",
            author: "Devang Vamja",
            role: "Data Engineering",
            category: "Telecommunications"
        },
        {
            id: "csx",
            company: "CSX",
            quote: "NeuZenAI brought a level of technical depth and strategic foresight that transformed our operational efficiency from the ground up. Their custom-built AI solutions for logistics and data synchronization are not just innovative but also extremely reliable in high-stakes environments. We have seen a drastic improvement in cross-departmental communication and data-driven decision making, which has directly translated to better service levels and customer loyalty.",
            author: "Ramakanth Pasunuri",
            role: "Technical Director",
            category: "Transportation"
        }
    ];

    const nextTestimonial = () => {
        setActiveTestimonial((prev) => (prev + 1) % detailedStories.length);
    };

    const prevTestimonial = () => {
        setActiveTestimonial((prev) => (prev - 1 + detailedStories.length) % detailedStories.length);
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            // Mapping new fields to old structure to match existing backend if possible
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
                    message: `Source: ${formData.source}\nNeeds: ${formData.needs}`,
                    service: 'Contact Page'
                }),
            });

            const data = await response.json();

            if (response.ok && (data.success || data.id)) {
                setIsSubmitted(true);
                setTimeout(() => {
                    setIsSubmitted(false);
                    setFormData({
                        firstName: '',
                        lastName: '',
                        email: '',
                        phone: '',
                        company: '',
                        source: '',
                        needs: ''
                    });
                }, 5000);
            } else {
                alert('Failed to send message. Please try again.');
            }
        } catch (error) {
            console.error('Error submitting form:', error);
            alert('An error occurred. Not connected to server.');
        }
    };

    const offices = [
        {
            city: "Dallas, U.S.A",
            address: "702 S Denton Tap Rd, Suite # 110, Coppell, 75019, Texas, USA",
            email: "contact@neuzenai.com",
            phone: "+1 972 372 9983",
            mapLink: "#"
        },
        {
            city: "Hyderabad, India",
            address: "T Hub Phase 2, In orbit Mall Rd, Madhapur, Hyderabad, Telangana 500032, India",
            email: "contact@neuzenai.com",
            phone: "+91 88852 57422",
            mapLink: "#"
        }
    ];

    const brands = [
        { name: "CSX", logo: "/csx.png" },
        { name: "ITConnect", logo: "/itconnect.png" },
        { name: "Meteor", logo: "/metero.png" },
        { name: "Telecom", logo: "/telecom.png" }
    ];

    // Double the brands for infinite scroll effect
    const scrollingBrands = [...brands, ...brands, ...brands, ...brands];

    return (
        <div className="contact-page">
            {/* Header Section */}
            <section className="contact-header-section">
                <div className="container mx-auto px-4 text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="contact-main-title"
                    >
                        Take The Next Step
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="contact-sub-title"
                    >
                        Feel free to get in touch for any enquiry, support or general talk. Our team will get in touch with you with-in next 24 hours
                    </motion.p>
                </div>
            </section>

            {/* Main Form Section */}
            <section className="contact-main-section">
                <div className="container mx-auto px-4 max-w-6xl">
                    <div className="contact-card-wrapper">
                        <div className="contact-card-v2">
                            <div className="contact-card-left">
                                <div className="card-left-content">
                                    <h2 className="card-left-title">Speak With An Expert</h2>
                                    <p className="card-left-desc">
                                        Schedule a call with us to explore tailored data-driven solutions today!
                                    </p>
                                    <a
                                        href="mailto:contact@neuzenai.com?subject=Meeting%20Request%3A%20NeuZenAI%20Expert%20Consultation&body=Hi%20NeuZenAI%20Team%2C%0A%0AI%20would%20like%20to%20schedule%20a%20meeting%20to%20discuss%20how%20AI%20can%20help%20my%20business.%0A%0ABest%20regards%2C"
                                        className="schedule-btn"
                                    >
                                        Schedule a Meeting
                                    </a>
                                </div>
                                <div className="corner-circles">
                                    <div className="circle circle-1"></div>
                                    <div className="circle circle-2"></div>
                                </div>
                            </div>

                            <div className="contact-card-right">
                                {isSubmitted ? (
                                    <div className="submission-success">
                                        <CheckCircle className="w-16 h-16 text-green-500 mb-4" />
                                        <h3>Thank You!</h3>
                                        <p>We have received your message and will get back to you soon.</p>
                                    </div>
                                ) : (
                                    <form onSubmit={handleSubmit} className="contact-form-v2">
                                        <div className="form-row-compact">
                                            <div className="form-group-compact">
                                                <label>First Name *</label>
                                                <input
                                                    type="text"
                                                    name="firstName"
                                                    value={formData.firstName}
                                                    onChange={handleChange}
                                                    required
                                                />
                                            </div>
                                            <div className="form-group-compact">
                                                <label>Last Name *</label>
                                                <input
                                                    type="text"
                                                    name="lastName"
                                                    value={formData.lastName}
                                                    onChange={handleChange}
                                                    required
                                                />
                                            </div>
                                        </div>

                                        <div className="form-group-compact">
                                            <label>Business Email Address *</label>
                                            <input
                                                type="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                required
                                            />
                                        </div>

                                        <div className="form-group-compact">
                                            <label>Phone Number *</label>
                                            <input
                                                type="tel"
                                                name="phone"
                                                value={formData.phone}
                                                onChange={handleChange}
                                                required
                                            />
                                        </div>

                                        <div className="form-group-compact">
                                            <label>Company Name *</label>
                                            <input
                                                type="text"
                                                name="company"
                                                value={formData.company}
                                                onChange={handleChange}
                                                required
                                            />
                                        </div>

                                        <div className="form-group-compact">
                                            <label>How you got to know about us? *</label>
                                            <select
                                                name="source"
                                                value={formData.source}
                                                onChange={handleChange}
                                                required
                                            >
                                                <option value="">—Please choose an option—</option>
                                                <option value="LinkedIn">LinkedIn</option>
                                                <option value="Google">Google Search</option>
                                                <option value="Referral">Referral</option>
                                                <option value="Other">Other</option>
                                            </select>
                                        </div>

                                        <div className="form-group-compact">
                                            <label>Tell us about your needs *</label>
                                            <textarea
                                                name="needs"
                                                value={formData.needs}
                                                onChange={handleChange}
                                                rows="3"
                                                required
                                            ></textarea>
                                        </div>

                                        <div className="form-submit-row">
                                            <button type="submit" className="form-submit-btn">Submit</button>
                                        </div>
                                    </form>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Offices Section */}
            <section className="offices-section py-20">
                <div className="container mx-auto px-4 max-w-6xl">
                    <h2 id="offices-heading" className="section-title text-center mb-12">Our Offices</h2>
                    <div className="offices-grid">
                        {offices.map((office, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="office-card"
                            >
                                <h3 className="office-city">{office.city}</h3>
                                <p className="office-address">{office.address}</p>
                                {/* <a href={office.mapLink} className="map-link">View on map</a> */}
                                <div className="office-contact">
                                    <div className="contact-item">
                                        <Mail className="w-5 h-5" />
                                        <a href={`mailto:${office.email}`} className="email-link">{office.email}</a>
                                    </div>
                                    <div className="contact-item">
                                        <Phone className="w-5 h-5" />
                                        <span>{office.phone}</span>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Testimonials Section */}
            <section className="testimonials-section py-20 bg-gray-50/30">
                <div className="container mx-auto px-4 max-w-5xl">
                    <h2 id="testimonials-heading" className="section-title text-center mb-16">What Our Clients Say About Us..</h2>
                    <div className="testimonial-v2-container">
                        <div className="testimonial-quote-icon">
                            "
                        </div>
                        <div className="testimonial-content-box overflow-hidden">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={activeTestimonial}
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -20 }}
                                    transition={{ duration: 0.5 }}
                                >
                                    <p className="testimonial-text">
                                        {detailedStories[activeTestimonial].quote}
                                    </p>
                                    <div className="testimonial-author">
                                        <h4 className="author-name">{detailedStories[activeTestimonial].company}</h4>
                                        <p className="author-title">
                                            {detailedStories[activeTestimonial].author} — {detailedStories[activeTestimonial].role}
                                        </p>
                                    </div>
                                </motion.div>
                            </AnimatePresence>
                        </div>
                        <div className="testimonial-nav">
                            <button onClick={prevTestimonial} className="nav-btn prev"><ChevronLeft /></button>
                            <button onClick={nextTestimonial} className="nav-btn next"><ChevronRight /></button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Brands Section */}
            <section className="brands-section py-20 bg-[#fff5f0]">
                <div className="container mx-auto px-4 text-center">
                    <h2 id="brands-heading" className="section-title mb-12">Working With The Top Brands</h2>
                    <div className="brands-marquee">
                        <div className="marquee-content">
                            {scrollingBrands.map((brand, index) => (
                                <div key={index} className="brand-logo-item">
                                    <img src={brand.logo} alt={brand.name} className="brand-logo-img" />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;