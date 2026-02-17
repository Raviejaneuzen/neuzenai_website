# NeuZenAI Website: Pages Overview

This document provides a comprehensive and verified breakdown of all pages, routes, and components within the NeuZenAI website.

---

## 📄 Main Navigation Pages

These are the primary entry points accessible via the Navbar and Footer.

| Route | Component | Description |
|-------|-----------|-------------|
| `/` | `Home.jsx` | Landing page featuring an **Orange-Red (#FF4500)** Hero section, Company Story, Capabilities, Industry metrics, and Success Stories. |
| `/about` | `About.jsx` | Detailed narrative on the company's journey, vision, mission, and core values. |
| `/capabilities` | `Capabilities.jsx` | Overview of all AI-driven capabilities and solutions (formerly Services). |
| `/industries` | `Industries.jsx` | Summary of the sectors served by NeuZenAI's technology. Displays 6 industry sectors. |
| `/products` | `Products.jsx` | Showcase page for NeuZenAI's proprietary suite of AI products. |
| `/success-stories` | `SuccessStories.jsx` | Grid of client success stories with key performance metrics (formerly Case Studies). |
| `/insights` | `Insights.jsx` | Educational content, blogs, and thought leadership articles. |
| `/careers` | `Careers.jsx` | Information on joining the team, company culture, and current open roles. |
| `/contact` | `Contact.jsx` | Lead generation form, global office locations, and direct contact details. |

---

## 🛠 Capability Detail Pages

In-depth pages for specific service offerings under the `/capabilities/` route.

- **Advanced Analytics** (`AdvancedAnalytics.jsx`): Focuses on statistical models, data mining, and predictive tools.
- **AI Strategic Consulting** (`AIStrategy.jsx`): Covers AI readiness assessment, adoption roadmaps, and digital transformation strategy.
- **Custom AI Solutions** (`CustomAI.jsx`): Tailored Machine Learning models and bespoke AI development for specific business challenges.
- **Intelligent Automation** (`ProcessAutomation.jsx`): Details on RPA, workflow optimization, and intelligent document processing.

---

## 🏭 Industry Detail Pages

NeuZenAI serves **6 major industries** as listed in the navigation. Detailed pages exist for the following:

| Industry Sector | Detail Route | Component |
|-----------------|--------------|-----------|
| **E-commerce and Retail** | `/industries/ecommerce-retail` | `EcommerceRetail.jsx` |
| **Healthcare and Insurance** | `/industries/healthcare-insurance` | `HealthcareInsurance.jsx` |
| **Media and Entertainment** | `/industries/media-entertainment` | `MediaEntertainment.jsx` |
| **Transportation and Logistics** | `/industries/transportation-logistics` | `TransportationLogistics.jsx` |
| **Energy and Utilities** | `/industries/energy-utilities` | (Redirects to Industries Overview) |
| **Financial Services** | `/industries/financial-services` | (Redirects to Industries Overview) |

---

## ✨ Success Stories (Success Stories)

The Success Stories section (formerly Case Studies) uses dynamic IDs to render detailed project views.

### File Naming Changes
- Main Page: `CaseStudies.jsx` → `SuccessStories.jsx`
- Layout: `/case-studies` → `/success-stories`
- Detail Page: `CaseStudyDetail.jsx` renders dynamic content via `/success-stories/:id`.

### Currently Implemented IDs
The following IDs are active in the `CaseStudyDetail.jsx` data engine:
1.  **`education-remote-learning`**: Revolutionizing Remote Learning for EduTech Global.
2.  **`finance-fraud-detection`**: Fraud Detection at Scale for SecureBank Corp.

---

## 💼 Specialty & Dynamic Pages

- **Job Opening Detail** (`JobDetail.jsx`): A dynamic view for individual job descriptions and application instructions. Access via `/careers/:id`.

---

## 🚀 External Product Ecosystem

Linked via the Navbar "Products" dropdown:

- **[LensAI](https://lens.neuzenai.com/)**: Computer vision and visual analysis platform.
- **[NvisionAI](https://nvision.neuzenai.com/)**: Advanced visualization and predictive insights dashboard.
- **[SwassAI](https://swass.neuzenai.com/)**: Intelligent Swass-based enterprise solutions.
- **[Flux](https://fluxai.neuzenai.com/login)**: The core enterprise AI login portal.
