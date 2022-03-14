import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios'
import { Form } from '../assets/styles/styled-Login'
import { useCustomStates } from '../Provider/States'

export const Login = () => {
    const navigate = useNavigate();
    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')
    const { loginVisible, setLogged } = useCustomStates()

    async function handleLogin(event) {
        event.preventDefault()
        const url = 'http://localhost:3001/login'
        const data = {
            'user': login,
            'passw': password
        }
        const res = await axios.post(url, data)
        if(res.data.auth === true) {
            localStorage.setItem("token", res.data.token);
            alert("Login realizado com sucesso")
            setLogged(true)
        }
        if(res.data.auth === false)  {
            alert('Login ou senha inválidos, tente novamente!')
        }
    }
    
    return(
        <Form loginVisible={loginVisible}>
            <div>
                <section>
                    <label>Login</label>
                    <input 
                        type="text"
                        required
                        placeholder={'Digite seu usuário'}
                        onChange={(event) => setLogin(event.target.value)}
                        
                    />
                </section>

                <section>
                    <label>Senha</label>
                    <input 
                        type="password"
                        required
                        minLength={8}
                        maxLength={20}
                        placeholder={'Digite sua senha'}
                        onChange={(event) => setPassword(event.target.value)}
                    />
                    <p>{`${password.length}/8`}</p> 
                </section>

                <button onClick={handleLogin}>Conectar</button>
            </div>
        </Form>
    )
}