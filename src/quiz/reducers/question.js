const initialState = {
    result: '',
    currentQuestion: 1,
    selectQuestion: ''
};

export default function userstate(state = initialState, action) {
    switch (action.type) {
        case 'NEXT_QUESTION':
            return {...state, currentQuestion: action.payload }
        case 'SELECT_QUESTION':
            return {...state, selectQuestion:  action.payload }
        default:
            return state;
    }
}
