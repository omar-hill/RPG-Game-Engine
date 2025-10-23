# DEVELOPER NOTES — RPG GAME ENGINE
This document explains how the project is structured, how features are added, and how code should be maintained going forward. It exists so any developer can jump in with **zero confusion** and **zero guesswork**.

---

## 📁 PROJECT STRUCTURE (TOP LEVEL)

RPGgame/
│
├── backend/ # FastAPI backend (API + DB)
├── frontend/ # React/Vite frontend
├── docs/ # Documentation (markdown files)
└── logs/ # Generated logs (ignored in git)

yaml
Copy code

---

## 📁 BACKEND STRUCTURE (FastAPI)

backend/
│
├── app/
│ ├── main.py # FastAPI entry point
│ ├── database.py # DB session + engine
│ ├── models/ # SQLAlchemy models
│ ├── routes/ # API endpoints (auth, tos, etc.)
│ ├── schemas/ # Pydantic schemas
│ └── utils/ # Helpers, security, hashing
│
├── venv/ # Python virtual environment
├── .env # Environment variables
├── start_server.sh # Start backend + frontend + ngrok
├── stop_server.sh # Kill processes and close ports
└── restart_server.sh # Full clean restart

yaml
Copy code

---

## 📁 FRONTEND STRUCTURE (React/Vite)

frontend/
│
├── src/
│ ├── main.jsx # App entry
│ ├── App.jsx # Title Screen UI
│ ├── components/ # Modals, buttons, UI parts
│ └── styles/ # CSS files
│
├── .env # Auto-updated with NGROK URL
└── vite.config.js

yaml
Copy code

---

## 🔑 ENVIRONMENT VARIABLES

**Backend `.env`**
DATABASE_URL=postgresql://fox:CityGangrel@localhost:5432/rpg_db
JWT_SECRET=supersecretkey
JWT_ALGORITHM=HS256

vbnet
Copy code

**Frontend `.env` (auto-updated by scripts)**
VITE_API_BASE_URL=https://<your-ngrok-domain>/api

yaml
Copy code

---

## 🔄 GIT BRANCHING RULES

| Branch         | Purpose |
|---------------|---------|
| `main`        | Stable, deployable code only |
| `dev`         | Active development |
| feature/*     | One branch per feature (ex: `feature/login`) |

✅ Always PR into `dev`  
✅ `main` gets updated **only when a full working milestone is reached**

---

## 🧪 TESTING REQUIREMENTS

Before pushing to `main`, ALL of this must pass:

| Test | Requirement |
|--------|------------|
| Backend curl test | `/`, `/status`, `/tos/current` respond 200 |
| Frontend test | Title screen loads, modal opens, no console errors |
| DB test | `SELECT * FROM terms_of_service;` returns data |
| Stop/start test | `stop_server.sh` closes ports, `start_server.sh` relaunches without errors |

---

## ✅ CODE STYLE RULES

| Rule | Standard |
|--------|---------|
| Backend Language | Python 3.13 |
| Backend Framework | FastAPI |
| ORM | SQLAlchemy |
| Frontend | React + Vite |
| Naming | `snake_case` for backend, `CamelCase` for frontend components |
| Logging | Everything backend writes to `/logs/server_events.log` |

---

## 🧱 DESIGN PHILOSOPHY

| Principle | Meaning |
|-----------|---------|
| **Fail-proof scripts** | No manual steps. No dangling processes. |
| **Portable builds** | Should run on ANY Linux system with 3 commands. |
| **Zero mystery** | No hidden magic — everything documented. |
| **Modular features** | Routes, models, and UI are self-contained. |
| **User-first UI** | Clean retro look, readable on all devices. |

---

## 🚀 FEATURE EXTENSION RULES

When adding ANY new feature:

1. Create a **schema**
2. Create a **database model**
3. Create a **route**
4. Create a **frontend UI**
5. Add test cases
6. Update:
   - `TODO.md`
   - `CHANGELOG.md`
   - `SCHEMA_CHANGELOG.md` (if DB changed)

---

## 📌 NEXT MAJOR FEATURES (AFTER MVP)

| Feature | Notes |
|----------|-------|
| Register/Login UI | Uses existing auth routes |
| User Dashboard | First post-login screen |
| Character Creator | Step-by-step form |
| WebSocket Chat | Real-time roleplay |
| Admin Panel | TOS update, user bans |

---

## ✅ STATUS
| System | State |
|---------|--------|
| Backend | ✅ Stable |
| Frontend Title Screen | ✅ Working |
| Database | ✅ Correct schema |
| TOS Endpoint | ✅ Functional |
| TOS Modal | ⚠️ Next task |
| Login/Register | ⏳ Pending |

---

**End of File**
