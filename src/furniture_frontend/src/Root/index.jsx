import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom';
import Navbar from '../Components/Navbar/index'
import Cart from '../Cart'
import { Utils } from '../Utils';
import Product from '../Components/Features/Products';

const Root = () => {
  return (
    <div>
      <Navbar/>
      <Cart/>
      <Routes>
      <Route path={'/'} element={<Navigate to={'/home'}/>} />
      {
        Utils.map((v)=>(
          <Route path={v.path} element={v.element} />
        ))
      }
      </Routes>
      <Product/>
    </div>
  )
}

export default Root;