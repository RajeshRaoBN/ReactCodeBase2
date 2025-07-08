> npm init -y

> npm i typescript --save-dev

> npx tsc --init

now in package.json

"scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "dev": "tsc && node index.js"
  },