import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAuthToken } from "../api/getAuthToken";
import { Button, HeadingLarge, Image, Container, FlexBlock, Form, Input, ErrorBlock } from "../styles/styled-components";

export default function LoginForm() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const dispatch = useDispatch()
    const submitLogin = (event) => {
        dispatch(getAuthToken(username, password))
        event.preventDefault();
    }
    return (
        <Container>
            <FlexBlock>
                <HeadingLarge uppercase size="4vh">Вход</HeadingLarge>
                <Form>
                    <label htmlFor="login">E-mail</label>
                    <Input id="login" type="text" value={username} onChange={(event) => setUsername(event.target.value)} />
                    <label htmlFor="password">Пароль</label>
                    <Input id="password" type="password" value={password} onChange={(event) => setPassword(event.target.value)} />
                    {useSelector(state => state.token.error) ? <ErrorBlock>wrong email or password</ErrorBlock> : ''}
                    <Button onClick={(event) => submitLogin(event)}>Войти</Button>
                </Form>
            </FlexBlock>
            <FlexBlock>
                <Image square width="40vw" src="/images/about-us.jpg" />
            </FlexBlock>
        </Container>
    )
}
