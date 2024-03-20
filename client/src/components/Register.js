// Register.js
import React, { useState } from 'react'
import AdminRegisterForm from './Admin/AdminRegisterForm'
import UserRegisterForm from './User/userRegisterForm'

const Register = () => {
  const [activeTab, setActiveTab] = useState('admin')
  const [error, setError] = useState('')

  const clearError = () => setError('')

  return (
    <>
      <section className='max-w-[1200px] h-[100vh] mx-auto flex justify-center items-center flex-col'>
        <h1 className='text-[2rem] font-bold my-5 '>Register </h1>
        <div className='flex justify-evenly items-center mt-4'>
          <div
            onClick={() => setActiveTab('admin')}
            className={`border-2 border-solid border-black font-normal text-[14px] p-3 m-2 ${
              activeTab === 'admin' ? 'bg-blue-400' : ''
            }`}
          >
            Register Admin{' '}
          </div>
          <div
            onClick={() => setActiveTab('user')}
            className={`border-2 border-solid border-black font-normal text-[14px] p-3 m-2 ${
              activeTab === 'user' ? 'bg-blue-400' : ''
            }`}
          >
            Register User{' '}
          </div>
        </div>
        {activeTab === 'admin' ? (
          <AdminRegisterForm clearError={clearError} setError={setError} />
        ) : (
          <UserRegisterForm clearError={clearError} setError={setError} />
        )}
        {error && <p>{error}</p>}
      </section>
    </>
  )
}

export default Register
