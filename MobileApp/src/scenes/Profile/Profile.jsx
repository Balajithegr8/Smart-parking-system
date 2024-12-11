import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import React from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { useGetmobuserQuery } from "../../state/api";

const Profile = () => {
  const email = localStorage.getItem("email");
  const { data, isLoading, error } = useGetmobuserQuery(email);
  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error fetching data!</div>;
  }
  
  const {name,occupation,parked,vehicle}=data;
  const useremail = email.split('@')[0];

  return (
    <div
      style={{
        height: "100vh",
        color: "white",
        display: "flex",
        flexDirection: "column",
        padding: "1rem",
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
          background: "rgba(0, 0, 0, 0.45)", // Light black overlay
          zIndex: 0,
        }}
      ></div>

      {/* Header Section */}
      <div
        style={{
          position: "relative",
          textAlign: "left",
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
        <NotificationsNoneOutlinedIcon
          style={{
            color: "white",
            position: "absolute",
            right: "25px",
            top: "40px",
            fontSize: "3rem",
          }}
        />
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
            background: "rgba(0, 0, 0, 0.4)", // Matching card background
            padding: "1.5rem",
            borderRadius: "15px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
            width: "94%",
            textAlign: "center",
            alignContent: "center",
          }}
        >
          {/* Avatar Section */}
          <h2 style={{ fontSize: "1.7rem", fontWeight: "lighter" }}>
            {name}
          </h2>
          <div>
            <AccountCircleIcon style={{ fontSize: "6rem" }} />
          </div>

          {/* Profile Info */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "auto 1fr", // Two columns: first column auto-sized, second column fills the space
              gap: "1rem", // Spacing between rows and columns
              textAlign: "left",
              marginTop: "1rem",
              marginLeft: "1rem",
              columnGap: "30vw",
              justifyItems: "flex-start",
              textAlign: "left",
            }}
          >
            <span style={{ fontSize: "1rem", fontWeight: "light" }}>Name</span>
            <span style={{ fontSize: "1rem", fontWeight: "light" }}>{name}</span>

            <span style={{ fontSize: "1rem", fontWeight: "light" }}>Email</span>
            <span style={{ fontSize: "1rem", fontWeight: "light" }}>{useremail}</span>

            <span style={{ fontSize: "1rem", fontWeight: "light" }}>Occupation</span>
            <span style={{ fontSize: "1rem", fontWeight: "light" }}>{occupation}</span>

            <span style={{ fontSize: "1rem", fontWeight: "light" }}>Vehicles</span>
            <span style={{ fontSize: "1rem", fontWeight: "light" }}>{vehicle}</span>

            <span style={{ fontSize: "1rem", fontWeight: "light" }}>Parked</span>
            <span style={{ fontSize: "1rem", fontWeight: "light" }}>{String(parked)}</span>
          </div>

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
            >
              Edit Profile
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
