import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";
import { Component } from "react";

class App extends Component {

	constructor(props) {
		super(props);

		this.state = {
			tasks: [
				{
					id: 1,
					description: 'Dentist Appointment',
					date: 'Jan 25th at 11:30AM',
					reminder: true
				},
				{
					id: 2,
					description: 'Anniversery',
					date: 'Jan 22th at 1:30AM',
					reminder: false
				},
				{
					id: 3,
					description: 'Republic Day',
					date: 'Jan 26th',
					reminder: true
				},
			],
			showAddForm: false
		}

		this.deleteTask = this.deleteTask.bind(this);
	}

	addTask = (task) => {
		const id = Math.floor(Math.random() * 10000) + 1;
		const newTask = { id, ...task }
		this.setState((prevState) => ({
			tasks: [newTask, ...prevState.tasks]
		}))
	}

	deleteTask = (id) => {
		this.setState((prevState) => ({
			tasks: prevState.tasks.filter(task => task.id !== id)
		}))
	}

	toggleReminder = (id) => {
		this.setState((prevState) => ({
			tasks: prevState.tasks.map(task => task.id === id ? { ...task, reminder: !task.reminder } : task)
		}))
	}

	render() {
		return (
			<div className="container">
				<Header
					title='CRUD - ReactJS:CC'
					showForm={() => this.setState({ showAddForm: !this.state.showAddForm })}
					showAddForm={this.state.showAddForm}
				/>
				{this.state.showAddForm && <AddTask onAdd={this.addTask} />}
				{this.state.tasks.length > 0
					? <Tasks
						onDelete={this.deleteTask}
						tasks={this.state.tasks}
						onToggle={this.toggleReminder}
					/>
					: 'No tasks found click "Add" to create a task'
				}
			</div>
		)
	}
}

export default App;
