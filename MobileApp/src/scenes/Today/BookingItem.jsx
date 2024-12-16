import { Box, Typography, Button } from "@mui/material";
import { useMediaQuery } from "@mui/material";
import { useState } from "react";
import { ToastContainer } from "react-toastify";
import axios from "axios";
import CustomToast from "../../CustomToast";
const BookingItem = ({ booking }) => {
  const [toastMessage, setToastMessage] = useState(""); // Message for toast
  const [toastType, setToastType] = useState(""); // Type of toast
  const email = localStorage.getItem("email");
  const {
    name: loc,
    status,
    vehicle: licence_no,
    slot_no,
    v_type,
    entry_time,
    exit_time,
  } = booking;
  const [isrelease, setIsrelease] = useState({
    licence_no: licence_no,
    slot_no: slot_no,
    v_type: v_type,
    loc: loc,
    booked: "no",
    email: email,
    entry_time: entry_time,
    exit_time: exit_time,
  });

  const refresh = () => {
    window.location.reload(true);
    window.location.reload(true);
    window.location.reload(true);
  };

  const onrelease = () => {
    const { slot_no, loc, booked = "no", name, licence_no, email } = isrelease;

    axios.post("http://localhost:9000/slots", isrelease).then((res) => {
      setToastMessage(`🎉 Successfully Released slot`);
      setToastType("success");
    });
  };
  const isNonMobile = useMediaQuery("(min-width: 922px)");
  return (
    <div>
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
          {loc} {slot_no} {v_type}
        </Typography>
        <Typography
          variant="body2"
          sx={{ fontSize: "0.8rem", color: "#FFFFFFF" }}
        >
          {entry_time} - {exit_time}
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
            {licence_no}
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
              onClick={() => {
                onrelease();
                refresh();
              }}
            >
              Release
            </Button>
          )}
        </Box>
      </Box>
      <CustomToast toastMessage={toastMessage} toastType={toastType} />
      <ToastContainer />
    </div>
  );
};

export default BookingItem;
