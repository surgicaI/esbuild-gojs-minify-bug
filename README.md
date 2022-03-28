Repository is created to reproduce the issue where minification using esbuild breaks gojs library
Steps to reproduce the issue:

1. Run `npm i` to install node modules.
2. Build the code without minification using `npm run build` command
3. Run `npm start` to start the dev server and view app on http://localhost:8000
4. Notice following diagram is rendered on the screen.
   ![GOJS diagram](https://github.com/surgicaI/esbuild-gojs-minify-bug/blob/main/img/diagram.png)
5. Run `npm run build:minify` to build code again but this time with minification.
6. Run `npm start` and view app on http://localhost:8000 and notice that the page is empty.
