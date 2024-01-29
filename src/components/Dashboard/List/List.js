import React,{useState} from "react";
import "./style.css";
import TrendingUpRoundedIcon from "@mui/icons-material/TrendingUp";
import TrendingDownRoundedIcon from "@mui/icons-material/TrendingDown";
import { IconButton, Tooltip } from "@mui/material";
import { ConvertNumbers } from "../../../functions/ConvertNumbers";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { removeFromWatchlist } from "../../../functions/removeFromWatchList";
import { addToWatchlist } from "../../../functions/addToWatchList";
import StarBorderRoundedIcon from "@mui/icons-material/StarBorderRounded";
import StarRoundedIcon from "@mui/icons-material/StarRounded";
import { hasBeenAdded } from "../../../functions/hasBeenAdded";

const List = ({ coin,isWatchlistPage  }) => {
  const [added, setAdded] = useState(hasBeenAdded(coin.id));
  return (
    <Link to = {`/coin/${coin.id}`}>
    <tr className="list-row"style={{ display: isWatchlistPage && !added && "none" }}>
      <Tooltip title="Logo">
        <td className="td-image">
          <img className="coin-logo" src={coin.image} />
        </td>
      </Tooltip>

      <Tooltip title="Symbol">
        <td >
          <div className="name-col">
            <p className="coin-symbol">{coin.symbol}</p>

            <p className="coin-name"> {coin.name}</p>
          </div>
        </td>
      </Tooltip>

      {coin.price_change_percentage_24h  > 0 ?  (
        <td className="chip-flex">
          <div className="price-chip">
            +{coin.price_change_percentage_24h.toFixed(2)}%
          </div>
          <div className="icon-chip td-icon">
            <TrendingUpRoundedIcon />
          </div>
        </td>
      ) : (
        <td className="chip-flex">
          <div className="price-chip chip-flex-red">
            {coin.price_change_percentage_24h.toFixed(2)}%
          </div>
          <div className="icon-chip chip-flex-red td-icon" >
            <TrendingDownRoundedIcon />
          </div>
        </td>
      )}
      <Tooltip title="Current Price">
        <td>
          <h3
            className="coin-price td-center-align"
            style={{
              color:
                coin.price_change_percentage_24h < 0
                  ? " var(--red)"
                  : "var(--green",
            }}
          >
            ${coin.current_price.toLocaleString()}
          </h3>
        </td>
      </Tooltip>
      <Tooltip title="Total Volume ">
      <td>
        {/* {" "} */}
        <p className="total-volume coin-price td-right-align td-volume">
          ${coin.total_volume.toLocaleString()}
        </p>
      </td>
      </Tooltip>
      <Tooltip title="Market Cap">
      <td className="desktop-td-mkt">
        <p className="total-volume coin-price td-right-align">
          ${coin.market_cap.toLocaleString()}
        </p>
      </td>
      </Tooltip>
      <Tooltip title="Market Cap">
      <td className="mobile-td-mkt">
        <p className="total-volume coin-price td-right-align">
          {ConvertNumbers(coin.market_cap.toLocaleString())}
        </p>
      </td>
      </Tooltip>
      <td>
      <IconButton
            onClick={(e) => {
              e.preventDefault();
              if (added) {
                console.log("Removing from watchlist:", coin.id);
                removeFromWatchlist(coin.id);
                setAdded(false);
              } else {
                console.log("Adding to watchlist:", coin.id);
                addToWatchlist(coin.id);
                setAdded(true);
              }
            }}
          >
            {added ? (
              <StarRoundedIcon
                className={`watchlist-icon ${
                  coin.price_change_percentage_24h < 0 && "watchlist-icon-red"
                } `}
                sx={{ fontSize: "2rem !important" }}
              />
            ) : (
              <StarBorderRoundedIcon
                className={`watchlist-icon ${
                  coin.price_change_percentage_24h < 0 && "watchlist-icon-red"
                } `}
                sx={{ fontSize: "2rem !important" }}
              />
            )}
          </IconButton>
      </td>

    </tr>
    </Link>
  );
};

export default List;




