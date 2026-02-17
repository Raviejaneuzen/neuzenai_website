import React, { useState, useEffect } from 'react';
import { CheckCircle, Check, Users, TrendingUp, Award, Globe, Heart, Zap, Coffee, ArrowRight, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import './Careers.css';
import './CareersMobile.css';
import { fetchWithFallback } from '../utils/api';

const JobCards = () => {
    const [jobs, setJobs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchJobs = async () => {
            try {
                const response = await fetchWithFallback('https://neuzenai.com/wp-json/wp/v2/awsm_job_openings?per_page=100');
                const data = await response.json();
                setJobs(data);
                setLoading(false);
            } catch (err) {
                console.error('Error fetching jobs:', err);
                setError('Failed to load job listings. Please check back later.');
                setLoading(false);
            }
        };

        fetchJobs();
    }, []);

    // Helper to extract text from HTML content (for preview)
    const stripHtml = (html) => {
        const tmp = document.createElement("DIV");
        tmp.innerHTML = html;
        return tmp.textContent || tmp.innerText || "";
    };

    if (loading) {
        return (
            <div className="text-center py-12">
                <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-[#ff4500]"></div>
                <p className="mt-4 text-gray-600">Loading open positions...</p>
            </div>
        );
    }

    if (error) {
        return (
            <div className="text-center py-12 text-red-500">
                {error}
            </div>
        );
    }

    if (jobs.length === 0) {
        return (
            <div className="text-center py-12 text-gray-600">
                <p>No open positions at the moment. Please check back later!</p>
            </div>
        );
    }

    return (
        <div className="job-cards-grid">
            {jobs.map((job) => (
                <div key={job.id} className="job-card">
                    <h3 className="job-card-title" dangerouslySetInnerHTML={{ __html: job.title.rendered }} />
                    <div className="job-card-details">
                        {/* 
                            Note: Since we can't easily access custom taxonomy terms from the standard REST API 
                            without additional calls or custom fields, we are showing generic tags or extracted data.
                            If your WP setup exposes 'job-type' or 'job-location', we can map them here.
                            For now, we'll try to check meta or just show 'View Details'.
                         */}
                        <span className="job-detail">Full-time</span> {/* Default/Placeholder */}
                        <span className="job-detail">Hyderabad</span> {/* Default/Placeholder */}
                    </div>
                    {/* We link to a dynamic detail page or the WP link directly if prefered. 
                        For now, linking to a generic detail page passing ID would be best practice, 
                         but let's use the slug to match your router pattern if possible.
                    */}
                    <Link to={`/careers/${job.slug}`} className="job-more-details">More Details →</Link>
                </div>
            ))}
        </div>
    );
};

const Careers = () => {
    return (
        <div className="careers-page">
            {/* Hero Section - Careers */}
            <section className="careers-hero-section">
                <div className="careers-hero-content">
                    <h1 className="careers-hero-title">
                        Careers
                    </h1>
                </div>
            </section>



            {/* Job Listings Section */}
            <section className="job-listings-section">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <div className="job-listings-badge">
                            <Sparkles className="w-4 h-4" />
                            Make an Impact
                        </div>
                        <h2 className="job-listings-title">
                            Launch Your Career in the World of Corporate Consulting
                        </h2>
                    </div>

                    {/* Search and Filters */}
                    <div className="job-search-container">
                        <div className="search-bar">
                            <input
                                type="text"
                                placeholder="Search"
                                className="search-input"
                            />
                        </div>
                        <div className="filter-dropdowns">
                            <select className="filter-dropdown">
                                <option>All Job Category</option>
                                <option>Engineering</option>
                                <option>Sales</option>
                                <option>Product</option>
                            </select>
                            <select className="filter-dropdown">
                                <option>All Job Type</option>
                                <option>Full-time</option>
                                <option>Part-time</option>
                                <option>Internship</option>
                                <option>Contract</option>
                            </select>
                            <select className="filter-dropdown">
                                <option>All Job Location</option>
                                <option>Hyderabad</option>
                                <option>Bangalore</option>
                                <option>Dallas, USA</option>
                            </select>
                        </div>
                    </div>

                    {/* Job Cards Grid */}
                    <JobCards />
                </div>
            </section>

            {/* Section 2: NeuZenAI Benefits */}
            <section className="careers-benefits-new-section py-20 bg-white">
                <div className="container mx-auto px-6">
                    <div className="flex flex-col md:flex-row items-center gap-12">
                        <div className="md:w-1/2 flex justify-center">
                            <div className="rounded-2xl overflow-hidden shadow-xl max-w-xs">
                                <img
                                    src="/teamcollaboration.jpg"
                                    alt="Community Team"
                                    className="w-full h-[200px] object-cover"
                                />
                            </div>
                        </div>
                        <div className="md:w-1/2">
                            <div className="section-label-orange text-lg">NeuZenAI Benefits</div>
                            <h2 className="text-4xl font-extrabold mb-8 text-black leading-tight join-community-title">
                                Join Our Community to Receive Amazing Career Benefits
                            </h2>
                            <ul className="space-y-4">
                                {[
                                    "Professional Growth and Development",
                                    "Diverse Client Engagements",
                                    "Impactful Work",
                                    "Collaborative and Stimulating Environment",
                                    "Networking Opportunities",
                                    "Exposure to Senior Leadership"
                                ].map((benefit, idx) => (
                                    <li key={idx} className="flex items-center gap-4 text-lg font-medium text-gray-800">
                                        <ArrowRight className="w-5 h-5 text-black shrink-0" />
                                        <span>{benefit}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 1: Join Our Elite Corporate Consulting Firm */}
            <section className="careers-elite-section py-20 bg-white">
                <div className="container mx-auto px-6">
                    <div className="flex flex-col md:flex-row items-center gap-12">
                        <div className="md:w-1/2">
                            <div className="section-label-orange text-lg">Unlock Your Potential</div>
                            <h2 className="text-4xl font-extrabold mb-8 text-black leading-tight elite-firm-title">
                                Join Our Elite Corporate Consulting Firm
                            </h2>
                            <div className="space-y-6">
                                <div className="flex items-center gap-6">
                                    <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center text-black shrink-0 shadow-sm border border-gray-200">
                                        <Check className="w-6 h-6" strokeWidth={3} />
                                    </div>
                                    <span className="text-xl font-bold text-black">90.00% Success</span>
                                </div>
                                <div className="flex items-center gap-6">
                                    <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center text-black shrink-0 shadow-sm border border-gray-200">
                                        <Check className="w-6 h-6" strokeWidth={3} />
                                    </div>
                                    <span className="text-xl font-bold text-black">Solution Focused</span>
                                </div>
                            </div>
                        </div>
                        <div className="md:w-1/2 flex justify-center">
                            <div className="rounded-2xl overflow-hidden shadow-xl max-w-xs">
                                <img
                                    src="/office discussion.jpg"
                                    alt="Elite Consulting Team"
                                    className="w-full h-[200px] object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Choose Us Section */}
            {/* <section className="why-choose-section">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="section-title">Why Choose NeuzenAI?</h2>
                        <p className="section-description">
                            We're not just building AI solutions – we're shaping the future of technology and creating meaningful careers.
                        </p>
                    </div>

                    <div className="why-choose-grid">
                        <div className="why-choose-card">
                            <div className="card-icon">
                                <TrendingUp className="w-8 h-8" />
                            </div>
                            <h3 className="card-title">Rapid Growth</h3>
                            <p className="card-description">
                                Join a fast-growing company with unlimited opportunities for career advancement and skill development.
                            </p>
                        </div>

                        <div className="why-choose-card">
                            <div className="card-icon">
                                <Award className="w-8 h-8" />
                            </div>
                            <h3 className="card-title">Industry Recognition</h3>
                            <p className="card-description">
                                Work with award-winning AI solutions and be part of projects that are recognized globally.
                            </p>
                        </div>

                        <div className="why-choose-card">
                            <div className="card-icon">
                                <Globe className="w-8 h-8" />
                            </div>
                            <h3 className="card-title">Global Impact</h3>
                            <p className="card-description">
                                Make a difference on a global scale with AI solutions that transform industries worldwide.
                            </p>
                        </div>

                        <div className="why-choose-card">
                            <div className="card-icon">
                                <Heart className="w-8 h-8" />
                            </div>
                            <h3 className="card-title">Work-Life Balance</h3>
                            <p className="card-description">
                                Enjoy flexible working arrangements and comprehensive benefits that support your well-being.
                            </p>
                        </div>

                        <div className="why-choose-card">
                            <div className="card-icon">
                                <Zap className="w-8 h-8" />
                            </div>
                            <h3 className="card-title">Innovation Culture</h3>
                            <p className="card-description">
                                Be part of a culture that encourages innovation, creativity, and pushing the boundaries of AI.
                            </p>
                        </div>

                        <div className="why-choose-card">
                            <div className="card-icon">
                                <Users className="w-8 h-8" />
                            </div>
                            <h3 className="card-title">Diverse Team</h3>
                            <p className="card-description">
                                Work alongside talented professionals from diverse backgrounds and learn from the best minds in AI.
                            </p>
                        </div>
                    </div>
                </div>
            </section> */}

            {/* Perks Section */}
            {/* <section className="perks-section">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="section-title">Amazing Perks & Benefits</h2>
                        <p className="section-description">
                            We believe in taking care of our team with comprehensive benefits and exciting perks.
                        </p>
                    </div>

                    <div className="perks-grid">
                        <div className="perk-item">
                            <Coffee className="perk-icon" />
                            <h4 className="perk-title">Free Meals & Snacks</h4>
                            <p className="perk-description">Complimentary breakfast, lunch, and unlimited snacks</p>
                        </div>

                        <div className="perk-item">
                            <Heart className="perk-icon" />
                            <h4 className="perk-title">Health & Wellness</h4>
                            <p className="perk-description">Comprehensive health insurance and wellness programs</p>
                        </div>

                        <div className="perk-item">
                            <Zap className="perk-icon" />
                            <h4 className="perk-title">Learning Budget</h4>
                            <p className="perk-description">Annual budget for courses, conferences, and certifications</p>
                        </div>

                        <div className="perk-item">
                            <Globe className="perk-icon" />
                            <h4 className="perk-title">Remote Work</h4>
                            <p className="perk-description">Flexible remote work options and modern office spaces</p>
                        </div>
                    </div>
                </div>
            </section> */}

            {/* Final CTA Section - Collaborate and Flourish */}
            <section className="careers-final-cta">
                <div className="cta-overlay-gradient"></div>
                <div className="container mx-auto px-6 relative z-10">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                        <h2 className="cta-heading-large text-[#ffffff]">
                            Lets Collaborate and Flourish<br className="hidden md:block" /> Unitedly
                        </h2>
                        <Link to="/contact" className="cta-contact-btn">
                            Contact Us
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Careers;