import { useState } from 'react'
import { Form } from '../styles/styled-Form'
import axios from 'axios'

export const Login = () => {
    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')

    async function handleLogin(event) {
        event.preventDefault()
        const url = 'http://localhost:3001/login'
        const data = {
            'user': login,
            'passw': password
        }
        const res = await axios.post(url, data)
        alert(res.data)
    }
    
    return(
        <Form>
            <div>
                <span>
                    <label>Login</label>
                    <input 
                        type="text"
                        required
                        placeholder={'Digite seu usuário'}
                        onChange={(event) => setLogin(event.target.value)}
                        
                    />
                </span>

                <span>
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
                </span>

                <button onClick={handleLogin}>Conectar</button>
            </div>
        </Form>
    )
}