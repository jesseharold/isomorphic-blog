import React from 'react'
import Link from 'next/link'

export default class extends React.Component {
    render () {
        return (
        <ul className="main-navigation">
            <li className={this.props.current == "1" ? "active-nav" : "inactive-nav"}>
                <Link href="/">All Posts</Link>
            </li>
            <li className={this.props.current == "2" ? "active-nav" : "inactive-nav"}>
                <Link href="/write">Write a Post</Link>
            </li>
            <li className={this.props.current == "3" ? "active-nav" : "inactive-nav"}>
                <Link href="/yourposts">Edit Your Posts</Link>
            </li>
        </ul>
        );
    }
}