import React,{ useState,useContext,useRef} from 'react'
import classes from '../Styles/Login.module.css'
import CloseIcon from '@mui/icons-material/Close';
import {useNavigate} from 'react-router-dom'
import { Context } from ".././context/Context";
import axios from "axios"
const Login = () => {

  const navigate = useNavigate()
  const userRef = useRef();
  const passwordRef = useRef();
  const { dispatch, isFetching } = useContext(Context);
  const [error,setError] = useState(false);


   const handleSubmit = async (e) => {
    e.preventDefault();
      dispatch({ type: "LOGIN_START" });
      setError(false);
      try{
        const res = await axios.post("http://localhost:5000/api/auth/login", {
        email: userRef.current.value,
        password: passwordRef.current.value,
      });
      
      dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
      }catch(err){
      dispatch({ type: "LOGIN_FAILURE" });
        setError(true)
      }
  
    // navigate('/mainpage')
   }
   const handleRedirect = () => {
     navigate('/resetemail')
   }

   const handleClose = () => {
     navigate('/')
   }

    return (
      <React.Fragment>
             <div onClick={handleClose} className={classes.icon}><CloseIcon sx={{fontSize: '40px', color: 'white'}}/></div>
        <div className={classes.login}> 
           <form onSubmit={handleSubmit} className={classes.form}>
               <h2>Log In</h2>
               <input
                required type="email"
                 placeholder="Email"
                 ref = {userRef}
                 />
               <input
                type="password"
                 required
                  placeholder="Password"
                  ref = {passwordRef}
                  />
               <button
               disabled = {isFetching}
                type="submit"
                 className={classes.btnLogin}
                 >Log In</button>
                  {error && <span style={{color: "red"}} >Incorrect username or password!</span> }
               <button className={classes.btnRemember}>
                 <div className={classes.tick}>
                 <input  type="checkbox" name="" id="" /><h3>Remember Me</h3>
                 </div>
               </button>
               <p onClick={handleRedirect} style={{color: 'white'}}>Forgot  password?</p>
           </form>
        </div>
      </React.Fragment>
    )
}

export default Login
