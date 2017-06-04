import Head from "next/head"
import Navigation from './Navigation'

const Layout = (props) => (
  <div className="site-container">
    <Head>
        <title>Blog</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="stylesheet" href="/static/styles.css" />
    </Head>
    <h1 className="site-title">Harry's Isomorphic Blog</h1>
    <Navigation current={props.current} />
    {props.children}
  </div>
)

export default Layout