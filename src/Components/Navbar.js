import React, {useState,useContext} from 'react'
import { Link } from "react-router-dom";
import classes from '../Styles/Navbar.module.css'
import image from '../Assets/logo.png' 
import MenuIcon from '@mui/icons-material/Menu';
import image2 from '../Assets/book.png'
import { Context} from "../context/Context";


const Navbar = (props) => {

     const { user, dispatch } = useContext(Context);

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
  };

   const content = props.text === 'HomePage'
   const username = props.text === 'details'
   


    const [imageMenu, setimageMenu] = useState(false);
    const [hamburger, sethamburger] = useState(false);

    const handleShow = () => {
      setimageMenu(!imageMenu)
    }

    const handleHamburger = () => {
      sethamburger(!hamburger)
    }

    return (
       <React.Fragment>
           <nav className={classes.mainNav}>

               <div className={classes.logo}><img src={image} alt="" /></div>

            {!content &&   <div className={classes.checkBalance}>
                   <span>Bal: 00</span>
                    {!username &&<button className={classes.btn}>Deposit</button>}
                    {username && <p>Anmol Saini</p>}
                   </div>}

               {!content &&  <div className={classes.profile}>
                    <img onClick={handleShow} src={image2} alt="" />
                </div>}

                
                    <div className={imageMenu ? 'profileMenu ' : 'profileMenu none'}>
                        <ul>
                            <li>Deposit Funds</li>
                            <li>Request Withdrawl</li>
                            <li>Account Statement</li>
                            <li>Change Password</li>
                            <li>Logout</li>
                        </ul>
                    </div>

                  <div className={classes.icon}>
                   <MenuIcon onClick={handleHamburger} sx={{fontSize: '40px', color: 'black'}} />
                   </div>


               
               <div className={hamburger ? 'hamburgerMenu ' : 'hamburgerMenu remove'}>
                 {content &&    <ul>
                           {/* <li>Login</li> */}
                           <li><Link className="link" to="/login">
                                Login
                            </Link></li>
                           {/* <li>Register</li> */}
                            <li><Link className="link" to="/register">
                                REGISTER
                            </Link></li>
                           <li>Live Races</li>
                  </ul>}
                 {!content &&    <ul>
                           <li>Deposit Funds</li>
                           <li>Request Withdrawl</li>
                           <li>Account Statement</li>
                           <li>Change Password</li>
                           <li  onClick={handleLogout}>
                                {user && "LOGOUT"}
                            </li>
                           {/* <li>Logout</li> */}
                  </ul>}
               </div>

           </nav>
       </React.Fragment>
    )
}

export default Navbar
