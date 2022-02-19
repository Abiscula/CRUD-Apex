import { useState } from 'react'
import { Form } from '../assets/styles/styled-Login'
import axios from 'axios'
import { useCustomStates } from '../Provider/States'

export const Login = () => {
    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')
    const { loginVisible } = useCustomStates()

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