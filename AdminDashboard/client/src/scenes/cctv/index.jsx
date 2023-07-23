import React from "react";
import {
  Box,
  useMediaQuery,
  Card,
  CardContent,
  Typography,
  List,
  ListItem,
  useTheme,
  Button,
} from "@mui/material";
import { Header, CustomColumnMenu } from "components";
import VideoJS from "./videoJS";
import { DataGrid } from "@mui/x-data-grid";
import { useGetFootageQuery } from "state/api";
import { useGetCCTVCamerasQuery } from "state/api";

const CCTV = () => {
  const isNonMobile = useMediaQuery("(min-width: 1000px)");
  const theme = useTheme();
  const { data: cameras, isLoading: camerasLoading } = useGetCCTVCamerasQuery();
  const { data: footage, isLoading: footageLoading } = useGetFootageQuery();

  const columns = [
    {
      field: "date",
      headerName: "Date",
      flex: 1,
      renderCell: (params) => (
        <Typography style={{ fontSize: "16px" }}>{params.value}</Typography>
      ),
    },
    {
      field: "duration",
      headerName: "Duration",
      flex: 0.5,
      renderCell: (params) => (
        <Typography style={{ fontSize: "16px" }}>{params.value}</Typography>
      ),
    },
  ];

  return (
    <Box m="1.5rem 2.5rem">
      <Header title="CCTV" subtitle="Live and Recorded CCTV footages" />

      <Box display="flex">
        <Box flex="1" mr={2}>
          <VideoJS />
        </Box>

        <Box flex="1">
          <CardWrapper>
            <CardContent>
              <Typography variant="h6" component="div" mb={2}>
                CCTV Cameras
              </Typography>
              {camerasLoading ? (
                <Typography variant="body2" color="textSecondary">
                  Loading cameras...
                </Typography>
              ) : cameras && cameras.length > 0 ? (
                <List>
                  {cameras.map(({ id, name }) => (
                    <ListItem key={id}>
                      <Button component="a" href="#" variant="text" fullWidth>
                        {`${name}`}
                      </Button>
                    </ListItem>
                  ))}
                </List>
              ) : (
                <Typography variant="body2" color="textSecondary">
                  No CCTV cameras found.
                </Typography>
              )}
            </CardContent>
          </CardWrapper>
        </Box>
      </Box>

      <Box mt="40px" height="75vh">
        <DataGrid
          loading={footageLoading}
          getRowId={(row) => row._id}
          rows={footage || []}
          columns={columns}
          components={{
            ColumnMenu: CustomColumnMenu,
          }}
        />
      </Box>
    </Box>
  );
};

const CardWrapper = ({ children }) => (
  <Box
    sx={{
      height: "100%",
      overflow: "auto",
      maxHeight: "500px",
      backgroundColor: "#21262e",
      borderRadius: "0.55rem",
    }}
  >
    {children}
  </Box>
);

export default CCTV;
