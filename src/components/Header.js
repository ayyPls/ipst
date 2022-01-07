import logo from '../logo.svg';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
export default function Header() {
    const user = useSelector(state => state.user)
    return (
        <div className="header">
            <div className="menu-logo">
                <img src={logo} className="App-logo" alt="logo" />
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
                    <div>
                        {user.firstName} {user.lastName}
                        {/* ссылка или onClick кнопка для logout'a */}
                    </div>
                    :
                    <Link to='/login'>Вход</Link>
                }

            </div>
        </div>
    );
}