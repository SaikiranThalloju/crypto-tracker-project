
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Index from "../components/Common/Header/Index";
import Loader from "../components/Common/Loader/Loader";
import { coinObject } from "../functions/ConvertObject";
import List from "../components/Dashboard/List/List";
import CoinInfo from "../components/Coin/CoinInfo";
import { GetCoinData } from "../functions/GetCoinData";
import { getCoinPrices } from "../functions/GetCoinPrices";
import LineChart from "../components/Coin/LineChart/LineChart";
// import { convertDate } from "../functions/ConvertDate";
import SelectDays from "../components/Coin/SelectDays/SelectDays";
import { settingChartData } from "../functions/settingChartData";
import PriceType from "../components/Coin/PriceType/pricetype";

const CoinPage = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [coinData, setCoinData] = useState();
  const [days, setDays] = useState(30);
  const [chartData, setChartData] = useState({});
  const [priceType, setpriceType] = useState("prices");

  useEffect(() => {
    if (id) {
      getData();
    }
  }, [id]);

  async function getData() {
    const data = await GetCoinData(id);
    if (data) {
      coinObject(setCoinData, data);
      const prices = await getCoinPrices(id, days,priceType);
      if (prices.length > 0) {
        settingChartData(setChartData,prices)
        setLoading(false);
      }
    }
  }

  const handleDaysChange = async (event) => {
    setLoading(true);
    setDays(event.target.value);
    const prices = await getCoinPrices(id, event.target.value,priceType);
    if (prices.length > 0) {
      settingChartData(setChartData, prices);
      setLoading(false);
    }
  };

  const handlepriceTypeChange = async (event, newType) => {
    setLoading(true);
    setpriceType(newType);
    const prices = await getCoinPrices(id, days,newType);
    if (prices.length > 0) {
      settingChartData(setChartData, prices);
      setLoading(false);
    }
  };

  


  return (
    <div>
      <Index />
      {loading ? (
        <Loader />
      ) : (
        <>
          <div className="grey-wrapper">
            <List coin={coinData} />
          </div>
          <div className="grey-wrapper">
            <SelectDays days={days} handleDaysChange={handleDaysChange} />
            <PriceType
              priceType={priceType}
              handlepriceTypeChange={handlepriceTypeChange}
            />

            <LineChart chartData={chartData}  priceType={priceType} />
          </div>

          <CoinInfo heading={coinData.name} desc={coinData.desc} />
        </>
      )}
    </div>
  );
};

export default CoinPage;



