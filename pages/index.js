import React from "react"
import Head from "next/head"
import Navigation from "./../components/Navigation.js"
import Allposts from "./../components/Allposts.js"

// Export an anonymous arrow function
// which returns the template
export default () => (
  <div className="site-container">
    <Head>
        <title>Blog</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="stylesheet" href="/static/styles.css" />
    </Head>
    <Navigation current="1" />
    <h1>Harry's Isomorphic Blog</h1>
    <h2>View All Posts</h2>
    <Allposts />
  </div>
)