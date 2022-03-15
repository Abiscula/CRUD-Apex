import { Container } from "../assets/styles/styled-UserArea"
import  img  from '../assets/img/caustic-mini.png'
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from "react";
import axios from "axios";

export const UserArea = () => {

    const navigate = useNavigate();
    const token = localStorage.getItem("token")
    const [userInfo, setUserInfo] = useState({
        name: '',
        email: '',
        user: '',
        passw: '',
        passw2: '',
        nick: ''
    })

    useEffect(async () => {
        const url = 'http://localhost:3001/user'
        const headers = {
            'authorization': token
        }
        try {
            const res = await axios.get(url, {headers})
            if(res.data.auth === true) {
                setUserInfo({
                    ...userInfo,
                    name: res.data.user_infos[0].name,
                    email: res.data.user_infos[0].email,
                    user: res.data.user_infos[0].user,
                    passw: res.data.user_infos[0].passw,
                    passw2: res.data.user_infos[0].passw,
                    nick: res.data.user_infos[0].nick
                })
            }
        }catch(err) {
            if(err.response.status === 401) {
                navigate('/')
            }
        }
    }, [])


    async function changeUserInfos(event) {
        event.preventDefault()
        const url = 'http://localhost:3001/edit'
        const headers = { 'authorization': token }
        const data = { user_info: userInfo }
        console.log(data)
        const res = await axios.put(url, data, {headers})

        console.log(res)
    }

    return (
        <div>
            <Container>
                <form>
                    <div>
                        <label>Nome</label>
                        <input type="text" minLength={4}
                            defaultValue={userInfo.name}
                            onChange={(e) => setUserInfo({...userInfo, name: e.target.value})}   
                        />
                    </div>

                    <div>
                        <label>E-mail</label>
                        <input type="email" minLength={4}
                            defaultValue={userInfo.email}
                            onChange={(e) => setUserInfo({...userInfo, email: e.target.value})} 
                        />
                    </div>

                    <div>
                        <label>Usuário</label>
                        <input type="text" minLength={4}
                            value={userInfo.user}
                            disabled
                        />
                    </div>

                    <div>
                        <label>Senha</label>
                        <input type="password" minLength={8}
                            defaultValue={userInfo.passw}
                            onChange={(e) => setUserInfo({...userInfo, passw: e.target.value})} 
                        />
                    </div>

                    <div>
                        <label>Repita a senha</label>
                        <input type="password" minLength={8}
                            defaultValue={userInfo.passw2}
                            onChange={(e) => setUserInfo({...userInfo, passw2: e.target.value})} 
                        />
                    </div>

                    <div>
                        <label>Nick (Apex)</label>
                        <input type="text" minLength={4}
                            defaultValue={userInfo.nick}
                            onChange={(e) => setUserInfo({...userInfo, nick: e.target.value})} 
                        />
                    </div>
                    
                    <span>
                        <button onClick={changeUserInfos}>Alterar dados</button>
                        <img src={img}></img>
                    </span>
                    
                </form>
            </Container>
        </div>
    )
}