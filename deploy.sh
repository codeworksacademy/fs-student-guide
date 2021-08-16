#!/usr/bin/env sh

# commit current src
git add .
git commit -m 'deploy'
git push

# build
npm run build

# navigate into the build output directory
cd src/.vuepress/dist

git init
git add .
git checkout -b gh-pages
git remote add origin https://github.com/codeworksacademy/fs-student-guide.git
git commit -m 'deploy'
git push --set-upstream -f origin gh-pages