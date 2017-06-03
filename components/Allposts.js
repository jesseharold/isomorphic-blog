import React from 'react'
import Link from 'next/link'

export default class extends React.Component {
    render () {
        return (
            <div>
                <h3>all posts listed here</h3>
                <p style={{display: this.props.author ? "block" : "none"}}>filter by author = {this.props.author}</p>
            </div>
        );
    }
}