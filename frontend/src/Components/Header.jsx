import { Login } from "./Login"
import { Container } from "../styles/styled-Header"

export const Header = () => {
    return(
        <Container>
            <span>
                <p>Home</p>
                <p>Cadastrar</p>
            </span>
            <Login/>
        </Container>
    )
}