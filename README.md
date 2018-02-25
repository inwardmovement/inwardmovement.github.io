[![Build Status](https://travis-ci.org/inwardmovement/inwardmovement.github.io.svg?branch=source)](https://travis-ci.org/inwardmovement/inwardmovement.github.io)  

(work in progress)  

---

Backend: [Hugo](https://gohugo.io/)  
Frontend: [Bootstrap](http://getbootstrap.com/)  
Hosting: [GitHub](https://pages.github.com/)  

[RSS](https://inwardmovement.github.io/index.xml)  

---

`hugo server -D` to serve locally using development assets

---

en attente :  
- toc à partir de h3 ([voir](https://gohugo.io/content-management/toc/))
- ignorer `static/css` et `static/js` lors de la compilation en production ([voir](https://discourse.gohugo.io/t/solved-ignoring-theme-assets/3584/6?u=inwardmovement))
- conditionnement local/production autrement que `{{ if not .Site.BuildDrafts }}` `hugo server -D` ([voir](https://discourse.gohugo.io/t/distinguish-production-from-development/2855/2?u=inwardmovement))
