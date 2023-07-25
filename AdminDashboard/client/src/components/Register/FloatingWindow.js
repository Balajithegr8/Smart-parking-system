import React, { useState } from "react"
import './FloatingWindow.css';

import axios from 'axios';
import { useNavigate} from 'react-router-dom';

const FloatingWindow = () => {

  const history = useNavigate();

  const [ user, setUser] = useState({
    name: "",
    phoneNumber:"",
    email:"",
    password: "",
    occupation:"Faculty",
    role:"admin",
    transaction:[]
})

const handleChange = e => {
    const { name, value } = e.target
    setUser({
        ...user,
        [name]: value
    })
}  

const register = () =>{
  const{name ,email ,password  ,phoneNumber } = user

  if(name && phoneNumber && email && password){
    
    axios.post('http://localhost:9000/Register', user)
    .then((res)=> {
      alert(res.data.message)
      history("/login")
    })
  
  }
  else{
    alert("Invalid inputs");
  }

}  
  
  return (

    <div className="floating-window">
      <div className='content'>

        <div className="head">
          <h1 className='header'>Register</h1>
        </div>
        
        <div className='boxers'>
        <input className="boxes" type="text" name="name"  placeholder="Name" value={user.name} onChange={ handleChange } ></input>
        </div>

        <div className='boxers1'>
        <input className="boxes" type="text" name="phoneNumber"  placeholder="Phone Number" value={user.phoneNumber} onChange={ handleChange } ></input>
        </div>
        
        <div className='boxers2'>
        <input className="boxes1" type="text" name="email"  placeholder="Email ID" value={user.email} onChange={ handleChange } ></input>
        </div>

        <div className='boxers3'>
        <input className="boxes1" type="password" name="password"  placeholder="Password" value={user.password} onChange={ handleChange } ></input>
        </div>

        <div className='boxers4'>
          <button className='boxers5' onClick={register}>Register</button>
        </div>

        <div className='boxers6'>
          <p onClick={()=> history("/login")}>Already a user?</p>
        </div>

        

      </div>  
  
    </div>
  );
}
export default FloatingWindow;
