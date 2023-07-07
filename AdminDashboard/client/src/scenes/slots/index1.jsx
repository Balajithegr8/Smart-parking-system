import React from "react";
import { Box, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";

import { useGetSlotsQuery } from "state/api";
import { Header } from "components";

// User
const Slots = () => {
  // theme
  const theme = useTheme();
  // get data
  const { data, isLoading } = useGetSlotsQuery();

  // data columns
  const columns = [
    {
      field: "_id",
      headerName: "ID",
      flex: 1,
    },
    {
      field: "loc",
      headerName: "loc",
      flex: 1,
    },
    {
      field: "slot_no",
      headerName: "slot_no",
      flex: 0.5,
    },
    {
      field: "v_type",
      headerName: "v_type",
      flex: 1,
    },
    
  ];

  return (
    <Box m="1.5rem 2.5rem">
      {/* Header */}
      <Header title="SLOTS" subtitle="List Of Available Location For Parking" />

      {/* Content */}
      <Box
        mt="40px"
        height="75vh"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: theme.palette.background.alt,
            color: theme.palette.secondary[100],
            borderBottom: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: theme.palette.primary.light,
          },
          "& .MuiDataGrid-footerContainer": {
            backgroundColor: theme.palette.primary.light,
            color: theme.palette.secondary[100],
            borderTop: "none",
          },
          "& .MuiDataGrid-toolbarContainer .MuiButtom-text": {
            color: `${theme.palette.secondary[200]} !important`,
          },
        }}
      >
        {/* Grid table */}
        <DataGrid
          loading={isLoading || !data}
          getRowId={(row) => row._id}
          rows={data || []}
          columns={columns}
        />
      </Box>
    </Box>
  );
};

export default Slots;
