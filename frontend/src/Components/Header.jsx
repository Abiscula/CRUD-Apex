import { Login } from "./Login"
import { Container } from "../styles/styled-Header"

export const Header = () => {
    return(
        <Container>
            <nav>
                <span>Home</span>
                <span>Notícias</span>
                <span>Cadastro</span>
            </nav>
            <Login/>
        </Container>
    )
}