---
layout: page
title:  "How to build personal sites with Jekyll"
date:   2017-08-18 
categories: jekyll
comments: true

---

## Introduction

[Jekyll][jekyllrb] is a very cool static site generator, which is hosted by GitHub. You can host your personal blog or sites on [GitHub Page][gh-pages]. This personal website is built on Jekyll using [Bootstrap v3.3.6][Bootstrap]. Today, I would like to share my experience how I built this sites. To make it concise, I would skip those front-end stuffs, like HTML, CSS, JavaScipt. I suggest that you have a knowledge of those before building your sites.

## Set up

### Prepare stactic pages

The first things you need to do is design your own statics pages. You may have many folders, like css, html, js, and files, like .html and so on.

### Install Jekyll

Install Jekyll. If you are Linux/Unix/MacOS, install from [here][jk_install_linux]; If you are Windows, please install from [here][jk_install_win]. Windows version is strongly not recommended, because you may meet something unexpected problems. I have tried on my win10 and I spend a long time on solving the problems. Though, it still did not work. So, to save your time, you'd best do it on Linux or MacOS.

After finishing installation, validate it on terminal by typing ```jekyll -version```. You should get the version if you have installed it successfully.

## Deploy your sites with jekyll on Github Pages

On terminal, type ```jekyll new my-sites``` to get [minima][minima], which is the basic jekyll-theme and you can revise it later to customize your sites. Now you have a ```my-sites``` folder in your local directory. 

In your Github, new a repo and name it ```[your_github_name].github.io```. Then, ```git clone``` this repo or download it to your local directory; Copy and paste the stuffs from my-sites into the repo directory. Now you can try to deploy it on the github.

```
  $ git add .
  $ git commit -m "init commit"
  $ git push
```
Go to the setting of personal sites' repo, scroll down and you can see the Github Pages section. Choose master branch as Sourse and save it. Then you can visit your sites via http://[your_github_name].github.io.

### Convert your static sites to jekyll

Now you have your personal static pages, like HTML, CSS, etc. You can create a folder called *assets*. In this folder, you can put CSS in *css* folder; JavaScript in *js* folder; Images in *images*; Fonts in *fonts* folder. In the _layout folder, place your HTML files. For more information, you can refer [here][jekyll-structure] to see the directory structure of jekyll. 

To make the HTML more readable, you can set a default.html which will be a default template for every page. It can include navbar, head, footer, etc. Replace your main content div by ```{% raw  %}{{ conten }}{% endraw %}```. Then, the ```{% raw  %}{{content}}{% endraw %}``` will render page.html which will be introduced later. For reference, please check my code on [Github][my-sitesURL]. Additionally, create another file and name it page.html, and include the default layout at the beginning. Place default.html and page.html in the _layout folder.

```html
---

layout: default

---
{% raw  %}
<body>
<h1> Hi, I am {{site.title}</h1>}
{{content}} 
  <footer class="panel-footer">
    <div class="container">
    <section class="text-center"> 
      <span>Contact Me:</span> <span> {{ site.email }} </span> 
    </section>
      <div class="text-center" style="font-size: 0.9em; margin-top: 7px;">Copyright &copy; {{site.title}} 2017</div>
    </div>
  </footer> <!-- End of footer -->
</body>
{% endraw %} 

```
The page.html contains main-content div and you can set something special for different pages. For example, you can show an h1 title in the page except home page using embeded ruby. Then, include page layout in your HTML files like index.html, blog.html, etc, and ```{% raw %} {{content}} {% endraw %}``` will render the real content in index.html, blog.html or any other HTML files.
```html
---

layout: default

---
{% raw  %}
<div id="main-content" class="container">
  {% if page.title != 'Home' %}
    <section class="bg-dark">
      <div class="text-center"> 
        <h1> {{ page.title }} </h1>
      </div>
    </section>

  {% endif %}
  {{ content }}
</div>
{% endraw %} 
```
Finally, you can write your blog post! Create your markdown file in the _post folder. To know about kramdown syntax, Click [here][quick_refer] to get quick start.

## Customized your domain name

Github-pages allowed you to customize your domain name, you can get the instruction from [here][custom_domain]. I used [NameSilo][namesilo], just because it's very cheap. 

After you sign up and order your domain name, get into ```Manage My Domain``` to manage the DNS settings. In the DNS template, choose Github and Apply Template. Last but not least, create a file called CNAME in your [github_name].github.io directory. In the CNAME file, you should put your domain name. Take mine as an example, I put www.qiufengzhu.com in the CNAME, which you can find it [here][cname].


Now, your have built your personal sites with jekyll! 



## Reference
 [https://learn.cloudcannon.com/jekyll/converting-a-static-site-to-jekyll][refer]

[jekyllrb]:https://jekyllrb.com/
[Bootstrap]: http://blog.getbootstrap.com/2015/11/24/bootstrap-3-3-6-released/
[gh-pages]: https://pages.github.com/
[jk_install_linux]: https://jekyllrb.com/docs/installation/
[jk_install_win]: https://jekyllrb.com/docs/windows/
[minima]: https://github.com/jekyll/minima
[jekyll-structure]:https://jekyllrb.com/docs/structure/
[my-sitesURL]: https://github.com/diandians/diandians.github.io/blob/master/_layouts/default.html
[quick_refer]: https://kramdown.gettalong.org/quickref.html
[custom_domain]: https://help.github.com/articles/using-a-custom-domain-with-github-pages/
[namesilo]: https://www.namesilo.com/
[cname]: https://github.com/diandians/diandians.github.io/blob/master/CNAME
[refer]: https://learn.cloudcannon.com/jekyll/converting-a-static-site-to-jekyll/

{% if site.disqus.shortname %}
  {% include disqus_comments.html %}
{% endif %}

