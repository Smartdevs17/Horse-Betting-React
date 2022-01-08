import React, { useState,useContext } from "react";
import {Routes, Route} from 'react-router-dom'

import HomePage from './Pages/HomePage'
import Login from './Pages/Login'
import Register from './Pages/Register'
import ResetEmail from './Pages/ResetEmail'
import ResetPassword from './Pages/ResetPassword'
import Index from './Pages/Index'
import Details from './Pages/Details'
import {Context} from "./context/Context"
const App = () => {
    const {user} = useContext(Context);
  return (
    <div>
     
      <Routes>
       
        <Route path='/' element={<HomePage />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/register' element={<Register />}></Route>
        <Route path='/resetemail' element={<ResetEmail />}></Route>
        <Route path='/resetpass' element={<ResetPassword />}></Route>
        <Route path='/mainpage' element={user ? <Index /> : <Login /> }></Route>
        <Route path='/details' element={user? <Details /> : <Login /> }></Route>


      </Routes>
     

    </div>
  );
};

export default App;
