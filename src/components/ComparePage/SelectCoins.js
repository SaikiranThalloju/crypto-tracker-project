import React, { useEffect, useState } from "react";
import "./style.css";
import { get100Coins } from "../../functions/get100Coins";
import { MenuItem, Select } from "@mui/material";
// import SelectDays from "../Coin/SelectDays/SelectDays";
import "./style.css";

function SelectCoins({ crypto1, crypto2, handleCoinChange }) {
  const [allCoins, setAllCoins] = useState([]);

  const styles = {
    height: "2.5rem",
    color: "var(--black)",
    "& .MuiOutlinedInput-notchedOutline": {
      borderColor: "var(--black)",
    },
    "& .MuiSvgIcon-root": {
      color: "var(--black)",
    },
    "&:hover": {
      "&& fieldset": {
        borderColor: "#3a80e9",
      },
    },
  };

  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    const myCoins = await get100Coins();
    console.log(myCoins);
    setAllCoins(myCoins);
  }

  return (
    <div className="coins-flex">
      <p style={{color:"var(--black)"}}>Crypto 1</p>
      <Select
        sx={styles}
        value={crypto1}
        label="Crypto 1"
        onChange={(event) => handleCoinChange(event, false)}
      >
        {allCoins.filter((item)=>item.id!=crypto2)
        .map((coin,i) => (
          <MenuItem key={i} value={coin.id}>
            {coin.name}
          </MenuItem>
        ))}
      </Select>
      <p style={{color:"var(--black)"}}>Crypto 2</p>
      <Select
        sx={styles}
        value={crypto2}
        label="Crypto 2"
        onChange={(event) => handleCoinChange(event, true)}
      >
        {allCoins.filter((item)=>item.id!=crypto1)
        .map((coin,i) => (
          <MenuItem key={i} value={coin.id}>
            {coin.name}
          </MenuItem>
        ))}
      </Select>
    </div>
  );
}

export default SelectCoins;
