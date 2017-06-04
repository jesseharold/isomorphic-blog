import Link from 'next/link'

const PostLink = (props) => (
    <Link as={`/p/${props.slug}`} href={`/post?title=${props.title}`}>
      <a className="post-action-link" style={{display: props.show ? "inline-block" : "none"}}>{props.text}</a>
    </Link>
)

const PostEditLink = (props) => (
    <Link href={`/write?title=${props.title}`}>
      <a className="post-edit-button" style={{display: props.show ? "block" : "none"}}>{props.text}</a>
    </Link>
)

export default class extends React.Component {
    render () {
        return (
            <div className="full-post">
                <h3 className="post-title">{this.props.title}</h3>
                <div className="post-author">by author of post</div>
                <div className="post-date">date authored</div>
                <p className="post-text" style={{display: this.props.snippet ? "none" : "block"}}>full text of post</p>
                <p className="post-text post-snippet" style={{display: this.props.snippet ? "block" : "none"}}>truncated text of post &nbsp;
                    <PostLink title={this.props.title} slug={this.props.slug} text="View Full Post ..." show={!this.props.editable}/>
                    <PostEditLink title={this.props.title} text="Edit Post" show={this.props.editable}/>
                </p>
            </div>
        );
    }
}