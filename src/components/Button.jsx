import { Component } from "react";
import PropTypes from 'prop-types';

class Button extends Component {
    render() {
        return <button onClick={this.props.onClick} style={{backgroundColor: this.props.color}} className="btn">{this.props.text}</button>
    }
}

Button.defaultProps = {
    text: 'click',
    color: 'blue'
}

Button.propTypes = {
    text: PropTypes.string,
    color: PropTypes.string,
    onClick: PropTypes.func.isRequired
}

export default Button;
