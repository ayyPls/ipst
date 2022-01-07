import Header from "./Header"
import Footer from "./Footer"
import LoginForm from "./LoginForm"
import { useSelector } from "react-redux"
import { Navigate } from 'react-router';

export default function LoginPage() {
    //условие для редиректа
    const user = useSelector(state => state.user)
    if (user)
        return (
            <Navigate to="/" />
        )
    else return (<div className="App">
        <Header />
        <LoginForm />
        <Footer />
    </div>)
}