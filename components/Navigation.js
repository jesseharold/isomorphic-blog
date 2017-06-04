import Link from 'next/link'

export default class extends React.Component {
    render () {
        return (
        <ul className="main-navigation">
            <li className={this.props.current == "1" ? "active-nav" : "inactive-nav"}>
                <Link href="/"><a>All Posts</a></Link>
            </li>
            <li className={this.props.current == "2" ? "active-nav" : "inactive-nav"}>
                <Link href="/write"><a>New Post</a></Link>
            </li>
            <li className={this.props.current == "3" ? "active-nav" : "inactive-nav"}>
                <Link href="/yourposts"><a>Edit Posts</a></Link>
            </li>
        </ul>
        );
    }
}