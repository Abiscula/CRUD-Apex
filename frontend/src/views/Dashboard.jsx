import axios from "axios"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router"
import { getPlayerStats } from "../apis/ApexAPI"
import { Container } from "../assets/styles/styled-Dashboard"
import { useCustomStates } from "../Provider/States"


export const Dashboard = () => {

    const [stats, setStats] = useState({})
    const navigate = useNavigate();
    const { logged } = useCustomStates()

    useEffect(() => {
        if(!logged) {
            navigate('/')
        }
    }, [])

    useEffect(async () => {
        const token = localStorage.getItem("token")
        const url = 'http://localhost:3001/dashboard'
        const headers = { 'authorization': token }
        try {
            const resp = await axios.get(url, {headers})
            const nick = (resp.data['user_infos'][0]['nick'])
            if(nick) {
                const data = await getPlayerStats(nick, "PC")
                setStats(data)
                console.log(data)
            }
        }catch(err) {
            console.log('x', err)
        }
    }, [])

    return (
        <Container>
            <div>
                <span>
                    <h2>Nome: {stats&&stats.global?.name}</h2>
                    <h3>Level: {stats&&stats.global?.level}</h3>
                    <h3>Plataforma: {stats&&stats.global?.platform}</h3>
                    <h3>Exp: {stats&&stats.global?.toNextLevelPercent}%</h3>
                </span>
                <span>
                    <h3>Rank: {stats&&stats.global?.rank.rankName}</h3>
                    <img src={stats&&stats.global?.rank.rankImg}/>
                </span>
            </div>
        </Container>
    )
}