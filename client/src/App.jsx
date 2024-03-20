import { useState } from 'react'
import './App.css'
import Login from './components/auth/Login'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import Home from './components/home/Home'
import SignupForm from './components/auth/Signup'
import AddProductForm from './components/product/AddProduct'

function App() {


  return (

    <>
      <BrowserRouter>
      <Routes>
    <Route path='/' element = {<Home/>}/>
    <Route path = "/admin-login" element = {<Login/>}/>
    <Route path = "/vendor-login" element = {<Login/>}/>
    <Route path = "/user-login" element = {<Login/>}/>
    <Route path = "/auth/register" element = {<SignupForm/>}/>
    <Route path='/add-product' element = {<AddProductForm/>}/>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
