import "./Pop.css"
import React from 'react';
import { Close } from "@mui/icons-material";
import axios from 'axios';
import { useState } from "react";

const Pop = ({ closePop ,slot_no,v_type,loc}) => {

  const [ isrelease, setIsrelease] = useState({
    name: "",
    licence_no:"",
    slot_no:slot_no,
    v_type :v_type,
    loc: loc,
    booked:"no",
})

  const onrelease= () =>{
    const{slot_no,loc,booked="no",name,licence_no} = isrelease
      
      axios.post('http://localhost:9000/slots', isrelease)
      .then((res)=> {
        alert(res.data.message)
        closePop(false)
      })

  }

  //reloader
  const refresh = () =>{ 
    window.location.reload(true)
    window.location.reload(true)
    window.location.reload(true)
  }

  return (
    <div className="superoverlay"  onClick={()=>closePop(false)}>
    <div className='overlay'>
      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
        className='modalContainer'
      >
        <div className='modalRight'>
          <p className='closeBtn' onClick={()=>closePop(false)}>
          <Close/>
          </p>
          <div className='content'>

              <div className='name'>
                <h1>Are You Sure You want to release </h1>
              </div>
                          
                <br/>
                <h1>Slot {slot_no}</h1>
                <h1>For {v_type}</h1>
            
          </div>
          <div className='btnContainer'>
            <button className='btnPrimary' onClick={() => { onrelease();  refresh();}}>
              <span className='bold' >YES</span>
            </button>
            <button className='btnOutline' onClick={()=>closePop(false)} >
              <span className='bold'>NO</span>
            </button>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Pop;
