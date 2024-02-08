import React, { useEffect, useState } from "react";
import Button from "../components/Common/Button";
import Index from "../components/Common/Header/Index";
import Loader from "../components/Common/Loader/Loader";
import { get100Coins } from "../functions/get100Coins";
import TabsComponent from '../components/Dashboard/Tabs/tabsComponent'
import DashboardPage from "./DashboardPage";
import { Link } from "react-router-dom";
import BackToTop from "../components/Common/BacktoTop/BackToTop";


function WatchlistPage() {
  const coins = JSON.parse(localStorage.getItem("watchlist"));
  const [myWatchlist, setMyWatchlist] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getData();
  }, []);

  console.log(myWatchlist)
  const getData = async () => {
    setLoading(true);
    const allCoins = await get100Coins();
    if (coins) {
      console.log(coins,'coins ')
      setMyWatchlist(allCoins.filter((item) => coins.includes(item.id)));
    }
    setLoading(false);
  };
  return (
    <div>
      {loading || !coins ? (
        <Loader />
      ) : (
        <div className="watchlist" >
          {myWatchlist?.length === 0 || !coins ? (
            <div>
              <Index />
              <h1 style={{ textAlign: "center", marginBottom: "2rem", color : "var(--black)" }}>
                No Items in the Watchlist
              </h1>
              <div style={{ display: "flex", justifyContent: "center" }}>
                <Link to = "/dashboardPage" element = {<DashboardPage/>}>
                  <Button text={"Dashboard"} />
                </Link>
              </div>
            </div>
          ) : (
            <div>
              <Index />
              <TabsComponent coins={myWatchlist} isWatchlistPage={true} />
            </div>
          )}
          <BackToTop/>
        </div>
      )}
    </div>
  );
}

export default WatchlistPage;