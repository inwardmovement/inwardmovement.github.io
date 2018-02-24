[![Build Status](https://travis-ci.org/inwardmovement/inwardmovement.github.io.svg?branch=source)](https://travis-ci.org/inwardmovement/inwardmovement.github.io)  

(work in progress)  

---

Backend: [Hugo](https://gohugo.io/)  
Frontend: [Bootstrap](http://getbootstrap.com/)  
Hosting: [GitHub](https://pages.github.com/)  
Package manager: [npm](https://www.npmjs.com/)  
Task automation: [Gulp](https://gulpjs.com/)  
Build and deploy: [Travis CI](https://travis-ci.org)  

[RSS](https://inwardmovement.github.io/index.xml)  

---

Install Hugo, npm and Gulp, then:  
1. `npm install` to install dependencies
2. `hugo server -D` to serve locally using development assets

Optionally:
- `gulp pdf` to compile poems to pdf/[subsection].pdf
- `gulp` to build using production assets (used by Travis CI only)

---

en attente :  
- toc à partir de h3 ([voir](https://gohugo.io/content-management/toc/))
- ignorer `static/css` et `static/js` lors de la compilation en production ([voir](https://discourse.gohugo.io/t/solved-ignoring-theme-assets/3584/6?u=inwardmovement))
- conditionnement local/production autrement que `{{ if not .Site.BuildDrafts }}` `hugo server -D` ([voir](https://discourse.gohugo.io/t/distinguish-production-from-development/2855/2?u=inwardmovement))
