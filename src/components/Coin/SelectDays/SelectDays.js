import React, { useState } from "react";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import "./style.css"

export default function SelectDays({days,handleDaysChange,noPTag}) {
  return (
    <div className="select-days">
{!noPTag && <p>Price Change In Last</p>}
      <Select
        sx={{
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
        }}
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={days}
        label="Days"
        onChange={handleDaysChange}
      >
        <MenuItem value={7}>7 Days</MenuItem>
        <MenuItem value={30}>30 Days</MenuItem>
        <MenuItem value={60}>60 Days</MenuItem>
        <MenuItem value={90}>90 Days</MenuItem>
        <MenuItem value={120}>120 Days</MenuItem>
        <MenuItem value={365}>1 Year</MenuItem>
      </Select>
    </div>
  );
}
