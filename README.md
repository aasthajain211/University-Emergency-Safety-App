# 🛡️ University Emergency & Safety App

> **A fast, reliable campus safety companion powered by AI.**  
> Built with urgency, empathy, and cutting-edge intelligence to protect students, faculty, and campus communities 24/7.

[![CodeCraft Challenge](https://img.shields.io/badge/CodeCraft-Challenge%202025-blueviolet?style=for-the-badge&logo=codeforces)](https://github.com)
[![Google AI Studio](https://img.shields.io/badge/Powered%20By-Google%20AI%20Studio%20%26%20Gemini-4285F4?style=for-the-badge&logo=google)](https://aistudio.google.com)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](LICENSE)
[![Deployment Status](https://img.shields.io/badge/Deployment-Live-success?style=for-the-badge&logo=vercel)](https://your-university-safety-app.vercel.app)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=for-the-badge)](https://github.com/your-username/university-emergency-safety-app/pulls)

---

## 📌 Table of Contents

- [Overview & Tagline](#-overview)
- [Problem Statement](#-problem-statement)
- [Key Features](#-key-features)
  - [1. One-Tap Emergency Contacts](#1-one-tap-emergency-contacts)
  - [2. Campus Security Information & Directory](#2-campus-security-information--directory)
  - [3. Report Unsafe Situations](#3-report-unsafe-situations)
  - [4. Real-Time Location Sharing During Emergencies](#4-real-time-location-sharing-during-emergencies)
- [Tech Stack](#-tech-stack)
- [How It Works (App Workflow & AI Architecture)](#-how-it-works)
  - [End-to-End Workflow Diagram](#end-to-end-workflow-diagram)
  - [How the Gemini API Processes Safety Incidents](#how-the-gemini-api-processes-safety-incidents)
- [Project Structure](#-project-structure)
- [Local Setup & Installation](#-local-setup--installation)
- [Live Demo & Repository Links](#-live-demo--repository-links)
- [Roadmap & Future Enhancements](#-roadmap--future-enhancements)
- [Author & Acknowledgments](#-author--acknowledgments)
- [License](#-license)

---

## 📖 Overview

The **University Emergency & Safety App** is an all-in-one safety progressive web application engineered to bridge the critical seconds between a campus emergency and response. By coupling high-speed mobile accessibility with Google's **Gemini AI**, the platform offers instant distress dispatch, automated risk triage, offline-capable directory access, and live GPS tracking for university students, faculty, and campus visitors.

---

## 🚨 Problem Statement

University campuses often span hundreds of acres with isolated academic buildings, secluded walkways, dense residential blocks, and active research labs operating late into the night. Despite existing safety infrastructure, students face critical vulnerabilities:

1. **Panic & Time Friction**: When facing an active threat, medical emergency, or harassment, navigating long telephone directories or dialing unfamiliar 10-digit campus switchboards takes too much time.
2. **Geographical Ambiguity**: In large, sprawling campuses, distressed students often struggle to communicate their exact location (e.g., *"behind the biology greenhouse near Gate 4"*), causing costly dispatch delays for first responders.
3. **Underreported Hazards**: Broken lighting, suspicious activity, structural hazards, or perimeter breaches frequently go unreported due to intimidating, cumbersome, or non-anonymous reporting procedures.
4. **Information Asymmetry During Crises**: In high-stress scenarios (fires, active hazards, medical shocks), victims require clear, instantaneous, calm step-by-step guidance before security arrives.

**The Solution:** The *University Emergency & Safety App* solves these challenges by placing intuitive, one-tap emergency triggers, live GPS transmission, crowd-sourced hazard reporting, and intelligent AI-powered triage directly into students' hands.

---

## ✨ Key Features

### 1. One-Tap Emergency Contacts
*Zero-friction, instant distress signaling when every millisecond counts.*

- **Instant SOS Speed-Dial**: Large, accessible tactile action buttons to trigger instant calls to Campus Security, City Police (911 / 112 / 100), Medical Ambulances, and Fire Services.
- **Personal ICE (In Case of Emergency) Broadcast**: Configurable personal emergency contacts who automatically receive a pre-formatted distress SMS/WhatsApp containing the student's timestamp and emergency status.
- **Accidental Trigger Safeguards**: Integrated cancelation window (3-second visual countdown with haptic feedback) to eliminate accidental false alarms without sacrificing speed during real crises.
- **Offline Fallback Protocol**: If mobile network data fails, the app automatically switches to direct cellular dialer and emergency SMS protocols.

### 2. Campus Security Information & Directory
*A centralized, reliable, and verified index of all safety services.*

- **Comprehensive Security Directory**: Direct phone extensions, office locations, and operational hours for campus patrol units, dormitory wardens, health clinics, and psychological counseling lines.
- **Specialized Support Desks**: Dedicated shortcuts for Women’s Safety & Harassment Prevention Cells, Night Escort Services, Mental Health Crisis Lines, and Student Affairs.
- **Offline Caching**: All directory listings are cached in local browser storage (`IndexedDB` / `ServiceWorker`), guaranteeing access even inside basement laboratories or areas with poor cellular reception.
- **Interactive Search & Quick Filter**: Real-time search with instant filtering by department, building zone, or service category.

### 3. Report Unsafe Situations
*Crowd-sourced vigilance with intelligent risk analysis and complete privacy protection.*

- **Multi-Category Incident Reporting**: Report physical safety concerns, stalking/suspicious individuals, infrastructure defects (broken lights, faulty doors), chemical spills, or medical emergencies.
- **Anonymous Reporting Mode**: Students can submit reports with complete anonymity, removing fear of retaliation or stigma.
- **Media & Coordinate Capture**: Attach camera photos, voice notes, and exact GPS coordinates to provide security officers with actionable visual context.
- **AI-Driven Severity Triage (Gemini API)**: Automatically analyzes incident descriptions, scores risk levels (Low, Medium, High, Critical), extracts key entities, and suggests immediate mitigation actions.

### 4. Real-Time Location Sharing During Emergencies
*Precision geolocation dispatch to pinpoint students across complex campus layouts.*

- **High-Accuracy Geolocation Lock**: Queries HTML5 Geolocation API with high-accuracy GPS triangulation, calculating precise latitude, longitude, and elevation/accuracy radius.
- **One-Click Shareable Tracking Link**: Generates an expiring, secure live-tracking link shareable with campus dispatchers or trusted contacts.
- **Campus Landmark Mapping**: Translates raw coordinates into identifiable campus landmarks (e.g., *"50m North of Central Library, Science Quad"*).
- **Battery-Conscious Geofenced Ping**: Dynamic polling intervals optimize battery life while maintaining reliable real-time tracking during an ongoing incident.

---

## 🛠️ Tech Stack

### Frontend & Client Architecture
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black)
![React](https://img.shields.io/badge/React_19-61DAFB?style=flat-square&logo=react&logoColor=black)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS_v4-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white)
![Bootstrap](https://img.shields.io/badge/Bootstrap-7952B3?style=flat-square&logo=bootstrap&logoColor=white)
![Lucide Icons](https://img.shields.io/badge/Lucide_Icons-F56565?style=flat-square)

- **UI/UX**: Responsive mobile-first interface designed for high-stress usability, featuring high-contrast color schemes, accessible touch targets (minimum 48px), and zero visual clutter.
- **PWA Capabilities**: Service Worker integration for offline fallback, home-screen installation, and fast caching.

### AI & Backend Integration
![Google AI Studio](https://img.shields.io/badge/Google_AI_Studio-4285F4?style=flat-square&logo=google&logoColor=white)
![Gemini API](https://img.shields.io/badge/Gemini_2.5_Flash-8E75C2?style=flat-square&logo=googlegemini&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=flat-square&logo=nodedotjs&logoColor=white)
![Express](https://img.shields.io/badge/Express-000000?style=flat-square&logo=express&logoColor=white)

- **Gemini API (`@google/genai`)**: Natural language risk assessment, structured incident tagging, emergency first-aid instruction generation, and threat de-escalation guidelines.
- **Secure Server Proxy**: Express server isolates API credentials, preventing API keys from ever leaking into client-side bundles.

### Deployment & CI/CD
![Vercel](https://img.shields.io/badge/Vercel-000000?style=flat-square&logo=vercel&logoColor=white)
![GitHub Pages](https://img.shields.io/badge/GitHub_Pages-222222?style=flat-square&logo=github&logoColor=white)
![Render](https://img.shields.io/badge/Render-46E3B7?style=flat-square&logo=render&logoColor=black)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=flat-square&logo=vite&logoColor=white)

- **Continuous Deployment**: Automated build triggers with environment variable protection and static asset compression.

---

## ⚙️ How It Works

### End-to-End Workflow Diagram

```text
  [ Student / User Device ]
            │
            ├──► [ One-Tap SOS ] ──────────► [ Immediate Telephony / SMS Dispatch ]
            │                                             │
            ├──► [ GPS Geolocation ] ──────► [ Real-Time Coordinates & Live Map Link ]
            │                                             │
            └──► [ Unsafe Incident Report ]               │
                         │                                │
                         ▼                                ▼
              [ Secure Express Backend ] ──────► [ Campus Security Dashboard ]
                         │
                         ▼
             [ Google AI Studio & Gemini API ]
             ┌────────────────────────────────────────────────────────┐
             │ • Natural Language Entity Extraction & Categorization   │
             │ • Risk Score & Urgency Tagging (Critical / High / Med)  │
             │ • Context-Aware Safety & First-Aid Instructions        │
             │ • De-Escalation Guidance while Help Is En Route         │
             └────────────────────────────────────────────────────────┘
                         │
                         ▼
             [ Real-Time Safety Feed & User Advisory ]
```

### Step-by-Step User Flow

1. **Emergency Activation**:
   - The user opens the app or taps the quick-action home widget.
   - For an immediate threat, the user holds the central **"SOS EMERGENCY"** button. The app captures live GPS coordinates and presents direct dials to campus patrol and city emergency services.
2. **Incident Reporting**:
   - The user selects **"Report Hazard / Incident"**, chooses whether to remain anonymous, inputs a description (or speaks via voice-to-text), and attaches an optional photo.
3. **AI Processing with Gemini API**:
   - The report payload is sent to the backend proxy.
   - The **Gemini API** analyzes the raw text through a structured safety prompt:
     - **Triage Level**: Categorizes severity (`CRITICAL`, `HIGH`, `MEDIUM`, `INFO`).
     - **Hazard Classification**: Tags category (e.g., `Lighting Failure`, `Physical Threat`, `Medical`, `Fire`, `Wildlife/Environmental`).
     - **Actionable Advice**: Synthesizes calm, 3-step safety actions for the victim while security is dispatched.
4. **Dispatch & Resolution**:
   - Campus security receives the report with GPS coordinates and priority score.
   - The student receives immediate feedback and safety instructions on their screen.

---

## 📁 Project Structure

```text
university-emergency-safety-app/
├── public/                     # Static public assets (icons, manifest, sounds)
│   ├── favicon.ico             # App icon
│   ├── manifest.json           # PWA progressive web app manifest
│   └── sounds/                 # Alarm & haptic tone assets
├── src/
│   ├── assets/                 # SVGs, campus map overlays, and graphics
│   ├── components/             # Reusable UI component modules
│   │   ├── EmergencySOS.tsx    # Big red one-tap SOS button & timer modal
│   │   ├── SecurityDirectory.tsx # Filterable campus contact directory
│   │   ├── IncidentReport.tsx  # Unsafe situation reporting form
│   │   ├── LocationShare.tsx   # Live GPS tracker & coordinate broadcaster
│   │   ├── AiSafetyAssistant.tsx # Gemini AI response & advice card
│   │   └── Navbar.tsx          # Top navigation & network status banner
│   ├── services/               # API and external integrations
│   │   ├── gemini.ts           # Google AI Studio / Gemini API client
│   │   ├── geolocation.ts      # HTML5 Geolocation helper & watchPosition
│   │   └── storage.ts          # LocalStorage / IndexedDB offline cache
│   ├── types/                  # TypeScript interface definitions
│   │   └── safety.ts           # Incident, Contact, and Location data types
│   ├── App.tsx                 # Main application dashboard & state
│   ├── index.css               # Global styling & Tailwind CSS directives
│   └── main.tsx                # React DOM entry point
├── .env.example                # Example environment variables template
├── .gitignore                  # Git ignore rules for node_modules and keys
├── index.html                  # HTML5 entry document
├── metadata.json               # AI Studio project configuration & permissions
├── package.json                # Project dependencies and npm scripts
├── tsconfig.json               # TypeScript compiler configuration
├── vite.config.ts              # Vite bundler build configuration
└── README.md                   # Complete project documentation
```

---

## 🚀 Local Setup & Installation

Follow these instructions to set up and run the application locally on your machine.

### Prerequisites

- [Node.js](https://nodejs.org/) (version `v18.0.0` or higher recommended)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/) or [bun](https://bun.sh/)
- A **Google AI Studio API Key** (Get your free key from [Google AI Studio](https://aistudio.google.com/app/apikey))

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/university-emergency-safety-app.git
cd university-emergency-safety-app
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Configure Environment Variables

Create a local `.env` file in the root directory:

```bash
cp .env.example .env
```

Open `.env` in your code editor and provide your Gemini API key:

```env
# Google AI Studio Gemini API Key
GEMINI_API_KEY=your_actual_gemini_api_key_here

# Application Configuration
VITE_CAMPUS_NAME="University Safety Control Room"
VITE_CAMPUS_EMERGENCY_PHONE="+1-800-555-0199"
VITE_POLICE_EMERGENCY_PHONE="911"
```

> ⚠️ **Security Warning:** Never commit your `.env` file or expose your `GEMINI_API_KEY` in client-side public git repositories. The `.gitignore` is pre-configured to ignore `.env`.

### 4. Run the Development Server

```bash
npm run dev
```

The application will start locally at:
👉 **`http://localhost:3000`** (or the port specified in terminal).

### 5. Build for Production

```bash
npm run build
```

To preview the production build locally:

```bash
npm run preview
```

---

## 🌐 Live Demo & Repository Links

| Resource | Link |
| :--- | :--- |
| 🚀 **Live Production App** | [https://your-university-safety-app.vercel.app](https://your-university-safety-app.vercel.app) *(Replace with your live URL)* |
| 💻 **GitHub Repository** | [https://github.com/your-username/university-emergency-safety-app](https://github.com/your-username/university-emergency-safety-app) *(Replace with your repo URL)* |
| 🎥 **Video Demonstration** | [https://youtube.com/watch?v=your-demo-id](https://youtube.com/watch?v=your-demo-id) *(Replace with your video link)* |
| 📄 **CodeCraft Submission** | [CodeCraft Challenge Submission Portal](https://github.com) |

---

## 🔮 Roadmap & Future Enhancements

- [ ] **Campus Geofencing Alerts**: Automated push notifications when approaching an area with an active hazard or construction zone.
- [ ] **Silent Duress Code**: Secret gestures or volume-key triggers to discreetly call security without opening the phone.
- [ ] **Multi-Language AI Support**: Multilingual safety advisories translated in real-time via Gemini for international students.
- [ ] **BLE Beacon Indoor Navigation**: Sub-room level positioning inside complex multi-story university complexes.
- [ ] **Wearable OS Integration**: Companion watch app for Wear OS and Apple Watch for wrist-based instant SOS.

---

## 👨‍💻 Author & Acknowledgments

### Author
- **Rajeev Jain** — [GitHub Profile](https://github.com/your-username) • [LinkedIn](https://linkedin.com/in/your-username) • [Email](mailto:rajeevjain15095@gmail.com)

### Acknowledgments
- **CodeCraft Challenge**: Proudly built and submitted as part of the **CodeCraft Challenge**, fostering student innovation for public good.
- **Google AI Studio**: For providing developer access to fast, state-of-the-art **Gemini API** models.
- **University Campus Security Teams**: For sharing real-world insights into crisis dispatch logistics and safety protocols.
- **Open Source Community**: For the remarkable tooling across Vite, React, Tailwind CSS, and Lucide icons.

---

## 📄 License

This project is open-source and distributed under the **[MIT License](LICENSE)**. Feel free to adapt and deploy this system for your university or campus community.

---

<div align="center">
  <sub>Built with ❤️ and vigilance for a safer campus environment. | CodeCraft Challenge</sub>
</div>
