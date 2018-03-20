import axios from 'axios';

export function getUserName (userName) {
  const host = "https://kr.api.riotgames.com/lol/summoner/v3/summoners/by-name/";

  return new Promise((resolve, reject) => {
    axios.get({
      key: "RGAPI-a3ffd37d-a268-4832-9981-01fa837d4800"
    }).then((response) => {
      reslove(response);

    }).catch((err) => {
      reject(err);
      
    });
  });
}