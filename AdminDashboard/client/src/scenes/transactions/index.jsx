import { DataGrid } from "@mui/x-data-grid";
import { Box, useTheme } from "@mui/material";

import { useGetTransactionsQuery } from "state/api";
import { Header} from "components";

// Transactions
const Transactions = () => {
  // theme
  const theme = useTheme();
  // get data
  const { data, isLoading } = useGetTransactionsQuery();

  const modifiedData = data?.map((item) => {
    const createdAt = new Date(item.createdAt);
    return {
      ...item,
      bookingDate: createdAt.toISOString().split("T")[0],
      time: createdAt.toISOString().split("T")[1].split(".")[0],
    };
  });

  // data columns
  const columns = [
    {
      field: "userId",
      headerName: "User ID",
      flex: 1,
    },
    
    {
      field: "products",
      headerName: "# of Bookings",
      flex: 0.5,
      sortable: false,
      renderCell: (params) => params.value.length,
    },
    {
      field: "bookingDate",
      headerName: "Booking Date",
      flex: 1,
    },
    {
      field: "time",
      headerName: "Time",
      flex: 1,
    },
    {
      field: "cost",
      headerName: "Fee Paid",
      flex: 1,
    },
  ];

  return (
    <Box m="1.5rem 2.5rem">
      {/* Header */}
      <Header title="Transactions" subtitle="List of Transactions" />

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
          rows={modifiedData || []}
          columns={columns}
        />
      </Box>
    </Box>
  );
};
 
export default Transactions;
