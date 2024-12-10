import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import React from "react";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const Profile = () => {
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
      <div style={{ position: "relative", textAlign: "left", zIndex: 1 ,marginTop:"20px" }}>
        <h1 style={{ margin: 0, fontSize: "2rem" }}>
          Profile
        </h1>
        <p style={{ margin: "0.5rem 0", fontSize: "0.7rem" ,color:"white"}}>
          View and Edit your Profile
        </p>
      </div>

      <div>
        <NotificationsNoneOutlinedIcon style={{color:"white",position:"absolute",right:"25px",top:"40px", fontSize:"3rem"}}/>
      </div>

      {/* Profile Card */}
      <div
        style={{
          marginTop: "6rem",
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
          }}
        >
          {/* Avatar Section */}
          <h2 style={{ fontSize: "1.5rem" }}>Balaji P</h2>
          <div>
            <AccountCircleIcon style={{ fontSize: "6rem" }} />
          </div>

          {/* Profile Info */}
          <div style={{ textAlign: "left", marginTop: "1rem" }}>
            <p style={{ margin: "0.5rem 0", fontSize: "0.9rem" }}>
              <span style={{ fontWeight: "bold" }}>Name:</span> Balaji P
            </p>
            <p style={{ margin: "0.5rem 0", fontSize: "0.9rem" }}>
              <span style={{ fontWeight: "bold" }}>Email:</span>{" "}
              br8330@srmist.edu.in
            </p>
            <p style={{ margin: "0.5rem 0", fontSize: "0.9rem" }}>
              <span style={{ fontWeight: "bold" }}>Office:</span> Paid Office
            </p>
            <p style={{ margin: "0.5rem 0", fontSize: "0.9rem" }}>
              <span style={{ fontWeight: "bold" }}>Vehicles:</span> YHTHG
              (small)
            </p>
            <p style={{ margin: "0.5rem 0", fontSize: "0.9rem" }}>
              <span style={{ fontWeight: "bold" }}>Wallet Balance:</span> 300
            </p>
          </div>

          {/* Action Buttons */}
          <div style={{ marginTop: "1rem" }}>
            
            <button
              style={{
                background: "#b8b9bd",
                border: "none",
                padding: "0.7rem 1rem",
                margin: "0.5rem",
                borderRadius: "5px",
                color: "#000000",
                fontWeight: "bold",
                fontSize: "0.9rem",
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
