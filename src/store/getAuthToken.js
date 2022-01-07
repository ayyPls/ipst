import { getUserData } from "./getUserData"
import { getAuthTokenAction } from "./reducer"
import axios from "axios"

export const getAuthToken = (email, password) => {
    return function (dispatch) {
        axios.post('https://api.englishpatient.org/login',
            {
                "email": email,
                "password": password
            },
            {
                headers: { 'Content-Type': 'application/json' }
            }).then(
                response => {
                    dispatch(getAuthTokenAction(response.data))
                    dispatch(getUserData(response.data.token))
                }
            )
    }
}