import { getUserAction } from "../store/reducer"
import { api } from "."
export const getUserData = (token) => {
    return function (dispatch) {
        api.get('/users/me').then(response => {
            dispatch(getUserAction(response.data))
        })
    }
}