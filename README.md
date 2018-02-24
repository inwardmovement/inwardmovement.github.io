(work in progress)  

---

Backend: [Hugo](https://gohugo.io/)  
Frontend: [Bootstrap](http://getbootstrap.com/)  
Hosting: [GitHub](https://pages.github.com/)  
Tasks automation: [Gulp](https://gulpjs.com/)  
Build and deploy: [Travis CI](https://travis-ci.org)  

[RSS](https://inwardmovement.github.io/index.xml)  

---

- `npm install` to install dependencies
- `gulp` to build using production assets (used by Travis CI only)
- `gulp serve` to serve locally using development assets
- `gulp pdf` to compile poems to pdf in their respective subsections

---

en attente :  
- toc à partir de h3 ([voir](https://gohugo.io/content-management/toc/))
- ignorer `static/css` et `static/js` lors de la compilation en production ([voir](https://discourse.gohugo.io/t/solved-ignoring-theme-assets/3584/6?u=inwardmovement))
- conditionnement local/production autrement que `{{ if not .Site.BuildDrafts }}` ([voir](https://discourse.gohugo.io/t/distinguish-production-from-development/2855/2?u=inwardmovement))
