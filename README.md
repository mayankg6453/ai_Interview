---

```markdown
# 🧠 AI Interview Prep Platform

An intelligent, voice-enabled interview simulation platform built using Next.js. This tool helps users prepare for job interviews by generating realistic AI-powered mock interviews, providing real-time feedback, and offering a seamless user experience across all devices.

---

## 🚀 Features

### 🔐 Authentication

- Secure **Sign Up** and **Sign In** using **Firebase Email/Password Authentication**.

### 🎙️ Create Interviews

- Easily generate job-specific interviews using **Vapi Voice Assistants** and **Google Gemini**.
- Customize interview scenarios for targeted preparation.

### 🤖 AI-Powered Feedback

- Participate in voice-driven interviews with an **AI voice agent**.
- Receive **real-time feedback** based on your answers.
- Get **detailed transcripts** for post-interview analysis.

### 🧑‍💻 Interview Page

- Clean and intuitive interface to **conduct interviews** in a distraction-free environment.
- Includes **voice interaction**, **transcripts**, and **live feedback**.

### 📊 Dashboard

- View and manage all past interviews.
- Track your progress and revisit interview feedback.

### 🖼️ Modern UI/UX

- Built with **Tailwind CSS** and **shadcn/ui** components for a polished, minimal, and professional look.

### 📱 Responsive Design

- Fully responsive layout that adapts to mobile, tablet, and desktop devices.

### ⚙️ Scalable Architecture

- Modular and **reusable component structure**.
- Well-organized **codebase with clear separation of concerns**.

---

## 🛠 Tech Stack

- **Frontend**: [Next.js](https://nextjs.org/), [Tailwind CSS](https://tailwindcss.com/), [shadcn/ui](https://ui.shadcn.com/)
- **Authentication & Backend**: [Firebase Authentication](https://firebase.google.com/products/auth)
- **Voice AI**: [Vapi AI](https://www.vapi.ai/)
- **AI Model Integration**: [Google Gemini](https://deepmind.google/technologies/gemini/)
- **Validation**: [Zod](https://zod.dev/) – schema validation for form and data handling

---

## 📁 Folder Structure (Overview)

```
/app            → Next.js pages and routing
/components     → Reusable UI components
/constants      → Constant values defined
/firebase       → Firebase service integrations
/lib            → Vapi and other external service integrations
/public         → Store images and other files.
```

## ▶️ Getting Started

Follow these steps to run the project locally:

### 1. Clone the Repository

```bash
git clone https://github.com/mayankg6453/ai_Interview.git
cd ai_Interview
```

### 2. Install Dependencies

Make sure you have **Node.js** and **npm** or **yarn** installed.

```bash
npm install
# or
yarn install
```

### 3. Setup Environment Variables

Create a `.env.local` file in the root directory and add your environment variables (Firebase config, Vapi API keys, etc.).

Example:

```env
FIREBASE_PROJECT_ID
FIREBASE_PRIVATE_KEY
FIREBASE_CLIENT_EMAIL
NEXT_PUBLIC_FIREBASE_API_KEY
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN
NEXT_PUBLIC_FIREBASE_PROJECT_ID
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID
NEXT_PUBLIC_FIREBASE_APP_ID
NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID
GOOGLE_GENERATIVE_AI_API_KEY
NEXT_PUBLIC_VAPI_WEB_TOKEN
NEXT_PUBLIC_VAPI_WORKFLOW_ID
NEXT_PUBLIC_BASE_URL
```

### 4. Run the Development Server

```bash
npm run dev
# or
yarn dev
```

Visit [http://localhost:3000](http://localhost:3000) in your browser to start using the app.

---
