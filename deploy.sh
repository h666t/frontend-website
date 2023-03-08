#!/bin/sh
rm -rf ./dist &&
npm install &&
yarn build &&
cd dist &&
git init . &&
git remote add origin git@gitee.com:huang-haotian/frontend-website.git &&
git add . &&
git commit -m 'update' &&
git push --set-upstream origin master -f &&
cd ..

