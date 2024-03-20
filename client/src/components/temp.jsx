import React, { useState } from 'react'

const Temp = () => {
  const [userType, setUserType] = useState('')

  const handleLogin = type => {
    setUserType(type)
  }

  const handleLogout = () => {
    setUserType('')
  }

  return (
    <div className='container mx-auto'>
      <h1 className='text-3xl font-bold mb-4'>Library Management System</h1>

      <div className=''></div>

      {/* Login Page */}
      {userType === '' && (
        <div>
          <button onClick={() => handleLogin('Admin')}>Admin Login</button>
          <button onClick={() => handleLogin('Vendor')}>Vendor Login</button>
          <button onClick={() => handleLogin('User')}>User Login</button>
        </div>
      )}

      {/* Admin Dashboard */}
      {userType === 'Admin' && (
        <div>
          <h2>Admin Dashboard</h2>
          <button onClick={handleLogout}>Logout</button>
          {/* Add maintenance menu and functionality */}
        </div>
      )}

      {/* Vendor Main Page */}
      {userType === 'Vendor' && (
        <div>
          <h2>Vendor Main Page</h2>
          <button onClick={handleLogout}>Logout</button>
          {/* Add vendor-specific components */}
        </div>
      )}

      {/* User Main Page */}
      {userType === 'User' && (
        <div>
          <h2>User Main Page</h2>
          <button onClick={handleLogout}>Logout</button>
          {/* Add user-specific components */}
        </div>
      )}

      {/* Membership Form */}
      {(userType === 'Admin' || userType === 'User') && (
        <div>
          <h2>Membership Form</h2>
          {/* Add membership form */}
        </div>
      )}
    </div>
  )
}

export default Temp
