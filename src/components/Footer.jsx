import React, { useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Twitter, Linkedin, Github, Mail, Phone, ArrowRight, Facebook, Instagram } from 'lucide-react';
import footerMap from '../assets/footer_map.png';
import './Footer.css'; // Import the new CSS file

const Footer = () => {
    const videoRef1 = useRef(null);
    const location = useLocation();

    const handleLinkClick = (path) => {
        if (location.pathname === path) {
            window.scrollTo(0, 0);
        }
    };

    useEffect(() => {
        const v1 = videoRef1.current;

        const setRate = (v) => {
            if (v) v.playbackRate = 2.5;
        };

        [v1].forEach(setRate);
    }, []);

    return (
        <footer className="footer-container">
            <div className="footer-inner">
                <div className="footer-brand-wrapper">
                    <Link to="/" className="footer-brand-logo" onClick={() => handleLinkClick('/')}>
                        <div className="logo-mask logo-mask-full">
                            <span className="logo-sizer" aria-hidden="true">NeuZenAI</span>
                            <video
                                ref={videoRef1}
                                className="masked-video"
                                autoPlay
                                muted
                                loop
                                playsInline
                                preload="metadata"
                            >
                                <source src="/sp-logo-footer-bg.mp4" type="video/mp4" />
                            </video>
                            <span className="logo-fallback">NeuZenAI</span>
                        </div>
                    </Link>
                    <div className="footer-powered-by-mask">
                        <span className="powered-sizer" aria-hidden="true">powered by z-ninth</span>
                        <video
                            className="masked-video"
                            autoPlay
                            muted
                            loop
                            playsInline
                            preload="metadata"
                        >
                            <source src="/sp-logo-footer-bg.mp4" type="video/mp4" />
                        </video>
                    </div>
                </div>
                <div className="footer-grid">
                    {/* Brand */}
                    <div className="footer-col-brand">
                        <p className="footer-brand-desc">
                            Accelerate your digital transformation with NeuZenAI’s custom machine learning models, proprietary AI platforms, and data-driven product engineering. From concept to scale, we build the intelligent systems that power your future.
                        </p>
                        <div className="footer-social-links">
                            <a href="https://x.com/Neuzenai23" target="_blank" rel="noopener noreferrer" className="footer-social-icon">
                                <Twitter size={20} />
                            </a>
                            <a href="https://www.linkedin.com/company/neuzenai/" target="_blank" rel="noopener noreferrer" className="footer-social-icon">
                                <Linkedin size={20} />
                            </a>
                            <a href="https://www.facebook.com/people/Neuzenai/61554736760102/?mibextid=LQQJ4d" target="_blank" rel="noopener noreferrer" className="footer-social-icon">
                                <Facebook size={20} />
                            </a>
                            <a href="https://www.instagram.com/neuzenai/?igsh=MWIya2FuZWphdHkzcw%3D%3D" target="_blank" rel="noopener noreferrer" className="footer-social-icon">
                                <Instagram size={20} />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="footer-col-links">
                        <h4 className="footer-heading">Company</h4>
                        <ul className="footer-links">
                            <li><Link to="/about" className="footer-link-item" onClick={() => handleLinkClick('/about')}><ArrowRight size={16} />About Us</Link></li>
                            <li><Link to="/careers" className="footer-link-item" onClick={() => handleLinkClick('/careers')}><ArrowRight size={16} />Careers</Link></li>
                            <li><Link to="/capabilities" className="footer-link-item" onClick={() => handleLinkClick('/capabilities')}><ArrowRight size={16} />Capabilities</Link></li>
                            <li><Link to="/industries" className="footer-link-item" onClick={() => handleLinkClick('/industries')}><ArrowRight size={16} />Industries</Link></li>
                        </ul>
                    </div>

                    {/* Products */}
                    <div className="footer-col-links">
                        <h4 className="footer-heading">Products</h4>
                        <ul className="footer-links">
                            <li><a href="https://fluxai.neuzenai.com/login" target="_blank" rel="noopener noreferrer" className="footer-link-item"><ArrowRight size={16} />FluxAI</a></li>
                            <li><a href="https://lens.neuzenai.com/" target="_blank" rel="noopener noreferrer" className="footer-link-item"><ArrowRight size={16} />LensAI</a></li>
                            <li><a href="https://nvision.neuzenai.com/" target="_blank" rel="noopener noreferrer" className="footer-link-item"><ArrowRight size={16} />NvisionAI</a></li>
                            <li><a href="https://swass.neuzenai.com/" target="_blank" rel="noopener noreferrer" className="footer-link-item"><ArrowRight size={16} />SwassAI</a></li>

                        </ul>
                    </div>

                    {/* Contact Info & Locations */}
                    <div className="footer-col-contact">
                        <h4 className="footer-heading">Contact</h4>
                        <ul className="footer-links">
                            <li className="footer-contact-item">
                                <Mail size={20} className="footer-brand-highlight" />
                                <a href="mailto:contact@neuzenai.com" className="footer-link-item" style={{ display: 'inline', padding: 0 }}>contact@neuzenai.com</a>
                            </li>
                            <li className="footer-contact-item">
                                <Phone size={20} className="footer-brand-highlight" />
                                <div>

                                    <div>USA: +1 972 372 9983</div>
                                    <div className="mb-1">India: +91 88852 57422</div>
                                </div>
                            </li>
                        </ul>

                        {/* Office Locations Map */}
                        <div className="footer-locations">
                            <h5 className="footer-heading" style={{ marginBottom: '12px' }}>Our Locations</h5>
                            <div className="footer-locations-card">
                                {/* World Map Image with Interactive Markers */}
                                <div className="footer-map-container">
                                    <img
                                        src={footerMap}
                                        alt="World Map showing Dallas and Hyderabad"
                                        className="footer-map-img"
                                    />

                                    {/* Dallas Interactive Marker */}
                                    <div className="footer-map-marker" style={{ left: '22%', top: '38%' }}>
                                        <div className="footer-marker-dot"></div>
                                        {/* Tooltip */}
                                        <div className="footer-tooltip">
                                            Headquarters: Dallas, USA
                                        </div>
                                    </div>

                                    {/* Hyderabad Interactive Marker */}
                                    <div className="footer-map-marker" style={{ left: '69%', top: '50%' }}>
                                        <div className="footer-marker-dot"></div>
                                        {/* Tooltip */}
                                        <div className="footer-tooltip" style={{ left: 'auto', right: '0', transform: 'none' }}>
                                            T Hub Phase 2, Hyderabad
                                        </div>
                                    </div>
                                </div>

                                {/* Location Details List */}
                                <div className="footer-locations-list">
                                    {/* Dallas Location */}
                                    <div className="footer-location-item">
                                        <div className="footer-location-dot"></div>
                                        <div>
                                            <h6 className="footer-location-name" style={{ color: '#ff4500' }}>Headquarters</h6>
                                            <h6 className="footer-location-name">Dallas, U.S.A</h6>
                                            <p className="footer-location-address">
                                                702 S Denton Tap Rd, Suite # 110, Coppell, 75019</p>
                                        </div>
                                    </div>

                                    {/* Hyderabad Location */}
                                    <div className="footer-location-item">
                                        <div className="footer-location-dot"></div>
                                        <div>
                                            <h6 className="footer-location-name">Hyderabad, India</h6>
                                            <p className="footer-location-address">
                                                T Hub Phase 2,
                                                <br></br>In orbit Mall Rd, Madhapur, 500032<br />


                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="footer-bottom">
                    <div className="footer-copyright">
                        © 2023 NeuZenAI. All rights reserved.
                    </div>
                    <div className="footer-bottom-links">
                        <Link to="/privacy-policy" className="footer-bottom-link-btn" onClick={() => handleLinkClick('/privacy-policy')}>Privacy Policy</Link>
                        <Link to="/terms-conditions" className="footer-bottom-link-btn" onClick={() => handleLinkClick('/terms-conditions')}>Terms & Conditions</Link>
                        <Link to="/cookie-policy" className="footer-bottom-link-btn" onClick={() => handleLinkClick('/cookie-policy')}>Cookie Policy</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
