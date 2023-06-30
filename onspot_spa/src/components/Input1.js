import React, { useState } from 'react';
import './Input1.css';

function Input1({ label }) {
  const [value, setValue] = useState('');

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <div className="Input-box1">
        
      <input    type="text" 
                value={value} 
                onChange={handleChange} 
                placeholder={label} 
                 />
    </div>
  );
}

export default Input1;
