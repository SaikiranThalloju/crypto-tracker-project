import React, { useEffect, useState } from "react";
import Index from "../components/Common/Header/Index";
import SelectCoins from "../components/ComparePage/SelectCoins";
import SelectDays from "../components/Coin/SelectDays/SelectDays";
import { getCoinPrices } from "../functions/GetCoinPrices";
import { GetCoinData } from "../functions/GetCoinData";
import { coinObject } from "../functions/ConvertObject";
import Loader from "../components/Common/Loader/Loader";
import List from "../components/Dashboard/List/List";
import CoinInfo from "../components/Coin/CoinInfo";
import { settingChartData } from "../functions/settingChartData";
import LineChart from "../components/Coin/LineChart/LineChart";
import PriceType from "../components/Coin/PriceType/pricetype";
function ComparePage() {
  const [crypto1, setCrypto1] = useState("bitcoin");
  const [crypto2, setCrypto2] = useState("ethereum");
  const [crypto1Data, setCrypto1Data] = useState({});
  const [crypto2Data, setCrypto2Data] = useState({});
  const [loading, setLoading] = useState(true);
  const [days, setDays] = useState(30);
  const [priceType, setPriceType] = useState("prices");
  const [chartData,setChartData] = useState({});

  async function handleDaysChange(event) {
    setLoading(true);
    setDays(event.target.value);
    const prices1 = await getCoinPrices(crypto1, event.target.value, priceType);
      const prices2 = await getCoinPrices(crypto2, event.target.value, priceType);
      settingChartData(setChartData,prices1,prices2)
      setLoading(false);
  }

  const handlepriceTypeChange = async (event, newType) => {
    setLoading(true);
    setPriceType(event.target.value);
    const prices1 = await getCoinPrices(crypto1, days, event.target.value);
      const prices2 = await getCoinPrices(crypto2, days,event.target.value);
      settingChartData(setChartData,prices1,prices2)
      setLoading(false);
    }



  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    setLoading(true);
    const data1 = await GetCoinData(crypto1);
    const data2 = await GetCoinData(crypto2);
    if (data1) {
    
      coinObject(setCrypto1Data, data1);
    }
    if (data2) {
      
      coinObject(setCrypto2Data, data2);
    }
    if(data1 && data2){
      const prices1 = await getCoinPrices(crypto1, days, priceType);
      const prices2 = await getCoinPrices(crypto2, days, priceType);
      settingChartData(setChartData,prices1,prices2)
      if (prices1.length > 0 && prices2.length > 0) {
        console.log('Both prices fetched',prices1,prices2)
        setLoading(false);
      }    
}
    }
  



  const handleCoinChange = async (event, isCoin2) => {
    setLoading(true);
    if (isCoin2) {
      setCrypto2(event.target.value);
      const data = await GetCoinData(event.target.value);
      coinObject(setCrypto2Data, data);
      const prices1 = await getCoinPrices(crypto1, days, priceType);
    const prices2 = await getCoinPrices(crypto2, days, priceType);
    if (prices1.length > 0 && prices2.length > 0) {
      // settingChartData(setChartData,prices)
      console.log("Both PricesFetched", prices1, prices2);
      setLoading(false);
    }
    } else {
      setCrypto1(event.target.value);
      const data = await GetCoinData(event.target.value);
      coinObject(setCrypto1Data, data);
      const prices1 = await getCoinPrices(crypto1, days, priceType);
      const prices2 = await getCoinPrices(crypto2, days, priceType);
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
          <div className="coins-days-flex">
            <SelectCoins
              crypto1={crypto1}
              crypto2={crypto2}
              handleCoinChange={handleCoinChange} 
            />
            <SelectDays
              days={days}
              handleDaysChange={handleDaysChange}
              noPTag={true}
            />
          </div>
          <div className="grey-wrapper">
            <List coin = {crypto1Data} />
          </div>
          <div className="grey-wrapper">
            <List coin={crypto2Data} />
          </div>
          <div className="grey-wrapper">
          <PriceType
              priceType={priceType}
              handlepriceTypeChange={handlepriceTypeChange}
            />
            <LineChart chartData={chartData}  multiAxis={true} priceType={priceType} />
          </div>
          <CoinInfo heading={crypto1Data.name} desc={crypto1Data.desc} />
          <CoinInfo heading={crypto2Data.name} desc={crypto2Data.desc} />
        </>
      )}
      ;
    </div>
  );
}
export default ComparePage;
