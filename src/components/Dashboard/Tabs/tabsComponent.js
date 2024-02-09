import React, { useState } from "react";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import List from "../List/List";
// import { createTheme } from '@mui/material';
import GridComponent from "../Grid/GridComponent";
import { ThemeProvider, createTheme } from "@mui/material";
import "./style.css"; 

export default function TabsComponent({ coins, isWatchlistPage }) {
  const [value, setValue] = useState("grid");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const style = {
    color: "var(--black)",
    width: "50vw",
    fontSize: "1.2rem",
    fontWeight: "600",
    fontFamily: "Inter",
    textTransform: "capitalize",
  };

  const theme = createTheme({
    palette: {
      primary: {
        main: "#3a80e9",  
      },
    },
    // 
  });

  return (
    <ThemeProvider theme={theme}>
      <TabContext value={value}>
        <TabList onChange={handleChange} variant="fullWidth">
          <Tab label="Grid" value="grid" sx={style} />
          <Tab label="List" value="list" sx={style} />
        </TabList>

        <TabPanel value="grid">
          <div className="grid-flex">
            {coins.length > 0 ? (
              coins.map((coin, i) => (
                <GridComponent
                  coin={coin}
                  key={i}
                  isWatchlistPage={isWatchlistPage}
                />
              ))
            ) : (
              <div>No Currencies Found</div>
            )}
          </div>
        </TabPanel>

        <TabPanel value="list">
          {coins.length > 0 ? (
            <table className="list-table">
              {coins.map((coin, i) => (
                <List coin={coin} key={i} isWatchlistPage={isWatchlistPage} />
              ))}
            </table>
          ) : (
            <div className="no-currency">No Currencies Found</div>
          )}
        </TabPanel>
      </TabContext>
    </ThemeProvider>
  );
}
