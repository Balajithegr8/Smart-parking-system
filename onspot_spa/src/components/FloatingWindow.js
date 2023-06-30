import React from 'react';
import './FloatingWindow.css';
import { ReactComponent as Icon } from '../static/icon.svg';
import Input from './Input';
import Input1 from './Input1';

function FloatingWindow() {
  return (
    <div className="floating-window">

      <div className='content'>
        <h1 className='header'>Register</h1>

        <div className='boxers'>
          <Input label="First Name" /> 
        </div>

        <div className='boxers1'>
          <Input label="Last Name" />
        </div>
        
        <div className='boxers2'>
          <Input1 label="ID" />
        </div>

        <div className='boxers3'>
          <Input1 label="Password" />
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
