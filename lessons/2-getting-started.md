---
title: 'Getting Started'
metaTitle: 'Next.js page options and how they work'
metaDesc: 'How to use pages in Next.js exploring the options'
socialImage: images/next.svg
date: '2022-02-22'
tags:
  - nextjs
---

## The easy way
You can use `creat-next-app` to get started very quickly.

**npm**
```shell
npx create-next-app
```

**yarn**
```shell
yarn create next-app
```

This will install a boilerplate app and all of its dependencies. The project's `package.json` will have all the needed scripts ready for you as well.


## The still pretty easy way
We can set up a Next.js app from scratch. In the desired directory already initialized with git and a package.json:

**npm**
```shell
npm i next react react-dom --save
```

**yarn**
```shell
yarn add next react react-dom
```

Next, we need to add some helpful scripts to our `package.json`

```json
"scripts": {
  "dev": "next",
  "build": "next build",
  "start": "next start"
}
```

So what do these commands do?

`next`       Will start Next.js in dev mode with hot reloading.

`next build` Will build your project and ready it for production.

`next start` Will start your built app, used in production.


> 🧠&nbsp;&nbsp;**remember**: Next.js is a full-stack framework, by default, it needs to be hosted on a platform that supports Node.js