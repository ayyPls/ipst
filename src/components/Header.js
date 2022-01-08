import logo from '../logo.svg';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { LOG_OUT } from '../store/actions';
import { Image, LogoutButton, LoginMenu } from '../styles';

export default function Header() {
    const user = useSelector(state => state.user)
    const dispatch = useDispatch()

    const logout = (event) => {
        dispatch({
            type: LOG_OUT, payload: null
        })
        event.preventDefault();
    }
    return (
        <div className="header">
            <div className="menu-logo">
                <Image src={logo} height="8vmin"></Image>
            </div>
            <div className="menu">
                <ul>
                    <li>
                        <Link to="/">Магазин</Link>
                    </li>
                    <li>
                        <Link to="/about">О бренде</Link>
                    </li>
                </ul>
            </div>
            <div className="menu-block--auth">
                {user ?
                    // <div>
                    <LoginMenu>
                        {user.firstName} {user.lastName}
                        <LogoutButton onClick={event => logout(event)} > <Image width="1vw" src="logout.png" /> </LogoutButton>
                    </LoginMenu>
                    :
                    <Link to='/login'>Вход</Link>
                }

            </div>
        </div>
    );
}