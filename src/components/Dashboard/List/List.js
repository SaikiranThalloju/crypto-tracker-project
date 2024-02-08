import React,{useState} from "react";
import "./style.css";
import TrendingUpRoundedIcon from "@mui/icons-material/TrendingUp";
import TrendingDownRoundedIcon from "@mui/icons-material/TrendingDown";
import { IconButton, Tooltip } from "@mui/material";
import { ConvertNumbers } from "../../../functions/ConvertNumbers";
import { Link } from "react-router-dom";
// import { motion } from "framer-motion";
import { removeFromWatchlist } from "../../../functions/removeFromWatchList";
import { addToWatchlist } from "../../../functions/addToWatchList";
import StarBorderRoundedIcon from "@mui/icons-material/StarBorderRounded";
import StarRoundedIcon from "@mui/icons-material/StarRounded";
import { hasBeenAdded } from "../../../functions/hasBeenAdded";

// const List = ({ coin,isWatchlistPage  }) => {
//   const [added, setAdded] = useState(hasBeenAdded(coin.id));
//   return (
//     <Link to = {`/coin/${coin.id}`}>
//     <tr className="list-row"style={{ display: isWatchlistPage && !added && "none" }}>
//       <Tooltip title="Logo" >
//         <td className="td-image">
//           <img className="coin-logo td-logo" src={coin.image} />
//         </td>
//       </Tooltip>

//       <Tooltip title="Symbol">
//         <td >
//           <div className="name-col td-name">
//             <p className="coin-symbol td-symbol">{coin.symbol}</p>

//             <p className="coin-name td-name"> {coin.name}</p>
//           </div>
//         </td>
//       </Tooltip>

//       {coin.price_change_percentage_24h  > 0 ?  (
//         <td className="chip-flex td-chip-flex">
//           <div className="price-chip td-price-chip">
//             +{coin.price_change_percentage_24h.toFixed(2)}%
//           </div>
//           <div className="icon-chip td-icon">
//             <TrendingUpRoundedIcon />
//           </div>
//         </td>
//       ) : (
//         <td className="chip-flex td-chip-flex">
//           <div className="price-chip chip-flex-red td-price-chip td-red">
//             {coin.price_change_percentage_24h.toFixed(2)}%
//           </div>
//           <div className="icon-chip chip-flex-red td-icon" >
//             <TrendingDownRoundedIcon />
//           </div>
//         </td>
//       )}
//       <Tooltip title="Current Price">
//         <td>
//           <h3
//             className="coin-price td-center-align td-coinprice"
//             style={{
//               color:
//                 coin.price_change_percentage_24h < 0
//                   ? " var(--red)"
//                   : "var(--green",
//             }}
//           >
//             ${coin.current_price.toLocaleString()}
//           </h3>
//         </td>
//       </Tooltip>
//       <Tooltip title="Total Volume ">
//       <td>
//         {/* {" "} */}
//         <p className="total-volume coin-price td-right-align td-volume total_volume">
//           ${coin.total_volume.toLocaleString()}
//         </p>
//       </td>
//       </Tooltip>
//       <Tooltip title="Market Cap">
//       <td className="desktop-td-mkt">
//         <p className="total-volume coin-price td-right-align">
//           ${coin.market_cap.toLocaleString()}
//         </p>
//       </td>
//       </Tooltip>
//       <Tooltip title="Market Cap">
//       <td className="mobile-td-mkt">
//         <p className="total-volume coin-price td-right-align">
//           {ConvertNumbers(coin.market_cap.toLocaleString())}
//         </p>
//       </td>
//       </Tooltip>
//       <td>
//       <IconButton
//             onClick={(e) => {
//               e.preventDefault();
//               if (added) {
//                 console.log("Removing from watchlist:", coin.id);
//                 removeFromWatchlist(coin.id);
//                 setAdded(false);
//               } else {
//                 console.log("Adding to watchlist:", coin.id);
//                 addToWatchlist(coin.id);
//                 setAdded(true);
//               }
//             }}
//           >
//             {added ? (
//               <StarRoundedIcon
//                 className={`watchlist-icon td-watchlist-icon ${
//                   coin.price_change_percentage_24h < 0 && "watchlist-icon-red td-watchlist-icon-red"
//                 } `}
//                 sx={{ fontSize: "2rem !important" }}
//               />
//             ) : (
//               <StarBorderRoundedIcon
//                 className={`watchlist-icon td-watchlist-icon ${
//                   coin.price_change_percentage_24h < 0 && "watchlist-icon-red td-watchlist-icon-red"
//                 } `}
//                 sx={{ fontSize: "2rem !important" }}
//               />
//             )}
//           </IconButton>
//       </td>

//     </tr>
//     </Link>
//   );
// };

// export default List;



function List({ coin, delay, isWatchlistPage }) {
  const [added, setAdded] = useState(hasBeenAdded(coin.id));
  return (
    // <a href={`/coin/${coin.id}`}>
    <Link to={`/coin/${coin.id}`}>
      <tr
        style={{ display: isWatchlistPage && !added && "none" }}
        className="list-row"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: delay }}
      >
        <Tooltip placement="bottom-start" title="Image">
          <td className="td-img">
            <img src={coin.image} className="coin-image" />
          </td>
        </Tooltip>
        <Tooltip placement="bottom-start" title="Info">
          <td className="td-info-flex">
            <div className="coin-name-flex">
              <h3 className="coin-symbol coin-symbol-list">{coin.symbol}</h3>
              <p className="coin-name coin-name-list">{coin.name}</p>
            </div>
          </td>
        </Tooltip>
        <Tooltip placement="bottom-start" title="Price">
          <td className="td-price-chip-list">
            {coin.price_change_percentage_24h > 0 ? (
              <div className="info-flex" style={{ marginBottom: 0 }}>
                <div className="price-chip price-chip-list">
                  {coin.price_change_percentage_24h.toFixed(2)} %
                </div>
                <TrendingUpRoundedIcon className="trending-icon trending-icon-list" />
              </div>
            ) : (
              <div className="info-flex" style={{ marginBottom: 0 }}>
                <div className="price-chip price-chip-list red">
                  {coin.price_change_percentage_24h.toFixed(2)} %
                </div>
                <TrendingDownRoundedIcon className="trending-icon red trending-icon-list" />
              </div>
            )}
          </td>
        </Tooltip>
        <Tooltip placement="bottom-start" title="Curent Price">
          <td>
            <p
              className={`coin-price coin-price-list desktop-price ${
                coin.price_change_percentage_24h < 0 && "coin-price-red"
              }`}
            >
              ${coin.current_price.toLocaleString()}
            </p>
            <p
              className={`coin-price coin-price-list mobile-price ${
                coin.price_change_percentage_24h < 0 && "coin-price-red"
              }`}
            >
              $
              {ConvertNumbers(
                coin.current_price < 1
                  ? parseFloat(coin.current_price).toFixed(3)
                  : parseInt(coin.current_price)
              )}
            </p>
          </td>
        </Tooltip>
        <Tooltip placement="bottom-start" title="Total Volume">
          <td className="td-mkt-cap">
            <span className="coin-total_volume">
              {coin.total_volume.toLocaleString()}
            </span>
          </td>
        </Tooltip>
        <Tooltip placement="bottom-start" title="Market Cap">
          <td className="td-mkt-cap">
            <span className="coin-total_volume">
              ${coin.market_cap.toLocaleString()}
            </span>
          </td>
        </Tooltip>
        <Tooltip placement="bottom-start" title="Market Cap">
          <td className="mobile-td-cap">
            <span className="coin-total_volume coin-total_volume-list">
              ${ConvertNumbers(parseFloat(coin.market_cap))}
            </span>
          </td>
        </Tooltip>
        <td style={{ width: "fit-content" }}>
          <IconButton
            onClick={(e) => {
              e.preventDefault();
              if (added) {
                removeFromWatchlist(coin.id);
                setAdded(false);
              } else {
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
              />
            ) : (
              <StarBorderRoundedIcon
                className={`watchlist-icon ${
                  coin.price_change_percentage_24h < 0 && "watchlist-icon-red"
                } `}
              />
            )}
          </IconButton>
        </td>
      </tr>
    {/* </a> */}
    </Link>
  );
}

export default List;




