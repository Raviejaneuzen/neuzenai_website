# Backend Storage & Workflow Documentation

This document details the backend interactions, data storage, and workflows for the **Careers** and **Contact Us** modules of the NeuZenAI website.

---

## 🏗️ Architecture Overview
The NeuZenAI website uses a **Headless WordPress** architecture. The React frontend communicates with WordPress via the standard REST API and custom endpoints created specifically for lead generation and job applications.

---

## 8.0 Career Page Backend Storage & Workflow

### 📋 Overview
The Careers module allows users to view open positions (managed via the **AWSM Jobs** plugin in WordPress) and submit applications with resumes.

### 🔄 Workflow
1.  **Job Fetching**:
    - The `Careers.jsx` component fetches the list of active job openings from the standard endpoint: `/wp-json/wp/v2/awsm_job_openings`.
    - This data includes job titles, descriptions, and metadata managed in the WordPress admin dashboard.
2.  **Application Submission**:
    - Users fill out the application form on the `JobDetail.jsx` page.
    - Upon submission, a `POST` request is sent to a custom endpoint: `/wp-json/neuzen/v1/apply`.
    - The submission uses `FormData` (multipart/form-data) to support the **Resume/CV file upload**.
3.  **Storage & Handling**:
    - **Database**: The applicant's details (name, email, etc.) are saved to a custom table or as post meta in WordPress.
    - **Files**: Resumes are uploaded to the WordPress `uploads` directory and linked to the application record.
    - **Notifications**: The system likely triggers an email notification to the NeuZenAI HR team upon successful submission.

### 📤 Data Schema (Application)
| Field | Type | Description |
| :--- | :--- | :--- |
| `fullName` | String | Full name of the applicant |
| `email` | String | Candidate contact email |
| `phone` | String | Candidate phone number |
| `currentCTC` | String | Current compensation (if applicable) |
| `expectedCTC` | String | Expected compensation (if applicable) |
| `linkedinUrl` | String | Profile link for verification |
| `coverLetter` | Text | Personal message from the candidate |
| `resume` | File | PDF or doc/docx file upload |
| `jobTitle` | String | Target role title |

---

## 9.0 Contact Us Backend Storage & Workflow

### 📋 Overview
The Contact module captures leads and inquiries from various pages (Contact, Industries, Capabilities) and routes them to the central CRM/Inquiry system.

### 🔄 Workflow
1.  **Lead Capture**:
    - Users submit inquiries via `Contact.jsx`, `Industries.jsx`, or `Capabilities.jsx`.
    - A `POST` request is sent to the unified custom lead endpoint: `/wp-json/neuzen/v1/contact`.
2.  **Processing**:
    - The backend identifies the source of the inquiry (e.g., "Contact Page" vs "Industries Inquiry") via the `service` field.
    - The data is sanitized and validated in the WordPress backend.
3.  **Storage**:
    - Inquiries are stored in the WordPress database (accessible via the CMS dashboard) for tracking and follow-up.

### 📤 Data Schema (Inquiry)
| Field | Type | Description |
| :--- | :--- | :--- |
| `name` | String | Requester's name |
| `email` | String | Contact email |
| `phone` | String | Contact phone number |
| `company` | String | Requester's company name |
| `message` | Text | Detailed inquiry or message |
| `service` | String | Source or specific category of interest |

---

## 🛠️ Implementation Notes
- **Endpoints**: All custom endpoints (`/neuzen/v1/*`) are implemented as a WordPress plugin or within the theme's `functions.php` to handle CORS and data persistence.
- **Security**: Basic validation is performed on both frontend and backend to prevent spam and ensure file integrity (for resumes).
- **Extensibility**: New fields or routing logic (e.g., sending leads directly to a CRM like HubSpot) can be added to the WordPress backend without modifying the React frontend.
