import productsList from '../products';
import { GET_USER, LOG_OUT } from './actions';


const defaultState = {
    user: null,
    products: productsList,
}
export const reducer = (state = defaultState, action) => {
    switch (action.type) {
        case GET_USER:
            return { ...state, user: action.payload }
        case LOG_OUT:
            return { ...state, user: action.payload}
        default:
            return state
    }
}

// action creator
export const getUserAction = (payload) => ({
    type: GET_USER,
    payload
})