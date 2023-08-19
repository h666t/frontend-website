#!/bin/sh

rm -rf ./dist &&
yarn build &&
git add . && 
git commit -m 'update' &&
git push gitee master -f &&
git push origin master