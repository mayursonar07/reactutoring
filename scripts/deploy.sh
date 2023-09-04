#!/bin/bash
export PATH=$PATH:/home/ubuntu/.nvm/versions/node/v20.5.0/bin

cd reactutoring
git pull origin main
cd backend
pm2 kill
pm2 start server.js
