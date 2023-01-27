import { Component } from "react";
import PropTypes from 'prop-types';
import Button from "./Button";
import withRouter from "../hoc/withRouter";

class Header extends Component {

    render() {
        const { router } = this.props;
        return (
            <header className="header">
                <h1>{this.props.title}</h1>
                {router.location.pathname !== '/about' && <Button
                    text={`${this.props.showAddForm ? 'Close' : 'Add'}`}
                    color={`${this.props.showAddForm ? 'red' : 'green'}`}
                    onClick={this.props.showForm}
                />}
            </header>
        )
    }
}

Header.defaultProps = {
    title: 'ReactJS CC'
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
    showForm: PropTypes.func.isRequired,
    showAddForm: PropTypes.bool.isRequired
}

export default withRouter(Header);
