---
title: 'Api Routes'
socialImage: images/next.svg
date: '2022-02-22'
tags:
  - nextjs
---

Next.js is a full-stack framework. Fullstack, as in it, has a server, not just for development, for rendering components on your server, but also for an API! 

Yes, you can legit ship an API right next to your App with no setup. Let's see how.


All we have to do is create an `api` folder in our `pages` director. The file names and paths work just like pages do. However, instead of building components in those files, we'll create API handlers.

```text
pages
  api
    hello.js
```