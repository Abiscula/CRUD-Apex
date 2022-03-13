import { useEffect } from "react";
import { useNavigate, useLocation } from 'react-router-dom';
import { useCustomStates } from "../Provider/States";
import { Login } from "./Login";
import { Container } from "../assets/styles/styled-Header";
import {ReactComponent as UserIcon} from '../assets/img/user_icon.svg';

export const Header = () => {

    const navigate = useNavigate();
    const location = useLocation()
    const { setLoginVisible, loginVisible, setLogged, logged } = useCustomStates()

    useEffect(() => {
        if (!logged) {
            setLoginVisible(true)
        } else {
            setLoginVisible(false)
        }
    }, [navigate])

    function logout() {
        setLogged(false)
        navigate('/')
    }

    return(
        <Container loginVisible={loginVisible}>
            <div>
                <nav>
                    <span onClick={() => navigate('/')}>Home</span>
                    {!logged ? <span onClick={() => navigate('/register')}>Cadastro</span> : ''}
                </nav>
                {!logged
                
                ?   <Login/> 
                
                :   <section>
                        <UserIcon onClick={() => navigate('/user')}/>
                        <a onClick={logout}>Logout</a>
                    </section>
                }
            </div>
        </Container>
    )
}