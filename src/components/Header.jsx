import { Component } from "react";
import PropTypes from 'prop-types';
import Button from "./Button";

class Header extends Component {

    render() {
        return (
            <header className="header">
                <h1>{this.props.title}</h1>
                <Button
                    text={`${this.props.showAddForm ? 'Close' : 'Add'}`}
                    color={`${this.props.showAddForm ? 'red' : 'green'}`}
                    onClick={this.props.showForm}
                />
            </header>
        )
    }
}

Header.defaultProps = {
    title: 'ReactJS CC'
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
}

export default Header;
