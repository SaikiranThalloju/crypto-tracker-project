// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import Index from "../components/Common/Header/Index";
// import TabsComponent from "../components/Dashboard/Tabs/tabsComponent";
// import Search from "../components/Dashboard/Search/Search.js";
// import PaginationComponent from "../components/Dashboard/Pagination/Pagination.js";
// function DashboardPage() {
//   const [coins, setCoins] = useState([]);
//   const [Paginatedcoins, setPagintedCoins] = useState([]);

//   const [search, setSearch] = useState("");
//   const [page, setPage] = useState(1);

//   // const handlePageChange = (event, value) => {
//   //   event.preventDefault();
//   //   setPage(value);
//   //   var previousIndex = (value - 1) * 10;
//   //   setPagintedCoins(coins.slice(previousIndex, previousIndex + 10));
//   // };

//   const handlePageChange = (event,value) => {
//     setPage(value);
//     var startingIndex = (value - 1) * 10;
//     setPagintedCoins(coins.slice(startingIndex, startingIndex + 10));
//   };

//   const onSearchChange = (e) => {
//     setSearch(e.target.value);
//   };

//   var filteredCoins = coins.filter(
//     (item) =>
//       item.name.toLowerCase().includes(search.toLowerCase()) ||
//       item.symbol.toLowerCase().includes(search.toLowerCase())
//   );

//   useEffect(() => {
//     axios
//       .get(
//         "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
//       )
//       .then((response) => {
//         console.log(response);
//         setCoins(response.data);
//         setPagintedCoins(response.data.slice(0, 10));
//       })
//       .catch((error) => {
//         console.log(error, "error");
//       });
//   }, []);

//   return (
//     <div>
//       <Index />
//       {/* <Search search= {search} onSearchChange = {onSearchChange}/> */}
//       <Search search={search} onSearchChange={onSearchChange} />
//       <TabsComponent coins={search ? filteredCoins : Paginatedcoins} />

//    {!search && (
//       <PaginationComponent page={page} handlePageChange={handlePageChange} />
//    )}

//     </div>
//   )
//    }
// export default DashboardPage;

import React, { useState, useEffect } from "react";
// import axios from "axios";
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
