import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";
import { Component } from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from "./components/About";
import Footer from "./components/Footer";
import { addTaskToDB, deleteTaskFormServer, fecthTasks, toggleReminderInSever } from './utils/tasksRequests';

class App extends Component {

	constructor(props) {
		super(props);

		this.state = {
			tasks: [],
			showAddForm: false
		}

		this.deleteTask = this.deleteTask.bind(this);
	}

	componentDidMount() {
		this.getTasks();
	}

	getTasks = async () => {
		const tasksFromDB = await fecthTasks();
		this.setState({
			tasks: tasksFromDB
		})
	}

	addTask = async (task) => {
		const data = await addTaskToDB(task);
		this.setState(prevState => ({
			tasks: [data, ...prevState.tasks]
		}))
	}

	deleteTask = async (id) => {
		await deleteTaskFormServer(id);
		this.setState((prevState) => ({
			tasks: prevState.tasks.filter(task => task.id !== id)
		}))
	}

	toggleReminder = async (id) => {
		const updatedTask = await toggleReminderInSever(id);
		this.setState((prevState) => ({
			tasks: prevState.tasks.map((task) => task.id === id ? { ...task, reminder: updatedTask.reminder } : task)
		}))
	}

	render() {
		return (
			<BrowserRouter>
				<div className="container">
					<Header
						title='CRUD-JS'
						showForm={() => this.setState({ showAddForm: !this.state.showAddForm })}
						showAddForm={this.state.showAddForm}
					/>
					<Routes>
						<Route path="/" exact element={
							<>
								{this.state.showAddForm && <AddTask onAdd={this.addTask} />}
								{this.state.tasks.length > 0
									? <Tasks
										onDelete={this.deleteTask}
										tasks={this.state.tasks}
										onToggle={this.toggleReminder}
									/>
									: 'No tasks found click "Add" to create a task'
								}
								<Footer goto="about" label="Go to About" />
							</>
						} />
						<Route path="about" element={<About />} />
						<Route path="*" element={
							<>
								<h4>Page not found</h4>
							</>
						} />
					</Routes>
				</div>
			</BrowserRouter>
		)
	}
}

export default App;
