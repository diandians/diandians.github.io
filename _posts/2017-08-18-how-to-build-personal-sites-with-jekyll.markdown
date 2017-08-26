---
layout: page
title:  "How to convert your personal sites to Jekyll"
date:   2017-08-18 
categories: jekyll

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

### 

[jekyllrb]:https://jekyllrb.com/
[Bootstrap]: http://blog.getbootstrap.com/2015/11/24/bootstrap-3-3-6-released/
[gh-pages]: https://pages.github.com/
[jk_install_linux]: https://jekyllrb.com/docs/installation/
[jk_install_win]: https://jekyllrb.com/docs/windows/
[minima]: https://github.com/jekyll/minima