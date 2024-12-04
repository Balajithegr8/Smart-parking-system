import React, { useState } from "react"
import './FloatingWindow.css';

import axios from 'axios';
import { useNavigate} from 'react-router-dom';

const FloatingWindow = () => {

  const history = useNavigate();

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

const register = () =>{
  const{firstname ,lastname ,id ,password } = user

  if(firstname && lastname && id && password){
    
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
