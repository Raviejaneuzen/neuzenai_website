import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  X, ChevronDown,
  LineChart, Bot, Lightbulb, MessageSquare,
  ShoppingCart, Film, Zap, Truck, Landmark, Heart,
  Users, AlertTriangle, Eye, UserMinus, TrendingUp,
  Sparkles, FileText, ShoppingBasket, PieChart, BarChart,
  Compass, ThumbsUp, ShieldAlert, Smile
} from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const location = useLocation();
  const isHome = location.pathname === '/';

  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsScrolled(currentScrollY > 50);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileDropdown = (name) => {
    setMobileDropdownOpen(mobileDropdownOpen === name ? null : name);
  };

  // Navbar classes - always visible, no hiding
  const navbarClasses = `navbar-scroll-container navbar-scroll-visible ${isScrolled || !isHome ? 'navbar-scroll-bg-scrolled' : 'navbar-scroll-bg-default'
    }`;

  // Close mobile menu and reset dropdowns
  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    setMobileDropdownOpen(null);
  };

  const navLinks = [
    { name: 'About Us', path: '/about' },
    {
      name: 'Capabilities',
      path: '/capabilities',
      isMega: true,
      dropdown: [
        { name: 'Advanced Analytics', path: '/capabilities#advanced-analytics', icon: LineChart },
        { name: 'AI Strategic Consulting', path: '/capabilities#ai-strategic-consulting', icon: Lightbulb },
        { name: 'Custom AI Solutions', path: '/capabilities#custom-ai-solution', icon: MessageSquare },
        { name: 'Intelligent Automation', path: '/capabilities#intelligent-automation', icon: Bot },
      ]
    },
    {
      name: 'Industries',
      path: '/industries',
      isMega: true,
      dropdown: [
        { name: 'E-commerce and Retail', path: '/industries#e-commerce-and-retail', icon: ShoppingCart },
        { name: 'Energy and Utilities', path: '/industries#energy-utilities', icon: Zap },
        { name: 'Financial Services', path: '/industries#financial-services', icon: Landmark },
        { name: 'Healthcare and Insurance', path: '/industries#healthcare-and-insurance', icon: Heart },
        { name: 'Media and Entertainment', path: '/industries#media-and-entertainment', icon: Film },
        { name: 'Transportation and Logistics', path: '/industries#transportation-and-logistics', icon: Truck },
      ]
    },
    {
      name: 'Success Stories',
      path: '/success-stories',
    },
    {
      name: 'Products',
      path: '/products',
      dropdown: [
        { name: 'FluxAI', path: 'https://fluxai.neuzenai.com/login', isExternal: true },

        { name: 'LensAI', path: 'https://lens.neuzenai.com/', isExternal: true },
        { name: 'NvisionAI', path: 'https://nvision.neuzenai.com/', isExternal: true },
        { name: 'SwassAI', path: 'https://swass.neuzenai.com/', isExternal: true },


      ]
    },
    { name: 'Careers', path: '/careers' },
  ];

  return (
    <nav className={navbarClasses}>
      <div className="navbar-scroll-content">
        {/* Logo */}
        <Link
          to="/"
          className="navbar-scroll-logo"
          onClick={() => {
            closeMobileMenu();
            window.scrollTo(0, 0);
          }}
        >
          <div className="logo-wrapper">
            <img src="/logo.png" alt="NeuZenAI" className="navbar-logo-img" />
            <div className="powered-by-badge">
              <span className="powered-text-container">
                <span className="powered-label">powered by </span>
                <span className="z-ninth-brand">z-ninth</span>
              </span>
            </div>
          </div>
        </Link>

        {/* Desktop Menu */}
        <div className="navbar-scroll-menu">
          {navLinks.map((link) => (
            <div
              key={link.name}
              className="navbar-scroll-dropdown"
              onMouseEnter={() => link.dropdown && setActiveDropdown(link.name)}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <Link
                to={link.path}
                className={`navbar-scroll-link ${location.pathname === link.path || (link.dropdown && link.dropdown.some(item => location.pathname === item.path)) ? 'active' : ''}`}
                onClick={() => {
                  if (location.pathname === link.path) {
                    window.scrollTo(0, 0);
                  }
                }}
              >
                {link.name}
                {link.dropdown && <ChevronDown className="w-4 h-4" />}
              </Link>

              {/* Dropdown Menu */}
              {link.dropdown && activeDropdown === link.name && (
                <div className={`navbar-scroll-dropdown-menu ${link.isMega ? 'mega-menu-wrapper' : ''}`}>
                  <div className={`navbar-scroll-dropdown-content ${link.isMega ? 'mega-menu-grid' : ''}`}>
                    {link.dropdown.map((item) => (
                      item.isExternal ? (
                        <a
                          key={item.name}
                          href={item.path}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="navbar-scroll-dropdown-item"
                        >
                          {item.icon && <item.icon className="dropdown-icon" size={18} />}
                          <span>{item.name}</span>
                        </a>
                      ) : (
                        <Link
                          key={item.name}
                          to={item.path}
                          className="navbar-scroll-dropdown-item"
                          onClick={() => {
                            if (location.pathname === item.path) {
                              window.scrollTo(0, 0);
                            }
                            setActiveDropdown(null);
                          }}
                        >
                          {item.icon && <item.icon className="dropdown-icon" size={18} />}
                          <span>{item.name}</span>
                        </Link>
                      )
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="navbar-scroll-cta">
          <Link
            to="/contact"
            className="navbar-scroll-btn"
            onClick={() => {
              if (location.pathname === '/contact') {
                window.scrollTo(0, 0);
              }
            }}
          >
            Contact Us
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="navbar-scroll-mobile-toggle"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : (
            <svg width="100%" height="100%" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg" className="custom-menu-icon">
              <circle cx="2.53247" cy="2.93777" r="2" fill="currentColor"></circle>
              <circle cx="13.5325" cy="2.93777" r="2" fill="currentColor"></circle>
              <circle cx="13.5325" cy="11.9378" r="2" fill="currentColor"></circle>
              <circle cx="2.53247" cy="11.9378" r="2" fill="currentColor"></circle>
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="navbar-scroll-mobile-menu">
          {navLinks.map((link) => (
            <div key={link.name} className="navbar-scroll-mobile-item">
              <div className="navbar-scroll-mobile-link-wrapper">
                <Link
                  to={link.path}
                  className="navbar-scroll-mobile-link"
                  onClick={() => {
                    closeMobileMenu();
                    if (location.pathname === link.path) {
                      window.scrollTo(0, 0);
                    }
                  }}
                >
                  {link.name}
                </Link>
                {link.dropdown && (
                  <button
                    className={`navbar-scroll-mobile-arrow ${mobileDropdownOpen === link.name ? 'open' : ''}`}
                    onClick={() => toggleMobileDropdown(link.name)}
                  >
                    <ChevronDown className="w-5 h-5" />
                  </button>
                )}
              </div>

              {link.dropdown && mobileDropdownOpen === link.name && (
                <div className="navbar-scroll-mobile-dropdown">
                  {link.dropdown.map((item) => (
                    item.isExternal ? (
                      <a
                        key={item.name}
                        href={item.path}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="navbar-scroll-mobile-dropdown-item"
                        onClick={closeMobileMenu}
                      >
                        {item.name}
                      </a>
                    ) : (
                      <Link
                        key={item.name}
                        to={item.path}
                        className="navbar-scroll-mobile-dropdown-item"
                        onClick={() => {
                          closeMobileMenu();
                          if (location.pathname === item.path) {
                            window.scrollTo(0, 0);
                          }
                        }}
                      >
                        {item.name}
                      </Link>
                    )
                  ))}
                </div>
              )}
            </div>
          ))}
          <Link
            to="/contact"
            className="navbar-scroll-mobile-cta"
            onClick={() => {
              closeMobileMenu();
              if (location.pathname === '/contact') {
                window.scrollTo(0, 0);
              }
            }}
          >
            Contact Us
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
