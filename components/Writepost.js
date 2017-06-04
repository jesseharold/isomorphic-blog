import Link from 'next/link'

export default class extends React.Component {
    render () {
        return (
        <form className="main-navigation">
            Post Title: 
            <br />
            <input type="text" size="60" />
            <br />
            <br />
            Post Body: 
            <textarea cols="60" rows="30" style={{display: "block"}} />
            <br />
            <input type="submit" />
        </form>
        );
    }
}