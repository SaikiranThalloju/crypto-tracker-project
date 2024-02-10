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


