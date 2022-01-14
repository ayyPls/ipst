import logo from '../logo.svg';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { LOG_OUT } from '../store/actions';
import { Image, LogoutButton, LoginMenu, HeaderBlock, HeaderContainer, MenuItem } from '../styles/styled-components';

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
        <HeaderContainer>
            <HeaderBlock>
                <Image src={logo} height="8vmin"></Image>
            </HeaderBlock>
            <HeaderBlock flexGrow='1'>
                <ul>
                    <MenuItem>
                        <Link to="/">Магазин</Link>
                    </MenuItem>
                    <MenuItem>
                        <Link to="/about">О бренде</Link>
                    </MenuItem>
                </ul>
            </HeaderBlock>
            <HeaderBlock flexGrow='0.1' uppercase fontSize='2vh'>
                {user ?
                    <LoginMenu>
                        {user.firstName} {user.lastName}
                        <LogoutButton onClick={event => logout(event)} > <Image height="2vh" src="/logout.png" /> </LogoutButton>
                    </LoginMenu>
                    :
                    <Link to='/login'>Вход</Link>
                }
            </HeaderBlock>
        </HeaderContainer>);
}