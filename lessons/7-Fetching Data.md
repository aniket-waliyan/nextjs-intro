---
title: 'Data Fetching'
socialImage: images/next.svg
date: '2022-02-22'
tags:
  - nextjs
---

There are many ways to fetch data with Next.js. Depending on when you need the data and what you're doing with it, you have options.

Let's start with what you already know. You can continue to fetch the data client-side to react the same way you do now. 

> 👍🏾&nbsp;&nbsp;**tip**: Next.js injects `fetch` into your environment.

Now, for fetching data ahead time, we have three options.

`getStaticProps`

`getStaticPaths`

`getServerSideProps`


## Static data
All of these methods are for prerendering Pages only. You cannot use them in components or client-side data fetching. Let's talk about `getStaticProps` on a page.

```jsx
// /pages/index.js

const IndexPage = () => {// your jsx code here }
export default IndexPage

export async function getStaticProps(context) {
  return {
    props: {}
  }
}
```

By having your page export `getStaticProps`, Next.js will run this function at **build time**. Whatever your return as props will be passed into the exported page.

> 🕳 &nbsp;&nbsp;**deep dive**: The results of this function are saved into a JSON file and passed as props to the client's component at runtime.

This function and all other data fetching functions will only ever run on the server. The actual code won't even be bundled with the client code. That means you can do some exciting things here:

* file system work
* connect to a DB
* crawl a website? Yup.

The `context` object is useful when the page is dynamic. The context will contain the value of the params. This function is not run at runtime in the browser, so where do the params come in?

That's where `getStaticPaths` come in.


```jsx
// /pages/blog/:slug.js

const IndexPage = () => {// your jsx code here }
export default IndexPage

export async function getStaticPaths() {
  // get all the paths for your posts from an API
  // or file system
  const results = await fetch('/api/posts')
  const posts = await results.json()
  const paths = posts.map(post => ({params: {slug: 
  post.slug}}))
  /*
  [
    {params: {slug: 'get-started-with-node'}},
    {params: {slug: 'top-frameworks'}}
  ]
  */
  return {paths}
}

export async function getStaticProps({ params }) {
  const res = await fetch(`/api/post/${params.slug}`)
  const post = await res.json()
  return {
    props: {post}
  }
}
```

## Static paths
If a page has a dynamic path `[id].js` and uses `getStaticProps`, it must also use `getStaticPaths` to prerender all the pages at build time into HTML.

> 👍🏾&nbsp;&nbsp;**tip**: use `fallback: true` on your return object for `getStaticPaths` if you have a big site and don't want to statically prerender all items at once, and instead opt in to render some later at runtime via SSR.


## Server data
Lastly we have `getServerSideProps`. This will be called at runtime during every request. So unlike `getStaticProps`, you will have the runtime data like query params, HTTP headers, and the req and res objects from API handlers. 

```jsx
const IndexPage = () => {// your jsx code here }
export default IndexPage

export async function getServerSideProps() {
  const response = await fetch(`https://somedata.com`)
  const data = await response.json()

  return { props: { data } }
}
```
## When to use what

**Do you need data at runtime but don't need SSR?**
Use client-side data fetching.

**Do you need data at runtime but do need SSR?**
Use `getServerSideProps`

**Do you have pages that rely on data that is cachable and accessible at build time? Like from a CMS?**
Use `getStaticProps`

**Do you have the same as above but the pages have dynamic URL params?**
Use `getStaticProps` and `getStaticPaths`

## Fetch notes
We won't get into creating a UI to create notes, so let's just seed our in-memory DB with some notes.

```jsx
// src/data/data
const notes = new Array(15)
  .fill(1)
  .map((_, i) => ({
    id: Date.now() + i,
    title: `Note ${i}`
  }))
```

Let's fetch some notes from our API in our app now.
First, getting all the notes. Because the notes can be created and are dynamic, we can fetch them client-side or server-side render.

> ⚠️ &nbsp;&nbsp;**warning**: Don't use `getServerSideProps` unless absolutely necessary. Because it computes on every requests, it can be slow.

```jsx
// pages/note/index.js

export async function getServerSideProps() {
  const res = await fetch(`http://localhost:3000/api/note/`)
  const {data} = await res.json()
  return {
    props: {notes: data}
  }
}
```

We'll do the same for getting one note. Except, we'll redirect if the request fails.

```jsx
export async function getServerSideProps({params, req, res}) {
  const response = await fetch(`http://localhost:3000/api/note/${params.id}`)

  // so much power!
  if (!response.ok) {
    res.writeHead(302, { Location: '/notes' })
    res.end()
    return {props: {}}
  }

  const {data} = await response.json()
  
  if (data) {
    return {
      props: {note: data}
    }
  }
}
```

Next, we'll simulate a CMS and fetch the content for the landing page.

```jsx
import Link from 'next/link'

export default ({content}) => (
  <div style={{ height: `calc(100vh - 60px)`}}>
    <div style={{variant: 'containers.page', display: 'flex', alignItems: 'center', height: '100%'}}>
      <h1 style={{fontSize: 8, my: 0}}>{content.title}</h1>
    </div>
  </div> 
)

export async function getStaticProps() {
  return {
    props: {
      content: {
        title: 'Look at my note app'
      }
    }
  }
}
```

