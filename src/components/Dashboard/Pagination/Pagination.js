import React from 'react';
import Pagination from '@mui/material/Pagination';
import './style.css';

export default function PaginationComponent({ page, handlePageChange }) {
  return (
    <div className="pagination-component">
      <Pagination
        count={10} // Set the total number of pages
        page={page}
        onChange={(event, value) => handlePageChange(value)} // Pass the page change function
        sx={{
          color: "var(--white)",
          "& .Mui-selected": {
            backgroundColor: "var(--blue) !important",
            color: "#fff !important",
            borderColor: "var(--blue) !important",
          },
          "& .MuiPaginationItem-ellipsis": {
            border: "0px solid var(--grey) !important",
          },
          "& .MuiPaginationItem-text": {
            color: "var(--black)",
            border: "1px solid var(--grey)",
          },
        }}
      />
    </div>
  );
}
