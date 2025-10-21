# SHUTDOWN INSTRUCTIONS

## CLEAN STOP (recommended)
~/RPGgame/backend/stop_server.sh

## MANUAL STOP (if scripts ever fail)
pkill -f uvicorn
pkill -f node
pkill -f ngrok
