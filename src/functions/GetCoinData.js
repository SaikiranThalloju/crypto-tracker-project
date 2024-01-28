 import axios from "axios";

export  const GetCoinData = async (id)=> {
  let demo = []
   const myData =  await axios 
   .get(`https://api.coingecko.com/api/v3/coins/${id}?x_cg_demo_api_key=CG-P9pA4WokEwF3Rg1HNoAwBsHQ`)
    .then((response) => { 
    return response.data; 
    })
    .catch((error) => {
      console.log(error, "error");
      return demo;
    })

    return myData
  }


// const myData = {
//   method: 'GET',
//   url: `https://coingecko.p.rapidapi.com/coins/${id}`,
//   params: {
//     localization: 'true',
//     tickers: 'true',
//     market_data: 'true',
//     community_data: 'true',
//     developer_data: 'true',
//     sparkline: 'false'
//   },
//   headers: {
//     'X-RapidAPI-Key': '8c1ae17d63mshba739b36785d37dp151d28jsn9d121960e717',
//     'X-RapidAPI-Host': 'coingecko.p.rapidapi.com'
//   }
// };

// try {
// 	const response = await axios.request(myData);
// 	console.log(response.data);
// } catch (error) {
// 	console.error(error);
// }
// return myData
// }