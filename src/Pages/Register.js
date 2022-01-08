import React,{useState} from 'react'
import classes from '../Styles/Register.module.css'
import CloseIcon from '@mui/icons-material/Close';
import {useNavigate} from 'react-router-dom'
import axios from "axios"


const Register = () => {
    const [name,setName] = useState("");
    const [username,setUsername] = useState("");
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [password2,setPassword2] = useState("");
    const [phone,setPhone] = useState("");
    const [dob,setDob] = useState("");
    const [city,setCity] = useState("");
    const [zip,setZip] = useState("");
    const [country,setCountry] = useState("");
    const [terms,setTerms] = useState("");
    const [error,setError] = useState(false);

    const navigate = useNavigate()

      const handleSubmit = async (e) => {
          e.preventDefault();
          setError(false)
          try{
           const res = await axios.post("http://localhost:5000/api/auth/register",{
                name,username,email,password,password2,phone,dob,city,zip,country,terms
            })
            res.data && navigate("/login")
          }catch(error){
            setError(true)
            // console.log(err)
          }
        //   navigate('/mainpage')
      }

      const handleClick = () => {
          navigate('/')
      }


    return (
        <div>
            <div className={classes.icon}><CloseIcon onClick={handleClick} sx={{fontSize: '40px', color: 'white'}}/></div>
            <div className={classes.registerPage}>
                <h2>Register</h2>

                 <form onSubmit={handleSubmit} className={classes.form}>

                     <div className={classes.inputPrivate}>
                         <h5>Name</h5>
                         <input required
                          type="text"
                           onChange={e => setName(e.target.value)}
                            />
                     </div>

                     
                     <div className={classes.inputPrivate}>
                         <h5>Username</h5>
                         <input
                          required
                           type="text"
                            onChange={e => setUsername(e.target.value)}
                            />
                     </div>

                     
                     <div className={classes.inputPrivate}>
                         <h5>E-mail</h5>
                         <input
                          required
                           type="email"
                            onChange={e => setEmail(e.target.value)}
                            />
                     </div>

                     
                     <div className={classes.inputPrivate}>
                         <h5>Password</h5>
                         <input
                          required
                           type="password"
                            onChange={e => setPassword(e.target.value)}
                             />
                     </div>

                     
                     <div className={classes.inputPrivate}>
                         <h5>Confirm Password</h5>
                         <input
                          required
                           type="password"
                            onChange={e => setPassword2(e.target.value)}
                             />
                     </div>

                     <div className={classes.gridContainer}>

                         <div className={classes.inputPersonal}>
                             <h5>Phone Number</h5>
                             <input
                              required
                               type="number"
                                onChange={e => setPhone(e.target.value)}
                                 />
                         </div>

                         

                         <div className={classes.inputPersonal}>
                             <h5>Date Of Birth</h5>
                             <input
                              required
                               type="date"
                                onChange={e => setDob(e.target.value)}
                                 />
                         </div>


                         <div className={classes.inputPersonal}>
                             <h5>City</h5>
                             <input
                              required
                               type="text"
                                onChange={e => setCity(e.target.value)}
                                 />
                         </div>


                         <div className={classes.inputPersonal}>
                             <h5>Zip Code</h5>
                             <input
                              required
                               type="number"
                               onChange={e => setZip(e.target.value)}
                                
                                />
                         </div>


                     </div>

                     <div className={classes.inputPrivate}>
                         <h5>Country</h5>
                         <input
                          required
                           type="text"
                            onChange={e => setCountry(e.target.value)}
                            />
                     </div>

                     <div className={classes.checkBox}>
                         <input
                         value="terms"
                          required
                           type="checkbox"
                            onChange={e => setTerms(e.target.value)}
                             />
                         <h5>I have read the <span className={classes.span}>Terms and Conditions</span></h5>
                     </div>

                     <button type="submit" className={classes.btn}>Register</button>
                     {error && <span style={{color: "red"}} >There is a problem!</span> }

                 </form>

            </div>
        </div>
    )
}

export default Register
