import { Container } from "../assets/styles/styled-UserArea"
import  img  from '../assets/img/caustic-mini.png'
import { useNavigate } from 'react-router-dom';
import { useEffect } from "react";
import axios from "axios";

export const UserArea = () => {

    const navigate = useNavigate();

    useEffect(async () => {
        const url = 'http://localhost:3001/user'
        const headers = {
            'x-access-token': ''
        }
        const res = await axios.get(url)
        console.log(res)
    }, [])


    return (
        <div>
            <Container>
                <form>
                    <div>
                        <label>Nome</label>
                        <input type="text" minLength={4}
                            
                        />
                    </div>

                    <div>
                        <label>E-mail</label>
                        <input type="email" minLength={4}
                            
                        />
                    </div>

                    <div>
                        <label>Usuário</label>
                        <input type="text" minLength={4}
                            
                        />
                    </div>

                    <div>
                        <label>Senha</label>
                        <input type="password" minLength={8}
                            
                        />
                    </div>

                    <div>
                        <label>Repita a senha</label>
                        <input type="password" minLength={8}
                            
                        />
                    </div>

                    <div>
                        <label>Nick (Apex)</label>
                        <input type="text" minLength={4}
                            
                        />
                    </div>
                    
                    <span>
                        <button>Alterar dados</button>
                        <img src={img}></img>
                    </span>
                    
                </form>
            </Container>
        </div>
    )
}