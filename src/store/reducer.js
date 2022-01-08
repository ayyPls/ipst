import productsList from '../products';
import { GET_AUTH_TOKEN, GET_USER, LOG_OUT } from './actions';


const defaultState = {
    user: null,
    token: '',
    products: productsList,
}
export const reducer = (state = defaultState, action) => {
    switch (action.type) {
        case GET_AUTH_TOKEN:
            return { ...state, token: action.payload }
        case GET_USER:
            return { ...state, user: action.payload }
        case LOG_OUT:
            return { ...state, user: action.payload, token: '' }
        default:
            return state
    }
}

// action creators
export const getAuthTokenAction = (payload) => ({
    type: GET_AUTH_TOKEN,
    payload
})
export const getUserAction = (payload) => ({
    type: GET_USER,
    payload
})