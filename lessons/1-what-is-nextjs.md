---
title: 'What is Next.js'
metaTitle: 'Next.js page options and how they work'
metaDesc: 'How to use pages in Next.js exploring the options'
socialImage: images/next.svg
date: '2022-02-22'
tags:
  - nextjs
---

First, let's talk about React. I like to think of React as a view library. Alone, you couldn't quickly build a modern app with React, but still you need routing, a build system, a way to style things, performance, etc 😰.

Next.js is a complete full-stack framework for modern apps that was created by team at [Vercel](https://vercel.com). React is used as the view library of choice. So if you know React, then Next.js will be very familiar. When building an app from scratch with React, you have so many decisions to make and so many choices. Next.js has well thought out conventions baked in that make these decisions for you. So in that way, it's very opinionated. It's the conventions that are the secret sauce, though. These opinions come from years of experience building production-ready React apps. 

Here are some of the highlights that you get for free:

- Dev build system
- Production build system
- Prerendering
  - SSR
  - Build time
  - Static
- Routing
- API routes (*wow, really?*)

## What about create react app
Like Next.js, [create-react-app (CRA)]() has a bunch of opinions baked in too. However, CRA is more of a boilerplate created to help you get started with React faster. Because CRA is just React, you're still on the hook for something. Routing, Server Side Rendering, and an API, along with other things. 


## When to use Next.js
Here's the general opinion on when to use what when making a React app.

#### Do you only need a single page app?

Use Create React App

#### Do you need a static site, like a blog, that's also a SPA?

Use Next.js

#### Need SSR, an API, and all the above?

Use Next.js