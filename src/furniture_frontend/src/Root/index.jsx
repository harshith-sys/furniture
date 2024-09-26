import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom';
import Navbar from '../Components/Navbar/index'
import Login from "../Components/Login/Login"
import { Utils } from '../Utils';

const Root = () => {
  return (
    <div>
        <Navbar/>
        <Routes>
        <Route path={'/'} element={<Navigate to={'/home'}/>} />
        <Route path={'/login'} element={<Navigate to={'/Login'}/>} />
        <Route path={'/login'} element={<Login/>} />
        {
          Utils.map((v)=>(
            <Route path={v.path} element={v.element} />
          ))
        }
      </Routes>
    </div>
  )
}

export default Root;