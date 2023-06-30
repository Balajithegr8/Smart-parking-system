import React, { useState } from "react"
import './FloatingWindow1.css';

import { ReactComponent as Icon } from '../../static/icon.svg';

const FloatingWindow1 = () => {

  const [ user, setUser] = useState({
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

    <div className="floating-window1">
      <div className='content'>
        <h1 className='header'>Login</h1>

        <div className='boxers'>
        <input className="boxes1" type="text" name="id"  placeholder="ID" value={user.id} onChange={ handleChange } ></input>
        </div>

        <div className='boxers2'>
        <input className="boxes1" type="text" name="password"  placeholder="Password" value={user.password} onChange={ handleChange } ></input>
        </div>
        
        
        
        <div className='boxers8'>
          <button className='boxers5'>Login</button>
        </div>

        <div className='boxers9'>
          <p><b>Or Login With</b></p>
        </div>

        <div className='boxers10'>
          <Icon style={{ width: '32px', height: '32px' }} />
        </div>

      </div>  
  
    </div>
  );
}
export default FloatingWindow1;
