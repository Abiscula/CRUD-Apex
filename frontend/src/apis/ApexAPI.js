import axios from "axios";


export async function getPlayerStats(player, plataform) {
  const options = {
    method: 'GET',
    url: `https://apex-legends.p.rapidapi.com/stats/${player}/${plataform}`,
    headers: {
      'x-rapidapi-host': 'apex-legends.p.rapidapi.com',
      'x-rapidapi-key': '892cc67a9emsh26859615298c7a8p186b26jsn3219676d24c5'
    }
  };

  const resp = await axios.request(options)
  return resp.data
}