import { Box, Typography, Button } from "@mui/material";
import { useMediaQuery } from "@mui/material";
const BookingItem = ({ booking }) => {
  const { name, time, status, vehicle } = booking;
  const isNonMobile = useMediaQuery("(min-width: 922px)");
  return (
    <Box
      sx={{
        border: "1px solid rgba(255,255,255,0.2)",
        width: isNonMobile ? "40vw" : "80vw",
        padding: "0.5em",
        borderLeftColor: status === "APPROVED" ? "#8F5205" : "red",
        borderLeftWidth: "5px",
        marginBottom: "0.5em",
        borderRadius: "8px",
        display: "grid",
        gridTemplateRows: "1fr 1fr auto",
        backgroundColor: "rgba(10,0,0,0.2)",
        gap: "0.5em",
      }}
    >
      <Typography
        variant="body1"
        sx={{ fontSize: "0.9rem", fontWeight: "bold" }}
      >
        {name}
      </Typography>
      <Typography
        variant="body2"
        sx={{ fontSize: "0.8rem", color: "#998F8FFF" }}
      >
        {time}
      </Typography>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="left"
        sx={{ flexWrap: "nowrap" }}
      >
        <Typography
          variant="body2"
          sx={{
            fontSize: "0.8rem",
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
            borderRadius: "18px",
            width: "8em",
            textAlign: "center",
            marginRight: "0.5em",
            fontWeight: "bold",
            backgroundColor:
              status === "APPROVED" ? "#03B600FF" : "rgba(255,0,0,0.9)",
          }}
        >
          {status}
        </Typography>
        <Typography
          variant="body2"
          sx={{
            fontSize: "0.8rem",
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
            marginRight: "0.5em",
            fontWeight: "bold",
            borderRadius: "18px",
            width: "8em",
            textAlign: "center",
            backgroundColor: "rgba(143, 82, 5, 0.9)",
          }}
        >
          {vehicle}
        </Typography>
        {status === "APPROVED" && (
          <Button
            variant="contained"
            size="small"
            sx={{
              color: "white",
              width: "8em",
              backgroundColor: "#8F5205",
            }}
          >
            Release
          </Button>
        )}
      </Box>
    </Box>
  );
};

export default BookingItem;
