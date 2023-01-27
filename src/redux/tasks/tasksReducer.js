import actionTypes from "../actionTypes";

const initialState = {
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
    ]
}

const tasksReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ADD_NEW_TASK:
            return {
                ...state,
                tasks: [action.payload, ...state.tasks]
            }
        case actionTypes.TOGGLE_TASK_REMINDER:
            return {
                ...state,
                tasks: state.tasks.map(task => task.id === action.payload ? {...task, reminder: !task.reminder} : task)
            }
        case actionTypes.DELETE_TASK:
            return {
                ...state,
                tasks: state.tasks.filter(task => task.id !== action.payload)
            }
        default: return state
    }
}

export default tasksReducer;
