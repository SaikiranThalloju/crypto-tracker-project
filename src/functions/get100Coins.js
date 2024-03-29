import axios from "axios";

export const get100Coins = async () => {
 const myCoins = await axios
    .get(
      `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&
      x_cg_demo_api_key=CG-P9pA4WokEwF3Rg1HNoAwBsHQ&
      &order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en`)
    .then((response) => {
      console.log(response);
      return response.data;
    })
    .catch((error) => {
      console.log(error, "error");
    });
    return myCoins
}



