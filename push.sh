#!/bin/sh

rm -rf ./dist &&
yarn build &&
git add . && 
git commit -m 'update' &&
git push