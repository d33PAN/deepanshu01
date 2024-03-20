import React, { useState } from 'react'
import Login from './Login'
import { Link, useNavigate } from 'react-router-dom'
import Admin from './Admin/Admin'
import User from './User/User'

const Home = () => {
  const [loggedInUser, setLoggedInUser] = useState(
    JSON.parse(localStorage.getItem('loggedInUser'))
  )
  const navigate = useNavigate()

  const handleLogin = userData => {
    setLoggedInUser(userData)
    navigate(
      loggedInUser.userType === 'admin' ? '/admin/dashboard' : '/user/dashboard'
    )
  }

  const handleLogout = () => {
    localStorage.removeItem('loggedInUser')
    setLoggedInUser(null)
    navigate('/')
  }

  return (
    <section className='max-w-[1200px] mx-auto'>
      <div className=''>
        <h2 className='font-bold text-[3rem] my-2 text-center'>
          Library Management System
        </h2>
      </div>
      {loggedInUser ? (
        <>
          {loggedInUser.userType === 'admin' && <Admin />}
          {loggedInUser.userType === 'user' && <User />}
          <div className='flex justify-center my-2'>
            <button
              onClick={handleLogout}
              className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
            >
              Logout
            </button>
          </div>
        </>
      ) : (
        <div className='my-2 pt-10'>
          <Login onLogin={handleLogin} />
          <div className='flex justify-start items-center'>
            <span className='px-2'>Don't have an account? </span>
            <div className='h-[40px] w-[100px] flex justify-center items-center bg-blue-400'>
              <Link to='/register'>Register</Link>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

export default Home
