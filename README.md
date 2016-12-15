# Yarn / NPM boilerplate

Multipurpose lightweight Yarn/NPM boilerplate with integrated Babel, cssnano, cssnext, Pug and BrowserSync support.

To install [Yarn](https://yarnpkg.com/) (or NPM) using [HomeBrew](http://brew.sh/):
```bash
brew update
brew install yarn
```
Install all dependencies:
```node
yarn install
```
You now have the following options:

Command | Output
--- | ---
yarn start| Starts browser-sync and watches changes in styling, javascript and HTML
yarn start:tunnel | Same as yarn start, but sets up a public tunnel
yarn lint| Lints styling and javascript using Stylelint and ESLint
yarn run markup|  Outputs HTML from [Pug](https://github.com/pugjs/pug) files
yarn run scripts| Outputs ES5-compliant javascript using a combination of Browserify and Babel
yarn run styles|  Outputs styles using PostCSS, cssnext and cssnano
yarn watch|  Watch for changes in javascript, styling or pug
yarn build|  Clears dist directory and builds the app using above
