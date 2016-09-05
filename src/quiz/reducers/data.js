import { data } from '../data_config'

const initialState = {
  data: data
};


export default function userstate(state = initialState, action) {
    switch (action.type) {
        case 'SELECT_QUESTION':
            return {...state, selectQuestion:  action.payload}
        default:
            return state;
    }
}
