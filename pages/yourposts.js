import Allposts from "../components/Allposts.js"
import Layout from "../components/Layout.js"

export default () => (
  <Layout current="3">
    <h2>Your Posts</h2>
    <Allposts author="me" editable={true}/>
  </Layout>
)