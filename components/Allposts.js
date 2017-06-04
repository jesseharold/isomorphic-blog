import Link from 'next/link'
import Onepost from "../components/Onepost.js"

export default class extends React.Component {
    render () {
        return (
            <div>
                <p style={{display: this.props.author ? "block" : "none"}}>filter by author = {this.props.author}</p>
                    <div className="posts-list">
                        <Onepost title="Hello Next.js" snippet={true} editable={this.props.editable}/>
                        <Onepost title="Learn Next.js is awesome" snippet={true} editable={this.props.editable}/>
                        <Onepost title="Deploy apps with Zeit" snippet={true} editable={this.props.editable}/>
                    </div>
            </div>
        );
    }
}