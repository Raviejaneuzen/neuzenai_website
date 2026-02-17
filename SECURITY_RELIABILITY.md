# Security & Reliability Documentation

This document outlines the measures and protocols implemented to ensure the **Security** and **Reliability** of the NeuZenAI platform.

---

## 🔒 Security Measures

### 🌐 Frontend (React 19 / Vite)
- **Environment Variable Protection**: Sensitive data, such as API URLs or keys, are managed via `.env` files to prevent exposure in the source code.
- **Input Sanitization**: All user inputs in the Careers and Contact forms are validated on the frontend to prevent malformed data from reaching the backend.
- **Secure Handling of HTML**: When rendering dynamic content from WordPress (e.g., job descriptions), the application uses `dangerouslySetInnerHTML` only after ensuring the source is the trusted WordPress API.
- **CORS Management**: The frontend is configured to communicate only with the verified WordPress backend origin.
- **HTTPS Enforcement**: The application is designed to run over encrypted HTTPS, ensuring all data in transit between the client and the server is secure.

### 🖥️ Backend (Headless WordPress)
- **Sanitized REST API Endpoints**: All custom endpoints (`/apply`, `/contact`) implement strict server-side validation and sanitization using WordPress's built-in functions (e.g., `sanitize_text_field`, `wp_check_filetype`).
- **Secure File Uploads**: Resumes submitted via the Careers page are restricted to specific file types (.pdf, .doc, .docx) and are processed through WordPress's secure `wp_handle_upload` logic to prevent malicious file execution.
- **Database Security**: WordPress core security best practices are followed, including regular updates and the use of the `wpdb` class for secure, SQL-injection-resistant database queries.
- **Access Control**: Administrative access to the WordPress backend is protected by strong passwords and restricted to authorized NeuZenAI personnel only.

---

## 🚀 Reliability & Performance

### 🌐 Frontend (React 19 / Vite)
- **Component-Driven Architecture**: Modular components ensure that errors in one part of the site do not necessarily impact the entire user experience.
- **Graceful Error Handling**: All API fetch calls (for jobs and lead submissions) include `try-catch` blocks and specific user feedback for network failures or server errors.
- **Vite-Powered Optimization**: Fast loading and smooth interactions are achieved through Vite's efficient bundling and hot-module replacement (HMR).
- **Responsive Design**: A mobile-first strategy using `mobile.css` ensures consistent availability and usability across all screen sizes and devices.

### 🖥️ Backend (Headless WordPress)
- **Decoupled Architecture**: The separation of frontend and backend means that even during backend maintenance, the frontend can still serve static content and informational pages.
- **Standardized Job Management**: By utilizing the **AWSM Jobs** plugin, the site leverages a stable, well-maintained system for managing career listings.
- **Scalability**: The Headless approach allows the WordPress backend to be scaled independently of the frontend to handle increased lead generation or job application traffic.
- **Uptime Monitoring**: The system relies on standard web hosting reliability protocols, with the backend residing on a managed WordPress environment for high availability.

---

## 🛠️ Maintenance & Monitoring
- **Regular Updates**: Continuous monitoring and updating of both npm packages and WordPress plugins/core.
- **Data Integrity**: Routine checks on lead generation logs in the WordPress dashboard to ensure no data loss.
- **Continuous Improvement**: Ongoing refinement of validation logic based on real-world usage patterns.
