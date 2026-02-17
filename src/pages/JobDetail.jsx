import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import {
    Facebook,
    Twitter,
    Linkedin,
    Send,
    MessageCircle,
    MapPin,
    Briefcase,
    Clock,
    ArrowRight,
    ArrowLeft
} from 'lucide-react';
import { jobsData } from '../data/jobsData';
import './JobDetail.css';

import { fetchWithFallback } from '../utils/api';

const JobDetail = () => {
    const { id } = useParams();
    const staticJob = jobsData[id];

    // State for dynamic job data
    const [dynamicJob, setDynamicJob] = useState(null);
    const [loading, setLoading] = useState(!staticJob); // Loading if not found in static
    const [fetchError, setFetchError] = useState(null);

    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phone: '',
        currentCTC: '',
        expectedCTC: '',
        linkedinUrl: '',
        coverLetter: '',
    });
    const [resume, setResume] = useState(null);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);

    useEffect(() => {
        window.scrollTo(0, 0);

        // If not in static data, fetch from API
        if (!staticJob) {
            const fetchJob = async () => {
                try {
                    // Direct hardcoded URL to skip proxy/env confusion
                    const response = await fetchWithFallback(`https://neuzenai.com/wp-json/wp/v2/awsm_job_openings?slug=${id}`);
                    if (!response.ok) throw new Error('Failed to fetch job');

                    const data = await response.json();
                    if (data.length > 0) {
                        setDynamicJob(data[0]);
                    } else {
                        setFetchError('Job not found');
                    }
                } catch (err) {
                    console.error('Error fetching job details:', err);
                    setFetchError('Failed to load job details');
                } finally {
                    setLoading(false);
                }
            };
            fetchJob();
        }
    }, [id, staticJob]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleFileChange = (e) => {
        setResume(e.target.files[0]);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        const data = new FormData();
        Object.keys(formData).forEach(key => {
            data.append(key, formData[key]);
        });

        // Use static or dynamic title
        const jobTitle = staticJob?.title || dynamicJob?.title?.rendered || 'Unknown Job';
        data.append('jobTitle', jobTitle);

        if (resume) {
            data.append('resume', resume);
        }

        try {
            // Direct call to the new WordPress Snippet Endpoint
            const response = await fetch('/wp-json/neuzen/v1/apply', {
                method: 'POST',
                body: data,
            });

            const result = await response.json();

            if (response.ok && (result.success || result.id)) {
                setIsSubmitted(true);
            } else {
                console.error('Submission failed:', result);
                alert('Failed to submit application. Please try again or contact us directly.');
            }
        } catch (error) {
            console.error('Error submitting application:', error);
            alert('An error occurred. Please check your internet connection and try again.');
        } finally {
            setIsSubmitting(false);
        }
    };

    // Determine which job object to use
    const job = staticJob || dynamicJob;

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-[#ff4500] text-xl font-bold">Loading job details...</div>
            </div>
        );
    }

    if (!job || fetchError) {
        return (
            <div className="job-not-found">
                <h2>Job Not Found</h2>
                <Link to="/careers" className="back-btn">Back to Careers</Link>
            </div>
        );
    }

    // Dynamic content processing helper
    const isDynamic = !!dynamicJob;
    const title = isDynamic ? job.title.rendered : job.title;

    return (
        <div className="job-detail-page">
            {/* Hero Section */}
            <section className="job-detail-hero">
                <div className="job-hero-overlay"></div>
                <div className="container mx-auto px-6 relative z-10 h-full flex items-center justify-center">
                    <h1 className="job-hero-title" dangerouslySetInnerHTML={{ __html: title }} />
                </div>
            </section>

            {/* Content Section */}
            <section className="job-detail-content py-16 bg-white">
                <div className="container mx-auto px-6">
                    <div className="mb-8">
                        <Link to="/careers" className="job-back-link inline-flex items-center gap-2 text-[#ff4500] font-bold hover:gap-3 transition-all">
                            <ArrowLeft size={20} />
                            Back to Careers
                        </Link>
                    </div>
                    <div className="job-main-container">

                        {/* Left Column: Job Description */}
                        <div className="job-description-column">
                            <div className="job-description-content">
                                {/* DYNAMIC CONTENT RENDER */}
                                {isDynamic ? (
                                    <div className="job-dynamic-content text-gray-800 leading-relaxed space-y-4"
                                        dangerouslySetInnerHTML={{ __html: job.content.rendered }}
                                    />
                                ) : (
                                    /* STATIC CONTENT RENDER */
                                    <>
                                        {job.about && (
                                            <div className="job-info-block mb-8">
                                                <h3 className="job-content-title">About the company:</h3>
                                                <p className="job-content-text">{job.about}</p>
                                            </div>
                                        )}

                                        {job.overview && (
                                            <div className="job-info-block mb-8">
                                                <h3 className="job-content-title">Overview:</h3>
                                                <p className="job-content-text">{job.overview}</p>
                                            </div>
                                        )}

                                        {job.education && (
                                            <div className="job-info-block mb-8">
                                                <h3 className="job-content-title">Education:</h3>
                                                <div className="job-content-text">
                                                    {job.education.map((item, index) => (
                                                        <p key={index} className="mb-2">– {item}</p>
                                                    ))}
                                                </div>
                                            </div>
                                        )}

                                        {job.responsibilities && (
                                            <div className="job-info-block mb-8">
                                                <h3 className="job-content-title">Key Responsibilities:</h3>
                                                <div className="job-content-text">
                                                    {job.responsibilities.map((item, index) => (
                                                        <p key={index} className="mb-2">{item}</p>
                                                    ))}
                                                </div>
                                            </div>
                                        )}

                                        {job.experienceList && (
                                            <div className="job-info-block mb-8">
                                                <h3 className="job-content-title">Experience:</h3>
                                                <div className="job-content-text">
                                                    {job.experienceList.map((item, index) => (
                                                        <p key={index} className="mb-2">– {item}</p>
                                                    ))}
                                                </div>
                                            </div>
                                        )}

                                        {job.skills && (
                                            <div className="job-info-block mb-8">
                                                <h3 className="job-content-title">Skills:</h3>
                                                <div className="job-content-text">
                                                    {job.skills.map((item, index) => (
                                                        <p key={index} className="mb-2">– {item}</p>
                                                    ))}
                                                </div>
                                            </div>
                                        )}

                                        {job.experienceSkills && (
                                            <div className="job-info-block mb-8">
                                                <h3 className="job-content-title">Experience & Skills:</h3>
                                                <div className="job-content-text">
                                                    {job.experienceSkills.map((item, index) => (
                                                        <p key={index} className="mb-2">– {item}</p>
                                                    ))}
                                                </div>
                                            </div>
                                        )}
                                    </>
                                )}

                                <div className="job-meta-section mt-12 pt-8">
                                    <div className="meta-row">
                                        <span className="meta-label">Job Category:</span>
                                        <span className="meta-value">{isDynamic ? 'Full-time' : job.category}</span>
                                    </div>
                                    <div className="meta-row">
                                        <span className="meta-label">Job Type:</span>
                                        <span className="meta-value">{isDynamic ? 'Full Time' : job.type}</span>
                                    </div>
                                    <div className="meta-row">
                                        <span className="meta-label">Job Location:</span>
                                        <span className="meta-value">{isDynamic ? 'Hyderabad' : job.location}</span>
                                    </div>
                                    {job.salary && (
                                        <div className="meta-row">
                                            <span className="meta-label">Salary:</span>
                                            <span className="meta-value">{job.salary}</span>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>

                        {/* Right Column: Application Form */}
                        <div className="job-apply-column">
                            {!job.isExpired ? (
                                <div className="apply-form-container">
                                    <h3 className="apply-form-title">Apply for this position</h3>
                                    {isSubmitted ? (
                                        <div className="success-message text-center p-8">
                                            <div className="text-green-500 text-5xl mb-4">✓</div>
                                            <h4 className="text-2xl font-bold mb-2">Application Sent!</h4>
                                            <p className="text-gray-600">Thank you for applying. We have received your application in our system.</p>
                                        </div>
                                    ) : (
                                        <form className="job-apply-form" onSubmit={handleSubmit}>
                                            <div className="form-field">
                                                <label>Full Name *</label>
                                                <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} required />
                                            </div>
                                            <div className="form-field">
                                                <label>Email *</label>
                                                <input type="email" name="email" value={formData.email} onChange={handleChange} required />
                                            </div>
                                            <div className="form-field">
                                                <label>Phone *</label>
                                                <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required />
                                            </div>
                                            {job.category === "Fulltime" && (
                                                <>
                                                    <div className="form-field">
                                                        <label>Current CTC *</label>
                                                        <input type="text" name="currentCTC" value={formData.currentCTC} onChange={handleChange} placeholder="e.g. 5 LPA" required />
                                                    </div>
                                                    <div className="form-field">
                                                        <label>Expected CTC *</label>
                                                        <input type="text" name="expectedCTC" value={formData.expectedCTC} onChange={handleChange} placeholder="e.g. 8 LPA" required />
                                                    </div>
                                                </>
                                            )}
                                            <div className="form-field">
                                                <label>Linkedin URL *</label>
                                                <input type="url" name="linkedinUrl" value={formData.linkedinUrl} onChange={handleChange} required />
                                            </div>
                                            <div className="form-field">
                                                <label>Cover Letter</label>
                                                <textarea name="coverLetter" value={formData.coverLetter} onChange={handleChange} rows="6"></textarea>
                                            </div>
                                            <div className="form-field">
                                                <label>Upload CV/Resume *</label>
                                                <div className="custom-file-input">
                                                    <input type="file" id="resume" className="hidden" accept=".pdf,.doc,.docx" onChange={handleFileChange} required />
                                                    <div className="file-controls">
                                                        <label htmlFor="resume" className="choose-btn">Choose File</label>
                                                        <span className="file-name">{resume ? resume.name : 'No file chosen'}</span>
                                                    </div>
                                                    <span className="file-types">Allowed Type(s): .pdf, .doc, .docx</span>
                                                </div>
                                            </div>
                                            <div className="form-privacy">
                                                <input type="checkbox" id="privacy-consent" required />
                                                <label htmlFor="privacy-consent">
                                                    By using this form you agree with the storage and handling of your data by this website. *
                                                </label>
                                            </div>
                                            <button type="submit" className="job-submit-btn" disabled={isSubmitting}>
                                                {isSubmitting ? 'Submitting...' : 'Submit'}
                                            </button>
                                        </form>
                                    )}
                                </div>
                            ) : (
                                <div className="apply-form-container expired-card">
                                    <h3 className="apply-form-title text-gray-400">Applications Closed</h3>
                                    <p className="text-gray-500 mb-6">This position is no longer active. We invite you to explore our other career opportunities.</p>
                                    <Link to="/careers" className="job-submit-btn inline-block text-center no-underline">View All Jobs</Link>
                                </div>
                            )}
                        </div>

                    </div>
                </div>
            </section>
        </div>
    );
};

export default JobDetail;
