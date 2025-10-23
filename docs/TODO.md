# RPG GAME ENGINE — TODO LIST

---

## 🧠 PHASE 1: BACKEND (FastAPI / PostgreSQL)
**Goal:** Complete backend API stability and ensure DB integration is consistent across all features.

- [ ] Confirm `/tos/current` endpoint works with content column (✅ verified once already)
- [ ] Add `/register` endpoint validation and proper password hashing
- [ ] Add `/login` endpoint and JWT authentication
- [ ] Create `/users/profile` route to fetch user info securely
- [ ] Implement error logging middleware (`logs/server.log`)
- [ ] Add auto DB migration scripts (`alembic` integration optional)
- [ ] Review `TermsOfService` model – confirm schema consistency
- [ ] Add `/tos/update` route (admin-only)
- [ ] Add `/status` route to confirm backend health
- [ ] Test all endpoints with `curl` + Postman collection

---

## 🖥️ PHASE 2: FRONTEND (React + Vite)
**Goal:** Complete UI functionality for all user interactions.

- [ ] Fix Terms of Service popup modal (scrollable, 60% height)
- [ ] Add `[Close]` button anchored at bottom of modal
- [ ] Ensure modal uses `fetch("/tos/current")` from backend
- [ ] Confirm responsive layout matches **Start Screen.png**
- [ ] Add Login screen (username + password)
- [ ] Add Registration screen
- [ ] Add Dashboard placeholder (post-login)
- [ ] Create reusable modal component for alerts and confirmations
- [ ] Verify frontend auto-updates `.env` with ngrok domain
- [ ] Add favicon + metadata for deployment polish

---

## 🗄️ PHASE 3: DATABASE (PostgreSQL)
**Goal:** Ensure database resilience, security, and data integrity.

- [ ] Verify DB credentials in `.env`  
      - postgres user: `Admin`  
      - fox user: `CityGangrel`
- [ ] Document all SQL schema changes in `/docs/SCHEMA_CHANGELOG.md`
- [ ] Create seed data script for initial admin and TOS
- [ ] Add rollback SQL for each schema change
- [ ] Enable daily dump/backup script
- [ ] Add index for fast search on usernames
- [ ] Document migration steps for version upgrades

---

## 📘 PHASE 4: DOCUMENTATION (GitHub Docs)
**Goal:** Full transparency and repeatable deployment process.

- [ ] Verify all five docs exist:
  - [x] `README.md`
  - [x] `SETUP_GUIDE.md`
  - [x] `TROUBLESHOOTING.md`
  - [ ] `TODO.md`
  - [ ] `DEVELOPER_NOTES.md` *(next file to generate)*
- [ ] Ensure all guides use exact commands, not summaries
- [ ] Include version control notes (branching workflow)
- [ ] Add contribution rules (`CONTRIBUTING.md`)
- [ ] Include `CHANGELOG.md` for updates

---

## ⚙️ PHASE 5: AUTOMATION / DEVOPS
**Goal:** Eliminate manual restart and setup waste.

- [ ] Combine backend + frontend start scripts into one file if not done (`start_all.sh`)
- [ ] Auto-detect and kill ports 8000 + 5173 before restart
- [ ] Add version check for Python / Node / PostgreSQL
- [ ] Add `check_env.sh` to confirm environment readiness
- [ ] Create `update.sh` for pulling latest Git commits safely

---

## 🧩 PHASE 6: QUALITY & TESTING
**Goal:** Verify every function and endpoint before deployment.

- [ ] Unit tests for all API routes
- [ ] UI functional test: ToS modal opens and scrolls
- [ ] Database connectivity test (`pytest` or manual SQL)
- [ ] Confirm no open ports remain after stop scripts
- [ ] Validate cross-browser (Chrome / Firefox)
- [ ] End-to-end test: Register → Login → View ToS
- [ ] Confirm startup logs correctly in `server_events.log`

---

## 🧾 PHASE 7: DEPLOYMENT / RELEASE
**Goal:** Make production-ready version under `main` branch.

- [ ] Tag initial release: `v1.0-beta`
- [ ] Push documentation to GitHub
- [ ] Test GitHub clone on clean system
- [ ] Verify ngrok tunnel publicly accessible
- [ ] Add deployment instructions for self-hosting (optional)
- [ ] Monitor performance + DB load for optimization

---

## 🔒 PHASE 8: FUTURE ROADMAP (NEXT SPRINT)
**Goal:** Plan for post-MVP improvements.

- [ ] Implement character creation system
- [ ] Create save/load system (user profiles)
- [ ] Add session-based world data
- [ ] Connect with AI-driven NPC dialogue system
- [ ] Extend API for mobile access
- [ ] Add WebSocket chat and presence tracking
- [ ] Integrate game ruleset JSON parser
- [ ] Expand DB schema with player stats and inventory

---

### ✅ STATUS SUMMARY
- Backend stable ✅  
- Database schema fixed ✅  
- ToS endpoint functional ✅  
- Modal pending ⚠️  
- Documentation 80% complete 🟡  
- Deployment clean, but automation improvements suggested 🧰  

---

**Next file:** `DEVELOPER_NOTES.md`
(Contains detailed explanation of folder structure, coding style, versioning, and branch naming.)

---
