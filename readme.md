# Nuxt PWA TailwindCSS Starter

[![CircleCI Build Status](https://badgen.net/circleci/github/jefrydco/nuxt-pwa-tailwindcss-starter/master)](https://circleci.com/gh/jefrydco/nuxt-pwa-tailwindcss-starter)
[![Azure Build Status](https://dev.azure.com/jefrydco/jefrydco/_apis/build/status/jefrydco.nuxt-pwa-tailwindcss-starter)](https://dev.azure.com/jefrydco/jefrydco/_build?definitionId=1)
[![Coverage Status](https://badgen.net/codecov/c/github/jefrydco/nuxt-pwa-tailwindcss-starter/master)](https://codecov.io/gh/jefrydco/nuxt-pwa-tailwindcss-starter)

> Nuxt.js + PWA + TailwindCSS starter project

## Features

This starter project includes official Nuxt.js modules for best PWA project:

- [Http](https://github.com/nuxt/http)
- [Google-analytics](https://github.com/nuxt-community/analytics-module)
- [PWA](https://github.com/nuxt-community/pwa-module)
- [Sentry](https://github.com/nuxt-community/sentry-module)

It is also enriched with the best Vue's UI framework:

- [TailwindCSS](https://tailwindcss.com/)
- [VeeValidate](https://logaretm.github.io/vee-validate)

## Setup

```bash
# install dependencies
$ yarn # Or npm install

# serve with hot reload at localhost:3000
$ yarn dev

# build for production and launch server
$ yarn build
$ yarn start

# generate static project
$ yarn generate

# Run unit test
$ yarn test

# Run e2e test
$ yarn dev
$ yarn test:e2e
```

## Getting Started

Don't forget to change your sentry dsn and google analytics id in `.env.example` file.

For detailed explanation on how things work, check out the [Nuxt.js](https://github.com/nuxt/nuxt.js) and [TailwindCSS](https://tailwindcss.com/) documentation.

## License

[MIT License](./license.md)

Copyright (c) Jefry Dewangga (@jefrydco)
