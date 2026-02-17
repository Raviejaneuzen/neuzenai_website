import React, { useState, useEffect } from 'react';
import { ArrowRight, ChevronLeft, ChevronRight, Search, Filter, Star, StarHalf, ArrowUpRight, Linkedin } from 'lucide-react';
import { Link } from 'react-router-dom';
import './SuccessStories.css';
import './SuccessStoriesMobile.css';
import { motion, AnimatePresence } from 'framer-motion';

const SuccessStories = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
        document.title = "Success Stories | Client Results | neuzenai";
        const metaDescription = document.querySelector('meta[name="description"]');
        if (metaDescription) {
            metaDescription.setAttribute('content', 'See how NeuzenAI helps global brands like Meteorcomm, ITConnectUS, and CSX achieve better outcomes with AI-driven insights and automation.');
        }
    }, []);

    const [isMobile, setIsMobile] = useState(false);
    const [activeSlide, setActiveSlide] = useState(0);

    const featuredStories = [
        {
            id: 1,
            company: "Mercedes-Benz",
            title: "Mercedes Benz is transforming global IT moving to AWS with Agentic AI",
            image: "https://images.unsplash.com/photo-1617788138017-80ad40651399?q=80&w=2070&auto=format&fit=crop",
            logo: "Mercedes-Benz",
            category: "Automotive"
        },
        {
            id: 2,
            company: "Blue Origin",
            title: "Blue Origin: AI-Designed Hardware for the Moon",
            image: "https://images.unsplash.com/photo-1517976487492-5750f3195933?q=80&w=2070&auto=format&fit=crop",
            logo: "Blue Origin",
            category: "Aerospace"
        },
        {
            id: 3,
            company: "Pinterest",
            title: "Pinterest pushes boundaries of AI-powered discovery",
            image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1974&auto=format&fit=crop",
            logo: "Pinterest",
            category: "Social Media"
        },
        {
            id: 4,
            company: "Spotify",
            title: "Hyper-personalization at scale with NeuZen Engines",
            image: "https://images.unsplash.com/photo-1614680376593-902f74cf0d41?q=80&w=2074&auto=format&fit=crop",
            logo: "Spotify",
            category: "Streaming"
        },
        {
            id: 5,
            company: "Airbnb",
            title: "Optimizing global search with semantic understanding",
            image: "https://images.unsplash.com/photo-1617634667039-8e4cb277ab46?q=80&w=2068&auto=format&fit=crop", // valid image
            logo: "Airbnb",
            category: "Hospitality"
        },
        {
            id: 6,
            company: "Tesla",
            title: "Accelerating autonomous driving data pipelines",
            image: "https://images.unsplash.com/photo-1617788138017-80ad40651399?q=80&w=2070", // Reuse mercedes for car context or similar
            logo: "Tesla",
            category: "Automotive"
        },
        {
            id: 7,
            company: "Shopify",
            title: "Empowering merchants with predictive inventory AI",
            image: "https://images.unsplash.com/photo-1556742049-0cfed4f7a07d?q=80&w=2070&auto=format&fit=crop",
            logo: "Shopify",
            category: "Retail"
        }
    ];
    // Data for Success Stories
    const detailedStories = [
        {
            id: "meteorcomm",
            company: "Meteorcomm",
            quote: "Partnering with NeuZenAI has fundamentally accelerated our product innovation cycle. Their deep expertise in AI integration and custom algorithm development has helped us deliver more robust, intelligent, and scalable communication solutions for our global infrastructure. The level of precision they brought to our predictive maintenance modules has reduced downtime by 45% and established a new benchmark for reliability in our industry.",
            author: "David Herber",
            role: "VP, Engineering And Product Development",
            category: "Communications Technology",
            image: "/meterocomm-david.jpg",
            link: "/case-studies/meteorcomm",
            linkedin: "https://www.linkedin.com/in/davidherber/",
            rating: 4.5,
            benefits: [
                "2x faster innovation cycle",
                "99.9% system reliability",
                "Cutting-edge AI integration",
                "Scalable Architecture"
            ]
        },
        {
            id: "itconnectus",
            company: "ITConnectUS",
            quote: "NeuZenAI's AI-driven recruitment and resource management solutions have completely streamlined our talent acquisition pipeline. By automating the initial screening and matching process with high accuracy, they've ensured we find the right expertise for our enterprise clients faster than ever before. Their platform doesn't just process data; it understands the nuance of technical skills, leading to a significant increase in successful long-term placements and client satisfaction.",
            author: "Lakshmi kalluru",
            role: "SVP IT Solutions & Delivery",
            category: "IT Staffing & Consulting",
            image: "/itconnectus-lakshmi-kalluru.jpg",
            link: "/case-studies/itconnectus",
            linkedin: "https://www.linkedin.com/in/klreddy/",
            rating: 4,
            benefits: [
                "40% faster hiring cycle",
                "High-quality talent matching",
                "Scalable workforce solutions",
                "Improved Placement ROI"
            ]
        },
        {
            id: "telecom-gateway",
            company: "Telecom Gateway",
            quote: "The intelligent automation and customer analytics platforms provided by NeuZenAI have allowed us to scale our services rapidly while maintaining exceptional quality of experience for our global clients. Their real-time network monitoring tools have identified efficiency gaps we didn't know existed, allowing us to optimize resource allocation and significantly reduce operational overhead. It's rare to find a partner that understands both the technology and the business impact so deeply.",
            author: "Aravind Maddineni",
            role: "Head-RF Engineering",
            category: "Telecommunications",
            image: "/telecomm-aravind.jpg",
            link: "/case-studies/telecom-gateway",
            linkedin: "https://www.linkedin.com/",
            rating: 4,
            benefits: [
                "35% cost saving",
                "50% faster rollout",
                "Enhanced security",
                "Real-time Analytics"
            ]
        },
        {
            id: "csx",
            company: "CSX",
            quote: "NeuZenAI brought a level of technical depth and strategic foresight that transformed our operational efficiency from the ground up. Their custom-built AI solutions for logistics and data synchronization are not just innovative but also extremely reliable in high-stakes environments. We have seen a drastic improvement in cross-departmental communication and data-driven decision making, which has directly translated to better service levels and customer loyalty.",
            author: "Ramakanth Pasunuri",
            role: "Technical Director",
            category: "Transportation",
            image: "/csx-ramakanth.jpg",
            link: "/case-studies/csx",
            linkedin: "https://www.linkedin.com/in/rkpasunuri/",
            rating: 4,
            benefits: [
                "Optimized logistics",
                "Real-time tracking",
                "Scalable architecture",
                "Sync Efficiency Jump"
            ]
        }
    ];

    const stats = [
        { number: "10+", label: "of active customers every month." },
        { number: "5+", label: "startups have used NeuZen to bring their ideas to life." }
    ];

    const logoCards = [
        { name: "NETFLIX", color: "#E50914" },
        { name: "NETFLIX", color: "#E50914" },
        { name: "NETFLIX", color: "#E50914" },
        { name: "NETFLIX", color: "#E50914" }
    ];

    // Carousel State for multi-item view
    const itemsPerPage = 3;
    const totalPages = Math.ceil(featuredStories.length / 1); // We move 1 by 1, but we can visualize pages of items. Wait, user wants "show 1,2,3,4,5".
    // "always one by one will move" -> activeSlide handles start index.

    const nextSlide = () => {
        setActiveSlide((prev) => (prev + 1) % featuredStories.length);
    };

    const prevSlide = () => {
        setActiveSlide((prev) => (prev - 1 + featuredStories.length) % featuredStories.length);
    };

    // Helper to get visible items for infinite loop illusion or just clamped
    const getVisibleItems = () => {
        const items = [];
        for (let i = 0; i < itemsPerPage; i++) {
            const index = (activeSlide + i) % featuredStories.length;
            items.push(featuredStories[index]);
        }
        return items;
    };

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };

        // Initial check
        checkMobile();

        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    const getAnimationProps = (direction = 'left') => {
        if (isMobile) {
            // Force visibility on mobile / disable animation effects
            return {
                initial: { opacity: 1, x: 0, rotateY: 0 },
                animate: { opacity: 1, x: 0, rotateY: 0 },
                transition: { duration: 0 }
            };
        }

        return {
            initial: { opacity: 0, rotateY: direction === 'left' ? 45 : -60, x: direction === 'left' ? 100 : -100 },
            whileInView: { opacity: 1, rotateY: 0, x: 0 },
            whileHover: { scale: 1.03, zIndex: 10 },
            viewport: { once: false, amount: 0.2 },
            transition: {
                duration: 1.2,
                ease: "easeOut",
                scale: { type: "spring", stiffness: 400, damping: 25 }
            }
        };
    };

    return (
        <div className="case-studies-page">

            {/* Header / Hero */}
            <section className="stories-hero-split">
                <div className="stories-hero-left">
                    <div className="stories-hero-content-left slide-up-animated">
                        <h1 className="stories-hero-love-text">
                            Impact through <br></br>Innovation<br />
                            AI<span className="orange-bar"></span>
                        </h1>
                    </div>
                </div>
                <div className="stories-hero-right">
                    <div className="stories-hero-content-right slide-up-animated delay-2">
                        <h2 className="stories-hero-title-right">Success Stories</h2>
                        <p className="stories-hero-subtitle-right">
                            Discover how customers across industries increase agility, optimize costs, and accelerate innovation using NeuZen AI solutions.
                        </p>
                    </div>
                </div>
                {/* <div className="stories-hero-person-wrapper slide-up-animated delay-1">
                    <img src="/success-story-main.png" alt="Success Stories" className="stories-hero-person-img" />
                </div> */}
            </section>




            {/* Detailed Stories (List Layout) */}
            <section className="cs-stories py-20 bg-white">
                <div className="max-w-7xl mx-auto px-6 space-y-24">
                    {detailedStories.map((story, index) => (
                        <div key={story.id} className={`flex flex-col md:flex-row gap-12 story-card-v2 ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
                            {/* Left Column (Author + Benefits Card) */}
                            <div className="md:w-1/2 flex items-center">
                                <motion.div
                                    className="w-full"
                                    {...getAnimationProps('left')}
                                    style={{ transformOrigin: "right center" }}
                                >
                                    <div className="author-benefits-card-v2">
                                        <div className="author-header">
                                            <div className="flex items-center gap-1 mb-3 stars-container">
                                                {[...Array(5)].map((_, i) => {
                                                    const starIdx = i + 1;
                                                    if (starIdx <= Math.floor(story.rating)) {
                                                        return <Star key={i} className="w-5 h-5 text-yellow-500 fill-current" />;
                                                    } else if (starIdx === Math.ceil(story.rating) && !Number.isInteger(story.rating)) {
                                                        return <StarHalf key={i} className="w-5 h-5 text-yellow-500 fill-current" />;
                                                    } else {
                                                        return <Star key={i} className="w-5 h-5 text-gray-300" />;
                                                    }
                                                })}
                                            </div>
                                            <h3 className="text-3xl font-bold cs-company-name-v2 mb-1">{story.company}</h3>
                                            <p className="text-sm font-semibold cs-category-v2 uppercase tracking-widest mb-6">{story.category}</p>

                                            <div className="flex items-center gap-5 mt-4 author-profile-row">
                                                <img src={story.image} className="cs-profile-img-v2" alt={story.author} />
                                                <div>
                                                    <p className="font-bold cs-author-name-v2 text-xl">{story.author}</p>
                                                    <p className="cs-author-role-v2 text-gray-600 font-medium">{story.role}</p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="benefits-section-v2 mt-8">
                                            <h4 className="font-bold text-lg cs-benefits-title-v2 mb-4">Key Strategic Benefits</h4>
                                            <div className="grid grid-cols-2 gap-3 benefits-grid-v2">
                                                {story.benefits.map((benefit, idx) => (
                                                    <div key={idx} className="benefit-bar-item-v2">
                                                        <div className="benefit-dot-v2"></div>
                                                        <span className="text-gray-800 font-medium text-xs md:text-sm">{benefit}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            </div>

                            {/* Right Column (Quote Card) */}
                            <div className="md:w-1/2 flex items-center">
                                <motion.div
                                    className="quote-card-v2-container"
                                    {...getAnimationProps('right')}
                                    style={{ transformOrigin: "left center" }}
                                >
                                    <div className="quote-card-v2">
                                        <div className="quote-icon-v2 top">"</div>
                                        <p className="quote-text-v2 italic leading-relaxed">
                                            {story.quote}
                                        </p>
                                        <div className="quote-icon-v2 bottom">"</div>

                                        <a href={story.linkedin} target="_blank" rel="noopener noreferrer" className="linkedin-link-v2">
                                            <Linkedin className="w-5 h-5" />
                                        </a>
                                    </div>
                                </motion.div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Featured Carousel */}
            {/* <section className="cs-carousel py-12 overflow-hidden bg-white">
                <div className="max-w-7xl mx-auto px-6 relative">
                    <div className="flex items-center justify-between mb-8">
                        <h3 className="text-2xl font-bold text-gray-900">Featured Case Studies</h3>
                        <div className="flex gap-2">
                            <button onClick={prevSlide} className="p-3 rounded-full border border-gray-300 hover:bg-[#ff4500] hover:text-white hover:border-[#ff4500] transition-colors">
                                <ChevronLeft className="w-5 h-5" />
                            </button>
                            <button onClick={nextSlide} className="p-3 rounded-full border border-gray-300 hover:bg-[#ff4500] hover:text-white hover:border-[#ff4500] transition-colors">
                                <ChevronRight className="w-5 h-5" />
                            </button>
                        </div>
                    </div>

                  
            <div className="relative w-full">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <AnimatePresence mode='popLayout'>
                        {getVisibleItems().map((story) => (
                            <motion.div
                                key={story.id}
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                transition={{ duration: 0.3 }}
                                className="relative rounded-2xl overflow-hidden shadow-lg group cursor-pointer h-[350px]"
                            >
                                <img src={story.image} alt={story.company} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent"></div>
                                <div className="absolute bottom-0 left-0 p-6 w-full">
                                    <span className="text-xs font-bold text-[#ff4500] uppercase tracking-wider mb-2 block">{story.category}</span>
                                    <h4 className="text-xl font-bold text-white mb-2 leading-tight line-clamp-2">
                                        {story.title}
                                    </h4>
                                    <Link to={`/case-studies/${story.id}`} className="inline-flex items-center text-white/80 hover:text-[#ff4500] text-sm font-semibold transition-colors mt-2">
                                        Read Story <ArrowRight className="ml-1 w-4 h-4" />
                                    </Link>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>
            </div>

           
            <div className="flex justify-center items-center mt-10 gap-2 flex-wrap">
                {featuredStories.map((_, idx) => (
                    <button
                        key={idx}
                        onClick={() => setActiveSlide(idx)}
                        className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold transition-all border ${activeSlide === idx
                            ? 'bg-[#ff4500] text-white border-[#ff4500] scale-110 shadow-md'
                            : 'bg-white text-gray-500 border-gray-200 hover:border-[#ff4500] hover:text-[#ff4500]'
                            }`}
                    >
                        {idx + 1}
                    </button>
                ))}
            </div>
        </div>
            </section > */}
            {/* Benefits Stats */}
            <section className="cs-stats py-20 bg-white">
                <div className="max-w-7xl mx-auto px-6">
                    <h2 className="text-3xl font-bold cs-benefits-title mb-12">Benefits</h2>
                    <div className="flex flex-col md:flex-row justify-center gap-8">
                        {stats.map((stat, idx) => (
                            <div key={idx} className="cs-stat-card w-full max-w-xs">
                                <span className="cs-stat-number">{stat.number}</span>
                                <p className="text-base text-gray-700 font-medium">{stat.label}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Browse Stories */}
            {/* <section className="cs-browse py-24 bg-white">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                        <div>
                            <h2 className="text-3xl font-bold text-gray-900 mb-8">Browse customer stories</h2>
                            <div className="flex items-center gap-4">
                                <button className="flex items-center gap-2 px-6 py-3 rounded-full border border-gray-300 hover:border-[#ff4500] hover:text-[#ff4500] transition-colors font-medium">
                                    <Filter className="w-4 h-4" /> Filter
                                </button>
                                <div className="relative">
                                    <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                                    <input
                                        type="text"
                                        placeholder="Search"
                                        className="pl-12 pr-6 py-3 rounded-full border border-gray-300 focus:outline-none focus:border-[#ff4500] w-64 transition-all"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="text-gray-500 font-medium self-end">
                            Displaying 1-8 (1417)
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {logoCards.map((card, idx) => (
                            <div key={idx} className="bg-gray-50 rounded-xl p-12 flex flex-col items-center justify-center min-h-[250px] hover:shadow-lg transition-shadow cursor-pointer group">
                                <span className="bg-white px-3 py-1 rounded text-xs font-mono mb-8 uppercase tracking-wider text-gray-500">Media & Entertainment</span>
                                <h3 className="text-5xl font-bold tracking-tighter transform group-hover:scale-110 transition-transform duration-300" style={{ color: card.color }}>{card.name}</h3>
                            </div>
                        ))}
                    </div>
                </div>
            </section> */}

        </div >
    );
};

export default SuccessStories;