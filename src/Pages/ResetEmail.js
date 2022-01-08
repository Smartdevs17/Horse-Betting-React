import React from 'react'
import classes from '../Styles/ResetEmail.module.css'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate } from 'react-router-dom'

const ResetEmail = () => {
  
    const navigate = useNavigate()

    const handleSubmit = (e) => {
      e.preventDefault();
       navigate('/resetpass')
    }

    const handleBack = () => {
        navigate('/login')
    }


    return (
        <React.Fragment>
            <div className={classes.icon}><ArrowBackIcon onClick={handleBack} sx={{fontSize: '40px', color: 'white'}} /></div>
            <div className={classes.resetPage}>
            <form onSubmit={handleSubmit} className={classes.form}>
                <h1>Reset Password</h1>
                <input required type="email" placeholder="Email" />
                <button>Request Reset</button>
            </form>
            </div>
        </React.Fragment>
    )
}

export default ResetEmail
