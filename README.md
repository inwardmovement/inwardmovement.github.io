[![Build Status](https://travis-ci.org/inwardmovement/inwardmovement.github.io.svg?branch=source)](https://travis-ci.org/inwardmovement/inwardmovement.github.io)  

(migrating to Hugo/GitHub, work in progress)  

---

Backend: [Hugo](https://gohugo.io/)  
Frontend: [Bootstrap](http://getbootstrap.com/)  
Hosting: [GitHub](https://pages.github.com/)  

---

todo:
- use environment variables to detect production environment rather than `{{ if not .Site.BuildDrafts }}` + `hugo server -D` ([see](https://discourse.gohugo.io/t/distinguish-production-from-development/2855/6?u=inwardmovement))

waiting for Hugo update:  
- exclude `h1` and `h2` from tables of content ([see](https://gohugo.io/content-management/toc/))
- ignore `static/css` and `static/js` on build ([see](https://discourse.gohugo.io/t/solved-ignoring-theme-assets/3584/6?u=inwardmovement))
