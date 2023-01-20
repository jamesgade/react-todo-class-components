import { Component } from "react";
import { Link } from "react-router-dom";

class Footer extends Component {
    render() {
        return (
            <footer>
                <p>React Class Components & JavaScript</p>
                <Link to={`${this.props.goto}`}>{this.props.label}</Link>
            </footer>
        )
    }
}

export default Footer;
