import React from 'react';
import { Target, Users, Globe, Award, Brain, Heart, Shield, Zap, ArrowRight, MapPin, Mail, Phone, Building, Calendar, CheckCircle, ThumbsUp, Rocket, Plus, Minus, Handshake, ShieldCheck, Database, Repeat, TrendingUp, Cpu, Package, Bot, Network, DollarSign, Settings, Trophy, Microscope, Atom, LineChart, Fingerprint, Blocks, Workflow } from 'lucide-react';
import { Link } from 'react-router-dom';
import './About.css';
import './AboutMobile.css';
import NeuralBackground from '../components/NeuralBackground';
import GravityBackground from '../components/GravityBackground';

const TypingInnovation = () => {
    const [text, setText] = React.useState('');
    const fullText = "Innovation";

    React.useEffect(() => {
        let i = 0;
        const timer = setInterval(() => {
            setText(fullText.substring(0, i + 1));
            i++;
            if (i === fullText.length) {
                // Optional: reset after some time for a loop
                // setTimeout(() => { i = 0; setText(''); }, 2000); 
                clearInterval(timer);
            }
        }, 200);
        return () => clearInterval(timer);
    }, []);

    return (
        <span className="gridntlove">
            {fullText.substring(0, text.length)}
        </span>
    );
};

const Counter = ({ end, duration = 2000, suffix = '' }) => {
    const [count, setCount] = React.useState(0);
    const [isVisible, setIsVisible] = React.useState(false);
    const ref = React.useRef(null);

    React.useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.1 }
        );
        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, []);

    React.useEffect(() => {
        if (!isVisible) return;

        let startTime;
        let animationFrame;

        const animate = (timestamp) => {
            if (!startTime) startTime = timestamp;
            const progress = timestamp - startTime;
            const percentage = Math.min(progress / duration, 1);
            const easeOut = 1 - Math.pow(1 - percentage, 3);

            setCount(Math.floor(end * easeOut));

            if (progress < duration) {
                animationFrame = requestAnimationFrame(animate);
            } else {
                setCount(end);
            }
        };
        animationFrame = requestAnimationFrame(animate);
        return () => cancelAnimationFrame(animationFrame);
    }, [isVisible, end, duration]);

    return <span ref={ref}>{count}{suffix}</span>;
};

const About = () => {
    React.useEffect(() => {
        document.title = "About Us | neuzenai";
        const metaDescription = document.querySelector('meta[name="description"]');
        if (metaDescription) {
            metaDescription.setAttribute('content', 'Learn about NeuzenAI, a leader in Data, Analytics, and AI. Our mission is to harness the transformative power of AI to drive business growth and efficiency.');
        }

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        if (entry.target.classList.contains('wcu-icon-large-container')) {
                            entry.target.classList.add('zoom-active');
                        } else if (entry.target.classList.contains('nai-about-stat-card')) {
                            entry.target.classList.add('stat-active');
                        } else if (entry.target.classList.contains('nai-about-stats-content')) {
                            entry.target.classList.add('stats-content-active');
                        }
                    } else {
                        if (entry.target.classList.contains('wcu-icon-large-container')) {
                            entry.target.classList.remove('zoom-active');
                        }
                    }
                });
            },
            { threshold: 0.1 }
        );

        const iconContainers = document.querySelectorAll('.wcu-icon-large-container');
        const statCards = document.querySelectorAll('.nai-about-stat-card');
        const statsContentBlocks = document.querySelectorAll('.nai-about-stats-content');

        iconContainers.forEach((el) => observer.observe(el));
        statCards.forEach((el) => observer.observe(el));
        statsContentBlocks.forEach((el) => observer.observe(el));

        return () => {
            iconContainers.forEach((el) => observer.unobserve(el));
            statCards.forEach((el) => observer.unobserve(el));
            statsContentBlocks.forEach((el) => observer.unobserve(el));
        };
    }, []);

    return (
        <div className="about-page-v2">
            {/* Section 1: Split Hero */}
            <section className="about-hero-split">
                <div className="about-hero-left">
                    <div className="about-hero-content-left slide-up-animated">
                        <h1 className="about-hero-love-text">
                            Shaping the <br></br>Future with<br />
                            AI<span className="orange-bar"></span>
                        </h1>

                    </div>
                </div>
                <div className="about-hero-right">
                    <div className="about-hero-content-right slide-up-animated delay-2">
                        <h2 className="about-hero-title-right">About Us</h2>
                        <p className="about-hero-subtitle-right">
                            Empowering businesses to love their digital transformation journeys.
                        </p>
                    </div>
                </div>
                <div className="about-hero-person-wrapper slide-up-animated delay-1">
                    <img src="/ABOUTUS_MAIN.png" alt="Professional Representative" className="about-hero-person-img" />
                </div>
            </section>

            {/* Section 2: Overview & Journey */}
            <section className="overview-journey-section">
                <div className="neural-network-bg"></div>
                <div className="neural-overlay"></div>

                <div className="container mx-auto max-w-[1400px] px-6 relative z-10">
                    <div className="about-overview-glass-container slide-up-animated">
                        <h2 className="about-overview-title">Overview</h2>
                        <p className="about-overview-text">
                            NeuzenAI is a leader in the realm of Data, Analytics, and AI, dedicated to transforming the way businesses interact with data. We specialize in empowering companies to harness the power of data-driven insights, enabling smarter decision-making processes. Our team excels in revealing hidden patterns and critical insights, ensuring that operations are not just efficient but also intelligently automated. With our innovative Analytics & AI digital accelerators, we open doors to new business opportunities, helping our clients explore uncharted territories and possibilities in their respective industries. we don’t just deliver solutions; we redefine the future of business intelligence.
                        </p>
                    </div>

                    <div className="journey-container flex flex-col lg:flex-row items-center gap-16">
                        <div className="lg:w-1/2 journey-text-box slide-left-animated delay-1">
                            <h3 className="journey-title-small">NeuZenAI's Journey of</h3>
                            <h4 className="journey-title-large">
                                <TypingInnovation />
                            </h4>
                            <p className="journey-desc-v2">
                                At NeuzenAI we harness the synergy of Data, Analytics, and Artificial Intelligence to elevate our clients’ digital transformation journeys. Our approach transcends traditional boundaries, leveraging AI to not only realize but also amplify the value of digital initiatives, thereby catalyzing significant and positive business transformations.
                            </p>
                            {/* <Link to="/contact" className="discover-brand-link">
                                Discover Our Brand <ArrowRight size={20} className="inline ml-1" />
                            </Link> */}
                        </div>
                        <div className="lg:w-1/2 journey-visual slide-right-animated delay-2">
                            <div className="video-placeholder-card">
                                <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=1200" alt="Team collaborating" />
                                <div className="play-button-overlay">
                                    <div className="play-icon-circle">
                                        <div className="play-triangle"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 3: Vision & Mission Cards */}
            <section className="vision-mission-section">
                <div className="animated-particles-bg"></div>
                <div className="container mx-auto px-6 relative z-10">
                    <div className="grid md:grid-cols-2 gap-12">
                        <div className="vm-card slide-up-animated delay-1">
                            <div className="vm-icon-wrapper">
                                <Brain style={{ color: '#ff4500' }} size={64} />
                            </div>
                            <h3 className="vm-title">Our Vision</h3>
                            <p className="vm-desc">
                                To be the global leader in AI and analytics, shaping the future of business. We envision a world where every organization can effortlessly unlock the full potential of their data, leading to smarter decisions, innovative breakthroughs, and sustainable growth in an ever-evolving digital landscape.
                            </p>
                        </div>
                        <div className="vm-card slide-up-animated delay-2">
                            <div className="vm-icon-wrapper">
                                <Target style={{ color: '#16a34a' }} size={64} />
                            </div>
                            <h3 className="vm-title"> Our Mission</h3>
                            <p className="vm-desc">
                                To harness the transformative power of AI and analytics, delivering unparalleled insights and innovative solutions that drive business growth and efficiency. We are committed to empowering our clients with intelligent, data-driven strategies, fostering a future where technology and human ingenuity converge for impactful results.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Choose Us - Zig Zig Layout */}
            <div className="sect-corevalue">
                <div className="container mx-auto px-6 mb-12">
                    <h2 className="headline text-center" style={{ fontSize: '3.5rem', marginBottom: '20px', color: '#ff4500' }}>Why Choose us:</h2>
                    <p className="desc text-center" style={{ maxWidth: '800px', margin: '0 auto', color: '#7A7A7A' }}>
                        Here are some compelling reasons why businesses should choose your company for their AI and analytics needs
                    </p>
                </div>

                {/* Item 1: Expertise (Text Left, Image Right) */}
                <div className="main itemone scroll">
                    <div className="contentstyle content-1">
                        <h2 className="wcu-headline"><span className="wcu-highlight">Expertise in Advanced AI and Analytics</span></h2>
                        <p className="wcu-desc">
                            Our team consists of industry-leading experts in AI and analytics, ensuring that your business benefits from the latest and most effective technologies and methodologies.
                        </p>
                    </div>
                    <div className="imagestyle">
                        <div className="wcu-icon-large-container bg-blue-50 rounded-full p-12">
                            <Bot style={{ color: '#3b82f6' }} size={100} />
                        </div>
                    </div>
                </div>

                {/* Item 2: Customized Solutions (Image Left, Text Right via row-reverse) */}
                <div className="main itemtwo">
                    <div className="contentstyle content-2">
                        <h2 className="wcu-headline"><span className="wcu-highlight">Customized Solutions</span></h2>
                        <p className="wcu-desc">
                            We understand that every business is unique. Our approach to solution development is deeply tailored to meet the specific challenges and objectives of each client, ensuring maximum relevance and impact.
                        </p>

                    </div>
                    <div className="imagestyle">
                        <div className="wcu-icon-large-container bg-orange-50 rounded-full p-12">
                            <Network style={{ color: '#ff4500' }} size={100} />
                        </div>
                    </div>
                </div>

                {/* Item 3: Proven Track Record (Text Left, Image Right) */}
                <div className="main itemthree">
                    <div className="contentstyle content-3">
                        <h2 className="wcu-headline"><span className="wcu-highlight">Proven Track Record</span></h2>
                        <p className="wcu-desc">
                            Our portfolio showcases a range of successful projects across various industries, demonstrating our ability to deliver high-quality, effective solutions that drive real business results.
                        </p>

                    </div>
                    <div className="imagestyle">
                        <div className="wcu-icon-large-container bg-gray-50 rounded-full p-12">
                            <Award style={{ color: '#4b5563' }} size={100} />
                        </div>
                    </div>
                </div>

                {/* Item 4: Client Success (Image Left, Text Right via row-reverse) */}
                <div className="main itemfour">
                    <div className="contentstyle content-4">
                        <h2 className="wcu-headline"> <span className="wcu-highlight">Commitment to Client Success</span></h2>
                        <p className="wcu-desc">
                            We see ourselves as partners in our clients’ success. Our goal is not just to provide a service, but to be a catalyst for growth and innovation within your business.
                        </p>

                    </div>
                    <div className="imagestyle">
                        <div className="wcu-icon-large-container bg-amber-50 rounded-full p-12">
                            <Handshake style={{ color: '#f59e0b' }} size={100} />
                        </div>
                    </div>
                </div>

                {/* Item 5: Ethical Use of Data */}
                <div className="main itemfive">
                    <div className="contentstyle content-5">
                        <h2 className="wcu-headline"><span className="wcu-highlight">Ethical Use of Data</span></h2>
                        <p className="wcu-desc">
                            We adhere to the highest standards of data privacy and ethical AI, ensuring that all solutions are compliant with relevant regulations and ethical norms.
                        </p>

                    </div>
                    <div className="imagestyle">
                        <div className="wcu-icon-large-container bg-emerald-50 rounded-full p-12">
                            <Database style={{ color: '#059669' }} size={100} />
                        </div>
                    </div>
                </div>

                {/* Item 6: Agile and Scalable Solutions */}
                <div className="main itemsix">
                    <div className="contentstyle content-6">
                        <h2 className="wcu-headline"><span className="wcu-highlight">Agile and Scalable Solutions</span></h2>
                        <p className="wcu-desc">
                            Our solutions are designed to be both agile and scalable, adapting to your evolving business needs and growing with your company.
                        </p>

                    </div>
                    <div className="imagestyle">
                        <div className="wcu-icon-large-container bg-indigo-50 rounded-full p-12">
                            <Workflow style={{ color: '#6366f1' }} size={100} />
                        </div>
                    </div>
                </div>

                {/* Item 7: Cutting-Edge R&D */}
                <div className="main itemseven">
                    <div className="contentstyle content-7">
                        <h2 className="wcu-headline"><span className="wcu-highlight">Cutting-Edge Research and Development</span></h2>
                        <p className="wcu-desc">
                            We continuously invest in research and development, keeping our solutions at the forefront of technological advancement.
                        </p>

                    </div>
                    <div className="imagestyle">
                        <div className="wcu-icon-large-container bg-pink-50 rounded-full p-12">
                            <Brain style={{ color: '#ec4899' }} size={100} />
                        </div>
                    </div>
                </div>

                {/* Item 8: Strong Focus on ROI */}
                <div className="main itemeight">
                    <div className="contentstyle content-8">
                        <h2 className="wcu-headline"><span className="wcu-highlight">Strong Focus on ROI</span></h2>
                        <p className="wcu-desc">
                            Our solutions are designed not just for technical excellence but also for tangible business outcomes, ensuring a strong return on investment.
                        </p>

                    </div>
                    <div className="imagestyle">
                        <div className="wcu-icon-large-container bg-teal-50 rounded-full p-12">
                            <DollarSign style={{ color: '#0d9488' }} size={100} />
                        </div>
                    </div>
                </div>
            </div>
            {/* Section 6: With You, For You & Stats - Final Polish */}
            <section className="nai-about-stats-section">
                <div className="nai-about-stats-hero">
                    <div className="px-6 h-full flex flex-col justify-center">
                        <div className="nai-about-stats-content">
                            <h2 className="nai-about-stats-title">WITH YOU, FOR YOU</h2>
                            <p className="nai-about-stats-desc">
                                Turn your business into a growth champion with our enterprise-grade solutions,
                                startup-like agility, a global presence, and a holistic partner ecosystem.
                                We constantly explore the transformative value of technology to deliver
                                the most enduring solutions for your organization.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="nai-about-stats-grid-wrapper container mx-auto px-6 relative z-20">
                    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
                        <div className="nai-about-stat-card nai-about-stat-blue">
                            <h3 className="nai-about-stat-number">2023</h3>
                            <p className="nai-about-stat-label">Founded</p>
                            <p className="nai-about-stat-subtext">Innovating since start</p>
                        </div>
                        <div className="nai-about-stat-card nai-about-stat-green">
                            <h3 className="nai-about-stat-number"><Counter end={10} suffix="+" /></h3>
                            <p className="nai-about-stat-label">Expert Team</p>
                            <p className="nai-about-stat-subtext">Global Professionals</p>
                        </div>
                        <div className="nai-about-stat-card nai-about-stat-yellow">
                            <h3 className="nai-about-stat-number"><Counter end={3} suffix="+" /></h3>
                            <p className="nai-about-stat-label">Global Offices</p>
                            <p className="nai-about-stat-subtext">Worldwide Presence</p>
                        </div>
                        <div className="nai-about-stat-card nai-about-stat-cyan">
                            <h3 className="nai-about-stat-number"><Counter end={6} suffix="+" /></h3>
                            <p className="nai-about-stat-label">AI Solutions</p>
                            <p className="nai-about-stat-subtext">Scale with Intelligence</p>
                        </div>
                        <div className="nai-about-stat-card nai-about-stat-purple">
                            <h3 className="nai-about-stat-number"><Counter end={4} suffix="+" /></h3>
                            <p className="nai-about-stat-label">Happy Clients</p>
                            <p className="nai-about-stat-subtext">Trust & Excellence</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Our Leaders Section */}
            <section className="about-leaders-section">
                <div className="about-leaders-image">
                </div>
                <div className="about-leaders-content">
                    <h2 className="about-leaders-title">Our Leaders</h2>
                    <p className="about-leaders-desc">
                        Meet the visionary leaders at NeuZenAI – industry experts passionate about technology.
                        Our global executive team, made up of forward-thinking leaders, drives progress and ensures
                        client success with their expertise and dedication.
                    </p>
                    {/* <Link to="/team" className="about-leaders-link">
                        Explore More <ArrowRight size={20} />
                    </Link> */}
                </div>
            </section>

            {/* Life at NeuZen Section */}
            <section className="about-life-section">
                <div className="about-life-content">
                    <h2 className="about-life-title">Experience the<br />NeuZen life with us!</h2>
                    <p className="about-life-desc">
                        NeuZenAI shines because of our dedicated NeuZenians. We never fail
                        to celebrate milestones, diverse cultures, and the bonds that unite
                        us. From collaborative victories to personal growth, each story
                        represents the essence of our workplace culture and the firm
                        commitment driving our collective success.
                    </p>
                    {/* <Link to="/careers" className="about-life-link">
                        Explore More <ArrowRight size={20} />
                    </Link> */}
                </div>
                <div className="about-life-image-wrapper">
                    <img
                        src="/aboutus_meet.png"
                        alt="Life at NeuZen - Team Celebration"
                        className="about-life-img"
                    />
                </div>
            </section>

            {/* Connect With Us Section */}
            <div className="col-md-12 contctmain">
                <div className="lftcontct" data-aos="fade-up">
                    <div className="fullwidthinr">
                        <h2 className="connect-title">Connect With Us</h2>
                        <div className="linkcta">
                            <Link className="clicktoexpor" to="/capabilities">
                                Know more about our Capabilities
                                <ArrowRight size={20} />
                            </Link>
                            <Link className="clicktoexpor" to="/careers">
                                Check out current openings
                                <ArrowRight size={20} />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;