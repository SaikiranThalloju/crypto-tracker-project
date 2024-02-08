import React, { useState, useEffect } from "react";
import Index from "../components/Common/Header/Index.js";
import TabsComponent from "../components/Dashboard/Tabs/tabsComponent";
import Search from "../components/Dashboard/Search/Search.js";
import PaginationComponent from "../components/Dashboard/Pagination/Pagination.js";
import Loader from "../components/Common/Loader/Loader.js";
import BackToTop from "../components/Common/BacktoTop/BackToTop.js";
import { get100Coins } from "../functions/get100Coins.js";

function DashboardPage() {
  const [coins, setCoins] = useState([]);
  const [Paginatedcoins, setPagintedCoins] = useState([]);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);

  const handlePageChange = (value) => {
    setPage(value);
    var startingIndex = (value - 1) * 10;
    setPagintedCoins(coins.slice(startingIndex, startingIndex + 10));
  };

  const onSearchChange = (e) => {
    setSearch(e.target.value);
  };

  var filteredCoins = coins.filter(
    (item) =>
      item.name.toLowerCase().includes(search.toLowerCase()) ||
      item.symbol.toLowerCase().includes(search.toLowerCase())
  );

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const myCoins = await get100Coins();
    if (myCoins) {
      setCoins(myCoins);
      setPagintedCoins(myCoins.slice(0, 10));
      setLoading(false);
    }
  };

  return (
    <>
      <Index />
      <BackToTop />
      {loading ? (
        <Loader />
      ) : (
        <div>
          <Search search={search} onSearchChange={onSearchChange} />
          <TabsComponent coins={search ? filteredCoins : Paginatedcoins} />

          {!search && (
            <PaginationComponent
              page={page}
              handlePageChange={handlePageChange}
            />
          )}
        </div>
      )}
    </>
  );
}

export default DashboardPage;
