import { useState } from 'react'
import { Form } from '../styles/styled-Home'

export const Login = () => {
    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')

    function handleLogin() {
        console.log(login, password)
    }
    
    return(
        <Form>
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
        </Form>
    )
}