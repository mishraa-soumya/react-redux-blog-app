const category = (state, action) => {
    switch (action.type) {
        case 'ADD_CATEGORY':
            return {
                id: action.id,
                text: action.text
            }
        default:
            return state
    }
}

const categories = (state = [], action) => {
    switch (action.type) {
        case 'ADD_CATEGORY':
            return [
                ...state,
                category({}, action)
            ]
        default:
            return state
    }
}

export default categories