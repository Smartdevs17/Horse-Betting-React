import React from 'react'
import classes from '../Styles/ResetPassword.module.css'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import {useNavigate} from 'react-router-dom'

const ResetEmail = () => {
  
    const navigate = useNavigate()

    const handleSubmit = (e) => {
      e.preventDefault()
      navigate('/mainpage')
    }

    const handleBack = () => {
        navigate('/resetemail')
    }
    return (
        <React.Fragment>
            <div className={classes.icon}><ArrowBackIcon onClick={handleBack} sx={{fontSize: '40px', color: 'white'}} /></div>
            <div className={classes.resetPage}>
            <form onSubmit={handleSubmit} className={classes.formPassword}>
                <h1>Reset Password</h1>
                <input required type="password" minlength="8" placeholder="New Password" />
                <input required type="password" minlength="8" placeholder="Confirm Password" />
                <button>Done</button>
            </form>
            </div>
        </React.Fragment>
    )
}

export default ResetEmail
