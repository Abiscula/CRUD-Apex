import { useState } from "react"
import axios from 'axios'

export const Register = () => {

    const [user, setUser] = useState('')
    const [password, setPassword] = useState('')
    const [nick, setNick] = useState('')

    async function handleRegister(event) {
        event.preventDefault()
        const url = 'http://localhost:3001/register'
        const data = {
            'user': user,
            'passw': password,
            'nick': nick
        }

        const resp = await axios.post(url, data)
        alert(resp.data)
    }

    return(
        <section>
            <form>
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
                    <label>Nick (Apex)</label>
                    <input type="text" required minLength={4}
                        onChange={(e) => setNick(e.target.value)}
                    />
                </div>
                
                <button onClick={handleRegister}>Cadastrar</button>
            </form>
        </section>
    )
}