import React from 'react'
import Link from 'next/link'

export default class extends React.Component {
    render () {
        return (
            <div className="preview">
                <h3>name of post</h3>
                <div className="post-author">author of post</div>
                <div className="post-date">date authored</div>
                <p className="post-text">truncated text of post</p>
                <Link className="post-link">link to full post</Link>
            </div>
        );
    }
}