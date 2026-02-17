import { Brain, TrendingUp, Lightbulb, Settings, ArrowRight, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import './Capabilities.css';

const Capabilities = () => {
    React.useEffect(() => {
        document.title = "Capabilities | AI Solutions & Services|capabilities | neuzenai";
        const metaDescription = document.querySelector('meta[name="description"]');
        if (metaDescription) {
            metaDescription.setAttribute('content', 'Explore our core capabilities: Advanced Analytics, AI Strategic Consulting, Custom AI Solutions, and Intelligent Automation. Empower your organization with data-driven insights.');
        }
    }, []);

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: ''
    });

    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
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
                    message: formData.message,
                    company: 'N/A', // Services form doesn't have company field
                    service: 'General Services Inquiry'
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
                    message: ''
                });
                setTimeout(() => setIsSubmitted(false), 5000);
            } else {
                console.error('Submission failed:', data);
                alert('Failed to send message.');
            }
        } catch (error) {
            console.error('Error:', error);
            alert('An error occurred. Check connection.');
        } finally {
            setIsSubmitting(false);
        }
    };

    const services = [
        {
            icon: <TrendingUp className="w-10 h-10" />,
            title: "Advanced Analytics",
            description: "Harness the power of advanced analytics by utilizing machine learning, deep learning, and statistical modeling to extract actionable insights, predict trends, and optimize decision-making. Our approach uncovers hidden patterns in complex data sets, facilitating data-driven strategies that propel businesses forward.",
            features: [
                "Predictive Modeling & Forecasting",
                "Real-time Data Visualization",
                "Statistical Analysis & Mining",
                "Behavioral Data Analytics"
            ],
            color: "orange",
            image: "/advanced-Analytics.jpg",
            link: "/services/advanced-analytics"
        },
        {
            icon: <Lightbulb className="w-10 h-10" />,
            title: "AI Strategic Consulting",
            description: "Our AI strategic consulting helps organizations identify high-impact AI opportunities, define clear AI roadmaps, and align technology with business goals. We guide teams in AI adoption, governance, and scalability, enabling informed decision-making, risk reduction, and sustainable innovation.",
            features: [
                "AI Readiness Assessment",
                "ROI-Driven Strategy Design",
                "Ethical AI Governance",
                "Digital Transformation Roadmap"
            ],
            color: "green",
            image: "/ai-stragetic-consulting.webp",
            link: "/services/ai-strategy"
        },
        {
            icon: <Brain className="w-10 h-10" />,
            title: "Custom AI Solution",
            description: "Our custom AI solutions are tailored to specific business needs, combining machine learning, natural language processing, and computer vision to build scalable, secure, and high-performance systems. We design, develop, and deploy end-to-end AI solutions that automate processes, enhance intelligence, and deliver measurable business impact.",
            features: [
                "Generative AI Integration",
                "Deep Learning Architectures",
                "Computer Vision Systems",
                "Natural Language Processing"
            ],
            color: "blue",
            image: "/custom-ai-solution.png",
            link: "/services/custom-ai"
        },
        {
            icon: <Settings className="w-10 h-10" />,
            title: "Intelligent Automation",
            description: "We specialize in streamlining workflows with robotic process automation (RPA), intelligent document processing, and other automation tools. Our solutions boost productivity, reduce errors, and free up workforce for strategic initiatives.",
            features: [
                "Cognitive Process Automation",
                "Smart Workflow Optimization",
                "Hyper-automation Solutions",
                "AI-Driven Decision Logic"
            ],
            color: "purple",
            image: "/Intelligent-Automation.png",
            link: "/services/process-automation"
        }
    ];

    return (
        <div className="services-page">
            {/* ------------------- HERO SECTION ------------------- */}
            <section className="capabilities-hero-split">
                <div className="capabilities-hero-left">
                    <div className="capabilities-hero-content-left slide-up-animated">
                        <h1 className="capabilities-hero-love-text">
                            Empowering <br></br>Intelligence<br />
                            AI<span className="orange-bar"></span>
                        </h1>
                    </div>
                </div>
                <div className="capabilities-hero-right">
                    <div className="capabilities-hero-content-right slide-up-animated delay-2">
                        <h2 className="capabilities-hero-title-right">Capabilities</h2>
                        <p className="capabilities-hero-subtitle-right">
                            Our technology consulting empowers organizations to drive successful digital transformation through a strong blend of strategy and innovation.
                        </p>
                    </div>
                </div>
                {/* <div className="capabilities-hero-person-wrapper slide-up-animated delay-1">
                    <img src="/capabilities-main.png" alt="Capabilities" className="capabilities-hero-person-img" />
                </div> */}
            </section>



            {/* Services Grid */}
            <section className="pt-12 pb-12 capabilities-section mb-12">
                <div className="container mx-auto max-w-[1400px] px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-5xl md:text-6xl font-extrabold mb-8">Overview</h2>
                        <p className="max-w-[1300px] mx-auto text-xl leading-relaxed">
                            Our technology consulting empowers organizations to drive successful digital transformation through a strong blend of strategy and innovation.
                            We specialize in advanced analytics, AI strategic consulting, custom AI solutions, and intelligent automation to help businesses unlock data-driven insights,
                            streamline operations, and make smarter decisions. By working seamlessly across people, processes, and business functions, we ensure that every AI initiative
                            is not only implemented effectively but also adopted and scaled for long-term impact.
                        </p>

                    </div>

                    <div className="srv-capabilities-grid">
                        {services.map((service, index) => (
                            <div key={index} id={service.title.toLowerCase().replace(/\s+/g, '-')} className={`srv-capability-box ${service.color} fade-in`} style={{ animationDelay: `${index * 0.1}s` }}>
                                <div className="srv-capability-image-container">
                                    <img
                                        src={service.image}
                                        alt={service.title}
                                        className="srv-capability-image"
                                    />
                                </div>

                                <div className="srv-capability-content">

                                    <h3 className="srv-capability-title">{service.title}</h3>
                                    <p className="srv-capability-description">{service.description}</p>




                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Process Section */}
            {/* <section className="process-section py-24">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold mb-4 text-black">Our Proven Process</h2>
                        <p className="text-gray-600 max-w-3xl mx-auto text-lg">
                            We follow a comprehensive methodology to ensure successful AI implementation, 
                            maximum ROI, and sustainable long-term results for your organization.
                        </p>
                    </div>
                    
                    <div className="process-grid">
                        {[
                            { 
                                step: "01", 
                                title: "Discovery & Assessment", 
                                desc: "Deep dive into your business needs, current infrastructure, and identify AI opportunities with comprehensive analysis." 
                            },
                            { 
                                step: "02", 
                                title: "Strategy & Planning", 
                                desc: "Develop a detailed AI roadmap with clear milestones, resource allocation, and success metrics tailored to your goals." 
                            },
                            { 
                                step: "03", 
                                title: "Development & Implementation", 
                                desc: "Build, test, and deploy AI solutions using best practices, ensuring seamless integration with your existing systems." 
                            },
                            { 
                                step: "04", 
                                title: "Optimization & Support", 
                                desc: "Continuous monitoring, performance optimization, and ongoing support to maximize value and adapt to changing needs." 
                            }
                        ].map((item, index) => (
                            <div key={index} className="process-step slide-up" style={{ animationDelay: `${index * 0.2}s` }}>
                                <div className="process-number">
                                    {item.step}
                                </div>
                                <h3 className="process-title">{item.title}</h3>
                                <p className="process-description">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section> */}

            {/* Get in Touch Section */}
            <section className="careers-final-cta">
                <div className="cta-overlay-gradient"></div>
                <div className="container mx-auto px-6 relative z-10">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                        <h2 className="cta-heading-large text-[#ffffff]">
                            Know More About Our  <br className="hidden md:block" />Capabilities
                        </h2>
                        <Link to="/contact" className="cta-contact-btn">
                            Contact Us
                        </Link>
                    </div>
                </div>
            </section>



            {/* CTA Section */}
            {/* <section className="cta-section py-24">
                <div className="container mx-auto px-6 text-center">
                    <div className="cta-content">
                        <h2 className="text-4xl font-bold text-white mb-6">
                            Ready to Transform Your Business with AI?
                        </h2>
                        <p className="text-xl text-orange-100 mb-8 max-w-3xl mx-auto leading-relaxed">
                            Let's discuss how our comprehensive AI solutions can drive innovation, improve efficiency, 
                            and accelerate growth for your organization. Schedule a consultation today.
                        </p>
                        <div className="flex flex-col md:flex-row gap-4 justify-center">
                            <Link to="/contact" className="btn bg-white text-orange-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold">
                                Schedule a Consultation
                            </Link>
                            <Link to="/case-studies" className="btn border-2 border-white text-white hover:bg-white hover:text-orange-600 px-8 py-4 text-lg font-semibold">
                                View Success Stories
                            </Link>
                        </div>
                    </div>
                </div>
            </section> */}
        </div>
    );
};

export default Capabilities;
