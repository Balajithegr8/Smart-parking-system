import "./Report.css";
import React from "react";
import { Close } from "@mui/icons-material";
import axios from "axios";
import { useState } from "react";

const Report = ({
  closeReport,
  slot_no,
  v_type,
  loc,
  licence_no,
  entry_time,
  exit_time,
  email,
}) => {
  const [isreport, setIsreport] = useState({
    slot_no: slot_no,
    v_type: v_type,
    loc: loc,
    licence_no: licence_no,
    entry_time: entry_time,
    exit_time: exit_time,
    email: email,
  });

  const handleReason = (e) => {
    setIsreport({ ...isreport, reason: e.target.value });
  };

  const onreport = () => {
    const {
      email,
      slot_no,
      v_type,
      loc,
      licence_no,
      entry_time,
      exit_time,
      reason,
    } = isreport;

    if (!reason.trim()) {
      alert("Reason cannot be empty.");
      return;
    }
    axios
      .post("http://localhost:9000/reports", isreport)
      .then((res) => {
        alert(res.data.message);
        closeReport(false);
      })
      .catch((err) => {
        alert("Error in reporting vehicle");
      });
  };

  return (
    <div className="superoverlay" onClick={() => closeReport(false)}>
      <div className="overlay">
        <div
          onClick={(e) => {
            e.stopPropagation();
          }}
          className="modalContainer"
        >
          <div className="modalRight">
            <p className="closeBtn" onClick={() => closeReport(false)}>
              <Close />
            </p>
            <div className="content">
              <div className="name">
                <h1>Are You Sure You want to Report this Vehicle. </h1>
              </div>
              <br></br>
              <label
                htmlFor="reportReason"
                style={{
                  fontWeight: "bold",
                  display: "block",
                  marginTop: "10px",
                }}
              >
                Reason for Reporting
              </label>
              <textarea
                id="reportReason"
                name="reportReason"
                placeholder="Enter reason here..."
                style={{
                  width: "100%",
                  height: "100px",
                  marginTop: "10px",
                  backgroundColor: "#282c34",
                  padding: "10px",
                  borderRadius: "8px",
                  border: "1px solid #ccc",
                  fontSize: "1rem",
                  color: "#fff",
                  resize: "vertical",
                }}
                value={isreport.reason}
                onChange={handleReason}
              />
            </div>
            <div className="btnContainer">
              <button
                className="btnPrimary"
                onClick={() => {
                  onreport();
                }}
              >
                <span className="bold">YES</span>
              </button>
              <button className="btnOutline" onClick={() => closeReport(false)}>
                <span className="bold">NO</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Report;
