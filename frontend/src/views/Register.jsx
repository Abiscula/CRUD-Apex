import { useState } from "react"
import { useNavigate } from 'react-router-dom';
import axios from 'axios'
import { Container } from "../assets/styles/styled-Register"

export const Register = () => {

    const navigate = useNavigate();
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [user, setUser] = useState('')
    const [password, setPassword] = useState('')
    const [password2, setPassword2] = useState('')
    const [nick, setNick] = useState('')



    async function handleRegister(event) {
        event.preventDefault()
        if(password != password2) {
            alert("As senhas devem ser iguais")
            return;
        }
        const url = 'http://localhost:3001/register'
        const data = {
            'name': name,
            'email': email,
            'user': user,
            'passw': password,
            'nick': nick
        }

        try {
            const resp = await axios.post(url, data)
            navigate('/')
            alert(resp.data.success)
            
        }catch(err) {
            if(err.response.status === 400) {
                alert(err.response.data.error)
            }
        }
        
    }

    return(
        <Container>
            <form>
                <div>
                    <label>Nome</label>
                    <input type="text" required minLength={4}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>

                <div>
                    <label>E-mail</label>
                    <input type="email" required minLength={4}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>

                <div>
                    <label>Usuário</label>
                    <input type="text" required minLength={4}
                        onChange={(e) => setUser(e.target.value)}
                    />
                </div>

                <div>
                    <label>Senha</label>
                    <input type="password" required minLength={8}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>

                <div>
                    <label>Repita a senha</label>
                    <input type="password" required minLength={8}
                        onChange={(e) => setPassword2(e.target.value)}
                    />
                </div>

                <div>
                    <label>Nick (Apex)</label>
                    <input type="text" required minLength={4}
                        onChange={(e) => setNick(e.target.value)}
                    />
                </div>
                
                <button onClick={handleRegister}>Cadastrar</button>
            </form>
        </Container>
    )
}