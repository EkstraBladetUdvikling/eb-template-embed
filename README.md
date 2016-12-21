# EB Embed Template 2017

This is the new template for smaller productions like calculators in EB.dk.

To install [Yarn](https://yarnpkg.com/) (or NPM) using [HomeBrew](http://brew.sh/):
```bash
brew update
brew install yarn
```
Install all dependencies and suggested editorconfig:
```node
yarn install
```
You now have the following options:

Command           | Output
---               | ---
yarn start        | Starts browser-sync and watches changes in styling, javascript and HTML
yarn start:tunnel | Same as yarn start, but sets up a public tunnel
yarn lint         | Lints styling and javascript using [Stylelint](http://stylelint.io/) and [ESLint](http://eslint.org/)
yarn run markup   | Outputs HTML from [Pug](https://github.com/pugjs/pug) files
yarn run scripts  | Outputs ES5-compliant javascript using a combination of Browserify and Babel
yarn run styles   | Outputs styles using [PostCSS](http://postcss.org/),[cssnano](http://cssnano.co/) and [cssnext](http://cssnext.io/)
yarn watch        | Watch for changes in javascript, styling or pug
yarn build        | Clears dist directory and builds the app using above
