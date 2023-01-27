import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";
import { Component } from "react";
import { Routes, Route } from 'react-router-dom';
import About from "./components/About";
import Footer from "./components/Footer";
import { connect } from "react-redux";
import { addNewTask, deleteTask, toggleTaskReminder } from './redux/tasks/taskActions';
import PropTypes from 'prop-types';

class App extends Component {

	constructor(props) {
		super(props);

		this.state = {
			showAddForm: false
		}
	}

	render() {

		const { tasks, addNewTask, toggleTaskReminder, deleteTask } = this.props;

		return (

			<div className="container">
				<Header
					title='CRUD-JS'
					showForm={() => this.setState({ showAddForm: !this.state.showAddForm })}
					showAddForm={this.state.showAddForm}
				/>
				<Routes>
					<Route path="/" element={
						<>
							{this.state.showAddForm && <AddTask onAdd={addNewTask} />}
							{tasks.length > 0
								? <Tasks
									onDelete={deleteTask}
									tasks={tasks}
									onToggle={toggleTaskReminder}
								/>
								: 'No tasks found click "Add" to create a task'
							}
							<Footer goto="/about" label="Go to About" />
						</>
					} />
					<Route path="/about" element={<About />} />
					<Route path="*" element={
						<>
							<h4>Page not found</h4>
						</>
					} />
				</Routes>
			</div>
		)
	}
}

const mapStateToProps = state => {
	return {
		tasks: state.tasks.tasks
	}
}

const mapDispatchToProps = dispatch => {
	return {
		addNewTask: (task) => dispatch(addNewTask(task)),
		toggleTaskReminder: (id) => dispatch(toggleTaskReminder(id)),
		deleteTask: (id) => dispatch(deleteTask(id))
	}
}

App.propTypes = {
	tasks: PropTypes.array.isRequired,
	addNewTask: PropTypes.func.isRequired,
	deleteTask: PropTypes.func.isRequired,
	toggleTaskReminder: PropTypes.func.isRequired
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(App);
