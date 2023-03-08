#!/bin/sh
sudo pm2 stop 1 &&
git pull -f &&
sudo pm2 restart 1 &&
sudo pm2 logs