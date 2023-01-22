import constants from './constants';

// get all tasks from server/db
export const fecthTasks = async () => {
    const response = await fetch(constants.TASKS_API_URL);
    const data = await response.json();
    return data
}

// get a specific task from server/db based on id
export const fetchTask = async (id) => {
    const response = await fetch(`${constants.TASKS_API_URL}/${id}`);
    const data = await response.json();
    return data
}

// post/add new task to server/db
export const addTaskToDB = async (task) => {
    const response = await fetch(constants.TASKS_API_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(task)
    })
    const data = await response.json();
    return data
}

// delete a task from server/db based on id
export const deleteTaskFormServer = async (id) => {
    await fetch(`${constants.TASKS_API_URL}/${id}`, {
        method: 'DELETE'
    })
}

// update task(reminder) in server/db based on id
export const toggleReminderInSever = async (id) => {
    const taskToToggle = await fetchTask(id);
    const updatedTask = {
        ...taskToToggle,
        reminder: !taskToToggle.reminder
    }
    const response = await fetch(`${constants.TASKS_API_URL}/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(updatedTask)
    })
    const data = await response.json();
    return data
}
