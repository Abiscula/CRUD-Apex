import { Login } from "./Login";
import { Container } from "../assets/styles/styled-Header";
import { useNavigate } from 'react-router-dom';

export const Header = () => {

    const navigate = useNavigate();

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