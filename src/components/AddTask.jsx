import { Component } from "react";

class AddTask extends Component {

    constructor(props) {
        super(props)

        this.state = {
            description: '',
            date: '',
            reminder: false
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        const name = event.target.name

        this.setState({
            ...this.state,
            [name]: event.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();

        if(this.state.description === '' || this.state.date === ''){
            alert('Task cannot be empty');
            return
        }

        this.props.onAdd(this.state);

        this.setState({
            description: '',
            date: '',
            reminder: false
        })
    }

    render() {
        return (
            <form className="add-form" onSubmit={this.handleSubmit}>
                <div className="form-control">
                    <label>Task</label>
                    <input
                        type="text"
                        name="description"
                        placeholder="Task description"
                        value={this.state.description}
                        onChange={this.handleChange}
                    />
                </div>
                <div className="form-control">
                    <label>Date & Time</label>
                    <input
                        type="text"
                        name="date"
                        placeholder="Schedule a date"
                        value={this.state.date}
                        onChange={this.handleChange}
                    />
                </div>
                <div className="form-control form-control-check">
                    <label>Set Reminder</label>
                    <input
                        type="checkbox"
                        name="reminder"
                        checked={this.state.reminder}
                        onChange={() => this.setState({reminder: !this.state.reminder})}
                    />
                </div>
                <input
                    type="submit"
                    value="Create Task"
                    className="btn btn-block"
                />
            </form>
        )
    }
}

export default AddTask;
