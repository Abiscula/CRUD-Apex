import { useState } from "react"
import { getPlayerStats } from "../apis/ApexAPI"
import { Container } from "../assets/styles/styled-Home"

export const Home = () => {

    const [player, setPlayer] =  useState('')
    const [plataform, setPlataform] = useState('PC')
    const [stats, setStats] = useState({})

    async function ApexPlayerStats(player, plataform) {
        if (player === '') {
            alert('Digite o nome do jogador')
            return
        }

        const data = await getPlayerStats(player, plataform)
        setStats(data)
    }

    return (
        <Container>
            <section className="busca">
                <span>
                    <label>Nome do jogador</label>
                    <input type="text" onChange={(event) => setPlayer(event.target.value)}/>
                </span>

                <span>
                    <label>Plataforma</label>
                    <select onChange={(event) => setPlataform(event.target.value)}>
                        <option>PC</option>
                        <option>PS4</option>
                        <option>XBOX</option>
                    </select>
                </span>

                <button onClick={() => ApexPlayerStats(player, plataform)}>Buscar</button>
            </section>

            <section className={Object.keys(stats).length === 0 ? "empty" : "render"}>
                <form>
                    <span>
                        <h3>Nome: {stats&&stats.global?.name}</h3>
                        <p>Level: {stats&&stats.global?.level}</p>
                        <p>Plataforma: {stats&&stats.global?.platform}</p>
                    </span>
                    <aside>
                        <img src={stats&&stats.global?.rank.rankImg}/>
                    </aside>
                </form>
                <img src={stats&&stats.legends?.selected.ImgAssets.banner} className="banner"/>
            </section>
        </Container>
    )
}