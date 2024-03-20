import React, { useState } from 'react'
import { useNavigate } from 'react-router'

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const navigate = useNavigate()

  const handleLogin = event => {
    event.preventDefault()
    const adminData = JSON.parse(localStorage.getItem('registerAdmin'))
    const userData = JSON.parse(localStorage.getItem('registerUser'))
    if (
      (adminData &&
        adminData.email === username &&
        adminData.password === password) ||
      (userData &&
        userData.email === username &&
        userData.password === password)
    ) {
      localStorage.setItem('loggedInUser', JSON.stringify({ username }))
      navigate(adminData ? '/admin/dashboard' : '/user/dashboard')
    } else {
      setError('Invalid username or password.')
    }
  }

  return (
    <>
      <form
        onSubmit={handleLogin}
        className='bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4'
      >
        <div className='mb-4'>
          <label
            className='block text-gray-700 text-sm font-bold mb-2'
            htmlFor='username'
          >
            Username
          </label>
          <input
            className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
            id='username'
            type='text'
            placeholder='Username'
            value={username}
            onChange={e => setUsername(e.target.value)}
          />
        </div>
        <div className='mb-6'>
          <label
            className='block text-gray-700 text-sm font-bold mb-2'
            htmlFor='password'
          >
            Password
          </label>
          <input
            className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline'
            id='password'
            type='password'
            placeholder='Password'
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
        </div>
        {error && <p>{error}</p>}
        <div className='flex items-center justify-between'>
          <button
            className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
            type='submit'
          >
            Sign In
          </button>
        </div>
      </form>
    </>
  )
}

export default Login
