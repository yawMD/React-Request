import React from 'react'
import LoginScreen from '../../components/Login'

const Login = () => {
  return (
    <>
      <div className="w-screen h-screen bg-white grid grid-rows-4 overflow-y-scroll">
        <div className="loginBanner" />
        <div className="row-span-3 px-5">
          <LoginScreen />
        </div>
      </div>
    </>
  )
}

export default Login
