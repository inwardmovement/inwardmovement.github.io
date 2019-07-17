[![Hugo version](https://img.shields.io/badge/Hugo-0.55.5-blue.svg)](https://gohugo.io/) 
[![Bootstrap version](https://img.shields.io/badge/Bootstrap-4.3.1-blue.svg)](http://getbootstrap.com/) 
[![Build status](https://travis-ci.org/inwardmovement/inwardmovement.github.io.svg)](https://travis-ci.org/inwardmovement/inwardmovement.github.io) 
[![W3C validator status](https://img.shields.io/badge/W3C-check-lightgrey.svg)](https://validator.w3.org/check?uri=https://inwardmovement.github.io/) 

---

Requirements:
- install [Hugo](https://gohugo.io/)
- install [Node.js](https://nodejs.org/en/)
- install PostCSS CLI globally: `npm i -g postcss-cli`
- install Autoprefixer globally: `npm i -g autoprefixer`
- install the dependencies: `npm i`

To develop locally, run `hugo server`.

Later improvements:
- integrate Gulp post-processing inside Hugo pipes when it becomes possible, see [5632](https://github.com/gohugoio/hugo/issues/5632).

Limitations:
- we cannot use Bootstrap with `npm` for now as Hugo cannot create a JS "ressource" (to include it to its pipeline) from a `node_module`. See [5832](https://github.com/gohugoio/hugo/issues/5832) and [5567](https://github.com/gohugoio/hugo/issues/5567).
