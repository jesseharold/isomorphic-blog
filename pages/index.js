import Allposts from "../components/Allposts.js"
import Layout from "../components/Layout.js"

export default () => (
  <Layout current="1">
    <h2>View All Posts</h2>
    <Allposts editable={false}/>
  </Layout>
)