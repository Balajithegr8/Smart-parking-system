import React, { useState } from "react"
import './FloatingWindow.css';

import { ReactComponent as Icon } from '../../static/icon.svg';

const FloatingWindow = () => {

  const [ user, setUser] = useState({
    firstname: "",
    lastname:"",
    id:"",
    password: ""
})

const handleChange = e => {
    const { name, value } = e.target
    setUser({
        ...user,
        [name]: value
    })
}  
  
  
  return (

    <div className="floating-window">
      <div className='content'>
        <h1 className='header'>Register</h1>

        <div className='boxers'>
        <input className="boxes" type="text" name="firstname"  placeholder="First Name" value={user.firstname} onChange={ handleChange } ></input>
        </div>

        <div className='boxers1'>
        <input className="boxes" type="text" name="lastname"  placeholder="Last Name" value={user.lastname} onChange={ handleChange } ></input>
        </div>
        
        <div className='boxers2'>
        <input className="boxes1" type="text" name="id"  placeholder="ID" value={user.id} onChange={ handleChange } ></input>
        </div>

        <div className='boxers3'>
        <input className="boxes1" type="text" name="password"  placeholder="Password" value={user.password} onChange={ handleChange } ></input>
        </div>

        <div className='boxers4'>
          <button className='boxers5'>Register</button>
        </div>

        <div className='boxers6'>
          <p><b>Or Login With</b></p>
        </div>

        <div className='boxers7'>
          <Icon style={{ width: '32px', height: '32px' }} />
        </div>

      </div>  
  
    </div>
  );
}
export default FloatingWindow;
