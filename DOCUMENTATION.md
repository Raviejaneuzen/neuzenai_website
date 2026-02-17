# NeuZenAI Website Documentation

## 🚀 Project Overview
**NeuZenAI** is a premium, high-performance web application built to showcase next-generation AI solutions. The website is designed with a modern aesthetic, featuring deep-tech themes (Orange & Black), glassmorphism, and interactive animations.

---

## 🛠 Technology Stack
- **Framework**: [React 19](https://react.dev/) (Vite-powered)
- **Routing**: [React Router DOM v7](https://reactrouter.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Styling**: 
  - **Vanilla CSS**: Custom utility-first system defined in `index.css`.
  - **Modular CSS**: Page-specific styles (e.g., `Home.css`, `About.css`).
  - **Mobile-First**: Dedicated `mobile.css` for cross-device responsiveness.
- **Backend (Headless WordPress)**: Uses custom WordPress REST API endpoints (e.g., `/wp-json/neuzen/v1/contact`) for lead generation and potential dynamic content management.

---

## 📂 Directory Structure

```text
NeuzenAI_Website_2/
├── public/                 # Static assets (images, logos, icons)
├── src/
│   ├── assets/             # Raw assets used in components
│   ├── components/         # Reusable global components
│   ├── pages/              # Main route components
│   ├── styles/             # Global style overrides (mobile.css)
│   ├── App.jsx             # Main router and layout wrapper
│   ├── index.css           # Design system and utility classes
│   └── main.jsx            # Entry point
├── package.json            # Dependencies and scripts
└── vite.config.js          # Vite configuration
```

---

## 🎨 Design System

### Color Palette

#### 🎨 Base Brand Colors
- **Primary Orange**: `#FF4500` (Unified Brand color for all highlights, icons, and CTAs)
- **Primary Hover**: `#CC3700` (Subtle darker tone for button hover states)
- **Secondary Black**: `#000000` (Core contrast color)
- **Neutral White**: `#FFFFFF` (Hero and section backgrounds)

#### 📝 Text Colors
- **Heading/Primary Text**: `#111827` (Darkest gray, used for clarity in body and headers)
- **Secondary Text**: `#4B5563` (Medium gray, used for subtext and descriptions)
- **Muted Text**: `#6B7280` (Light gray, used for labels and secondary details)
- **Orange Highlight**: `#FF4500` (Used for emphasis in text)
- **White Text**: `#FFFFFF` (Used on dark backgrounds like the footer)

#### 🖼️ Background Variations
- **Main Background**: `#FFFFFF` (Pure white for light sections)
- **Dark Background**: `#111827` (Used for Footer and deep-tech sections)
- **Soft Orange BG**: `#FFF7ED` (`bg-orange-50` - used for light highlights)
- **Light Orange BG**: `#FFEDD5` (`bg-orange-100` - card backgrounds)
- **Soft Blue BG**: `#DBEAFE` (`bg-blue-100` - service highlights)
- **Light Gray BG**: `#F3F4F6` (`bg-gray-100` - content separation)
- **Glassmorphism**: `rgba(255, 255, 255, 0.85)` (Navbar and floating cards)

#### ✨ Gradients & Accents
- **Primary Gradient**: Linear gradient from `#FF4500` to `#FF4500` (Solid brand presence)
- **Section Transitions**: From `#FFFDF0` (Warm Off-White) to `#FBFBFB` (Cool Gray)
- **Tech Gradient**: `#FF4500`, `#000000`, and `#6B7280` (Iconic footer animation)

### Typography
- **Headings**: `Outfit`, sans-serif (Bold, premium feel)
- **Body**: `Inter`, sans-serif (Clean, readable)

### Utility Classes
We use a "Mini-Tailwind" approach in `index.css`. Common classes include:
- `.container`: Standardized max-width (1280px).
- `.flex`, `.grid`: Layout engines.
- `.btn-primary`: The branded orange button style.
- `.glass-card`: Standardized card style with blur and subtle border.

---

## 🧩 Core Components

Detailed breakdown of the components found in `src/components/`:

### 1. `Navbar.jsx`
- **Purpose**: Global navigation bar with logic for scrolling and mobile menus.
- **Key Features**:
  - **Glassmorphism**: Changes background from transparent to glass-white on scroll.
  - **Dynamic Dropdowns**: Interactive menus for "Capabilities", "Industries", and "Products".
  - **Responsive**: Includes a toggle-able mobile menu (`Menu`/`X` icons).
  - **Routes**: Integrated with `react-router-dom`'s `Link`.

### 2. `Footer.jsx`
- **Purpose**: Brand-focused footer with site-wide links and contact info.
- **Sections**: Company info, Services links, Industries, and Social links.

### 3. `GravityBackground.jsx`
- **Purpose**: High-performance particle animation used in the Home Page Hero section.
- **Technical**: Uses Canvas/SVG to create an "antigravity" effect, providing a technical and innovative first impression.

---

## 📄 Page Architecture
For a comprehensive breakdown of all pages, routes, and components, please refer to the [PAGES_OVERVIEW.md](PAGES_OVERVIEW.md) document.

---

## 💻 Development Workflow

### Installation
```bash
npm install
```

### Run Locally
```bash
npm run dev
```

### Build for Production
```bash
npm run build
```

---

## 📱 Responsiveness
The project follows a mobile-first strategy. 
- **Base Styles**: `index.css` handles Desktop and general layout.
- **Mobile Overrides**: `src/styles/mobile.css` handles specific breakpoints:
  - `max-width: 991px`: General mobile/tablet adjustments.
  - `max-width: 768px`: Stacked layouts and hidden elements.
  - `max-width: 480px`: Aggressive font scaling and padding adjustments for phones.

---

---

## 📈 Recent Brand Alignment (Jan 2026)

To ensure a premium and cohesive user experience, several key updates were implemented:

1. **Color Unification**:
   - Standardized all orange elements (badges, icons, buttons, hover states) to the specific hex code: `#FF4500`.
   - Replaced all legacy instances of `#f97316`, `#ea580c`, and various RGBA values with the unified brand orange.

2. **About Page Overhaul**:
   - **Hero Design**: Removed the `NeuralBackground` to mirror the Home Page's clean aesthetic.
   - **Backgrounds**: Implemented an alternating background system using solid white and brand off-white gradients for better visual rhythm.

3. **Contact Page Refinement**:
   - **Visual Balance**: Aligned the "Get in Touch" and "Send Us a Message" containers to ensure perfect horizontal and vertical symmetry.
   - **Styling**: Centered and colored section headings in `#FF4500` for better brand recall.

4. **Success Stories Personalization**:
   - Updated homepage testimonials with real client data and images:
     - **Joe Hinrichs** (CSX)
     - **Niraj Gemawat** (Telecom Gateway)
     - **Rakesh Malhotra** (Meteorcomm)

5. **Navigation Consistency**:
   - Refined Footer navigation to include "Capabilities" and "Industries" directly under the Company section, optimizing the layout from 5 columns to 4 for better focus.

6. **Renaming for Clarity (Jan 2026)**:
   - Renamed "Services" to "Capabilities" and "Case Studies" to "Success Stories" site-wide.
   - Updated routes from `/services` to `/capabilities` and `/case-studies` to `/success-stories`.
   - Updated all internal links and component names to match the new naming convention.

---

## 💡 Best Practices for Scaling
1. **New Pages**: Create a `.jsx` file in `src/pages/`, add a corresponding `.css` if needed, and register the route in `src/App.jsx`.
2. **Components**: Keep components stateless where possible. Use Lucide icons consistently for a unified look.
3. **Styles**: Use CSS variables defined in `:root` of `index.css` (specifically `--primary: #FF4500`) to maintain brand consistency.
