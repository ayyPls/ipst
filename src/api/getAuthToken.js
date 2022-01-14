import { getUserData } from "./getUserData"
import { api } from "."

export const getAuthToken = (email, password) => {
    return function (dispatch) {
        api.post('/login', {
            'email': email,
            'password': password
        }).then(
            response => {
                localStorage.setItem('token', response.data.token)
                dispatch(getUserData(response.data.token))
            }
        )
    }
}