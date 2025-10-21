# STARTUP INSTRUCTIONS

## 1) Open TERMINAL #1 — start database (PostgreSQL)
(no action needed if already running)

## 2) Open TERMINAL #2 — start backend
cd ~/RPGgame/backend
source venv/bin/activate
uvicorn app.main:app --host 0.0.0.0 --port 8000 --reload

## 3) Open TERMINAL #3 — start frontend
cd ~/RPGgame/frontend
npm run dev

## 4) Open TERMINAL #4 — start ngrok tunnel
ngrok http 5173
