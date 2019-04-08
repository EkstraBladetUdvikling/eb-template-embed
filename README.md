# EB Embed Template 2018

This is the template for embeddable (iframe) productions for EB.dk.

To install [Yarn](https://yarnpkg.com/) (or NPM) using [HomeBrew](http://brew.sh/):

```bash
brew update
brew install yarn
```

Install all dependencies:

```node
git clone git@github.com:EkstraBladetUdvikling/eb-template-embed.git
yarn install
```

You now have the following options:

| Command               | Output                                                                                                  |
| --------------------- | ------------------------------------------------------------------------------------------------------- |
| yarn start            | Starts [ParcelJS](https://parceljs.org/) serving CSS and Typescript (from index.html) on localhost:3000 |
| yarn run lint:scripts | Lints javascript using [TSLint](https://palantir.github.io/tslint/)                                     |
| yarn run prettier     | Clear up all files using [Prettier](https://prettier.io/)
| yarn run dist         | Clears dist directory and builds the app using [ParcelJS](https://parceljs.org/)                        |