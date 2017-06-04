import Layout from "../components/Layout.js"
import Onepost from "../components/Onepost.js"

export default (props) => (
  <Layout current="1">
    <h2>View One Post</h2>
    <Onepost title={props.url.query.title} snippet={false}/>
  </Layout>
)