import "./Modal.css"
import React from 'react';
import { Close } from "@mui/icons-material";

const Modal = ({ closeModal ,slot_no,v_type}) => {
  return (
    <div className="superoverlay"  onClick={()=>closeModal(false)}>
    <div className='overlay'>
      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
        className='modalContainer'
      >
        <div className='modalRight'>
          <p className='closeBtn' onClick={()=>closeModal(false)}>
          <Close/>
          </p>
          <div className='content'>
              <div className='name'>
                <input className="namer" type="text" name="name"  placeholder=" Enter Guest Name"  />
              </div>
              <br/>
              <div className='licence'>
                <input className="licencer" type="text" name=""  placeholder=" Enter Licence Number"  />
              </div>
            <br/>
            <h1>Book Slot {slot_no}</h1>
            <h1>For {v_type}</h1>
            
          </div>
          <div className='btnContainer'>
            <button className='btnPrimary'>
              <span className='bold'>YES</span>
            </button>
            <button className='btnOutline' onClick={()=>closeModal(false)} >
              <span className='bold'>NO</span>
            </button>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Modal;
