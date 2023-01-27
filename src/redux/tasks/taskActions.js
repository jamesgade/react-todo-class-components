import actionTypes from "../actionTypes"

export const addNewTask = (task) => {
    const id = Math.floor(Math.random() * 10000) + 1;
	const newTask = { id, ...task }
    return {
        type: actionTypes.ADD_NEW_TASK,
        payload: newTask
    }
}

export const toggleTaskReminder = (id) => {
    return {
        type: actionTypes.TOGGLE_TASK_REMINDER,
        payload: id
    }
}

export const deleteTask = (id) => {
    return {
        type: actionTypes.DELETE_TASK,
        payload: id
    }
}
