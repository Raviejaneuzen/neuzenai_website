# Getting Started: NeuZenAI Website

This guide provides step-by-step instructions on how to set up, install, and run the NeuZenAI website project locally.

## 📋 Prerequisites

Before you begin, ensure you have the following installed on your machine:
- **Git**: For version control and cloning the repository.
- **Node.js**: (Version 18 or higher is recommended).
- **npm**: (Included with Node.js).

---

## 🚀 Installation & Setup

### 1. Clone the Repository
Open your terminal or command prompt and run the following command to pull the project from the repository:

```bash
git clone [REPOSITORY_URL]
```
*(Replace `[REPOSITORY_URL]` with the actual link to your Git repository.)*

### 2. Navigate to the Project Directory
Change into the project folder:

```bash
cd website
```

### 3. Install Dependencies
Install all the required React and Vite modules listed in the `package.json` file:

```bash
npm install
```

---

## 💻 Running the Project Locally

### Start the Development Server
To run the project in development mode (with hot-reload enabled), use the following command:

```bash
npm run dev
```

The application will typically be available at: `http://localhost:5173/`

---

## 🏗️ Building for Production

To create an optimized production build of the website, run:

```bash
npm run build
```

The compiled files will be located in the `dist/` directory, ready for deployment to your web server.

---

## 🛠️ Common Commands

| Command | Description |
| :--- | :--- |
| `npm install` | Installs project dependencies. |
| `npm run dev` | Starts the local development server (Vite). |
| `npm run build` | Builds the project for production. |
| `npm run preview` | Previews the production build locally. |
| `npm run lint` | Runs ESLint to check for code quality issues. |

---

## 💡 Troubleshooting
- **Missing Modules**: If you see errors related to missing packages, try running `npm install` again.
- **Port Conflict**: If port 5173 is in use, Vite will automatically select the next available port (e.g., 5174).
- **Backend Issues**: Ensure you have a stable internet connection if the application is fetching dynamic data from the Headless WordPress backend.
