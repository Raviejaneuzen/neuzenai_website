import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { BarChart, Eye, Brain, ArrowRight, CheckCircle2, Shield, Zap, Globe } from 'lucide-react';
import { motion } from 'framer-motion';
import './Products.css';
import './ProductsMobile.css';

const Products = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
        document.title = "AI Products & Platforms | neuzenai";
        const metaDescription = document.querySelector('meta[name="description"]');
        if (metaDescription) {
            metaDescription.setAttribute('content', 'Discover NeuZenAI’s proprietary AI products: FluxAI, LensAI, NvisionAI, and SwassAI. Innovative solutions for enterprise intelligence, recruitment, defect inspection, and healthcare.');
        }
    }, []);

    const productsData = [
        {
            id: 1,
            name: "FluxAI",
            tagline: "",
            description: "Flux AI is an enterprise-grade Marketing Mix Modeling (MMM) and Budget Optimization platform. Our system analyzes your raw data to reveal which channels are truly driving revenue and why. Unlike black box solutions, we provide actionable insights and then generate a precise, optimized budget allocation based on your goals. Know your ROI, prove your impact, and invest every dollar with confidence.",
            icon: <Zap className="w-8 h-8 text-white" />,
            image: "/fluxai.png",
            features: ["Real-time KPI Monitoring", "Marketing Mix Modeling", "GenAI Document Analysis", "Performance Forecasting"],
            link: "https://fluxai.neuzenai.com/login",
            isExternal: true
        },
        {
            id: 2,
            name: "LensAI",
            tagline: "Hire Smarter, Not Harder with LensAI",
            description: "LensAI is the intelligent hiring partner that transforms your recruitment process. Simply connect your talent sources, upload a job description, and our AI gets to work. Instantly receive a ranked list of qualified candidates with full transparency on every match and engage top candidates with one-click outreach. From sourcing to scheduling, LensAI streamlines your entire hiring workflow.",
            icon: <Eye className="w-8 h-8 text-white" />,
            image: "/lensai.png",
            features: ["Connect Instantly", "Filter Smartly", "Insights At A Glance", "One-Click OutReach"],
            link: "https://lens.neuzenai.com/",
            isExternal: true
        },
        {
            id: 3,
            name: "NvisionAI",
            tagline: "Computer Vision–Based Automated Product Defect Inspection",
            description: "Revolutionize your automotive workflow with Nvision AI, the platform for instant damage and cost analysis. Built for the insurance and manufacturing industries, our AI assesses vehicle images to deliver precise defect reports. Instantly generate accurate repair cost estimates, streamlining insurance claims and optimizing quality control. Empower your team with fast, objective data to reduce errors and make smarter business decisions.",
            icon: <Brain className="w-8 h-8 text-white" />,
            image: "/nvisionAI.png",
            features: ["Computer Vision Analysis", "Defects Identification", "Damage Assessment", "Cost Estimation"],
            link: "https://nvision.neuzenai.com/",
            isExternal: true
        },
        {
            id: 4,
            name: "SwassAI",
            tagline: "AI-Powered Healthcare That Saves Lives",
            description: "SwassAI is intelligent platform built to support healthcare professionals. Securely upload medical images for Tuberculosis or Breast Cancer screening and let our AI provide rapid, precise analysis. In moments, you'll receive a comprehensive report highlighting potential abnormalities with suggested precautionary steps. Review the findings, add your own expert notes, and streamline your workflow to deliver faster, data-driven patient care.",
            icon: <BarChart className="w-8 h-8 text-white" />,
            image: "/swassai.png",
            features: ["Clinically Validated Insights", "Medical Image Analysis", "Medical-Grade Accuracy", "Automated Diagnostic Reporting"],
            link: "https://swass.neuzenai.com/",
            isExternal: true
        }
    ];

    return (
        <div className="products-page w-full bg-white overflow-x-hidden">

            {/* ------------------- HERO SECTION ------------------- */}
            <section className="products-hero-split">
                <div className="products-hero-left">
                    <div className="products-hero-content-left slide-up-animated">
                        <h1 className="products-hero-love-text">
                            Next-Gen <br></br>AI Products<br />
                            <span className="orange-bar"></span>
                        </h1>
                    </div>
                </div>
                <div className="products-hero-right">
                    <div className="products-hero-content-right slide-up-animated delay-2">
                        <h2 className="products-hero-title-right">Products</h2>
                        <p className="products-hero-subtitle-right">
                            At NeuZenAI, we develop products that redefine what's possible with cutting-edge intelligence.
                        </p>
                    </div>
                </div>
                {/* <div className="products-hero-person-wrapper slide-up-animated delay-1">
                    <img src="/product-main.png" alt="AI Products" className="products-hero-person-img" />
                </div> */}
            </section>


            {/* ------------------- PRODUCTS ZIG-ZAG LIST ------------------- */}
            <section className="pt-24 pb-60 bg-white">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">

                    <div className="text-center mb-24">
                        <h2 className="text-4xl font-bold mb-6" style={{ color: '#ff4500' }}>Explore Our Products</h2>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            Browse through our innovative AI solutions tailored for modern enterprises.
                        </p>
                        <br></br>
                    </div>

                    <div className="flex flex-col gap-40">
                        {productsData.map((product, index) => {
                            // Logic: Even index (0, 2, 4...) -> Image Left, Text Right
                            //        Odd index (1, 3, 5...)  -> Image Right, Text Left

                            const isEven = index % 2 === 0;

                            // Explicitly determining content order based on index
                            // This ensures the zig-zag layout is structurally enforced
                            return (
                                <motion.div
                                    key={product.id}
                                    initial={{ opacity: 0, y: 100 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: "-50px" }}
                                    transition={{ duration: 0.8, ease: "easeOut" }}
                                    className="flex flex-col md:flex-row gap-12 md:gap-20 items-center"
                                >
                                    {isEven ? (
                                        <>
                                            {/* Image Left */}
                                            <div className="w-full md:w-1/2 group perspective-1000">
                                                <div className="p-[2px] rounded-3xl overflow-hidden relative moving-border-container">
                                                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#ff4500] to-transparent opacity-0 group-hover:opacity-100 moving-border-animation"></div>
                                                    <div className="aspect-video w-full flex items-center justify-center rounded-3xl overflow-hidden bg-white relative z-10">
                                                        <img
                                                            src={product.image}
                                                            alt={product.name}
                                                            className={`transition-all duration-300 ${product.name === 'SwassAI' ? 'swass-product-img' : 'product-img-standard'}`}
                                                        />
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Text Right */}
                                            <div className="w-full md:w-1/2 flex flex-col items-start text-left">
                                                <motion.div
                                                    initial={{ opacity: 0, x: 20 }}
                                                    whileInView={{ opacity: 1, x: 0 }}
                                                    transition={{ duration: 0.5, delay: 0.2 }}
                                                >
                                                    <div className="w-12 h-1 bg-[#ff4500] mb-6 rounded-full"></div>
                                                    <h3 className="text-4xl md:text-5xl font-bold mb-5 tracking-tight" style={{ color: '#ff4500' }}>{product.name}</h3>
                                                    <p className="text-xl font-semibold text-[#133331] mb-8 opacity-80">{product.tagline}</p>
                                                </motion.div>

                                                <motion.div
                                                    initial={{ opacity: 0, x: 20 }}
                                                    whileInView={{ opacity: 1, x: 0 }}
                                                    transition={{ duration: 0.5, delay: 0.3 }}
                                                    className="relative mb-8"
                                                >
                                                    <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#ff4500] rounded-full opacity-20"></div>
                                                    <p className="text-gray-600 text-lg leading-relaxed pl-6 italic mb-10">
                                                        "{product.description}"
                                                    </p>
                                                </motion.div>

                                                <motion.div
                                                    initial={{ opacity: 0, y: 20 }}
                                                    whileInView={{ opacity: 1, y: 0 }}
                                                    transition={{ duration: 0.5, delay: 0.4 }}
                                                    className="flex flex-wrap gap-3 mb-10"
                                                >
                                                    {product.features.map((feature, idx) => (
                                                        <span key={idx} className="feature-item inline-flex items-center px-4 py-2 rounded-xl bg-gray-50 border border-gray-100 text-gray-700 text-sm font-medium shadow-sm transition-all hover:bg-white cursor-default">
                                                            <CheckCircle2 className="w-4 h-4 text-[#ff4500] mr-2" />
                                                            {feature}
                                                        </span>
                                                    ))}
                                                </motion.div>

                                                <motion.div
                                                    initial={{ opacity: 0 }}
                                                    whileInView={{ opacity: 1 }}
                                                    transition={{ duration: 0.5, delay: 0.5 }}
                                                    className="mt-6"
                                                >
                                                    {product.isExternal ? (
                                                        <a
                                                            href={product.link}
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                            className="link-glow inline-flex items-center text-[#ff4500] font-bold text-lg transition-all group hover:gap-3"
                                                        >
                                                            <span>Learn more about {product.name}</span>
                                                            <ArrowRight className="arrow-animate ml-2 w-5 h-5 transition-transform" />
                                                        </a>
                                                    ) : (
                                                        <Link to={product.link} className="link-glow inline-flex items-center text-[#ff4500] font-bold text-lg transition-all group hover:gap-3">
                                                            <span>Learn more about {product.name}</span>
                                                            <ArrowRight className="arrow-animate ml-2 w-5 h-5 transition-transform" />
                                                        </Link>
                                                    )}
                                                </motion.div>
                                            </div>
                                        </>
                                    ) : (
                                        <>
                                            {/* Text Left (Swapped for Odd Index) */}
                                            <div className="w-full md:w-1/2 flex flex-col items-start text-left order-2 md:order-1">
                                                <motion.div
                                                    initial={{ opacity: 0, x: -20 }}
                                                    whileInView={{ opacity: 1, x: 0 }}
                                                    transition={{ duration: 0.5, delay: 0.2 }}
                                                >
                                                    <div className="w-12 h-1 bg-[#ff4500] mb-6 rounded-full"></div>
                                                    <h3 className="text-4xl md:text-5xl font-bold mb-5 tracking-tight" style={{ color: '#ff4500' }}>{product.name}</h3>
                                                    <p className="text-xl font-semibold text-[#133331] mb-8 opacity-80">{product.tagline}</p>
                                                </motion.div>

                                                <motion.div
                                                    initial={{ opacity: 0, x: -20 }}
                                                    whileInView={{ opacity: 1, x: 0 }}
                                                    transition={{ duration: 0.5, delay: 0.3 }}
                                                    className="relative mb-8"
                                                >
                                                    <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#ff4500] rounded-full opacity-20"></div>
                                                    <p className="text-gray-600 text-lg leading-relaxed pl-6 italic mb-10">
                                                        "{product.description}"
                                                    </p>
                                                </motion.div>

                                                <motion.div
                                                    initial={{ opacity: 0, y: 20 }}
                                                    whileInView={{ opacity: 1, y: 0 }}
                                                    transition={{ duration: 0.5, delay: 0.4 }}
                                                    className="flex flex-wrap gap-3 mb-10"
                                                >
                                                    {product.features.map((feature, idx) => (
                                                        <span key={idx} className="feature-item inline-flex items-center px-4 py-2 rounded-xl bg-gray-50 border border-gray-100 text-gray-700 text-sm font-medium shadow-sm transition-all hover:bg-white cursor-default">
                                                            <CheckCircle2 className="w-4 h-4 text-[#ff4500] mr-2" />
                                                            {feature}
                                                        </span>
                                                    ))}
                                                </motion.div>

                                                <motion.div
                                                    initial={{ opacity: 0 }}
                                                    whileInView={{ opacity: 1 }}
                                                    transition={{ duration: 0.5, delay: 0.5 }}
                                                    className="mt-6"
                                                >
                                                    {product.isExternal ? (
                                                        <a
                                                            href={product.link}
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                            className="link-glow inline-flex items-center text-[#ff4500] font-bold text-lg transition-all group hover:gap-3"
                                                        >
                                                            <span>Learn more about {product.name}</span>
                                                            <ArrowRight className="arrow-animate ml-2 w-5 h-5 transition-transform" />
                                                        </a>
                                                    ) : (
                                                        <Link to={product.link} className="link-glow inline-flex items-center text-[#ff4500] font-bold text-lg transition-all group hover:gap-3">
                                                            <span>Learn more about {product.name}</span>
                                                            <ArrowRight className="arrow-animate ml-2 w-5 h-5 transition-transform" />
                                                        </Link>
                                                    )}
                                                </motion.div>
                                            </div>

                                            {/* Image Right (Swapped for Odd Index) */}
                                            <div className="w-full md:w-1/2 group perspective-1000 order-1 md:order-2">
                                                <div className="p-[2px] rounded-3xl overflow-hidden relative moving-border-container">
                                                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#ff4500] to-transparent opacity-0 group-hover:opacity-100 moving-border-animation"></div>
                                                    <div className="aspect-video w-full flex items-center justify-center rounded-3xl overflow-hidden bg-white relative z-10">
                                                        <img
                                                            src={product.image}
                                                            alt={product.name}
                                                            className={`transition-all duration-300 ${product.name === 'SwassAI' ? 'swass-product-img' : 'product-img-standard'}`}
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </>
                                    )}
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>
            <br></br>

            <br />
            {/* ------------------- WHY CHOOSE US ------------------- */}
            <section className="pt-20 pb-40 bg-[#f9fafb] relative overflow-hidden">
                <div className="absolute inset-0 opacity-40" style={{ backgroundImage: 'radial-gradient(#ff4500 0.5px, transparent 0.5px)', backgroundSize: '30px 30px' }}></div>
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold" style={{ color: '#ff4500' }}>Why Choose NeuZen?</h2>
                    </div>
                    <br></br>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Card 1: Enterprise Security */}
                        <div className="why-choose-card">
                            <div className="why-choose-card-content">
                                <div className="w-14 h-14 bg-[#ff4500]/10 rounded-2xl flex items-center justify-center mb-6 text-[#ff4500]">
                                    <Shield className="w-8 h-8" />
                                </div>
                                <h3 className="text-xl font-bold text-[#ff4500] mb-6">Enterprise Security</h3>
                                <p className="text-gray-600 text-md">Built with the highest standards of data protection and privacy compliance for peace of mind.</p>
                            </div>
                        </div>

                        {/* Card 2: High Performance */}
                        <div className="why-choose-card">
                            <div className="why-choose-card-content">
                                <div className="w-14 h-14 bg-[#ff4500]/10 rounded-2xl flex items-center justify-center mb-6 text-[#ff4500]">
                                    <Zap className="w-8 h-8" />
                                </div>
                                <h3 className="text-xl font-bold text-[#ff4500] mb-6">High Performance</h3>
                                <p className="text-gray-600 text-md">Lightning-fast processing ensuring real-time insights when you need them most.</p>
                            </div>
                        </div>

                        {/* Card 3: Global Scale */}
                        <div className="why-choose-card">
                            <div className="why-choose-card-content">
                                <div className="w-14 h-14 bg-[#ff4500]/10 rounded-2xl flex items-center justify-center mb-6 text-[#ff4500]">
                                    <Globe className="w-8 h-8" />
                                </div>
                                <h3 className="text-xl font-bold text-[#ff4500] mb-6">Global Scale</h3>
                                <p className="text-gray-600 text-md">Infrastructure designed to scale effortlessly with your growing business demands.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Get in Touch Section */}
            <section className="careers-final-cta">
                <div className="cta-overlay-gradient"></div>
                <div className="container mx-auto px-6 relative z-10">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                        <h2 className="cta-heading-large text-[#ffffff]">
                            Know More About Our  <br className="hidden md:block" />Products
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

export default Products;
