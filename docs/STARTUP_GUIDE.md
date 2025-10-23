# ✅ RPG Game Engine — Startup Guide

This guide explains how to start, stop, and restart the full system:  
**Backend (FastAPI), Frontend (Vite/React), ngrok tunnel, and PostgreSQL.**  
No guessing. No external research. Just follow the steps.

---

## 📌 1. Requirements

Installed on the Linux host:

| Component | Version |
|-----------|---------|
| Python    | 3.13+   |
| Node.js   | 18+     |
| PostgreSQL| 14+     |
| ngrok     | Latest  |

---

## 📌 2. PostgreSQL Credentials

Default database and logins:

| Role | Username | Password |
|--------|-----------|-----------|
| Admin | `postgres` | `Admin` |
| Game User | `fox` | `CityGangrel` |
| Database | `rpg_db` | *(no DB password, user passwords above apply)* |

---

## 📌 3. Required Terminal Windows

Always operate with **three windows only**:

| Terminal | Purpose |
|----------|---------|
| #1 | PostgreSQL (DB stays open) |
| #2 | Backend (Uvicorn) |
| #3 | Frontend + ngrok (Vite & tunnel) |

---

## 📌 4. Start the Database (Terminal #1)

sudo -u postgres psql
\c rpg_db

## 📌 5. Start Backend (Terminal #2)

cd ~/RPGgame/backend
source venv/bin/activate
uvicorn app.main:app --host 0.0.0.0 --port 8000 --reload

## 📌 6. Scripted Commands

./start_server.sh 

./stop_server.sh

./restart_server.sh

## 📌 7. Notes

Frontend always runs via ngrok (for testers)

Backend stays local for safety (for now)

Terms of Service is served at:
http://localhost:8000/tos/current

Title screen scaling is dynamic



