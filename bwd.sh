yarn build;
yarn deploy;
git add .;
git commit -m "$(date '+%y%m%d %H:%M')";
git push origin main
