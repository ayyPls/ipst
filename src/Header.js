import logo from './logo.svg';
import { Link } from 'react-router-dom';
export default function Header() {
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
                        <Link to="/about">О нас</Link>
                    </li>
                </ul>
            </div>
            <div className="menu-block--empty"></div>
        </div>
    );
}