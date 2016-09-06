const initialState = {
    result: '',
    currentQuestion: 1,
    selectQuestion: '',
    finish: ''
};

export default function userstate(state = initialState, action) {
    switch (action.type) {
        case 'NEXT_QUESTION':
            return {...state, currentQuestion: action.payload }
        case 'SELECT_QUESTION':
            return {...state, selectQuestion:  action.payload }
        case 'SELECT_SENSE':
        	return {...state, result:  action.payload }
        case 'RESULT_SENSE':
            return {...state, finish:  action.payload }
        case 'RESTART_QUIZ':
            return initialState;
        default:
            return state;
    }
}
