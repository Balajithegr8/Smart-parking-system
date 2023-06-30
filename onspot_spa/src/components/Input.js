import React, { useState } from 'react';
import './Input.css';

function Input({ label }) {
  const [user, setUser] = useState({
    box: "",  
  });

  const handleChange = (event) => {
    setUser(event.target.value);
  };

  return (
    <div className="Input-box">
        {console.log("User",user)}
      <input    type="text" 
                name='box' 
                value={user} 
                onChange={handleChange} 
                placeholder={label} 
                 />
    </div>
  );
}

export default Input;
