import { Component } from "react";
import PropTypes from 'prop-types';
import { FaTimes } from 'react-icons/fa'

class Task extends Component {
    render() {
        return (
            <div
                className={`task ${this.props.task.reminder ? 'reminder' : ''}`}
                onDoubleClick={() => this.props.onToggle(this.props.task.id)}
            >
                <h3>
                    {this.props.task.description}
                    <FaTimes onClick={() => this.props.onDelete(this.props.task.id)} style={{ color: 'red' }} />
                </h3>
                <p>{this.props.task.date}</p>
            </div>
        )
    }
}

Task.propTypes = {
    task: PropTypes.any,
    onDelete: PropTypes.func
}

export default Task;
