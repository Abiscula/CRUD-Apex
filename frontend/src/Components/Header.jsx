import { useEffect } from "react";
import { useNavigate, useLocation } from 'react-router-dom';
import { useCustomStates } from "../Provider/States";
import { Login } from "./Login";
import { Container } from "../assets/styles/styled-Header";

export const Header = () => {

    const navigate = useNavigate();
    const location = useLocation()
    const { setLoginVisible } = useCustomStatess()

    useEffect(() => {
        if (location.pathname === '/') {
            setLoginVisible(true)
        } else {
            setLoginVisible(false)
        }
    }, [navigate])

    return(
        <Container>
            <nav>
                <span onClick={() => navigate('/')}>Home</span>
                <span onClick={() => navigate('/register')}>Cadastro</span>
            </nav>
            <Login/>
        </Container>
    )
}