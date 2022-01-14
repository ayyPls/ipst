import { getUserAction } from "../store/reducer"
import axios from "axios"

export const getUserData = (token) => {
    return function (dispatch) {
        axios.get('https://api.englishpatient.org/users/me',
            {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': token
                }
            }).then(response => dispatch(getUserAction(response.data)))
    }
}