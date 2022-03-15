import { Container } from "../assets/styles/styled-UserArea"
import  img  from '../assets/img/caustic-mini.png'
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from "react";
import axios from "axios";

export const UserArea = () => {

    const navigate = useNavigate();
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
        const token = localStorage.getItem("token")
        console.log(token)
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
                    passw: res.data.user_infos[0].passw,
                    passw2: res.data.user_infos[0].passw,
                    user: res.data.user_infos[0].user,
                    nick: res.data.user_infos[0].nick
                })
            }
        }catch(err) {
            if(err.response.status === 401) {
                navigate('/')
            }
        }
    }, [])


    return (
        <div>
            <Container>
                <form>
                    <div>
                        <label>Nome</label>
                        <input type="text" minLength={4}
                            defaultValue={userInfo.name}    
                        />
                    </div>

                    <div>
                        <label>E-mail</label>
                        <input type="email" minLength={4}
                            defaultValue={userInfo.email} 
                        />
                    </div>

                    <div>
                        <label>Usuário</label>
                        <input type="text" minLength={4}
                            defaultValue={userInfo.user} 
                        />
                    </div>

                    <div>
                        <label>Senha</label>
                        <input type="password" minLength={8}
                            defaultValue={userInfo.passw} 
                        />
                    </div>

                    <div>
                        <label>Repita a senha</label>
                        <input type="password" minLength={8}
                            defaultValue={userInfo.passw2} 
                        />
                    </div>

                    <div>
                        <label>Nick (Apex)</label>
                        <input type="text" minLength={4}
                            defaultValue={userInfo.nick} 
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