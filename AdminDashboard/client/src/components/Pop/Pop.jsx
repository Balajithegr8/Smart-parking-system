import "./Pop.css";
import React from "react";
import { Close } from "@mui/icons-material";
import axios from "axios";
import { useState } from "react";

const Pop = ({
  closePop,
  slot_no,
  v_type,
  loc,
  email,
  exit_time,
  entry_time,
  licence_no,
}) => {
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

  const onrelease = () => {
    const { slot_no, loc, booked = "no", name, licence_no, email } = isrelease;

    axios
      .post("https://spark-backend-j18q.onrender.com/slots", isrelease)
      .then((res) => {
        alert(res.data.message);
        closePop(false);
      });
  };

  //reloader
  const refresh = () => {
    window.location.reload(true);
    window.location.reload(true);
    window.location.reload(true);
  };

  return (
    <div className="superoverlay" onClick={() => closePop(false)}>
      <div className="overlay">
        <div
          onClick={(e) => {
            e.stopPropagation();
          }}
          className="modalContainer"
        >
          <div className="modalRight">
            <p className="closeBtn" onClick={() => closePop(false)}>
              <Close />
            </p>
            <div className="content">
              <div className="name">
                <h1>Are You Sure You want to release </h1>
              </div>

              <br />
              <h1>Slot {slot_no}</h1>
              <h1>For {v_type}</h1>
            </div>
            <div className="btnContainer">
              <button
                className="btnPrimary"
                onClick={() => {
                  onrelease();
                  refresh();
                }}
              >
                <span className="bold">YES</span>
              </button>
              <button className="btnOutline" onClick={() => closePop(false)}>
                <span className="bold">NO</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pop;
