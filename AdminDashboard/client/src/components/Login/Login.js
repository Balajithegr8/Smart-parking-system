import './Login.css';
import Bg from '../Bg';
import FloatingWindow1 from './FloatingWindow1';
function Login({setLoginUser}) {
  return (
    <div>
      
      <Bg />
      <FloatingWindow1 setLoginUser={setLoginUser}/>
    </div>
  );
}

export default Login;
