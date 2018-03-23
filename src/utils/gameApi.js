import axios from 'axios';

export function getGame (gameTitle) {
  const api = "http://www.grac.or.kr/WebService/GameSearchSvc.asmx/game";
  const params = `?gametitle=${gameTitle}&entname=&rateno=&display=10&pageno=1`;

  return new Promise((resolve, reject) => {
    axios.get(api + params).then((response) => {
      const parser = new DOMParser();
      const data = parser.parseFromString(response.data, "text/xml");;
      const game = data.getElementsByTagName('item');
    
      resolve(game);

    }).catch((err) => {
      reject(err);
      
    });
  });  
}
