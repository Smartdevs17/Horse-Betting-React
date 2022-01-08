import React from 'react'
import classes from '../Styles/Twobuttons.module.css'
import { useNavigate } from 'react-router-dom'

const TwoButtons = () => {
  
     const navigate = useNavigate()

     const handleRedirectToLoginPage = () => {
         navigate('/login')
     }

     const handleRedirectToRegisterPage = () => {
         navigate('/register')
     }

    return (
        <div className={classes.buttons}>
             <div className={classes.twoButtons}>
              <button onClick={handleRedirectToLoginPage} className={classes.btn}>Log In</button>
              <button onClick={handleRedirectToRegisterPage} className={classes.btn}>Register</button>
          </div>
        </div>
    )
}

export default TwoButtons
