import CloudIcon from "@mui/icons-material/Cloud";
import React from "react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { useGetmobuserQuery } from "../../state/api";
import { useGetmoblocQuery } from "../../state/api";
import { styled } from "@mui/material/styles";
import { Box, Grid, Paper, Tooltip } from "@mui/material";

const Profile = () => {
  const navigate = useNavigate();
    useEffect(() => {
      async function autoLogin() {
        const response = await fetch("https://spark-backend-j18q.onrender.com/autoLogin", {
          method: "GET",
          credentials: "include",
        });
        if (response.status !== 200) {
          navigate("/");
        }
      }
      autoLogin();
    }, [navigate]);
  const email = localStorage.getItem("email");
  const { data, isLoading, error } = useGetmobuserQuery(email);
  const {
    data: data1,
    isLoading: isalsoloading,
    error: error1,
  } = useGetmoblocQuery(email);
  if (isLoading || isalsoloading) {
    return <div>Loading...</div>;
  }

  if (error || error1) {
    return <div>Error fetching data!</div>;
  }

  var licence_no = "No vehicles registered";
  const { name, occupation } = data;
  if (data1) {
    licence_no = data1.licence_no;
  }

  var parked = "True";
  if (licence_no == null || licence_no == "No vehicles registered") {
    parked = "False";
  }
  const useremail = email.split("@")[0];

  const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    color: "#FFFFFF", // Set text color to white
    backgroundColor: "transparent", // Make background transparent
    boxShadow: "none", // Remove shadow
    border: "none", // Remove border
    backgroundImage: "none", // Remove any default overlay
    marginLeft: "1rem",
    textAlign: "center",
    fontSize: "0.9rem",
  }));

  async function Logout() {

    const response = await fetch("https://spark-backend-j18q.onrender.com/logout", {
      method: "GET",
      credentials: "include",
    });

    if (response.status === 200) {
      window.localStorage.removeItem("email");
      window.location.href = "/";
    }
  }

  return (
    <div
      style={{
        height: "100vh",
        color: "white",
        display: "flex",
        flexDirection: "column",
        paddingTop: "10px",
        position: "relative",
      }}
    >
      {/* Background Overlay */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: 0,
        }}
      ></div>

      {/* Header Section */}
      <div
        style={{
          position: "relative",
          textAlign: "left",
          paddingLeft: "25px",
          zIndex: 1,
          marginTop: "20px",
        }}
      >
        <h1 style={{ margin: 0, fontSize: "2rem" }}>Profile</h1>
        <p style={{ margin: "0.5rem 0", fontSize: "0.7rem", color: "white" }}>
          View and Edit your Profile
        </p>
      </div>

      <div>
        <Tooltip title="Check Weather in your Area" arrow>
          <a
            href="https://weather-app-reactjs-nvep.onrender.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <CloudIcon
              style={{
                color: "white",
                position: "absolute",
                right: "25px",
                top: "40px",
                fontSize: "3rem",
                zIndex: 9999,
              }}
            />
          </a>
        </Tooltip>
      </div>

      {/* Profile Card */}
      <div
        style={{
          marginTop: "3rem",
          height: "67%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          zIndex: 1,
        }}
      >
        <div
          style={{
            background: "rgba(0, 0, 0, 0.65)", // Matching card background
            padding: "1.5rem",
            borderRadius: "15px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
            width: "94%",
            textAlign: "center",
            alignContent: "center",
          }}
        >
          {/* Avatar Section */}
          <h2 style={{ fontSize: "1.7rem", fontWeight: "lighter" }}>{name}</h2>
          <div>
            <AccountCircleIcon style={{ fontSize: "6rem" }} />
          </div>

          {/* Profile Info */}
          {/* <div
            style={{
              display: "grid",
              gridTemplateColumns: "auto 1fr", // Two columns: first column auto-sized, second column fills the space
              gap: "1rem", // Spacing between rows and columns
              
              marginTop: "1rem",
              marginLeft: "1rem",
              columnGap: "30vw",
              
            }}
          >
            <span style={{ fontSize: "1rem", fontWeight: "light" }}>Name</span>
            <span style={{ fontSize: "1rem", fontWeight: "light" }}>{name}</span>

            <span style={{ fontSize: "1rem", fontWeight: "light" }}>Email</span>
            <span style={{ fontSize: "1rem", fontWeight: "light" }}>{useremail}</span>

            <span style={{ fontSize: "1rem", fontWeight: "light" }}>Occupation</span>
            <span style={{ fontSize: "1rem", fontWeight: "light" }}>{occupation}</span>

            <span style={{ fontSize: "1rem", fontWeight: "light" }}>Vehicles</span>
            <span style={{ fontSize: "1rem", fontWeight: "light" }}>{licence_no}</span>

            <span style={{ fontSize: "1rem", fontWeight: "light" }}>Parked</span>
            <span style={{ fontSize: "1rem", fontWeight: "light" }}>{parked}</span>
          </div> */}

          <Box sx={{ width: "100%" }}>
            <Grid
              container
              rowSpacing={1}
              columnSpacing={{ xs: 1, sm: 2, md: 3 }}
            >
              <Grid item xs={6}>
                <Item>Name</Item>
              </Grid>
              <Grid item xs={6}>
                <Item>{name}</Item>
              </Grid>
              <Grid item xs={6}>
                <Item>Email</Item>
              </Grid>
              <Grid item xs={6}>
                <Item>{useremail}</Item>
              </Grid>
              <Grid item xs={6}>
                <Item>Occupation</Item>
              </Grid>
              <Grid item xs={6}>
                <Item>{occupation}</Item>
              </Grid>
              <Grid item xs={6}>
                <Item>Vehicles</Item>
              </Grid>
              <Grid item xs={6}>
                <Item>{licence_no}</Item>
              </Grid>
              <Grid item xs={6}>
                <Item>Parked</Item>
              </Grid>
              <Grid item xs={6}>
                <Item>{parked}</Item>
              </Grid>
            </Grid>
          </Box>

          {/* Action Buttons */}
          <div style={{ marginTop: "1rem" }}>
            <button
              style={{
                background: "#b8b9bd",
                border: "none",
                padding: "0.7rem 3rem",
                margin: "0.5rem",
                borderRadius: "10px",
                color: "#000000",
                fontWeight: "bold",
                fontSize: "1rem",
                cursor: "pointer",
                transition: "all 0.3s ease-in-out",
              }}
              onMouseOver={(e) =>
                (e.target.style.transform = "translateY(-2px)")
              }
              onMouseOut={(e) => (e.target.style.transform = "translateY(0)")}
              onClick={() => {
                Logout();
                
                
              }}
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
