import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAuthToken } from "../store/getAuthToken";

export default function LoginForm() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const dispatch = useDispatch()
    const submitLogin = (event) => {
        dispatch(getAuthToken(username, password))
        event.preventDefault();
    }
    return (
        <div className="container">
            <div className="left-block">
                <h2>Вход</h2>
                <div>
                    <form>
                        <label htmlFor="login">E-mail</label>
                        <input id="login" type="text" value={username} onChange={(event) => setUsername(event.target.value)}></input>
                        <label>Пароль</label>
                        <input id="password" type="password" value={password} onChange={(event) => setPassword(event.target.value)}></input>
                        {useSelector(state => state.token.error) ? <span className="error">wrong email or password</span> : ''}
                        <div className="primary-button">
                            <button onClick={(event) => submitLogin(event)}>Войти</button>
                        </div>
                    </form>
                </div>
            </div>
            <div className="right-block">
                <img src="/images/about-us.jpg" id="square-image" />
            </div>
        </div>
    )
}
