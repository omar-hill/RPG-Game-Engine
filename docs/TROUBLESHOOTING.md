# ✅ RPG Game Engine — Troubleshooting Guide

# TROUBLESHOOTING GUIDE

This document provides fast fixes for common issues when running the RPG Game Engine (FastAPI + React + PostgreSQL + ngrok).

---

##  QUICK RESET (Fixes 90% of issues)

```bash
~/RPGgame/backend/stop_server.sh
~/RPGgame/backend/start_server.sh

Then test locally:

curl http://127.0.0.1:8000
curl http://127.0.0.1:8000/tos/current

If both respond, the backend is good.
Then open the PUBLIC ngrok URL printed by start_server.sh.

## FRONTEND SHOWS “Could not connect to backend”

Cause: VITE_API_BASE_URL is wrong or backend not running.

Fix:

cat ~/RPGgame/frontend/.env

Which should look like:

VITE_API_BASE_URL=https://YOUR-NGROK-SUBDOMAIN.ngrok-free.dev/api

If not, restart with:

~/RPGgame/backend/restart_server.sh


## NGROK SAYS “endpoint offline” OR “blocked request”

Cause: Tunnel expired or hostname not allowed by Vite.

Fix:

Restart everything:

~/RPGgame/backend/restart_server.sh


Open vite.config.js and ensure your ngrok domain is allowed:

server: {
  host: true,
  allowedHosts: ['localhost', 'YOUR-NGROK-SUBDOMAIN.ngrok-free.dev']
}


Save → restart services again.

## ERROR: Port 8000 or 5173 already in use

Cause: A crashed process is still running.

Fix:

sudo lsof -i :8000
sudo lsof -i :5173
kill -9 <PID>


Or simply run:

~/RPGgame/backend/stop_server.sh


Then start clean:

~/RPGgame/backend/start_server.sh

## ERROR: /tos/current returns “500 Internal Server Error”

Cause: Database mismatch (missing content column or no active TOS version).

Fix database:

psql -U postgres -d rpg_db


Inside SQL:

ALTER TABLE terms_of_service ADD COLUMN IF NOT EXISTS content TEXT;
UPDATE terms_of_service SET content = COALESCE(content, body) WHERE content IS NULL;

-- ensure one active TOS
UPDATE terms_of_service SET is_active = FALSE;
INSERT INTO terms_of_service (version, content, is_active)
VALUES (1, 'TERMS & CONDITIONS — Version 1 ...', TRUE)
ON CONFLICT (version) DO NOTHING;
\q


Then restart services.

## ERROR: “psycopg2” or DB connection failures

Cause: PostgreSQL not running or wrong password.

Test connection:

psql -U postgres -d rpg_db


If password bad, reset inside SQL:

ALTER USER postgres WITH PASSWORD 'Admin';
ALTER USER fox WITH PASSWORD 'CityGangrel';
\q

## CHECK LOGS (when unsure)
tail -n 200 ~/RPGgame/backend/logs/server_events.log

## FINAL ESCALATION

If all else fails:

~/RPGgame/backend/stop_server.sh
git pull
~/RPGgame/backend/start_server.sh


If still broken → restore DB backup or share logs.

👍 RESULT

After applying these steps, one of these URLs should ALWAYS work:

Backend local:

http://127.0.0.1:8000


Backend TOS test:

http://127.0.0.1:8000/tos/current


Public frontend:

https://YOUR-NGROK-SUBDOMAIN.ngrok-free.dev


